FROM dockerdrivemecrazy/bds-web-data:latest-dev

# Bundle app source
WORKDIR /usr/src/app/.next

ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]
