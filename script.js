// const string="The revolution will not be televised.";
// let string2=`so they say ${string}`
// console.log(typeof null);
// let namea=prompt('What your name is?');
// alert (`Hello ${namea}`)
// alert( `hello ${1}` );

let menu={
    button:3,
    background_color:'black',
    render:function(){
        let p_content=document.getElementById('eu').innerHTML;
        console.log(p_content);
        console.log(menu);

        if(p_content=='Home'){
            document.getElementById('eu').innerHTML='Hallo';
    
        } else if(p_content=='CV'){
            document.getElementById('eu').innerHTML='CVC';
        } else {
            // document.write(`<p>I'm sorry, i miss the corect adress</p>`)
        }
    
    }
}



// let dbsq=dblSgl.replace('blue','green')
// console.log(dbsq)

// const myString = "123";
// const myNum = Number(myString);
// console.log(typeof myNum);

// const myNum2 = 123;
// const myString2 = myNum2.toString();
// console.log(myString2.length);

// console.log(null === + "\n0\n")