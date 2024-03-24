'use strict';

import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
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
