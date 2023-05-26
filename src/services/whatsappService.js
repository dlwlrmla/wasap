import https from "https"

export const SendMessageWhatsApp = (text, number) =>{

    const data =JSON.stringify({
        "messaging_product": "whatsapp",
        "to" : number,
        "text" : {
            "body": text
        },
        "type": "text"
    })

    const options = {
        host: "graph.facebook.com",
        // El "path" es unico, ya que depende de la cuenta de Meta.
        path: "/v16.0/115259601562338/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            // En este punto se el tipo de autorización a "Bearer" y se agrega el token permanente de cad acuenta personal
            Authorization: "Bearer "+process.env.BARIER
        }
    };
    const req = https.request(options, res => {
        res.on("data", d => {
            //process.stdout.write(d);
            //console.log(d)
            console.log("mensaje enviado exitosamente")
        });
    });

    req.on("error", error => {
        console.error("error de https ",error);
    });

    req.write(data);
    req.end();
}

