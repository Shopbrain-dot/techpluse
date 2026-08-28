const SUPABASE_URL = "https://uadixswmymsturrephhq.supabase.co";

const SUPABASE_KEY = "sb_publishable_2UO1rGLY4h4XQ7OazgElcw_opq_ZWUX";

if (typeof window.supabase === "undefined") {
    console.error("Supabase library has not loaded.");
} else {
    window.supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );
}