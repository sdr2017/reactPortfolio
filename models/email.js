module.exports = function (sequelize, DataTypes){
	var emailAddress = sequelize.define('emailAddress', {
		emailAddress: DataTypes.STRING,
	});
	return emailAddress;
}