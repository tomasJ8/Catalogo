
var item = `<div class="card col-md-3" style="width: 18rem;">
                      <img class="card-img-top" src="..." alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Cantidad: <span class="cantidad"></span></p>
                        <p class="card-text">Precio: <span class="precio"></span></p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>`;

    var itemtabla =`<tr class="item-car"><td><img>Imagen</td>
                    <td class="nombre">Nombre</td>
                    <td class=""><span class="cantida">Cantidad</span></td>
                    <td class="">Precio</td>
                    <td>Acciones
                    </td>
                    <td class="">Subtotal</td></tr>`;

        var productos = [
          {
            img : 'imagen/1.jfif',
            nombre : 'Mochila',
            precio : 100.00,
            cantidad : 2,
            carrito: false,
            cantidadCarrito:0
          },
          {
            img : 'imagen/2.jfif',
            nombre : 'Libreta',
            precio : 10.00,
            cantidad : 2,
            carrito: false,
            cantidadCarrito:0
          },
          {
            img : 'imagen/3.jfif',
            nombre : 'Lapicero',
            precio : 2.00,
            cantidad : 2,
            carrito: false,
            cantidadCarrito:0
          },
          {
            img : 'imagen/4.jfif',
            nombre : 'Lapiz',
            precio : 5.00,
            cantidad : 2,
            carrito: false,
            cantidadCarrito:0

          },
          {
            img : 'imagen/5.jpg',
            nombre : 'Carpeta',
            precio : 10.00,
            cantidad : 2,
            carrito: false,
            cantidadCarrito:0
          },
          {
            img : 'imagen/6.jfif',
            nombre : 'Plumones',
            precio : 15.00,
            cantidad : 2,
            carrito: false,
            cantidadCarrito:0
          },
          {
            img : 'imagen/7.jfif',
            nombre : 'Goma B',
            precio : 3,
            cantidad : 2,
            carrito: false,
            cantidadCarrito:0
          },
          {
            img : 'imagen/8.jfif',
            nombre : 'Grapadora',
            precio : 23.00,
            cantidad : 2,
            carrito: false,
            cantidadCarrito:0
          },
          {
            img : 'imagen/9.jpg',
            nombre : 'Juego G',
            precio : 23.00,
            cantidad : 2,
            carrito: false,
            cantidadCarrito:0
          },
          {
            img : 'imagen/0.jfif',
            nombre : 'Tijera',
            precio : 23.00,
            cantidad : 2,
            carrito: false,
            cantidadCarrito:0
          },
          {
            img : 'imagen/01.jpg',
            nombre : 'Pintura',
            precio : 12.00,
            cantidad : 2,
            carrito: false,
            cantidadCarrito:0
          },
          {
            img : 'imagen/02.jpeg',
            nombre : 'Cartulina',
            precio : 8.00,
            cantidad : 2,
            carrito: false,
            cantidadCarrito:0
          }
            ];

        for(i=0; i < productos.length; i++){
            $("#productos").append(item);
            card = $(".card").get(i);
            $(card).find(".card-img-top").attr("src", productos[i].img);
            $(card).find(".card-title").html(productos[i].nombre);
            $(card).find(".cantidad").html(productos[i].cantidad);
            $(card).find(".precio").html(productos[i].precio);
            $(card).find(".btn").attr("onClick", "agregar("+i+")").html("Agregar");
        }
//aqui va el codigo
function agregar(id){
  alert(productos[id].nombre);
  alert("Cantidad "+productos[id].cantidad);
   if(productos[id].cantidad >0)
   {
     if(productos[id].carrito==true)
     {
       productos[id].cantidadCarrito=productos[id].cantidadCarrito+1;
       productos[id].cantidad= productos[id].cantidad-1;
       subtotal=productos[id].cantidadCarrito*productos[id].precio;
                 $("#pro"+id).find(".cantida").html(productos[id].cantidadCarrito)
                 $("#pro"+id).find(".subtotal .subtotal").html(subtotal);
                 card = $(".card").get(id);
                  $(card).find(".cantidad").html(productos[id].cantidad) //Actualizar stock
                  calculartotal();
     }else {
       alert("Agregar al carrito");
      productos[id].cantidad= productos[id].cantidad-1;
      card = $(".card").get(id);
                $(card).find(".cantidad").html(productos[id].cantidad)
      //alert("candidada Disponible "+ productos[id].cantidad);

      productos[id].cantidadCarrito=productos[id].cantidadCarrito+1;
      //alert("cantidad en carrito "+productos[id].cantidadCarrito);

      subtotal=productos[id].cantidadCarrito*productos[id].precio;
        itemtabla+='<tr id="pro'+id+'" class="item-car"><td><img width="50" height="50" src="'+productos[id].img+'"></td>'
                  +'<td class="nombre">'+productos[id].nombre+'</td>'
                  +'<td class="cantidad"><span class="cantida">'+productos[id].cantidadCarrito+'</span></td>'
                  +'<td class="precio">'+productos[id].precio+'</td>'
                  +'<td>'
                     + '<button onclick="mas('+id+')"  class="btn btn-outline-danger">+</button>'
                      +'<button onclick="menos('+id+')"  class="btn btn-outline-dark">-</button>'
                  +'</td>'
                  +'<td class="subtotal"><span class="subtotal">'+subtotal+'</span></td></tr>'
                   $(".table").html(itemtabla);


                    calculartotal();

     }
   }
   else
   {
     alert("ya no hay "+ productos[id].nombre +" Disponible")
   }
productos[id].carrito=true;
 //alert("Carrito "+productos[id].carrito);
}

function calculartotal(){
   var subttotal=0;
   var iva=0;
   var total=0;

    $(".subtotal .subtotal").each(function(index){
      console.log(index+" : "+$( this ).text());
      var subt=parseInt($(this).text());

      subttotal=subttotal+subt;
    });
    iva=subttotal*0.16;
    total=subttotal+iva;
    $("#iva").html(iva);
  $("#total").html(total);
}


 function mas(id){
   if(productos[id].cantidad==0)
   {
     alert("ya no hay "+ productos[id].nombre +" Disponible");
   }else{
     productos[id].cantidadCarrito=productos[id].cantidadCarrito+1;
     productos[id].cantidad= productos[id].cantidad-1;
     subtotal=productos[id].cantidadCarrito*productos[id].precio;
               $("#pro"+id).find(".cantida").html(productos[id].cantidadCarrito)
               $("#pro"+id).find(".subtotal .subtotal").html(subtotal)

               card = $(".card").get(id);
                $(card).find(".cantidad").html(productos[id].cantidad) //Actualizar stock

                calculartotal();
   }
 }
 function menos(id){
   if(productos[id].cantidadCarrito==0){
     $("#pro"+id).remove();
    calculartotal();
   }else {
     productos[id].cantidad= productos[id].cantidad+1;
     subtotal=productos[id].cantidadCarrito*productos[id].precio;
               $("#pro"+id).find(".cantida").html(productos[id].cantidadCarrito)
               $("#pro"+id).find(".subtotal .subtotal").html(subtotal)

               card = $(".card").get(id);
                $(card).find(".cantidad").html(productos[id].cantidad) //Actualizar stock
               productos[id].cantidadCarrito=productos[id].cantidadCarrito-1;

               calculartotal();
   }
 }
