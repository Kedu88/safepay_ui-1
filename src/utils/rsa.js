import { createVerify } from 'crypto';

/**
 * Verify given hashed data using signature which is created using the `RSA-SHA256` algorithm.
 * @param hashedData Any hashed data
 * @param signature
 * @param publicKey
 * @returns True if data is verified, otherwise, returns false.
 */
export const verifySignedData = (hashedData, signature, publicKey) => {
    const verify = createVerify('RSA-SHA256');
    verify.update(hashedData);
    verify.end();

    return verify.verify(publicKey, signature, 'hex');
};
