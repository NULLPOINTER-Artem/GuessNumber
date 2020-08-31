const NUMBER = generateRandomNumber(0, 100);
const ATTEMPT = 5;

let assumedNumber = 0;

let guessed = false;

for (let i = 1; i <= ATTEMPT; i++) {
    assumedNumber = prompt('Ваше предполагаемое число?');

    assumedNumber = validateInput(assumedNumber);

    if (assumedNumber != -1) {
        if (assumedNumber === NUMBER) {
            alert(`Верно! загаданное число: ${NUMBER}!`);
            guessed = true;
            break;
        } else {
            alert(`Осталось попыток ${countAttempts(i)}\nвведенное число ${checkDirectionToHiddenNumber()} от загаданного`);
        }
    } else {
        alert('Не верно введены данные!');
        break;
    }
}

// Проверка "assumedNumber != -1" была добавленна для того чтобы 
// при не корректности введенных данных было логическое завершение
if (!guessed && assumedNumber != -1) {
    alert(`Вы не отгадали загаданное число ${NUMBER}\nПовезет в следующий раз!`);
}

/**
 * Считает количество попыток
 * 
 * @param {number} i номер шага отгадывания
 * @returns количество оставшихся попыток
 */
function countAttempts(i) {
    return ATTEMPT - i;
}

/**
 * Определяет больше или меньше введенное число от загаданного
 * 
 * @returns строку после выполнения соответствующего логического условия больше/меньше
 */
function checkDirectionToHiddenNumber() {
    return assumedNumber < NUMBER ? 'меньше' : 
             assumedNumber > NUMBER ? 'больше' : 'равно';
}

/**
 * Валидирует введенную строку на число
 * 
 * @param {string} number введенная строка
 * @returns Возвращает преобразованную строку в число
 */
function validateInput(number) {
    if (isNaN(number)) {
        return -1;
    } else if (number == null) {
        return -1;
    }

    return +number;
}

/**
 * Генерирует случайное число от заданного min до max
 * 
 * @param {number} min минимальное случайное число
 * @param {number} max потолок случайных чисел
 * @returns Случайное число
 */
function generateRandomNumber(min, max) {
    let temp = min;
    min = checkOnMinimum(min, max);
    max = checkOnMaximum(temp, max);
    // Проверка на коректность ввода минимального и максимального

    return Math.floor( Math.random() * (max - min + 1) + min );
}

/**
 * Проверка на корректность введенного максимума к соответствующему минимуму
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns Возвращаем реальный максимум
 */
function checkOnMaximum(min, max) {
    if (max < min) {
        max = min;
    }

    return max;
}

/**
 * Проверка на корректность введенного минимума к соответствующему максимуму
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns Возвращаем реальный минимум
 */
function checkOnMinimum(min, max) {
    if (min > max) {
        min = max;
    }

    return min;
}