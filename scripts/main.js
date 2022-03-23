let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/succulent-wagon.jpg') {
      myImage.setAttribute('src','images/succulent.jpg');
    } else {
      myImage.setAttribute('src','images/succulent-wagon.jpg');
    }
}


