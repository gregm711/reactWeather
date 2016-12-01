function getTempCallback (location, callback){
	callback(undefined, 78);
	callback('City not found');

}

getTempCallback('Cincy', function (err, temp) {
	if (err) {
		console.log('error', err);

	} else{
		console.log('success', temp)
	}

});


function getTempPromise(location){
	return new Promise(function (resolve, reject){
		setTimeout(function () {
			resolve(79);
			reject('city not found');

		}, 1000);
	});
}

getTempPromise('Cincy').then(function (temp){
	console.log('promise success', temp);
}, function (err){
	console.log('error', err);

});


function addPromise(a, b) {
	return new Promise(function (resolve, reject){
		if (typeof a === 'number' && typeof b === 'number'){
			resolve(a + b);
		} else{
			reject('A and b need to be numbers');
		}
	});
}

addPromise(2, 3).then(function (sum){

console.log('success')
}, function (err) {
	console.log('err', err);

});