# Домашние задания для Летней Школы 2022 (мат-мех СПбГУ)


|                    Оглавление                    |
| ------------------------------------------------ |
| [Верстка сайта на основе существующего](#task-1) |
| [Браузерная игра](#task-2)                       |
| [QPICK через React](#task-3)                     |



* ## Верстка сайта на основе существующего <a name="task-1"></a>
    [Оригинал сайта KaTeX](https://katex.org/)
    
    Сделанное задание: [Копия из папки task-1](https://astatochek.github.io/task-1/)
    
    ### Комментарии:

    JS отсутствует, так что `textarea` в начале страницы не работает, потому что нужно было бы подключать динамическое преобразование в tex, а это слишком запарно.

    В ссылках текст не отцентрован, потому что у меня не получилось его отцентровать :(

* ## Браузерная игра <a name="task-2"></a>
    Сделанное задание: [Крестики нолики](https://astatochek.github.io/task-2/)

    ### Комментарии:

    Компьютер делает ходы с некоторой логикой: она прописана для первого и вторых ходов, но дальше он либо выиграет, либо помешает выиграть игроку, либо поставит нолик в случайную пустую ячейку.

    Картинки все (крестик, нолик и их полупрозрачные версии) закинуты на imgur, потому что из папки они у меня почему-то не читались.

    На мобильном устройстве страница выглядит довольно прилично, но кнопки после нажатия сохраняют состояние `hover`. Почему - не знаю, но исправлять не было особенного желания.

* ## QPICK через React <a name="task-3"></a>
    Сделанное задание **(не работает ссылка)**: [QPICK через React](https://astatochek.github.io/task-3/build/)

    ### Комментарии:

    * На сайте слева сверху и в футере "QPICK" это кнопка, она ведет на главную страницу (типа страницу), а иконка корзины сверху справа ведет в раздел корзины, так и только так между ними следует переключаться.
    * Если страницу перезагрузить, то корзина обнулится. Это можно исправить через localstorage или просто подкрутив базу данных, но в задании требований таких не было, так что было принято решение не заморачиваться по этому поводу.
    * CSS в некоторых местах хромает (слишком большие числа начнут вылезать за границы блоков, кнопки "+" и "-" иногда изменяют свое расположение относительно самого знака "+" или "-") и вообще страница адекватно отображается только на экране монитора (моего) и точно не отображается нормально на телефонах.
    * Из всего многообразия хуков в React тут используются только `useState`, `useEffect` и `useContext`, потому что ~~другими я пользоваться не умею~~ в других, на мое усмотрение, проект не нуждался
    * Функционал покажу на видео (без звука)

https://user-images.githubusercontent.com/71458498/179726899-39221ba4-e210-4d55-b447-c444d5dc0171.mp4


    


