// [JavaScript - Strict Mode 에서 에러가 나는 대표적인 경우들]

// ✅ 1. 암묵적 전역 변수 생성 (Strict 모드에서 에러)

// 즉시 실행 함수(IIFE)
(function() {
    // 엄격 모드 해제 상태라면, 변수 선언 없이도 x는 전역 변수처럼 동작함
    // 'use strict'; // ← 이 줄을 활성화하면 ReferenceError 발생

    x = 1; // ❗ 변수 선언 없이 사용 → non-strict에서는 허용됨, strict에서는 에러
    console.log("x =", x);
})();

// console.log(x); // 여기서도 접근 가능 (non-strict에서는 암묵적 전역이므로)

// ✅ 2. delete로 변수 삭제 시도 (Strict 모드에서는 금지)
(function() {
    // 'use strict'; // ← 활성화 시 에러 발생 (SyntaxError)

    var y = 1;

    // ❗ 변수나 함수, 매개변수는 delete로 삭제 불가능
    delete y; // non-strict에서는 false 반환, strict에서는 SyntaxError

    console.log("삭제 시도 후 y =", y);
})();

/*
💡 엄격 모드에서 에러가 발생하는 이유:

1. 암묵적 전역 금지
   → 의도하지 않은 전역 변수 생성을 막기 위해 선언 없이 변수를 사용할 수 없음

2. delete 제한
   → 변수, 함수, 매개변수는 delete 대상이 될 수 없음
     delete는 오직 객체의 프로퍼티만 삭제 가능
     ex) delete obj.prop ✅
*/

