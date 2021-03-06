---

title: Запускать вовремя (о приложениях на Mac)

date: 2014-09-10

layout: post

---
Я использую один и тот же ноутбук и для работы, и для личных дел. Это удобно, но за соблюдением баланса «работа-жизнь»
приходится следить дополнительно. Я поступаю просто: уходя с работы, закрываю все приложения. Главное не забывать их
открывать следующим утром. Но этот процесс можно автоматизировать :-)
<excerpt/>
Особенно важно держать открытыми приложения, от которых зависит работа других членов команды. Например, с началом
рабочего дня должен быть запущен джаббер (или другой используемый мессенджер).

В AppGyver для общения всех со всеми
используют [Flowdock](https://www.flowdock.com). Вот мне и понадобилось гарантированно иметь его открытым с утра.

Оказалось, что на Mac запуск приложения в определенное время можно сделать штатными средствами — при помощи приложения
Calendar. Вот как:

###Создайте в Календаре новое событие

Я назвала своё «Run Flowdock». Время события не обязательно устанавливать с учетом того, чтобы компьютер был уже открыт.
Можно и удобно запускать всё заранее. У моего события стоит `9:35`.

### Сделайте событие повторяющимся

Событие должно повторяться каждую неделю по рабочим дням.

### Запускайте приложение

А теперь самое интересное. Приложение можно запускать как кастомное уведомление о событии.<br/><br/>
В выпадушке `alert` нужно выбрать самый последний пункт — `Custom`.<br/>
<img
class="article__image"
src="http://img-fotki.yandex.ru/get/4802/14441195.32/0_88921_7d53950e_L.png" width="300" height="500" border="0"
title="" alt=""/>

В появившемся диалоге вместо `Message` нужно выбрать `Open file`

<img
class="article__image"
src="http://img-fotki.yandex.ru/get/4813/14441195.32/0_88925_47986a79_M.png" width="300" height="167" border="0"
title="" alt=""/>
<img
class="article__image"
src="http://img-fotki.yandex.ru/get/5109/14441195.32/0_88924_ea39983e_M.png" width="300" height="162" border="0"
title="" alt=""/>

Под файлом здесь понимается приложение. По умолчанию это `Calendar`, но можно выбрать и другое.

<img
class="article__image"
src="http://img-fotki.yandex.ru/get/4810/14441195.32/0_88922_22d155c7_M.png" width="300" height="193" border="0"
title="" alt=""/>

Затем в диалоговом окне Finder выбрать нужное приложение из папки `Applications`. В моём случае это Flowdock.

<img
class="article__image"
src="http://img-fotki.yandex.ru/get/4809/14441195.32/0_88923_7597bf28_M.png" width="300" height="196" border="0"
title="" alt=""/>

Затем корректируем время. За 5 минут до 9:35 — как раз будет полдесятого. Напоминаю, это вовсе не означает, что к этому
времени нужно сидеть на работе с открытым ноутбуком. Можно ехать в автобусе или вообще спать. Приложение запустится
тогда, когда вы откроете крышку.

### Минусы
Не без минусов. Этот же календарь на iPhone в 9:30 пиликает уведомлением о событии. Файл на телефоне он открыть не
может, поэтому просто радостно сообщает, что вот оно событие наступает.
