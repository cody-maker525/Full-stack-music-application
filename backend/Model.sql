PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS artists(
    artist_id INT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    genre TEXT NOT NULL,
    monthly_listeners INTEGER NOT NULL
);


CREATE TABLE IF NOT EXISTS albums(
    album_id INT PRIMARY KEY NOT NULL ,
    title TEXT NOT NULL,
    release_year INTEGER NOT NULL,
    no_listens INTEGER NOT NULL,
    artist_id INT NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artists(artist_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS songs(
    song_id INT PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    release_year INTEGER NOT NULL,
    artist_id INT NOT NULL,
    album_id INT NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artists(artist_id) ON DELETE CASCADE,
    FOREIGN KEY (album_id) REFERENCES albums(album_id) ON DELETE CASCADE
    
);

--1 = Maneskin
--2= Beethoven
INSERT OR IGNORE INTO artists(artist_id, name, genre, monthly_listeners) VALUES (1, 'Maneskin', 'rock', 100000);
INSERT OR IGNORE INTO artists(artist_id, name, genre, monthly_listeners) VALUES (2, 'Beethoven', 'classical', 378932);

INSERT OR IGNORE INTO albums(album_id, title, release_year, no_listens, artist_id) VALUES (1, 'RUSH!', 2023, 83298479, 1); --ALBUM 1
INSERT OR IGNORE INTO albums(album_id, title, release_year, no_listens, artist_id) VALUES (2, 'BABY SAID', 2024, 83479, 1); --ALBUM 2
INSERT OR IGNORE INTO albums(album_id, title, release_year, no_listens, artist_id) VALUES (3, 'The_live_symphony', 1874, 38290, 2); --ALBUM 3

INSERT OR IGNORE INTO songs(song_id, title, release_year, artist_id, album_id) VALUES (1, 'Own_my_mind', 1324, 1, 1);
INSERT OR IGNORE INTO songs(song_id, title, release_year,artist_id, album_id) VALUES (2, 'Baby_said', 2023, 1, 2);
INSERT OR IGNORE INTO songs(song_id, title, release_year,artist_id, album_id) VALUES (3, 'Lover', 2024, 1, 1);
INSERT OR IGNORE INTO songs(song_id, title, release_year,artist_id, album_id) VALUES (4, 'Beggin', 2023, 1, 2);
INSERT OR IGNORE INTO songs(song_id, title, release_year,artist_id, album_id) VALUES (5, 'Hey_There', 2023, 1, 1);
INSERT OR IGNORE INTO songs(song_id, title, release_year,artist_id, album_id) VALUES (6, 'Going_deaf', 1826, 2, 3);
INSERT OR IGNORE INTO songs(song_id, title, release_year,artist_id, album_id) VALUES (7, 'Lead_Water', 1946, 2, 3);
INSERT OR IGNORE INTO songs(song_id, title, release_year,artist_id, album_id) VALUES (8, 'Fur Elise', 1635, 2, 3);
INSERT OR IGNORE INTO songs(song_id, title, release_year,artist_id, album_id) VALUES (9, 'Elise and her Revenge', 1736, 2, 3);
INSERT OR IGNORE INTO songs(song_id, title, release_year,artist_id, album_id) VALUES (10, 'I hate Elise', 2023, 2, 3);


