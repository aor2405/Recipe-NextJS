CREATE DATABASE pernrecipe;

CREATE TABLE recipe(
    recipe_id SERIAL PRIMARY KEY, 
    title VARCHAR(255),
    description VARCHAR(255),
    method VARCHAR(255),
    ingredients VARCHAR(255)
);

UPDATE recipe
    SET column1 = recipe_id SERIAL PRIMARY KEY, 
    column2 = title VARCHAR(255),
    column3 = description VARCHAR(255),
    column4 = method VARCHAR(255),
    column5 = ingredients VARCHAR(255)
