module.exports 	=	function(sqlize,DataTypes) {
	var claim 	=	sqlize.define('claim', {
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		rewardId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		statusId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1
		}
	});
	return claim;
};