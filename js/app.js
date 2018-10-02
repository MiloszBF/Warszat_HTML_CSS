document.addEventListener('DOMContentLoaded', function() {


    var leftArrow = document.querySelector('.left-arrow');
    var rightArrow = document.querySelector('.right-arrow');
    var imgSlider = document.querySelectorAll('.slide');
    var imgCounter = 0;
    imgSlider[0].classList.add('visible');


    rightArrow.addEventListener('click', function() {

        imgSlider[imgCounter].classList.remove('visible');

        imgCounter++;
        if (imgCounter >= imgSlider.length) {
            imgCounter = 0;
        }
        imgSlider[imgCounter].classList.add('visible');
    });

    leftArrow.addEventListener('click', function() {
        imgSlider[imgCounter].classList.remove('visible');
        imgCounter--;
        if (imgCounter < 0) {
            imgCounter = imgSlider.length - 1;
        }
        imgSlider[imgCounter].classList.add('visible');
    });



    var imageGallery = document.querySelectorAll('.image-gallery');

    for (var i = 0; i < imageGallery.length; i++) {
        imageGallery[i].addEventListener('mouseover', function() {
            this.querySelector('.opacity-gallery').classList.toggle('hide');

        });
        imageGallery[i].addEventListener('mouseout', function() {
            this.querySelector('.opacity-gallery').classList.toggle('hide');

        });
    }

});