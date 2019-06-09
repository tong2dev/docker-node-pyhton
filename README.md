# DOCKER
# Create Container
cd DOCKER
$ docker-compose up -d

# Start Service Node
$ docker exec -it node sh
$ run npm i && npm start
open http://localhost:4000

# Start Service Python
$ docker exec -it python sh
$ pip install flask pytz && python3 app.py
open http://localhost:5000

# Start Service Bot Request
$ docker exec -it bot_request sh
set ip service node & python in `index.js`
$ npm i && npm start
open http://localhost:3000

# Use Portainer
$ docker volume create portainer_data
$ docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
open http://localhost:9000
