let fetchRegister = (req,res,next)=>{
    res.send(`<h1>Welcome to registration Page</h1>
        <form action="/api/users/register" method="post">
        <label for="name" >Name: </label>
        <input type="text" name="name"><br>
        <label for="email" >Email: </label>
        <input type="text" name="email"><br>
        <label for="password" >Password: </label>
        <input type="password" name="password"><br>
        <input type="submit" value="submit">
        </form>
        `)
        next()
}

let fetchlogin = (req,res,next)=>{
    res.send(`<h1>Welcome to Login Page</h1>
        <form action="/api/users/login" method="post">
        <label for="email" >Email: </label>
        <input type="text" name="email"><br>
        <label for="password" >Password: </label>
        <input type="password" name="password"><br>
        <input type="submit" value="submit">
        <button><a href="/forgetPassword">Forget Password</a></button>
        </form>
        `)
        next();
}


module.exports = {fetchRegister,fetchlogin}