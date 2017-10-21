var React = require('react');
var ReactDOM = require('react-dom');

// const Hello = () => {
// 	return (
// 		<div>This is done by react and probably where i will link instagram api</div>
// 	)
// }

// ReactDOM.render(
// 	<Hello />,
// 	document.getElementById('app')
// );

const Footer = () => {
	return (
		<div className="row">
			<div className="icons col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p id="privacy" className="footerText"><a href="/privacyPolicy.html">Privacy Policy</a></p>
			</div>

			<div className="footerText col-xs-12 col-sm-12 col-md-6 col-lg-6">
        		<p id="copyright">Copyright 2017 Sarah Diaz-Rivera</p> 
        	</div>

			<div className="icons col-xs-12 col-sm-12 col-md-3 col-lg-3">
	        	<a href="https://github.com/sdr2017" target="_blank"><img
	          	id="github"
	            alt="github"
	            src="assets/images/github.png"
	          	/></a>
	        	<a href="https://www.linkedin.com/in/sarah-diaz-rivera/" target="_blank"><img
	          	id="linkedin"
	            alt="linkedin"
	            src="assets/images/linkedin.png"
	          	/></a>
	          	<a href="https://dribbble.com/sdrivera" target="_blank"><img
	          	id="dribbble"
	            alt="dribbble"
	            src="assets/images/dribbble.png"
	          	/></a>
	          	<a href="https://www.instagram.com/sarahdiazrivera/" target="_blank"><img
	        	id="instagram"
	            alt="instagram"
	            src="assets/images/instagram.png"
	          	/></a>
        	</div>        	
		</div>
	)
}

// const Copyright = () => {
// 	return (
// 		<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
//         	<p>Copyright 2017 Sarah Diaz-Rivera</p> 
//         </div>
// 	)
// }

// ReactDOM.render(
// 	<Copyright />,
// 	document.getElementById('copyright')
// );

// const Icons = () => {

// 	return (
// 		<div className="icons col-xs-12 col-sm-12 col-md-6 col-lg-6">
//         	<img
//             alt="instagram"
//             src="assets/images/instagram.png"
//             width="100%"
//           />
//         </div>
//     )
// }

// ReactDOM.render(
// 	<Icons />,
// 	document.getElementById('icons')
// );

ReactDOM.render(
	<Footer />,
	document.getElementById('footer')
);


