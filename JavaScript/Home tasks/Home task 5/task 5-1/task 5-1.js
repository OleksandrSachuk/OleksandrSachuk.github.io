// создание объкта с указанием его свойств и значений
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var maxTask = 0; //объявление переменной - минимальное колличество выполненных задач
var name = ""; ////объявление переменной - пустое имя сотрудника

//цикл проверки свойств объекта
for (var key in tasksCompleted) {

    //проверка больше ли значение каждого свойства объекта от значения по умолчанию
    if (maxTask < tasksCompleted[key]) {

        //если выполняется условие, то переменной присваивается максимальное значение
        maxTask = tasksCompleted[key];

        //если выполняется условие, то переменной присваивается имя свойства объекта
        name = key;
    }
}

//вывод результатов в консоль
console.log(name);