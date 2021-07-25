function queryCheck(nums){
    let result = [];
    for(i = 0; i < nums.length; i++){
        let num = Number(nums[i]);

        if(Number.isNaN(num)){
            return new Error(`${nums[i]} isn't a valid number!`)
        }

        result.push(num);
    }
    return result;
}

function mean(nums){
    let sum = 0;

    for(num in nums){
        sum += nums[num];
    }

    return sum/nums.length;
}

function median(nums){
    let median = 0;
    nums.sort((a,b) => a - b);

    if(nums.length % 2 === 0){
        let x = nums[(nums.length/2) - 1];
        let y = nums[nums.length/2];
        median = (x + y)/2;
    }else{
        median = nums[(Math.floor(nums.length/2))];
    }

    return median;
}

function mode(nums){
    let mode = [];
    let counts = {};

    nums.forEach(n => {
        if(counts[n] === undefined){
            counts[n] = 0;
        }
        counts[n] += 1;
    });

    let keys = Object.keys(counts);
    let max = counts[keys[0]];

    for(let i = 0; i < keys.length; i++){
        let value = counts[keys[i]];
        if(value > max) max = value;
    }

    let maxArr = Object.entries(counts).filter(([k,v]) => v === max);
    
    if(maxArr.length > 1){
        for(let arr in maxArr){
            mode.push(parseInt(maxArr[arr][0]));
        }
    }else{
        mode = parseInt(maxArr[0][0]);
    }

    return mode;
}

module.exports = {queryCheck, mean, median, mode};