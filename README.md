# web_speech_guessing_game_pt-br
A web number guessing game that uses voice recognition as input

This project was made while following a class on how to use the Web Speech API, so it can be seen just a fun practice project :)  
And, as you might have guessed by the title, this project was made in brazilian portuguese, I made this because I plan on playing this game with other portuguese speaking people, so it just made more sense that way.

![game screenshot](game_screenshot.jpg)
  
## Instructions  
> Note that you need to have python installed to run the app  

**Running the app**

1. After downloading or cloning this repo, unpack it (if it came compressed), and open the terminal in the root directory (the one where, for example, this README.md is located).  
2. Then run `python -m venv ./server_venv` to create the virtual enviroment.
3. Next run `.\server_venv\Scripts\Activate.ps1` (for powershell) or `.\server_venv\Scripts\activate.bat` (for regular cmd) to activate the venv.
4. To install the dependencies run `pip install -r requirements.txt`.  
5. And, at last, run `python .\app.py` to launch the app and type **localhost:5000** on your browser to use the app.

- Subsequently you will only need to activate the venv (step 3) and run the app (step 5).

> If you wish to stop the application type CTRL+C on the terminal that is running the server.
---
**Modifing the app**
> To Edit the code you will need **python and node.js** installed
1. To set up the python back-end follow the steps 1 to 4 in the *Running the app* section.
2. Now, to get the node dependencies, run `npm install` in the same root directory mentioned in the *Running the app* section.
3. To automatically compile typescript and build the webpack bundle run `npm run dev`.
5. After that run `python .\app.py` to launch the server.  
> Be sure to import all new typescript files in index.ts, just like it is being done to the others, so webpack knows which files to pack.