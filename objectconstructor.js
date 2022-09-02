function Person (name , age , place){
    this.name = name
    this.age = age
    this.place = place
    this.display = function(){
        console.log("NAme"+name+"Age"+age+"Place"+place)
    }
}

var musthak = new Person("Musthak","24","Kannur")
var sahal = new Person("Sahal","22","Thalasseri")

musthak.display()