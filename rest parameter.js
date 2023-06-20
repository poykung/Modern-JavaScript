/* rest parameter
rest parameter คือ parameter ของ function ซึ่งสามารถรับค่า argument ได้หลายค่าและไม่จำกัดจำนวน
rest parameter จะมีรูปแบบการใช้งานตรงข้ามกับ spread operator คือ เป็น parameter ที่รับค่าหลายๆค่าเข้ามา แล้วรวบรวมข้อมูลทั้งหมดเก็บไว้ใน array
*/

function plusNumber(...numberz){
    result = 0;
    for(number of numberz) result+=number
    return result;
}

console.log(plusNumber(10,30,50));