// Symbol: ES6에서 추가된 7번째 타입으로 다른값과 중복 되지 않는 유일무이한 값
// 이름 충돌 위험이 없는 객체의 유일한 프로퍼티 키값을 만들기 위해 사용
var key = Symbol('key');
console.log(`key`, typeof key);

// 객체 타입
// 