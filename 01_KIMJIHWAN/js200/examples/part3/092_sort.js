// 배열 정렬하기(sort)
// 배열.sort(function(a, b) {
//     return 비교값;
// })

// Array 객체의 sort 메소드는 인자로 비교 함수를 대입하여 배열 요소들을 정렬합니다.
// 이때, 비교 함수에서 return으로 반환되는 비교값에 따라 순서가 정해짐
// 비교값의 구체적인 기준은 다음과 같다.

const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const objArr = [
    {id: 2, name: 'Leo'},
    {id: 0, name: 'Daniel'},
    {id: 3, name: 'Asher'},
    {id: 4, name: 'Chloe'},
    {id: 1, name: 'Chloe'}
];

// 비교값 > 0 : a가 b보다 작은 숫자의 인덱스를 가짐
// 배열의 작은 인덱스라는 뜻은 배열에서 앞부분에 위치하는 것을 의미
numArr1.sort(function(a, b) {return a - b;})
// 비교값 < 0 : b가 a보다 작은 숫자의 인덱스를 가짐 / 아까와 반대로 b가 a보다 앞에 위치
numArr2.sort(function(a, b) {return b - a;})
// 비교값 = 0 : a와 b의 위치를 변경하지 않습니다.
objArr.sort(function(a, b) {
    if (a.name > b.name) return 1;
    else if (b.name > a.name) return -1;
    return 0;
});