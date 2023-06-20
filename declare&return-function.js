function plusNumber(x,y){ //สร้าง function และ parameter เพื่อใช้ในการรับค่าที่ส่งเข้ามาทำงานใน function
    let plus = x+y; //statement ประกาศตัวแปรสำหรับคำนวณค่าที่ส่งผ่านมายัง parameter
    return plus; //return ค่าที่ได้จากการทำงานใน function ออกไป
}

const result = plusNumber(10,20); //สร้างตัวแปรเพื่อเรียกใช้งาน function และผ่านค่า argument เข้าไปทำงานยัง function
console.log(result); //console.log ค่าที่ function return กลับออกมาที่เก็บภายในตัวแปร result