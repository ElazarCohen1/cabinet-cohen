"use client";

import { useState } from "react";
import Image from "next/image";
import Title from "../components/title-font";
import img3 from "@images/cabinet_hero.jpg";
import cabinet1 from "@images/cabinet1.jpg";
import cabinet2 from "@images/cabinet2.jpg";
import cabinet3 from "@images/cabinet3.jpg";

export default function Cabinet() {
  const [imageLoaded, setImageLoaded] = useState(false);

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
          onLoadingComplete={() => setImageLoaded(true)}
        />
        <div className="h-screen flex justify-center items-center">
          <Title
            className="z-10 animate-slide-bottom text-blue-900"
            text="Notre Cabinet"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* NOTRE HISTOIRE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Notre Histoire</h2>
              <p className="text-gray-700 leading-relaxed">
                Maitre Cohen a prêté serment le 4 janvier 1997. 
                En tant qu’avocat au barreau de Paris, le cabinet Cohen allie expertise juridique et engagement client 
                pour offrir des solutions personnalisées et efficaces dans divers domaines du droit.
              </p>
            </div>
            <div className="hidden md:block">
              <Image
                src={cabinet1}
                alt="Notre histoire"
                className="rounded-xl shadow-lg object-cover w-full h-80"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* NOS VALEURS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block">
              <Image
                src={cabinet2}
                alt="Nos valeurs"
                className="rounded-xl shadow-lg object-cover w-full h-80"
                width={600}
                height={400}
              />
            </div>
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Nos Valeurs</h2>
              <p className="text-gray-700 leading-relaxed">
                Disponibilité, excellence et dévouement sont les piliers de notre pratique juridique. 
                Nous nous engageons à défendre vos intérêts avec rigueur et détermination, 
                dans le respect des règles éthiques et déontologiques de notre profession.
              </p>
            </div>
          </div>

          {/* LE CABINET */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Le Cabinet</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Situé au cœur de Paris, notre cabinet vous accueille dans un espace moderne et chaleureux,
              conçu pour favoriser l’écoute et l’échange. Chaque détail a été pensé pour offrir 
              un cadre propice à la réflexion et à la confidentialité.
            </p>

            {/* Photos en grille */}
            <div className="flex flex-row justify-between gap-2 md:grid md:grid-cols-3 md:gap-6">
              <Image
                src={cabinet1}
                alt="Cabinet photo 1"
                className="rounded-lg shadow-md object-cover w-full h-64"
                width={400}
                height={300}
              />
              <Image
                src={cabinet2}
                alt="Cabinet photo 2"
                className="rounded-lg shadow-md object-cover w-full h-64"
                width={400}
                height={300}
              />
              <Image
                src={cabinet3}
                alt="Cabinet photo 3"
                className="rounded-lg shadow-md object-cover w-full h-64"
                width={400}
                height={300}
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
