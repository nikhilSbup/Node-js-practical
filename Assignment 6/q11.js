// decompress
const fs= require('fs')
const zlib= require('zlib')
const readStream = fs.createReadStream('mca_B.txt')
const writeStream = fs.createWriteStream('mca_B_decompress.txt')
const gunzip = zlib.createGunzip()
readStream.pipe(gunzip).pipe(writeStream)
.on('finish',()=> {
    console.log('File Successfully decompressed')
})