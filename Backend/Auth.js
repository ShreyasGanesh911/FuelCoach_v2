const pool = require('./Connection/Connect.js')
const auth = async(req,res,next)=>{
    const token =  await req.cookies.AuthToken
    //const {token} = req.body
    //console.log("In Auth",token)
    
    if(token){
        const [result] = await pool.query("SELECT User_ID FROM Users WHERE User_ID = ?;",[token]) 
        if(result.length)
            next()
        else
        res.status(400).json({success:false,message:"Login First"})
    }
        
    else
    res.status(400).json({success:false,message:"Login First in else"})
    
}
module.exports = auth