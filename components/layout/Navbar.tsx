"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `pb-1 border-b-2 ${
      pathname === path ? "border-green-900" : "border-transparent"
    } hover:border-black transition-colors`;

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav className="bg-white w-full px-4 sm:px-8 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="md:flex md:items-center md:gap-4 w-1/3">
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 bg-black mb-1" />
              <span className="block w-6 h-0.5 bg-black mb-1" />
              <span className="block w-6 h-0.5 bg-black" />
            </button>
          </div>

          <Link
            href="/"
            className="hidden md:block font-bold text-xl tracking-wide text-gray-900"
          >
            WEAVE & WAY
          </Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 w-1/3 text-center">
          <Link
            href="/"
            className="block md:hidden font-bold text-lg tracking-wide text-gray-900"
          >
            WEAVE & WAY
          </Link>

          <div className="hidden md:flex justify-center gap-8 text-gray-800 font-medium text-sm">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>
            <Link href="/fabrics" className={linkClass("/fabrics")}>
              Fabrics
            </Link>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </div>
        </div>

        <div className="flex justify-end items-center w-1/3 gap-4 text-gray-700 text-lg">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <FaFacebookF />
          </a>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-800"
          aria-label="Close menu"
        >
          ×
        </button>

        <nav className="mt-12 flex flex-col gap-6 text-lg text-gray-800 font-medium">
          <Link
            href="/"
            className={linkClass("/")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={linkClass("/about")}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/fabrics"
            className={linkClass("/fabrics")}
            onClick={() => setMenuOpen(false)}
          >
            Fabrics
          </Link>
          <Link
            href="/contact"
            className={linkClass("/contact")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
