// Создать функцию, которая выведет в консоль номер этажа и номер подъезда по номеру квартиры.
// Этажей у нас 9, квартир на этаже по 3

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 2;

let porch = 0;
let floor = 0;

function searchFloor(room) {
  porchCount = room / roomsOnFloor / floors;
  porch = porchCount + 1 - (porchCount % 1);
  floor = console.log(`Porch #${porch}, floor #${floor}`);
}

searchFloor(roomNumber);

console.log(153 % 27);
