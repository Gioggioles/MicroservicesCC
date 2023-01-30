# Microservices

### Team members:
* Giorgio Orioles, github: Gioggioles, email: giorgio.orioles@grenoble-inp.org
* Beatrice Piras, github: bea8119, email: beatrice.piras@grenoble-inp.org

### Link to our github repository: 
https://github.com/Gioggioles/MicroservicesCC

### Objectives:
The objective of this laboratory is to generate an application following a microservices architecture with JHipster, then deploy it on GCP with Kubernetes.



### Prerequisites: 
Before proceeding, we followed the installation tutorial: https://github.com/mastering-microservices/tutorial_en/tree/main/install

That maily lead to the installation of:

* Jhipster and Jhipster generator
* Docker + Docker compose
* Heroku
* Kubectl


## Generation of the microservices application
The application generated is composed of:
* JHipster Service Registry ( port: 8761) :  a microservice registry that helps manage microservices in an application in jhipster
* the API gateway: a component in the JHipster platform that acts as a reverse proxy for microservices
* Three microservices (productorder, invoice, notification)

We generated the gateway using jhipster and specifying  the conditions wanted, such as the specification of the port where our server would be running (8080).

In a similar manner, we generated the three required microservices, choosing as noteable specifications:
* For productorder, port 8081 and an SQL database
* For invoice, port 8082 and postgresql database
* For notification, port 8083 and mongodb database



 After launching these services and applications and checking that everything was created smoothly (as shown in the figures below), we proceeded generating the various codes for frontend, microservices and building the Docker image.
 
 <p> <img title="fig 1"  width= "400" src="https://github.com/Gioggioles/MicroservicesCC/blob/master/github/screenshots/Schermata%20del%202023-01-30%2021-09-11.png">  
 <img title="fig 2"  width= "400" src="https://github.com/Gioggioles/MicroservicesCC/blob/master/github/screenshots/Schermata%20del%202023-01-30%2021-07-50.png"> </p>
 
 
 We also generated the docker-compose files needed and  then launched the  docker containers. 
 
 Here we show the list of all running containers in docker engine:
 
 <img title="fig 2"  width= "400" src="https://github.com/Gioggioles/MicroservicesCC/blob/master/github/screenshots/Schermata%20del%202023-01-30%2021-13-24.png">


## Deployment of the microservices on GCP with Kubernetes
First of all,  we generated a kubernetes descriptor microservice and we checked the generated files: 

<img title="a title" alt="proc" width="400" src="https://github.com/Gioggioles/MicroservicesCC/blob/master/github/screenshots/Schermata%20del%202023-01-30%2021-10-16.png">


