const Footer = () => {
	const link = "https://google.com";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> ABDULLAH 5021{" "}
			<a href={link} target={target}>

			</a>
		</div>
	);
};

export default Footer;
