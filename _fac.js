function _fac(a){
    if(a<=0) return 1;
    return a*_fac(a-1);
}

function _main(b){
    var num;
    num=b;
    num=_fac(num);
	console.log(num);
}
