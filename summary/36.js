// 디스처링 할당 destructuring assignment(구조분해할당)
// 구조화된 배열과 같은 이터러블 또는 객체를 destructuring하여 1개 이상 변수에 개별적으로 할당하는 것
// 배열과 같은 이터러블 또는 객체 리터럴에서 필요한 값만 추출하여 변수에 할당할 때 유용

function parseURL(url = '') {
  const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
  console.log(parsedURL);

  if(!parseURL) return {};

  const [, protocol, host, path] = parsedURL;
  return { protocol, host, path};
}
const parsedURL = parseURL('https://developer.mozilla.org/ko/docs/Web/Javascript');
console.log(parsedURL);

/*
{
  protocol: 'https',
  host: 'developer.mozilla.org',
  path: 'ko/docs/Web/Javascript'
}
*/

function printTodo({ content, completed }) {
  console.log(`할일 ${content}은 ${completed? `완료`:`비완료`} 상태입니다.`);
}
printTodo({
  id: 1,
  content: 'HTML',
  completed: true
}); // 할일 HTML은 완료 상태입니다.