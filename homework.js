// 1. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum (numbers) {
  var retval=0;
  if(numbers.length===0){
    return 0 
  
  }else if(numbers.length ===1){
    return numbers[0]
  }
  for(var index=0; index<=numbers.length-1; index++){
    retval = retval +  numbers[index]
  }
  return retval
}

// 2. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
function average(numbers){
  var sum=0;
  if(numbers.length===0){
    return undefined
  
  }else if(numbers.length ===1){
    return numbers[0]
  }
  for(var index=0; index<=numbers.length-1; index++){
    sum+=  numbers[index]
  }
  return sum/numbers.length
}
// 3. Create a function called "intersection" that takes two arrays and
// returns a new array that contains the elements found in both arrays.
// The order they are in does not matter, but no duplicates should be
// in the returned array, even if they were in the input.
function intersection(array1, array2){
var returnval=[]

for(var i=0; i < array1.length; i++){
  for(var i2=0; i2<array2.length; i2++){
    if(array1[i]===array2[i2]){
      returnval.push(array1[i]);
  
    }
  }
 
}
return returnval;
}
// 4. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.
function minimum(array1){
var min

  if(array1.length===0){
    return undefined;
  }else if(array1.length ===1){
    return array1[0]
  }
  array1.sort();
  for(var i=0; i< array1.length; i++ ){
    if(typeof(min)==='undefined' || array1[i]<min){
      min=array1[i]
    }
  }
  return min;
}
// 5. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.
function selectionSort(array1){
  var arrayCopy = array1.slice(0)
  var sortedArray = []
  var idxOf;
  var min;
  if(array1.length===0){
    return array1
  }else if(array1.length ===1){
    return [2]
  }
    for(var index=0; index<=array1.length-1;index++){
      min = minimum(arrayCopy);// find the minimum
      sortedArray.push(min); // copy to the new array 
      idxOf = arrayCopy.indexOf(min) // get the index or position of the element in the array
      console.log("the index : " +min)
      arrayCopy.splice(idxOf,1) // use the position to delete the 
    }
    return sortedArray
    
  }
// 6. Create a function called "createUser" that takes a name and a Date object
// and returns an object with the keys "name" and "dob" (date of birth) with
// those values.
function createUser(pname,adate){
var person={name: pname, dob: adate };
  return person
}
// 7. Create a function called "calculateAge" that takes a user created from
// createUser and a Date object considered the current date, and calculates the user's
// age in years on that date. You can use your code from yesterday's homework.
function howOld(birthdate, date){
    
  var difference = date - birthdate // will return milliseconds
  var convertToYear = difference /  31556952000 //is the number of milliseconds in a year
  var returnVal;
  
  returnVal = Math.trunc(convertToYear);

  
  return returnVal;
}
function calculateAge(user,date){
  
  return howOld(user.dob, date);
}
// 8. Create a function called "addAge" that takes a user created from createUser
// and a Date object and adds a new key on the user object, "age", with the age
// in years the user was on that date.
function addAge(user, date){
  var age= calculateAge(user, date);
  user["age"]= age
  return user
}
// 9. Create a function called "createUsers" that takes two arrays of equal
// length, the first being a list of names and the second being a list of dates of
// birth, and returns a new array of objects created from those original arrays.
function isEmpty(array){
  return(array.length===0)
}
function createUsers(name_list, dob_list){
  var len = name_list.length;
  var recIn=0
  var merged_list = [];
 if(isEmpty(name_list)){
   return []
 }
  while(recIn <=len-1){
    console.log("entered")
   
    merged_list.push(createUser(name_list[recIn], dob_list[recIn]));
    recIn++
  }
  return merged_list
}
// 10. Create a function called "averageAge" that takes an array of users and
// a Date object and returns the average age in years of the users on that date.
// You do not have to handle the situation in which the current date is before
// a user's date of birth.
function averageAge(user, date){
  var retvalue=0;
  var len=0;
  var recno =0;
  var sum=0
  if(isEmpty(user)){
    return undefined
  }
  len= user.length
 
  while(recno <= len-1){
    sum+=calculateAge(user[recno],date)
    recno++
  }
  return (sum / len)
}