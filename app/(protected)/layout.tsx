import Link from 'next/link';
import { Navbar } from './_components/navbar';

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen py-10 w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-700">
      <h1 className="text-4xl font-bold text-white">🔐 Auth</h1>
      <Navbar />
      {children}
      <p className="text-white text-xl">
        created by{' '}
        <Link
          href="https://www.linkedin.com/in/krishnakant-singh-ab391a1b1/"
          className="underline text-gray-200 hover:text-gray-300"
        >
          @krishnakant Singh
        </Link>
      </p>
    </div>
  );
};

export default ProtectedLayout;
