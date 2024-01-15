import './styles.css';
import HeaderDash from "../../components/HeaderDash";
import FooterDash from "../../components/FooterDash";
import apresentacao from "../../assets/gs5_apresentacao.png";
import bkg from "../../assets/gs5_bkg1.png";
import contato from "../../assets/contato.png";
import contatos from "../../assets/gs5_bkg_contato.png";
import ig from "../../assets/ig.png";
import mail from "../../assets/mail.png";
import wpp from "../../assets/wpp.png";
import wpp_ from "../../assets/wpp_.png";
import { useEffect, useState } from 'react';

export default function Home() {

  return (
    <div className="home">
      <HeaderDash />
      <section className="home-background">
        <img src={bkg} alt="" />
      </section>
      <div className="home-body-position">

        <section className="home-body" id="home-about">

          {/* sobre */}

          <div className="home-body-about" >
            <img src={apresentacao} alt="" />
            <div className="home-body-about-right">
              <h3>Sobre Nós</h3>
              <p>A Gabriela Souza engenharia é uma empresa de construção civil com atuação em todo o territorio nacional. A Gabriela Souza engenharia tem uma longa história de construção de todos os projetos de construção. A empresa é conhecida por sua qualidade de construção, seu compromisso com o cliente e seu serviço excepcional.

                <br />
                <br />
                A Gabriela Souza engenharia emprega uma equipe de profissionais experientes e qualificados que estão dedicados a fornecer aos seus clientes os melhores serviços possíveis. A empresa também oferece uma ampla gama de serviços de construção, incluindo design, construção, gerenciamento de projetos e manutenção.
                <br />
                <br />
                Se você está procurando uma empresa de construção civil confiável e experiente, a Gabriela Souza engenharia é a escolha certa para você. A empresa tem uma longa história de sucesso e está comprometida com a qualidade, o serviço e o atendimento ao cliente.
                <br />
                <br />
                Entre em contato com a Gabriela Souza engenharia hoje para saber mais sobre seus serviços e como eles podem ajudar você a construir seu próximo projeto.
              </p>
            </div>
          </div>

          {/* serviços */}

          <div className="home-section-line" id="home-services"> </div>

          <div className="home-body-services">
            <div className="home-body-services-left">
              <h3>Serviços</h3>
              <p>Se está precisando de serviços de engenharia civil, aqui é o seu lugar! Oferecemos uma ampla gama de serviços, desde projetos arquitetônicos e estruturais até consultoria e execução de obras.
                <br />
                <br />
                Nossa equipe é composta por profissionais altamente qualificados e experientes, que estão sempre à disposição para atender às suas necessidades.
                <br />
                <br />
                Oferecemos serviços de:
                <br />
                <br />
                Projetos arquitetônicos e estruturais
                <br />
                Consultoria em engenharia civil
                <br />
                Execução de obras
                <br />
                <br />
                Entre em contato conosco e saiba mais sobre nossos serviços.
                <br />
                <br />
                Estamos à disposição para ajudá-lo a encontrar a melhor solução para o seu projeto.
              </p>
            </div>
            <img src={contato} alt="" />
          </div>

          {/* contatos */}

          <div className="home-section-line" id="home-contact"> </div>

          <div className="home-body-contact">
            <div className="home-body-contact-top">
              <div className="home-body-contact-bottom">
                <img className="pointer" src={ig} alt="" />
                <img className="pointer" src={mail} alt="" />
                <img className="pointer" src={wpp} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div >
      <FooterDash />
    </div >
  );
}

