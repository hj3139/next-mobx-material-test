FROM node:alpine

WORKDIR /usr/app

RUN npm install --global pm2

COPY ./package*.json ./

RUN npm install 

COPY ./ ./


EXPOSE 3000

USER node

# Run npm start script when container starts
CMD [ "pm2-runtime", "npm", "--name", "gachisaja-client", "--", "start" ]