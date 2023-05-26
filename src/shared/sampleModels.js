
export const SampleMessage = (text, number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to" : number,
        "text" : {
            "body": text
        },
        "type": "text"
    })
    return data
}

export const SampleList = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "*Encuentra tu atención aquí 👇*"
            },
            "footer": {
                "text": "Selecione una de las opciones"
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Servicios",
                        "rows": [
                            {
                                "id": "main-servicios",
                                "title": "Servicios",
                                "description": "-- aquí van los servicios --"
                            },
                            {
                                "id": "main-soporte",
                                "title": "Soporte Técnico",
                                "description": "-- aquí va el soporte --"
                            }
                        ]
                    },
                    {
                        "title": "Atención Comercial",
                        "rows": [
                            {
                                "id": "main-atencion",
                                "title": "Atención Comercial",
                                "description": "-- aquí va la atención comercial --"
                            },
                            {
                                "id": "main-productos",
                                "title": "Productos",
                                "description": "-- aquí van los Productos --"
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

/* export const SampleList = (number) => {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "list",
                "header": {
                    "type": "text",
                    "text": "lista de weas"
                },
                "body": {
                    "text": "elija una opcion"
                },
                "footer": {
                    "text": "<FOOTER_TEXT>"
                },
                "action": {
                    "button": "<BUTTON_TEXT>",
                    "sections": [
                        {
                            "title": "elija si comprar o vender",
                            "rows": [
                                {
                                    "id": "<LIST_SECTION_1_ROW_1_ID>",
                                    "title": "comprar",
                                    "description": "comprar alguna wea, botones"
                                },
                                {
                                    "id": "<LIST_SECTION_1_ROW_2_ID>",
                                    "title": "gracias",
                                    "description": "vender alguna wea vuelve a la lista"
                                }
                            ]
                        }

                    ]
                }
            }
        }
    )
    return data
}
 */
export const SampleMessageButton = ( number) => {
    const data =JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "Botones"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "<UNIQUE_BUTTON_ID_1>",
                                "title": "comprar"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "<UNIQUE_BUTTON_ID_2>",
                                "title": "gracias"
                            }
                        }
                    ]
                }
            }
        }
    )
             return data 
}

export const  SampleImage = (number) =>{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",
        "image": {
            "link": "https://agencyagartha.cl/wp-content/uploads/2023/03/logo2.jpg"
        },
    });
    return data;
}

export const SampleAudio = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "audio",
        "audio": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
        },
    });
    return data;
}

export const SampleVideo = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "video",
        "video": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4"
        },
    });
    return data;
}