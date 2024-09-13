import Link from "next/link";
import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLock } from "react-icons/fa";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const handleScroll = () => {
    if (window.scrollY > 50) { // Ajuste la valeur selon tes besoins
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Écoute l'événement de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <header className={`sticky-header ${isScrolled ? 'scrolled' : ''} inset-x-0 top-0 z-50 shadow-lg`}>
        <nav
          className="flex items-center justify-between p-6 lg:px-12"
          aria-label="Global"
        >
          <div className="flex items-center lg:flex-1 space-x-4">
            <span className="text-white text-2xl font-montserrat tracking-wide">
              La Cuisine de
            </span>
            <span className="michel-text text-2xl font-dancing-script font-bold">
              Michel
            </span>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-white hover:text-orange-500 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/" className="text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300">
              Accueil
            </Link>
            <Link href="/recipes" className="text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300">
              Recettes
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300">
              Contact
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300">
              À propos
            </Link>

            <a href="#" className="text-orange-700 hover:text-orange-400 transition duration-200">
              <FaLock className="h-5 w-5" />
              
            </a>
          </div>
        </nav>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-2 px-6 py-4 bg-cyan-950 shadow-md">
              <Link href="/" className="block text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300">
                Accueil
              </Link>
              <Link href="/recipes" className="block text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300">
                Recettes
              </Link>
              <Link href="/contact" className="block text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300">
                Contact
              </Link>
              <Link href="/about" className="block text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300">
                À propos
              </Link>
              <Link href="/login" className="block text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300" />
              <FaLock className="w-auto" />
            </div>
          </div>
        )}
      </header>

      {/* Main content with Hero section */}
      <main className="flex-grow mt-0">
        <section className="parallax-header relative h-screen flex items-center justify-center text-center px-4 bg-cover bg-center"></section>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-cyan-900 via-cyan-800 to-blue-900 p-6 text-gray-100 text-center mt-16">
        <p>&copy; {new Date().getFullYear()} Recettes de Cuisine - Tous droits réservés</p>
        <p>Powered by Vivien</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-[#1877F2] hover:text-blue-600 transition duration-300" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="38px" height="48px">
              {/* SVG Content */}
            </svg>
          </a>
          <a href="#" className="text-[#0866FF] hover:text-#0866FF-600 transition duration-300" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="38px" height="48px">
              {/* SVG Content */}
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
