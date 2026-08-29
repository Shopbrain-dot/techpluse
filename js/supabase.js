(function () {
    "use strict";

    const SUPABASE_URL =
        "https://uadixswmymsturrephhq.supabase.co";

    const SUPABASE_KEY =
        "sb_publishable_2UO1rGLY4h4XQ7OazgElcw_opq_ZWUX";

    function initializeSupabase() {

        if (!window.supabase) {
            console.error(
                "Supabase library has not loaded yet."
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
                "Supabase client creation failed:",
                error
            );

        }
    }

    if (window.supabase) {

        initializeSupabase();

    } else {

        window.addEventListener(
            "load",
            initializeSupabase
        );

    }

})();