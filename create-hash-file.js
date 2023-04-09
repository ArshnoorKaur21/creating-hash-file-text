const crypto=require('crypto')
const fs=require('fs')

const filname='home.txt'

const secret='my secretkey'
const hash=crypto.createHash('sha256',secret)

const input=fs.createReadStream(filname)

input.on('readable',()=>{
    const val=input.read()

    if(val)
    {
        hash.update(val)
    }
    else{
        console.log(`${hash.digest('hex')} ${filname}`)
    }
})