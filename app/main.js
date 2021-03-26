
fetch('https://www.feriadosapp.com/api/holidays-2019.json') .then(res => res.json())
.then(res => {
let caja = document.getElementById("holidays"); 
res.data.forEach(function(user, index) {
let item=
`<li><span>${user.date}</span></li>`;
     caja.innerHTML += item;
   });
});

















//* PRUEBAS BASURA*/

/**window.addEventListener('load', () => {
   get();
    
    
    
});*/

/**let url = "https://www.feriadosapp.com/api/holidays-2019.json";
$.get(url, function(respuesta) {
    console.log(respuesta)
    respuesta.forEach(function(item) {
        console.log(item)
    })*/
    /** let feriado = respuesta[respuesta.length -1 ]
    $("#feriado").html(feriado.data + "-" + feriado.id)
}, "json") 

/** window.onload = function () {
    fetch('https://www.feriadosapp.com/api/holidays-2019.json')
    .then(res => res.json())
    .then(res => {
        users = data;
        sortData(data);
        renderData(data);
    })
}*/
    


    /**fetch('https://www.feriadosapp.com/api/holidays-2019.json')
     
    .then(res => res.json()) 
      .then(data => {

        users = data;
        sortData(data);
        renderData(data)
    });

    function sortData(data){
        data.sort((a, b) => a.first_name.localeCompare(b.first_name))
      }
  
      function renderData(data){
        let userPrev = "";
        let groupTit = "";}*/
    /** window.onload = function () {
     * fetch('https://www.feriadosapp.com/api/holidays-2019.json')
        const respuesta = () => {}
    console.log(respuesta)};*/




/** 
    window.onload = function(){
    
        ;
        let caja = document.getElementById("usuarios");
        let users = [];
    
        fetch('https://www.feriadosapp.com/api/holidays-2019.json')
          .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
          .then(data => {
    
            users = data;
            sortData(data);
            renderData(data); })
    
          
       
        let searchInput = document.querySelector("#search");
        
        searchInput.addEventListener('keyup', (event) => {
          filter(searchInput.value, users);
        });
    
        function sortData(data){
          data.sort((a, b) => a.first_name.localeCompare(b.first_name))
        }
    
        function renderData(data){
          let userPrev = "";
          let groupTit = "";
    
          data.forEach(function(user, index) {         
            if(userPrev == "" || user.first_name.charAt(0).localeCompare(userPrev.charAt(0)) == 1){            
              groupTit = `<h2 data-aos="fade-up">${user.first_name.charAt(0)}</h2>`;   
            }else{
              groupTit = "";
            }
            let item = groupTit + `<li class="usuario" data-aos="fade-up">
                          <img src="https://loremflickr.com/200/200?random=${index}" alt="foto de ${user.first_name}">
                          <div>
                            <h3 class="name">${user.first_name} ${user.last_name}</h3>
                            <p>${user.email}</p>
                          </div>
                        </li>`;
            
            caja.innerHTML += item;
            userPrev = user.first_name;
          });
        }
    
    
        
    };
    */
    
    

