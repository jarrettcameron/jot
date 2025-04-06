FROM node:alpine AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ ./ 

FROM nginx:alpine AS production-stage

COPY --from=build-stage /app /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]