  // Requiring our model
var db = require("../models");
var Bandwidth = require("node-bandwidth");

module.exports = function(app, beer, user) {
  app.get("/api/beers", function(req, res) {
    beer.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/users", function(req, res) {
    user.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.put("/api/users", function(req,res) {
    user.update(
      req.body,
      {
        where: {
          id: req.user.id
        }
      }).then(function(results) {
        res.json(results);
      });
  });

  app.get("/api/users/:email", function(req,res) {
    user.findOne({
        where: {
          email: req.params.email
        }
      }).then(function(results) {
        res.json(results);
      });
  });


  var client = new Bandwidth({
    userId    : "u-sqfdi5ac3ocoux6goi6gawq",  
    apiToken  : "t-taqf4nxjttdtoajqjejucvy",
    apiSecret : "dxt5jufn34s6nn6fuvu56zfbawcpnkvoklk5v5a",
    baseUrl: "https://api.catapult.inetwork.com"
});

  app.post("/api/sendText", function (req, res) {

    var numbers = req.body;
    
    console.log(req.body);
    
    // /*********** Sending A Message ***********/
    // var numbers = {
    //     to: toNumbers,  //number to send to
    //     from: "+18338342546" //Bandwidth number
    // };
    var sendMessage = function(params){
        client.Message.send({
            //returns a promise 
            from : params.from, //your bandwidth number 
            to   : params.to,       //number to send to 
            text : "BEERHOPPER: Your friend has invited you to join them at Raleigh Beer Garden. Text STOP to Unsubscribe.",
            //the media field is not necessary unless sending a picture message
            //media: 
        })
    //calls back the message id number and catches any errors 
        .then(function(message){
           res.json({message: message});
            //access ID from json can also get to and from
        })
    // catches any errors     
        .catch(function(err){
            console.log(err)
        });
    }
    
    sendMessage(numbers);
    });
    


app.post("/api/userInvite", function (req, res) {

  var numbers = req.body;
  
  console.log(req.body);
  
  // /*********** Sending A Message ***********/
  // var numbers = {
  //     to: toNumbers,  //number to send to
  //     from: "+18338342546" //Bandwidth number
  // };
  var sendMessage = function(params){
      client.Message.send({
          //returns a promise 
          from : params.from, //your bandwidth number 
          to   : params.to,       //number to send to 
          text : "BEERHOPPER: Your friend has invited you to join BEERHOPPER. Text STOP to Unsubscribe.",
          //the media field is not necessary unless sending a picture message
          //media: 
      })
  //calls back the message id number and catches any errors 
      .then(function(message){
         res.json({message: message});
          //access ID from json can also get to and from
      })
  // catches any errors     
      .catch(function(err){
          console.log(err)
      });
  }
  
  sendMessage(numbers);
  });


};
