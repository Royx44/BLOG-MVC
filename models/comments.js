const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the Comment model
class Comment extends Model {}

// Initialize the Comment model with its attributes
Comment.init(
    {
        // Unique identifier for the comment
        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // The content of the comment
        comment_text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        // The user who made the comment
        commenter_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'user_id'
            }
        },
        // The post to which the comment belongs
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'post_id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;
