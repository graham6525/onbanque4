import Link from "next/link";

export default function OperationPage() {
  // Ajout d'une propriété 'slug' pour construire l'URL de navigation
  const banks = [
    { name: "Nickel", initial: "N", color: "#f03f09", slug: "nickel" },
    { name: "Wise", initial: "W", color: "#11ec8d", slug: "wise" },
    { name: "N26", initial: "N26", color: "#1553c7", slug: "n26" },
    { name: "bunq", initial: "BQ", color: "#34a1e0", slug: "bunq" },
    { name: "Bling", initial: "BL", color: "#c46eb5", slug: "bling" },
    { name: "Revolut", initial: "RV", color: "#3b383b", slug: "revolut" },
    { name: "Banque Postale", initial: "BP", color: "#007bff", slug: "banquepostale" },
    { name: "Crédit Agricole", initial: "CA", color: "#077955", slug: "creditagricole" },
    { name: "Deblock", initial: "DB", color: "#3b383b", slug: "deblock" },
    { name: "SG Connect", initial: "SGC", color: "#940303", slug: "sgconnect" },
  ];

  return ( 
    <div className="operation-container">
      
      {/* Bouton Retour vers l'accueil */}
      <Link href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </Link>

      {/* En-tête de la page */}
      <div className="op-title-section">
        <h1 className="op-title">
          <i className="fa-solid fa-building-columns" style={{color: '#15b565'}}></i>
          Choisissez votre banque
        </h1>
        <p className="op-subtitle">
          Sélectionnez l'établissement à connecter pour effectuer votre transaction.
        </p>
      </div>

      {/* Liste des banques transformée en liens */}
      <div className="bank-list">
        {banks.map((bank, index) => (
          <Link 
            key={index} 
            href={`/operation/${bank.slug}`} 
            className="bank-item"
            style={{ textDecoration: 'none' }} // Évite le soulignement par défaut des liens
          >
            <div className="bank-info">
              <div 
                className="bank-logo-circle" 
                style={{ backgroundColor: bank.color }}
              >
                {bank.initial}
              </div>
              <span className="bank-name">{bank.name}</span>
            </div>
            <i className="fa-solid fa-chevron-right chevron-icon"></i>
          </Link>
        ))}
      </div>

    </div>
  );
}