var hello = function (data){
    console.log("Data : "+data)
}


var hai = function(callback){
    callback("Musthak")
}

hai(hello)