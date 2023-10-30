const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

exports.sendEmailNotification = functions.database.ref('/userDataRecords/{itemId}')
    .onCreate((snapshot, context) => {
        const newData = snapshot.val();

        // Set up an email transport using Nodemailer (use your own SMTP server or service)
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'omsharma050322@gmail.com',
                pass: 'ghonchukiemailid'
            }
        });

        const mailOptions = {
            from: 'omsharma050322@gmail.com',
            to: 'omsharma050322@gmail.com',
            subject: 'NEW STUDENT!',
            text: `A new student just filled the form ,
            Here are the details:
             ${JSON.stringify(newData, null, 2)}`
        };

        // Send the email
        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
    });
