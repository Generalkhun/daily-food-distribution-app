/** External packages */
import * as express from "express"
import * as cors from 'cors'
// const pool = require("./services/database/db_connect");

/** Routes middleware */
const villagerSheetInfos = require("./routes/villagerSheetInfos")
const villagerSheetInfo = require("./routes/villagerSheetInfo")

const itemsCatInfos = require("./routes/itemsCatInfos")
const itemsCatInfo = require("./routes/itemsCatInfo")

//app setup
const app = express();

//middleware setup
app.use(cors()); // use cors on app
app.use(express.json()); // use express.json to get data from request.body

//Routes middlewares
// villagerSheet data
app.use('/villagerSheetInfos', villagerSheetInfos);
app.use('/villagerSheetInfo', villagerSheetInfo);

// itemCat data
app.use('/itemsCatInfos', itemsCatInfos);
app.use('/itemsCatInfo', itemsCatInfo);


// listen
app.listen(5000, () => {
    console.log("Start server on local");
})

