OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Очисти",
    "Infected" : "Заражени",
    "Unchecked" : "Непроверени",
    "Scanner exit status" : "Излазни статус скенера",
    "Scanner output" : "Излаз скенера",
    "Saving…" : "Снимам…",
    "Antivirus" : "Антивирус",
    "File {file} is infected with {virus}" : "Фајл {file} заражен вирусом {virus}",
    "The file has been removed" : "Фајл је уклоњен",
    "File containing {virus} detected" : "Детектован фајл који садржи вирус {virus}",
    "Antivirus detected a virus" : "Антивирус детектовао вирус",
    "Virus %s is detected in the file. Upload cannot be completed." : "Вирус %s детектован у фајлу. Отпремање не може да се заврши.",
    "Saved" : "Сачувано",
    "Antivirus for files" : "Антивирус за фајлове",
    "An antivirus app for Nextcloud based on ClamAV" : "Антивирусна апликација за Некстклауд базирана на ClamAV антивирусу",
    "Antivirus for files is an antivirus app for Nextcloud based on ClamAV.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Антивирус за фајлове је антивирусна апликација за Некстклауд базирана на ClamAV-у.\n\n* 🕵️‍♂️ Када корисник отпреми фајл, он се провери\n* ☢️ Отпремљени и инфицирани фајлови ће бити обрисани, а биће приказано обавештење и/или ће бити послата е-пошта\n* 🔎 Позадински посао који скенира све фајлове\n\nОва апликација испитује фајлове који се отпреме на Некстклауд да ли имају вируса, и то пре него што ће они бити уписани у складиште. Ако се фајл препозна као вирус, то се или бележи или се не отпрема на сервер. Апликација се ослања на ClamAV антивирус, на који га усмерава администратор када подешава апликацију.\nДа би ова апликација била ефективна, ClamAV дефиниције вируса треба да буду ажурне. Такође треба да знате да ће укључивање ове апликације утицати на перформансе система пошто је потребно додатно процесирање за свако отпремање. Више информација је доступно у документацији Антивируса.",
    "Greetings {user}," : "Поштовање {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Нажалост, у фајлу који сте пробали да отпремите је примећен малвер и фајл је избрисан.",
    "This email is a notification from {host}. Please, do not reply." : "Овај мејл је обавештење са сајта {host}. Молимо не одговарајте.",
    "File uploaded: {file}" : "Отпремљени фајл: {file}",
    "Antivirus for Files" : "Антивирус за Фајлове",
    "Mode" : "Режим",
    "Socket" : "Socket",
    "Not required in Executable Mode." : "Не захтева се у режиму извршавања.",
    "Host" : "Домаћин",
    "Address of Antivirus Host." : "Адреса домаћина антивируса.",
    "Port" : "Порт",
    "Port number of Antivirus Host." : "Број порта домаћина антивируса",
    "Stream Length" : "Дужина тока",
    "ClamAV StreamMaxLength value in bytes." : "ClamAV StreamMaxLength вредност у бајтовима.",
    "bytes" : "бајтова",
    "Path to clamscan" : "Путања до clamscan-а",
    "Path to clamscan executable." : "Путања до clamscan извршног фајла.",
    "Not required in Daemon Mode." : "Не захтева се у режиму сервиса",
    "Extra command line options (comma-separated)" : "Додатне опције командне линије (одвојене зарезом)",
    "File size limit, -1 means no limit" : "Ограничење величине фајла, -1 значи без ограничења",
    "Background scan file size limit in bytes, -1 means no limit" : "Ограничење величине фајла за скенирање у позадини, у бајтовима, -1 значи без ограничења",
    "When infected files are found during a background scan" : "Када се нађу инфицирани фајлови за време скенирања у позадини",
    "Only log" : "Само дневник",
    "Delete file" : "Обриши фајл",
    "Save" : "Сачувај",
    "Advanced" : "Напредно",
    "Rules" : "Правила",
    "Clear All" : "Очисти све",
    "Reset to defaults" : "Ресетуј на подразумевано",
    "Match by" : "Поклапа се са",
    "Scanner exit status or signature to search" : "Излазни статус скенера или потпис за претрагу",
    "Description" : "Опис",
    "Mark as" : "Означи као",
    "Add a rule" : "Додај правило",
    "Executable" : "Извршавање",
    "Daemon" : "Сервис",
    "Daemon (Socket)" : "Сервис (socket)",
    "Clamav Socket." : "Clamav Socket."
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
