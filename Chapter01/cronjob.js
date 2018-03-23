#!/usr/local/bin/node
var CronJob=require('cron').CronJob;

var job = new CronJob('* * * * * *', function() {
        var currentTime = new Date().getTime();
        console.log(currentTime);
}, null, true, 'Asia/Kolkata');

