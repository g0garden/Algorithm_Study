
///DataStructure :: 요세푸스순열 (Queue)

/// 원에서 사람들이 제거되는 순서를 (N, K) N명의 사람들 중에 K번째 사람을 제거한다.

const N = input[0];
const K = input[1];

// 인원 배정
let queue = [];

for (let i = 0; i < N; i++) {
    queue.push(i + 1);
}

let count = 1;

let ans = [];

while (queue.length > 0) {
    let shiftedPeople = queue.shift();

    if (count % K === 0) {
        ans.push(shiftedPeople);
    } else {
        queue.push(shiftedPeople);
    }

    count++;
}

console.log(`<${ans.join(", ")}>`);