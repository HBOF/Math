function e_gcd(a,b){
	var r1=0,r2=0,r_tmp=0,s1=1,s2=0,s_tmp=0,t1=0,t2=1,t_tmp=0,q=1;
	var _arr=[];
	_arr[0]=a;_arr[1]=b;
	_arr=_arr.sort(function(a,b){return a-b;});
	r1=_arr[1],r2=_arr[0];
	console.log(_arr);
	while(r2!=0){
		q=Math.floor(r1/r2);
		console.log("q="+q+", "+"r1="+r1+", "+"r2="+r2+", "+"s1="+s1+", "+"s2="+s2+", "+"t1="+t1+", "+"t2="+t2);
		r_tmp=r1-(r2*q);
		r1=r2;r2=r_tmp;
		s_tmp=s1-(s2*q);
		s1=s2;s2=s_tmp;
		t_tmp=t1-(t2*q);
		t1=t2;t2=t_tmp;
    }
	console.log("gcd is "+r1+" s is "+s1+" t is "+t1);
}
