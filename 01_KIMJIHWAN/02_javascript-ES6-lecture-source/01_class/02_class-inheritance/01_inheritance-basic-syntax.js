// 상속 기본문법
class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eat(foodWeight){
        this.weight += foodWeight;
        console.log(
            `${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`
        );
    };
}

class Human extends Animal {
    develop(language) {
        console.log(
            `${this.name}(은)는 ${language}로 개발을 합니다. 정말 즐겁습니다~~~`
        );
    }
}

class Human extends Animal {
    develop(language) {
        console.log(
            `${this.name}(은)는 ${language}로 개발을 합니다. 정말 즐겁습니다~~~`
        );
    }
}

let human = new Human("수강생", 70);
human.eat(1);
human.develop("JavaScript");