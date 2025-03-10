document.getElementById('siteForm').addEventListener("submit", function(event){
    event.preventDefault();

    var formData =  new FormData(this);

    fetch("processa.php", {
    method: "POST",
    body: formData
    })
       .then(response=>response.text())
       .then(data=>{
       if (data.includes("sucesso")) {
       document.getElementById("sucesso_mensagem").style.display = "block";
       document.getElementById("erro_mensagem").style.display = "none";
       this.reset();
     
       }else{
       document.getElementById("erro_mensagem").style.display = "block";
       document.getElementById("sucesso_mensagem").style.display = "none";
       }
       })
       .catch(error =>{
       document.getElementById("erro_mensagem").style.display = "block";
       document.getElementById("sucesso_mensagem").style.display = "none";
       });
    });