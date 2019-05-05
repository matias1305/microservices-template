# Template microservices (node + express) #

## Release notes ##
|    Modules   	| Version 	|
|:-----------:	|:-------:	|
| body-parser 	| ^1.19.0 	|
|     cors    	|  ^2.8.5 	|
|   express   	| ^4.16.4 	|

### tree files ###
```
/template
    | node_modules/
    | dist/
    | src/
      |____ class/
      |____ global/
      |____ routes/
      |____ global/
      |____ middleware/
      |____ index.ts
    | .dockerignore
    | .jshintrc
    | Dockerfile
    | package.lock.json
    | package.json
    | README.md
    | tsconfig.json
```


### Typescript compilation ###
```
tsc -w
```

### How to execute local? ###
node command
```
$ node dist/index.js
```

nodemon command
```
$ nodemon dist/index.js
```

### How to execute in Docker? ###
| Docker attribute |  Attribute  |
|:---------------: |:----------: |
| IMAGE 	       | node:alpine |
| PORT EXPOSE 	   |     8080    |

build Dockerfile
```
$ docker build -t micro/<name>:<tag> .
```

run container
```
$ docker run -d --name <name> -p 8080:8080 micro/<name>:<tag>
```