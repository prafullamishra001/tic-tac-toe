let currentplayer="X"
let array=Array(9).fill(null)



function handleclick(el){
    const id=Number(el.id);
    array[id]=currentplayer
    el.innerText=currentplayer;
    currentplayer = currentplayer === "X"  ? "O":"X"
    console.log(array)
}