// spread 문법
// array, string, map, set, Dom컬렉션, arguments와 같이 for ...of 문으로 순회할 수 있는 이터러블에 한정

console.log("...[1, 2, 3] ===> ", ...[1, 2, 3]);
console.log("...'hello' ===>", ...'hello');
console.log("...new Map([['a', '1'], ['b', '2']]) ===>", ...new Map([['a', '1'], ['b', '2']]));
console.log("...new Set([1, 2, 3]) ===>", ...new Set([1, 2, 3]));
// console.log("...{a:1, b:2} ===>", ...{a:1, b:2}); // TypeError: Found non-callable @@iterator

// 스프레드 문법의 결과는 변수에 할당할 수 없음(스프레드 문법의 결과는 값이 아님)
// const list = ...[1, 2, 3]; 
// console.log(list); // SyntaxError: Unexpected token '...'

// 함수 호출문의 인수 목록에서 사용하는 경우
const arr = [1, 2, 3];
const max1 = Math.max(arr);
console.log(max1); // NaN : 숫자가 아닌 배열을 인수로 전달해서 NaN 반환
const max2 = Math.max(...arr);
console.log(max2); // 3

// Rest 파라미터와 스프레드 문법 비교
// Rest 파라미터 : 함수에 전달된 인수들의 목록을 배열로 전달 받기 위해 매개변수 이름 앞에 ...을 붙이는 것
// 스프레드 문법 : 여러 개의 값이 하나로 뭉쳐 있는 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만드는 것
function foo(...rest) {
  console.log("...rest ===> ", rest); // rest 파라미터
}
foo(...[1, 2, 3]);

// 객체 병합, 프로퍼티가 중복되는 경우 뒤에 위치한 프로퍼티가 우선권을 가짐
const merged = { ...{x:1, y:2}, ...{y:10, z:3}};
console.log("merged ===> ", merged); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = { ...{x:1, y:2}, y:100};
console.log("changed ===> ", changed); // { x: 1, y: 100 }

// 프로퍼티 추가
const added = { ...{x:1, y:2}, z:0};
console.log("added ===> ", added); // { x: 1, y: 2, z: 0 }
