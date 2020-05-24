DROP DATABASE IF EXISTS shmetsy;

CREATE DATABASE shmetsy;

CREATE TABLE schema."images"(
    Id int,
    url1 varchar(100),
    url2 varchar(100),
    url3 varchar(100),
    url4 varchar(100),
    url5 varchar(100),
    url6 varchar(100),
    url7 varchar(100),
    url8 varchar(100),
    url9 varchar(100),
    url10 varchar(100),
    url11 varchar(100),
    url12 varchar(100),
    url13 varchar(100),
    url14 varchar(100),
    url15 varchar(100),
    url16 varchar(100),
    
)


SELECT * from schema."images"



COPY schema."images" FROM '/home/jimena/Desktop/Shmetsy-carousel/database/product.csv' DELIMITER ',' csv