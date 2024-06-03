import image from '../assets/profile.jpeg'

export const Home = () => {
  return (

    <div id='home'>
      <br />

      <div id='home' className="d-flex justify-content-center align-items-center container-sections gap-3 home">

        <section className='text-home p-3'>
          <p>Hola, Soy Sandra, </p>
          <h1>Full Stack</h1>
          <h1>Web Developer</h1>
          <br />
          <p>
            <a className="contact-link"  href='/CV Sandra Astorga.pdf' download={''}>
              Descargar CV
            </a>
          </p>
        </section>

        <section className='d-flex justify-content-center align-items-center'>
          <img className='rounded profile' src={image} alt="image" />
        </section>

      </div>
    </div>
  )
}
