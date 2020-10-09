var noble = require('noble')

noble.on('discover', function(n) {
 console.log(n)
})

noble.startScanning();
