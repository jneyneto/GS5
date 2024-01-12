import "./styles.css";
import logo from "../../assets/gs5_logo_b.png";
import bkg from "../../assets/gs5_bkg1.png"



export default function HeaderDash() {

	return (
		<header>
			<div className="header-logo">
				<img src={logo} alt="" />
			</div>
			<nav className="header-navigation">
				<a href="">Sobe Nós</a>
				<a href="">Serviços</a>
				<a href="">Contatos</a>
			</nav>
			<div className="header-background">
				<img src={bkg} alt="" />
			</div>
		</header>
	);
};
