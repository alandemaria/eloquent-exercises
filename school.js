function range(start, end, step) {
	var array = [];
	var size = end - start;
	var aux = start;
	if (size > 0) {
		while (aux <= end) {
			array.push(aux);
			step ? aux = aux + step : aux++;
		}
	} else { if (size = 0) {
				return array;
			} else {
				while (aux >= end) {
					array.push(aux);
					step ? aux = aux + step : aux--;
				}
			}
	}
	return array;
}

function sum(array) {
	var soma = 0;
	for (var i in array) {
		soma = array[i] + soma;
	}
	return soma;
}

function reverseArray(array) {
	var arrayaux = [],
		indice = array.length - 1;
	while (indice !== -1) {
		arrayaux.push(array[indice]);
		indice--;
	}	
	return arrayaux;
}

function reverseArrayInPlace(array) {
	var firstAux;
	var lastAux;
	var position = array.length - 1;
	for (var i = 0; i <= position; i++) {
		lastAux = array[i];
		array[i] = array[position]
		array[position] = lastAux;
		position--;
	} 
}

function arrayToList(array) {	

	var objAux = {};
	var listSize = array.length;
	var bool = true;
	
	while (bool) {	
		if (listSize !== 1) {
			objAux.value = array[0];
			array.shift();
			objAux.rest = arrayToList(array);
			bool = false;
		} else {	
			objAux.value = array[0];
			objAux.rest = null;
			bool = false;
		}
	}
	
	return objAux;
}

function prepend(element, list) {
	var listAux = {};
	listAux.value = element;
	listAux.rest = list;
	
	return listAux;
}

function returnObjectRest(obj) {
	return obj.rest;
}

function listToArray(list) {
	var arrayAux = [];
	var bool = true;
	arrayAux.push(list.value);
	currentObject = list;
	
	while (bool) {
		currentObject = returnObjectRest(currentObject);
		currentObject === null ? bool = false : arrayAux.push(currentObject.value);
	}
	
	return arrayAux;
}

function nth(position, list) { 
	var listAux = list;
	var index = 0;
	if (position === 0) {
		return listAux;
	} else {
		while (index < position) {
			index++;
			listAux = returnObjectRest(listAux);
		}
	}
	return listAux;
}



function makeItFlat(array) {
	var arrayAux = [];
	function flatten(ary) {
		ary.reduce(function(last,current){
			if (Array.isArray(current)) {
				return flatten(current); 
			} else {
				return arrayAux.push(current)
				}	
		},0);	
	}
	flatten(array);
	return arrayAux;
}

var classe = (function(){
	var listOfStudents = [];
	
	return {	
		getTurma: function() {
			for (var i in listOfStudents) {
				console.log("Student name:" + listOfStudents[i].name + " - ID: " + listOfStudents[i].id + "\n");
			}
		},
		
		getStudent: function(id) {
			stdInfo = searchArray(listOfStudents, id);
			console.log("Student ID :" + stdInfo.object.id + " - Grade: " + stdInfo.object.grade); 
			return stdInfo;		
		},
		
		setStudent: function(name, id, grade) {
			newStudent = new Student(name, id, grade);
			listOfStudents.push(newStudent);
			console.log("Student with ID:" + id + " added to the list");
		},
		
		deleteStudent: function(id) {
			studentArrayInfo = searchArray(listOfStudents, id);
			removeElementFromArray(listOfStudents, studentArrayInfo.position);
			console.log("Student with ID: " + id + " removed");
		},
		
		averageGrade: function() {
			var gradeAux = 0;
			var counter = 0;
			
			for (var i in listOfStudents) {
				gradeAux = gradeAux + listOfStudents[i].grade;
				counter++;
			}
			gradeAux = gradeAux / counter;
			
			return gradeAux;
		}
	};
})();

//Construtor da classe
function Student(name, id, grade) {
	this.name = name;
	this.id = id;
	this.grade = grade;
	return this;
}

Student.prototype.newGrade = function(nota) {
	this.grade = (this.grade + nota) / 2;
}

//Busca propriedade de um objeto do array
function searchArray(array, objProperty) {
	for (var i in array) {
		if (array[i].id === objProperty) {
			return {position: i, object: array[i]};
		} else {
			return null;
		}
	}
}

//Remove um elemento de um array
function removeElementFromArray(array, elementPos) {
	array.splice(elementPos,1);
}
