const User = require('./User');
const Post = require('./Post');
const comments = require('./comments');

User.hasMany(comment, {
  foreignKey: 'user_id',
  onDelete : 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

comments.belongsTo(User, {
    foreignKey: 'user_id'
});

comments.belongsTo(Post, {
    foreignKey: 'post_id'
});

Post.hasMany(comment, {
    foreignKey: 'user_id',
    onDelete : 'CASCADE'
});
module.exports = { User, Project };
