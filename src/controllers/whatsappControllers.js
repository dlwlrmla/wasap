import dotenv from "dotenv"
import { SendMessageWhatsApp } from "../services/whatsappService.js"
import { SampleList, SampleMessage, SampleMessageButton } from "../shared/sampleModels.js"
import { processMessage } from "../shared/processMessage.js"
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
/*         let entry = (req.body["entry"])[0]
        let changes = (entry["changes"])[0]
        let value = changes["value"]
        let messageObject = value["messages"]

        if( typeof messageObject != null){
            let messages = messageObject[0]
            let text = getTextUser(messages)
            console.log(text)

        } */
        console.log(type)
        console.log(number)
        console.log(textazo)
        console.log(req.body)
/*         let model = SampleMessage(textazo, number)
        SendMessageWhatsApp(model) */
        if(textazo != null && number != null){
            processMessage(textazo, number)
        }
        res.send("EVENT_RECEIVED")  
        
    } catch (error) {
        res.send("EVENT_RECEIVED")
    }
}

function GetTextUser(messages){
    var text = "";
    var typeMessage = messages["type"];
    if(typeMessage == "text"){
      text = (messages["text"])["body"];
    }
    else if(typeMessage == "interactive"){
  
      var interactiveObject = messages["interactive"];
      var typeInteractive = interactiveObject["type"];
  
      if(typeInteractive == "button_reply"){
        text = (interactiveObject["button_reply"]["title"]);
      }
      else if(typeInteractive == "list_reply"){
        text = (interactiveObject["list_reply"]["title"]);
  
      }else{
        myConsole.log("Sin mensaje");
      }
    }else{
      myConsole.log("Sin mensaje");
    }
    return text;
  }