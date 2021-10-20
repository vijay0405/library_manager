# library_manager


## Run the example with Docker

Install Docker from the [download page](https://hub.docker.com/search/?type=edition&offering=community) if you haven't already.

Clone the branch you are interested in.

Open up a terminal at the project root and run:

```bash
> docker-compose up
```

The images will be built/downloaded and the Docker containers will start.

Once everything is up and running visit `localhost:3003` to use the example.

### Shut down

Press `Ctrl + c` in the terminal window running the application. 

Run the following command to destroy and remove the Docker containers:

```bash
> docker-compose down
```

### Making changes

After you made changes to the code you have to rebuild the Docker images before starting the containers. Do this by running the following in the root of the application:

```bash
> docker-compose build
> docker-compose up
```

or

```bash
> docker-compose up --force-recreate
```
