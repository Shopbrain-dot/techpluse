const SUPABASE_URL =
    "https://uadixswmymsturrephhq.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_2UO1rGLY4h4XQ7OazgElcw_opq_ZWUX";

if (!window.supabase) {
    console.error("Supabase library was not loaded.");
} else {

    const supabaseClient =
        window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_KEY
        );

    window.supabaseClient = supabaseClient;
}