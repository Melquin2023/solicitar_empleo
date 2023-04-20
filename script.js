function habilitarOtro(){
    let otro = document.getElementById("otro");
    let select = document.getElementById("select").value 
    if(select==="otro"){ 
        otro.removeAttribute("hidden", "")}
        else {
            otro.setAttribute("hidden", "")
        }
    }

    function cambioColor(){
        let genero = document.getElementById("genero").value
        let enviar = document.getElementById("enviar"); 
        if(genero==="masculino"){ 
            enviar.setAttribute("class", "azul")}
            else {
                enviar.setAttribute("class", "pink")
            }
        }


        function guardar(){
            let name = document.getElementById("name").value;
            let aspiracion= document.getElementById("aspiracion").value;
            let mail = document.getElementById("mail").value;
            let genero = document.getElementById("genero").value;
            let categoria = document.getElementById("categoria").value;

            let datos = [];
            $("#dataForm").submit(function(event) {
                event.preventDefault();
                datos.push({name,aspiracion,mail,genero,categoria});
                console.log ("Dato Añadido");
            });

            console.log(datos);
            }