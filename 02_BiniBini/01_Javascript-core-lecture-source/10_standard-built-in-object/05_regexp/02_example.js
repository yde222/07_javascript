// 📘 정규 표현식 실전 예제 모음

// 1️⃣ http:// 또는 https:// 로 시작하는지 검사
const url = 'https://www.google.com';
// const url = 'http://www.google.com';
// const url = 'www.google.com';

console.log(/^https?:\/\//.test(url)); 
// ^ → 문자열 시작
// https? → s가 있어도 되고 없어도 됨
// :\/\/ → 콜론 + 슬래시 두 개 (이스케이프 필요)
// 결과: true (https://로 시작하니까)

// ───────────────────────────────

// 2️⃣ 파일 확장자가 .js로 끝나는지 검사
const fileName = 'test.css';
// const fileName = 'test.js';

console.log(/js$/.test(fileName)); 
// js$ → 문자열 끝이 'js'인지 확인
// 결과: false (.css니까)

// ───────────────────────────────

// 3️⃣ 숫자로만 이루어진 문자열인지 검사
const target = '12345';
// const target = '123a45';

console.log(/^\d+$/.test(target)); 
// ^ → 시작, \d+ → 숫자 1개 이상, $ → 끝
// 즉, 전체가 숫자여야 함
// 결과: true

// ───────────────────────────────

// 4️⃣ 아이디 유효성 검사 (영문+숫자, 6~12자)
const id = 'hello123';
// const id = 'a';
// const id = 'hello!123';

console.log(/^[A-Za-z\d]{6,12}$/.test(id)); 
// [A-Za-z\d] → 영문 대소문자 + 숫자
// {6,12} → 6~12자
// 결과: true

// ───────────────────────────────

// 5️⃣ 휴대폰 번호 형식 검사 (010-xxxx-xxxx)
const phone = '010-1234-5678';
// const phone = '010-123-4567';
// const phone = '01012345678';

console.log(/^\d{3}-\d{3,4}-\d{4}$/.test(phone)); 
// \d{3} → 3자리 숫자
// - → 하이픈
// \d{3,4} → 3자리 또는 4자리
// \d{4} → 4자리
// 결과: true

// ───────────────────────────────

// 6️⃣ 특수문자 포함 여부 검사
const target2 = 'hello#world';
// const target2 = 'helloworld';

console.log(/[^A-Za-z\d가-힣ㄱ-ㅎㅏ-ㅣ]/.test(target2)); 
// [^...] → 안에 없는 문자 포함 시 true
// A~Z, a~z, 숫자, 한글 제외한 문자 → 특수문자
// 결과: true ('#' 있음)
