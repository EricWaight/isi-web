FROM node as build

WORKDIR /project

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./package-lock.json ./

RUN npm install
RUN npm i -g @angular/cli@10.0.4

COPY . /project
RUN ng build --output-path=dist

FROM nginx

RUN rm -f /etc/nginx/conf.d/*
COPY ./docker/nginx/ /etc/nginx/conf.d/
COPY --from=build /project/dist  /www/data/isi/

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
