interface MathFunctionParams{
    n1: number;
    n2: number;
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({n1: 5, n2: 10})); 