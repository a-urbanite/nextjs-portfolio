import React from 'react'
import styles from '../styles/components/CV.module.css'

const CV = () => {
  return (
    <div className={styles.CV}>
      <h2 className={styles.CV__heading2}>EDUCATION & TRAINING</h2>
      <ul>
        <li>Full Stack JavaScript - School of Applied Technology 
          Intensive three month training program for full stack web development with a focus on TDD, mob programming, and applied learning.</li>
        <li>Prehistoric Archaeology B.A. + M.A. - Freie Universitat Berlin
          October 2009 - November 2018, Erasmus in Rome in 2013</li>
        <li>Applied Computer Science B.Sc. - HTW Berlin
          April 2015 - November 2015 - unfinished</li>
        <li>Cultural Heritage Management Assistent
          October 2008 - September 2009</li>
      </ul>
      <h2 className={styles.CV__heading2}>WORK EXPERIENCE</h2>
      <ul>
        <li>Webmaster - Deutsches Archaologisches Institut
          April 2020 - December 2021 - Berlin, Germany
          Technical Management of PR Infrastructure including Wordpress and Liferay CMS, Atlassian stack</li>
        <li>Heritage Consultant - Artefact Pty Ltd.
          February 2019 - June 2019 - Sydney, NSW Australia Supervising	construction	works	from	an archaeological perspective</li>
        <li>Research Assistant - Deutsches Archaologisches Institut, Freie Universitat Berlin
          March 2012 - September 2018
          A sequence of employments with archaeological institutes and projects. Activities spanned from office work in Berlin to Field Work in Saudi Arabia, mostly revolving around Geodata and Research Data Management.
        </li>
      </ul>
      <h2 className={styles.CV__heading2}>TECHNICAL SKILLS</h2>
      <div className={styles.CV__skillListWrapper}>
        <div className={styles.CV__columnA}>
            <h3 className={styles.CV__heading3}>Languages</h3>
          <ul>
            <li>German - native</li>
            <li>English - fluent</li>
            <li>Italian - intermediate</li>
          </ul>
          <h3 className={styles.CV__heading3}>General</h3>
          <ul>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>PHP (basic)</li>
            <li>R (basic)</li>
          </ul>
          <h3 className={styles.CV__heading3}>Backend</h3>
          <ul>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB/ PostgreSQL/ GraphQL</li>
            <li>REST API</li>
          </ul>
        </div>
        <div className={styles.CV__columnB}>
          <h3 className={styles.CV__heading3}>Frontend</h3>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Webpack</li>
            <li>HTML/CSS</li>
          </ul>
          <h3 className={styles.CV__heading3}>Tools and technologies</h3>
          <ul>
            <li>Visual Studio Code</li>
            <li>Docker</li>
            <li>Git/GitHub/GitHub Actions</li>
            <li>Cloud Platforms (MongoDB Atlas, ElephantSQL, Heroku, AWS)</li>
            <li>TDD/BDD with Mocha/Jest</li>
            <li>Agile work methods CI/CD</li>
          </ul>
          <h3 className={styles.CV__heading3}>GeoData</h3>
          <ul>
            <li>QGIS/ArcGIS</li>
            <li>Meshlab</li>
            <li>Metashape</li>
            <li>WebMapping (Leaflet/ Openlayers/ ArcGIS Server)</li>
          </ul>
        </div>
      </div>
      {/* <h2>DOWNLOAD</h2> */}
      <div className={styles.CV__downloadWrapper}>
        <a className={styles.CV__downloadButton} href='/w11-extra-CV_alexander_staedtler.pdf' download>Download PDF</a>
        <a className={styles.CV__downloadButton} href='/w11-extra-CV_alexander_staedtler.docx' download>Download DOC</a>
      </div>
    </div>
  )
}

export default CV