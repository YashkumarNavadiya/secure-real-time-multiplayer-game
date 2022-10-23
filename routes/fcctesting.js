<!DOCTYPE html>
<html>
  <head>
    <title>Secure Real-Time Multiplayer Game</title>
    <meta
      name="description"
      content="An example for the fCC InfoSec Secure Real-Time Multiplayer Game project"
    />
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="../public/style.css" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet">
    <script src="/socket.io/socket.io.js"></script>
  </head>
  <body>
    <header>
      <h1>Secure Real Time Multiplayer Game</h1>
    </header>
    <hr style="margin: 25px" />
    <div class="container">
      <canvas 
        ref="game"
        id="game-window" 
        width="640" 
        height="480"
      >
      </canvas>
    </div>
  </body>
  <script src="../public/game.mjs" type="module"></script>
</html>
