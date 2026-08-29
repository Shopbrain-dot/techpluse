// TechPulse Supabase Configuration

const SUPABASE_URL =
    "https://uadixswmymsturrephhq.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_2UO1rGLY4h4XQ7OazgElcw_opq_ZWUX";

if (!window.supabase) {
    console.error(
        "Supabase library was not loaded."
    );
} else {
    window.supabaseClient =
        window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_KEY
        );

    console.log(
        "TechPulse Supabase client created successfully."
    );
}