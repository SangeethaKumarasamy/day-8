class uber{
    constructor(name,pick_up_location,destination,distance){
      this.name=name ;
      this.pick_up_location=pick_up_location ;
      this.destination=destination ;
      this.distance=distance ;
      this.price=function(){
          console.log(
         `Cost for 1km: Rs.15, 
          Pick-Up-Location:${this.pick_up_location} 
          Destination:${this.destination}  
          Distance: ${this.distance} 
          your price:`,(15*this.distance));
      }
    }
}
const passenger=new uber("Sangeetha","Karol_bagh","noida_sector_62","25");
passenger.price();