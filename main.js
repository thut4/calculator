function add(){ 
    var x=Number(document.getElementById('num1').value);
    var y=Number(document.getElementById('num2').value);
    document.getElementById('result').value = x+y;
    return false;
}
function sub(){ 
    var x=Number(document.getElementById('num1').value);
    var y=Number(document.getElementById('num2').value);
    document.getElementById('result').value = x-y;
    return false;
}
function mul(){ 
    var x=Number(document.getElementById('num1').value);
    var y=Number(document.getElementById('num2').value);
    document.getElementById('result').value = x*y;
    return false;
}
function div(){ 
    var x=Number(document.getElementById('num1').value);
    var y=Number(document.getElementById('num2').value);
    document.getElementById('result').value = x/y;
    return false;
}
function sqrt(){ 
    var x=Number(document.getElementById('num1').value);
    var y=Number(document.getElementById('num2').value);
    document.getElementById('result').value = Math.sqrt(x);
    return false;
}
function reset(){
    document.getElementById('reset').reset();
}