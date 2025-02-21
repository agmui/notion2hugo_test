---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA6PIJQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPOAmBnU6IJ0e%2FoxV%2FIaEurtd2wkbMKPx405CeoGf7SAiBjIoKTdesVLxs2S6lwXL2we58b627OHeEaS428t1CEqSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiNbaKTWYLlixdVp%2FKtwDKEFTelsbuAymQ3nG7XpianmSBRfc9Xrr5fUjKkJaFpR1PpWuvp78fQZezCdqHsjHiwQwqeXg3wHaZ5WJ%2BD2%2Be0vPCjm7D1ulqO5jXDo1hRoCcTia4YxJgaDGzhwSFrFxVXZ%2B9lSX1I3A9M6dph3uHlBqslJLJS4K7Hnv29%2FeeKCP1I2oVwT1%2Bh6bjHT4c3ybrpeZMhRH7xLfxXkBKW0XfYmkHIlcwa7EzZrZvw962Yu0ZdebjB%2Fo%2BBRba%2FwMPkMr50AVIzUEPuUHcZbyhNeS2IIf4jj8NfdIB4FO62cmCZ16zNpYcHsO5fHGvurBcFjLXZZi3K%2BW3pH6%2BScJPFV0EMS3UiCzJeGTK42hvmc%2FS%2BqwiukFT5GOzoY8kURAfukiYd2pvINntuUwKmSHGOhwYWARTCfA3Jho8%2BQTSng0iL59Um3Q6Rd8atPJwQ0fcG3ZRKgI3CC4TDBJHJHZ4YOA%2BNvVg8%2F1C%2FKqHEXw%2BPLVPH%2B1Bsuos0XQvvGH0ORap%2BNkzHD8zBOZ5BUH17N3Z3h9dVPPa5c5ZnMg3cE4nzb3UmznfwVfUXrtq4JiMohpOgzuIOwsCR32a%2BFUueJR76u9phG4CwSF51w7txA196BQcJGVDbsZo7B8XfiD7I0w%2F4HivQY6pgEpKriqndZVEnj8RcUloymcGO7072as1i4svIp26BFqVQ8twQUWD5M2abURUboYaKiqSD6xluVbfUUnTss09NoTGZkXTdLqvYwwbGqVO1hNUCvPI7hI9lgEPtoUDu2Ij5eAx3oBMV49BGMNPvaUkw5cBu1CTHdU3rCTZOwbUGP7YwaSnzeHH2AgicsXWgVxAJvkV51Um9btyWS6s7CELuFX2ScrYfF6&X-Amz-Signature=3fdcebb66529fb3d32ab00e89dbfa86c055e0c4460a88ffcf378f294135594c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA6PIJQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPOAmBnU6IJ0e%2FoxV%2FIaEurtd2wkbMKPx405CeoGf7SAiBjIoKTdesVLxs2S6lwXL2we58b627OHeEaS428t1CEqSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiNbaKTWYLlixdVp%2FKtwDKEFTelsbuAymQ3nG7XpianmSBRfc9Xrr5fUjKkJaFpR1PpWuvp78fQZezCdqHsjHiwQwqeXg3wHaZ5WJ%2BD2%2Be0vPCjm7D1ulqO5jXDo1hRoCcTia4YxJgaDGzhwSFrFxVXZ%2B9lSX1I3A9M6dph3uHlBqslJLJS4K7Hnv29%2FeeKCP1I2oVwT1%2Bh6bjHT4c3ybrpeZMhRH7xLfxXkBKW0XfYmkHIlcwa7EzZrZvw962Yu0ZdebjB%2Fo%2BBRba%2FwMPkMr50AVIzUEPuUHcZbyhNeS2IIf4jj8NfdIB4FO62cmCZ16zNpYcHsO5fHGvurBcFjLXZZi3K%2BW3pH6%2BScJPFV0EMS3UiCzJeGTK42hvmc%2FS%2BqwiukFT5GOzoY8kURAfukiYd2pvINntuUwKmSHGOhwYWARTCfA3Jho8%2BQTSng0iL59Um3Q6Rd8atPJwQ0fcG3ZRKgI3CC4TDBJHJHZ4YOA%2BNvVg8%2F1C%2FKqHEXw%2BPLVPH%2B1Bsuos0XQvvGH0ORap%2BNkzHD8zBOZ5BUH17N3Z3h9dVPPa5c5ZnMg3cE4nzb3UmznfwVfUXrtq4JiMohpOgzuIOwsCR32a%2BFUueJR76u9phG4CwSF51w7txA196BQcJGVDbsZo7B8XfiD7I0w%2F4HivQY6pgEpKriqndZVEnj8RcUloymcGO7072as1i4svIp26BFqVQ8twQUWD5M2abURUboYaKiqSD6xluVbfUUnTss09NoTGZkXTdLqvYwwbGqVO1hNUCvPI7hI9lgEPtoUDu2Ij5eAx3oBMV49BGMNPvaUkw5cBu1CTHdU3rCTZOwbUGP7YwaSnzeHH2AgicsXWgVxAJvkV51Um9btyWS6s7CELuFX2ScrYfF6&X-Amz-Signature=0ec1892bf35b6e35c5141e91b5205b64a5fb9b185ae8108e5fe3a5bd6c8ea950&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
