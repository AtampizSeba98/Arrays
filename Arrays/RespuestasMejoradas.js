var lenguajes = ['python', 'javascript', 'smaltalk', 'php'];
//Rta1
      
    for (i=0; i<lenguajes.length;i++)//listo todos los eelementos
    {
       document.write(lenguajes[i]+ ' ');
    }

//Rta 2 
//elimino al principio el elemento
    lenguajes.shift();
    console.log(lenguajes);

//Rta3
    lenguajes.pop();//elimino el elemento al final
    console.log(lenguajes);


//Rta4
   
    lenguajes.unshift('c#'); 
    console.log(lenguajes);
   
//Rta5

   lenguajes.push('sql'); 
   console.log(lenguajes);
//Rta6
    for(var i =0; i< lenguajes.length; i++){
        if(i > 1){
            break;
        }
        console.log(lenguajes[i]);
    }

//Rta7
var copia=[];
   
   copia = lenguajes.splice(2);
   console.log(copia);


//Rta8
    lenguajes.indexOf('javascript');  
 
 
 //9 no se puede mostrar la pos ya que no se encuentra el valor.
 //Rta9
    lenguajes.indexOf('c++');

//Rta10
    lenguajes.splice(2,1,'Vuejs','React');
    
//Rta11
var lengtes= lenguajes;
var pytest='';
 document.write(lengtes + pytest);
