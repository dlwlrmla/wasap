import express from "express"
import router from "./routes/routes.js"
const PORT =3000
const app = express()
app.use(express.json())
app.use("/whatsapp", router)
app.listen(PORT, () => {
    console.log('app running on port http://localhost:3000/')
})