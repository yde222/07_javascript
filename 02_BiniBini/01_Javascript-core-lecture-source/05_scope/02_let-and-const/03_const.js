// [JavaScript - const 키워드 특징 정리]

// ✅ const는 "변하지 않는 상수"를 선언할 때 사용한다.
// - let과 같은 블록 레벨 스코프를 가진다
// - 선언과 동시에 반드시 초기화해야 한다
// - 재할당이 불가능하다 (단, 참조 타입의 내부 변경은 허용됨)


// ❌ 초기화 없이 선언하면 에러 발생
// const x; // SyntaxError: Missing initializer in const declaration

// ✅ 선언과 동시에 초기화해야 함
const x = 1;
console.log(x); // 1

// ❌ 재할당은 불가능
// x = 100; // TypeError: Assignment to constant variable.


// ✅ 참조 타입(const로 선언된 객체나 배열)의 내부는 변경 가능!
const student = {
    name: "Hong",
    age: 20
};

// 객체의 프로퍼티 값을 변경하는 건 허용됨
student.name = "Yu";      // ✅ 가능
student.test = "test";    // ✅ 새 프로퍼티 추가도 가능
console.log(student);     // { name: 'Yu', age: 20, test: 'test' }

// ❌ 객체 자체를 다른 값으로 재할당하면 에러
// student = 1; // TypeError: Assignment to constant variable.


// ✅ 마찬가지로 배열도 내부 요소는 수정 가능
const arr = [1, 2, 3];
arr[0] = 100;      // ✅ 가능
arr.push(4);       // ✅ 가능
console.log(arr);  // [100, 2, 3, 4]

// ❌ 배열 자체를 재할당하면 에러
// arr = [9, 8, 7]; // TypeError: Assignment to constant variable.

/*
💡 요약: const는 "변수 자체의 재할당을 금지"할 뿐,
        참조 타입(Object, Array)의 내부 변경은 허용된다.
*/
