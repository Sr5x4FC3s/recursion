// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var elements = [];
  var getElementsByClass = function(arg) {
  	if ( arg !== undefined) {
  		if (arg.length) {
  		    arg.forEach(x => {
                if (x.classList !== undefined) {
            	    getElementsByClass(x);
            	}
            });
  		} else {
  			if (arg.classList) {
  				if (arg.classList.contains(className)) {
  					elements.push(arg);
  				}
  				getElementsByClass(arg.childNodes);
  			}
  		}
  	}
  };
  getElementsByClass(document.body);
  return elements;
};
