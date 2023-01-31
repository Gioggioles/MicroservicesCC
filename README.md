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
First of all,  we generated a kubernetes descriptor microservice and we checked the generated files using the "tree . " command:


<img title="a title" alt="proc" width="200" src="https://github.com/Gioggioles/MicroservicesCC/blob/master/github/screenshots/tree-kubernetes.png">

After logging inside of docker, we pushed the 4 images generated before (gateway, invoice, productorder, notification). This is the view of our repository in docker.com where the images reside.

<img title="a title" alt="proc" width="400" src="https://github.com/Gioggioles/MicroservicesCC/blob/master/github/screenshots/Schermata%20del%202023-01-30%2021-10-16.png">

We created a cluster into the GCE region europe-west1, named "tuto-cluster".

We now proceed launching the containers.
Here we report the addresses of the components:

<p><img title="a title" alt="proc" width="400" src="https://github.com/Gioggioles/MicroservicesCC/blob/master/github/screenshots/Schermata_1.png"> <img title="a title" alt="proc" width="500" src="https://github.com/Gioggioles/MicroservicesCC/blob/master/github/screenshots/Schermata_2.png"> </p>

### Scalability
To improve performances and fault tolerance of our service, we apply scalability to the productorder microservice, as shown in figure:

<img title="a title" alt="proc" width="400" src="https://github.com/Gioggioles/MicroservicesCC/blob/master/github/screenshots/Schermata%20del%202023-01-30%2020-36-56.png">

To have a further clarification, we show here how deploying the external IP address of the gateway our application is UP and in the productorder we can see that there are two nodes/servers running:

<img title="a title" alt="proc" width="400" src="https://github.com/Gioggioles/MicroservicesCC/blob/master/github/screenshots/Schermata_6.png">

We can notice how the productorder service is now associated to two different servers that refer to two different IP addresses.

### Monitoring of the dashboard
In order to obtain some representative metrics of the used resources and statistics of our application, we make use of the DCP dashboard.

Before starting the monitoring process through the use of DCP, we decided to analyze the metrics provided by the gateway application:


<img title="a title" alt="proc" width="500" src="https://github.com/Gioggioles/MicroservicesCC/blob/master/github/screenshots/Schermata_7.png">

Now we will analyze some of the metrics in the DCP Dashboard.

In this figure we show some representative metrics taking into consideration the whole cluster.
<img title="a title" alt="proc" width="500" src="https://github.com/Gioggioles/MicroservicesCC/blob/master/github/screenshots/Schermata_19.png">

We notice that we have a low to medium CPU usage but an high Memory usage.

Representation of memory usage of the 4 services and of the exposed register:
<img title="a title" alt="proc" width="500" src="https://github.com/Gioggioles/MicroservicesCC/blob/master/github/screenshots/memory_usage.png">

How we can see in the figure above, the microservice productorder shows a mean value ( 1000 MiB) which is double with respect to the other microservices.



In the next image, the graphs found in the upper part show the trend for CoreCPU (total, requested and allocatable)  And the (Total, Usage and Allocatable) Memory.

The graphs found in the lower part show the trend of average Bytes received/transmitted and the maximum Bytes received/transmitted in our container.

<img title="a title" alt="proc" width="500" src="https://github.com/Gioggioles/MicroservicesCC/blob/master/github/screenshots/Schermata_20.png">


## Conclusion 
We managed to develop a miscroservice architecture, thanks to the use of GCP and applying some features to enhance our performances, such as enabling scalability. The use of GCP, thanks to its fludity of use, lead us to manage more efficiently our application and to obtain (and be able to monitor) positive results. 


### Some considerations
We tried extensively working on the last point, the Load Injection, but we were unable to overcome a multitude of errors that lead us to not be able to continue our work.

