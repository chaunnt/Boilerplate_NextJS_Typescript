FROM node:12.22

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

## Install package dependencies
RUN apt-get update

# Install app dependencies
COPY . /usr/src/app/

RUN npm install

# TODO: Apply production environments
# RUN mv .env.production .env

#RUN npm install --production
# RUN npm run build

# Bundle app source
# WORKDIR /usr/src/app/.next

ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]
