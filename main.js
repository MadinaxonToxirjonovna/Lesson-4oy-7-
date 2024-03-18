let fruits = ["Olma", "Banan", "Gilos", "Shaftoli"]
console.log(fruits);
let long = fruits.length
alert("Boshlanishida Arrayning uzunligi: " + long);
let result = confirm ("Sizning arrayingizdan malumotlarni olib tashlamoqchimiz")
if (result) {
    fruits.pop(1);
    let uzunlik = fruits.length;
    alert("Array uzunligi: " + uzunlik)
    console.log(fruits);
} else {
    let uzunlik = fruits.length;
    console.log(fruits);
}