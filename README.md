elFinder-minified
=================

Minified version of the [elFinder](https://github.com/Studio-42/elFinder) (Open-source file manager for web) with build script
Минифицированная версия файлового менеджера [elFinder](https://github.com/Studio-42/elFinder)  
____

####Зачем это все?
Затем, чтобы получить возможность просто поместить «блок» в сборщик для последующей склейки с остальными стилями и скриптами веб-приложения, не заботясь о том, где находятся изображения, для облегчения встраивания elFinder в веб-проекты. 

Для этого был написан grunt-скрипт сборки из дистрибутива elFinder.
Скрипт соединяет стили elFinder в один, оптимизирует изображения для уменьшения веса и встраивает их в получившийся файл стиля в виде base64-строк. Затем минифицирует файл стиля, собирает файл скрипта и языковой файл в один javascript файл, минифицирует его. Удаляет временную папку.

Той же процедуре подвергся и jquery-ui.

####Результат:
1. Вес модуля уменьшился более, чем в два раза, а если подключить gzip компрессию, то и во все четыре)))
2. Для подключения достаточно указать два файла: css и javascript
3. Легкий способ поддержания актуальных версий менеджера, достаточно обновить или клонировать git-репозиторий elFinder в папке distr, и запустить сборку.
4. Объективно боле быстрая загрузка

__**Примечание**__

В «научных целях» была проведена работа руками для достижения экстремальной компресиии изображений. Все изображения получили индексную палитру (на самом деле этот пункт немного лишний, так как в результате получилась «пиксельность» по краям. Решу это позже, так как нужно более поработать вручную, чтобы добиться такого конечного размера картинки. ) и были несколько раз пропущены через imgo и ImageOptim. Вышло так, что со включенным gzip и очищенным кэшем (считай, грузит, как в первый раз) вся страница весит 197.4 KB против 1,7 мегабайта что было ранее без минификации, склейки и т.д. Клёво получилось, да? И соответственно запросов к серверу меньше.

#### Установка скрипта сборки
Для запуска необходимы nodejs и npm. В консоли переходим в папку сборки и запускаем установку зависимостей:  
<code>npm install</code>  
после чего клонируем репозиторий и запускаем сборку:  
<code>grunt build</code>
##ВАЖНО!
elFinder'у требуется jquery-ui, так как практически весь интерфей построен на нем. Как я делаю, собираю проект, и полученные два файла подключаю в сборщик приложения, где ранее УЖЕ подключены два файла jquery-ui, полученные таким же образом, что и файлы elFinder. Вес страницы, приведенный выше включает в себя и jquery-ui с полным комплектом виджетов.

####Что дальше?
А дальше возможно сделаю генерацию библиотеки для  Codeigniter. 

	
