module.exports = function (sequelize, DataTypes){
	var email = sequelize.define('email,' {
		email: DataTypes.STRING,
		subject: DataTypes.STRING,
		text: DataTypes.STRING,
	});
	return email;
}