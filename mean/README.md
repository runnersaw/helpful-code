# MEAN stack template

It is recommended to follow the angular style guide written [here](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md).

## How to install

### Install git

#### On Windows

1. Download it [here](https://git-scm.com/download/win). (RECOMMENDED: Keep 'Git Bash' checked in order to install Git Bash). It is recommended to choose 'Use Git from the Windows Command Prompt'
2. Run `git --version` in either a command prompt or Git Bash in order to verify git is installed.

#### On Ubuntu

1. Run `sudo apt-get install git` in Terminal.
2. Run `git --version` to verify it is installed.

### Clone the repo

Clone the repo and copy the `mean/` folder to some location on your computer.

### Install node.js

#### On Windows

1. Download the installer [here](https://nodejs.org/en/download/).
2. Run the installer
3. Open a command prompt.
4. Run `node -v` and `npm -v` in a shell and ensure that some version is printed. (NOTE: shell means Command Prompt, Git Bash, or Terminal).

#### On Ubuntu/Debian systems
1. Run `curl -sL https://deb.nodesource.com/setup | sudo bash -` (install curl with `sudo apt-get install curl` if needed)
2. Run `sudo apt-get install -y nodejs` and `sudo apt-get install -y build-essential`.
3. Run `node -v` and `npm -v` in a shell and ensure that node's version is greater than 0.10.35 and npm's version is greater than 2.1.17. (NOTE: shell means Command Prompt, Git Bash, or Terminal).
4. If npm is out of date run `sudo npm install -g npm`

### Install MongoDB

#### On Windows

1. Download and run the installer [here](https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.2.9-signed.msi). Use the 'Complete' installation.
2. Run `mkdir \data\db`.
3. Run `mongod` to verify that MongoDB is working.

#### On Ubuntu

1. Run `sudo mkdir -p /data/db`.
1. Follow the instructions [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition).
2. Run `mongod` to verify that MongoDB is working. (You might have to do `sudo mongod` if that fails, we don't know why).

### Install packages

Run `npm install`.

### Recommended step: Install `nodemon`

`nodemon` automatically restarts the project when it notices any changes to files. This is very convenient. If you don't use nodemon, you'll have to manually restart the project each time you want to

1. Run `npm install -g nodemon` in Terminal, Git Bash, or Command Prompt. (You may need to add a `sudo` in front if using Ubuntu).

## Run the project

1. Open a shell and run `mongod`.
2. Open another shell and `cd` into the 'mean' directory.
3. Run `nodemon app.js`. (Use `node` instead of `nodemon` if you didn't install `nodemon`). (NOTE: On Windows, you may need to do `nodemon ~/path/to/app.js` if it gives you an error).
4. Navigate to `localhost:3000` in your browser.
