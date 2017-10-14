var React = require('react');
var ReactDOM = require('react-dom');

const Hello = () => {
	return (
		<div>This is done by react and probably where i will link instagram api</div>
	)
}

ReactDOM.render(
	<Hello />,
	document.getElementById('app')
);

const Copyright = () => {
	return (
		<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        	<p>Copyright 2017 Sarah Diaz-Rivera</p> 
        </div>
	)
}

ReactDOM.render(
	<Copyright />,
	document.getElementById('copyright')
);

const Icons = () => {

	return (
		<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        	<img
            alt="instagram"
            src="assets/images/instagram.png"
            width="100%"
          />
        </div>
    )
}

ReactDOM.render(
	<Icons />,
	document.getElementById('icons')
);


