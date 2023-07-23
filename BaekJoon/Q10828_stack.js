
/// DataStructure : Stack
/// 정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

//풀이
const iter = input.shift();

let stack = [];

// 시간 초과되는 것을 방지하기 위해
// ans 배열에 값들을 넣어놓고 마지막에 join으로 문자열로 바꿔서 한번에 출력
let ans = [];

// input 배열의 원소를 하나씩 짚으면서 명령어 판단
for (let i = 0; i < iter; i++) {
    if (input[i].includes("push")) {
        // "push 1", 이런 식으로 되어있기 때문에 split을 통해 정수를 분리해야함
        let pushNum = input[i].split(" ");
        stack.push(Number(pushNum[1]));
    } else if (input[i].includes("pop")) {
        // stack.length가 0보다 커야지 pop 가능
        // 스택 가장 위(stack 배열 가장 뒤)의 정수를 빼고, 출력해야함.
        if (stack.length > 0) {
            let popNum = stack.pop();
            ans.push(popNum)
        } else {
            ans.push(-1);
        }
    } else if (input[i].includes("size")) {
        // 단순 stack.length 출력
        ans.push(stack.length);
    } else if (input[i].includes("empty")) {
        // 비어있으면 1, 들어있으면 0 출력
        if (stack.length === 0) {
            ans.push(1);
        } else {
            ans.push(0);
        }
    } else if (input[i].includes("top")) {
        // 비어있으면 -1, 들어있으면 가장 뒤에 있는 값 출력
        if (stack.length === 0) {
            ans.push(-1);
        } else {
            ans.push(stack[stack.length - 1]);
        }
    }
}

console.log(ans.join("\n"));



/// 수정중
// const stack = [];
// let top = 0;
// let answer = "";

// //{명령 : 함수()}
// const commandObj = {
//     push: (x) => (stack[top++] = x),
//     pop: () => {
//         if (top) {
//             top--;
//             return stack.splice(-1);
//         } else return -1;
//     },
//     size: () => top,
//     empty: () => (!top ? 1 : 0),
//     top: () => (top ? stack[top - 1] : -1),
// }


