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
            res.status(400).send("accesstoken invalido")
        }
    } catch (error) {
        res.status(400).send()
    }
}

export const receivedMessage = (req,res) =>{
    try {

        var number =req.body.entry[0].changes[0].value.messages[0].from;
        var textazo =req.body.entry[0].changes[0].value.messages[0].text.body;
        var type = req.body.entry[0].changes[0].value.messages[0].type
        console.log("message",req.body)
        console.log("textazo", textazo)
        console.log("number", number)
        console.log("type", type)
        res.send("EVENT_RECEIVED")
        
    } catch (error) {
        res.send("EVENT_RECEIVED")
    }
}