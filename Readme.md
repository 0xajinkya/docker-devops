docker build .
docker image rm __docker__image__id
docker build -t __docker__image__name .
docker run __docker__image__name
docker image ls
docker run -d --name __docker __container__name __docker__image__name
docker ps
docker container ls
docker rm __docker__container__name -f
docker run -p __external__port:__app__port -d --name __docker__image__name docker__image__name
docker exec -it __docker__container__name bash
docker run -v pathtofolderonlocalmachine:pathtofolderoncontainer  -p 3000:3000 --name __docker__cont__name __docker__img__name
docker run -v %cd%:pathtofolderoncontainer  -p 3000:3000 -d --name __docker__cont__name __docker__img__name
docker logs __docker__container__name
docker run -v E:/"Github Repos"/docker-tuts/:/app -v /app/node_modules  -p 3000:3000 --name node-app node-img