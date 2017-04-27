# fnndsc.babymri.org

- [Pre-requisites](#pre-requisites)
  - [Setup git](#setup-git)
  - [Install npm](#install-npm)
  - [Get the source code](#get-the-source-code)
- [For users](#for-users)
  - [Start the server](#start-the-server)
  - [Edit the content](#edit-the-content)
    - [General workflow](#general-workflow)
    - [Add a lab member](#add-a-member)
    - [Add a section (i.e. FNNDSC, MRI, etc.)](#add-a-section--ie-fnndsc--mri--etc-)
    - [Add a page within a section (i.e. Join a study, Overview, Team, etc.)](#add-a-page-within-a-section--ie-overview--team--etc-)
    - [Add a table of content in a page](#add-a-table-of-content-in-a-page)
  - [Save your changes to Github](#save-you-changes-to-github)
- [For developers](#for-developers)
  - [Get the polymer cli](#get-the-polymer-cli)
  - [Install the npm/bower dependencies](#install-the-npm-bower-dependencies)
  - [Start the default development server](#start-the-default-development-server)
  - [Build](#build)
  - [Preview the build](#preview-the-build)
  - [Run tests](#run-tests)
  - [Deploy](#deploy)

[Table of contents generated with markdown-toc](http://ecotrust-canada.github.io/markdown-toc/)


## Pre-requisites

### Make sure you have a local working directory on your machine

Please provide your username and the name of your machine to dev team for setup.

```bash
su -                                         # become 'root'
cd /home                                     # goto the local HDD directory called '/home'
mkdir <firstname>                            # create a directory called <firstname>
chown -R <username>:<usergroup> <firstname>  # make your user own this new dir
```

### Setup git

#### Create an account on Github

[Create Github account](https://github.com/join)

#### Let dev team know your Github username

#### Setup git credentials

    git config --global user.name johndoe
    git config --global user.email johndoe@example.com

### Install npm

[NPM Official Website](https://nodejs.org/en/download/)

### Get the source code

Use **git** to fetch the source code.

    cd /home/<firstname>
    mkdir src
    cd src
    git clone https://github.com/FNNDSC/fnndsc.babymri.org.git

## For users

### Start the server

``` diff
- If the command does not work, please contact the dev team.
```

This command serves the app at [http://localhost:8060](http://localhost:8060):

    cd /home/<firstname>/src/fnndsc.babymri.org
    npm run serve

Go to [http://localhost:8060](http://localhost:8060).

You should see the `FNNDSC Overview` of the website.

    Pro-tip: To stop the server, hit `control` + `c` keys at the same.

### Edit the content

#### General workflow

- Do your edits
- Save edits
- Refresh the page @ [http://localhost:8060](http://localhost:8060)

Your updates should be visible @ [http://localhost:8060](http://localhost:8060).

#### [Add a lab member](https://github.com/FNNDSC/fnndsc.babymri.org/wiki/add-member)

#### [Add a section (i.e. FNNDSC, MRI, etc.)](https://github.com/FNNDSC/fnndsc.babymri.org/wiki/add-section)

#### [Add a page within a section (i.e. Join a study, Overview, Team, etc.)](https://github.com/FNNDSC/fnndsc.babymri.org/wiki/add-page)

#### [Add a table of content in a page](https://github.com/FNNDSC/fnndsc.babymri.org/wiki/add-toc)

### Save your changes to github

``` diff
- If the command does not work, please contact the dev team.
```

Replace `message content` by a summary of the modifications you did.

    cd /home/<firstname>/src/fnndsc.babymri.org 
    MESSAGE="message content" npm run save

    # for instance:
    # MESSAGE="Modified FNNDSC overview" npm run save

This will push the changes you made up to the master repository. This will not update the live website. To update the live website, let the dev team know.

## For developers

### Get the polymer cli

    npm install -g polymer-cli

### Install the npm/bower dependencies

    cd fnndsc.babymri.org/ && \
    bower install && \
    npm install

### Start the default development server

This command serves the app at [http://localhost:8080](http://localhost:8080):

    polymer serve

### Build

This command builds the app at `/build/`. There is a `bundled` and `unbundled` build (for HTTP2). We currently use the `bundled` build.

    polymer build

### Preview the build

    polymer serve build/bundled

### Run tests

    polymer test

### Deploy

This command builds the app at `/build/` then pushes `/build/bundled/` to the `gh-pages`.

    npm run deploy
