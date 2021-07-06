#!/bin/bash
#
# Download and process 2010 census tract data into a single shapefile.

for i in $(seq -w 1 56)
do 
    curl -O "https://www2.census.gov/geo/tiger/TIGER2010/TRACT/2010/tl_2010_${i}_tract10.zip"
done

find . -type 'f' -size -18k -delete

unzip '*.zip'

ogr2ogr -f 'ESRI Shapefile' merge-2010.shp tl_2010_01_tract10.shp
for i in $(seq -w 2 56)
do 
    ogr2ogr -f 'ESRI Shapefile' -update -append merge-2010.shp "tl_2010_${i}_tract10.shp" -nln merge-2010; 
done

rm tl_*