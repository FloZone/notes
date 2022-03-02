---
tags: [dev]
---
# Charger sa clef Git sur Windows

Voici les instructions pour charger sa clef SSH Git sur Windows avec Pageant et qu'elle soit reconnue par la CLI.

## Instructions
1. Installer **git for windows** pour obtenir les CLI git: [https://gitforwindows.org/](https://gitforwindows.org/)

2. Télécharger **Pageant**, **Putty**, **Plink** et **Puttygen** qui permettront de charger sa clef SSH: [https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

3. Créer une variable d'environement `GIT_SSH` pointant vers l'emplacement de `plink.exe`
<CenteredImage :src="$withBase('/images/dev/git_env_var.png')" alt="git_env_var" width="500" />

4. Il faut avoir une clef SSH au format putty, par exemple:
```
PuTTY-User-Key-File-2: ssh-rsa
Encryption: none
Comment: rsa-key-20220221
Public-Lines: 6
...
Private-Lines: 14
...
Private-MAC: 9ed8e30eb3412706a694ec200c3e92714f42e6e0
```
:information_source: Puttygen est capable de générer une clef au bon format ou de convertir des clefs au format OpenSSH

5. Si c'est la première utilisation de git sur l'ordinateur, la clef SSH de github n'est pas connue. Il n'est pas possible de l'accepter via la CLI (bug connu)
<CenteredImage :src="$withBase('/images/dev/git_error_ssh.png')" alt="git_error_ssh" width="500" />

Pour l'accepter, lancer **Putty** et ouvrir une connexion SSH sur `github.com`, un prompt permettra d'accepter la clef
<CenteredImage :src="$withBase('/images/dev/git_putty_ssh.png')" alt="git_putty_ssh" width="500" />

6. Lancer **Pageant** et charger sa clef privée

7. Faire un git pull/clone pour tester :tada:
