---
tags: [retrogaming]
---
# Wii: Hack

## Informations
Ce tutoriel permet de hacker les Wii en 4.3, sauvegarder la NAND, mettre les protections nécessaires, rétablir l'accès à la chaine boutique et installer les Homebrews indispensables.

Tutoriels originaux:
* [http://www.gamergen.com/dossiers/installer-chaine-homebrew-wii-4-3-grace-letterbomb-114186-1](http://www.gamergen.com/dossiers/installer-chaine-homebrew-wii-4-3-grace-letterbomb-114186-1)
* [http://www.gamergen.com/tutoriels/tuto-utilisation-bootmii-114182-1](http://www.gamergen.com/tutoriels/tuto-utilisation-bootmii-114182-1)
* [http://www.gamergen.com/tutoriels/tuto-bien-configurer-son-priiloader-114181-1](http://www.gamergen.com/tutoriels/tuto-bien-configurer-son-priiloader-114181-1)
* [http://www.gamergen.com/tutoriels/tuto-usb-loader-gx-114113-3](http://www.gamergen.com/tutoriels/tuto-usb-loader-gx-114113-3)
* [http://www.gamergen.com/tutoriels/tuto-wiiflow-114329-1](http://www.gamergen.com/tutoriels/tuto-wiiflow-114329-1)


## Matériel nécessaire
* Carte SD formattée en fat32
* Connection internet sur la Wii
* PC avec connection internet
* Sciifii v5 final mod matt online: [Sciifii_v5_final_mod_matt_online.rar (797Ko)](/notes/files/games/wii_hack/Sciifii_v5_final_mod_matt_online.rar)
* Wiibrand GUI: [Wilbrand_GUI_1.2.zip (241Ko)](/notes/files/games/wii_hack/Wilbrand_GUI_1.2.zip)
* Hackmii installer: [hackmii_installer_v1.2.zip (4.3Mo)](/notes/files/games/wii_hack/hackmii_installer_v1.2.zip)
* Optionnel: WiiFlow: [WiiFlow_v2.2_r414.zip (3.3Mo)](/notes/files/games/wii_hack/WiiFlow_v2.2_r414.zip)

## Hack
* Noter l'adresse mac de la Wii:
  * Paramètres Wii -> Internet -> Informations générales
* Noter la lettre de la version du firmware:
  * Paramètres wii -> écrit en haut à droite
* Sur le PC, aller sur le site [http://please.hackmii.com](http://please.hackmii.com)
  * Choisir la lettre du firmware
  * Saisir l'adresse mac
  * Saisir le captcha
  * Cliquer sur un des deux boutons (rouge ou bleu)
  * Télécharger l'archive
  * Extraire "LetterBomb.zip" à la racine de la carte mémoire
* Alternative si le site est down:
  * Lancer Wiibrand GUI
  * Saisir l'adresse mac sans les tirets
  * Saisir l'adresse de la veille (par défaut)
  * Saisir la version de la console
  * Saisir la lettre de la version
  * Placer le dossier "private" créé à la racine de la carte mémoire
  * Rajouter à la racine de la sd le fichier boot.elf de hackmii_installer
* Eteindre la wii, mettre la carte mémoire, allumer la wii
* Aller dans les couriers et ouvrir le calendrier
  * Ouvrir la lettre rouge qui apparait dans les jours précédent
  * Cliquer dessus pour lancer Hackmii
* Attendre un moment et appuyer sur 1, il doit y avoir:
  * The Homebrew Channel : Can be installed
  * Bootmii : Can be installed
  * ou Bootmii : Can only be installed as an IOS
* Cliquer sur "continue"
* Sélectionnez "Install the Homebrew Channel"
* Sélectionnez "Yes, "continue"" et patienter le temps de l'installation
* Faire "continue"
* Cliquer maintenant sur BootMii...
* Privilégier l'installation de bootmii en boot sinon, le faire en IOS
* Faire "yes" puis "continue"
* Faire "yes", "continue", patientez pendant l'installation puis "continue"
* Faire "return to the main menu" puis "exit"

## Sauvegarder la NAND
Dans BootMii la manette est désactivée, le bouton power de la console fait suivant et reset valide.

Il faut au moins 600Mo libres sur la carte SD pour la NAND.

* Si BootMii est installé en IOS, lancer HBC puis BootMii
* Sinon maintenir la touche reset de la console et appuyer sur power, lacher reset après 1sec
* Aller sur la dernière icône (engrenage) et sélectionner l'icone avec la flèche verte qui va vers la carte mémoire
  * La sauvegarde démarre et prend du temps
  * Une fois la sauvegarde terminée, la vérification se lance
  * Une fois terminé, appuyer sur power pour retourner au menu
  * Retourner sur la première page puis reset pour quitter
* Mettre la carte SD dans le PC et conserver nand.bin et keys.bin à l'abris

## Installer Priiloader
* Extraire Sciifii v5 mod matt à la racine de la carte SD
* Lancer HBC puis Sciifii
* Choisir "Hack en mod simple"
  * Si une erreur survient, faire **A** pour redémarrer et recommencer
* Eteindre la Wii et l'allumer en maintenant le bouton reset de la console
* Aller dans "Modification menu systeme"
* Activer
  * bloquer les maj par disque
  * bloquer les maj en ligne
  * protege HAXX.JODI.DVDX.....
* Optionnel:
  * ré-activer la bannerbomb v2
  * supprime le diagnostic disc check
  * deplacer la chaine disque
  * passe auto ecran avertissement
  * ou supprime ecran avertissement
* Sauvegarder la configuration puis B pour revenir au menu
* Aller dans "Configuration"
* Mettre "autoboot" sur "menu wii"
* Enregistrer puis B pour revenir au menu puis retourner au menu wii

## Rétablir la chaîne Boutique
* Lancer HBC puis Sciifii
* Aller dans "menu avancé" puis "maj cios, chaines, etc..."
* Sélectionner "shopping channel" ou "chaine boutique"
* Valider l'installation puis retourner au menu Wii

## Installer les Homebrews indispensables
* USBLoaderGX: lecteur de jeu via DD USB
  * Lancer HBC puis Sciifii
  * Aller dans "menu avancé", "loader dvd et usb seuls"
  * Sélectionner "USBLoaderGX" puis démarrer
  * Lancer USBLoaderGX puis aller dans les paramètres
  * Aller dans "Configuration GUI" puis mettre le clavier en AZERTY
  * Aller dans "Paramètres du Loader" et mettre "oui" sur "Correctif Erreur 002"
  * Aller dans "Pamarètres du Loader" et aller sur "Retourner vers"
  * Mettre "UNEO USB LOADER GX" et valider

* WiiMC: lecteur multimédia
  * Lancer HBC puis Sciifii
  * Aller dans "menu avancé", "multimedia"
  * Sélectionner "nouvelle installation WiiMC" puis démarrer
  * Dossiers "images" ou "photos", "musiques", "vidéos" à la racine du support de stockage

* Syscheck: vérification + rapport de l'état de la console
  * Lancher HBC puis Sciifii
  * Aller dans "menu avancé", "Utilitaires"
  * Sélectionner "syscheck" puis démarrer

* Yawmm: gestionnaire de chaines
  * Lancher HBC puis Sciifii
  * Aller dans "menu avancé", "Utilitaires"
  * Sélectionner "yawmm" puis démarrer

* WiiFlow: lecteur de jeu via DD USB
  * Extraire l'archive à la racine de la carte SD
  * Lancer HBC puis yawmm
  * Sélectionner l'IOS 249 puis valider
  * Mettre NAND Emulator sur Disable puis valider
  * Sélectionner Wii SD Card puis valider
  * Sélectionner "Carbonik-FIX94v11forwarder-DWFA.wad" puis valider
  * Commencer l'installation
  * Appuyer sur le bouton home de la manette pour quitter
