/** 
문제의 예제 입력방식에 따라 input 부분 달라짐

1. 한 줄에 공백으로 값이 들어올때 
eg.. 1 2 3
let input = require('fs').readFileSync('example.txt').toString().split('\n')

2. 한 줄에 하나씩 개행을 기준으로 값이 들어올 떄 
eg..
1
2 
let input = require('fs').readFileSync('example.txt').toString().split(' ');
**/


let input = require('fs').readFileSync('example.txt').toString().split(' ');
//input이 example파일 안에 있다는 가정하에 이 주석 아래부터 풀이코드가 들어오면 됨.
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b); // 3