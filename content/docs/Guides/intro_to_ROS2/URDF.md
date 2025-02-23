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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWJBJBY5%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNc4yOOvTTfgNpQ6HrjzUz1G0mDiKkx7lDoveoKBwK0gIgK4dwMq1qpjPH7gvSgYZGVuf%2F7%2Bl9Jll5y4zMHGjTGRMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKt5ZThXk7UnsYhIjircA7GhQUDf2UBAIJBpv8%2F%2F%2BKIgB7mCwHst86U3pLlxyGXQ7CHwmn4joOwfU2gC%2BPLzm2Sdvm0lrC7r03aWWljRKIevbbA7cLTjfcK%2BIN1ah7%2Bj2nOh4deX42XpNz3shEetv7O8ifPDDzOwexXKS1KTEfemk8VKeuLtQ4gahN85Q9j2vogY0pLQmzkWFiRi%2B9qv0yJ%2B%2FKHoe86skwAX82YgWg23DhLcl%2B5PXBJXCYWJY2a6qLnxynC2Bzdq0mGfq1ZevySMbSu0VIcDP3584zRrA0dlQ5uHVG6u63SGw6PQjzMnS4989BwRtXvnnODx4bH1Q7nxtXhm1Jsfc4FX1PAQCq1pdT4r6SEh9aF2LMQnKBsaNrxGIbMk5F%2FODuMqWSZIv5kecoPZEbV2EzdgeiruXQt1%2Fg3HYfkXAekHzrN61fhITwe1SkEsn6b3CU%2FsZO%2FFA65XBHovKHN1ToEabdGKXWHMFkquYLksWAiqE7Tr%2BOcDxcHDMS5nPvHrcJ2NZHJXgU1AX7rWgc9QbSBZ8Pg57HsQnEvD7Pj2deuoTyDPJ4YZH5OiITacp%2BO5q2VMn%2FGB5em8qlYXV8I6mc%2F6TtLo4b3FPBNO8IKKRPx3HGJEmTN6cg6hlz0OyC4i5D21MKe67L0GOqUBTdL8827YD1%2Fno8qj23aa0%2BXniTZgCRXD9H5tSmLz9NNIJGoMwuNaBqd3Y%2Bp%2F%2FJkIy6ATl4d7h4eWIUcYsVAiYTxQPy1ZfaGnO8lGxUZN9ogJXLazmsRAHyLwVDUOrkSAddNG14kzhshdDrfazoV5b2iu%2BuO2t8N6TfTg%2BpTWg0YxMSkaDmowJS0sApppy6Ke4RwnwrBaVwjx%2Fw21hqdj6EGrvgos&X-Amz-Signature=6ac2f07482a0b430d57d8422dbc387e1660fbc7dcb55687b0a5a9f2157264408&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWJBJBY5%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNc4yOOvTTfgNpQ6HrjzUz1G0mDiKkx7lDoveoKBwK0gIgK4dwMq1qpjPH7gvSgYZGVuf%2F7%2Bl9Jll5y4zMHGjTGRMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKt5ZThXk7UnsYhIjircA7GhQUDf2UBAIJBpv8%2F%2F%2BKIgB7mCwHst86U3pLlxyGXQ7CHwmn4joOwfU2gC%2BPLzm2Sdvm0lrC7r03aWWljRKIevbbA7cLTjfcK%2BIN1ah7%2Bj2nOh4deX42XpNz3shEetv7O8ifPDDzOwexXKS1KTEfemk8VKeuLtQ4gahN85Q9j2vogY0pLQmzkWFiRi%2B9qv0yJ%2B%2FKHoe86skwAX82YgWg23DhLcl%2B5PXBJXCYWJY2a6qLnxynC2Bzdq0mGfq1ZevySMbSu0VIcDP3584zRrA0dlQ5uHVG6u63SGw6PQjzMnS4989BwRtXvnnODx4bH1Q7nxtXhm1Jsfc4FX1PAQCq1pdT4r6SEh9aF2LMQnKBsaNrxGIbMk5F%2FODuMqWSZIv5kecoPZEbV2EzdgeiruXQt1%2Fg3HYfkXAekHzrN61fhITwe1SkEsn6b3CU%2FsZO%2FFA65XBHovKHN1ToEabdGKXWHMFkquYLksWAiqE7Tr%2BOcDxcHDMS5nPvHrcJ2NZHJXgU1AX7rWgc9QbSBZ8Pg57HsQnEvD7Pj2deuoTyDPJ4YZH5OiITacp%2BO5q2VMn%2FGB5em8qlYXV8I6mc%2F6TtLo4b3FPBNO8IKKRPx3HGJEmTN6cg6hlz0OyC4i5D21MKe67L0GOqUBTdL8827YD1%2Fno8qj23aa0%2BXniTZgCRXD9H5tSmLz9NNIJGoMwuNaBqd3Y%2Bp%2F%2FJkIy6ATl4d7h4eWIUcYsVAiYTxQPy1ZfaGnO8lGxUZN9ogJXLazmsRAHyLwVDUOrkSAddNG14kzhshdDrfazoV5b2iu%2BuO2t8N6TfTg%2BpTWg0YxMSkaDmowJS0sApppy6Ke4RwnwrBaVwjx%2Fw21hqdj6EGrvgos&X-Amz-Signature=c179a9fb3d21d9391dbcb187ed39cbf3855ed32956e8c1e2b7ef8bbb281e31ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
