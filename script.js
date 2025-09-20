const fortunes = [
      { food: "サンマ", message: "群れの中でも光る存在！", color: "#87ceeb", img: "image/sanma.jpg"},
      { food: "栗", message: "外は固いけど中身はホクホク。", color: "#8b4513", img: "image/curi.jpg"},
      { food: "さつまいも", message: "じっくり周りを温める人。", color: "#e063e0ff", img: "image/satumaimo.jpg"},
      { food: "松茸", message: "めったに出会えないレアキャラ！", color: "#deb887", img: "image/matutake.jpg"},
      { food: "柿", message: "渋みも甘みも味わい深い。", color: "#ff7f50", img: "image/kaki.jpg" },
      { food: "梨", message: "さっぱり爽やかな癒し系。", color: "#f0e68c", img: "image/nasi.jpeg" }
    ];

    let currentFortune = "";

    function drawFortune() {
      const random = Math.floor(Math.random() * fortunes.length);
      const result = fortunes[random];
      currentFortune = `今日の私は「${result.food}」！ ${result.message} #秋の味覚おみくじ`;

      document.body.style.background = result.color;

      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
      <div class ="fade-in">
      今日のあなたは…<br><b>${result.food}</b>！<br>${result.message}<br>
      <img src="${result.img}" alt="${result.food}" style="width:150px; margin-top:10px;">
      </div>`

      let audio;
      if (result.food === "松茸") {
        audio = new Audio("sound/爆発1.mp3");
      } else {
        audio = new Audio("sound/パッ.mp3")
      }
      audio.play();
      document.getElementById("shareButton").style.display = "inline-block";
    }

    function shareOnTwitter() {
      const url = "https://tenet64.github.io/uranai_aki/"
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentFortune)}&url=${encodeURIComponent(url)}`;
      window.open(twitterUrl, "_blank");
    }

  
