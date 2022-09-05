## Bugs 

#1. Security bug - middleware/auth.js - function authUser()
This function does not verify the token that was given. Beats the whole purpose of JWT to verify the received tokens.
Because a bad actor can send any token with out the correct SECRET_KEY and the function would accept it.
Solution:
By adding this line
`const result = jwt.verify(token, SECRET_KEY);`
or just `jwt.verify(token, SECRET_KEY);` will fix this issue


#2. 