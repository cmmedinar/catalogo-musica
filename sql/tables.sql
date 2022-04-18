CREATE TABLE catalog (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	artist VARCHAR(255) NOT NULL,
	album VARCHAR(255) NOT NULL,
	year_album VARCHAR(4) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

INSERT INTO catalog (artist, album, year_album) VALUES (
	"AC/DC", "Back in black", "1970"
);

SELECT id, artist, album, year_album FROM catalog