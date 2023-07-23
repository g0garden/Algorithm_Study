
/// DataStructure : stack

/// Parenthesis String(PS) : 모든 괄호 문자열 eg.. "(()(" 또는 ")(("
/// Valid Parenthesis String(VPS) : 한 쌍을 이룬 괄호 문자열 eg.. "(())" 또는 "((()))()()"
/// PS와 VPS 판단해서 결과를 YES or NO로 출력하시오.


const len = input.shift();
const result = [];


///기호 '('와 ')'의 개수를 카운트하여 '(' 기호이면 1을 더해주고, ')' 기호이면 1을 빼준다.
///만약 VPS 인 문자열일 시 '(' 기호와 ')' 개수가 서로 딱 떨어지므로 0이 나오게 된다.
///카운트된 수가 -1이 될 시, 닫치지 않은 ')' 기호가 존재한다는 뜻이므로 해당 문자열은 VPS가 아닌 문자열이 된다.


for (let i = 0; i < len; i++) {
    let cnt = 0;

    for (let s of input[i]) {
        cnt += s === "(" ? 1 : -1; //짝 맞추면 되는거 아녀?

        if (cnt < 0) break;
    }

    result.push(cnt === 0 ? 'YES' : "NO");
}

console.log(result.join('\n'));