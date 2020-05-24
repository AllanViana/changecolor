window.addEventListener('load', start);

function start() {
  var rangeRed = document.querySelector('#rangeRed');
  var textRed = document.querySelector('#textRed');
  var rangeGreen = document.querySelector('#rangeGreen');
  var textGreen = document.querySelector('#textGreen');
  var rangeBlue = document.querySelector('#rangeBlue');
  var textBlue = document.querySelector('#textBlue');

  var finalBoxColor = document.querySelector('#finalBoxColor');

  textRed.value = rangeRed.value;
  textGreen.value = rangeGreen.value;
  textBlue.value = rangeBlue.value;

  function piggyBackColor() {
    function changeColor(Red, Green, Blue) {
      var rgb = `rgb(${Red.value}, ${Green.value}, ${Blue.value})`;
      finalBoxColor.style.background = rgb;
    }
    rangeRed.addEventListener(
      'input',
      function () {
        textRed.value = rangeRed.value;
      },
      false
    );
    rangeGreen.addEventListener(
      'input',
      function () {
        textGreen.value = rangeGreen.value;
      },
      false
    );
    rangeBlue.addEventListener(
      'input',
      function () {
        textBlue.value = rangeBlue.value;
      },
      false
    );
    changeColor(textRed, textGreen, textBlue);
  }

  rangeRed.addEventListener('input', piggyBackColor);
  rangeGreen.addEventListener('input', piggyBackColor);
  rangeBlue.addEventListener('input', piggyBackColor);
}
