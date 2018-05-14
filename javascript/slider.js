var slider = document.getElementById('slider');
var sliderImages = document.getElementsByClassName('image');
var nextButton = document.getElementById('Next');
var previousButton = document.getElementById('Previous');

var index = 0
var nImages = sliderImages.length;

nextButton.addEventListener("click", next);
previousButton.addEventListener("click", previous);

hideAllImages(sliderImages);

showImage(index);

function hideAllImages(sliderImages) {
  [].forEach.call(sliderImages, function (imageElement) {
    imageElement.style.display = "none";
});
}

function showImage(index) {
  sliderImages[index].style.display = "block";
}

function hideImage(index) {
  sliderImages[index].style.display = "none";
}

function next() {
  hideImage(index);
  index = ( index + 1 ) % nImages;
  showImage(index);
}

function previous() {
  hideImage(index)
  if (index == 0) {
    index = nImages -1 ;
  } else {
    index = ( index - 1 );
  }
  showImage(index);
}
