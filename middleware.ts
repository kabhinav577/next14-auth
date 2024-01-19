import NextAuth from 'next-auth';

import authCofig from './auth.config';

const { auth } = NextAuth(authCofig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log('Route: ', req.nextUrl.pathname);
  console.log('isLoggedIn: ', isLoggedIn);
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
