exports.alive = async(req,res,next) => {
    try {
        const clients = 'is alive';
        res.json(clients);
    } catch (error) {
        console.log(error);
        next()
    }
}
 
exports.login = async(req,res,next) => {
    try {
        const body =req.body;
        const email =body.email;
        const password =body.password;
        var response = "";
        if(((email != undefined && email != null) && (email !='')) && ((password != undefined && password != null) && (password !=''))){
            console.log('paso por condicion');
            token = {
                "tokenNs": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGV2LXNlcnZpY2Utbm9zaXMucHJvdmluY2lhbmV0LmNvbS5hclwvXC9sb2dpbiIsImlhdCI6MTY5ODE1NzMzMSwiZXhwIjoxNjk4MTU4MjMxLCJuYmYiOjE2OTgxNTczMzEsImp0aSI6IjRhUjZ4eTU0V0lXSXRmZUgiLCJzdWIiOiJlNmM5ZDUyMC00YjNmLTExZWUtOWIxYS0wMzVjNWRjZDkxZTYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.-0bPreGGzagxZeqOUPlGAvruZf2CJ4_vSXJZvVmACvU"
            }
            response = token;
 
        }else{
            console.log('no paso paso por condicion');
            response = {
                "message": "Datos requeridos no ingresados",
                "code": 403
            }
           
        }
        res.json(response);
    } catch (error) {
        console.log(error);
        next()
    }
}
exports.statusCase = async(req,res,next) => {
    try {
        const body =req.body;
        const type =body.body_type;
        const caso =body.body_caso;
        var response = "";
        if(((type != undefined && type != null) && (type !='')) && ((caso != undefined && caso != null) && (caso !=''))){
            loggerData(body)
            
            let estado = getEstado(caso)
            if (estado != "Caso no existe") {
                let condition = getCondition()
                response ={
                    "data": {
                        "estado": estado,
                        "condicion":condition
                    },
                    "status": "success",
                    "code": 200
                }
            } else {
                response = {
                    "data": {
                        "error": "No se encontraron datos"
                    },
                    "status": "success",
                    "code": 200
                }
            }
        }else{
            response = {
                "data": {
                    "error": "Error en la solicitud"
                },
                "status": "success",
                "code": 200
            }
           
        }
        res.json(response);
    } catch (error) {
        console.log(error);
        next()
    }
}
 
exports.getCaseDni = async(req,res,next) => {
    try {
 
        const body =req.body;
        const type =body.body_type;
        const caso =body.body_documento;
        console.log ("DNI");
        loggerData(body);
 
        var response = "";
        if(((type != undefined && type != null) && (type !='')) && ((caso != undefined && caso != null) && (caso !=''))){
            console.log('//caso');
            console.log(caso);
            if (caso == "1") {
                response = {
                    "data": {
                        "CantOpciones": 0,
                        "message": "No se encontró ningún caso.",
                    },
                    "status": "success",
                    "code": 200
                }
               }else if(caso === "2"){
                response = {
                    "data": {
                        "CantOpciones": 3,
                        "opcion1": {
                            "NroReclamo": 'CASO0001',
                            "InfoReclamo": "01/11/2023 - Motivo1 - Submotivo1 - 542312"
                        },
                        "opcion2": {
                            "NroReclamo": 'CASO0002',
                            "InfoReclamo": "02/11/2023 - Motivo2 - Submotivo2 - 456789"
                        },
                        "opcion3": {
                            "NroReclamo": 'CASO0003',
                            "InfoReclamo": "03/11/2023 - Motivo3 - Submotivo3 - 456789"
                        }
                    },
                    "status": "success",
                    "code": 200
                }
 
               }else{
                response = {
                    "data": {
                        "CantOpciones": 5,
                        "opcion1": {
                            "NroReclamo": 'CASO0001',
                            "InfoReclamo": "12/12/2023 - Motivo1 - Submotivo1 - 12345"
                        },
                        "opcion2": {
                            "NroReclamo": 'CASO0002',
                            "InfoReclamo": "14/12/2023 - Motivo2 - Submotivo2 - 67890"
                        },
                        "opcion3": {
                            "NroReclamo": 'CASO0003',
                            "InfoReclamo": "16/12/2023 - Motivo3 - Submotivo3 - 23435"
                        },
                        "opcion4": {
                            "NroReclamo": 'CASO0004',
                            "InfoReclamo": "17/12/2023 - Motivo4 - Submotivo4 - 65432"
                        },
                        "opcion5": {
                            "NroReclamo": 'CASO0005',
                            "InfoReclamo": "18/12/2023 - Motivo5 - Submotivo5 - 12323"
                        },
                    },
                    "status": "success",
                    "code": 200
                }
               }
        }else{
            response = {
                "data": {
                    "error": "No se encontraron datos"
                },
                "status": "success",
                "code": 200
            }
           
        }
        res.json(response);
    } catch (error) {
        console.log(error);
        next()
    }
}

exports.getCaseCreated = async(req,res,next) => {
    try {
        let body =req.body;
        let type =body.body_type;
        const outputAdjuntos = validateRequestAdjuntos(body);

        res.json(outputAdjuntos);
    } catch (error) {
        console.log(error);
        // next()
        res.json("Hubo un error inesperado" + error);
    }

}
 
function loggerData(data) {
   
    for(var k in data) {
        console.log(k, data[k]);
        console.log('Dato: ' + k + ', valor: ' + data[k]);
        console.log("\n");
     }
}

function getEstado(caso) {
    let casos = {
        'CASO0001' :'INICIADO',
        'CASO0002' :'ASIGNADO',
        'CASO0003' :'EN ANALISIS',
        'CASO0004' :'DEVUELTO',
        'CASO0005' :'CANCELADO',
        'CASO0006' :'CERRADO',
    }
    if(caso in casos){
        return casos[caso];
    }else{
        return 'Caso no existe'
    }
}

function getCondition() {
    let maximum = 3;
    let minimum = 0;
    var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    console.log('randomnumber')
    console.log(randomnumber)
    let odds = {
        '0' :'Menor a 10 días y tiene mail',
        '1' :'Menor a 10 días y no tiene mail',
        '2' :'Mayor a 10 días y tiene mail',
        '3' :'Mayor a 10 días y no tiene mail'
    }
    return odds[randomnumber];
}

function validateRequestAdjuntos(input) {
    const adjuntosProcesados = {};
    for (const key in input) {
        const parts = key.split('_');
        if (parts.length < 4 || parts[0] !== "body" || parts[1] !== "adjuntos") {
            console.warn(`Clave ignorada por formato inválido: ${key}`);
            continue;
        }

        const index = parts[2];
        const field = parts.slice(3).join('_');

        if (!adjuntosProcesados[index]) {
            adjuntosProcesados[index] = {};
        }

        adjuntosProcesados[index][field] = input[key];
    }

    const adjuntos = Object.values(adjuntosProcesados);

    // Itera sobre los adjuntos y retorna en el primer error encontrado
    for (const [i, adjunto] of adjuntos.entries()) {
        const requiredFields = ["nombreArchivo", "extension", "archivo"];
        const missingFields = requiredFields.filter(field => !adjunto[field]);

        if (missingFields.length > 0) {
            console.warn(`Adjunto ${i} ignorado por campos faltantes: ${missingFields.join(', ')}`);
            const campo = missingFields[0] === "nombreArchivo" ? "nombre del archivo" : (missingFields[0] === "extension" ? "extensión" : "contenido del archivo");
            return {
                data: {
                    mensaje: {
                        codmensaje: "E31",
                        mensaje: `El campo '${campo}' es obligatorio.`
                    },
                    code: 400,
                    status: "Algún dato de entrada ingresado es incorrecto"
                },
                code: 200,
                status: "success"
            };
        }

        // Validación de extensión
        const validExtensions = ["jpg", "png", "pdf", "docx"];
        if (!validExtensions.includes(adjunto.extension.toLowerCase())) {
            console.warn(`Adjunto ${i} ignorado por extensión inválida: ${adjunto.extension}`);
            return {
                data: {
                    mensaje: { codmensaje: "E32", mensaje: "La extensión del archivo es inválida." },
                    code: 400,
                    status: "Algún dato de entrada ingresado es incorrecto"
                },
                code: 200,
                status: "success"
            };
        }

        // Validación de archivo base64 (simplificada)
        if (typeof adjunto.archivo !== "string" || !adjunto.archivo.match(/^\/?[A-Za-z0-9+/=]+$/)) {
            console.warn(`Adjunto ${i} ignorado por formato de archivo inválido`);
            return {
                data: {
                    mensaje: { codmensaje: "E33", mensaje: "El contenido del archivo es inválido." },
                    code: 400,
                    status: "Algún dato de entrada ingresado es incorrecto"
                },
                code: 200,
                status: "success"
            };
        }
    }

    // Si todos los adjuntos son válidos, retorna la respuesta de éxito.
    return {
        data: {
            NroCaso: "1349390",
            Estado: "ASIGNADO",
            code: 201,
            status: "El pedido ha sido procesado correctamente"
        },
        code: 200,
        status: "success"
    };
}
 