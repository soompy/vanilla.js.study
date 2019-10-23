(function () {

    var api = "poulkUxAbhMmJPCpgjSDdt10fRGR72Pl";
    var cityStr;
    var nytElem = document.getElementById("nytimes-articles");
    var form = document.getElementById("form-container");

    form.addEventListener("submit", function(e){
        e.preventDefault();
        cityStr = document.getElementById("city").value;

        var nytimesUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${cityStr}&sort=newest&api-key=${api}`;

        fetch(nytimesUrl).then(function(res) {
            return res.json()
        })
        .then(data => {
            var result = data.response.docs;
            result.forEach(function(item){
                nytElem.insertAdjacentHTML('beforeend', `
                    <li class="article">
                        <a href="${item.web_url}">${item.headline.main}</a>
                        <p>${item.snippet}</p>
                    </li>
                `)
            });
        })
        .catch(function(e){
            console.error(e);
        });


        document.getElementById("city").value = "";
    })







    /*
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => console.log(data));
    */



    // NY API : https://developer.nytimes.com/
    /*
    var api = "poulkUxAbhMmJPCpgjSDdt10fRGR72Pl";

    var cityStr;
    var nytElem = document.getElementById("nytimes-articles");


    var form = document.getElementById("form-container");
    form.addEventListener("submit", function (e) {

        e.preventDefault();
        cityStr = document.getElementById("city").value;
        var nytimesUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${cityStr}&sort=newest&api-key=${api}`;

        fetch(nytimesUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data.response.docs);
                var data = data.response.docs;
                data.forEach(function (item) {
                    nytElem.insertAdjacentHTML('beforeend', `
                        <li class="article">
                            <a href="${item.web_url}">${item.headline.main}</a>
                            <p>${item.snippet}</p>
                        </li>
                        
                    `);
                })
            })
            .catch(err => console.error(err));


        document.getElementById("city").value = "";

    });
    */



})();