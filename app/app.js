var React = require('react');
var ReactDOM = require('react-dom');

const Footer = () => {
	return (
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p className="footerText"><a id="privacy" href="/privacyPolicy.html">Privacy Policy</a></p>
			</div>

			<div className="footerText col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p id="copyright">Copyright 2017 Sarah Diaz-Rivera</p> 
			</div>

			<div className="icons col-xs-12 col-sm-12 col-md-3 col-lg-3">
				
				<a href="https://github.com/sdr2017" target="_blank"><img
				id="github"
				alt="github"
				src="assets/images/github.svg"
				/></a>

				<a href="https://www.linkedin.com/in/sarah-diaz-rivera/" target="_blank"><img
				id="linkedin"
				alt="linkedin"
				src="assets/images/linkedin.svg"
				/></a>

				<a href="https://dribbble.com/sdrivera" target="_blank"><img
				id="dribbble"
				alt="dribbble"
				src="assets/images/dribbble.svg"
				/></a>

				<a href="https://www.instagram.com/sarahdiazrivera/" target="_blank"><img
				id="instagram"
				alt="instagram"
				src="assets/images/instagram.svg"
				/></a>

			</div>        	
		</div>
	)
}

ReactDOM.render(
	<Footer />,
	document.getElementById('footer')
);


