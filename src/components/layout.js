import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Pdf from "../pdf/document.pdf"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="global-header">

        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link to="/">
        <h1 className="global-header">{title}</h1>
      </Link>
    )
  }

  function backHistory() {
    if (window.location.href === "https://augustthorell.github.io/ricola-gatsby/") {
      window.location.href = 'https://augustthorell.github.io/Ricola/#/';
    } else {
      window.history.back()
    }
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>

      <button onClick={backHistory} onKeyDown={backHistory} className="buttons" id="backButton">Back</button>

      <div className="logoContainer">
        <a href="https://augustthorell.github.io/Ricola/#/">
          <StaticImage src="../images/ricola-logo.png" className="logo" alt="Ricola logo in dark green" />
        </a>
      </div>

      <header className="global-header">{header}</header>

      <div className="buttonContainer">

        <Link to="/">
          <button className="buttons">Into The Nature</button>
        </Link>
        <Link to="/sustainabilityKnowledge" >
          <button className="buttons">Sustainability Knowledge</button>
        </Link>
        <a href={Pdf + "#toolbar=0"}>
          <button className="buttons">Sustainability Lifestyle</button>
        </a>
      </div>

      <main>{children}</main>

      <footer></footer>
    </div >
  )
}

export default Layout
