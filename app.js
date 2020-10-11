// UI variables
const inputName = document.getElementById("inputName"),
      inputButton = document.getElementById("inputButton"),
      songInfo = document.getElementById("songInfo"),
      songDetail = document.getElementById("songDetail");

inputButton.addEventListener("click", loadData);

function loadData() {
    fetch(`https://api.lyrics.ovh/suggest/${inputName.value}`)
        .then(res => res.json())
        .then(data => {
            showData(data);
        }).catch(err => {
            console.log(err);
        });
}

function showData(item) {
    let element = '<div><ul>';
    item.data.map(el => {
        element += `
        <p class="author lead"><strong>${el.title}</strong> Album by <span>${el.artist.name}</span> <button class="btn btn-success">Get Lyrics</button></p>
        `;
        songInfo.innerHTML= element;
        console.log(el);
    });

    let detailElement = '<div><ul>';
    item.data.map(el => {
        detailElement += `
            <div class="single-result row align-items-center my-3 p-3">
                <div class="col-md-9">
                    <h3 class="lyrics-name">${el.title}</h3>
                    <p class="author lead">Album by <span>${el.artist.name}</span></p>
                </div>
                <div class="col-md-3 text-md-right text-center">
                    <button class="btn btn-success">Get Lyrics</button>
                </div>
            </div>
        `;
        songDetail.innerHTML= detailElement;
    });
};


fetch (`https://private-anon-8ec151bb52-lyricsovh.apiary-mock.com/v1/Bob Dylan/VD City`).then(res => res.json()).then (data => {
    console.log(data);
})



