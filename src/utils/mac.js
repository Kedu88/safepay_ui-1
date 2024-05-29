import { createHmac } from 'crypto';

/**
 *
 * @param data Any kind of data.
 * @param receivedMac A generated HMAC value.
 * @param secretKey It is a secret key which is used to verify the data.
 * @returns True if it is verified, otherwise returns false.
 */
export const verifyHmacSHA256 = (data, receivedMac, secretKey) => {
    const hmac = createHmac('sha256', secretKey);
    hmac.update(data);
    const calculatedMac = hmac.digest('hex');

    return calculatedMac === receivedMac;
};
