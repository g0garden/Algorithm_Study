
/// DataStructure : Queue

/// tip
// 시간오래걸릴것 같으면 조건문마다 콘솔바로 찍지 않고, result 문자열을 선언해서 추가해보기 
// 사용하는 메서드의 시간복잡도 정도는 검색해보기 eg.. JS의 shift()는 O(n)의 시간복잡도이다.

//풀이
let queue = [];

counter = Number(input[0]);

for (let i = 0; i < counter + 1; i++) {
    const command = input[i].split(' ');
    if (command.length == 1) {

        if (command[0] === 'pop') {
            if (queue.length == 0) {
                console.log(-1);
            } else {
                console.log(queue[0]);
                queue.shift();
            }
        }
        if (command[0] === 'size') {
            console.log(queue.length);
        }
        if (command[0] === 'empty') {
            if (queue.length == 0) {
                console.log(1);
            } else {
                console.log(0);
            }
        }
        if (command[0] === 'front') {
            if (queue.length == 0) {
                console.log(-1);
            } else {
                console.log(queue[0]);
            }
        }
        if (command[0] === 'back') {
            if (queue.length == 0) {
                console.log(-1);
            } else {
                console.log(queue[queue.length - 1]);
            }
        }
    } else {
        x = command[1];
        queue.push(x);
    }
}