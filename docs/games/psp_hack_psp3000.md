---
tags: [retrogaming,hack]
---
# PSP: Hack PSP 3000

## Informations
Ce tutoriel permet de hacker une PSP 3000 en HEN 6.60 ME-1.8.

Même principe pour le HEN 6.60 ProMod-C1.

## Matériel nécessaire
* PSP 3000
* L'archive du firmware officiel 6.60: [Firmware_officiel_6.60.zip (31.7Mo)](/notes/files/games/psp_hack_psp1000/Firmware_officiel_6.60.zip)
* L'archive du HEN 6.60 ME-1.8: [6.60_ME-1.8.zip (769Ko)](/notes/files/games/psp_hack_psp3000/6.60_ME-1.8.zip)

ou

* L'archive du HEN 6.60 ProMod-C1: [6.60_ProMod-C1.zip (817Ko)](/notes/files/games/psp_hack_psp3000/6.60_ProMod-C1.zip)

## Hack
* Pour faire quelque chose de propre, formatter la Memory Stick via la PSP
* Extraire l'archive du firmware officiel 6.60 à la racine de la MS
* Lancer "Mise à jour 6.60 ...""
  * ⚠️ Si le CF actuel bloque la maj (CF Gen par exemple):
    * Extraire l'archive XGEN à la racine de la MS
    * Mettre l'eboot du firmware officiel 6.20 à la racine de la MS et le renommer EBOOT.PBP
    * Lancer XGEN -> install any OFW
    * Recommencer l'étape précédente
* Extraire l'archive du HEN 6.60 ME à la racine de la MS
* Lancer LME Installer et appuyer sur **x**
* Une fois la PSP redémarrée, lancer LME Launcher

* Le HEN s'enlève lorsque la PSP redémarre complètement, lancer LME Launcher pour le réactiver
* Pour supprimer le HEN, lancer LME Installer et faire **□**
