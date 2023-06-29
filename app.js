// Import the nodemailer module
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testselfstudy@gmail.com',
    pass: 'qwgxvemqvxqftmce'
  }
});

// Define the email options
const mailOptions = {
  from: 'testselfstudy@gmail.com',
  to: 'aswathykumpalathu@gmail.com',
  subject: 'Hello from Nodemailer',
  text: 'This is a test email sent using Nodemailer!'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent successfully using gmail!');
  }
});
