// [JavaScript - let 키워드 특징 및 var의 단점 보완]

// ✅ ES6에서 var의 단점을 보완하기 위해 let, const 도입

// 1. 변수의 중복 선언 금지
let msg = 'Hello';
// let msg = "Bye"; // ❌ SyntaxError: Identifier 'msg' has already been declared

console.log(msg); // Hello

// var는 중복 선언이 허용됨 → 실수로 덮어쓸 위험이 있음
// var msg = "Bye"; // 가능 (하지만 위험!)


// 2. 블록 레벨 스코프 지원

let i = 0;
for (let i = 0; i < 10; i++) {
    // 이 i는 for 블록 내부에서만 유효
    // 외부 i와는 완전히 다른 변수
}

console.log(i); // 0 ✅ 외부 i는 그대로 유지됨

// var를 썼다면 i가 덮어쓰기 됐을 것
// for (var i = 0; i < 10; i++) {} → 이후 console.log(i) 는 10 출력됨


// 3. 변수 호이스팅은 되지만 "TDZ"로 인해 선언 전에는 접근 불가

// console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 100;
console.log(x); // 100

/*
💡 변수 호이스팅이란?
- 선언이 코드의 최상단으로 끌어올려지는 현상

💡 TDZ (Temporal Dead Zone, 일시적 사각지대)
- let/const 변수는 선언 전에 접근할 수 없는 영역이 생김
- 선언은 호이스팅되지만 초기화 이전에는 "접근 불가" 상태
*/


// ✅ 요약 비교

/*
| 특징                  | var               | let              |
|-----------------------|-------------------|------------------|
| 스코프                | 함수 레벨         | 블록 레벨        |
| 중복 선언             | 허용됨            | 금지됨           |
| 변수 호이스팅         | O (undefined로 초기화) | O (하지만 TDZ로 접근 불가) |
| 초기화 전 접근        | 가능 (undefined)  | ❌ ReferenceError |
*/
