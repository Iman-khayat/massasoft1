FROM node:latest 

WORKDIR /app 

RUN npm install

COPY . . 

EXPOSE 4000

CMD [ "npm","start" ]