# inst377-group-project-zcraven
inst377-group-project-zcraven created by GitHub Classroom

Name: FoodFacts
Group Members: Zach Craven, Shamyr Douglas, Ariana Sanford

Description: In response to the growing need for transparent and comprehensive information on food products, we propose the development of the Food Facts Platform(FFP). The goal of the FFP is to empower individuals to make informed dietary choices by providing a centralized and accessible source of detailed information regarding to food products they are putting into their system. The FFP aims to go beyond the limitations of tradiitonal nutrition labels, by offering a hollistic view including not only nutritional facts, but also all the ingredients and where they were originated, allergens, consumer-relevant labels, and environment impact metrics, such as carbon footprint.

Target Browsers: this application is designed to be compatible with modern web browsers, should work with Google Chrome, Safari, Microsoft Edge, etc.
Compatibility on both iOS and Android Devices expected.

User and Design Manual Below.


# Developer's Manual 
Installation: make sure to have the IDE Visual Studio Code installed on your system
  - copy the repository code name and prepare your Visual Studio
  - open a new terminal by using the terminal category on VS Code and clicking "New Terminal"
  - clone the repo by typing in git clone {in here should be the repository code name you copied from github}
  - once cloned, open the file folder in your VS Code
  - after you clone the repo, install dependancies with command: npm i
  - to run a rough version of the web application, you can open it live by clicking "Go Live" at the bottomn right
  - to start the web application and get full effects, run command: npm start
  - to end the web application session, press CTRL + C in your terminal

API: This application fetches data from the Open Food Facts data API, and is only given access to a limited amount of products
  - utilizes a GET request to `https://world.openfoodfacts.org/api/v2/search` to retrieve product infomration based on a user product search

Known Bugs: 
  - no known bugs reported as of now

Future Development:
  - looking to enhance the user interface, making it more user friendly and appealing
  - plan on adding sorting and filtering features to minimize searches
  - want to expand the options and open up the limitation of products, for there to be a wider range of product facts available for users
  - loking to adress the organization problem, nutrition and product facts are not visually organized and appealing


