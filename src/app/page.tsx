"use client"; // Obligatoire pour utiliser l'interaction (useState)

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {

  // À l'intérieur de ton composant de page d'accueil :
const [liveBalance, setLiveBalance] = useState("40 500");
 
useEffect(() => {
  // Récupère le solde configuré par l'admin
  const getAmount = async () => {
    try {
      const res = await fetch("/api/global-balance");
      const data = await res.json();
      if (data.balance) setLiveBalance(data.balance);
    } catch (err) {
      console.error(err); 
    }
  };
 
  getAmount();
  // Optionnel : rafraîchir toutes les 5 secondes pour voir le changement en direct
  const interval = setInterval(getAmount, 5000);
  return () => clearInterval(interval);
}, []);
  // État pour savoir si le solde est visible ou caché
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="home-wrapper">
      {/* Header */}
      <header className="home-header">
        <div className="user-info">
          <div className="avatar-circle">O</div>
          <div> 
            <p className="welcome-msg">Salut 👋</p>
            <h1 className="user-display-name">Bienvenue sur Onbanque</h1>
          </div>
        </div>
        <button className="notif-btn">
          <i className="fa-regular fa-bell"></i>
          <span className="notif-dot"></span>
        </button>
      </header>
 
      {/* Carte Solde */}
      <section className="balance-card">
        <div className="balance-label">
          <span><i className="fa-solid fa-wallet"></i> SOLDE DISPONIBLE POSSIBLE</span>
          {/* L'icône change selon l'état isVisible */}
          <button onClick={toggleVisibility} style={{ color: '#fff', fontSize: '18px' }}>
            <i className={`fa-regular ${isVisible ? 'fa-eye' : 'fa-eye-slash'}`}></i>
          </button>
        </div>

        {/* Le texte change selon l'état isVisible */}
        <div className="balance-value">
  {isVisible ? liveBalance : "*******"} €
</div>

        <div className="balance-stats">
          <i className="fa-solid fa-chart-line"></i> +28% ce mois-ci
        </div>
        
        <div className="quick-actions-grid">
         <Link href="/operation" style={{ textDecoration: "none", color: "inherit", display: "contents" }}>
  <button className="q-action-btn">
    <i className="fa-solid fa-hand-holding-dollar"></i> Virement
  </button>
</Link>
          {/* <button className="q-action-btn"><i className="fa-regular fa-paper-plane"></i> Envoyer</button> */}
          <Link href="/operation" style={{ textDecoration: "none", color: "inherit", display: "contents" }}>
  <button className="q-action-btn">
    <i className="fa-solid fa-arrow-down-long"></i> Recevoir
  </button>
</Link>
          <Link href="/actualite" style={{ textDecoration: "none", color: "inherit", display: "contents" }}>
  <button className="q-action-btn">
    <i className="fa-solid fa-ellipsis"></i> Plus
  </button>
</Link>
        </div>
      </section>

      {/* Boutons Principaux */}
      <div className="main-buttons-row">
        <Link href="/operation" className="btn-black">
  <i className="fa-solid fa-money-check-dollar"></i>
  Effectuer un virement
  <i className="fa-solid fa-arrow-right"></i>
</Link>
        <Link href="/historique" className="btn-white">
  <i className="fa-solid fa-clock-rotate-left"></i>
          Voir mes opérations
</Link>
        {/* <button className="btn-white">
          <i className="fa-solid fa-clock-rotate-left"></i>
          Voir mes opérations
        </button> */}
      </div>

      {/* Pourquoi Onbanque */}
      <section>
        <h2 className="home-section-title">Pourquoi Onbanque ?</h2>
        <div className="feature-item">
          <div className="feature-icon-box"><i className="fa-solid fa-bolt"></i></div>
          <div className="feature-text">
            <h4>Réponse en quelques minutes</h4>
            <p>Décision instantanée sur votre demande.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon-box"><i className="fa-solid fa-shield-halved"></i></div>
          <div className="feature-text">
            <h4>100% sécurisé</h4>
            <p>Chiffrement  de bout en bout.</p>
          </div>
        </div>
      </section>

      {/* Simulateur */}
      <section className="simulator-card">
        <div className="sim-header">
          <span style={{fontWeight: 600, fontSize: '14px'}}><i className="fa-solid fa-calculator"></i> Simulez en 1 clic</span>
          <span className="sim-tag">Nouveau</span>
        </div>
        {/* <p style={{fontSize: '12px', color: '#888', margin: '10px 0'}}>Empruntez de 500 € à 10 000 € sur 6 à 84 mois.</p> */}
        
        <div className="sim-amount-row">
          <div>
            <p style={{fontSize: '11px', color: '#888'}}>Montant</p>
            <div className="sim-value-big">10 000 €</div>
          </div>
          <div style={{textAlign: 'right'}}>
            <p style={{fontSize: '11px', color: '#888'}}>Mensualité dès</p>
            <div className="sim-value-green">142 €</div>
          </div>
        </div>


        <Link href="/operation" className="btn-black" style={{background: '#15b565', width: '100%', marginTop: '20px', border: 'none'}}>
   <i className="fa-solid fa-rocket"></i> Démarrer ma demande
</Link>
      </section>

      {/* Partenaires */}
      <section style={{marginTop: '35px', marginBottom: '30px'}}>
        <h2 className="home-section-title"><i className="fa-solid fa-building-columns"></i> Partenaires bancaires</h2>
        <div className="partners-grid">
          <div className="partner-circle-card">
            <img src="/img/nickel.jpeg" alt="Nickel Logo" />
            <span style={{fontSize: '10px'}}>Nickel</span>
          </div>
          
          <div className="partner-circle-card">
            <img src="/img/wise.jpeg" alt="Wise Logo" />
            <span style={{fontSize: '10px'}}>Wise</span>
          </div>
          <div className="partner-circle-card">
            <img src="/img/n26.jpeg" alt="N26 Logo" />
            <span style={{fontSize: '10px'}}>N26</span>
          </div>
          <div className="partner-circle-card">
            <img src="/img/bunq.jpeg" alt="Bunq Logo" />
            <span style={{fontSize: '10px'}}>bunq</span>
          </div>
          
          <div className="partner-circle-card">
            <img src="/img/bling.jpeg" alt="Blinq Logo" />
            <span style={{fontSize: '10px'}}>Blinq</span>
          </div>
          <div className="partner-circle-card">
            <img src="/img/creditagricole.jpeg" alt="Credit agricole Logo" />
            <span style={{fontSize: '10px'}}>Credit agricole</span>
          </div>
          <div className="partner-circle-card">
            <img src="/img/sg.jpeg" alt="SG Logo" />
            <span style={{fontSize: '10px'}}>SG Connect</span>
          </div>
          <div className="partner-circle-card">
            <img src="/img/deblock.png" alt="Deblock Logo" />
            <span style={{fontSize: '10px'}}>Deblock</span>
          </div>
          <div className="partner-circle-card">
            {/* <div className="p-logo" style={{background: '#222'}}>bu</div> */}
            <img src="/img/bqp.jpeg" alt="Banque postale Logo" />
            <span style={{fontSize: '10px'}}>Banque Postale</span>
          </div>
          <div className="partner-circle-card">
            {/* <div className="p-logo" style={{background: '#222'}}>bu</div> */}
            <img src="/img/revolut.png" alt="Revolut Logo" />
            <span style={{fontSize: '10px'}}>Revolut</span>
          </div>
          <div className="partner-circle-card">
            {/* <div className="p-logo" style={{background: '#222'}}>bu</div> */}
            <img src="/img/nirio.png" alt="Revolut Logo" />
            <span style={{fontSize: '10px'}}>Nirio</span>
          </div>

        </div>
      </section>
    </div>
  );
}