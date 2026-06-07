const lyrics = [
  { time: 0, text: "Did you think that I wouldn't see you out at the movies?" },
  { time: 6, text: "What you doin' to me? You're taking him where we used to go" },
  { time: 12, text: "Now if you're trying to break my heart" },
  { time: 17, text: "It's workin','cause you know that" },
  { time: 22, text: "That should be me, holdin' your hand" },
  { time: 27, text: "That should be me, makin' you laugh" },
  { time: 32, text: "That should be me, this is so sad" },
  { time: 37, text: "That should be me, that should be me" },
  { time: 42, text: "That should be me, feelin' your kiss" },
  { time: 47, text: "That should be me, buyin' you gifts" },
  { time: 52, text: "This is so wrong, I can't go on" },
  { time: 57, text: "'Til you believe that that should be me" }
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