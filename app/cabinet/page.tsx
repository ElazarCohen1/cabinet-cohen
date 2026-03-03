"use client";

import { useState } from "react";
import Image from "next/image";
import Title from "../components/title-font";

import img3 from "@images/cabinet_hero.jpg";
import cabinet1 from "@images/cabinet1.jpg";
import cabinet2 from "@images/cabinet2.jpg";
import cabinet3 from "@images/cabinet3.jpg";

export default function Cabinet() {
  const images = [cabinet1, cabinet2, cabinet3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div id="cabinet">
      {/* HERO SECTION */}
      <div className="relative flex flex-col justify-center items-center min-h-screen pt-16">
        <Image
          src={img3}
          alt="Cabinet"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="h-screen flex justify-center items-center">
          <Title
            className="z-10 animate-slide-bottom text-blue-900"
            text="Notre Cabinet"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-24">

          {/* NOTRE HISTOIRE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">
                Notre Histoire
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Maître Cohen a prêté serment le 4 janvier 1997.
                En tant qu’avocat au barreau de Paris, le cabinet Cohen allie
                expertise juridique et engagement client pour offrir des
                solutions personnalisées et efficaces dans divers domaines du droit.
              </p>
            </div>
            <div className="hidden md:block">
              <Image
                src={cabinet1}
                alt="Notre histoire"
                className="rounded-xl shadow-xl object-cover w-full h-96"
                width={600}
                height={500}
              />
            </div>
          </div>

          {/* NOS VALEURS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block">
              <Image
                src={cabinet2}
                alt="Nos valeurs"
                className="rounded-xl shadow-xl object-cover w-full h-96"
                width={600}
                height={500}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">
                Nos Valeurs
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Disponibilité, excellence et dévouement sont les piliers de
                notre pratique juridique. Nous nous engageons à défendre vos
                intérêts avec rigueur et détermination, dans le respect des
                règles éthiques et déontologiques de notre profession.
              </p>
            </div>
          </div>

          {/* LE CABINET */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              Le Cabinet
            </h2>
            <p className="text-gray-700 mb-10 leading-relaxed max-w-3xl">
              Situé au cœur de Paris, notre cabinet vous accueille dans un
              espace moderne et chaleureux, conçu pour favoriser l’écoute et
              l’échange. Chaque détail a été pensé pour offrir un cadre propice
              à la réflexion et à la confidentialité.
            </p>

            {/* CARROUSEL */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative h-112.5 w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Cabinet photo ${currentIndex + 1}`}
                  fill
                  className="object-cover transition-opacity duration-500 ease-in-out"
                />
              </div>

              {/* Flèche gauche */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
              >
                {/* <ChevronLeft className="text-blue-900" size={28} /> */}
              </button>

              {/* Flèche droite */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
              >
                {/* <ChevronRight className="text-blue-900" size={28} /> */}
              </button>

              {/* Indicateurs */}
              <div className="flex justify-center mt-6 space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 w-3 rounded-full transition-all ${
                      currentIndex === index
                        ? "bg-blue-900 scale-110"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}