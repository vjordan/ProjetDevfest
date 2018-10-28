# ProjetDevfest

## Auteurs
Juliette FRETAY & Vincent JORDAN

## Sujet
Création d'une application mobile multiplatforme avec ionic pour le DevFest Nantes 2018.

## Dev

### Run Ionic Project
`ionic cordova run android --device` :

Attention : Avec la commande `ionic serve -c`, des problèmes de configuration de plugins surviennent pour l'ajout de contacts et l'accès à la galerie de photos. 

## Project details

### Attention
L'ajout des contacts sur un smartphone Android version 8+ peut crasher l'application. Voici la démarche à suivre pour éviter ce problème :
* Remplacer le ficher plugins/cordova-plugin-contacts/src/android/ContactManager.java par le fichier suivant : [Lien du fichier sur GitHub](https://github.com/duncan-c/cordova-plugin-contacts/blob/master/src/android/ContactManager.java)

### Done
* Home Page
* Menu
* Speakers List
* Sessions List
* Speaker Page(Details + Add Contact)
* Session Page
* Phone Page
* Session Notes(Texte + Photo)

### To Do
 * Agenda
