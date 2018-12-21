import React from 'react';
import logo from './../../assets/images/logo.png';
import profilePic from './../../assets/images/profile.png';
import notification from './../../assets/images/icons/notification.png';

const TopSection = () => {
	return (
		<div className="subheader">
			<div className="navbar navbar-expand-lg">
				<a className="navbar-brand" href="/">
					<img src={logo} className="d-inline-block align-top img-fluid" alt="elemential-logo" />
				</a>
				<div className="subheader-links ml-auto">
					<ul className="navbar-nav link-group">
						<li className="nav-item search">
							<form className="form">
								<div className="form-group">
									<input type="text" name="search" placeholder="Search.." className="search-box form-control" />
								</div>
							</form>
						</li>
						<li className="nav-item notification">
							<a href="/">
								<img src={notification} className="img-fluid" alt="" />
								<span className="notification-count">12</span>
							</a>
						</li>
					</ul>
					<ul className="navbar-nav profile">
						<li className="nav-item d-none d-sm-block">
							<a className="profile-img" href="/">
								<img src={profilePic} className="img-fluid rounded-circle" alt="profile pic" />
							</a>
						</li>
						<li className="nav-item dropdown">
							<a className="dropdown-toggle d-none d-sm-block" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<span className="">Name</span>
							</a>
							<a className="dropdown-toggle profile-img profile-img--mobile" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<img src={profilePic} className="img-fluid rounded-circle" alt="profile" />
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="/">Profile</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="/">Logout</a>
							</div>
						</li>
					</ul>
					<div className="clearfix"></div>
				</div>
			</div>
		</div>
	)
}

export default TopSection;