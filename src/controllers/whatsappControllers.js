import dotenv from "dotenv"
dotenv.config()

export const verifyToken = (req,res ) => {
    try {
        let accessToken = process.env.ACCESSTOKEN
        let token = req.query["hub.verify_token"]
        let challenge = req.query["hub.challenge"]

        if(challenge != null && token==accessToken){
            res.send(challenge)
        }else{
            res.status(400).send()
        }
    } catch (error) {
        res.status(400).send(   )
    }
}

export const receivedMessage = (req,res) =>{
    res.send("received message")
}