const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "ayush70798@gmail.com",
    pass: "cfgr bipt xzze jmqh",
  },
});

const send = (info) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await transporter.sendMail(info);
      resolve(result);
    } catch (error) {
      console.log(error);
    }
  });
};

const emailProcessor = ({ email, message, type }) => {
  let info = "";
  switch (type) {
    case "new-user-confirmation-required":
      info = {
        from: '"CMR Company" <abe.kohler59@ethereal.email>',
        to: email,
        subject: "Please verify your new user",
        text: "Please follow the link to very your account before you can login",
        html: `<b>Hello </b>
        <p>Please follow the link to very your account before you can login</p>
        <p>${message}</P>
        `,
      };

      send(info);
      break;

    default:
      break;
  }
};

module.exports = { emailProcessor };
