let inp= document.querySelector('input')
let btn= document.querySelectorAll('button')
for(let item of btn){
    item.addEventListener('click',(e)=>{
        let text = e.target.innerText
        if(text === 'Ac'){
            inp.value = ''
        }
       
        else if(text === '='){
            try{
            inp.value= eval(inp.value)
            }
            catch(e){
                inp.value='Invalid'
            }
        }
        
        else{
            inp.value += text
        }
    })
}