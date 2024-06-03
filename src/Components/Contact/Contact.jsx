import { Footer } from "../../Layouts/Footer";
import { FormMessage } from "../Form/FormMessage.jsx"

export const Contact = () => {
  return (
    <div id='contact'>
      <br />
      <div id="contact" className="container-sections">

        <section className="d-flex justify-content-around align-items-center section-title">
          <h1>Contacto</h1>
          <div className="rounded line-sections"></div>
        </section>

        <section className="d-flex justify-content-between align-items-center section-contact">
          <div className="container-footer-form">
            <Footer />
          </div>

          <div className="contact-form">
            <p className="text">¡Gracias por visitar mi perfil y espero podamos trabajar juntos!</p>
            
            <FormMessage />
          </div>

        </section>

      </div>
    </div>
  )
}
