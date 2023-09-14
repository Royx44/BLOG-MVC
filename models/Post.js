// Import the necessary modules and dependencies.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a Post class that extends the Sequelize Model class.
class Post extends Model {}


Post.init(
    {
      
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
       
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Content of the post, required.
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        // User ID referencing the User model.
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        // Connect to the Sequelize instance.
        sequelize,
        freezeTableName: true,
        underscored: true,
   
        modelName: 'post'
    }
);


module.exports = Post;
