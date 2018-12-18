# description
a flask app to make an interesting (messed up, and very colorfull) picture and then display it to the user
<img src="face-color.png">

# Heroku site at:
https://face-color.herokuapp.com/


* flask is for the backend 
* js/html/css is for the frontend

# note
* there is no file IO so it should be easy to deploy to heroku...
* but it wasn't too easy so here is an OK temporary solution:
* `ssh -R 80:localhost:3000 ssh.localhost.run`

I eventually got it on heroku but I think heroku has lots of git problems

# I think it is best to go through heroku first and then add the github thing. Try this 
* heroku login (not regular email)
* heroku git:clone -a face-color
* cd face-color
* git remote add origin GITHUBURL

Also I could probably translate the code into js...  but thats no fun

