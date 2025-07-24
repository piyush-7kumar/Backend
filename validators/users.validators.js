const Joi = require("joi");

const validGenders = ["female","male"];

const schema = Joi.object({

    age:Joi.number().integer().min(0).max(100),
    gender:Joi.string().valid(...validGenders)

}).or("age","gender"); 

//.or("age","gender") =>.min(1); both are same


const getQueryErrors = (data) => schema.validate(data);

module.exports = {getQueryErrors}