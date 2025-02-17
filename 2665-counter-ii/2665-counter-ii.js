/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
   let cnt = init

   function increment(){
    cnt += 1
    return cnt
   }

   function reset(){
    cnt = init
    return cnt
   }

   function decrement(){
    cnt -= 1
    return cnt
   }

   return {increment, reset, decrement}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */