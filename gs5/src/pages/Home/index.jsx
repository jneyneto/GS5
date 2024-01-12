import './styles.css';
import HeaderDash from "../../components/HeaderDash"
import apresentacao from "../../assets/gs5_apresentacao.png"

export default function Home() {
  return (
    <div className="home">
      <HeaderDash />
      <div className="home-body-position">
        <section className="home-body">

          <div className="home-body-about">
            <img src={apresentacao} alt="" />
            <div className="home-body-about-hight">
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
        </section>
      </div>
    </div >
  );
}

