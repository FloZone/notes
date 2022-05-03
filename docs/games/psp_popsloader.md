---
tags: [retrogaming]
---
# PSP: Installer l'Unofficial POPSLoader

## Informations
Ce tutoriel permet d'installer l'unofficial popsloader sur la PSP pour jouer aux jeux PS1.

## Matériel nécessaire
* 800Mo mini sur la MS
* Si 6.61 ME-2.3 -> l'archive unofficial popsload v4i: [unofficial_popsloader_v4i.zip (674Ko)](/notes/files/games/psp_popsloader/unofficial_popsloader_v4i.zip)
* Sinon -> l'archive unofficial popsload v4g: [unofficial_popsloader_v4g.zip (669Ko)](/notes/files/games/psp_popsloader/unofficial_popsloader_v4i.zip)

## Installation
* Extraire l'archive d'unofficial popsloader v4x à la racine de la MS
* Extraire les deux archives RTU à la racine de la MS
* Lancer POPSloader extracter et appuyer sur **x** (attendre 15/20 minutes)
* A la fin, supprimer les .PBP en appuyant sur **x**
* Supprimer PSP/GAME/popsloader extracter et SEPLUGINS/popsloader/modules/300 & 301
* Ouvrir seplugins/pops.txt et ajouter:
  * `ms0:/SEPLUGINS/popsloader/popsloader.prx 1`
