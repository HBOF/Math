var r1,r2,r_tmp;
var _arr=[];
function gcd(a,b){
	_arr[0]=a;_arr[1]=b;
	_arr=_arr.sort(function(a,b){return a-b;});
	console.log(_arr);
	r1=_arr[0];r2=_arr[1];
	r_tmp=0;
	while(r2!=0){
		r_tmp=r1%r2;
		r1=r2;r2=r_tmp;
    }
	console.log("r is "+r1);		
}
