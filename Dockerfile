FROM node:18-alpine
WORKDIR /opt/render/project/src
COPY src/package*.json ./
RUN npm install
COPY src/ ./
EXPOSE 3000
CMD ["node", "server.js"]
