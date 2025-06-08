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
            
            token = {
                "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGV2LXNlcnZpY2Utbm9zaXMucHJvdmluY2lhbmV0LmNvbS5hclwvXC9sb2dpbiIsImlhdCI6MTY5ODE1NzMzMSwiZXhwIjoxNjk4MTU4MjMxLCJuYmYiOjE2OTgxNTczMzEsImp0aSI6IjRhUjZ4eTU0V0lXSXRmZUgiLCJzdWIiOiJlNmM5ZDUyMC00YjNmLTExZWUtOWIxYS0wMzVjNWRjZDkxZTYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.-0bPreGGzagxZeqOUPlGAvruZf2CJ4_vSXJZvVmACvU"
            }
            response = token;

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

exports.printBodyandHeader = async(req,res,next) => {
    try {
        const body =req.body;
        const documento =body.documento;
        console.log('body')
        console.log(body)
        var response = "NO TOKEN";
        if (req.headers.authorization) {
            var tokenrecibido= req.headers.authorization
            console.log('tiene token en header')
            if(tokenrecibido.includes('Bearer ')){
                response = "TOKEN RECIBIDO: "+tokenrecibido
            }else{
                response = "el tipo de token no es correcto, la estructura debe ser: 'Bearer token'"
            }
            
            console.log(req.headers.authorization)
        }
        
        
        res.json(response);
    } catch (error) {
        console.log(error);
        next()
    }
}

exports.getProducts = async(req,res,next) => {
    try {
        const response = await fetch('https://xhnlisgndidestzscrqz.supabase.co/functions/v1/productos', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.SUPABASE_TOKEN}`
            }
        });

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.log(error);
        next()
    }
}
