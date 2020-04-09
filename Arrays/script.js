/*
1. Escrbí un programa que liste todo el contenido del array.

2. Remové **python** del array.

3. Remové **php** del array.

4. Agregá **“C#”** al inicio del array.

5. Agregá un lenguaje a su elección al final del array.

6. Escribí un programa que liste el contenido del array hasta **“javascript”**.

7. Escribí una sentencia que haga una copia del array que no incluya C# y python.

8. Escribí una sentencia que indique la posición que ocupa **“javascript”**.

9. Escribí una sentencia que indique la posición que ocupa **“C++”** y fundamente la respuesta.

10. Escribí un programa que elimine **“smaltalk”**, y agregá **“Vuejs”** y **“React”**

11. Crea una nueva variable llamada **lengtest** que contenga el array **“lenguajes”** y concatenar
 este  con la variable **“pytest”**.
 */

var lenguajes = ['python', 'java,script', 'smaltalk', 'php'];

 //1 Listo todos los elementos y los muestro en pantalla
 function Rta1 () {
      
      for (i=0; i<lenguajes.length;i++)
      {
         document.write(lenguajes[i]+ ' ');
      }
 }
 
 //2 remuevo el elemento y muestro en consola el resultado
 function Rta2()
 { var index = lenguajes.indexOf('python');

   if (index > -1) {
      lenguajes.splice(index, 1);
      alert('python elminado');
   }
   console.log( lenguajes );
 }

//3 remuevo el elemento y muestro en consola el resultado
function Rta3()
{
   var index = lenguajes.indexOf('php');

   if (index > -1) {
      lenguajes.splice(index, 1);
      alert('php eliminado');
   }
   console.log( lenguajes );
}



 //4 Agrego en la posicion 0, un lenguaje
 function Rta4()
   {
    lenguajes.unshift('c#'); 
    console.log(lenguajes);
   }
 

//5 agrego al final del array, un elemento
function Rta5()
{
   lenguajes.push('sql'); 
   console.log(lenguajes);
}
 
 //6 imprimo el array hata java script
 function Rta6()
 {
   var pos = lenguajes.indexOf('java,script');
   var pos1= pos +1;//incluyo java script .no sabia si lo tenia que incluir o no
   for (i=0; i<pos1;i++)
   {
     
       document.write(lenguajes[i]+' ');
   }

      
}
 
/*
7. Escribí una sentencia que haga una copia del array que no 
incluya C# y python.
*/
function Rta7(){
   //var lenguajes = ['python', 'java,script', 'smaltalk', 'php']; 
   var copia=[];
   
   copia = lenguajes.splice(1,3);//c# no esta en el array original
   console.log(copia);


   
  
}


//8  sentencia que busca un elemento y devuelva el valor seria esta
function Rta8(){ 
   var pos = lenguajes.indexOf('java,script');
   console.log ('la posicion de java script es '+pos);
     
   
}

//9 no se puede mostrar la pos ya que no se encuentra el valor.
function Rta9(){ 

   var pos = lenguajes.indexOf('c++');
   if (pos==-1){
      alert('El elemento c++ no se encuentra en la Lista. pueda que no exista o este mal escrito');
      alert('por consola le mostraremos los elementos del array: ' + lenguajes);}
   else{console.log (pos+'c++');}
   
  
   
}
//10 elimino smaltak y agrego otro elemento : vuej react
function Rta10()
 {
    
    var pos1 = lenguajes.indexOf('smaltalk');
    lenguajes.splice(pos1, 1);
    lenguajes.push('Vuejs','React'); 
    console.log( lenguajes );
   
 }
//11 lengtes es igual a la array y concateno pytes

function Rta11()
{
var lengtes= lenguajes;
var pytest='';
 document.write(lengtes + pytest);
}
 //PARA ejecutar las funciones borre las lineas '//' 
 //ejecute una instruccion por vez!
 //Rta1();
 //Rta2();
 //Rta3();
 //Rta4();
// Rta5();
 //Rta6();
 //Rta7();
 //Rta8();
 //Rta9();
 //Rta10();
 //Rta11();
