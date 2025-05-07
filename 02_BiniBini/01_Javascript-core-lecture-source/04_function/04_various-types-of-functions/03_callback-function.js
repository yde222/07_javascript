// [JavaScript - 콜백 함수 & 고차 함수 기본 개념 정리]

// ✅ 콜백 함수란?
// - "매개변수로 전달되는 함수"
// - 다른 함수에 전달되어, 내부에서 "나중에 호출되는 함수"를 말함

// ✅ 고차 함수(Higher-Order Function)란?
// - "함수를 인자로 받거나, 함수를 반환하는 함수"
// - 콜백 함수의 호출 시점을 스스로 결정할 수 있음


// ✅ 일반 함수 정의
function increase(value) {
    return value + 1;
}

function decrease(value) {
    return value - 1;
}

// ✅ 고차 함수 정의
function apply(func, value) {
    // func는 콜백 함수로 전달되는 함수
    // value는 그 함수에 적용할 값
    return func(value); // 고차 함수가 콜백 함수 호출 시점을 결정
}

// ✅ 함수 전달 예시
console.log(apply(increase, 5)); // 6
console.log(apply(decrease, 5)); // 4

// ✅ 콜백 함수를 "익명 함수"로 바로 전달 (이름 없이 즉석에서 정의)
console.log(apply(function(value) {
    return value + 1;
}, 10)); // 11

// ✅ 화살표 함수로 더 간단하게 작성
console.log(apply(value => value - 1, 10)); // 9


/*
💡 핵심 패턴
- 고차 함수는 '변하지 않는 공통 로직'을 정의하고,
- 그 안에서 실행할 '가변 동작(콜백)'을 함수로 외부에서 받아 실행함
- 함수의 재사용성과 유연성을 높여주는 방식임
*/


// ✅ 콜백 함수가 많이 쓰이는 곳: 배열 메서드 (map, filter, sort 등)
console.log([3, 1, 4, 2, 5].sort((a, b) => b - a)); // [5, 4, 3, 2, 1]
// sort()는 배열의 정렬 기준을 '콜백 함수'로 전달받음
// 여기선 내림차순 정렬

// 또 다른 예시: map()
const doubled = [1, 2, 3].map(num => num * 2);
console.log(doubled); // [2, 4, 6]

// filter()
const even = [1, 2, 3, 4, 5].filter(num => num % 2 === 0);
console.log(even); // [2, 4]


// ✅ 실무에서 콜백 함수는 이런 곳에 자주 쓰임
// - 이벤트 처리 (button.addEventListener)
// - 타이머 (setTimeout, setInterval)
// - 서버 응답 처리 (fetch().then(...))
// - 배열 고차 함수 (map, filter, reduce, sort, forEach...)
 