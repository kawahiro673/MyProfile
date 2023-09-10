const submitButton = document.getElementById('submitButton');
const message = document.getElementById('message');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const nameValue = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const textarea = document.getElementById('textarea').value;

  console.log(nameValue);
  console.log(email);
  console.log(textarea);

  //未入力
  if (nameValue === '' || email === '' || textarea === '') {
    message.style.display = 'block';
    message.style.color = 'red';
    message.innerHTML = '入力されていない情報があります';
    return false;
  }

  //メールアドレスに何か入力されていれば、バリデーションチェック
  if (email !== '' && !validateEmail(email)) {
    message.style.display = 'block';
    message.style.color = 'red';
    message.innerHTML = 'メールアドレスの入力に誤りがあります';
    return false;
  }

  $.ajax({
    url: '/contact/',
    type: 'POST',
    dataType: 'Json',
    contentType: 'application/json',
    data: JSON.stringify({
      nameValue,
      email,
      textarea,
    }),
    success: function (res) {
      message.style.display = 'block';
      message.style.color = 'black';
      message.innerHTML = '送信されました';
      setTimeout(() => {
        message.style.display = 'none';
      }, 3000);
    },
  });
});

// 通常のメールアドレスバリデーション関数
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // メールアドレスのフォーマットをチェック
  if (!emailRegex.test(email)) {
    return false;
  }
  return true;
};
