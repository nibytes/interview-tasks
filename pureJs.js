/*
        Функция принимает два объекта с разными ключами некоторые из которых
        могут пересекаться. Необходимо вернуть первый объект с обновленными
        значениями из второго объекта(только те которые совпадают).

        Example: 
            obj1 = {
                foo: 'foo',
                bar: 'bar',
            }

            obj2 = {
                bar: 'foo',
                some: 'some'
            }

            result = {
                foo: 'foo',
                bar: 'foo'
            }

        Задача со звездочкой: второй параметр теперь не объект, а массив объектов.
        Так же необходимо обновить пересекающиеся ключи. Приоритет  = индекс элемента в массиве

*/

const margeSameKeysOfObjects = (obj1, obj2) => {

}

const margeSameKeysOfObjectsExpert = (obj1, arrayOfObjs) => {

}




/* 

        Функция принимает два параметра: 
            -массив с четырьмя значениями которые соответствуют количеству монет 
            определенного номинала
            const nominals = [.5, .25, .1, .05]
            - требуемая сума

        Функция должна вернуть true если сума монет больше или равна требуемой и 
        false если меньше.

        Example: 
            coinsCount = [0, 2, 5, 5]
            demandingSum = 1
            result = true

        Задача со звездочкой: теперь второй параметр сума сдачи которую вам необходимо
        дать. true если у вас это получится и false если нет.

*/ 

const itsEnoughForMyBeer = (coinsCount, beerCost) => {

}

const canGiveChange = (coinsCount, change) => {

}


/*

        Реализовать функцю которая принимает два параметра:
            - массив значений
            - колбэк по результату которого будут групироватся значения
        
        Функция должна возращать составной совокупный объект где ключи это
        названия групп, а значения сами групы

        Example:
            arr = [6.1, 4.2, 6.3]
            callbackFunction = Math.Floor
            result = { 
                    '4': [4.2],
                    '6': [6.1, 6.3] 
                }


*/


const groupBy = (arr, callbackFunction) => {

}


/*

        Вам предоставляется массив из десяти элементов, представляющий количество
        имеющихся у вас 0, 1, 2, ..., 9 в качестве первого параметра. 
        В качестве второго параметра вам предоставляется произвольный 
        массив чисел. Напишите функцию, которая возвращает истину, если вы можете построить 
        числа из второго массива, используя только те цифры, которые у вас есть.

        Example:
            canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92]) ➞ true

            У вас есть: одна 1, две 2, две 3, три 4, одна 8 и одна девятка
            Используя только эти цифры, вы можете построить 123, 444 и 92

            canBuild([10, 2, 3, 8, 5, 8, 5, 5, 3, 1], [11, 2, 22, 49, 444, 998, 87, 44]) ➞ false

            canBuild([1, 0, 4, 2, 0, 0, 4, 0, 0, 6], [23, 48, 225]) ➞ true


*/


const canBuild = (digits, nums) => {

}