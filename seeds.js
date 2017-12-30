var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment    = require("./models/comment");

var data = [
    {name:"Look out",
    image:"https://html5box.com/html5gallery/images/Waves_1024.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed libero nec dolor gravida cursus. Morbi pulvinar varius velit, varius vestibulum eros aliquet nec. Donec sagittis tortor vestibulum nunc aliquet tincidunt. Quisque eget mattis erat. Aenean sed dignissim quam, sit amet ornare odio. Proin eu urna commodo ligula semper ullamcorper. Aliquam at sagittis nibh. Morbi est nisi, suscipit interdum odio sed, congue posuere mauris. Nunc ullamcorper ullamcorper diam, dignissim commodo nibh malesuada ac. Praesent pharetra posuere orci, consequat feugiat neque fermentum sed. Ut turpis lorem, faucibus at enim eu, accumsan finibus dolor. Suspendisse eget faucibus dui, pretium sagittis quam. Proin a tempor ipsum, eget laoreet sapien. Morbi id feugiat nisi. Phasellus non egestas ipsum, sit amet tempor massa. In varius tristique elit a aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In scelerisque lacus at mi viverra, quis aliquet magna ornare. Curabitur condimentum lacinia leo in convallis. Pellentesque sit amet enim consequat, vehicula sem ac, malesuada nisi. Pellentesque suscipit massa quis sapien euismod posuere. Donec in mauris sed purus egestas condimentum a et nibh. "    
    },
    {name:"Be one with nature",
    image:"http://trivalleystargazers.org/gert/CCD_Galery/ngc6611_st10_l2_txt.jpg",
    description: "This is a spacey place to go to!"    
    },
    {name:"You gotta go",
    image:"http://images.goodsam.com/trailerlifedirectory/largefeatured/1000x/pho_900000496_01.jpg",
    description: "This is the place to go to!"    
    },
    {name:"Never leaving",
    image:"https://www.coloradoinfo.com/sites/default/files/styles/mast/public/masts/Camping.jpg?itok=DX3JMLZY",
    description: "Go now! NOW I tell you!"    
    },
    {name:"Just wow",
    image:"http://haulihuvila.com/wp-content/uploads/2012/09/hauli-huvila-campgrounds-lg.jpg",
    description: "This is great!"    
    }
    ]


function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
   /* if(err){
        console.log("error");
    }
    else{
    console.log("removed campgrounds");
    //add a few campgrounds 
    data.forEach(function(seed){
      Campground.create(seed, function(err, campground){ 
          if(err){
              
              console.log(err);
          }
          else{
              
              console.log("created a campground");
              //add a a comment
              Comment.create(
                  { text:"WOW That is just Awesome. Too awesome",
                    author:"Chad"
                  },function(err,comment){
                      if(err){
                          
                          console.log(err)
                      }
                      else{
                      campground.comments.push(comment);
                      campground.save();
                      console.log("created new comment");
                      }
                      
                  });
          }
      });  
        
        
    });
    }*/
    });
    
   
}

module.exports = seedDB;