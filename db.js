var Sequelize = require('sequelize');
var env = 'development';
var sql;

if (env === 'production') {
    // todo: add production DB connection info

} else {
    sql = new Sequelize(undefined, undefined, undefined, {
        'dialect': 'sqlite',
        'storage': __dirname + '/data/helpi.sqlite'
    });
}

/* Import models, assign to db object */
var db = {};

db.assigned 			=	sql.import(__dirname + '/models/assigned.js');
db.claimed 				= 	sql.import(__dirname + '/models/claimed.js');
db.rewards 				= 	sql.import(__dirname + '/models/rewards.js');
db.notification 		= 	sql.import(__dirname + '/models/notifications.js');
db.notificationType 	= 	sql.import(__dirname + '/models/notificationTypes.js');
db.status 				= 	sql.import(__dirname + '/models/statuses.js');
db.tasks 				= 	sql.import(__dirname + '/models/tasks.js');
db.token 				= 	sql.import(__dirname + '/models/token.js');
db.user 				= 	sql.import(__dirname + '/models/user.js');

db.sql = sql;
db.Sequelize = Sequelize;

/* Foreign Keys */

db.assigned.belongsTo(db.user);
db.user.hasMany(db.assigned);

db.assigned.belongsTo(db.tasks);
db.tasks.hasMany(db.assigned);

db.assigned.belongsTo(db.status);
db.status.hasMany(db.assigned);

db.claimed.belongsTo(db.user);
db.user.hasMany(db.claimed);

db.assigned.belongsTo(db.tasks);
db.tasks.hasMany(db.assigned);

db.claimed.belongsTo(db.rewards);
db.rewards.hasMany(db.claimed);

db.notification.belongsTo(db.user);
db.user.hasMany(db.notification);

db.notification.belongsTo(db.notificationType);
db.notificationType.hasMany(db.notification);

module.exports = db;