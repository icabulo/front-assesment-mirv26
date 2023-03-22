import React from "react"
import { Link } from "react-router-dom"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import GitHubIcon from "@mui/icons-material/GitHub"
import "./about.scss"

function About() {
  return (
    <div className="about">
      <section className="about__card">
        <div className="about__image-container">
          <h2 className="name">Ivan Cábulo</h2>
          <img
            src="https://avatars.githubusercontent.com/u/107958292?v=4"
            alt="Ivan Cabulo profile"
            className="profile__pic"
          />
          <p className="profile__lable">
            Software Developer & Mechanical Engineer
          </p>
        </div>
        <div className="about__contact-info">
          <h3>Bio</h3>
          <p className="bio">
            I&apos;m an enthusiastic web developer from Colombia, also learning
            how to code in a full stack bootcamp.
          </p>
          <h3>Contact Me</h3>
          <p>Email: ivancabulo@example.com</p>
          <p>
            My projects{" "}
            <Link
              to="https://github.com/icabulo"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              on GitHub
              <GitHubIcon className="link--icon" />
            </Link>
          </p>
        </div>
      </section>
      <section className="about__mision-recap">
        <h3>Nice tools that I learned with this project</h3>
        <ol>
          <li>
            React router dom
            <Link
              to="https://reactrouter.com/en/main"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <OpenInNewIcon className="link--icon" />
            </Link>
          </li>
          <li>
            CSS
            <ul>
              <li>
                Sass - CSS with superpowers-
                <Link
                  to="https://sass-lang.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <OpenInNewIcon className="link--icon" />
                </Link>
              </li>
              <li>
                BEM methodology
                <Link
                  to="https://en.bem.info/methodology/quick-start/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <OpenInNewIcon className="link--icon" />
                </Link>
              </li>
            </ul>
          </li>
          <li>
            React useContext hook
            <Link
              to="https://react.dev/reference/react/useContext"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <OpenInNewIcon className="link--icon" />
            </Link>
          </li>
        </ol>
      </section>
    </div>
  )
}

export default About
