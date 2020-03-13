CREATE DATABASE job;

\c job

CREATE TABLE jobs (
    id serial PRIMARY KEY,
    title text,
    job_description varchar(300),
    company text,
    date_posted date,
    compensation varchar(30)
);

-- data obtained through registration (req)
CREATE TABLE bookmarks (
    id serial PRIMARY KEY,
    bookmarked boolean
);

-- data parsed from scraper
CREATE TABLE applicants (
    id serial PRIMARY KEY,
    job_id int,
    bookmark_id int,
    name text,
    email varchar(50),
    password varchar(50),
    FOREIGN KEY (job_id) REFERENCES jobs(id),
    FOREIGN KEY (bookmark_id) REFERENCES bookmarks(id)
);

-- Sample data/filler for testing
INSERT INTO jobs (title, job_description, company, date_posted, compensation)
    VALUES (
    'Fullstack Developer', 
    'We present fellow candidates an opportunity of a lifetime with a company in the heart of Atlanta...', 
    'Indigo LLC', 
    '2020-01-20',
    '$45/hr'
    ),

    ('Senior Developer',
    'Requirements: 15+ years of Ruby, Java, cleaning, Python...',
    'Best Company',
    '2019-10-10',
    'DOE'
    );

INSERT INTO bookmarks(bookmarked)
    VALUES (
    false),

    (false);

INSERT INTO applicants (job_id, bookmark_id, name, email, password)
    VALUES (
    1, 
    1, 
    'Jeremy', 
    'bioshockfan@hotmail.com', 
    'secretlynotafan2'),

    (2, 
    2,
    'Hunter',
    'oldiemustang9@yahoo.com',
    'vroom');




