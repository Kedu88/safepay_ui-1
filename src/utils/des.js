import CryptoJS from "crypto-js";

const SECRET_KEY = 'cmpetest!';

const fields = [
    'socialInsurance',
    'generalHealthSystem',
    'incomeTax',
    'totalTaxAmount',
];

export const decrypt = (taxes) => {
    fields.forEach((field) => {
        taxes[field] = CryptoJS.DES.decrypt(taxes[field], SECRET_KEY).toString(
            CryptoJS.enc.Utf8
        );
    });

    return taxes;
};
