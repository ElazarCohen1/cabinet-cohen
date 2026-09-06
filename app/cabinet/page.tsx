"use client";

import { useState } from "react";
import Image from "next/image";
import Title from "../components/title-font";
import { Button } from "../components/ui/button";

import img3 from "@images/cabinet_hero.jpg";
import cabinet1 from "@images/cabinet1.jpg";
import cabinet2 from "@images/cabinet2.jpg";
import cabinet3 from "@images/cabinet3.jpg";

export default function Cabinet() {
  const images = [cabinet1, cabinet2, cabinet3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div id="cabinet">
      {/* HERO — image nette, sans voile, texte détaché via text-shadow */}
      <div className="relative h-screen w-full overflow-hidden ">
        <Image
          src={img3}
          alt="Cabinet Cohen"
          fill
          priority
          className="object-cover"
        />

        <div className="relative h-full w-full flex flex-col justify-center items-center text-center px-6 backdrop-blur-xs">
          <Title
            eyebrow="Depuis 1997"
            text="Le Cabinet"
            size="text-6xl sm:text-7xl lg:text-9xl"
            className="text-white uppercase tracking-widest font-semibold
              [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_8px_40px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-28">

          {/* NOTRE HISTOIRE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-3">Origine</p>
              <p className="text-slate leading-relaxed">
                Maître Cohen a prêté serment le 4 janvier 1997. En tant qu&apos;avocat
                au barreau de Paris, le cabinet Cohen allie expertise juridique
                et engagement client pour offrir des solutions personnalisées
                et efficaces dans divers domaines du droit.
              </p>
            </div>
            <div className="hidden md:block relative h-96 border-t-2 border-brass">
              <Image
                src={cabinet1}
                alt="Notre histoire"
                fill
                className="object-cover shadow-xl"
              />
            </div>
          </div>

          {/* NOS VALEURS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block relative h-96 border-t-2 border-brass md:order-1">
              <Image
                src={cabinet2}
                alt="Les valeurs"
                fill
                className="object-cover shadow-xl"
              />
            </div>
            <div className="md:order-2">
              <p className="eyebrow mb-3">Mon engagement</p>
              <h2 className="font-display text-3xl sm:text-4xl mb-6 text-navy-900">
                Les Valeurs
              </h2>
              <p className="text-slate leading-relaxed">
                Disponibilité et dévouement sont les piliers de
                la pratique juridique. Mr Cohen s'engage à défendre vos
                intérêts avec rigueur et détermination, dans le respect des
                règles déontologiques de la profession.
              </p>
            </div>
          </div>

          {/* LE CABINET */}
          <div>
            <p className="eyebrow mb-3 text-center">Les locaux</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-6 text-navy-900 text-center">
              Le Cabinet
            </h2>
            <p className="text-slate mb-12 leading-relaxed max-w-2xl mx-auto text-center">
              Situé au cœur de Paris, le cabinet vous accueille dans un
              espace moderne et chaleureux, conçu pour favoriser l&apos;écoute et
              l&apos;échange. Chaque détail a été pensé pour offrir un cadre
              propice à la réflexion et à la confidentialité.
            </p>

            {/* CARROUSEL */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative h-[28rem] w-full overflow-hidden shadow-2xl">
                <Image
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Cabinet photo ${currentIndex + 1}`}
                  fill
                  className="object-cover transition-opacity duration-500 ease-in-out"
                />
              </div>

              <button
                onClick={prevImage}
                aria-label="Photo précédente"
                className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 flex items-center justify-center bg-ivory/90 hover:bg-brass text-navy-900 transition-colors duration-200"
              >
                ‹
              </button>

              <button
                onClick={nextImage}
                aria-label="Photo suivante"
                className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 flex items-center justify-center bg-ivory/90 hover:bg-brass text-navy-900 transition-colors duration-200"
              >
                ›
              </button>

              <div className="flex justify-center mt-6 space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Voir photo ${index + 1}`}
                    className={`h-2 w-8 transition-all duration-300 ${
                      currentIndex === index ? "bg-brass" : "bg-ivory-dim"
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