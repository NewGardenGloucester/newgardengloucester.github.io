var form = document.querySelector('.pageclip-form')
Pageclip.form(form, {
  onSubmit: function (event) { show_alert() },
  onResponse: function (error, response) { return false },
  successTemplate: '<span>Thank you!</span>'
})

// alerts
function show_alert() {
  var x = document.getElementById("alert");
  x.style.display = "block";
  x.style.opacity = "1";
}

var close = document.getElementsByClassName("closebtn");
var i;


for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}
