var twoSum = function(nums, target) {
   let first = 0
   let second = first + 1
   
   if (nums.length > 0){
       while(first < nums.length){
           while(second < nums.length){
               if(nums[first] + nums[second] === target){
                   let arr = [first, second]
                   return arr
               }
               second++
           }
           first++
           second = first + 1
       }
   }
    else
        return ([])
}
