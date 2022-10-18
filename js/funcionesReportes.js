function getStatus(){
    $.ajax({
        url:"http://192.9.149.131:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            pintarStatus(respuesta);
        }
    });

}

function pintarStatus(json_room){
    let myTable="<table>";
        myTable+="<tr>";
        myTable+="<td>"+json_room.completed+"</td>";
        myTable+="<td>"+json_room.cancelled+"</td>";
        myTable+="</tr>";
    
    myTable+="</table>";
    $("#resultado1").html(myTable);

}

function getFechas(){
    $.ajax({
        url:"http://192.9.149.131:8080/api/Reservation/report-dates/{dateOne}/{dateTwo}",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            pintarFechas(respuesta);
        }
    });
}

function getClientes(){
    $.ajax({
        url:"http://192.9.149.131:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            pintarClientes(respuesta);
        }
    });

}