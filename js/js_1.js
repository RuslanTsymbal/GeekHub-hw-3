function createObj() {
   var data = null;
 
   Object.defineProperty(this, 'data', {
     get: function() {
      console.log('свойство прочитали');
      return data;
     },
     set: function(value) {
      data = value;
      console.log('свойство изменили');
    }
  });
}

var myObj = new createObj();
myObj.data; 
myObj.data = "new value - 1";
myObj.data = "new value - 2";
