
document.querySelector(".option-one-screen").style.display = "none";
document.querySelector(".option-two-screen").style.display = "none";
document.querySelector(".p1-end").style.display = "none";
document.querySelector(".p3-end").style.display = "none";
document.querySelector(".dnf-end").style.display = "none";




document.querySelector(".option-one").onclick = function() {
   document.querySelector(".story-opening").style.display = "none";
   document.querySelector(".buttons").style.display = "none";
   document.querySelector(".option-one-screen").style.display = "block";
};

document.querySelector(".option-two").onclick = function() {
   document.querySelector(".story-opening").style.display = "none";
   document.querySelector(".buttons").style.display = "none";
   document.querySelector(".option-two-screen").style.display = "block";
};




document.querySelector(".one-pit").onclick = function() {
   document.querySelector(".option-one-screen").style.display = "none";
   document.querySelector(".p1-end").style.display = "block";
};


document.querySelector(".one-stay").onclick = function() {
   document.querySelector(".option-one-screen").style.display = "none";
   document.querySelector(".dnf-end").style.display = "block";
};

document.querySelector(".two-pit").onclick = function() {
   document.querySelector(".option-two-screen").style.display = "none";
   document.querySelector(".p3-end").style.display = "block";
};


document.querySelector(".two-stay").onclick = function() {
   document.querySelector(".option-two-screen").style.display = "none";
   document.querySelector(".p3-end").style.display = "block";
};
