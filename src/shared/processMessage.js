import { createUser } from "../controllers/dbControllers.js"
import { SendMessageWhatsApp } from "../services/whatsappService.js"
import { SampleList, SampleMessage } from "./sampleModels.js"


export const processMessage = async (text, number) =>{
    text = text.toLowerCase()
    let models = []
    
    if(text.includes("hola")){
        let model = SampleMessage("Hola 🤖 En Agartha Marketing Agency te damos la bienvenida.\n\nTe has comunicado con Agartha Marketing Agency. Este es nuestro nuevo sistema de Chat Bot de Autoatención ABC System.\nEs una prueba Beta de este sistema por lo que agradecemos tu colaboración y sugerencias.\n\nEsta supervisada en tiempo real por ejecutivos humanos.\n\nUn gusto poder atenderte 🙌", number)
        let model2 = SampleList(number)
        models.push(model, model2)
        createUser(1, text)
        models.forEach(model => {
            SendMessageWhatsApp(model)
        })
    }


}