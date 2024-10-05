import './styles.css';
import logo from "../../assets/logo_gs5.png";
import FooterDash from "../../components/FooterDash";
import { Navigate } from 'react-router-dom';


const Folder = () => {
  return (<>
    <header>
      <img src={logo} alt="" />
    </header>
    <section className='body'>
      <button>
        Site em construção ...
      </button>
      <button onClick={() => { window.location.href = "https://wa.me/5584998188083?text=teste%20de%20teste" }}>
        Jogo do tigrinho
      </button>
      <button>
        Jogo do roleta
      </button>

    </section>
    <FooterDash />

  </>);
}

export default Folder;