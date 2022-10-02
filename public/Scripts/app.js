/*
File: index.js
Student Name: Manvibolreach Ouk
Student ID: 301224112
Date: October 01, 2022
*/

(function() {

    function Start() {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);

})();
let TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    let elements = document.getElementsByClassName('typewrite');
    for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
const wrapper = document.querySelector('.wrapper'),
    form = wrapper.querySelectorAll('.form'),
    submitInput = form[0].querySelector('input[type="submit"]');

    function getDataForm(e){
        e.preventDefault();    
        let formData = new FormData(form[0]);

        alert(("Hi, ")+formData.get('fname')+' '+formData.get('lname')+'\n'+("Submission Successful!"));
        window.location.replace("/home");
   
    }

    document.addEventListener('DOMContentLoaded', function(){
        submitInput.addEventListener('click', getDataForm, false);

    }, false); 


    



