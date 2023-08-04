
let menu={
    button:3,

    //special key names
    'background-color':'yellow',


    render:function(){
        let p_content=document.getElementById('eu').innerHTML;
        console.log(p_content);
        console.log(menu);
        
        console.log(menu['background-color']);

        if(p_content=='Home'){
            document.getElementById('eu').innerHTML='Willkommen';

            //backgroundColor = background-color
        const cevaCS=document.getElementById('cevaCSS');
        cevaCS.style.backgroundColor=this["background-color"];
        document.getElementById('eu').style.backgroundColor='blue';

        } else if(p_content=='CV'){
            document.getElementById('eu').innerHTML='CVC';
        } else {

        }
    
    }
}