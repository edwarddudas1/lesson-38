//HM 1
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';
for (let i = 0; i< friends.length; i++) {
    string += friends[i];
    if (i !== friends.length -1) {
        string += ', '
    }
}
console.log(string)
let joinString = friends.join(', ');
console.log(joinString);




const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];

const cardToRemove = 'Карточка-3';
console.log(cardToRemove);
const splice = cards.splice(2, 1, cardToRemove);
console.log(splice);

const cardToInsert = 'Карточка-6';
const pushMeth = cards.push(cardToInsert);
console.log(pushMeth);
console.log(cardToInsert);
