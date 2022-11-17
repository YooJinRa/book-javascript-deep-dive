// String 인스턴스 생성
const strObj = new String('Lee'); 
console.log(strObj); // [String: 'Lee']
console.log(strObj[0]); // L

// -----

/**
 * String 매서드
 * String 객체의 메서드는 언제나 새로운 문자열 반환
 * 문자열은 변경 불가능한 원시값이기 때문에 String 래퍼 객체도 읽기전용 객체로 제공
 */
console.log(Object.getOwnPropertyDescriptors(strObj));
// String 래퍼 객체는 읽기 전용이기 때문에 writable 프로퍼티 어트리뷰트 값이 false
/*{
  '0': {value: 'L', writable: false, enumerable: true, configurable: false},
  '1': {value: 'e', writable: false, enumerable: true, configurable: false},
  '2': {value: 'e', writable: false, enumerable: true, configurable: false},
  length: { value: 3, writable: false, enumerable: false, configurable: false }
}*/

/**
 * String.prototype.indexOf
 * 대상 문자열에서 인수로 전달받은 문자열을 검색하여 첫 번째 인덱스 반환
 * 검색에 실패하면 -1 반환
 */
const str = 'hello world';
console.log(str.indexOf('l')); // 2
console.log(str.indexOf('l', 3)); // 3

// 대상 문자열에 특정문자열이 존재하는지 확인할 때 유용
if(str.indexOf("hello") !== -1){
  // ...
}

if(str.includes("hello")){ // includes를 사용하면 가독성이 더 좋음
  // ...
}

/**
 * String.prototype.search
 * 대상 문자열에서 인수로 전달받은 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스 반환
 * 검색에 실패하면 -1 반환
 */

/**
 * String.prototype.includes
 * 대상 문자열에 인수로 전달받은 문자열이 포함되어 있는지 확인하고 그 결과를 boolean으로 반환
 */

/**
 * String.prototype.startsWith
 * 대상 문자열에 인수로 전달받은 문자열로 시작하는지 확인하여 그 결과를 boolean으로 반환
 * 2번째 인수로 검색 시작할 인덱스 전달 가능
 */
console.log(str.startsWith('he')); // true
console.log(str.startsWith('x'));  // false
console.log(str.startsWith(' ', 5));  // true

/**
 * String.prototype.endsWith
 * 대상 문자열에 인수로 전달받은 문자열로 끝나는 지를 확인하여 그 결과를 boolean으로 반환
 * 2번째 인수로 검색할 문자열의 길이 전달
 */
console.log(str.endsWith('lo', 5)); // true

/**
 * String.prototype.charAt
 * 대상 문자열에 인수로 전달받은 인덱스에 위치한 문자를 검색하여 반환
 * 인덱스가 문자열 범위를 벗어난 정수인 경우 빈 문자열 반환
 */
for(let i = 0; i < str.length; i++){
  console.log(str.charAt(i)); // h e l l o  w o r l d
}

/**
 * String.prototype.substring
 * 대상 문자열에서 첫 번째 인수로 전달받은 인덱스에 위치하는 문자부터 두번째 인수로 전달받은 인덱스에 위치하는 문자로 바로 이전 문자까지 부분 문자열 반환
 * 두 번째 인수 생략 가능 -> 첫 번째 인수로 전달 받은 문자부터 마지막 문자까지 부분 문자열 반환
 */
// indexOf 메서드와 함께 사용하면 특정 문자열 기준 앞 뒤에 위치한 문자열 취득 가능
console.log(str.substring(0, str.indexOf(' '))); // hello

/**
 * String.prototype.slice
 * substring과 동일하게 동작하지만 음수인 인수를 전달 가능함 -> 음수 인수를 전달하면 대상 문자열의 가장 뒤에서부터 시작하여 문자열을 잘라내어 반환
 * 대상 문자열에서 첫 번째 인수로 전달받은 인덱스에 위치하는 문자부터 두번째 인수로 전달받은 인덱스에 위치하는 문자로 바로 이전 문자까지 부분 문자열 반환
 * 두 번째 인수 생략 가능 -> 첫 번째 인수로 전달 받은 문자부터 마지막 문자까지 부분 문자열 반환
 */

/**
 * String.prototype.trim
 * 대상 문자열 앞뒤에 공백 문자가 있을 경우 이를 제거한 문자열을 반환
 * trimStart, trimEnd
 * replace+정규표현식을 인수로 전달하여 공백문자 제거 가능
 */
console.log('     foo     '.trimStart());

/**
 * String.prototype.repeat
 * 대상 문자열 인수로 전달받은 정수만큼 반복해 연결한 새로운 문자열 반환
 * 전달받은 정수가 0이면 빈 문자열 반환
 * 음수이면 RangeError 발생
 * 인수를 생략하면 기본값 0 설정됨
 */

/**
 * String.prototype.replace
 * 문자열 치환 : 첫번째 인수로 전달받은 문자열 또는 정규표현식-> 두번째 인수로 전달받은 문자열
 * 두 번째 인수로 치환 함수 전달 가능
 */

// 카멜 케이스 -> 스네이크 케이스
function camelToSnake(camelCase){
  return camelCase.replace(/.[A-Z]/g, match => { // 임의의 한 문자와 대문자로 이루어진 문자열에 매치
    console.log(match); // oW
    return match[0] + '_' + match[1].toLowerCase();
  });
}
const camelCase = 'helloWorld';
console.log(camelToSnake(camelCase)); // hello_world

/**
 * String.prototype.split
 * 대상 문자열에서 첫 번째 인수로 전달한 문자열 또는 정규표현식을 검색하여 문자열을 구분한 후 분리된 각 문자열로 이루어진 배열 반환
 * 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열 반환
 * 두 번째 인수로 배열의 길이 지정 가능
 */