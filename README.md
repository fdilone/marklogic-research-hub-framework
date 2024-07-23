# Research Hub

## Overview
The Research Hub is an extendable application for loading entities and providing a UI for searching and viewing the data for them. It uses DataHub and Entity Services for ingesting and harmonizing, and Grove React for the front end.

## Getting Started
There are two main steps to use this application:
1. Install Research Hub
2. Install the domain you want to use (found in the examples directory or create your own)

## 1. Install Research Hub
#### Prerequites
1. MarkLogic 11.2.0
2. Node v20.15.1
3. npm 10.7.0
4. Download Node.js [https://nodejs.org/en/download/package-manager]

#### 1.1 Prepare local environment

It is recommended to use the default ports, DB names, and App Server names defined in the **gradle.properties** file.  Use our pre-configured Docker setup if you have conflicts with your local MarkLogic instance.

### 1.3 Install UI

    `cd ui`
    `npm install`


## Running the UI
After installing Research Hub and a domain, you can start the ui using:

    `cd ui`
    `npm start`
    
If the start fails, it may be necessary to install the nodemon (Node Monitor), cross-env, and concurrently packages with `npm install nodemon`, `npm install cross-env`, and `npm install concurrently` respectively from the ui directory. Typically, these are installed with `-g` option which makes the packages globally available across all projects.

## Running Tests
After installing Research Hub and a domain, you can run any tests that were created by going to http://localhost:8015/test/ (or http://localhost:8115/test/ if using our Docker setup), and using the UI there to run tests.
