const Gun = require('gun');
var gun = Gun('https://db.robbestad.no/gun');
gun.put({hello: "roniin"}).key('random/mui3');
