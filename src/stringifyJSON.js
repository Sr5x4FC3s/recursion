// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof (obj) === 'string') {
  	return `"${obj}"`;
  } else if (Array.isArray(obj)) {
  	obj = obj.map(function(arg) {
  		return stringifyJSON(arg);
  	});
  	return `[${obj}]`;
  } else if (obj && typeof(obj) === 'object') {
  	var object = '';
  	for (var prop in obj) {
  		if (obj[prop] !== undefined && typeof(obj[prop]) !== 'function') {
  			object = object.concat(stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]) + ',');
  		}
  	}
  	return `{${object.slice(0, object.length - 1)}}`;
  } else {
  	return '' + obj;
  }
};
