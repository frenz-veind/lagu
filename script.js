const lyrics = [
  { time: 0, text: "Did you think that I wouldn't see you out at the movies?" },
  { time: 4, text: "What you doin' to me? You're taking him where we used to go" },
  { time: 8, text: "Now if you're trying to break my heart" },
  { time: 10, text: "It's workin','cause you know that" },
  { time: 13, text: "That should be me, holdin' your hand" },
  { time: 17, text: "That should be me, makin' you laugh" },
  { time: 21, text: "That should be me, this is so sad" },
  { time: 25, text: "That should be me, that should be me" },
  { time: 28, text: "That should be me, feelin' your kiss" },
  { time: 30, text: "That should be me, buyin' you gifts" },
  { time: 34, text: "This is so wrong, I can't go on" },
  { time: 38, text: "'Til you believe that that should be me" }
];

const song = document.getElementById("song");
const lyricsDiv = document.getElementById("lyrics");

song.addEventListener("timeupdate", () => {
  const current = song.currentTime;

  for (let i = lyrics.length - 1; i >= 0; i--) {
    if (current >= lyrics[i].time) {
      lyricsDiv.innerHTML = lyrics[i].text;
      break;
    }
  }
});
