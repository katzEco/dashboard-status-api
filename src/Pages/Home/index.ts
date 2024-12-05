export async function HomePage() {
  const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>deth'z Status API</title>
  
  <link rel="shortcut icon" href="https://suphakit.net/favicon.png" type="image/png">
  
  <style>
    @import url(https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Thai:100,200,300,regular,500,600,700);

    * {
      font-family: 'IBM Plex Sans Thai', sans-serif;
      transition: all .3s;
    }

    html, body {
      padding: 0;
      margin: 0;
    }

    body {
      background: url(https://picsum.photos/1920/1080);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .container {
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(1rem);

      display: flex;
      justify-items: center;
      align-items: center;
    }
    
    .container .time-container {
      margin: 0 auto;
      align-items: center;
      color: #2e2f2f;
      background: whitesmoke;
      font-size: 7em;
      padding: 1rem 3rem;
    }
    
    @media only screen and (max-width: 850px) {
      .container .time-container {
        font-size: 5em;
      }
    }
    @media only screen and (max-width: 400px) {
      .container .time-container {
        font-size: 3em;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="time-container">
      <span id="hr" class="time">00</span>
      <span>
        :
      </span>
      <span id="min" class="time">00</span>
      <span>
        :
      </span>
      <span id="sec" class="time">00</span>
    </div>
  </div>
  
  <script>
    let x = setInterval(() => {
      const time = new Date()
      
      document.querySelector('#hr').innerHTML = time.getHours()
      document.querySelector('#min').innerHTML = String(time.getMinutes()).length < 2 ? String(0)+String(time.getMinutes()) : time.getMinutes()
      document.querySelector('#sec').innerHTML = String(time.getSeconds()).length < 2 ? String(0)+String(time.getSeconds()) : time.getSeconds()
    }, 1000)
  </script>
</body>
</html>`

  return page
}
