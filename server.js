/**
 * Created by gregmiller on 11/10/16.
 */
var express = require('express');



var app = express();

app.use(express.static('public'));

app.listen(3000, function() {

    console.log('running');
});