
///DataStructure :: Linked List
//HEAD(첫번째 노드), TAIL(마지막 노드), LENGTH(리스트의 총 길이), NEXT(노드 사이를 연결하는 포인터를 안내)
//노드는 (저장할데이터 + 다음 노드를 가리킬 포인터) 로 구성

//배열을 사용하는 과정에서 삽입, 삭제 과정이 많아진다 == 배열의 요소들에 인덱스 번호를 붙이는 과정이 기하급수적으로 늘어난다 ==> 시간복잡도 커진다.
//Linked List자료구조를 활용해서 해결 할 수 있다!

//풀이
const N = Number(input);

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// LinkedList 클래스 설정 //젤처음엔 다 비어있겠지
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        this.length++;

        return newNode;
    }

    getHead() { // 첫 노드(head) 가져오기
        return this.head.val;
    }

    removeHead() { // 첫 노드(head)를 연결리스트에서 지우기
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }

    getLength() { // 연결리스트의 길이 알기
        return this.length;
    }
}

const cards = new LinkedList();

for (let i = 1; i <= N; i++) {
    cards.push(i);
}

while (cards.getLength() !== 1) { // 길이가 0 이 아니라면.
    cards.removeHead(); // 맨 앞 노드를 지우고
    cards.push(cards.getHead()); // 맨 앞 노드를 맨뒤로 붙이고
    cards.removeHead(); // 다시 맨 앞 노드를 지우고
}
console.log(cards.getHead());