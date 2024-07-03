// เริ่มเขียนโค้ดตรงนี้ 
function multiplicationTable(n) {
   let result ='';
   for(let i = 1; i <= n; i++) {
    let row ='';
    for (let j = 1 ; j <= n ; j++) {
        row += (i * j).toString().padStart(4, ' ');
    }
    result += row.trim()+ '\n'
   }
   return result.trim();
}

console.log(multiplicationTable(5))