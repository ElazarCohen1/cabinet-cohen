import img4 from "@images/domaine_hero.jpg";
import Title from "../components/title-font";
import Image from "next/image";

export default function Domaines() {
  return (
    <div id="domaines">
      {/* Section titre avec background */}
      <div className="h-screen flex justify-center items-center relative">
        <Title
          text="Domaines et Décisions"
          className="text-center animate-slide-bottom text-blue-900"
        />
      </div>

      <Image
        src={img4}
        loading="lazy"
        alt="image cabinet"
        className="fixed inset-0 -z-10 object-cover w-full h-full"
      />

      {/* Section contenu */}
      <div className="bg-white bg-opacity-90 py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Titre */}
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Nos Domaines d'Intervention
          </h2>

          {/* Texte d'introduction */}
          <p className="text-gray-700 mb-12 leading-relaxed">
            Le Cabinet Cohen intervient dans plusieurs domaines clés du droit,
            offrant une expertise approfondie et un accompagnement personnalisé
            à chaque client.
          </p>

          {/* Bloc statistique */}
          <div className="bg-white shadow-xl rounded-2xl p-12 max-w-2xl mx-auto">

            <p className="text-6xl font-bold text-blue-900 mb-6">
              200+
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Le Cabinet Cohen a déjà obtenu plus de{" "}
              <strong>200 décisions judiciaires</strong> sur l'ensemble du
              territoire français dans ses domaines de compétence.
            </p>

            <p className="text-xs text-gray-500 mt-6">
              Les détails des décisions sont accessibles via Doctrine
              (réservé aux abonnés) ou peuvent être communiqués par le cabinet
              sur demande.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}