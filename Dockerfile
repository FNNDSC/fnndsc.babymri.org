FROM node:latest
MAINTAINER fnndsc "dev@babymri.org"

# Install bower and polymer-cli
RUN npm install -g bower polymer-cli

# Install bower deps
RUN mkdir -p /src/website-deps
COPY bower.json /src/website-deps/
WORKDIR /src/website-deps
RUN bower install --allow-root

# Start dev server
WORKDIR /src/website
EXPOSE 8080
COPY ./docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["polymer", "serve", "--hostname", "0.0.0.0"]
