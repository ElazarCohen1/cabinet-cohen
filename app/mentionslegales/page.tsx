import Title from "../components/title-font";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-2xl text-navy-900 mb-3">{title}</h2>
      <div className="text-ink leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function MentionsLegales() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Title as="h1" text="Mentions légales" size="text-4xl sm:text-5xl" className="text-navy-900 mb-12" />

        <Section title="Éditeur du site">
          <p>
            Le site www.cabinetcohen.fr est édité par la <strong>SELARLU Cabinet Cohen</strong>,
            Société d&apos;exercice libéral à responsabilité limitée, inscrite au RCS de Paris.
          </p>
          <ul className="list-none space-y-1">
            <li>SIREN : 533 183 349</li>
            <li>SIRET (siège) : 533 183 349 00034</li>
            <li>N° TVA intracommunautaire : FR77 533 183 349</li>
            <li>Code NAF/APE : 69.10Z (69.10Y) — Activités juridiques</li>
            <li>Siège social : 26 rue Daubigny, 75017 Paris</li>
            <li>Date de création : 10/06/2011</li>
          </ul>
          <p>
            Directeur de la publication : Maître Cohen.
          </p>
        </Section>

        <Section title="Barreau d'appartenance">
          <p>
            Ordre des avocats de Paris — 11 place Dauphine, 75001 Paris —{" "}
            <a href="https://www.avocatparis.org" className="text-brass hover:underline">
              www.avocatparis.org
            </a>
          </p>
          <p className="text-sm text-slate">
            L&apos;avocat est soumis au Règlement Intérieur National (RIN) de la profession
            d&apos;avocat.
          </p>
        </Section>

        <Section title="Assurance responsabilité civile professionnelle">
          <p>
            Conformément à la réglementation applicable à la profession d&apos;avocat, le cabinet
            est assuré au titre de sa responsabilité civile professionnelle et bénéficie d&apos;une
            garantie financière auprès de la Caisse des Règlements Pécuniaires des Avocats (CARPA)
            de Paris.
          </p>
        </Section>

        <Section title="Hébergement">
          <p>
            Le site est hébergé par o2switch, dont le siège social est situé au 224 Boulevard
            Gustave Flaubert, 63000 Clermont-Ferrand, France.
          </p>
        </Section>

        <Section title="Propriété intellectuelle">
          <p>
            Le contenu du site (textes, images, graphismes, logo, icônes) est la propriété
            exclusive de la SELARLU Cabinet Cohen, sauf mention contraire. Toute reproduction,
            distribution ou adaptation, même partielle, est interdite sans accord écrit préalable
            et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code
            de la propriété intellectuelle.
          </p>
        </Section>

        <Section title="Médiation de la consommation">
          <p>
            Conformément à l&apos;article L.616-1 du Code de la consommation, en cas de litige,
            le client peut recourir gratuitement au service de médiation suivant :
          </p>
          <p className="text-sm text-slate">
            Le médiateur de la consommation compétent pour la profession d&apos;avocat est
            généralement le Médiateur de la consommation du Conseil national des barreaux
            (MCNB) — à confirmer et personnaliser selon votre situation.
          </p>
        </Section>

        <Section title="Données personnelles">
          <p>
            Le traitement de vos données personnelles est détaillé dans notre{" "}
            <a href="/confidentialite" className="text-brass hover:underline">
              politique de confidentialité
            </a>
            .
          </p>
        </Section>

        <Section title="Droit applicable">
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige,
            les tribunaux français seront seuls compétents.
          </p>
        </Section>
      </div>
    </div>
  );
}