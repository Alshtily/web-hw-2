

let MovieOpject = [

    {"id":1,"name":"Artemis Fowl","ImgeSrc":"./img/1.jpg","Rating":7.4,"Year":2009,"videoURL":"fl2r3Fwxz_o"},
  
    {"id":2,"name":"Onword","ImgeSrc":"./img/2.jpg","Rating":4.2,"Year":2018,"videoURL":"gn5QmllRCn4"},
  
    {"id":3,"name":"Toy Story","ImgeSrc":"./img/3.jpg","Rating":7.8,"Year":2020,"videoURL":"wmiIUN-7qhE"},

    {"id":4,"name":"Peter Rabbit","ImgeSrc":"./img/4.jpg","Rating":7.8,"Year":2018,"videoURL":"7Pa_Weidt08"},

  ];
  







let dop = document.getElementsByClassName("ahref")

let list = document.getElementById("list")


for(i in MovieOpject) {
    let opject = MovieOpject[i]

    list.innerHTML = list.innerHTML + `  
    <figure class="figure">
        <a id="button" href="#" indexarray=${i} class="ahref" >
            <img src="${opject.ImgeSrc}" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
        </a>
    </figure>`
}
        
        
        
      
        
    

// SET Cokis Data 
            
for (let i = 0; i < dop.length;i++){

    dop[i].addEventListener("click", (a) => {
        seseF(i)
    })
    console.log(i)

}



function seseF(i){

    console.log(i)
    document.cookie = `index=${i}`
    window.open("./scond.html")

}

