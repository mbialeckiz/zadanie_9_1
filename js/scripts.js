// plik scripts.js 

var a, h;

function getTriangleArea(a, h) {
	if (a,h > 0) {
		// wykonanie funkcji
		return (a*h/2);
	} else {
		console.log('Nieprawidłowe dane');
		alert('Nieprawidłowe dane');
	}
}

console.log( getTriangleArea(10,6) )

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(100, 1);
var triangle2Area = getTriangleArea(3, 4);
