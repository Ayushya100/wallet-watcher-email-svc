'use strict';

import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

const handlebarOptions = {
    viewEngine: {
        extname: '.hbs',
        partialDir: path.resolve('./src/templates'),
        defaultLayout: false
    },
    viewPath: path.resolve('./src/templates'),
    extName: '.hbs'
};

transporter.use('compile', hbs(handlebarOptions));

export default transporter;
