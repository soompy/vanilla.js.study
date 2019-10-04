(function() {


    // 실습 코드
   
    var message_form = document.getElementById('message-form');
    message_form.addEventListener('submit', function(e) {

        e.preventDefault();
        var message = document.getElementById('message').value;
        
        if(message === "") {
            var feedback = document.querySelector('.feedback');
            feedback.classList.add('show');

            setTimeout(function(){
                feedback.classList.remove("show");
            }, 2000);

        } else {
            document.querySelector(".message-content").textContent = message;
            message_form.reset();
        }
    });
   










    // 완성본 코드
    /*
    var message_form = document.getElementById('message-form');

    message_form.addEventListener('submit', function(e) {

        e.preventDefault();

        var message = document.getElementById('message').value;

        if(message === "") {

            var feedback = document.querySelector('.feedback');

            feedback.classList.add('show');
            setTimeout(function() {
                feedback.classList.remove('show');
            }, 2000)

        } else {

            document.querySelector('.message-content').textContent = message;
            message_form.reset();

        }

    })
    */

})();