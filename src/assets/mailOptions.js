'use strict';

const mailTemplateName = {
    USER_VERIFICATION_MAIL: 'userVerificationMail',
    VERIFICATION_SUCCESS_MAIL: 'verificationSuccessfulMail',
    USER_REACTIVATE_MAIL: 'accountReactivateMail',
    USER_UPDATED_MAIL: 'userUpdatedMail'
}

const mailSubjectLine = {
    USER_VERIFICATION_MAIL: 'Welcome to Wallet watcher - Verify Your Email and Activate Your Account.',
    VERIFICATION_SUCCESS_MAIL: 'Account Verified - Welcome to Wallet watcher.',
    USER_REACTIVATE_MAIL: 'Welcome Back! Your Account is Reactivated.',
    USER_UPDATED_MAIL: 'Account Details Successfully Updated'
}

export {
    mailTemplateName,
    mailSubjectLine
}