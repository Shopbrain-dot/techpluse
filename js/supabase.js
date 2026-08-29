"use strict";

const SUPABASE_URL =
    "https://uadixswmymsturrephhq.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_2UO1rGLY4h4XQ7OazgElcw_opq_ZWUX";

try {

    if (!window.supabase) {

        throw new Error(
            "Supabase library did not load before js/supabase.js."
        );

    }

    window.supabaseClient =
        window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_KEY
        );

    console.log(
        "Supabase client created successfully."
    );

} catch (error) {

    window.supabaseInitError =
        error.message ||
        "Unknown Supabase initialization error.";

    console.error(
        "Supabase initialization failed:",
        error
    );

}