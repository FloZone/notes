---
tags: [retrogaming]
---
# Wii: Installer DiosMios

## Informations
Ce tutoriel permet d'installer DiosMios sur une Wii hackée pour pouvoir lancer des jeux de Gamecube via USB.

utoriel d'origine: [http://www.wii-info.fr/forum-35073-tuto-utiliser-usb-loader-gx-avec-dios-mios-v2.htm](http://www.wii-info.fr/forum-35073-tuto-utiliser-usb-loader-gx-avec-dios-mios-v2.htm)

## Matériel nécessaire
* Une Wii hackée avec HBC et USB Loader GX et sa carte SD
* DiosMios: [diosmios_2.11.rar (3.3Mo)](/notes/files/games/wii_diosmios/diosmios_2.11.rar)
* DiosMios Booter: [DMLbooter_r30_hbc.7z (241Ko)](/notes/files/games/wii_diosmios/DMLbooter_r30_hbc.7z)
* Un manager de WAD (ici archive wad_manager): [wad_manager_1.8.zip (370Ko)](/notes/files/games/wii_diosmios/wad_manager_1.8.zip)
* FAT32Formatter: [Fat32Formatter.zip (184Ko)](/notes/files/games/wii_diosmios/Fat32Formatter.zip)
* Un support de stockage (disque dur/clef USB) sur lequel mettre les jeux

## Installation
* Extraire les archives de DiosMios et DiosMios Booter à la racine de la SD
* Extraire l'archive wad_manager à la racine de la SD
* Formatter un disque dur ou clef USB en FAT32 avec une taille de cluster de 32ko
  * Le logiciel FAT32Formatter fait ça tout seul comme un grand
* Mettre des jeux sur le support de stockage
  * ⚠️ L'architecture doit être: racine/games/nom_du_jeu/game.iso
* Brancher le support de stockage sur le port0 de la Wii
* Installer le wad de DiosMios via wad_manager ou un autre manager de WAD
  * ⚠️ Allemand, faire A pleins de fois
* Lancer USB Loader GX puis entrer dans les paramètres (icône d'engrenage)
* Sélectionner "paramètre du loader" et effectuer les réglages suivants
  * loader's ios -> 250 (au lieu de 249)
  * Redémarrer la console
* Sélectionner "paramètre du loader" et effectuer les réglages suivants
  * dml mode nmm -> actif
  * dml led activité -> actif
  * dml pad hook -> actif
  * dml sans disque -> actif
  * ⚠️ debug -> inactif
* Sélectionner "paramètre du disque dur" et effectuer les réglages suivants
  * partitions multiples -> actif
  * port usb -> les deux ports
  * partition jeu Wii à installer -> toutes les partitions
  * installze jeux GC compressés -> actif
  * jeux GC alignés 32k -> actif
* Sélectionner "personnalisation des dossiers" et effectuer les réglages suivants
  * dossier gamecube principal -> usb port1:/games/
  * Ne pas oublier de régler correctement les filtres d'affichage de USB Loader GX
  * Si le jeu ne se lance pas, le lancer avec DiosMios Booter (via l'Homebrew Channel)
* Lancer l'Homebrew Channel
* Lancer DiosMios Booter
* Effectuer les réglages suivants
  * méthode de boot -> 2.1
  * booter drive reset -> on
  * NMN -> on
  * activity led -> on
  * pad hook -> on
  * no disc -> on
  * widescreen -> on
