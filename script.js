function cheapestCostToCross(n,arr){ 
    arr = arr.sort(); 
    let total = 0;
    
    for (let i = n - 1; i > 1; i -= 2){ 
        if (i === 2){ 
            total += arr[2] + arr[0];
        }else{ 
            firstWay = arr[i] + arr[0] + 2 * arr[1]; 
            secondWay = arr[i] + arr[i - 1] + 2 * arr[0]; 
            total += Math.min(firstWay, secondWay);
        }
    }
    //price for two cheapest person 
    if (n == 1){ 
        total += arr[0];
    }else{ 
        total += arr[1]; 
    }
    return total; 
}

let n1 = 4;
let arr1 = [300, 400, 600, 700];
console.log(cheapestCostToCross(n1,arr1));

let n2 = 2;
let arr2 = [1321, 2450];
console.log(cheapestCostToCross(n2,arr2));

let n3 = 3;
let arr3 = [500,123,873]
console.log(cheapestCostToCross(n3,arr3));

let n4 = 4;
let arr4 = [600,800,150,700]
console.log(cheapestCostToCross(n4,arr4));