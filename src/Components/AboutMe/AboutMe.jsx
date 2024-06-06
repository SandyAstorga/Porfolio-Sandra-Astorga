

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
            Mi enfoque principal se centra en el <span style={{background: '#A6BBCC', color: '#221F1F', padding: '.2rem', fontWeight: '600'}}>Front-end,</span> donde he concentrado mis esfuerzos en proyectos recientes. <br />
            Poseo habilidades en el manejo de tecnologías como <span style={{background: '#A6BBCC', color: '#221F1F', padding: '.2rem', fontWeight: '600'}}>JavaScript, React.js, HTML, CSS, PostgreSQL y Node.js.</span> <br />
            <br />
            Siempre estoy dispuesta a colaborar en proyectos emocionantes y a trabajar con equipos apasionados por la tecnología.
            Espero tener la oportunidad de contribuir a proyectos exitosos e innovadores en el mundo digital. <br />
          </p>
        </section>

        <section className="expertise">
          <div>
            <h1>Desarrollador Web Jr</h1>
            <p>5 meses</p>
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
