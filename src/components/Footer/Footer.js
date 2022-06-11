import React from "react";
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer () {
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-info__name">
      
        <h1>The Soul And The Moon</h1>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-social-media">
            <a href="/" target="_blank" rel="noopener noreferrer">Lien réseau social</a>
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            TheSoulAndTheMoon@gmail.com
          </section>
          <section className="footer-info__terms">
            Copyright The Soul And The Moon
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            Numéro de telephone
            <br/>
            99999999999
          </section>
          <section className="footer-info__contact">
            The soul and the moon
            <br />
            Email
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )
}

export default Footer;