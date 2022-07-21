const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true},
    email : {type : DataTypes.STRING, unique : true},
    password : {type : DataTypes.STRING, allowNull : false},
    banned :({type : DataTypes.BOOLEAN, defaultValue : false}),
    bannReason :({type : DataTypes.STRING, allowNull : true})
})

const Role =  sequelize.define('role',  {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true},
    value : ({type : DataTypes.STRING, unique : true, allowNull : false}),    
    description : ({type : DataTypes.STRING, unique : true, allowNull : false})    
})

const UsersRoles = sequelize.define('users_roles', {
    id : ({type : DataTypes.INTEGER, unique : true, autoIncrement : true, primaryKey : true} )
},  {     
    timestamps: true,
    createdAt: false, 
    updatedAt: false}
)

const Post = sequelize.define('post', {
    id : ({type : DataTypes.INTEGER, unique:true, autoIncrement : true, primaryKey : true}),    
    title : ({type : DataTypes.STRING, unique : true, allowNull : false}),    
    context : ({type : DataTypes.STRING, allowNull : false}),        
    status : ({type : DataTypes.STRING, defaultValue : 'public'})    
})

User.hasMany(Post)
Post.belongsTo(User)

User.belongsToMany(Role, {through : UsersRoles})
Role.belongsToMany(User, {through : UsersRoles})

module.exports = {
    User,
    Post,
    Role,
    UsersRoles
}