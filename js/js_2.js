
var myObj ={
	"data1": "val-1",
	"data2": "val-2"
}; 

function createBrowser(obj) {
 
	var clonObj = {};

	for (var key in obj) {
		var newValue = obj[key];
    
	   Object.defineProperty(clonObj, newValue, {
	     get: function() {
	      console.log('свойство прочитали');
	      return newValue;
	     },
	     set: function(value) {
	      newValue = value;
	      console.log('свойство изменили');
	     }
	   });
	}
	return clonObj;
}

var newObj = createBrowser(myObj);

newObj.data1;
