'use strict';

import { logger } from 'lib-common-service';

const log = logger('controller: validate-payload');

const validateSendMailPayload = (payload) => {
    let response = {
        resType: 'SUCCESS',
        resMsg: 'VALIDATION SUCCESSFULL',
        isValid: true,
        data: payload
    };

    if (!payload.emailId) {
        response.resType = 'BAD_REQUEST';
        response.resMsg = 'Required Parameter is missing: emailId';
        response.isValid = false;
    }

    if (!payload.emailType) {
        response.resType = 'BAD_REQUEST';
        response.resMsg = 'Required Parameter is missing: emailType';
        response.isValid = false;
    }

    if (!payload.context) {
        response.resType = 'BAD_REQUEST';
        response.resMsg = 'Required Parameter is missing: context';
        response.isValid = false;
    } else if (Object.keys(payload.context).length === 0) {
        response.resType = 'BAD_REQUEST';
        response.resMsg = 'Email context cannot be empty';
        response.isValid = false;
    }

    log.info('Payload verification completed');
    return response;
}

export {
    validateSendMailPayload
}