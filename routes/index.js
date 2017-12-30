//Refactoring Routes
var express         = require("express");
var router          = express.Router();
var Campground      = require("../models/campground");
var Comment         = require("../models/comment");
var User            = require("../models/user");
var passport        = require("passport");
var LocalStrategy   = require("passport-local");
//Routes
router.get("/",function(req, res){
    
    res.render("landing");
});


//=============
//AUTH ROUTES
//=============
//register form
router.get("/register", function(req, res){
    
    res.render("register")
    
})

//handle Sign Up/Register logic
router.post("/register", function(req, res) {
   var newUser = new User({username:req.body.username});
   User.register(newUser, req.body.password, function(err, user){
      if(err) {
          
          console.log(err);
          req.flash("error", err.message);
         return res.render("/register");
      }
       passport.authenticate("local")(req, res, function(){
           req.flash("success","Welcome to YelpCamp " + user.username);
           res.redirect("/campgrounds");
           
       });
   });
});

// show login form
router.get("/login", function(req, res){
   res.render("login"); 
});
// handling login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){
});


//Log out Route Logic
router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "Logged you out");
    res.redirect("/campgrounds");
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        
        return next();
    }
    else{
        
        res.redirect("/login");
    }
    
}


module.exports = router;