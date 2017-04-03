FROM nginx:alpine
MAINTAINER "bbpink" <ssbbpink@gmail.com>
RUN mkdir -p /opt/root
COPY index.html /opt/root
COPY index.css /opt/root
COPY index.js /opt/root
EXPOSE 80
