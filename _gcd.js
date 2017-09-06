function gcd(a,b) {
	// body...
	var tmp;
	tmp=a%b;
	if(tmp===0)
	{
		console.log(b);
		return _fin(b);
	}
	else
	{
		return gcd(b,tmp); 		
	}
	
}

function _fin(tmp){
	alert("Result is "+tmp);
}
