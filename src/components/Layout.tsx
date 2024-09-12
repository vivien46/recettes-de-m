import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLock } from "react-icons/fa";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="  absolute inset-x-0 top-0 z-50 bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-950 shadow-lg">
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
            <Link href="/"className="text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300">
              Accueil
            </Link>
            <Link href="/recipes"className="text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300"
            >
              Recettes
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300"
            >
              À propos
            </Link>

            <a
              href="#"
              className="text-orange-700 hover:text-orange-400 transition duration-200"
              
            >
              <FaLock className="h-5 w-5" />
            </a>
          </div>
        </nav>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-2 px-6 py-4 bg-cyan-950 shadow-md">
              <Link
                href="/"
                className="block text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300"
              >
                Accueil
              </Link>
              <Link
                href="/recipes"
                className="block text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300"
              >
                Recettes
              </Link>
              <Link href="/contact" className="block text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300">
                Contact
              </Link>
              <Link href="/about" className="block text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300">
                À propos
              </Link>
              <Link href="/login" className="block text-sm font-semibold leading-6 text-white hover:text-orange-500 transition duration-300" />
               <FaLock className=" w-auto" />
            </div>
          </div>
        )}
      </header>

      {/* Main content with Hero section */}
      <main className=" flex-grow mt-20">
        <section 
          className=" parallax-header relative h-screen flex items-center justify-center text-center px-4 bg-cover bg-center"
        
        ></section>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-cyan-900 via-cyan-800 to-blue-900 p-6 text-gray-100 text-center mt-16">
        <p>
          &copy; {new Date().getFullYear()} Recettes de Cuisine - Tous droits
          réservés
        </p>
        <p>Powered by Vivien</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#"className="text-[#1877F2] hover:text-blue-600 transition duration-300" aria-label="Instagram">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="38px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>
          </a>
          <a href="#"className="text-[#0866FF] hover:text-#0866FF-600 transition duration-300"aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="38px" height="48px"><path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"/></svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;