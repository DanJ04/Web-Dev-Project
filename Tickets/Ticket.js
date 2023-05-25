const button = document.getElementById("calculate"); // constant button variable 

TicketPrice = document.getElementById("TicketPrice").focus; //focus on the input field 
NoOfMiles = document.getElementById("NoOfMiles").focus ; //focus on the input field 


function calculate() {
 TicketPrice = document.getElementById("TicketPrice").value ; // PetrolPrice = value of input field
 NoOfMiles = document.getElementById("NoOfMiles").value ;  // NoOfLitres = value of input field 
  document.getElementById("NewPrice").innerHTML = TicketPrice - TicketPrice * (NoOfMiles * 0.01); /// cost = PetrolPrice multipled by NoOfLitres
}
 button.addEventListener('click',calculate); // attaches an event handler to calculate
