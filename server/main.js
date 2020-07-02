var createServers=require("./server");
var signIn=require("./signIn");
var signUp=require("./signUp");
var details=require("./details");
var goodsList=require("./goodsList")
var route={
    signIn:signIn,
    signUp:signUp,
    details:details,
    goodsList:goodsList
}
createServers(route);
