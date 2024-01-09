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
        const caso =body.body_caso;
        console.log ("DNI");
        loggerData(body);
 
        var response = "";
        if(((type != undefined && type != null) && (type !='')) && ((caso != undefined && caso != null) && (caso !=''))){
            console.log('//caso');
            console.log(caso);
            if (caso == "1") {
                response = {
                    "CantOpciones": 0,
                    "message": "No se encontró ningún caso.",
                }
               }else if(caso === "2"){
 
                response = {
                    "CantOpciones": 3,
                    "opcion1": {
                        "NroReclamo": 542312,
                        "InfoReclamo": "01/11/2023 - Motivo1 - Submotivo1 - 542312"
                    },
                    "opcion2": {
                        "NroReclamo": 456789,
                        "InfoReclamo": "02/11/2023 - Motivo2 - Submotivo2 - 456789"
                    },
                    "opcion3": {
                        "NroReclamo": 456789,
                        "InfoReclamo": "03/11/2023 - Motivo3 - Submotivo3 - 456789"
                    }
                }
 
               }else{
                response = {
                    "CantOpciones": 5,
                    "opcion1": {
                        "NroReclamo": 12345,
                        "InfoReclamo": "12/12/2023 - Motivo1 - Submotivo1 - 12345"
                    },
                    "opcion2": {
                        "NroReclamo": 67890,
                        "InfoReclamo": "14/12/2023 - Motivo2 - Submotivo2 - 67890"
                    },
                    "opcion3": {
                        "NroReclamo": 23435,
                        "InfoReclamo": "16/12/2023 - Motivo3 - Submotivo3 - 23435"
                    },
                    "opcion4": {
                        "NroReclamo": 65432,
                        "InfoReclamo": "17/12/2023 - Motivo4 - Submotivo4 - 65432"
                    },
                    "opcion5": {
                        "NroReclamo": 12323,
                        "InfoReclamo": "18/12/2023 - Motivo5 - Submotivo5 - 12323"
                    },
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
 