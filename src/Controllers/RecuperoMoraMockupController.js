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
exports.getDetalleMora = async(req,res,next) => {
    try {
        const body =req.body;
        const personaId =body.personaId;
        var response = "";
        if(((personaId != undefined && personaId != null) && (personaId !=''))){
            loggerData(body)
            switch (personaId) {
                case '12345678':
                    // mora mixta
                    return res.json({
                        "data": require('../data_recuperoMora/persona_moraMixta.json'),
                        "status":"success",
                        "code":200
                    });
                case '87654321':
                    // mora avanzada
                    return res.json({
                        "data": require('../data_recuperoMora/persona_moraAvanzada.json'),
                        "status":"success",
                        "code":200
                    });
                case '11223344':
                    // mora temprana
                    return res.json({
                        "data": require('../data_recuperoMora/persona_moraTemprana.json'),
                        "status":"success",
                        "code":200
                    });
                case '44332211':
                    // mora con bloqueos
                    return res.json({
                        "data": require('../data_recuperoMora/persona_moraConBloqueosFallecido.json'),
                        "status":"success",
                        "code":200
                    });
                case '44332212':
                    // mora con bloqueos
                    return res.json({
                        "data": require('../data_recuperoMora/persona_moraConBloqueosConcursoQuiebra.json'),
                        "status":"success",
                        "code":200
                    });
                case '44332213':
                    // mora con bloqueos
                    return res.json({
                        "data": require('../data_recuperoMora/persona_moraConBloqueosAnterior1991.json'),
                        "status":"success",
                        "code":200
                    });
                case '44332214':
                    // mora con bloqueos
                    return res.json({
                        "data": require('../data_recuperoMora/persona_moraConBloqueosEmpleados.json'),
                        "status":"success",
                        "code":200
                    });
                case '44332215':
                    // mora con bloqueos
                    return res.json({
                        "data": require('../data_recuperoMora/persona_moraConBloqueosEsProme.json'),
                        "status":"success",
                        "code":200
                    });
                case '44332216':
                    // mora con bloqueos
                    return res.json({
                        "data": require('../data_recuperoMora/persona_moraConBloqueosPagoPendiente.json'),
                        "status":"success",
                        "code":200
                    });
                case '44332217':
                    // mora con bloqueos
                    return res.json({
                        "data": require('../data_recuperoMora/persona_moraConBloqueosPrestamoUva.json'),
                        "status":"success",
                        "code":200
                    });
                case '44332218':
                    // mora con bloqueos
                    return res.json({
                        "data": require('../data_recuperoMora/persona_moraConBloqueosSaldadaConSaldo.json'),
                        "status":"success",
                        "code":200
                    });
                default:
                    break;
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
 
function loggerData(data) {
   
    for(var k in data) {
        console.log(k, data[k]);
        console.log('Dato: ' + k + ', valor: ' + data[k]);
        console.log("\n");
     }
}