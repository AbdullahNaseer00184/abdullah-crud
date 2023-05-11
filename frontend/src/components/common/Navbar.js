import React from "react";
import { NavLink,useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate()
  let adminemail = sessionStorage.getItem("userEmail")
  const sesionExpire = ()=>{
    sessionStorage.clear()
    navigate("/pages/login")
  }

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<NavLink className="navbar-brand" hrefLang="https://google.com" to="/">
					Abdullah's App
				</NavLink>
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#mobileMenu"
					aria-controls="mobileMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="toggler-icon top-bar"></span>
					<span className="toggler-icon middle-bar"></span>
					<span className="toggler-icon bottom-bar"></span>
				</button>
				<div className="collapse navbar-collapse" id="mobileMenu">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/new"
							>
								Create
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds"
							>
								CRUDs
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/grid-view"
							>
								Grid View
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/list-view"
							>
								List View
							</NavLink>
						</li>
{
	(adminemail)?
						<li className="nav-item">
							<button
								className="btn btn-primary"
								activeClassName="active"
								onClick={sesionExpire}
								>
								Log Out
							</button>
						</li> :
						<div className="d-flex">

						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/pages/login"
								>
								Login
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/pages/signup"
								>
								Signup
							</NavLink>
						</li>
								</div>
}

					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
