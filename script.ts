const printButton=document.createElement(`button`);
printButton.textContent=`Print Resume`;
document.body.appendChild(printButton);
printButton.addEventListener<`click`>,()=>{
    window.print();
}