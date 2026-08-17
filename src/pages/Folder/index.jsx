import './styles.css';
import logo from "../../assets/logo_gs5.png";
import FooterDash from "../../components/FooterDash";


const Folder = () => {
  return (<>
    <header>
      <img src={logo} alt="" />
    </header>
    <section className='body'>
      <button className='pointer' onClick={() => { window.location.href = "https://wa.me/556791012332?text=Olá%20!" }}>
        whatsap
      </button>
      <button className='pointer' onClick={() => { window.location.href = "https://www.instagram.com/gamaengenhariaeagro?utm_source=qr" }}>
        Instagran
      </button>
     </section>
    <FooterDash />

  </>);
}

export default Folder;
