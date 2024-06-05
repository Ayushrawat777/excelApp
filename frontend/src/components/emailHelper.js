const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "ayush70798@gmail.com",
    pass: "cfgr bipt xzze jmqh" 
  },
});

const send = (info) => {
  return new Promise(async (resolve, reject) => {
    try {
      // send mail with defined transport object
      let result = await transporter.sendMail(info);

    
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
    
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

      resolve(result);
    } catch (error) {
      console.log(error);
    }
  });
};

const emailProcessor = ({ email, pin, type, verificationLink = "" }) => {
  let info = "";
  switch (type) {
    case "new-user-confirmation-required":
      info = {
        from: '"CMR Company" <abe.kohler59@ethereal.email>', // sender address
        to: email, // list of receivers
        subject: "Please verify your new user", // Subject line
        text: "Please follow the link to very your account before you can login", // plain text body
        html: `<b>Hello </b>
        <p>Please follow the link to very your account before you can login</p>
        <p>${verificationLink}</P>
        `, // html body
      };

      send(info);
      break;

    default:
      break;
  }
};

module.exports = { emailProcessor };

//done
