import React, { useState } from 'react';
import { login, signup } from '../../services/apiAuth';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError(null); // Reset error state
      if (isLogin) {
        await login({ email, password });
      } else {
        await signup({ email, password });
      }
      // Clear email and password fields on successful login/signup
      setEmail('');
      setPassword('');
    } catch (error) {
      setError(error.message); // Set error state if authentication fails
      console.error(`${isLogin ? 'sign in' : 'sign up'} failed:`, error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 max-w-md rounded-lg bg-white p-8 shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="new-email"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>

      {error && (
        <div className="mb-4 text-red-500">
          <p>{error}</p>
        </div>
      )}

      <div className="mb-4">
        <button
          type="submit"
          className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          {isLogin ? 'sign in' : 'Sign up'}
        </button>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 text-blue-500 hover:underline focus:outline-none"
          >
            {isLogin ? 'Sign up' : 'sign in'}
          </button>
        </p>
      </div>
    </form>
  );
}

export default AuthForm;
