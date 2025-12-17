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
                    return res.json({
                        "personaId": "12345678",
                        "nombreYApellidos": "Juan Pérez García",
                        "tipoMora": "Mixta", // Temprana / Avanzada / Mixta
                        "cartera": "Consumo", // Comercial / Hipotecario /consumo
                    });
                    
                    break;
                case '87654321':
                    return res.json({
                        "personaId": "12345678",
                        "nombreYApellidos": "Juan Pérez García",
                        "tipoMora": "Avanzada", // Temprana / Avanzada / Mixta
                        "productos": {
                            "cantidadProductos": 1,
                            "detalleProductos": [
                                {
                                    "nombreProducto": "Préstamo Personal",
                                    "diasAtraso": 20,
                                    "saldoAbonar": "300.000"
                                }
                            ]
                        },
                        "promesasPago": {
                            "cantidadPromesas": 1,
                            "detallePromesas": [
                                {
                                    "fechaCompromiso": "20-12-2025",
                                    "montoCompromiso": "150.000"
                                }
                            ]
                        },
                        "TipoAcuerdo": "Refinanciación", // Refinanciacion / Cancelacion
                        "fechaVencimientoAcuerdo": "20-12-2025",
                        "montoAcuerdo": "500.000",
                        "cartera": "Consumo", // Comercial / Hipotecario /consumo
                        "judicializable": "No" // Si / No

                    });
                    break;
                case '11223344':
                    return res.json({
                        "personaId": "12345678",
                        "nombreYApellidos": "Juan Pérez García",
                        "tipoMora": "Temprana", // Temprana / Avanzada / Mixta
                        "productos": {
                            "cantidadProductos": 3,
                            "detalleProductos": [
                                {
                                    "nombreProducto": "Préstamo Personal",
                                    "diasAtraso": 20,
                                    "saldoAbonar": "300.000"
                                }
                            ]
                        },
                        "promesasPago": {
                            "cantidadPromesas": 1,
                            "detallePromesas": [
                                {
                                    "fechaCompromiso": "2024-07-15",
                                    "montoCompromiso": "150.000"
                                }
                            ]
                        },
                        "pedidoRefinanciacion": "SI", // SI / NO
                        "pedidoRafinanciacionMayor20dias": "SI", // SI / NO / null
                        "cartera": "Consumo", // Comercial / Hipotecario /consumo
                        "TCMayor70dias": "NO" // SI / NO
                    });
                    break;
                case '44332211':
                    return res.json({
                        "personaId": "12345678",
                        "nombreYApellidos": "Juan Pérez García",
                        "bloqueos": {
                            "tipoBloqueo": "Fallecido", // fallecido / concursoQuiebra / PagoPendiente / Anterior 1991 / Empleados / Prestamo UVA / SaldadaConSaldo / EsProme
                            "sucursal": "CORONEL PRINGLES",
                            "direccionSucursal": "AV. CORONEL PRINGLES 1234",
                        }
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