//화살표 함수는 기존의 함수보다 표현만 간략한 것이 아니라 내부 동작 또한 간략화 되어있다.

//1.화살표 함수는 this 바인딩을 하지 않는다.

const theater ={
    store : '건대점',
    titles : ['어벤져스', '겨울왕국', '스파이더맨', '라이온킹', '알라딘'],
    showMovieList(){
        //일반함수를  가리킨다.
        this.titiles.forEach(function(title){
            console.log(this);
            console.log(`${this.store}:${title} `);
        });  

        this.titles.forEach((title) => {
            console.log(`${this.store}:${title} `);
        }
        );
    }
}

theater.showMovieList();

const arrowFunc = function(){};
// new arrowFunc();
console.log(arrowFunc.hasOwnProperty('prototype')); //false

class Animal{
    constructor()
}

class Tigber extends Animal{
    move(lostWeight){
        setTimeout(function(){
            super.move(lostWeight);
        }, 1000);
    }
}   

let tiger = new Tiger("백두산 호랑이",90);
tiger.move(1);

//4.화살표 함수는 arguments 가지지 않는다.
(function(){
    console.log(arguments);

    const arrowFunc = () => 
        console.log(arguments);
        arrowFunc(3,4);
    
})(1,2); //즉시 실행 함수
