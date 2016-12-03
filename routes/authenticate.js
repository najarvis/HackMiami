var express = require('express');
var router = express.Router();

module.exports = function(passport){

    // Sends successful login state back to angular
    router.get('/success', function(req, res){
        res.send({state: 'success', suer: req.user ? req.user : null});
    });

    // sends failure login state back to angular
    router.get('/failure', function(req, res){
        res.send({state: 'failure', user: null, message: "Invalid username or password"});
    });

    // Log in
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failure'
    }));

    //sign up
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failure'
    }));

    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    return router;
}
