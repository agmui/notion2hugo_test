---
sys:
  pageId: "254da3bc-6297-803b-850f-e5f35d3b90c2"
  createdTime: "2025-08-19T09:09:00.000Z"
  lastEditedTime: "2025-08-20T08:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_Docker(for Robomasters)/Docker jetson guide.md"
title: "Docker jetson guide"
date: "2025-08-20T08:06:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 201
toc: false
icon: ""
---

[What is Docker?](https://docs.docker.com/get-started/docker-overview/)

[Yolo Docker guide](https://docs.ultralytics.com/guides/nvidia-jetson/)

An oversimplified explanation of Docker is that Docker is like a VM. You are able to create images with Dockerfiles that install library or dependencies. Then compile them into containers and they will run the same every time. This is useful say if you only meet twice a week and forgot what you installed on the jetsons. You can just read the Dockerfile to see what the container holds.

{{% alert icon=”warning” %}}

Depending on how you set up your container nothing will be saved once the container finish running

{{% /alert %}}

The next few guides go over our robotics team Docker setup for Robomasters 

### Dockerfile overview

[official Dockerfile docs](https://docs.docker.com/build/concepts/dockerfile/)

The main commands you should know are `RUN` and `FROM`

`FROM` uses someone else's docker image that has been prebuilt and is a jumping off point for you to build off of.

`RUN` think of run as running the command in the container.

Make a file called `Dockerfile` and paste this example setting up `ultralytics` for jetson jetpack5:

```docker
FROM ultralytics/ultralytics:latest-jetson-jetpack5

RUN apt-get update && \
    apt-get install sudo -y 

# Install Git
RUN sudo apt-get install -y git

# installing CV dependencies 
RUN pip install \
    crc \
    transforms3d \
    pyserial \
    opencv-python  \
    opencv-contrib-python \
    scipy \
    pyrealsense2
    

```

To build the `Dockerfile` in the same folder run:

```docker
docker build -t my-image .
```

Then to run the image:

```docker
docker run -it my-image bash
```

> The `-it` flag means running the container in “_interactive mode_” so you are able to do things in the container

If you run `pip freeze` you should see all the pip dependencies installed

To exit press **Ctrl+D**

The next few guides go over more settings for Docker such as passing though USB, cameras (realsense), folders, and windows.
