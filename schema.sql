-- Drop any tables with these table names before loading
DROP TABLE IF EXISTS ca_homeprice;

-- Create the CA Home Price estimate table & check table data import
CREATE TABLE "ca_homeprice" (
    "county" VARCHAR(50) NOT NULL,
    "house_type" VARCHAR(50) NOT NULL,
    "est_price" DEC NOT NULL,
    "zipcode" INT,
    "lat"  DEC,
    "lng" DEC,
);
    
SELECT 
	* 
FROM 
    "ca_homeprice";



