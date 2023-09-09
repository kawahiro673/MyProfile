window.onload = function () {
  var submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    alert('ボタンがクリックされました！');
  });
};
