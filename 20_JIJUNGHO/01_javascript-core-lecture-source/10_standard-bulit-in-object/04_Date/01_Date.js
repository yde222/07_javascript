// date-property

// 1. new Date() : 현재 날짜와 시간을 가지는 Date 객체 반환
console.log(new Date());

// 2. new Date(milliseconds) : 1970년 1월 1일 00:00:00(UTC)를 기점으로 인수로 전달 된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체 반환
console.log(new Date(0)); // 1970-01-01T00:00:00.000Z
console.log(new Date(24 * 60 * 60 * 1000)); // 1970-01-02T00:00:00.000Z

// 3. new Date(dateString) : 날짜와 시간을 나타내는 문자열을 인수로 전달하면 지정 된 날짜와 시간을 나타내는 Date객체 반환
console.log(new Date("Jul 26, 2022 09:00:00")); // 2022-07-26T00:00:00.000Z
console.log(new Date("2022/07/26/09:00:00")); // 2022-07-26T00:00:00.000Z

// 4. new Date(year, month[, day, hour, minute, second, millisecond])
// : 연, 월, 일, 시, 분, 초, 밀리초를 의미하는 숫자를 인수로 전달하면 지정 된 날짜와 시간을 나타내는 Date 객체 반환
// 연, 월은 반드시 지정해야 하며 지정하지 않은 정보는 0 또는 1로 초기화 된다
// month(0~11)에 주의한다
console.log(new Date(2022, 1)); // 2022-01-31T15:00:00.000Z
console.log(new Date(2022, 1, 1, 9, 0, 0, 0)); // 2022-02-01T00:00:00.000Z
