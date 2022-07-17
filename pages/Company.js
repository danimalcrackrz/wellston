import React from "react"

const Company = () => {
  return (
    <div className='company'>
      <div className='company-about'>
        <span className='company-about-title'>About Us</span>
        <p className='company-about-content'>
          Wellston Associates Land Surveyors, LLC is equipped with experienced
          personnel prepared to handle the unique demands and time constraints
          of Architects, Engineers, Attorneys, Contractors, and Developers
          involved in site investigation and land development.
        </p>
        <p className='company-about-content'>
          Our office is located in Warner Robins Ga. enabling us to easily
          service areas throughout Georgia. We have the technological
          capabilities to customize our work to meet your project needs, large
          or small. We strive to provide our clients with completed survey
          projects that will meet or exceed all requirements and will expedite
          the progress of any project. We will utilize the latest available
          technology to collect and process our data.
        </p>
        <p className='company-about-content'>
          All our work is prepared in conformance with
          <a
            href='https://law.justia.com/codes/georgia/2010/title-15/chapter-6/article-2/15-6-67'
            className='company-about-content-link'
          >
            {" "}
            O.C.G.A. 15-6-67{" "}
          </a>
          and ALTA/ACSM standards (American Land Title Association/American
          Congress for Surveying and Mapping). We also maintain Professional
          Liability insurance coverage and all other insurance coverage required
          by state law. Certificates can be issued upon request identifying
          details and limits of coverage.
        </p>
        <span className='company-about-footer'>
          Call us for a free quote: (478)-971-3382
        </span>
      </div>
    </div>
  )
}

export default Company
