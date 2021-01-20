import CryptoJS from "crypto-js";
const key = CryptoJS.enc.Utf8.parse("123456789ABCDEFG");  //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEFG123456789');//十六位十六进制数作为密钥偏移量


export const encrypt = function (word) {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  return encrypted.ciphertext.toString();
}