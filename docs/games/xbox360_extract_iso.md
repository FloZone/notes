---
tags: [retrogaming,hack]
---
# Xbox 360: Extraire un ISO

## Informations
Ce tutoriel permet de décompresser un jeu .iso ou de le convertir en GOD et de le transférer sur la Xbox.

Certains jeux ne fonctionnent pas décompréssés/extraits, il faut donc les convertir en GOD (Game On Demand).

## Matériel nécessaire
* Jeu au format .iso
* exiso.exe et XBOX360 ISO Extract côte à côte pour une extraction: [exiso.exe (136Ko)](/notes/files/games/xbox360_extract_iso/exiso.exe) - [XBOX360_ISO_Extract.exe (133Ko)](/notes/files/games/xbox360_extract_iso/XBOX360_ISO_Extract.exe)
* iso2god pour une conversion en GOD: [iso2god_v1.3.6.exe (1.1Mo)](/notes/files/games/xbox360_extract_iso/iso2god_v1.3.6.exe)

## Extraction
* Lancer XBOX360 ISO Extract
* Choisir le dossier de l'iso (laisser l'iso seul dans ce dossier)
* Choisir le dossier de destination
* Cliquer sur GO
* Une fois terminé, placer le dossier contenant les fichiers du jeu dans le dossier des jeux du HDD de la Xbox

## Convertion en GOD
* Lancer iso2god
* Add ISO et remplir la source, le dossier de destination et un dossier temporaire (à supprimer après)
* Une fois terminé, placer le dossier contenant les fichiers du jeu dans `Content/0000000000000000/`
