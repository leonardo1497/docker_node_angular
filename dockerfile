# Angular
FROM johnpapa/angular-cli as angular-app

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN ng build --prod

#Express 
FROM node:10-alpine as express-server
WORKDIR /app
COPY /src/server /app
RUN npm install --production

#Final
FROM node:10-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=express-server /app /usr/src/app
COPY --from=angular-app /app/dist /usr/src/app

EXPOSE 3000
CMD [ "node", "index.js" ]