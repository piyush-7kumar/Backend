const router= require("express").Router();

const {getCurrencies,getCurrenciesWithSymbol} = require("../controllers/currencies.controller");




router.get("/", getCurrencies);
router.get("/:symbol", getCurrenciesWithSymbol);


module.exports = router