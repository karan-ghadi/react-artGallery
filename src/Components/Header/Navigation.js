import React from 'react';

const Navigation = (props) => {
	return (
		<div className="mainheader">
				<nav className="navbar navbar-expand-lg">
					<button
					className="navbar-toggler ml-auto"
					type="button" data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={props.clicked}
					>
					<span className="navbar-toggler-icon">
						<i className="fas fa-bars"></i>
					</span>
					</button>
					<div className={props.navClasses} id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
								<a className="nav-link" href="/dashboard">Dashboard</a>
							</li>
							<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
								<a className="nav-link" href="/server-onboarding">Server Onboarding</a>
							</li>
							<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
								<a className="nav-link" href="/network-design">Network Design</a>
							</li>
							<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
								<a className="nav-link" href="/blockchain-operation/create">Blockchain</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
	)
}

export default Navigation;