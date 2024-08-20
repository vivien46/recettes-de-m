import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 p-4 text-white">
        <ul className="flex space-x-4">
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/recipes">Recettes</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <main className="flex-grow justify-between">{children}</main>

      <div className="bg-gray-800 p-4 text-white text-center">
        <footer>
          &copy; {new Date().getFullYear()} Recettes de cuisine - Réalisé avec Next.js et Tailwind CSS
        </footer>
      </div>
    </div>
  );
};

export default Layout;
