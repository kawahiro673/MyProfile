const router = require('express').Router();
const nodemailer = require('nodemailer');

//認証情報
const auth = {
  type: 'OAuth2',
  user: 'knowhownote.info@gmail.com',
  clientId:
    '253759917573-rf6skikg3ud0kn4u9o53c7kleoe283pk.apps.googleusercontent.com',
  clientSecret: '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',
  refreshToken:
    '1//04uFm6u1avztVCgYIARAAGAQSNwF-L9Iredxs2OJ3DqnrBPeO120ID-CGhR4TKozsIV9NE5IL0uEFJwyJxCTCCY7Abr4dmmDMuB4',
};
const transport = {
  service: 'gmail',
  auth,
};

const transporter = nodemailer.createTransport(transport);

router.route('/').post(async (req, res) => {
  const mailOptions = {
    from: auth.user,
    to: auth.user,
    subject: `${req.body.nameValue}様よりお問合せ`,
    text: `${req.body.nameValue}様\n\nemail: ${req.body.email} \n\nお問合せ内容: ${req.body.textarea}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
    }
  });
});

module.exports = router;
