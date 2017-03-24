const Router=require('express').Router();
const Users = require('./model.js');
const Evento = require('./eventoModel.js')

Router.get('/all',function(req,res){
	Users.find({}).exec(function(err,docs){
		if(err){
			res.status(500)
			res.json(err)
		}
		res.json(docs)
	})
})
Router.get('/:id',function(req,res){
	
})
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
Router.post('/delete/:id',function(req,res){
	
})
Router.post('/inactive/:id',function(req,res){
	
})
Router.post('/active/:id',function(req,res){
	
})
Router.post('/login',function(req,res){
	//Users.find({}).exec(function(err, docs) {
	//res.send(req.body.pass);
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
Router.post('/agregarEvento',function(req,res){
	let evento=new Evento({
		titulo:req.body.titulo,
		inicio:req.body.fechai
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