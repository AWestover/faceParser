# description
a flask app to take a weird picture and then display it to the user

Heroku site at:
https://face-color.herokuapp.com/


* flask is for the backend 
* js/html/css is for the frontend

# note
there is no file IO so it should be easy to deploy to heroku...
but it wasn't too easy so here is an OK temporary solution:
`ssh -R 80:localhost:3000 ssh.localhost.run`

I eventually got it on heroku but I think heroku has lots of git problems

Also I could probably translate the code into js...  but thats no fun

