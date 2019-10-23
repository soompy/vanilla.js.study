(function() {




    // TagName, Id, ClassName
  /* 
    var header = document.getElementsByTagName("header");
    var serviceSection = document.getElementById("services");
    var serviceSectionContainer = document.getElementsByClassName("container");

    // console.log(header);
    console.log(Array.from(header)); // 유샤배열 형태를 완전한 배열로 바꾸겠다는 의미
    console.log(serviceSection);
    console.log(serviceSectionContainer);
 */  







    // querySelector(), querySelectorAll()
/* 
    var header = document.querySelector("header");
    var serviceSection = document.querySelector("#services");
    var serviceSectionContainer = document.querySelector(".container");

    console.log(header);
    console.log(serviceSection);
    console.log(serviceSectionContainer);


    // var serviceSectionContainerOne = document.querySelector("#services .container");
    // var serviceSectionContainerTwo = document.querySelectorAll(".container");

    // console.log(serviceSectionContainerOne);
    // console.log(serviceSectionContainerTwo[2]);
    console.log(Array.from(serviceSectionContainerTwo)); // 배열형태 선언
*/





    // querySelectorAll() 응용
/*
    var serviceSectionContainer = document.querySelectorAll(".container");
    for(let i = 0; i < serviceSectionContainer.length; i++){
        console.log(serviceSectionContainer[i]);
    }
*/






    // innerHTML, outerHTML
    // html 특정 영역에 내용을 삽입하거나 제거할 때 사용하는 프로퍼티이다.
/*
    var header = document.querySelector(".masthead");

    console.log(header.innerHTML);
    console.log(header.outerHTML);

    console.log(typeof header.innerHTML);
    console.log(typeof header.outerHTML);
*/





    // textContent
/*   
    // var introHeading = document.querySelector(".intro-heading ");
    // console.log(introHeading.textContent);
    // introHeading.textContent = "Hello World";


    var introHeading = document.querySelector(".intro-heading ");
    introHeading.textContent = "<em>Hello</em> World";
    introHeading.innerHTML = "<em>Hello</em> World";
*/






    // innerText
/*
    // var introHeading = document.querySelector(".intro-heading ");
    // console.log(introHeading.innerText);


    var introHeading = document.querySelector(".intro-heading ");
    console.log(introHeading.innerText);
    console.log(introHeading.textContent);
*/
     








    // createElement()
/*  
    var h3Test = document.createElement("h3");

    // 태그 안에 콘텐츠 작성
    h3Test.textContent = "Hello World";
    console.log(h3Test);
*/







    // appendChild()
  
    /*
    var h3Test = document.createElement("h3");
    h3Test.textContent = "Hello World";

    var introText = document.querySelector(".intro-text");
    introText.appendChild(h3Test);
    */


    // appendChild() 주의점
    /*
    var introLeadIn = document.querySelector(".intro-lead-in");
    var introHeading = document.querySelector(".intro-heading");
    var introBtn = document.querySelector(".intro-text .btn");
    
    var h3Txt = document.createElement("h3");
    h3Txt.textContent = "?!?!?!";
    
    introLeadIn.appendChild(h3Txt);
    introHeading.appendChild(h3Txt);
    introBtn.appendChild(h3Txt);
    */

    







    // insertAdjacentHTML

/*
    var introHeading = document.querySelector(".intro-heading");
    var txt = '<h2>Skydiving is fun!</h2>';

    introHeading.insertAdjacentHTML('afterbegin', txt);
*/
    








    // 콘텐츠를 제거하는 메서드
    
/*
    // removeChild()
    var introText = document.querySelector(".intro-text");
    var introHeading = document.querySelector(".intro-heading");

    // introText.removeChild(introHeading); // removeChild는 부모가 필요하다
    // introText.parentElement.removeChild(introText);

    // remove()
    introText.remove();
*/
    






    // firstElementChild
/*

        var introText = document.querySelector(".intro-text");
        console.log(introText.firstElementChild);

*/







/*
    스타일 적용 방법

    var introHeading = document.querySelector(".intro-heading");

    // introHeading.style.color = 'red';
    // introHeading.style.backgroundColor = 'pink';
    // introHeading.style.fontSize = "30px";

    // introHeading.style.cssText = "color: red; background-color: pink; font-size: 25px;"

    introHeading.setAttribute("style", "color: red; background-color: pink; font-size: 20px;")
*/








    // Class 접근 방법
   
/*
        // className
        // var introHeading = document.querySelector(".intro-heading");
        // var introheadingclass = introHeading.className;
        // const arrayOfClasses = introheadingclass.split(' ');

        // console.log(introheadingclass);
        // console.log(arrayOfClasses);



        // var introHeading = document.querySelector(".intro-heading");
        // introHeading.className = "test";





        // classList
        // var introHeading = document.querySelector(".intro-heading");
        // var introheadingclass = introHeading.classList;
        
        // console.log(introheadingclass);
        // console.log(introheadingclass[0]);






        // add(), remove(), toggle(), contains()
        var introHeading = document.querySelector(".intro-heading");
        var introheadingclass = introHeading.classList;
        //
        // introheadingclass.add("test");                               // 클래스 추가
        // introheadingclass.remove("text-uppercase");                  // 클래스 삭제
        // introheadingclass.toggle("abc");                             // 클래스 추가, 삭제
        // console.log(introheadingclass.contains("intro-heading"));    // 클래스 확인
*/

   









    // Event


            // addEventListener
        // var introHeading = document.querySelector(".intro-heading");
        
        // introHeading.addEventListener('click', function () {
        //     console.log('Click!!!');
        // });




            // removeEventListener
        // var introHeading = document.querySelector(".intro-heading");
        
        // function clickFunc() { console.log('Click'); }
        
        // introHeading.addEventListener('click', clickFunc);
        // introHeading.removeEventListener('click', clickFunc);




        // var introHeading = document.querySelector(".intro-heading");
        // introHeading.addEventListener('click', function clickFunc() {
        //     console.log('Click');
        // });
        
        // introHeading.removeEventListener('click', function clickFunc() {
        //     console.log('Click');
        // });


            // 원시타입과 참조타입의 차이점
        // var a = "s";
        // var b = "s";

        // var c = { name: "s" };
        // var d = { name: "s" };

        // console.log(a === b);  // true
        // console.log(c === d);  // false 서로 다른 주소로 인식하기 때문에





        // preventDefault()
        // var links = document.querySelectorAll('.navbar-collapse a');
        // var serviceBtn = links[0];
        
        // serviceBtn.addEventListener("click", function(e) {
        //     // console.log(e.target);
        //     e.preventDefault();
        //     console.log("Hello World");
        // });











})();