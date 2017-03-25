const Router=require('express').Router();
const Users = require('./model.js');
const Eventos = require('./eventoModel.js');

Router.get('/all',function(req,res){
	Users.find({}).exec(function(err,docs){
		if(err){
			res.status(500)
			res.json(err)
		}
		res.json(docs)
	})
});

Router.get('/cargar_eventos',function(req,res){
	Eventos.find({},{"_id":0,"title":1,"start":1,"end":1}).exec(function(err,docs){
		if(err){
			res.status(500)
			res.json(err)
		}
		res.json(docs)
	})
});

Router.post('/new',function(req,res){
	let user=new Users({
		userid:Math.floor(Math.random()*50),
		nombres:req.body.nombres,
		apellidos: req.body.apellidos,
		edad: req.body.edad,
		sexo: req.body.sexo,
		estado: "Activo"
	})
	user.save(function(error){
		if(error){
			res.status(500)
			res.json(error)
		}
		res.send("Registro Guardado")
	})
})

Router.post('/login',function(req,res){
	Users.find({usuario:req.body.user,password:req.body.pass}, function(err, doc){
		if (err) {
        	res.status(500)
        	res.json(err)
    	}
    	console.log(doc);
    	if(doc!=""){
    		res.send("Validado");
    	}else{
    		res.send("no existe usuario");
    	}
    });
	
})

Router.post('/agregar_evento',function(req,res){
	let evento=new Eventos({
		title:req.body.titulo,
		start:req.body.fechai,
		end:req.body.fechaf
	})
	evento.save(function(error){
		if(error){
			res.status(500)
			res.json(error)
		}
		res.send("Registro Guardado")
	})
})



module.exports=Router