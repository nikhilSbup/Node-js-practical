// compress
const fs= require('fs')
const zlib= require('zlib')
const readStream = fs.createReadStream('mcaB.txt')
const writeStream = fs.createWriteStream('mca_B.txt')
const gzip = zlib.createGzip()
readStream.pipe(gzip).pipe(writeStream)
.on('finish',()=> {
    console.log('File Successfully compressed')
})