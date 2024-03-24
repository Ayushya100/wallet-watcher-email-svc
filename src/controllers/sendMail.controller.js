'use strict';

import { logger } from 'lib-common-service';
import transporter from '../email/emailConnection.js';
import { mailSubjectLine, mailTemplateName } from '../assets/mailOptions.js';

const log = logger('controller: send-mail');

const sendMailToUser = async(payload) => {
    try {
        log.info('Execution for sending mail started...');
        const {emailId, emailType, context} = payload;
        context.custContactEmailId = process.env.EMAIL_USER;

        log.info('Execution for building mail options started');
        const mailOptions = {
            from: 'noreply@demomailtrap.com',
            to: emailId,
            subject: mailSubjectLine[emailType],
            template: mailTemplateName[emailType],
            context: context
        };

        log.info('Send mail to the user');
        const transporterResult = await transporter.sendMail(mailOptions);

        log.info('Sent mail operation completed');
        return {
            resType: 'SUCCESS',
            resMsg: `Email has been send to: ${emailId}`,
            data: transporterResult.envelope,
            isValid: true
        };
    } catch(err) {
        log.error('Error while sending mail to the user');
        return {
            resType: 'INTERNAL_SERVER_ERROR',
            resMsg: 'Some error occurred while sending mail.',
            stack: err.stack,
            isValid: false
        };
    }
}

export default sendMailToUser;
