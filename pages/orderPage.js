var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mosesfat@gmail.com',
      pass: 'dxxuaudjmqemqynb'
    }
  });
  
//   var sizeOfPizza;
//   var typeOfPizza;

//   if(document.getElementById('quickmelt').checked){
//       typeOfPizza = 'quickmelt'
//   }
//   else if(document.getElementById('mozarella').checked) {
//       typeOfPizza = 'mozarella'
//   }

//   if(document.getElementById('9inches').checked){
//       sizeOfPizza = '9 Inches'
//   }
//   else if(document.getElementById('11inches').checked){
//       sizeOfPizza = '11 Inches'
//   }


var mailOptions = {
    from: 'mosesfat@gmail.com',
    to: 'kurt.desmond619@gmail.com',
    subject: 'Albertos Order',
    text: "You ordered: oten"
  };

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });