---
tags: [retrogaming]
---
# Xbox 360: Flash

## Informations
Ce tutoriel permet de flasher un disque dur non officiel afin qu'il soit reconnu par une Xbox non hackée (comme un disque dur normal).

Une liste des références de disques durs compatibles est présente sur ce lien: [http://digiex.net/guides-reviews/console-guides/xbox-360-guides/3152-hack-250gb-320gb-500gb-sata-harddrive-work-xbox-360-xbox-360-slim.html](http://digiex.net/guides-reviews/console-guides/xbox-360-guides/3152-hack-250gb-320gb-500gb-sata-harddrive-work-xbox-360-xbox-360-slim.html)

## Matériel nécessaire
* Disque dur 2.5" compatible
* Clef USB formattée en FAT32
* Fichier HDDSS.BIN correspondant à la capacité souhaitée: [hddss_bin.zip (19Ko)](/notes/files/games/xbox360_flash_hdd/hddss_bin.zip)
* Logiciel HDDHackR: [HddHackr_v1.40.rar (100Ko)](/notes/files/games/xbox360_flash_hdd/HddHackr_v1.40.rar)
* Logiciel HP USB Disk Storage Format Tool: [hp_usb_disk_storage_format_tool.rar (1.7Mo)](/notes/files/games/xbox360_flash_hdd/hp_usb_disk_storage_format_tool.rar)
* Un port SATA de libre sur le PC

## Flash du disque dur
* Décompresser l'archive de HP USB Disk dans un dossier quelconque
* A la racine du disque dur à flasher, créer un dossier "boot"
* Y placer le contenu de HPUSBFW_BOOTFILES.zip
* Installer HPUSBFormatter.exe contenu dans HPUSBFormatter.rar
* Lancer HP USB Disk Storage Format Tool
  * Device: clef usb en question
  * File System: FAT32
  * Volume label: DOS
  * Format options: cocher Create a DOS startup disk et saisir C:\boot
  * START
* A la racine de la chef USB, mettre le contenu de l'archive HDDHackR
* Y placer le fichier HDDSS.BIN correspondant avec ce nom
* Brancher le disque dur en sata sur le PC
* Booter sur la clef USB
* Taper "hddhackr"
* Vérifier que le disque dur est présent, taper son numéro
* Taper F pour faire un flash
* Taper le nom du fichier "HDDSS.BIN"
* Taper le nom du fichier de backup "UNDO.BIN"
  * Conserver ce fichier pour le remettre d'usine
* Taper Y pour confirmer le flashage
* Taper Y pour créer les 3 partitions (si demandé)
* Une fois terminé, attendre 10sec et rebooter sur la clef
* Relancer hddhackr et vérifier que le disque dur apparait sous le nom HITACHI
* Tout éteindre, brancher le disque dur sur la console
* Si demandé, le formatter et saisir le numéro de série de la console
