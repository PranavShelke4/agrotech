import React from "react";
import "./brands.scss";
import Amazon from '../../../assets/Amazon.svg'
import Facebook from '../../../assets/Facebook.svg'
import GitHub from '../../../assets/GitHub.svg'
import Google from '../../../assets/Google.svg'
import Instagram from '../../../assets/Instagram.svg'
import Microsoft from '../../../assets/Microsoft.svg'


const brands = () => {
  return (
    <>
      <div className="brand-container">
        <div className="brand-content">
          <div className="brands-title">
            <h2>Trusted by over 20,000 Partner</h2>
          </div>
          <div className="brands-subtitle">
            <h6>
              Our Partner availabe for join. Farmar is something importent for
              growth the country{" "}
            </h6>
          </div>
        </div>
        <div className="brand-logo">
            <div className="logo-container">
                <img src={Amazon} alt="amazon" />
                <img src={Facebook} alt="facebook" />
                <img src={GitHub} alt="gitHub" />
                <img src={Google} alt="google" />
                <img src={Instagram} alt="instagram" />
                <img src={Microsoft} alt="microsoft" />



            </div>
        </div>
      </div>
    </>
  );
};

export default brands;
