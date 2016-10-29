var express=require("express");
var app=express();
var mongoose = require("mongoose");
var Contact=require("./models/contact");
var bodyParser=require("body-parser");
mongoose.connect("mongodb://localhost/contactlist",function() {
	console.log("successfully connected");
});
var PORT=process.env.PORT || 1234;


app.listen(PORT, function() {
	console.log("server is listening to port :" +PORT);
})

app.use(express.static(__dirname +"/public"))
app.use(bodyParser.json());

app.get("/contactList", function(req,res) {

Contact.getContacts(function(err,data) {
	if(err) {
		throw err;
		console.log(err);
	}
		
	res.json(data);
})
})

app.post("/contactList", function(req, res) {
var body=req.body;//given by body-parser
Contact.addContacts(body,function(err,data) {
	if (err) {
		throw err;
	}
	res.json(data);	
})
})