---
tags: [retrogaming]
---
# GBA: Backup de sauvegardes

## Informations
Ce tutoriel permet d'extraire des sauvegardes présentes sur les cartouches GBA afin d'en faire un backup avant changement d'une pile par exemple.

⚠️ Ne PAS modifier le nom des backup généré par le logiciel !

Faire attention pour les injections de sauvegardes modifiées car elles peuvent rendre inutilisable la cartouche.

## Matériel nécessaire
* DS Fat/Tank
* Linker DS
* Homebrew GBA Backup Tool: [gba_backup_tool.rar (193Ko)](/notes/files/games/gba_backup_save/gba_backup_tool.rar)
* Jeu GBA sur lequel faire un backup de sauvegarde

## Backup
* Extraire l'archive de GBA Backup Tool à la racine de la micro SD du linker
* Mettre la SD dans le linker, le linker dans la DS et lancer l'homebrew
* Insérer la cartouche de GBA
* Appuyer sur A pour charger le jeu, vérifier le nom du jeu
* Se placer sur "Save Backup" avec L et R
  * Appuyer sur B pour créer un nouveau fichier de sauvegarde
  * Bien appuyer B pour créer un nouveau fichier et ne pas écraser le précédent
* Pour faire un autre backup sans relancer l'homebrew: faire X pour charger le nouveau jeu puis répéter les étapes précédentes
* Les backup de sauvegardes se trouvent dans le dossier "GBA_Backup"

## Restauration
* Mettre la sauvegarde concernée dans le dossier "GBA_Backup" sur la SD
* Lancer l'homebrew et se placer sur "Save restore" avec L et R
* Appuyer sur A pour injecter la sauvegarde
