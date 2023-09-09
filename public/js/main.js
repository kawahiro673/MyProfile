// ページが読み込まれたら実行
window.onload = function () {
  // ボタン要素を取得
  var submitButton = document.getElementById('submitButton');

  // ボタンがクリックされたときの処理を設定
  submitButton.addEventListener('click', function (event) {
    // ボタンがクリックされたときのアクションをここに記述
    alert('ボタンがクリックされました！');
  });
};
