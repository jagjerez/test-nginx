FROM node:alpine
ENV NODE_ENV=production
COPY . .
RUN npm install --production
RUN ls .
CMD [ "npm", "start" ]