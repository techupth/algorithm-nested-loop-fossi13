// เริ่มเขียนโค้ดตรงนี้ 
function printStar(n) {
    let result = "" ;
   for (let i = 1 ; i <= n ; i++) {
    for(let j = 1; j <= i ; j++) {
        result +=  '* ';
        
    }
        result = result.trim() + '\n';
}
        return result.trim()
   
}

console.log(printStar(5))