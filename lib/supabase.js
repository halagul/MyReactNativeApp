import { AppState } from 'react-native';
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fxeprgzqkncvmcsslfba.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4ZXByZ3pxa25jdm1jc3NsZmJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxODAxNzIsImV4cCI6MjA0OTc1NjE3Mn0.LZ38ZBheljutTOe01gD8F-ZpYdw4M5opziZjYca1sBo'; // Replace with your Supabase Key

// Create the Supabase client with configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage, // Use AsyncStorage for session persistence
    autoRefreshToken: true, // Automatically refresh expired tokens
    persistSession: true, // Persist user session
  },
});

// Manage the session refresh lifecycle with AppState listener
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
