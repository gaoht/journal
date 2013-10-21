//var modules = {};
//modules["frontend"] = FrontEnd;
//modules["backend"] = FrontEnd;


function FrontEnd(){
}
FrontEnd.prototype.createGUI = function(){
    var gui = {};
    console.log("GUI created");
    return gui;
}


function BackEnd(){
}
BackEnd.prototype.provideRestServices = function(){
    var service = {};
    console.log("Service provided");
    return service;
}