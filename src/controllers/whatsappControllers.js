export const verifyToken = (req,res ) => {
    try {
        let accessToken = "123"
        let token = req.query["hub.verify_token"]
        let challenge = req.body["hub.challenge"]

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