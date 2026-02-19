import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';


export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  const navigate = useNavigate();

  const getCsrfCookie = async () => {
    try {
      await fetch(`${API_BASE_URL}/sanctum/csrf-cookie`, {
        method: 'POST',
        credentials: 'include',           // Very important — allows cookies
      });
    } catch (err) {
      console.error('CSRF fetch failed:', err);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setFieldErrors({});

    try {
     //1 Initialize CSRF protection (sets XSRF-TOKEN cookie)
      // await getCsrfCookie();

      // 2. Send registration request
      const response = await fetch(`${API_BASE_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        // credentials: 'include',           // Allows cookies (session + XSRF-TOKEN)
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
         
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 422) {
          // Laravel validation errors
          setFieldErrors(data.errors || {});
          throw new Error(data.message || 'Please check the form fields.');
        }
        throw new Error(data.message || 'Registration failed');
      }

      else {
        navigate('/login', { replace: true });
      }

    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialRedirect = (provider) => {
    window.location.href = `${API_BASE_URL}/auth/${provider}/redirect`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`block w-full rounded-lg border px-3 py-2.5 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                fieldErrors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John Doe"
            />
            {fieldErrors.name && (
              <p className="mt-1 text-sm text-red-600">{fieldErrors.name[0]}</p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`block w-full rounded-lg border px-3 py-2.5 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                fieldErrors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="you@example.com"
            />
            {fieldErrors.email && (
              <p className="mt-1 text-sm text-red-600">{fieldErrors.email[0]}</p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`block w-full rounded-lg border px-3 py-2.5 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                fieldErrors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="••••••••"
            />
            {fieldErrors.password && (
              <p className="mt-1 text-sm text-red-600">{fieldErrors.password[0]}</p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
              Confirm password
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              autoComplete="new-password"
              required
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className={`block w-full rounded-lg border px-3 py-2.5 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                fieldErrors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-gray-50 px-2 text-gray-500">or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <button
            type="button"
            onClick={() => handleSocialRedirect('google')}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
          >
            {/* Google SVG remains unchanged */}
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.51h5.84c-.25 1.31-.98 2.42-2.07 3.16v2.63h3.35c1.96-1.81 3.09-4.47 3.09-7.8z"
                fill="#4285F4"
              />
              {/* ... rest of Google paths ... */}
            </svg>
            Google
          </button>

          {/* Apple & Microsoft buttons unchanged */}
          {/* ... keep them as they are ... */}
        </div>
      </div>
    </div>
  );
}