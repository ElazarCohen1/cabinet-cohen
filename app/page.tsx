"use client";

import { useRouter } from "next/navigation";
import Title from "./components/title-font";
import { Button } from "./components/ui/button";
import img1 from "@images/home_hero.jpg";
import img2 from "@images/home_cabinetSection.jpg";
import { useState } from "react";

function Domaine({ name, description }: { name: string; description: string }) {
  return (
    <div className="bg-white p-8 border-t-2 border-brass hover:shadow-xl transition-shadow duration-300">
      <h3 className="font-display text-2xl mb-3 text-navy-900">{name}</h3>
      <p className="text-slate leading-relaxed">{description}</p>
    </div>
  );
}


function Map() {
  const [consent, setConsent] = useState(false);

  if (!consent) {
    return (
      <div className="w-full h-[400px] flex flex-col items-center justify-center gap-4 bg-navy-900 text-ivory text-center px-6 border border-ivory-dim">
        <p className="text-sm text-ivory/80 max-w-sm">
          Le chargement de cette carte nécessite d&apos;accepter le dépôt de
          cookies par Google Maps.
        </p>
        <Button variant="outline-light" onClick={() => setConsent(true)}>
          Afficher la carte
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden shadow-lg border border-ivory-dim">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.5453470321304!2d2.3053754763725833!3d48.885943198767244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fff21503841%3A0xb7bf2e6aa50bdcde!2scabinet%20cohen%20avocat!5e0!3m2!1sfr!2sfr!4v1757254603390!5m2!1sfr!2sfr"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default function Accueil() {
  const navigate = useRouter();

  return (
    <div id="home">
      {/* HERO */}
      <div className="relative h-screen flex items-end justify-start pb-28">
        <div
          className="fixed inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${img1.src})` }}
        />
        {/* Dégradé uniquement en bas, pas de voile plat sur toute la photo */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />

        <div className="container px-6 text-ivory">
          <Title
            eyebrow="Avocat au barreau de Paris"
            text="Bienvenue au Cabinet Cohen"
            className="drop-shadow-lg md:text-8xl"
          />
          <p className="text-lg sm:text-xl max-w-2xl mt-6 mb-10 text-ivory/85">
            Mon expertise juridique au service de vos droits
          </p>
          <Button href="/domaines" variant="primary">
            Découvrir les services
          </Button>
        </div>
      </div>

      {/* DOMAINES */}
      <div id="domaines" className="py-24 bg-ivory">
        <div className="container mx-auto px-6">
          <Title eyebrow="Expertise" text="Domaines d'intervention" className="text-navy-900 mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Domaine
              name="Baux commerciaux"
              description="Actions judiciares, conseils, négociations et rédaction de baux commerciaux, renouvellement et résiliation."
            />
            <Domaine
              name="Droit de l'immobilier"
              description="Expertise en transactions immobilières, copropriété et urbanisme."
            />
            <Domaine
              name="Stratégie judiciaire"
              description="Accompagnement et représentation dans vos contentieux juridiques."
            />
          </div>
          <div className="mt-16 text-center">
            <Button variant="outline-dark" onClick={() => navigate.push("/domaines")}>
              Voir les décisions
            </Button>
          </div>
        </div>
      </div>

      {/* NOTRE CABINET */}
      <div className="py-24 relative">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${img2.src})` }}
        />
        <div className="absolute inset-0 -z-10 bg-navy-950/50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl bg-ivory p-10 shadow-2xl">
            <p className="eyebrow mb-3">Depuis 1997</p>
            <h2 className="font-display text-4xl mb-6 text-navy-900">Le Cabinet</h2>
            <p className="text-ink leading-relaxed mb-8">
              Maître Cohen a prêté serment le 4 janvier 1997. En tant qu&apos;avocat au
              barreau de Paris depuis près de 30 ans, le cabinet Cohen allie
              expertise juridique et engagement envers ses clients pour leur offrir
              des solutions personnalisées et efficaces dans divers domaines du droit.
            </p>
            <Button variant="outline-dark" onClick={() => navigate.push("/cabinet")}>
              Découvrir l'histoire
            </Button>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <Title eyebrow="Nous rencontrer" text="Contactez le cabinet" className="text-navy-900 mb-16" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4 text-ink">
                <p><span className="font-semibold text-navy-900">Adresse — </span>26 rue Daubigny, Paris 17</p>
                <p><span className="font-semibold text-navy-900">Téléphone — </span>01 53 95 09 73</p>
                <p><span className="font-semibold text-navy-900">Email — </span>avocat.cohen@hotmail.com</p>
              </div>
              <p className="text-slate mt-6 leading-relaxed">
                N&apos;hésitez pas à contacter le cabinet pour toute question ou prise de rendez-vous.
                Mr Cohen vous répondra dans les plus brefs délais.
              </p>
            </div>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}