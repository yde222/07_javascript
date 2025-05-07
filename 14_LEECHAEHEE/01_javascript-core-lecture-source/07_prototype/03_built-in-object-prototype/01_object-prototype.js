const obj = {};
console.log(obj.__proto__ === Object.prototype);
console.log(obj.toString === obj.__proto__.toString);
console.log(obj.toString === Object.prototype.toString);

// Object는 내장 객체 생성자 함수인데 이 생성자 함수의 prototype은 toString을 비롯해서
// 다양한 메소드가 구현된 거대한 객체를 참조한다.
// new Object(), {}를 사용해 객체를 만들 때 만들어진 객체의 [[prototype]]은 Object.prototype을 참조한한다.
