const crypto=require('crypto')
const secret='arshnoorkey'

const hashvalue=crypto.createHash('sha256',secret)
//data to be encoded
.update('this is data to be encoded')
//defining encoding type
.digest('hex')

console.log(hashvalue)

/*
. https://www.geeksforgeeks.org/blockchain-hash-function/
https://www.geeksforgeeks.org/blockchain-block-hashing/
https://www.geeksforgeeks.org/hash-functions-and-list-types-of-hash-functions/
*/