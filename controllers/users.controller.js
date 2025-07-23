const userJson = require("../users.json");
const {getQueryErrors} = require("../validators/users.validators")

const getAllUsers = (req,res)=>{
    res.send(userJson.data)
}

const getUserByUuid = (req,res)=>{
   const uuid = req.params.uuid;
    const user = userJson.data.find(item=>item.login.uuid===uuid)
    if(user){
        res.send(user)
    }else{
        res.sendStatus(404)
    }
    
}

const SearchUserByQuery = (req,res)=>{
    
    const gender = req.query.gender;
    const age = req.query.age;

    const { error } = getQueryErrors({ age: age && Number(age), gender });
    
    if (error) {
    return res.status(422).json({ message: error.details[0].message });
    }

    if(gender&&age){
        const result = userJson.data.filter(item=>item.gender==gender&&Number(item.dob.age)>=Number(age))
        res.status(200).send(result);

    }else if(gender){
        
        const result = userJson.data.filter(item=>item.gender==gender)
        res.status(200).send(result);

    }else if(age){

        const result = userJson.data.filter(item=>item.dob.age>=age)
        res.status(200).send(result);

    }
}



module.exports = {getAllUsers,getUserByUuid,SearchUserByQuery}
