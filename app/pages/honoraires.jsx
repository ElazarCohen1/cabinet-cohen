import { useState } from 'react';
import Title from '../components/TitleFont';

export default function Honoraires(){
    const [activeTab, setActiveTab] = useState('principes');

    return (
        <div id="honoraires" className="min-h-screen bg-gray-50 p-12 mt-3">
            <div className="container mx-auto px-4">
                <Title className="text-center mb-16 text-blue-900" text="Nos Honoraires" />
                
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* En-tête avec onglets */}
                    <div className="border-b border-gray-200">
                        <nav className="flex flex-col sm:flex-row">
                            {['principes', 'modes', 'prestations'].map((tab) => (
                                <button
                                    key={tab}
                                    className={`py-4 px-6 text-lg font-medium transition-colors duration-300 ${
                                        activeTab === tab
                                            ? 'text-blue-800 border-b-2 border-blue-800'
                                            : 'text-gray-500 hover:text-blue-700'
                                    }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab === 'principes' && 'Nos Principes'}
                                    {tab === 'modes' && 'Modes de Facturation'}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Contenu des onglets */}
                    <div className="p-8">
                        {activeTab === 'principes' && (
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-blue-900">Transparence et Équité</h3>
                                <p className="text-gray-700">
                                    Notre cabinet s'engage à pratiquer des honoraires justes, transparents 
                                    et proportionnés à la complexité des dossiers, à la valeur des enjeux 
                                    et aux résultats obtenus.
                                </p>
                                
                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <div className="text-blue-800 text-4xl mb-4">1</div>
                                        <h4 className="font-semibold text-lg mb-2">Devis Préalable</h4>
                                        <p className="text-gray-700">
                                            Un devis détaillé est systématiquement établi avant toute intervention, 
                                            vous permettant de connaître à l'avance le coût de nos prestations.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <div className="text-blue-800 text-4xl mb-4">2</div>
                                        <h4 className="font-semibold text-lg mb-2">Pas de Surprise</h4>
                                        <p className="text-gray-700">
                                            Aucun frais supplémentaire ne sera facturé sans votre accord préalable 
                                            et écrit. Nous vous informons régulièrement de l'état de vos honoraires.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'modes' && (
                            <div className="space-y-8">
                                <h3 className="text-2xl font-semibold text-blue-900">Modalités de Facturation</h3>
                                
                                <div className="border-l-4 border-blue-800 pl-4 py-2">
                                    <h4 className="font-semibold text-lg">Forfait</h4>
                                    <p className="text-gray-700">
                                        Pour certaines prestations spécifiques (rédaction d'actes, conseil ponctuel, etc.), 
                                        nous proposons un forfait établi à l'avance.
                                    </p>
                                </div>
                                
                                <div className="border-l-4 border-blue-800 pl-4 py-2">
                                    <h4 className="font-semibold text-lg">À l'Heure</h4>
                                    <p className="text-gray-700">
                                        Facturation basée sur le temps consacré à votre dossier, avec un taux horaire 
                                        variant selon la complexité et l'expérience requise.
                                    </p>
                                    <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                                        <p className="text-sm text-gray-600">
                                            Taux horaire moyen: 200€ - 350€ HT selon la complexité du dossier
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="border-l-4 border-blue-800 pl-4 py-2">
                                    <h4 className="font-semibold text-lg">Au Résultat</h4>
                                    <p className="text-gray-700">
                                        Dans certains contentieux, possibilité de facturation partiellement ou 
                                        totalement conditionnée au résultat obtenu (mode "no win, no fee").
                                    </p>
                                </div>
                                
                                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mt-6">
                                    <p className="text-sm text-yellow-800">
                                        💡 Une combinaison de ces modes de facturation peut être proposée 
                                        pour s'adapter au mieux à votre situation.
                                    </p>
                                </div>
                            </div>
                        )}

                        
                    </div>
                </div>
                
                {/* Section informations supplémentaires */}
                <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">Modalités de Paiement</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                <span>Paiement possible en plusieurs fois</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                <span>Facturation mensuelle ou trimestrielle pour les dossiers longs</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                <span>Règlement par virement, chèque </span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">Aide Juridictionnelle</h3>
                        <p className="text-gray-700 mb-4">
                            Selon vos ressources, vous pouvez bénéficier de l'aide juridictionnelle 
                            qui prend en charge tout ou partie de vos frais de justice.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}