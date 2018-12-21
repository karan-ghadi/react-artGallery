import React from 'react';

const Stateless = (props) => {
	return (
		<div className="components">
      <div className="component-head">
    <h4>Terminal</h4>
			</div>
			<div className="terminal-window">
      <div className="progress">
					<div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
      </div>
      <div className="text-center">
          <h3> Blockchain deployed and ready to use </h3>
      </div>
      <div className="shell-wrap">
          <p className="shell-top-bar">/fabric/terminal</p>
          <ul className="shell-body">
              <li>cd&nbsp;/Users/pjlangley/Documents/websites/codechewing.com/git/css-shell/demo/</li>
              <li>cd ../../../../</li>
              <li>pwd</li>
              <li>/Users/pjlangley/Documents/websites/</li>
          </ul>
      </div>
  </div>
    </div>
	)
}

export default Stateless;