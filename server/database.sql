CREATE TABLE user_ (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    isActivated BOOLEAN DEFAULT FALSE,
    activationLink VARCHAR(255)
);

CREATE TABLE token (
    id SERIAL PRIMARY KEY,
    refresh_token VARCHAR(255) NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES user_ (id)
);
