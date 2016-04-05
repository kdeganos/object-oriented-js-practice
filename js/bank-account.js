//business logic
function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.activity = function(depositAmount, withdrawAmount) {
  return this.balance + depositAmount - withdrawAmount;
}

//user interface logic
$(document).ready(function() {
  var account = '';
  $('#withdrawDepositForm').hide();
  $(".output").hide();

  $("#signUp").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var balance = parseFloat($("#initialDeposit").val());

    account = new Account(name, balance);

    $('#accountName').text(name +  "'s");
    $('#currentAccountBalance').text(account.balance.toFixed(2))
    $("#signUp").hide();
    $('#withdrawDepositForm').show();
    $('.output').show();

  });
  $("#withdrawDepositForm").submit(function(event) {
    event.preventDefault();
    var depositAmount = parseFloat($("#depositAmount").val());
    var withdrawAmount = parseFloat($("#withdrawAmount").val());

    account.balance = account.activity(depositAmount, withdrawAmount);
    $('#currentAccountBalance').text(account.balance.toFixed(2));
  });
});
