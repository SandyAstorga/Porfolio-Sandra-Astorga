

export const AboutMe = () => {
  return (
    <div id='about'>
      <br />

      <div id="about" className="container-sections">

        <section className="d-flex justify-content-around align-items-center section-title">
          <h1>Sobre mi</h1>
          <div className="rounded line-sections"></div>
        </section>

        <section className="about-text">
          <p>
            Desarrolladora Web Full Stack con formación en Ingeniería en Sistemas Computacionales. <br />
            <br />
            Tengo experiencia en <span style={{background: '#A6BBCC', color: '#221F1F', padding: '.2rem', fontWeight: '600'}}>Front-end,</span> con <span style={{background: '#A6BBCC', color: '#221F1F', padding: '.2rem', fontWeight: '600'}}>React, Redux, JavaScript, CSS y HTML,</span> creando interfaces de usuario atractivas y funcionales. <br />
            En el <span style={{background: '#A6BBCC', color: '#221F1F', padding: '.2rem', fontWeight: '600'}}>Back-end</span> he trabajado con <span style={{background: '#A6BBCC', color: '#221F1F', padding: '.2rem', fontWeight: '600'}}>Node.js, Express y PostgreSQL,</span> consumiendo APIs y gestionando bases de datos. <br />
            <br />
            Estoy comprometida con el aprendizaje continuo y apasionada por aplicar y expandir mis habilidades en proyectos tecnológicos innovadores.
            <br />
            <br />
          </p>
        </section>

        <section className="expertise">
          <div>
            <h1>Desarrollador Web Jr</h1>
            <p>5 meses</p>
          </div>
          
          <div>
            <h1>Frontend Developer <br />(Programa de Prácticas Profesionales)</h1>
            <p>9 meses</p>
          </div>

          <div>
            <h1>Full-stack Developer <br />(Experiencia Académica)</h1>
            <p>1 año</p>
          </div>
        </section>

      </div>
    </div>
  )
}
