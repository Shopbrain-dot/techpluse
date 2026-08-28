const SUPABASE_URL = "https://uadixswmymsturrephhq.supabase.co";

const SUPABASE_KEY = "sb_publishable_2UO1rGLY4h4XQ7OazgElcw_opq_ZWUX";

window.supabaseClient = null;

function initializeSupabase() {
    if (!window.supabase) {
        console.error("Supabase library is not loaded.");
        return;
    }

    window.supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );

    console.log("Supabase client created successfully.");
}

initializeSupabase();