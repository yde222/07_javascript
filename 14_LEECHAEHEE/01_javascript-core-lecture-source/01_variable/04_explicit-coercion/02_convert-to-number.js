// 숫자 타입으로 명시적 변환

// 1. Number 생성자 함수를 new 연산자 없이 호출
console.log(Number('10'));
console.log(Number('10.01'));
console.log(Number(true));
console.log(Number(false));

// 2. parseInt(), parseFloat()
console.log(`parseInt('10') : ` + parseInt('10'));
console.log(`parseInt('10.01') : ` + parseInt('10.01'));
console.log(`parseFloat('10') : ` + parseFloat('10'));
console.log(`parseFloat('10.01') : ` + parseFloat('10.01'));


// 3. + 단항 연산자 사용

// 4. 산술 연산자 사용
console.log('10' * 1);
console.log('10.01' * 1);
console.log(true * 1);
console.log(false * 1);