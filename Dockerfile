FROM node:alpine
MAINTAINER fnndsc "dev@babymri.org"

# Install bower and polymer-cli
RUN npm install -g bower
RUN npm install -g polymer-cli@0.18.0

# Install bower deps
RUN mkdir -p /src/website-deps
COPY bower.json /src/website-deps/
WORKDIR /src/website-deps
RUN bower install --allow-root

# Start dev server
WORKDIR /src/website
EXPOSE 8060
COPY ./docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["polymer", "serve", "--hostname", "0.0.0.0", "--port", "8060"]
