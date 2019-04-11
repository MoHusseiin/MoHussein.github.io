window.onload = function () {
    document.getElementById("clickMe").onclick = function () {
        let strArr = document.getElementById("strObj").value.split(' ');
        filterArray(strArr);
    }

    document.getElementById("clickEx2").onclick = function () {
        document.getElementById("resultEx2").value = bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]).join(', ');
    }

    document.getElementById("teach").onclick = function () {
        document.getElementById("resultEx3").value = Teacher.teach("WAP");
    }

    document.getElementById("teach2").onclick = function () {
        document.getElementById("resultEx4").value = teacher.teach("WAA");
    }

    document.getElementById("professorGreeting").onclick = function () {
        document.getElementById("resultEx5").value = Professor.greeting();
    }
    document.getElementById("professorSalutation").onclick = function () {
        document.getElementById("resultEx6").value = Professor.salute();
    }
    document.getElementById("studentGreeting").onclick = function () {
        document.getElementById("resultEx7").value = Student.greeting();
    }
    document.getElementById("studentSalutation").onclick = function () {
        document.getElementById("resultEx8").value = Student.salute();
    }


    document.getElementById("professorGreeting2").onclick = function () {
        document.getElementById("resultEx9").value = _Professor.greeting();
    }
    document.getElementById("professorSalutation2").onclick = function () {
        document.getElementById("resultEx10").value = _Professor.salute();
    }
    document.getElementById("studentGreeting2").onclick = function () {
        document.getElementById("resultEx11").value = _Student.greeting();
    }
    document.getElementById("studentSalutation2").onclick = function () {
        document.getElementById("resultEx12").value = _Student.salute();
    }
}

// Exercise 3
function Person(name) {
    this.name = name;
}
Person.prototype.teach = function (subject) {
    return this.name + " is now teaching "+subject;
}
var Teacher = new Person("Tina");


const person = {
    name: 'Default',
    teach: function(subject) {
        return this.name + " is now teaching "+subject;
    }
}
const teacher = Object.create(person);
teacher.name = 'Tina';

// Exercise 4
const PERSON = {
    name: 'Default',
    age: 0,
    greeting: function() {
        return "Greetings, my name is "+this.name+" and I am "+this.age+" years old.";
    },
    salute: function () {
        return "Good morning!, and in case I don't see you, good afternoon, good evening and good night!";
    }
}

const Student = Object.create(PERSON);
Student.name = 'Mohamed';
Student.age = 25;
Student.major = 'Master CS';
Student.greeting = function () {
    console.log("Hey, my name is "+Student.name+ " and I am studying "+Student.major);
    return "Hey, my name is "+Student.name+ " and I am studying "+Student.major+".";
}

var Professor = Object.create(PERSON);
Professor.name = "Tina";
Professor.age = 23;
Professor.department = 'CS';
Professor.greeting = function () {
    console.log("Good day, my name is "+Professor.name+" and I am in the "+Professor.department+" department");
    return "Good day, my name is "+Professor.name+" and I am in the "+Professor.department+" department.";
}

///////////////////////////////////////////////

function _PERSON(name, age) {
    this.name = name;
    this.age = age;
    this.salute = function () {
        return "Good morning!, and in case I don't see you, good afternoon, good evening and good night!";
    }
}
_PERSON.prototype.greeting = function () {
    return "Greetings, my name is "+this.name+" and I am "+this.age+" years old.";
}

var _Professor = new _PERSON("Tina", 23);
_Professor.department = 'CS';
_Professor.greeting = function () {
    console.log("Good day, my name is "+_Professor.name+" and I am in the "+_Professor.department+" department");
    return "Good day, my name is "+this.name+" and I am in the "+this.department+" department.";
}

var _Student = new _PERSON("Shika", 25);
_Student.major = 'Master CS';
_Student.greeting = function () {
    console.log("Hey, my name is "+_Student.name+ " and I am studying "+_Student.major);
    return "Hey, my name is "+_Student.name+ " and I am studying "+_Student.major+".";
}


// Exercise 1
function filterArray(strArr) {
    let str = strArr.filter(word => word != "not");
    document.getElementById("resultEx1").value = str.join(' ');
}

// Exercise 2
function bubble_Sort(a){
    let swapp;
    let n = a.length-1;
    let x = a;
    do {
        swapp = false;
        for (let i = 0; i < n; i++){
            if (x[i] > x[i+1]) {
                var temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
}