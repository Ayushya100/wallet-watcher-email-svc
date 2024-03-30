'use strict';

const mailTemplateName = {
    USER_VERIFICATION_MAIL: 'userVerificationMail',
    VERIFICATION_SUCCESS_MAIL: 'verificationSuccessfulMail',
    USER_REACTIVATE_MAIL: 'accountReactivateMail',
    USER_UPDATED_MAIL: 'userUpdatedMail',
    USER_PASSWORD_UPDATED_MAIL: 'passwordUpdatedMail',
    USER_DEACTIVATE_MAIL: 'accountDeactivatedMail',
    PASSWORD_RESET_MAIL: 'requestPasswordResetMail',
    CARD_REGISTRATION_MAIL: 'registerNewCardMail',
    CARD_UPDATION_MAIL: 'updateCardDetailsMail',
    CARD_DEACTIVATION_MAIL: 'cardDeactivatedMail',
    CARD_REACTIVATION_MAIL: 'cardReactivatedMail',
    CARD_DELETION_MAIL: 'cardDeletedMail',
    ACCOUNT_REGISTRATION_MAIL: 'registerNewAccountMail'
}

const mailSubjectLine = {
    USER_VERIFICATION_MAIL: 'Welcome to Wallet watcher - Verify Your Email and Activate Your Account.',
    VERIFICATION_SUCCESS_MAIL: 'Account Verified - Welcome to Wallet watcher.',
    USER_REACTIVATE_MAIL: 'Welcome Back! Your Account is Reactivated.',
    USER_UPDATED_MAIL: 'Account Details Successfully Updated',
    USER_PASSWORD_UPDATED_MAIL: 'Password Updated Successfully',
    USER_DEACTIVATE_MAIL: 'Account Deactivation Confirmation',
    PASSWORD_RESET_MAIL: 'Reset your Password',
    CARD_REGISTRATION_MAIL: 'Confirmation: New Card Registration',
    CARD_UPDATION_MAIL: 'Update: Card Details Successfully Updated',
    CARD_DEACTIVATION_MAIL: 'Confirmation: Card Deactivation Request Processed',
    CARD_REACTIVATION_MAIL: 'Confirmation: Card Reactivation Request Processed',
    CARD_DELETION_MAIL: 'Confirmation: Card Deletion Request Processed',
    ACCOUNT_REGISTRATION_MAIL: 'Welcome to Your New Investment Account!'
}

export {
    mailTemplateName,
    mailSubjectLine
}