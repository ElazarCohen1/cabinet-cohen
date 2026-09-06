import Title from "../components/title-font";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-2xl text-navy-900 mb-3">{title}</h2>
      <div className="text-ink leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function Confidentialite() {

    const date = new Date();
    const fullDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return (
        <div className="bg-white pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
            <Title as="h1" text="Politique de confidentialité" size="text-4xl sm:text-5xl" className="text-navy-900 mb-4" />
            <p className="text-sm text-slate mb-12">Dernière mise à jour : {fullDate}</p>

            <Section title="Responsable du traitement">
            <p>
                La SELARLU Cabinet Cohen, dont le siège social est situé au 26 rue Daubigny, 75017
                Paris (SIREN 533 183 349), est responsable du traitement des données personnelles
                collectées via le site www.cabinetcohen.fr.
            </p>
            <p>Contact : avocat.cohen@hotmail.com</p>
            </Section>

            <Section title="Données collectées et finalités">
            <ul className="list-disc pl-5 space-y-2">
                <li>
                <strong>Prise de contact</strong> (téléphone, email) : nom, coordonnées, contenu de
                votre demande — finalité : répondre à vos questions et gérer la relation
                précontractuelle.
                </li>
                <li>
                <strong>Navigation sur le site</strong> : adresse IP, données techniques de
                connexion (journaux du serveur hébergeur) — finalité : sécurité et bon
                fonctionnement du site.
                </li>
                <li>
                <strong>Carte Google Maps</strong> : si vous choisissez d&apos;afficher la carte de
                notre cabinet, Google peut déposer des cookies et traiter votre adresse IP,
                conformément à sa propre politique de confidentialité.
                </li>
            </ul>
            </Section>

            <Section title="Base légale">
            <p>
                Les traitements reposent sur l&apos;intérêt légitime du cabinet à répondre aux
                demandes de contact et à assurer la sécurité du site, et sur votre consentement pour
                le chargement de la carte Google Maps.
            </p>
            </Section>

            <Section title="Durée de conservation">
                <p>
                    Les données liées à une prise de contact sont conservées pendant  3
                    ans à compter du dernier contact en l&apos;absence de relation contractuelle
                    ultérieure. Les données relatives à un dossier confié au cabinet sont conservées
                    conformément aux obligations légales de la profession d&apos;avocat (notamment en
                    matière de prescription et d&apos;archivage).
                </p>
            </Section>

            <Section title="Destinataires des données">
            <p>
                Vos données sont destinées exclusivement au personnel habilité du cabinet. Elles ne
                sont ni vendues, ni cédées à des tiers à des fins commerciales. Elles peuvent être
                transmises à nos sous-traitants techniques (hébergeur Vercel    ) dans la stricte
                mesure nécessaire au fonctionnement du site.
            </p>
            </Section>

            <Section title="Transferts hors Union européenne">
            <p>
                Le chargement de la carte Google Maps peut entraîner un transfert de données vers les
                États-Unis, encadré par les clauses contractuelles types de Google ou tout autre
                mécanisme reconnu par la Commission européenne.
            </p>
            </Section>

            <Section title="Vos droits">
            <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de
                rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilité
                de vos données.
            </p>
            <p>
                Pour exercer ces droits, contactez-nous à l&apos;adresse : avocat.cohen@hotmail.com, en
                justifiant de votre identité.
            </p>
            <p>
                Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés,
                vous pouvez adresser une réclamation à la CNIL :{" "}
                <a href="https://www.cnil.fr/fr/plaintes" className="text-brass hover:underline">
                www.cnil.fr/fr/plaintes
                </a>
                .
            </p>
            </Section>

            <Section title="Cookies">
            <p>
                Le site n&apos;utilise pas de cookies de mesure d&apos;audience ou publicitaires à ce
                jour. Seul le chargement volontaire de la carte Google Maps peut déclencher le dépôt
                de cookies tiers, avec votre accord préalable.
            </p>
            </Section>
        </div>
        </div>
    );
}