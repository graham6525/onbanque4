"use client"; // On ajoute ceci car on utilise usePathname

import { usePathname } from "next/navigation";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Fonction utilitaire pour vérifier si le lien est actif
  const isActive = (path: string) => pathname === path;

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="shortcut icon" href="/img/logo.png" type="image/x-icon" />
      </head>
      <body>
        <div className="app-container">
          
          {/* --- SIDEBAR (PC uniquement) --- */}
          <aside className="sidebar">
            <div className="logo-container">
              {/* <i className="fa-solid fa-circle-notch"></i> */}
              <div className="log">O</div>
              Onbanque
            </div>
            <nav className="nav-links">
              <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                <i className="fa-solid fa-house"></i>
                Home
              </Link>
              <Link href="/operation" className={`nav-link ${isActive("/operation") ? "active" : ""}`}>
                <i className="fa-solid fa-money-bill-transfer"></i>
                Opération
              </Link>
              <Link href="/historique" className={`nav-link ${isActive("/historique") ? "active" : ""}`}>
                <i className="fa-solid fa-clock-rotate-left"></i>
                Historique
              </Link>
              <Link href="/actualite" className={`nav-link ${isActive("/actualite") ? "active" : ""}`}>
                <i className="fa-solid fa-newspaper"></i>
                Actualités
              </Link>
              <Link href="/profil" className={`nav-link ${isActive("/profil") ? "active" : ""}`}>
                <i className="fa-solid fa-user"></i>
                Profil
              </Link>
            </nav>
          </aside>

          {/* --- MAIN CONTENT AREA --- */}
          <main className="main-content">
            {children}
          </main>

          {/* --- NAVIGATION BASSE (Mobile uniquement) --- */}
          <nav className="mobile-nav">
            <Link href="/" className={`mobile-nav-link ${isActive("/") ? "active" : ""}`}>
              <i className="fa-solid fa-house"></i>
              <span>Home</span>
              {isActive("/") && <div className="active-dot"></div>}
            </Link>
            <Link href="/operation" className={`mobile-nav-link ${isActive("/operation") ? "active" : ""}`}>
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>Opération</span>
              {isActive("/operation") && <div className="active-dot"></div>}
            </Link>
            <Link href="/historique" className={`mobile-nav-link ${isActive("/historique") ? "active" : ""}`}>
              <i className="fa-solid fa-clock-rotate-left"></i>
              <span>Historique</span>
              {isActive("/historique") && <div className="active-dot"></div>}
            </Link>
            <Link href="/actualite" className={`mobile-nav-link ${isActive("/actualite") ? "active" : ""}`}>
              <i className="fa-solid fa-newspaper"></i>
              <span>Actualités</span>
              {isActive("/actualite") && <div className="active-dot"></div>}
            </Link>
            <Link href="/profil" className={`mobile-nav-link ${isActive("/profil") ? "active" : ""}`}>
              <i className="fa-solid fa-user"></i>
              <span>Profil</span>
              {isActive("/profil") && <div className="active-dot"></div>}
            </Link>
          </nav>

        </div>
      </body>
    </html>
  );
}