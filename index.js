// Question # 01: Given an integer array nums, find a subarray that has the largest product, and return the product.
const arr = [2,3,-2,4];
const n = arr.length;
function maxSubarrayProduct(arr, n) {
    let ans = -Infinity;
    let product = 1;
    
    for (let i = 0; i < n; i++) {
        product *= arr[i];
        ans = Math.max(ans, product);
        if (arr[i] === 0) {
        product = 1;
        }
    }

    return ans;
    }
  
    console.log(`Maximum Subarray product is ${maxSubarrayProduct(arr, n)}`);

// Qno2 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twointegersum = function(nums,target){
    for(let n=0; n<nums.length; n++){
        for(let t=n+1; t<nums.length; t++){
            if(nums[n] + nums[t]== target){
                return[n, t]
            }
        }
    }
};
console.log(twointegersum([22,43,1,26],23));




// Question # 03: Reverse each word in a given input string.

let str = "welcome to JavaScript Guide!";
let reverseStr = str.split(" ")
.map(function (word)
{
    return word.split("").reverse().join("")
});
console.log(reverseStr.join(" "));

// Question # 04: Write a JavaScript program to display the reading status (i.e. display
//     book name, author name and reading status) of the following books.
var mylibrary = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {   author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

        for (var i = 0; i < mylibrary.length; i++) {

        var bookinlibrary = " " + mylibrary[i].title + " " + ' by ' + mylibrary[i].author + ".";
        
        if(mylibrary[i].readingStatus === true){
            console.log("Already read " + bookinlibrary);
                } else
                {
                console.log("Not read " + bookinlibrary);
                }
            }

// Question # 05: Write a JavaScript function to convert an amount into coins.
function conversionAmountIntoCoins(amount, coins) {
  
    if (amount === 0) {
      return [];
    } else {
      if (amount >= coins[0]) {
        left = (amount - coins[0]);
        return [coins[0]].concat(conversionAmountIntoCoins(left, coins));
      } else {
        coins.shift();
        return conversionAmountIntoCoins(amount, coins);
      }
    }
  }
  console.log(conversionAmountIntoCoins(96, [50, 10, 5, 2, 1]));