// [JavaScript - 프로토타입의 특징 및 동작 방식]

// ✅ 상위 객체 user 정의
const user = {
    id: 'user',
    
    // 메서드 정의 - 함수 축약형 사용
    login() {
        console.log(`${this.id} has been logged-in.`);
    }

    // 위 코드는 아래와 동일함 (함수 축약형)
//     login: function() {
//         console.log(`${this.id} has been logged-in.`);
//     }
};

// ✅ 하위 객체 student 정의
const student = {
    __proto__: user  // user를 student의 프로토타입으로 설정 (상속)
};

// ✅ 프로퍼티 읽기 vs 쓰기
// 프로토타입은 **읽기**에만 사용됨.
// 프로퍼티를 추가/수정/삭제할 때는 무조건 현재 객체(student)에 직접 적용됨
student.id = "user01"; // student에 id 프로퍼티 새로 추가됨 (user의 id와는 무관)

console.log(student); // { id: 'user01', __proto__: user }

// ✅ 메서드 호출 시 this의 의미
// login 메서드는 user에 정의되어 있지만,
// 호출한 주체가 student이므로 this는 student를 가리킴
student.login(); // 출력: user01 has been logged-in.

console.log(`❤️`);

// ✅ for...in 반복문으로 프로퍼티 순회
// - 객체 자신(student)의 프로퍼티뿐 아니라
// - 프로토타입(user)의 프로퍼티도 함께 순회 대상이 됨
for (let key in student) {
    console.log(key);

    // hasOwnProperty() → 해당 프로퍼티가 student 자신의 것인지 확인
    let isOwn = student.hasOwnProperty(key);

    if (isOwn) {
        console.log(`객체 자신의 property : ${key}`);
    } else {
        console.log(`상속 property : ${key}`);
    }
}

/*
📌 주요 개념 정리

1. 프로토타입은 프로퍼티를 **읽을 때만 사용**된다.
   → student.login, student.activate 등 조회할 때만 상속된 프로퍼티를 찾는다.

2. 프로퍼티를 추가하거나 수정할 경우엔 항상 student 객체 자체에 추가된다.
   → student.id = 'xxx' 는 user.id 를 덮어쓰지 않음

3. 메서드 내부의 this는 **프로토타입과 무관하게**, 해당 메서드를 호출한 객체(student)를 가리킨다.
   → this는 항상 `.앞에 있는 객체`를 의미함

4. for...in 반복문은 **상속된 프로퍼티까지 포함**해서 순회한다.
   → 단순히 자신이 가진 프로퍼티만 순회하려면 Object.keys() 등을 사용해야 함
*/

