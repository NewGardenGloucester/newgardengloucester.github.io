// scroll on navbar click
$('.navbar a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});

// typed.js

const options = {
  strings: ['SP ^1000', ' a student ^1000', ' a developer ^1000'],
  typeSpeed: 160,
  backSpeed: 120,
  loop: true,
};

const typed = new Typed('#type', options);


// form
const inputs = document.querySelectorAll('input');

inputs.forEach(el => {
  el.addEventListener('blur', e => {
    if(e.target.value) {
      e.target.classList.add('dirty');
    } else {
      e.target.classList.remove('dirty');
    }
  })
})


// scroll show shadow
const debounce = (fn) => {


  let frame;

  return (...params) => {


    if (frame) {
      cancelAnimationFrame(frame);
    }


    frame = requestAnimationFrame(() => {


      fn(...params);
    });

  }
};

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
storeScroll();





 // pageclip
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
