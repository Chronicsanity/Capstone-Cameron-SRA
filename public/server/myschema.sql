
CREATE DATABASE sra_db;


USE sra_db;

CREATE TABLE prop_users(
    prop_username VARCHAR(100) NOT NULL PRIMARY KEY, 
    prop_pass VARCHAR(100) NOT NULL,
    reg_email VARCHAR (100) NOT NULL,
    req_access VARCHAR(10)
);


CREATE TABLE users(
    username VARCHAR(100) NOT NULL PRIMARY KEY, 
    pass VARCHAR(100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    access VARCHAR(10) NOT NULL
);

CREATE TABLE callSheets(
    t_number VARCHAR(9) NOT NULL PRIMARY KEY,
    first_name  VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255),
    last_name VARCHAR(255) NOT NULL,
    term VARCHAR(255) NOT NULL,
    ed_level VARCHAR(1) NOT NULL,
    prim_program VARChAR(255) NOT NULL,
    prim_prog_name VARCHAR(255) NOT NULL,
    prim_college VARCHAR(255) NOT NULL,
    prim_dept VARCHAR(255),
    prim_dept_desc VARCHAR(255),
    sec_program VARCHAR(255),
    sec_prog_name VARCHAR(255),
    sec_college VARCHAR(255),
    sec_dept VARCHAR(255),
    sec_dept_desc VARCHAR(255),
    decision VARCHAR(255) NOT NULL,
    admit_date VARCHAR(10) NOT NULL,
    st_ad_1 VARCHAR(255) NOT NULL,
    st_ad_2 VARCHAR(255),
    st_ad_3 VARCHAR(255),
    city_ad VARCHAR(255) NOT NULL,
    state_ad VARCHAR(255),
    zip_code VARCHAR(255) NOT NULL,
    phone_area_code VARCHAR(3) NOT NULL,
    phone_number VARCHAR(8) NOT NULL,
    phone_extension VARCHAR(10),
    email VARCHAR(255) NOT NULL,
    ualr_email VARCHAR(255) NOT NULL,
    ethnicity VARCHAR(100),
    sex CHAR(1),
    admission_type VARCHAR(100) NOT NULL,
    student_type VARCHAR(100) NOT NULL
);

SELECT * FROM users;
