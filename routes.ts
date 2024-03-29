/**
 * An Array of routes that are used for public
 * these routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ['/', '/auth/new-verification'];

/**
 * An Array of routes that are used for authentication
 * these routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/error',
  '/auth/reset',
  '/auth/new-password',
];

/**
 * The Prefix for API Auth Routes
 * Routes that start with /api/auth with this prefix are used for API Authentication process
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The Default redirect path after login.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings';
