module.exports = function multiply(first, second) {
  // your solution
 /* let res;
  res = ((+first) * (+second)).toFixed(0);
  return String(res);*/
  let res =[];
 let r = first.length;
 let l = second.length;
 for (let i = 0; i < r+l; i++) {
 	res[i] = 0;
 }
 let one = [], two = [];
 one = first.split('');
 two = second.split('');
 one = one.reverse();
 two = two.reverse();
 let carry = 0;
 for (var i = 0; i < l; i++) {
 	carry = 0;
 	for (var j = 0; j < r; j++) {
 		res[i+j] = res[i+j] + (carry + (+one[j]) * (+two[i]));
 		carry =  Math.floor(res[i+j] / 10);
 		res[i+j] =res[i+j]%10;
 	}
 	//res[i+l] = res[i+l] + carry; 
 }
 res[i+l] = res[i+l] + carry; 
 res = res.reverse().join('')
 if (res[0] === 'N') {
	res = res.slice(3);
 }
 if (res[0] === '0') {
	res = res.slice(1);
 }
 return res;
}
