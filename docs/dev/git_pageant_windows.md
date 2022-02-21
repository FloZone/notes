---
tags: [dev]
---
# Charger sa clef Git sur Windows

Voici les instructions pour charger sa clef SSH Git sur Windows avec Pageant et qu'elle soit reconnue par la CLI.

## Instructions
1. Installer **git for windows** pour obtenir les CLI git -> https://gitforwindows.org/

2. Télécharger **Pageant**, **Putty**, **Plink** et **Puttygen** qui permettront de charger sa clef SSH -> https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html

3. Créer une variable d'environement `GIT_SSH` pointant vers l'emplacement de `plink.exe`
<CenteredImage :src="$withBase('/images/dev/git_env_var.png')" alt="git_env_var" width="500" />

4. Il faut avoir une clef SSH au format putty, par exemple:
```
PuTTY-User-Key-File-2: ssh-rsa
Encryption: none
Comment: rsa-key-20220221
Public-Lines: 6
AAAAB3NzaC1yc2EAAAABJQAAAQEA4FD+/vwS2q22Q1fauDSAlHwckT0b4mMw3wBk
DTxrlEMwjUhGUsIwSF4XWqeEr4sKjj/OBG4SI+nisyYeUGjzmRhys9M8PAa0XdCO
UaRgs4ypLsS8LNntO7aWE8MDW1uXjtgGi2mdXREowJATM8SEyBzRwyTFVb7yGjx2
zl8AOk27tDKX9POQ07eQ1bGiio121DVDlma3EEDemIexSRL243SGCmuVLD0e8wL5
koTwVp+uDiStJ3xWQOxMS3TxXvZqcvh/5ZK/Gxr4EoLjU6pCFMUDsw8oUpwvzvHP
IR3rKMp+S7/UNBDfg9/2lpS6d7XTzFRWZ/OfGBtqbUAmZhGeJw==
Private-Lines: 14
AAABAQDOIOpSGBFTU4Tj792+BrtYA1iFdmymhKly+XCyN4VzfAMaCxAwX2qjXWGR
kwROSGqQjaiOcvvppn1KrWf23PuFw3BSN7rPYBtdIILHkCGCZZSL12DPRMwpCKWV
nnHJkm+YBMe+YQ0lFq/Ti0/qYY7FuZ4o8VtjjN54+UqUH/JfFUboP4BJaZylOm6f
9a8tBImRN83dHvMD2H1hOuYtb6mRl7HghbO3eznH9dO8CFQEK21YMeBxFrbpLTv3
pHFf0cYoOqcIcHA73BJro2iLBMDCylfVhPGYdM11agxaOmiAYztv0PiEYy5GoCbx
w/kxuZSO43ak0Fgu6TJXHDl0xMYtAAAAgQD22nt28g9cGHbB6goIQ77M9OfeTlAB
tQrKyUXoToIzQCGn/m+tAawIJTdIZ6+ggvCC16YFU/T5yCeVpSEaHLKeyo+d/BVk
2kWpXTyjRKG39MrVqGEH++cFngRF0ybMUiUL2fejJvKVJ7a5F3ubKnxbgMokz4KK
edj0vJr0wqx1hwAAAIEA6KC9UaPxRn/qodQrTJXRQVfb9jHPYZrKfE7cCroPuEim
Qh8uLB8hlCjl0kefEoPaQ0d1je8Mwpkii/q3ef+jRtb74NjGwf+xHItuxsMK5Yg8
GcBwRpo2Dl5Ue9y3jv+i3vCR9W39pw9Nx9JacgCGGmS/1iFSHhDbRm/3a5VDumEA
AACAGkR3duF06XVLDSY2YPDzDjPL0KYbBJaluDfn64gI7Ng9IrfIeyuWHTUmJdrg
Z0Pmvntq9pLWQUjgrbMokjdP5+6VPxHmRo1XBNlitaau4ZIIviB3kIqmw15B/J+E
z4gTayoKtVQdOK6FTHbeGFgAbMXHT4escT/bx3UFBRflZgg=
Private-MAC: 9ed8e30eb3412706a694ec200c3e92714f42e6e0
```
:information_source: Puttygen est capable de générer une clef au bon format ou de convertir des clefs au format OpenSSH

5. Si c'est la première utilisation de git sur l'ordinateur, la clef SSH de github n'est pas connue. Il n'est pas possible de l'accepter via la CLI (bug connu)
<CenteredImage :src="$withBase('/images/dev/git_error_ssh.png')" alt="git_error_ssh" width="500" />

Pour l'accepter, lancer **Putty** et ouvrir une connexion SSH sur `github.com`, un prompt permettra d'accepter la clef
<CenteredImage :src="$withBase('/images/dev/git_putty_ssh.png')" alt="git_putty_ssh" width="500" />

6. Lancer **Pageant** et charger sa clef privée

7. Faire un git pull/clone pour tester :tada:
