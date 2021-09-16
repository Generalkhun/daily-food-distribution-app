import * as express from "express"
const router = express.Router();


/** Business layer */
const { getItemCatInfos } = require("../controller/itemCatInfos");

// get all villager sheet data
router.get('/',getItemCatInfos)

module.exports = router;