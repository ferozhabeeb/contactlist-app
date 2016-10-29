var mongoose=require("mongoose");
var contactSchema=mongoose.Schema({
	name:{
	type:String,
	required:true
	},
	email:{
	type:String,
	required:true
	},
	mobile:{
	type:String,
	required:true
	}
});
var Contact=module.exports=mongoose.model("contact",contactSchema);
module.exports.getContacts=function(callback){
	Contact.find(callback)
}
module.exports.addContacts=function(contact, callback) {
	Contact.create(contact,callback);
}