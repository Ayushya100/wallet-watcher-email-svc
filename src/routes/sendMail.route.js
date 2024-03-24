'use strict';

import { buildApiResponse, responseCodes, logger, createNewLog } from 'lib-common-service';
import emailServices from '../controllers/index.js';

const header = 'route: send-mail';
const msg = 'Send Mail Router started';

const log = logger(header);
const registerLog = createNewLog(header);

// API Function
const sendMail = async(req, res, next) => {
    log.info(msg);
    registerLog.createInfoLog(msg);

    try {
        const payload = req.body;

        log.info('Call payload validatory');
        const isValidPayload = emailServices.validateSendMailPayload(payload);

        if (isValidPayload.isValid) {
            log.info('Call controller function to send mail to user');
            const isMailSend = await emailServices.sendMailToUser(payload);

            if (isMailSend.isValid) {
                log.info(isMailSend.resMsg);
                registerLog.createInfoLog('Mail sent to user successfully', isMailSend);
                res.status(responseCodes[isMailSend.resType]).json(
                    buildApiResponse(isMailSend)
                );
            } else {
                log.error('Error while sending mail to user');
                return next(isMailSend);
            }
        } else {
            log.error('Error while validating the payload');
            return next(isValidPayload);
        }
    } catch (err) {
        log.error('Internal Error occurred while working with router functions');
        next({
            resType: 'INTERNAL_SERVER_ERROR',
            resMsg: err,
            stack: err.stack,
            isValid: false
        });
    }
}

export default sendMail;
