import img4 from "@images/domaine_hero.jpg"; // ton image
import Title from "../components/title-font";
import Image from 'next/image'
const domaines = [
  {
    categorie: "Civil",
    decisions: 353,
    sousDomaines: [
      { categorie: "Droit immobilier et de la construction", decisions: 48 },
      { categorie: "Procédures civiles d'exécution", decisions: 27 },
      { categorie: "Droit locatif", decisions: 15 },
      { categorie: "Droit de la copropriété et de la propriété immobilière", decisions: 5 },
      { categorie: "Droit des personnes et de la famille", decisions: 5 },
      { categorie: "Droit bancaire et boursier", decisions: 4 },
      { categorie: "Droit des assurances", decisions: 2 },
      { categorie: "Droit de la responsabilité", decisions: 1 },
    ],
  },
  {
    categorie: "Commercial",
    decisions: 109,
    sousDomaines: [
      { categorie: "Droit des contrats", decisions: 97 },
      { categorie: "Droit de l'arbitrage", decisions: 3 },
      { categorie: "Droit bancaire et boursier", decisions: 2 },
      { categorie: "Droit des assurances", decisions: 1 },
      { categorie: "Droit des entreprises en difficulté", decisions: 1 },
      { categorie: "Droit des sociétés", decisions: 1 },
      { categorie: "Droit du numérique", decisions: 1 },
      { categorie: "Propriété intellectuelle", decisions: 4 },
    ],
  },
  {
    categorie: "Social",
    decisions: 4,
    sousDomaines: [
      { categorie: "Droit du travail", decisions: 4 },
    ],
  },
  
];


export default function Domaines() {
  return (
    <div id="domaines">
      {/* Section titre avec background */}
      <div className="h-screen flex justify-center items-center relative">
        <Title
          text="Domaine et Décisions"
          className="text-center animate-slide-bottom text-blue-900"
        />
      </div>
      <Image
        src={img4}
        loading="lazy"
        alt="image cabinet"
        className="fixed inset-0 -z-10 bg-cover bg-center"
      />

      {/* Section contenu */}
      <div className="bg-white bg-opacity-90 py-16 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center">
            Nos Domaines d'Intervention
          </h2>
          <p className="text-gray-700 mb-10 text-center">
            Le Cabinet Cohen se spécialise dans plusieurs domaines clés du droit,
            offrant une expertise approfondie et un accompagnement personnalisé
            à chaque client.
          </p>

          {/* Phrase discrète en plus petit */}
          <p className="text-xs text-gray-500 text-center mt-6">
            Les détails des décisions sont accessibles via Doctrine (réservé aux abonnés) 
            ou peuvent être communiqués par le cabinet sur demande.
          </p>

          {/* Grille de domaines principaux */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domaines.map((domaine, index) => (
              <div
                key={index}
                className="shadow-md rounded-2xl hover:shadow-lg transition bg-white p-5 flex flex-col h-full"
              >
                {/* Domaine principal */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {domaine.categorie}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {domaine.decisions} décisions
                </p>

                {/* Liste des sous-domaines */}
                {domaine.sousDomaines?.length > 0 && (
                  <ul className="mb-4 pl-4 border-l text-sm text-gray-600 space-y-1">
                    {domaine.sousDomaines.map((sd, i) => (
                      <li key={i} className="flex justify-between">
                        <span>{sd.categorie}</span>
                        <span className="text-gray-500">{sd.decisions}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

