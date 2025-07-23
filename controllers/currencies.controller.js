
const currenciesJson = require("../currencies.json")



const getCurrencies = (req,res)=>{
    const min_value = req.query.min_value;
    if (min_value) {
        const result = currenciesJson.data.filter(item=>Number(item.min_size)==Number(min_value))
        res.json(result)
    } else {
        res.json(currenciesJson.data);
    }

};

const getCurrenciesWithSymbol = (req,res)=>{
    const currency = req.params.symbol;
    const result = currenciesJson.data.find(item=>
        item.id === currency.toUpperCase()
    )

    if (result) {
        res.send(result)
    } else {
       res.sendStatus(404)
    }
    
};



module.exports = {getCurrencies,getCurrenciesWithSymbol};