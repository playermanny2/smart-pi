FROM arm32v7/node:carbon-jessie

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8000

CMD [ "npm", "start" ]
