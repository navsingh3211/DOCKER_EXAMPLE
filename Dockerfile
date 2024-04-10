FROM node:20-alpine

WORKDIR /src

COPY package* .

COPY ./prisma .

RUN npm install

RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node","dist/index.js"]