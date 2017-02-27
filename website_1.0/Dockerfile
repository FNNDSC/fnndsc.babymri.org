FROM node:latest
MAINTAINER fnndsc "dev@babymri.org"

# Install bower and gulp
RUN npm install -g bower gulp

# Install deps
RUN mkdir -p /src/fnndsc.babymri.org-deps
COPY .bowerrc /src/fnndsc.babymri.org-deps/
COPY bower.json /src/fnndsc.babymri.org-deps/
COPY package.json /src/fnndsc.babymri.org-deps/
WORKDIR /src/fnndsc.babymri.org-deps
RUN bower install --allow-root
RUN npm install

# Start dev server
WORKDIR /src/fnndsc.babymri.org
EXPOSE 80
EXPOSE 22
EXPOSE 443
EXPOSE 5000
COPY ./docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["gulp", "serve"]
