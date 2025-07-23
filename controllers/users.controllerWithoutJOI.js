const userJson = require("../users.json");


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

    if(!gender&&!age){
        res.status(422).json({message:"Missing Search Parameters, search using age or gender"})
    }
    if(gender&&age){
        const result = userJson.data.filter(item=>item.gender==gender&&Number(item.dob.age)>=Number(age))
        res.status(200).send(result);

    }else if(gender){
        
        if(!["male","female",].includes(gender)){
            res.status(422).json({message:"Gender to search can either be male or female"})
        }else{
        const result = userJson.data.filter(item=>item.gender==gender)
        res.status(200).send(result);
        }

    }else if(age){

        if(!Number(age)){
            res.status(422).json({message:"Age parameter should be a number"})
        }else if(age>100||age<0){
            res.status(422).json({message:"Age out of bounds. It should be a number between 0 to 100"})
        }else{
        const result = userJson.data.filter(item=>item.dob.age=age)
        res.status(200).send(result);
        }    

    }
}



module.exports = {getAllUsers,getUserByUuid,SearchUserByQuery}
