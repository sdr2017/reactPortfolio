module.exports = function (sequelize, DataTypes){
	var emailAddress = sequelize.define('emailAddress', {
		emailAddress: {type: DataTypes.STRING,
			validate: {
				isEmail: true,
			}}
	});
	return emailAddress;
}