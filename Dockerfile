FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY . . 
CMD ["npm","start"]

#sudo docker build -t willyrex/nodehttpserver:latest .
#sudo docker run -it -p 9090:9090 willyrex/nodehttpserver