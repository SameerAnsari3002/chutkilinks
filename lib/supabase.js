import { supabase } from "./supabaseClient.js";

export const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) console.error('Error signing up:', error.message);
  return { user, error };
};
