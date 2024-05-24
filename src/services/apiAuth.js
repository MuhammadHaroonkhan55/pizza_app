import supabase from './supabase';
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function signup({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw new Error('Account already exists with this email');
  return data;
}
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}
