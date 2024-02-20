// npm install --save bs58
var CryptoJS = require("cryptojs").Crypto
var bs58 = require("bs58")

var versao = "80"
// argv[2] é o segundo argumento: 0 é o node, 1 é o gerawif
var chavePrivada = process.argv[2]
var versaoEChavePrivada = versao + chavePrivada

//console.log(versaoEChavePrivada)
// node gerawif.js chaveprivada em hexadecimal
// 80chaveprivada

var primeiroSHA =  CryptoJS.SHA256(CryptoJS.util.hexToBytes(versaoEChavePrivada))

var segundoSHA =  CryptoJS.SHA256(CryptoJS.util.hexToBytes(primeiroSHA))

var checksum = segundoSHA.substr(0,8)

var wif = versaoEChavePrivada + checksum

var wifFinal = bs58.encode(CryptoJS.util.hexToBytes(wif))
console.log(wifFinal)
