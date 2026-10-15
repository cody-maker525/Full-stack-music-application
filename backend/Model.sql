PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS artists(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    genre TEXT NOT NULL,
    monthly_listeners INTEGER NOT NULL
);


CREATE TABLE IF NOT EXISTS albums(
    id INTEGER PRIMARY KEY AUTOINCREMENT ,
    title TEXT NOT NULL,
    release_year INTEGER NOT NULL,
    no_listens INTEGER NOT NULL,
    artist_id INTEGER NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artists(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS songs(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    release_year INTEGER NOT NULL,
    artist_id INTEGER NOT NULL,
    album_id INTEGER NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artists(id) ON DELETE CASCADE,
    FOREIGN KEY (album_id) REFERENCES albums(id) ON DELETE CASCADE
    
);

--1 = Maneskin
--2= Beethoven
INSERT INTO artists(name, genre, monthly_listeners) VALUES ('Maneskin', 'rock', 100000);
INSERT INTO artists(name, genre, monthly_listeners) VALUES ('Beethoven', 'classical', 378932);

INSERT INTO albums(title, release_year, no_listens, artist_id) VALUES ('RUSH!', 2023, 83298479, 1); --ALBUM 1
INSERT INTO albums(title, release_year, no_listens, artist_id) VALUES ('BABY SAID', 2024, 83479, 1); --ALBUM 2
INSERT INTO albums(title, release_year, no_listens, artist_id) VALUES ('The_live_symphony', 1874, 38290, 2); --ALBUM 3

INSERT INTO songs(title, release_year, artist_id, album_id) VALUES ('Own_my_mind', 1324, 1, 1);
INSERT INTO songs(title, release_year,artist_id, album_id) VALUES ('Baby_said', 2023, 1, 2);
INSERT INTO songs(title, release_year,artist_id, album_id) VALUES ('Lover', 2024, 1, 1);
INSERT INTO songs(title, release_year,artist_id, album_id) VALUES ('Beggin', 2023, 1, 2);
INSERT INTO songs(title, release_year,artist_id, album_id) VALUES ('Hey_There', 2023, 1, 1);
INSERT INTO songs(title, release_year,artist_id, album_id) VALUES ('Going_deaf', 1826, 2, 3);
INSERT INTO songs(title, release_year,artist_id, album_id) VALUES ('Lead_Water', 1946, 2, 3);
INSERT INTO songs(title, release_year,artist_id, album_id) VALUES ('Fur Elise', 1635, 2, 3);
INSERT INTO songs(title, release_year,artist_id, album_id) VALUES ('Elise and her Revenge', 1736, 2, 3);
INSERT INTO songs(title, release_year,artist_id, album_id) VALUES ('I hate Elise', 2023, 2, 3);


