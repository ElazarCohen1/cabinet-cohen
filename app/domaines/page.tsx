import img4 from "@images/domaine_hero.jpg";
import Title from "../components/title-font";
import Image from "next/image";

export default function Domaines() {
  return (
    <div id="domaines">
      {/* Section titre avec background */}
      <div className="relative h-screen w-full overflow-hidden ">
        <Image
          src={img4}
          alt="domains background"
          fill
          priority
          className="object-cover"
        />

        <div className="relative h-full w-full flex flex-col justify-center items-center text-center px-6 backdrop-blur-xs">
          <Title
            text="Domaines et Décisions"
            size="text-6xl sm:text-7xl lg:text-9xl"
            className="text-white uppercase tracking-widest font-semibold
              [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_8px_40px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

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