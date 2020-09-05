// display none for sample result
const displayHidden = (document.getElementById('display-hidden').style.display =
  'none');

const searchResultShow = document.querySelector('.search-result-show');

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function () {
  searchSongBox();
});

function searchSongBox() {
  const searchBoxInput = document.getElementById('search-box').value;
  const summerSongs = searchBoxInput;
  const apiSearch = `https://api.lyrics.ovh/suggest/${summerSongs}`;
  fetch(apiSearch)
    .then((res) => res.json())
    .then((data) => {
      const songs = data.data;
      for (let i = 0; i < 10; i++) {
        const song = songs[i];
        const title = song.title;
        const artist = song.artist.name;
        const type = song.type;
        // result template
        const result = document.getElementById('search-result');
        result.innerHTML += `<div class="single-result row align-items-center my-3 p-3">
                                        <div class="col-md-2">
                                        </div>
                                        <div class="col-md-7">
                                        <h3 class="lyrics-name">${title}</h3>
                                        <p class="author lead">${type} by <span>${artist}</span></p>
                                    </div>
                                    <div class="col-md-3 text-md-right text-center">
                                        <button onclick="getLyrics('${artist}','${title}')" class="btn btn-success">Get Lyrics</button>
                                    </div>
                                </div>`;
      }
    });
}
