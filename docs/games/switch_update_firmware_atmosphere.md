---
tags: [hack]
---
# Switch: Update firmware & Atmosphere

## Informations
Ce tutoriel permet de mettre à jour l'OS d'une Switch tournant sous Atmosphere.

## Mise à jour de l'OS
* Télécharger le firmware officiel à cette adresse: [https://darthsternie.net/switch-firmwares/](https://darthsternie.net/switch-firmwares/)
* Vérifier qu'Atmosphere est compatbile avec ce firmware: [https://github.com/Atmosphere-NX/Atmosphere/releases/](https://github.com/Atmosphere-NX/Atmosphere/releases/)
* Sur la carte SD de la Switch, créer un dossier et y décompresser l'archive du firmware
* Démarrer la Switch sur le CFW et lancer l'homebrey **Daybreak**
* Naviguer jusqu'au dossier contenant le firmware valider avec **choose**
* Sélectionner la version **FAT32+exFAT**
* Démarrer l'installation du firmware puis rebooter ensuite la console une fois la mise à jour terminée

Une erreur apparaîtra certainement au boot, il faut alors mettre à jour Atmosphere.

## Mise à jour d'Atmosphere
* Récupérer la dernière version d'Hekate: [https://github.com/CTCaer/hekate/releases](https://github.com/CTCaer/hekate/releases)
* Récupérer la version d'Atmosphere compatible avec le firmware qui vient d'être installé (archive + fusee.bin): [https://github.com/Atmosphere-NX/Atmosphere/releases/](https://github.com/Atmosphere-NX/Atmosphere/releases/)
* Récupérer les sigpatches compatibles avec la version d'Atmosphere qui va être installée: [https://sigmapatches.coomer.party/](https://sigmapatches.coomer.party/)
* Placer/remplacer sur la carte SD les fichiers des deux archives.
* Placer le fichier **fusee.bin** dans **/bootloader/payloads**
* Placer le fichier **hekate_ctcaer_x.x.x.bin** à la racine
* Flasher le dongle avec le fichier **hekate_ctcaer_x.x.x.bin**:
  * Connecter le dongle au pc
  * L'allumer
  * Appuyer 2x sur reset (la LED passe au rouge)
  * Lancer **NS-Atmosphere Programmer** et écrire le fichier

Fonctionnement actuel: la Switch démarre sur Hekate (hekate_ctcaer_x.x.x.bin) qui permet ensuite de démarrer sur Atmosphere (fusee.bin).

# Backup NAND
* Booter sur Hekate et aller dans le menu **Tools** (en haut) puis dans **Backup eMMC**
* Sélectionner **eMMC BOOT0 & BOOT1** (assez rapide)
* Sélectionne ensuite **eMMC RAW GPP** (~30min, au moins 30Go sur la carte SD et 50% de batterie)
* Une fois le backup terminé, récupérer le dossier "backup" sur le PC et le zipper pour gagner de la place
