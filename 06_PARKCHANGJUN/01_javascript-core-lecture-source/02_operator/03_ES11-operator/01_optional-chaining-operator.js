// 옵셔널 체이닝 연산자
// 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고
// 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var obj = null;
var val = obj?.value;
console.log(`val : ` , val);

// 단축평가를 이용하면 빈문자열과 같은 Falsy값을 false로 취급하는 문제가 있었다.
var str = '';
var len = str && str.length;
console.log(`len >`, len);
var len2 = str?.length;
console.log(`len2 >`, len2);