FROM node

WORKDIR /app

COPY . ./

RUN npm ci

RUN npx vite build

CMD ["npm", "run", "dev"]
