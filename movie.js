//Write a constructor for the class Movie
class movie{
    constructor (title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating==null){
            this.rating="PG";
        }
        
}}                              
function PG(film){
    var arr=[];
    for(var i in film){
        if(film[i].rating=="PG"){
            arr.push(c[i].title);
        }
    }
    return arr;
}
var film=[];
var film1=new movie("Ratatouille","walt-disney","PG-13");
console.log(film1);
film.push(film1);
var film2=new movie("Moana","walt-disney","PG-13");
console.log(film2);
film.push(film2);
//d. the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
var d=new movie("Casino Royale","Eon Productions","PG-13");
console.log(d);
film.push(d);
console.log(film);


