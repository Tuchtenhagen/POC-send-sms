const Joi = require('joi');

export const SMSSchema = Joi.object({
    phoneNumber: Joi.string()
        .pattern(new RegExp('^[0-9]{2}[ ]?[0-9]{5,12}$'))
        .required(),

    bodyMessage: Joi.string()
})
