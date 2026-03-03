import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white p-6 text-center">
              <h2 className="text-xl font-bold mb-2">Cabinet Cohen</h2>
      
              <div className="mb-2">
                  <Link href="/mentionslegales" className="underline hover:text-gray-300">
                    Mentions légales
                  </Link>
                </div>
      
                <p className="mb-2">© 2025 Cabinet Cohen. Tous droits réservés.</p>
                <p className="mb-4">Adresse: 26 rue Daubighy, 75017 Paris</p>
      
                <div className="flex flex-col items-center space-y-2">
                  <a href="mailto:avocat.cohen@gmail.com" className="underline hover:text-gray-300">
                    Email: avocat.cohen@gmail.com
                  </a>
                  <a href="tel:+33153950973" className="underline hover:text-gray-300">
                    Téléphone: +33 1 53 95 09 73
                  </a>
                </div>
            </footer>
    </div>
  )
}
