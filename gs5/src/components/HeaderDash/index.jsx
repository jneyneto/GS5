import "./styles.css";
import "../../index.css";
import logo from "../../assets/logo_gs5.png";
import bkg from "../../assets/gs5_bkg1.png"
import { useEffect, useState } from 'react';


export default function HeaderDash() {
	const [scrolled, setScrolled] = useState("");
	const [fullScrolled, setFullScrolled] = useState("");
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset;
			if (scrollTop > 200) {
				setFullScrolled(true)
			} else if (scrollTop > 0) {
				setScrolled(true)
			} else {
				setScrolled(false)
				setFullScrolled(false)
			}
			console.log(scrollTop);
		}
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, []);



	return (
		<header className={`${fullScrolled ? "header-on-full-scroll" : scrolled ? "header-on-scroll" : ""}`}>
			<div className={`${(!scrolled && !fullScrolled) ? "hidden" : "header-logo"}`}>
				<img src={logo} alt="" />
			</div>
			<nav className="header-navigation">
				<a href="#home-about">Sobe Nós</a>
				<a href="">Serviços</a>
				<a href="#home-contact">Contatos</a>
			</nav>
		</header>
	);
};
