# description
a flask app to take a weird picture and then display it to the user

# note: 
I am pretty sure that some of the things I do here are bad practice
if anyone knows of a better way to do it please tell me
my form submission thing is especially questionable

Heroku site at:
https://face-color.herokuapp.com/


* flask is for the backend 
* js/html/css is for the frontend

# note
there is no file IO so it should be easy to deploy to heroku...
but it wasn't too easy so here is an OK temporary solution:
`ssh -R 80:localhost:3000 ssh.localhost.run`

I eventually got it on heroku but I think heroku has lots of git problems

I think it is best to go through heroku first and then add the github thing
try 
heroku login (not regular email)
heroku git:clone -a face-color
cd face-color
git remote add origin GITHUBURL

Also I could probably translate the code into js...  but thats no fun

