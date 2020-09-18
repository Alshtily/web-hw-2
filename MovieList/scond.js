

function getCookie(name) {
    function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}


let ss = getCookie("index")

let BodyDiv = document.getElementById("body-div")

let MovieOpject = [

  {"id":1,"name":"Artemis Fowl","ImgeSrc":"./img/1.jpg","Rating":7.4,"Year":2009,"videoURL":"fl2r3Fwxz_o"},

  {"id":2,"name":"Onword","ImgeSrc":"./img/2.jpg","Rating":4.2,"Year":2018,"videoURL":"gn5QmllRCn4"},

  {"id":3,"name":"Toy Story","ImgeSrc":"./img/3.jpg","Rating":7.8,"Year":2020,"videoURL":"wmiIUN-7qhE"},
];



if (ss !== null){

  
let opject = MovieOpject[ss]


document.title = `${opject.name}`
  BodyDiv.innerHTML = `
<br>
<button class="sss" type="button"><a class="ss" href="./index.html">Back</a></button>
<br>
<br>
    <img src=${opject.ImgeSrc} alt="">

    <br>
    <br>
    <div class="rate">
      
      <h1 id="rate">Rate :  </h1>   
      <h1 id="rate"> <mark>  ${opject.Rating} </mark> </h1>
    </div>
    
    <div class="year">
      
      <h1 id="rate">Year of production : </h1>
      <h1 id="rate"> <mark>  2019 </mark> </h1>
<br>

<h1 id="rate"> <a href="https://www.youtube.com/watch?v=${opject.videoURL}">Click To See Trailer In YouTube</a> </h1>
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/${opject.videoURL}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
    </div>


`
 
} else {

}