
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.
function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }


  function getLength(arr){
    //return length of arr
    return arr.length;
  }
  function getFirst(arr){
    //return the first element of arr
    return arr[0];
  }
  function getLast(arr){
    //return the last element of arr
    return arr[arr.length-1];
  }
  function pushElement(arr){
    var el = 1;
    arr.push(el);
    return arr;
  }
  function popElement(arr){
    arr.pop();
    
    return arr;
  }