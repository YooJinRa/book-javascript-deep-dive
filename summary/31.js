// 정규 표현식 : 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어
// - 패턴매칭기능 제공 (특정 패턴과 일치하는 문자열 검색하거나 추출 또는 치환할 수 있는 기능)

const tel = '010-1234-567팔';
const regExp = /^\d{3}-\d{4}-\d{4}$/;
console.log(regExp.test(tel)); // false

// - 정규표현식을 사용하면 반복문, 조건문 없이 패턴을 정의하고 테스트하는 것으로 간단히 체크할 수 있음
// - 정규식은 주석이나 공백을 허용하지 않고 여러가지 기호를 혼합하여 사용하기 때문에 가독성이 좋지 않음

const target = 'Is this all there is?';
// 패턴: is
// 플래그: i => 대소문자 구별않고 검색
const regexp = /is/i;
// test메서드는 target 문자열에 대해 정규표현식 패턴을 검색하여 매칭결과를 불리언으로 반환
console.log(regexp.test(target)); // true

// RegExp 생성자 함수 사용해서 RegExp 객체 생성 가능
/** 
* pattern : 정규 표현식 패턴
* flag : 정규 표현식의 플래그(g, i, m, u, y)
*/
const objectRegExp = new RegExp(/is/i);
console.log(objectRegExp.test(target)); // true

const count = (str, char) => (str.match(new RegExp(char, 'gi')) ?? []).length;
console.log(count('Is this all there is?', 'is')); // 3
console.log(count('Is this all there is?', 'xx')); // 0

// -----

/** 
 * RegExp.prototype.exec
 * 인수로 전달받은 문자열에 대해 정규표현식 패턴을 검색하여 매칭 결과를 배열로 반환
 * 매칭결과가 없는 경우 null 반환
 * 문자열내의 모든 패턴을 검색하는 g 플래그를 지정해도 첫번째 매칭 결과만 반환
*/

const targetMethod = 'Is this all there is?';
const regExpMethod = /is/;
console.log(regExpMethod.exec(targetMethod)); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

/** 
 * RegExp.prototype.test
 * 인수로 전달받은 문자열에 대해 정규표현식 패턴을 검색하여 매칭 결과를 불리언 값으로 반환
*/

console.log(regExpMethod.test(targetMethod)); // true

/** 
 * String.prototype.match
 * 대상 문자열과 인수로 전달 받은 정규 표현식과 매칭결과를 배열로 반환
 * exec 메서드는 문자열 내의 모든 패턴을 검색하는 g 플래그를 지정해도 첫 번째 매칭결과만 반환하지만 
 * match메서드는 g플래그가 지정되면 모든 매칭 결과를 배열로 반환
*/

console.log(targetMethod.match(regExpMethod)); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
console.log(targetMethod.match(/is/g)); // [ 'is', 'is' ]

// -----

/**
 * 플래그 : 정규 표현식의 검색방식을 설정하기 위해 사용
 * i - Ignore case : 대소문자 구별하지 않고 패턴 검색
 * g - Global : 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색
 * m - Multi line : 문자열의 행이 바뀌더라도 패턴 검색을 계속함
 */

 console.log(targetMethod.match(/is/)); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
 console.log(targetMethod.match(/is/i)); // [ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]
 console.log(targetMethod.match(/is/g)); // [ 'is', 'is' ]
 console.log(targetMethod.match(/is/ig)); // [ 'Is', 'is', 'is' ]

// -----

/**
 * 패턴 : 문자열의 일정한 규칙을 표현하기 위해 사용
 * /로 열고 닫으며 문자열의 따옴표는 생략
 * 매타문자 또는 기호로 표현할 수 있음
 * 어떤 문자열 내 패턴과 일치하는 문자열이 존재할 때 정규표현식과 매치한다고 표현
 */

// 임의의 3자리 문자열 대소문자 구별하여 전역 검색 
console.log(targetMethod.match(/.../g)); // ['Is ', 'thi', 's a', 'll ', 'the', 're ', 'is?']

/**
 * 반복검색
 * {m,n}은 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미(콤마뒤에 공백이 있으면 작동하지 않으므로 주의필요)
 * {n}은 n번 반복되는 문자열 {n} === {n,n}
 * {n,}은 최소 n번 이상 반복되는 문자열
 * +는 최소 한번 이상 반복되는 문자열 의미 + === {1,}
 * ?는 최대 한번 이상(0번 포함) 반복되는 문자열 의미 ? === {0,1}
 */
const repeatTarget = 'A AA B BB Aa Bb AAA';
// A가 최소 1번, 최대 2번 반복되는 문자열 전역 검색
console.log(repeatTarget.match(/A{1,2}/g)); // [ 'A', 'AA', 'A', 'AA', 'A' ]
// A가 2번 반복되는 문자열 전역 검색
console.log(repeatTarget.match(/A{2}/g)); // [ 'AA', 'AA' ]
// A가 최소2번이상 반복되는 문자열 전역 검색
console.log(repeatTarget.match(/A{2,}/g)); // [ 'AA', 'AAA' ]
// A가 최소1번이상 반복되는 문자열 전역 검색
console.log(repeatTarget.match(/A+/g)); // [ 'A', 'AA', 'A', 'AAA' ]
// 'colo'다음 'u'가 최대 한번 이상 반복되고 'r'이 이어지는 문자열 전역 검색
console.log('color colour'.match(/colou?r/g)); // [ 'color', 'colour' ]

// -----

/**
 * OR 검색
 * | 또는 의미를 가짐
 * 분해되지 않은 단어 레벨로 검색하기 위해서 + 함께 사용
 * []내의 문자는 or로 동작 그 뒤에 +를 사용하면 앞선 패턴을 한 번 이상 반복
 * 범위를 지정하기 위해서는 []내에 -를 사용
 */

// A 또는 B를 전역 검색
console.log(repeatTarget.match(/A|B/g)); // ['A', 'A', 'A', 'B', 'B', 'B', 'A', 'B', 'A', 'A', 'A']
// A 또는 B가 한번이상 반복되는 문자열 전역 검색
console.log(repeatTarget.match(/A+|B+/g)); // ['A', 'AA', 'B', 'BB', 'A', 'B', 'AAA']
console.log(repeatTarget.match(/[AB]+/g)); // ['A', 'AA', 'B', 'BB', 'A', 'B', 'AAA']
// A ~ Z 한번 이상 반복되는 문자열 전역 검색
console.log('A AA B BB ZZ Aa Bb'.match(/[A-Z]+/g)); // ['A',  'AA', 'B', 'BB', 'ZZ', 'A', 'B']
// A ~ Z 또는 a ~ z 한번 이상 반복되는 문자열 전역 검색
console.log('A AA B BB ZZ Aa Bb 12'.match(/[A-Za-z]+/g)); // ['A',  'AA', 'B', 'BB', 'ZZ', 'Aa', 'Bb']
// 0 ~ 9 또는 , 가 한번 이상 반복되는 문자열 전역 검색
console.log('A AA 12,345'.match(/[0-9,]+/g)); // [ '12,345' ]
// \d 숫자를 의미 \D 문자를 의미
console.log('A AA 12,345'.match(/[\d,]+/g)); // [ '12,345' ]
console.log('A AA 12,345'.match(/[\D,]+/g)); // [ 'A AA ', ',' ]
// \w 알파벳, 숫자, 언더스코어를 의미
// \W 알파벳, 숫자, 언더스코어가 아닌 문자 의미

// -----

/**
 * [...] 내 ^은 not의미
 * [...] 밖 ^은 시작을 의미
 * $ 문자열의 마지막을 의미
 */

// com으로 끝나는 지 검사
console.log(/com$/.test('naver.com')); // true







