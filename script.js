
let content={
    'background-color':'yellow',
    render:function(){
        let p_content=document.getElementById('eu').innerHTML;
        const cevaCS=document.getElementById('menu');

        // console.log(p_content);
        
        // console.log(content['background-color']);

        if(p_content=='Home'){
            document.getElementById('eu').innerHTML='Marius Herlea HomePage. Willkommen !';

            // backgroundColor = background-color
            
            cevaCS.style.backgroundColor=this["background-color"];
            document.getElementById('eu').style.backgroundColor='blue';

        } else if(p_content=='CV'){

            document.getElementById('eu').innerHTML='Während ich arbeite, ist der Lebenslauf veraltet :)';

            cevaCS.style.backgroundColor="cyan";
            document.getElementById('eu').style.backgroundColor='green';
        
        } else {

        }
    
    },

}


let menuPrint={
    button:3,

    //special key names

    print: function(){
        var ul=document.getElementById('menu');
        var li=document.createElement('button');
        li.appendChild(document.createTextNode('Home'))
        ul.appendChild(li);
    }
    
}

window.addEventListener('load',myInit, true);

function myInit(){
    content.render();
    menuPrint.print();
}

// myInit();