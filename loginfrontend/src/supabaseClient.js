import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Supabase Project Credentials
// (The base URL is automatically normalized if '/rest/v1/' is attached)
const SUPABASE_URL = "https://gelhmybrvpvvpmisgatz.supabase.co";
const SUPABASE_PUBLIC_KEY = "sb_publishable_cr6APOHuX3dyr8k7HyQTtA_i2NR93WP";

// Normalize URL to base domain in case REST endpoint path was provided
const sanitizedUrl = SUPABASE_URL.replace(/\/rest\/v1\/?$/, '');

// Create and export Supabase client instance
export const supabase = createClient(sanitizedUrl, SUPABASE_PUBLIC_KEY);

// Attach to window object for convenient browser console/vanilla JS access
if (typeof window !== 'undefined') {
  window.supabase = supabase;
}

export default supabase;
