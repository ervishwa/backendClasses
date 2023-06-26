26june----------------


var majorityElement = function(nums) {
    const obj = {};

    for(let num of nums){
        //3 
        if(!obj[num]){
         obj[num] = 1;
        }else{
         obj[num]++;
        }
    }

  let ans = 0;
  let freq = 0;

  for(let num1 in obj){
      if(obj[num1]>freq){
          ans  = num1;
          freq = obj[num1];
      }
  }

  return ans;
};
versha Dadhore9:38 PM
int count = 0;
                int max = 0;
				for(int i =0 ; i<nums.length; i++) {
					if(count == 0) {
						max = nums[i];
					}
					if(nums[i] == max) {
						count++;
					} else {
						count--;
					}
				}

				return max;
    }
}
You9:47 PM
class Solution {
    public int majorityElement(int[] nums) {
       
         int max = nums[0];
         int count = 1;
		for(int i = 1 ; i<nums.length; i++) {
					if(count == 0) {
						max = nums[i];
					}
					if(nums[i] == max) {
						count++;
					} else {
						count--;
					}
				}

				return max;
    }
}
versha Dadhore10:12 PM
node:internal/validators:224
    throw new ERR_INVALID_CALLBACK(callback);
    ^

TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined
    at makeCallback (node:fs:186:3)
    at Object.readdir (node:fs:1369:14)
    at Object.<anonymous> (C:\Users\Lenovo\OneDrive\Desktop\Newton Projects\React-Practice\bootStrap\myapp\src\Dummy1.js:4:17)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loa
versha Dadhore10:23 PM
<Buffer 69 6d 70 6f 72 74 20 52 65 61 63 74 20 66 72 6f 6d 20 27 72 65 61 63 74 27 3b 0a 69 6d 70 6f 72 74 20 52 65 61 63 74 44 4f 4d 20 66 72 6f 6d 20 27 72 ... 250 more bytes>
You10:35 PM
hoisting
promises
call bind apply
object
You10:36 PM
microtask queue call back queue event loop web api's.


-------------