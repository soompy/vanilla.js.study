(function () {

    // 원시타입과 참조 타입 차이 -- 1회차 마지막 부분
/*
    // 1. 원시타입
    var str1 = "hello world";
    var str2 = str1;
    console.log(str2);

    str1 = "nice to meet you";
    console.log(str1);
    console.log(str2); // str2 값은 변화가 없다.
*/


/*
    // 2. 참조타입
    var obj1 = { name: "soomin" };
    var obj2 = obj1;

    console.log(obj2.name);
    
    obj1.name = "lee";
    console.log(obj1);
    console.log(obj2);
*/








    // 조건문
/*    
    var a = 20;
    var b = 40;
    var c = 60;
*/

    // if 문
/*
    if (a < b) { // 조건이 참일 경우에만 반응한다.
        console.log("a는 b보다 작다.");
    }
*/ 


    // if ~ else 문
/*
    if (a > b) {
        console.log("a는 b보다 크다.");
    } else {
        console.log("a는 b보다 작다.");
    }
*/


    // else if 문
/*
    if (a > b) {
        console.log("a는 b보다 크다.");
    } else if (b > c) {
        console.log("b는 c보다 크다.");
    } else if (a < c) {
        console.log("a는 c보다 작다.");
    } else if (b < c) {
        console.log("b는 c보다 작다.");
    } else {
        console.log("모든 조건을 만족하지 않는다.");
    }
    // 복수의 참이 나올 경우 맨 위의 참 값만 출력된다
 */


    // 중첩 if문 - 탄탄한 논리구조를 구현 할 때 사용
/*    
    if( a !== b ){
        if( a > b ) {
            console.log("a가 크다.");
        } else {
            console.log("b가 크다.");
        }
    } else {
        console.log("a는 b와 같다.");
    }
*/    









    // 삼항 연산자
/*
    var age = 15;

    if(age >= 18) {
        console.log("You are an adult!");
    } else {
        console.log("You are a kid");
    }


    var result = (age >= 18)
                    ? console.log("You are an adult!") 
                    : console.log("You are a kid");
    // ?가 if문 :가 else문   
    // 삼항연산자에서는 복수의 코드를 넣을 수 없다.(중첩 if문 불가능)      
*/








    // 전역변수와 지역변수
/*
    var gv = "전역변수";

    function func() {
        gv = "test"; // var 키워드를 사용하지 않는다면 전역변수가 된다!!
        // var lv = "지역변수";
        console.log(gv);
        // console.log(lv);
    }

    func();
    console.log(gv);
    // console.log(lv);
*/


/*
    var gv = "전역변수";

    if (true) {
        var lv = "지역변수??????";
        // console.log(gv);
        // console.log(lv);
    }

    // 전역과 지역 변수의 구분은 "함수"기준이다.(중괄호 기준이 아님)
    console.log(gv);
    console.log(lv);
*/








    // 스코프
    // 전역변수
    /*
    var gv = "전역 변수";
    function func() {
        console.log(gv);
    } func();
    */


    // 지역변수
    /*
    function func() {
        var lv = "지역 스코프";
        console.log(lv);
    }
    func();
    console.log(lv);
    */


    // 함수는 서로의 스코프에 접근할 수 없다.
    /*
    function funcOne() {
        var func1 = "Func One 안에 있는 변수";
    }
    function test() {
        funcOne();
        console.log(func1);
    }
    test();
    */






    // 스코프 체인
    /*
    var a = 10;

    function func1() {
        var b = 20;

        function func2() {
            var c = 30;
            console.log(a + b + c);
        }

        func2();
    }

    func1();
    */





    // 렉시컬 스코프
    /*
    var name = 'inkwon';

    function func1() {
        console.log(name);
    }
    function func2() {
        name = 'jun';
        func1();
    }
    func2();
    */


    /*
    var name = 'inkwon';
    function func1() {
        console.log(name);
    }
    function func2() {
        var name = 'jun';
        func1();
    }
    func2();
     */






    // 변수 호이스팅
/*
    undefined가 기본적으로 할당 됨.    
    var a;
    a = "test";
    console.log(a);
*/    
/*
    console.log(b);
    var b = "hello";
    console.log(b);
*/ 




    // 함수 호이스팅
    /*
    func();
    function func() {
        console.log("Func!");
    }
    */

/*
    console.log(funcVar);
    funcVar();
    var funcVar = function() {
        console.log("Func Var!!");
    };
*/    








    // Math 객체
    /*
    // 절대값을 반환
    var num_abs = Math.abs(-3);
    console.log(num_abs);

    // 정수로 올림
    var num_ceil = Math.ceil(0.3);
    console.log(num_ceil);

    // 정수로 내림
    var num_floor = Math.floor(10.9);
    console.log(num_floor);

    // 랜덤한 숫자를 추출
    var num_random = Math.random();
    console.log(num_random);
    */





    // 문자로 작성된 숫자를 숫자 데이터 타입으로 변환하는 법
/*   
    var str1 = "20.6";
    var num1 = parseInt(str1);
    console.log(num1);
    console.log(typeof num1);


    var str2 = "20.1";
    var num2 = parseFloat(str2);
    console.log(num2);
    console.log(typeof num2);









    // 반복문
    // while 문
    /*
    var num = 0;
    while (num < 10) {
        console.log(num);
        num++;
    }
    */


    // do ~ while 문
    /*
    var i = 12;
    do {
        console.log(i + " ");
        i++;
    } while (i < 10);
    */



    // for 문
 /* 
    for (var i = 0; i < 10; i++) {

        if(i === 5){
            // break;
            continue;
        }

        console.log(i);

    }
 */  



    // 객체에 적용할 수 있는 반복문
 /* 
    var student = {
        name : "inkweon",
        country : "Korea",
        age : 31,
        skills : ["JavaScript", "HTML", "CSS"],
        sum : function(num1, num2) {
            return num1 + num2;
        }
    };

    // for ~ in 문
    for (var key in student) { // 객체 안의 value에 접근할 때엔 for ~ in을 사용한다.
        // 문자열 접근시 
        // student.
        // student[""]  // for ~ in에서는 [] 접근법만 사용한다.
        console.log(key);
        // console.log(student[prop]);
    }
 */  





    // 배열에 적용할 수 있는 반복문
/*    
    var array = ['Apple', 'Banana', 'Tomato', 'Melon'];

    // 멜론 = array[3];
    // 데이터의 개수 (array.length) : 4;

    for (var i = 0; i < array.length; i++) {

        // array[index]
        console.log(array[i]);
    }

    array.forEach(function (element) {
        console.log(element);
    });
 */  


















    /*
    var hexValue = document.getElementById('hex-value');
    var btn = document.getElementById('btn');

    btn.addEventListener('click', createHex);

    function createHex() {

    }
    */






    // 완성본 코드
    /*
    var hexValue = document.getElementById('hex-value');
    var btn = document.getElementById('btn');

    btn.addEventListener('click', createHex);

    function createHex() {
        var hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        var hexColor = '#';

        for(var i = 0; i < 6; i++) {
            var random = Math.floor(Math.random() * hexValues.length);
            hexColor += hexValues[random];
        }

        document.body.style.backgroundColor = hexColor;
        hexValue.textContent = hexColor;
    }
    */

})();