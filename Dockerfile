FROM node:7
MAINTAINER fnndsc "dev@babymri.org"

# Install bower and polymer-cli
RUN npm install -g bower polymer-cli

RUN useradd --user-group --create-home --shell /bin/false fnndsc
ENV HOME=/home/fnndsc

COPY bower.json $HOME/src/
RUN chown -R fnndsc:fnndsc $HOME/*

USER fnndsc
WORKDIR $HOME/src
RUN bower install

# Start dev server
EXPOSE 8060
CMD ["polymer", "serve", "--hostname", "0.0.0.0", "--port", "8060"]
