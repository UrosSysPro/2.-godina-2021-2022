------------------------------------------------------
--- CREATE TABLE UPITI ---
------------------------------------------------------

CREATE TABLE brend
(
	id_brenda int identity(1,1) PRIMARY KEY,
	naziv VARCHAR(30) NOT NULL
)

CREATE TABLE klub
(
	id_kluba int identity(1,1) PRIMARY KEY,
	naziv VARCHAR(30) NOT NULL,
	liga VARCHAR(30) NOT NULL,
	grad VARCHAR(30) NOT NULL,
	drzava VARCHAR(30) NOT NULL,
	budzet int NOT NULL,
	id_brenda int NOT NULL REFERENCES brend(id_brenda)
)

CREATE TABLE igrac
(
	id_igraca int identity(1,1) PRIMARY KEY,
	ime VARCHAR(30) NOT NULL,
	prezime VARCHAR(30) NOT NULL,
	broj_dresa int NOT NULL,
	pozicija VARCHAR(30) NOT NULL,
	id_kluba int NOT NULL REFERENCES klub(id_kluba)
)

CREATE TABLE sponzor
(
	id_sponzora int identity(1,1) PRIMARY KEY,
	naziv VARCHAR(30) NOT NULL
)

CREATE TABLE klub_sponozr
(
	id_sponzorstva int identity(1,1) PRIMARY KEY,
	id_kluba int NOT NULL REFERENCES klub(id_kluba),
	id_sponzora int NOT NULL REFERENCES sponzor(id_sponzora)
)

------------------------------------------------------
--- INSERT INTO UPITI ---
------------------------------------------------------

INSERT INTO brend(naziv) VALUES
('Nike'),
('Adidas'),
('Puma')



INSERT INTO klub(naziv,liga,grad,budzet,drzava, id_brenda) VALUES
('Bayern Munchen','Bundes liga', 'Munchen', 900000, 'Nemacka',2),
('Borussia Dortmund', 'Bundes Liga', 'Dortmund', 200000, 'Nemacka', 3),
('Red Bull Leipzig', 'Bundes Liga', 'Leipzig', 200000, 'Nemacka', 1),
('Chelsea', 'Premier liga', 'London', 900000, 'Engleska',1),
('Arsenal', 'Premier liga', 'London', 400000, 'Engleska',2),
('Crystal Palace', 'Premier liga', 'London', 100000, 'Engleska', 3),
('Liverpool', 'Premier liga', 'Liverpool', 800000, 'Engleska', 1),
('Everton', 'Premier liga', 'Liverpool', 200000, 'Engleska', 2),
('Real Madrid', 'La Liga', 'Madrid', 900000, 'Spanija', 2),
('Barselona', 'La Liga', 'Barselona', 900000, 'Spanija', 1)



INSERT INTO igrac (ime,prezime,broj_dresa,pozicija,id_kluba) VALUES
('Robert','Lewandovski',9,'napadac',1),
('Manuel','Neuer',1,'golman',1),
('Joshua','Kimmich',5,'vezni',1),
('Erling','Halland',7,'napadac',2),
('Mats','Hummels',3,'odbrambeni',2),
('Marco','Reus',7,'napadac',2),
('Dani','Olmo',18,'vezni',3),
('Kai','Havertz',6,'napadac',4),
('Mason', 'Mount', 7, 'vezni',4),
('Antonio','Rudiger',10,'odbrambeni',4),
('Aron', 'Ramsdale', 1, 'golman', 5),
('Emil','Smith-Row',4,'vezni', 5),
('Luka','Milivojevic',11,'odbrambeni',6),
('Mohamed','Salah',10,'napadac',7),
('Sadio', 'Mane', 7, 'napadac',7),
('Alisson','Becker',2,'golman',7),
('Lucas','Digne',15,'odbrambeni',8),
('Jery','Mina',16,'odbrambeni',8),
('Karim','Benzema',9,'napadac',9),
('Luka','Modric',10, 'vezni',9),
('Toni', 'Kroos', 7, 'vezni', 9),
('Philippe','Coutinho',4,'vezni',10),
('Ansu','Fati',20,'napadac',10)