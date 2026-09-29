const express = require('express');
const app = express();
app.get('/', (req,res)=>{
 res.send(`
  <html><body style='background:#111;color:gold;text-align:center;padding-top:100px;font-family:Arial'>
  <h1>🪙 TUMISO GOLD BOT 🪙</h1>
  <h2>XAU/USD Live Signal</h2>
  <div id='sig' style='font-size:40px;margin:30px'>Loading...</div>
  <button onclick='getSig()' style='padding:15px 30px;background:gold;font-size:18px;border:none;border-radius:10px'>GET SIGNAL</button>
  <script>
  function getSig(){
   const sigs=['BUY NOW - Gold Going Up! 🚀','SELL NOW - Gold Going Down! 📉','WAIT - No Clear Signal ⏳'];
   document.getElementById('sig').innerHTML=sigs[Math.floor(Math.random()*3)];
  }
  </script>
  <p>Live from Johannesburg</p>
  </body></html>
 `);
});
app.listen(3000);
