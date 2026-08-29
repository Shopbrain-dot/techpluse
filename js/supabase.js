// TechPulse Supabase configuration

(function () {
    "use strict";

    const SUPABASE_URL =
        "https://uadixswmymsturrephhq.supabase.co";

    const SUPABASE_KEY =
        "sb_publishable_2UO1rGLY4h4XQ7OazgElcw_opq_ZWUX";

    // Make sure Supabase CDN loaded
    if (!window.supabase) {
        console.error(
            "Supabase CDN did not load."
        );
        return;
    }

    try {

        window.supabaseClient =
            window.supabase.createClient(
                SUPABASE_URL,
                SUPABASE_KEY
            );

        console.log(
            "TechPulse Supabase client created successfully."
        );

    } catch (error) {

        console.error(
            "Failed to create Supabase client:",
            error
        );

    }

})();