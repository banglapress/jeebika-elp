import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">E-Learning Platform</Link>
        </div>
        <div className="space-x-4">
          <Link href="/login">Login</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/admin">Admin</Link>
        </div>
      </nav>
    </header>
  );
}
