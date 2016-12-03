var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
   
    if(req.method === "GET"){
       //allow non logged in users to make GET requests
       return next();
    }

    if(req.isAuthenticated()){
        return next();
    }

    return res.redirect('/#login');
});

router.route('/tasks')

    // Returns all tasks
    .get(function(req, res){
        // Temp
        res.send({message: 'TODO return all tasks'});
    })

    .post(function(req, res){
        // Temp
        res.send({message: 'TODO create a new task'});
    });

router.route('/tasks/:id')
    
    .get(function(req, res){
        // Temp
        res.send({message: 'TODO return specific task'});
    })

    .put(function(req, res){
        //Temp
        res.send({message: 'TODO update specific task'});
    })

    .delete(function(req, res){
        // Temp
        res.send({message: 'TODO delete task'});
    });

module.exports = router;

