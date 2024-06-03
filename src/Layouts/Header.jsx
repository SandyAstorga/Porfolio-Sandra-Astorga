import { useState } from 'react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md p-3 d-flex justify-content-between">

          <section>
            <a className="nav-link active name-header" aria-current="page" href="/">
              <h1 className="fs-5 mb-0">Sandra
                <span className="fw-light">Astorga</span>
              </h1>
            </a>
          </section>

          {/* Botón del menú */}
          <button 
            className="navbar-toggler button-nav" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarScroll" 
            aria-controls="navbarScroll" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)} 
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <section className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll nav-gap">
              {/* Agregar el controlador de eventos closeMenu a cada enlace */}
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={closeMenu}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={closeMenu}>Sobre mi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects" onClick={closeMenu}>Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={closeMenu}>Contacto</a>
              </li>
            </ul>
          </section>

        </nav>
      </div>
    </>
  );
}
