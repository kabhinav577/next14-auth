import NextAuth, { DefaultSession } from 'next-auth';

export type ExtendedUser = DefaultSession['user'] & {
  role: 'USER' | 'ADMIN';
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}
