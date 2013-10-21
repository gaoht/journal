function Frontend(){
}
Frontend.prototype.createUI = function(){
    var gui = {};
    console.log("GUI created");
    return gui;
}


function Backend(){
}
Backend.prototype.provideRestServices = function(){
    var service = {};
    console.log("Service provided");
    return service;
}


Frontend.$name = "frontend";
Backend.$name = "backend";