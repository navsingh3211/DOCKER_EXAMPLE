Step 20 - Volumes
If you restart a mongo docker container, you will notice that your data goes away. 
This is because docker containers are transitory (they don’t retain data across restarts)
Without volumes

Start a mongo container locally

docker run -p 27017:27017 -d mongo

Open it in MongoDB Compass and add some data to it


Kill the container
docker kill <container_id>

Restart the container
docker run -p 27017:27017 -d mongo

Try to explore the database in Compass and check if the data has persisted (it wouldn’t)
 
With volumes
Create a volume
docker volume create volume_database

Mount the folder in mongo which actually stores the data to this volume

docker run -v volume_database:/data/db -p 27017:27017 mongo

Open it in MongoDB Compass and add some data to it


Kill the container

docker kill <container_id>

Restart the container

docker run -v volume_database:/data/db -p 27017:27017 mongo

Try to explore the database in Compass and check if the data has persisted (it will!)
