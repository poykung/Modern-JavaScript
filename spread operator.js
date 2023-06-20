// Spread Operator ใน funtion ฟังก์ชั่นสามารถรับ argument ได้หลายค่า แต่หากไม่ทราบ argument ที่แน่นอนให้กำหนด parameter โดยใส่ Spread Operator นำหน้า parameter ...


/* ต่อค่าที่อยู่ภายใน array โดยใช้ spread operator */
const number = [1,2,5,7,8,9,12,99,55,3];
let newsNumber = [77,88,55,...number] //spread operator

console.log(newsNumber);