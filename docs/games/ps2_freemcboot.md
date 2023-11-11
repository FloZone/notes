---
tags: [retrogaming,hack]
---
# PS2: Installation et utilisation de FreeMCBoot

## Informations
Ce tutoriel permet d'installer FreeMCBoot sur une carte mémoire.

Ce logiciel permet, si la carte mémoire est présente, de lancer des homebrews, d'utiliser un disque dur non officiel sur la PS2 et d'y lancer des backups de jeux, émulateurs, etc.

La version lite de ce pack ne contient pas les émulateurs de consoles afin de réduire la place utilisée sur la carte mémoire.

Il est préférable de ne pas utiliser la carte mémoire pour des sauvegardes de jeux, mais uniquement pour FreeMCBoot.

Listes officielles de compatibilité des jeux avec les launcher:
* Free HD Loader: [http://www.absoluteanime.com/hdloader.html](http://www.absoluteanime.com/hdloader.html)
* Open PS Loader: [http://psx-scene.com/forums/f150/official-psx-scene-opl-game-compatibility-list-115349/](http://psx-scene.com/forums/f150/official-psx-scene-opl-game-compatibility-list-115349/)

## Matériel nécessaire
* PS2 ayant un moyen de lire des backups de jeux (puce, HDLoadder/HDAdvance, FreeMCBoot, swap, etc...)
* Adaptateur réseau PS2
* Disque dur IDE (Maxtor, Western Digital, Verbatim, Seagate, etc...)
* Clef USB formattée en FAT32
* Carte mémoire 8Mb minimum (de préférence officielle)
* FreeMCBoot ou NoobiePackage (le premier est plus complet): [FreeMCBoot_1.8b_fr.7z (10Mo)](/notes/files/games/ps2_freemcboot/FreeMCBoot_1.8b_fr.7z) - [Noobie_Package_1.8.zip (2.2Mo)](/notes/files/games/ps2_freemcboot/Noobie_Package_1.8.zip)
* iso de uLaunchElfr (version CD et/ou DVD): [uLaunchElf_4.38_CD.zip (399Ko)](/notes/files/games/ps2_freemcboot/uLaunchElf_4.38_CD.zip) - [uLaunchElf_4.38_DVD.zip (1.6Mo)](/notes/files/games/ps2_freemcboot/uLaunchElf_4.38_DVD.zip)

## Installation
Suivant la méthode utilisée pour lancer un backup:

* Transférer 'uLaunchElf.iso' sur le disque dur via WinHiip

    ou

* Graver uLaunchElf.iso

Il se peut que la version CD ou DVD ne fonctionne pas, tenter avec l'autre.

* Formater la clef USB en FAT32
* Extraire l'archive FreeMCBoot/NoobiePackage à la racine de la clef USB
* Brancher la clef USB, le disque dur et la carte mémoire à la PS2
* Allumer la PS2 et lancer le uLaunchElf (via swap, HDLoader ou autre)
* Ignorer le message d'erreur concernant 'LAUNCHELF.CNF'
* Appuyer sur **○** pour accéder à l'explorateur de fichiers
* Sélectionner l'option 'mass' qui correspond à la clef USB
* Chercher et se positionner sur Free MCBoot xxx.ELF (version lite ou non)
* Appuyer sur **○** pour l'éxécuter

L'installation se déroule. Une fois terminée, éteindre la console et retirer la clef USB.

## Fonctionnement du FreeMCBoot complet
* Brancher le disque dur et la carte mémoire sur la PS2
* Allumer la PS2, celle-ci va booter sur FreeMCBoot
* Sélectionner le logiciel et appuyer sur X pour le lancer

Le logiciel principal est HD Loader qui permet de lancer les jeux via le disque dur.

Pour mettre un jeu sur le disque dur, le connecter au PC et transférer les jeux au format iso via WinHiip (cf [tuto WinHiip](ps2_winhiip.md)).
Il est aussi possible de créer un iso d'un jeu directement via HD Loader en mettant le DVD dans la PS2.

Voici la liste des homebrews contenus dans FreeMCBoot:

| Homebrew              | Description |
| --------------------- | ----------- |
| uLaunchELF            | Explorateur de fichiers |
| ESR                   | Démarrer un jeu au format DVD |
| Free HD Loader        | Lancer un iso via le DD, port USB ou le réseau |
| IGR Free HD Loader    | FreeHDLoader permettant de revenir au menu en appuyant sur **L1**+**L2**+**R1**+**R2**+**Start**+**Select** |
| HD Loader Dumb Server | Copier un iso sur le disque dur via le réseau |
| Open PS2 Loader       | Lancer un iso via le disque dur |
| Simple Media System   | Media player |
| Swap Magic            | Lancer un jeu PS2 gravé via swap magic |
| HD Project            | Emulateur de carte mémoire |
| PSX Launcher          | Lancer un jeu PS1 gravé via swap magic |
| DVD Region Free       | Lancer un jeu PS2 original d'une autre région |

## Utilisation du FreeMCBoot complet
A l'apparition du logo FreeMCBoot il est possible de lancer un outil en appuyant sur une touche de la manette:

| Touche | Homebrew |
| ------ | -------- |
| **○** | PSX Launcher |
| **x** | uLaunchELF |
| **□** | Swap Magic |
| **∆** | Code Breaker (non présent dans la version lite) |
| | |
| **L1** | Free HD Loader |
| **R1** | Open PS2 Loader |
| **L2** | Simple Media System |
| **R2** | ESR |
| | |
| **Select** | DVD Region Free |
| **Start**  | Configuration de FMCB |
| | |
| **↑** | Emulateur Megadrive |
| **↓** | Emulateur Super Nintendo |
| **←** | Emulateur Gameboy |
| **→** | HD Project |
| | |
| **L3** | Emulateur Master System |
| **R3** | Emulateur NES |
