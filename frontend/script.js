const api = 'http://localhost:3000';

//ARTIST -------------------------------------------------------------------------------------------------------
function loadArtists() {
    fetch(`${api}/artists`).then(res => res.json()).then(data => {
        const tbody = document.getElementById('artistTable');
        if (!tbody) return;

        tbody.innerHTML = ''; //set empty first
        data.forEach(artists => {
            tbody.innerHTML += `
            <tr>
                <td>${artists.artist_id}</td>
                <td>${artists.name}</td>
                <td>${artists.genre}</td>
                <td>${artists.monthly_listeners}</td>
            </tr>
            `;

        })
    });
}

function fillArtistForm(id, name, genre, monthly_listeners) {
    document.getElementById('artistID').value = id;
    document.getElementById('artistName').value = name;
    document.getElementById('artistGenre').value = genre;
    document.getElementById('artistListeners').value = monthly_listeners;
}

function createArtist() {
    const id = document.getElementById('artistID').value;
    const name = document.getElementById('artistName').value;
    const genre = document.getElementById('artistGenre').value;
    const monthly_listeners = document.getElementById('artistListeners').value;


    fetch(`${api}/artists`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ id, name, genre, monthly_listeners })
    }).then(() => loadArtists());
}



function updateArtist() {
    const id = document.getElementById('artistID').value;
    const name = document.getElementById('artistName').value;
    const genre = document.getElementById('artistGenre').value;
    const monthly_listeners = document.getElementById('artistListeners').value;

    fetch(`${api}/artists/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ id, name, genre, monthly_listeners })
    }).then(() => loadArtists());


}

function deleteArtist() {
    const id = document.getElementById('artistID').value;
    fetch(`${api}/artists/${id}`, {
        method: 'DELETE'
    }).then(() => loadArtists());
}



// //ALBUMS -----------------------------------------------------------------------------------------------------


function loadAlbums() {
    fetch(`${api}/albums`).then(res => res.json()).then(data => {
        const tbody = document.getElementById('albumTable');
        if (!tbody) return; //if doesnt exist, stop
        tbody.innerHTML = ''; //set empty first
        data.forEach(albums => {
            tbody.innerHTML += `
            <tr>
                <td>${albums.album_id}</td>
                <td>${albums.title}</td>
                <td>${albums.release_year}</td>
                <td>${albums.no_listens}</td>
                <td>${albums.artist_id}</td>
            </tr>
            `;
        })
    });
}

function fillAlbumForm(id, title, release_year, no_listens, artist_id) {
    document.getElementById('albumID').value = id;
    document.getElementById('albumTitle').value = title;
    document.getElementById('albumRelease_year').value = release_year;
    document.getElementById('albumListens').value = no_listens;
    document.getElementById('artistID').value = artist_id;
}


function createAlbum() {
    const title = document.getElementById('albumTitle').value;
    const release_year = document.getElementById('albumRelease_year').value;
    const no_listens = document.getElementById('albumListens').value;
    const artist_id = document.getElementById('artistID').value;

    fetch(`${api}/albums`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ id, title, release_year, no_listens, artist_id })
    }).then(() => loadAlbums());
}

function updateAlbum() {
    const id = document.getElementById('albumID').value;
    const title = document.getElementById('albumTitle').value;
    const release_year = document.getElementById('albumRelease_year').value;
    const no_listens = document.getElementById('albumListens').value;
    const artist_id = document.getElementById('artistID').value;

    fetch(`${api}/albums/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ id, title, release_year, no_listens, artist_id })
    }).then(() => loadAlbums());
}

function deleteAlbum() {
    const id = document.getElementById('albumID').value;
    fetch(`${api}/albums/${id}`, {
        method: 'DELETE'
    }).then(() => loadAlbums());
}

// //SONGS ------------------------------------------------------------------------------------------------

function loadSongs() {
    fetch(`${api}/songs`).then(res => res.json()).then(data => {
        const tbody = document.getElementById('songTable');
        if (!tbody) return; //if doesnt exist, stop
        tbody.innerHTML = ''; //set empty first
        data.forEach(songs => {
            tbody.innerHTML += `
            <tr>
                <td>${songs.song_id}</td>
                <td>${songs.title}</td>
                <td>${songs.release_year}</td>
                <td>${songs.artist_id}</td>
                <td>${songs.album_id}</td>
            </tr>
            `;
        })
    });
}

function fillSongForm(id, title, release_year, artist_id, album_id) {
    document.getElementById('songID').value = id;
    document.getElementById('songTitle').value = title;
    document.getElementById('songRelease_year').value = release_year;
    document.getElementById('artistID').value = artist_id;
    document.getElementById('albumID').value = album_id;
}

function createSong() {
    const title = document.getElementById('songTitle').value;
    const release_year = document.getElementById('songRelease_year').value;
    const artist_id = document.getElementById('artistID').value;
    const album_id = document.getElementById('albumID').value;


    fetch(`${api}/songs`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ id, title, release_year, artist_id, album_id })
    }).then(() => loadSongs());
}

function updateSong() {
    const id = document.getElementById('songID').value;
    const title = document.getElementById('songTitle').value;
    const release_year = document.getElementById('songRelease_year').value;
    const artist_id = document.getElementById('artistID').value;
    const album_id = document.getElementById('albumID').value;


    fetch(`${api}/songs/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ id, title, release_year, artist_id, album_id })
    }).then(() => loadSongs());
}


function deleteSong() {
    const id = document.getElementById('songID').value;
    fetch(`${api}/songs/${id}`, {
        method: 'DELETE'
    }).then(() => loadSongs());
}

//LOAD PAGES AFTER HTML
window.onload = () => {
    loadArtists();
    loadAlbums();
    loadSongs();
};
