class UserController{
    async createUser(req, res){
        await res.status(200).json({message : "Create User"})
    }

    async getAllUsers(req, res){
        await res.status(200).json({message : "Get all users"})
    }

    async addRoleToUser(req, res){
        await res.status(200).json({message : "Add role to user"})
    }


}

module.exports = new UserController();



    
