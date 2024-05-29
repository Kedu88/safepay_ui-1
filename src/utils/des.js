import CryptoJS from "crypto-js";

export const decrypt = (taxes) => {
    fields.forEach((field) => {
        taxes[field] = CryptoJS.DES.decrypt(taxes[field], SECRET_KEY).toString(
            CryptoJS.enc.Utf8
        );
    });

    return taxes;
};
