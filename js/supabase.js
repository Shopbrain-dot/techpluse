const SUPABASE_URL = "https://uadixswmymsturrephhq.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_2UO1rGLY4h4XQ7OazgElcw_opq_ZWUX";

if (!window.supabase) {
    window.supabaseInitError =
        "Supabase library was not loaded.";
    console.error(window.supabaseInitError);
} else {
    try {
        window.supabaseClient =
            window.supabase.createClient(
                SUPABASE_URL,
                SUPABASE_KEY
            );

        console.log(
            "Supabase client created:",
            !!window.supabaseClient
        );

    } catch (error) {

        window.supabaseInitError =
            error.message;

        console.error(
            "Supabase client creation failed:",
            error
        );
    }
}