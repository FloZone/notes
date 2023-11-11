---
tags: [retrogaming,hack]
---
# PSP: Hack PSP 1000

## Informations
Ce tutoriel permet de hacker une PSP 1000 en CFW 6.60 ME-1.8.

## Matériel nécessaire
* PSP 1000
* L'archive du firmware officiel 6.60: [Firmware_officiel_6.60.zip (31.7Mo)](/notes/files/games/psp_hack_psp1000/Firmware_officiel_6.60.zip)
* L'archive du HEN 6.60 LME-1.8: [LCFW_ME-1.8.zip (769Ko)](/notes/files/games/psp_hack_psp1000/LCFW_ME-1.8.zip)
* L'archive du CF 6.60 ME-1.8: [Custom_Firmware_6.60_ME-1.8.zip (32.2Mo)](/notes/files/games/psp_hack_psp1000/Custom_Firmware_6.60_ME-1.8.zip)

## Hack
* Pour faire quelque chose de propre, formatter la Memory Stick via la PSP
* Extraire l'archive du firmware officiel 6.60 à la racine de la MS
* Lancer "Mise à jour 6.60 ...""
  * ⚠️ Si le CF actuel bloque la maj (CF Gen par exemple):
    * Extraire l'archive XGEN à la racine de la MS
    * Mettre l'eboot du firmware officiel 6.20 à la racine de la MS et le renommer EBOOT.PBP
    * Lancer XGEN -> install any OFW
    * Recommencer l'étape précédente
* Extraire l'archive du HEN 6.60 LME à la racine de la MS
* Lancer 660LME Installer et appuyer sur **x**
* Extraire l'archive du CF 6.60 ME à la racine de la MS
* Lancer mise à jour 6.60
  * ⚠️ Si une erreur survient au lancement, recommencer
* Formatter la MS via la PSP puis rétablir les paramètres par défaut
