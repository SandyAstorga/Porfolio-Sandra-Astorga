import { Icons } from "../Components/Icons/Icons"

export const Footer = () => {
  return (
    <div id="footer">

      <section>
        <a className="nav-link-footer" aria-current="page" href="/">
          <h1 className="name-footer">Sandra
            <span className="fw-light">Astorga</span>
          </h1>
        </a>
      </section>

      <section className="d-flex justify-content-center">
        <Icons/>
      </section>
    </div>
  )
}
