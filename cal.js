function change(){
    var i=document.getElementById('rag').value;
    document.getElementById('inp').innerHTML=i+'%';
}
function comp(){
    var a=document.getElementById('am').value;
    var b=document.getElementById('rag').value;
    var c=document.getElementById('list').value;
    inter=(a*b*c)/100
    year=2020+parseInt(c);
    if(a>0 && b>0 && c>=1){
        document.getElementById('details').innerHTML='If you deposit <mark>'+a+'</mark>,<br>at an interest rate of <mark>'+b+'%</mark>.<br>You will receive an amount of <mark>'+inter+'</mark>,<br>in the year <mark>'+year+'</mark>';
    }else{
        window.alert('Please input the right data :)')
    }
    
}