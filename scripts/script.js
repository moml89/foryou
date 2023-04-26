var myButton = document.querySelector('.buttonClick');
var myHeading = document.querySelector('.slogan');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'It`s Not All For You! Fuck you ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'It`s Not All For You! Fuck you ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}

var myImage = document.querySelector('main > div > div > img'); //выбирает первый "по пути" тег

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gallery1.jpg') {
      myImage.setAttribute ('src','images/gallery2.jpg');
    } else {
      myImage.setAttribute ('src','images/gallery1.jpg');
    }
}