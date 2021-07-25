const express = require('express');
const MyError = require('./myError');
const {queryCheck, mean, median, mode} = require('./functions');

const app = express();

app.use(express.json());

app.get('/mean', (req, res) => {
    if(!req.query.nums){
        throw new MyError('You must pass numbers seperate by commas in the query string', 400);
    }

    let stringNums = req.query.nums.split(',');
    
    let nums = queryCheck(stringNums);
    if(nums instanceof Error){
        throw new MyError(nums.message);
    }

    return res.json({
        response: {operation: 'mean', value: mean(nums)}
    })
});

app.get('/median', (req, res) => {
    if(!req.query.nums){
        throw new MyError('You must pass numbers seperate by commas in the query string', 400);
    }

    let stringNums = req.query.nums.split(',');

    let nums = queryCheck(stringNums);
    if(nums instanceof Error){
        throw new MyError(nums.message);
    }

    return res.json({
        response:{operation: 'mode', result: median(nums)}
    })
});

app.get('/mode', (req, res) => {
    if(!req.query.nums){
        throw new MyError('You must pass numbers seperate by commas in the query string', 400);
    }

    let stringNums = req.query.nums.split(',');

    let nums = queryCheck(stringNums);
    if(nums instanceof Error){
        throw new MyError(nums.message);
    }

    return res.json({
        response:{operation: 'mode', result: mode(nums)}
    });
});

app.get('/all', (req, res) => {
    if(!req.query.nums){
        throw new MyError('You must pass numbers seperate by commas in the query string', 400);
    }

    let stringNums = req.query.nums.split(',');

    let nums = queryCheck(stringNums);
    if(nums instanceof Error){
        throw new MyError(nums.message);
    }

    return res.json({
        response:{
            operation: 'all',
            mean: mean(nums),
            median: median(nums),
            mode: mode(nums)
        }
    })
})

app.use(function (req, res, next) {
  const err = new MyError("Page Not Found" ,404);

  return next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err
    });
});

app.listen(3000, () => console.log('Server started on port 3000.'));