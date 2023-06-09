import express from "express"
import { test } from "./controllers/dbControllers.js"
import dotenv from "dotenv"
import router from "./routes/routes.js"
dotenv.config()
const PORT =process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use("/whatsapp", router)
app.listen(PORT, async() => {
    console.log(`app running on port http://localhost:${PORT}/:`)
    test()
})