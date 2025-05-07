class Student {
    constructor(name, height) {
    this.name = name;
    this.height = height;
    }
    // 클래스 선언부 안에 위치하고 앞에 static이라는 키워드를 붙인다.
    static compare(studentA, studentB) {
    return studentA.height - studentB.height; // 인스턴스끼리 비교해주는 메서드
    }
    }
    let students = [
    new Student('유관순', 165.5),
    new Student('홍길동', 180.5),
    new Student('선덕여왕', 159.5)
    ];

    // static 메서드 호출
    students.sort(Student.compare); // 신장 오름차순으로 배열을 정렬한다.
    console.log(students);
  
    Student.staticMethod = function () {
    console.log('staticMethod는 메서드를 프로퍼티 형태로 직접 할당하는 것과 동일하다.');
    }
    Student.staticMethod();