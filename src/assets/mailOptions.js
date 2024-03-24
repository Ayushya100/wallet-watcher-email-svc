'use strict';

const mailTemplateName = {
    USER_VERIFICATION_MAIL: 'userVerificationMail',
    VERIFICATION_SUCCESS_MAIL: 'verificationSuccessfulMail',
    USER_REACTIVATE_MAIL: 'accountReactivateMail'
}

const mailSubjectLine = {
    USER_VERIFICATION_MAIL: 'Welcome to Wallet watcher - Verify Your Email and Activate Your Account.',
    VERIFICATION_SUCCESS_MAIL: 'Account Verified - Welcome to Wallet watcher.',
    USER_REACTIVATE_MAIL: 'Welcome Back! Your Account is Reactivated.'
}

export {
    mailTemplateName,
    mailSubjectLine
}