//business logic

function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = "";
  if (movie === 0) {
    this.movieTitle = 'Star Wars Rogue Squadron';
  } else if (movie === 1) {
    this.movieTitle = 'Thor 3';
  } else {
    this.movieTitle = 'Gremlins';
  }
}

function TicketPrice(customerTicket) {
  if (customerTicket.movie > 1 || customerTicket.time < 5 || customerTicket.age < 2) {
    customerTicket.price = "$7";
  } else {
    customerTicket.price = "$10";
  } return customerTicket.price
}

//user interface logic
$(document).ready(function() {
  $('.output').hide();
  $("#ticketInput").submit(function(event) {
    event.preventDefault();

    var movie = parseInt($("#movieChoice").val());
    var time = parseInt($("#timeChoice").val());
    var age = $("#age").val();

    $('.output').show();
    var customerTicket = new Ticket(movie, time, age);
    customerTicket.price = TicketPrice(customerTicket);
    $('#title').text(customerTicket.movieTitle);
    $('#time').text(customerTicket.time + 'pm');
    $('#price').text(customerTicket.price);
  });
});
