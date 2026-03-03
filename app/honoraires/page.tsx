"use client";
import { useState } from "react";
import Title from "../components/title-font";

export default function Honoraires() {
  const [activeTab, setActiveTab] = useState("principes");

  return (
    <section id="honoraires" className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title
          className="text-center mb-12 sm:mb-16 text-blue-900"
          text="Nos Honoraires"
        />

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Onglets */}
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto scrollbar-hide">
              {[
                { key: "principes", label: "Nos Principes" },
                { key: "modes", label: "Modes de Facturation" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-shrink-0 px-6 py-4 text-base sm:text-lg font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? "text-blue-800 border-b-2 border-blue-800"
                      : "text-gray-500 hover:text-blue-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contenu */}
          <div className="p-6 sm:p-8 lg:p-12">
            {activeTab === "principes" && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">
                    Transparence et Équité
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Notre cabinet s'engage à pratiquer des honoraires justes,
                    transparents et proportionnés à la complexité des dossiers,
                    à la valeur des enjeux et aux résultats obtenus.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <div className="text-blue-800 text-3xl mb-4">1</div>
                    <h4 className="font-semibold text-lg mb-2">
                      Devis Préalable
                    </h4>
                    <p className="text-gray-700">
                      Un devis détaillé est systématiquement établi avant toute
                      intervention.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl">
                    <div className="text-blue-800 text-3xl mb-4">2</div>
                    <h4 className="font-semibold text-lg mb-2">
                      Pas de Surprise
                    </h4>
                    <p className="text-gray-700">
                      Aucun frais supplémentaire ne sera facturé sans votre
                      accord préalable.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "modes" && (
              <div className="space-y-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-900">
                  Modalités de Facturation
                </h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-800 pl-4">
                    <h4 className="font-semibold text-lg mb-1">Forfait</h4>
                    <p className="text-gray-700">
                      Forfait défini à l'avance pour des prestations précises.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-800 pl-4">
                    <h4 className="font-semibold text-lg mb-1">À l'Heure</h4>
                    <p className="text-gray-700 mb-3">
                      Facturation basée sur le temps consacré au dossier.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600">
                      Taux horaire : 350€ HT
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-800 pl-4">
                    <h4 className="font-semibold text-lg mb-1">Au Résultat</h4>
                    <p className="text-gray-700">
                      Dans certain contentieux, la Facturation peut être conditionnée aux résultats obtenues.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bloc bas */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-4">
              Modalités de Paiement
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Paiement possible en plusieurs fois</li>
              <li>✓ Facturation mensuelle ou trimestrielle</li>
              <li>✓ Règlement par virement ou chèque</li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-4">
              Aide Juridictionnelle
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Selon vos ressources, vous pouvez bénéficier de l’aide
              juridictionnelle prenant en charge tout ou partie des frais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}