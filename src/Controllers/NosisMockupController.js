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
exports.validacionNosis = async(req,res,next) => {
    try {
        const body =req.body;
        const documento =body.documento;
        var response = "";
        if(((documento != undefined && documento != null) && (documento !=''))){
            loggerData(body)
            response = {
                "CantPreguntas": 4,
                "IDCuestionario": "101403337-20345467875",
                "Preguntas": {
                    "Pregunta1": {
                        "IDPregunta": 13,
                        "IDCuestionario": "101403337-20345467875",
                        "textoPregunta1": "cuál de los siguientes domicilios te resulta familiar",
                        "CantOpciones": 5,
                        "Opciones": {
                            "opcion1Preg1": "castelli 2754",
                            "opcion2Preg1": "castelli 2839",
                            "opcion3Preg1": "castelli 2731",
                            "opcion4Preg1": "castelli 2736",
                            "opcion5Preg1": "ninguno de los anteriores"
                        }
                    },
                    "Pregunta2": {
                        "IDPregunta": 12,
                        "IDCuestionario": "101403337-20345467875",
                        "textoPregunta2": "en cuál de las siguientes empresas trabajas o trabajaste",
                        "CantOpciones": 5,
                        "Opciones": {
                            "opcion1Preg2": "proyecto profesional recursos humanos Sociedad anónima",
                            "opcion2Preg2": "policia federal argentina",
                            "opcion3Preg2": "aerolineas argentinas Sociedad anónima",
                            "opcion4Preg2": "pilkington automotive argentina Sociedad anónima",
                            "opcion5Preg2": "ninguna de las anteriores"
                        }
                    },
                    "Pregunta3": {
                        "IDPregunta": 32,
                        "IDCuestionario": "101403337-20345467875",
                        "textoPregunta3": "estás o estuviste relacionado con morinigo miguel",
                        "CantOpciones": 2,
                        "Opciones": {
                            "opcion1Preg3": "no",
                            "opcion2Preg3": "si"
                        }
                    },
                    "Pregunta4": {
                        "IDPregunta": 35,
                        "IDCuestionario": "101403337-20345467875",
                        "textoPregunta4": "tenés un préstamo en la entidad Banco de corrientes",
                        "CantOpciones": 2,
                        "Opciones": {
                            "opcion1Preg4": "no",
                            "opcion2Preg4": "si"
                        }
                    }
                }
            }
            

        }else{
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

exports.evaluacionNosis = async(req,res,next) => {
    try {

        const body =req.body;
        console.log ("Ingreso a la función evaluacion NOSIS");
        var validate = validateEvaluacionNosis(body)
        var response = "";
        if(validate){
            
            response = responseOKevaluacionNosis = {
                "Contenido": {
                    "Pedido": {
                        "Usuario": 62951,
                        "IdConsulta": "91400890-27960098477",
                        "Cuestionario": "9-2"
                    },
                    "Resultado": {
                        "Estado": 200,
                        "Novedad": "OK",
                        "Tiempo": 592,
                        "FechaRecepcion": "2023-06-05T12:51:36",
                        "Transaccion": "c90b202d-6ac7-4002-b75a-1c4d97e6177a",
                        "Referencia": "27960098477"
                    },
                    "Datos": {
                        "Cuestionario": {
                            "Estado": "PENDIENTE",
                            "Porcentaje": 0
                        },
                        "Persona": {
                            "Documento": "27960098477",
                            "RazonSocial": "MAITA APARICIO, ANIUSKA DEL CARMEN",
                            "Sexo": "F",
                            "FechaNacimiento": "1990-09-24"
                        }
                    }
                }
            }

        }else{
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
function validateEvaluacionNosis(body) {
    console.log("Validando Evaluacion");
    if(
        ((body.IDCuestionario != undefined && body.IDCuestionario != null) && (body.IDCuestionario !=''))
        && ((body.IDPregunta1 != undefined && body.IDPregunta1 != null) && (body.IDPregunta1 !=''))
        && ((body.Respuesta1 != undefined && body.Respuesta1 != null) && (body.Respuesta1 !=''))
        && ((body.IDPregunta2 != undefined && body.IDPregunta2 != null) && (body.IDPregunta2 !=''))
        && ((body.Respuesta2 != undefined && body.Respuesta2 != null) && (body.Respuesta2 !=''))
        && ((body.IDPregunta3 != undefined && body.IDPregunta3 != null) && (body.IDPregunta3 !=''))
        && ((body.Respuesta3 != undefined && body.Respuesta3 != null) && (body.Respuesta3 !=''))
        && ((body.IDPregunta4 != undefined && body.IDPregunta4 != null) && (body.IDPregunta4 !=''))
        && ((body.Respuesta4 != undefined && body.Respuesta4 != null) && (body.Respuesta4 !=''))
    ){
        console.log("Datos requeridos ingresados");
        loggerData(body)
        return true;
    }else{
        console.log("Datos requeridos NO ingresados");
        return false;
    }
    
}
function loggerData(data) {
   
    for(var k in data) {
        console.log(k, data[k]);
        console.log('Dato: ' + k + ', valor: ' + data[k]);
        console.log("\n");
     }
}

