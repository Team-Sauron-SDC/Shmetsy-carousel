
DROP DATABASE IF EXISTS shmetsy;

CREATE DATABASE shmetsy;

USE shmetsy;

CREATE TABLE colors (
  id INTEGER AUTO_INCREMENT,
  product_id INTEGER NOT NULL,
  color_name TEXT,
  color_url TEXT,
  PRIMARY KEY (ID)
);


CREATE TABLE colors_enlarged (
  id INTEGER AUTO_INCREMENT,
  product_id INTEGER NOT NULL,
  color_name TEXT,
  color_url TEXT,
  PRIMARY KEY (ID)
);

INSERT INTO colors_enlarged (id, product_id, color_name, color_url) VALUES (1, 1, "Black", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasksenlarge/1.jpg");
INSERT INTO colors_enlarged (id, product_id, color_name, color_url) VALUES (2, 1, "White", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasksenlarge/2.jpg");
INSERT INTO colors_enlarged (id, product_id, color_name, color_url) VALUES (3, 1, "Caribbean Blue", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasksenlarge/3.jpg");
INSERT INTO colors_enlarged (id, product_id, color_name, color_url) VALUES (4, 1, "Royal", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasksenlarge/4.jpg");
INSERT INTO colors_enlarged (id, product_id, color_name, color_url) VALUES (5, 1, "Light Blue", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasksenlarge/5.jpg");
INSERT INTO colors_enlarged (id, product_id, color_name, color_url) VALUES (6, 1, "Purple", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasksenlarge/6.jpg");
INSERT INTO colors_enlarged (id, product_id, color_name, color_url) VALUES (7, 1, "Orange", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasksenlarge/7.jpg");
INSERT INTO colors_enlarged (id, product_id, color_name, color_url) VALUES (8, 1, "Pink", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasksenlarge/8.jpg");

INSERT INTO colors (id, product_id, color_name, color_url) VALUES (1, 1, "Black", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasks/1.jpg");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (2, 1, "White", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasks/2.jpg");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (3, 1, "Caribbean Blue", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasks/3.jpg");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (4, 1, "Royal", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasks/4.jpg");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (5, 1, "Light Blue", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasks/5.jpg");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (6, 1, "Purple", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasks/6.jpg");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (7, 1, "Orange", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasks/7.jpg");
INSERT INTO colors (id, product_id, color_name, color_url) VALUES (8, 1, "Pink", "https://hrr45fec.s3-us-west-1.amazonaws.com/newmasks/8.jpg");

