    function tabuada(){
        var n1 = document.getElementById('n1');
        var article = document.getElementById('artc');
        var n = Number(n1.value)
        var tabuada = '';
       
        if(n == 0){
            alert('Insira um numero!')
        }else {
            for(var c = 1; c <=10; c++){ //c recebe um, se c for menor ou igual a 10, c++ 
                var resultado = n*c
                article.innerText += `${n} x ${c} = ${resultado} || `
                console.log(resultado) 
                
              //'<p>'+ tabuada += n+'x' + c + '=' + n*c;   
            }
           
        }

    }   

    