var express=require("express");
var app=express();
var PORT=process.env.PORT || 1234;
app.use(express.static(__dirname +"/public"))
app.get("/", function(req,res) {
	res.send("Welcome Ashraf");
})
app.listen(PORT, function() {
	console.log("server is listening to port :" +PORT);
})