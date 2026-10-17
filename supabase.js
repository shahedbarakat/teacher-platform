const SUPABASE_URL = "https://uooonpqxdhnzkinzjmwa.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_w6mb6Z2VU1LYGClhKKd2Hg_0JMKZPwB";
window.supabaseConfig = {
    url: SUPABASE_URL,
    key: SUPABASE_PUBLISHABLE_KEY
};
window.supabaseClient = window.supabase.createClient(
    window.supabaseConfig.url,
    window.supabaseConfig.key
);
