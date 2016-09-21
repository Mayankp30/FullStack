# fullstack-interview

### Notes:
You are not expected to finish everything. I repeat: **You are not expected to finish everything** (I couldn't finish everything in an hour). Do as much as you can in an hour.

Please make a new commit for each task (with a relevant commit message), and try not to commit broken code. 

### Before you begin:

* rename this file to TASKS.md
* initialize an empty repository
* add TASKS.md to a .gitignore (you may also want to add node_modules, github maintains a node gitignore [here](https://github.com/github/gitignore/blob/master/Node.gitignore))
* push the repository to github (and send me a link to it!)

### Finish as many of these in one hour as possible:
Note: Feel free to skip or complete tasks in any order that makes sense to you. The numbers are listed only to make reference to individual tasks.

1. change the database name to your github username
* change the form to log first name, last name, and email address
* log a timestamp when users sign up
* require that fields are not empty
* check for valid email addresses
* display the total number of user signups at the top of /userlist
* display a thank you message after completing the sign up form instead of redirecting to /userlist (hint, use AJAX) 
* disallow duplicate email addresses in the database
* display an “error, a signup with this email address already exists” message for duplicate email addresses
* set environmental variables for PORT and production/development mode with dotenv
* style the userlist. See [userlist.png](userlist.png) for inspiration. 
* add an option to csv export the user list  
* password protect /userlist -- do not store the password in the repository

### Authors
* [Michael D'Angelo](http://github.com/mldangelo) (michael.l.dangelo@gmail.com)
