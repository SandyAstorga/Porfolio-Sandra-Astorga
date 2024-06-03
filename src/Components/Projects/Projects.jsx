import gymgo from '../../assets/gymgo.jpg'
import piFood from '../../assets/pifood.jpg'
import sandyadev from '../../assets/sandyadev.jpg'
import frontEndMentor from '../../assets/frontendmentor2.jpg'

export const Projects = () => {
  return (
    <div id='projects'>
      <br />

      <div id="projects" className="container-sections">
        <section className="d-flex justify-content-around align-items-center section-title">
          <h1>Proyectos</h1>
          <div className="rounded line-sections"></div>
        </section>

        <div className="d-flex flex-column justify-content-center gap-3 pt-3">
          <section className="school">
            <h1>Académicos</h1>

            <div className="d-flex justify-content-around images">
              <a href="https://gym-go-five.vercel.app" target="_blank">
                <img src={gymgo} alt="gymgo" />
                <p className='mb-0'>
                  GymGo
                </p>
                <p className='mb-0 stack'>Javascript • React • Tailwind</p>
              </a>

              <div className='d-flex flex-column'>
                <a href="https://pi-food-deploy-ten.vercel.app" target="_blank">
                  <img src={piFood} alt="pifood" />
                  <p className='mb-0'>Bon Appetit</p>
                  <p className='mb-0 stack'>Javascript • React • css</p>
                </a>
              </div>
            </div>
          </section>

          <section className="personal mt-3">
            <h1>Personales</h1>

            <div className="d-flex justify-content-around images">
              <div className='d-flex flex-column'>
                <a href="https://sandya-dev.vercel.app" target="_blank">
                  <img src={sandyadev} alt="blog" />
                  <p className='mb-0'>SandyADev</p>
                  <p className='mb-0 stack'>Javascript • React • css</p>
                </a>
              </div>

              <div className='d-flex flex-column'>
                <a href="https://www.frontendmentor.io/profile/SandyAstorga" target="_blank">
                  <img src={frontEndMentor} alt="frontendmentor" />
                  <p className='mb-0'>FrontEnd Mentor (Desafíos)</p>
                  <p className='mb-0 stack'>Javascript • HTML • css</p>
                </a>
              </div>
            </div>
          </section>

          {/* <section className="news mt-3">
            <h1>Maquetado de proyectos</h1>

            <div className="d-flex justify-content-around images">
              <div className='d-flex flex-column'>
                <a href="">
                  <img src="" alt="" />
                  <p className='mb-0'>idea uno</p>
                  <p className='mb-0 stack'>Figma</p>
                </a>
              </div>

              <div className='d-flex flex-column'>
                <a href="">
                  <img src="" alt="" />
                  <p className='mb-0'>idea dos</p>
                  <p className='mb-0 stack'>Figma</p>
                </a>
              </div>
            </div>

          </section> */}
        </div>

      </div>
    </div>
  )
};
