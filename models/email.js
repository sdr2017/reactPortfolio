module.exports = function (sequelize, DataTypes){
	var email = sequelize.define('email,' {
		email: DataTypes.STRING,
	});
	return email;
}