//instalar o nodejs
//npm install --save-dev cryptojs
var CryptoJS = require("cryptojs").Crypto;


// passo 1 - criar uma variavel com 32 bytes randomicos
var chavePrivada = CryptoJS.util.randomBytes(32);
//console.log(chavePrivada)

// passo 2 - converter a chave privada para hexadecimal em maíuscula
var chavePrivadaHex = CryptoJS.util.bytesToHex(chavePrivada).toUpperCase();
console.log(chavePrivadaHex)