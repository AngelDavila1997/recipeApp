import React from 'react';
import './NavigationBar.css';

const NavigationBar = () =>{
	return (
		<div>
			<nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar bar-height"> 
        		<div className="container"><a className="navbar-brand logo logo-text navtext" href="https://google.com" >&nbsp;La Casa de las Recetas</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            		<div className="collapse navbar-collapse" id="navcol-1">
                		<ul className="nav navbar-nav ml-auto navnav">
                    		<li className="nav-item" role="presentation"><a className="nav-link" href="index.html">INICIO</a></li>
                    		<li className="nav-item" role="presentation"><a className="nav-link" href="features.html">¿QUÉ HACEMOS?</a></li>
                		</ul>
        			</div>
       	 		</div>
    		</nav>
		</div>
	);
}

export default NavigationBar;