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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMIQPV2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIEhZ0WYwXu1QuqHwGySawLk3XpxHXf3AiQOOMGKyueSLAiEAslRKntWqqSnITBiaRnjhEmLlAJij%2B0SEu9tb7Hq9cKMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEb1i4egDBLGDoxQ8CrcAwVYUd7a9EMPySyIRY3JhvCMzV%2F3FoS2h5ny1UHCJgh728UqwMbWkvS7dVPbCrfWE8oyQOnvS2F2MDkHoeo%2Bvt5jUl6AwIp%2FdGIJzJXsXf1hKNH92T8hsBmu3Rz8sygDspSiVlnyc6ZIMbTlSsVV4rqhxnZEQ7puBAkQ0kdVdxpfSeyJbivi9%2BoFtkXuk1GmAzd%2FxtsmxCYwEAX245bZje9WuNCtC9bhJYr4WyovNsbzKng%2BTS%2BQVr1XQYH09lFJ7x32RgSwwE3GdR6wdJS3BQOyIxYE1Lml2FMtWplW1PgK60tGrK3mD4Bz6vSYHcc56r2Q49vK5%2FE8BoUjJCrEE109Au9j74WsMBQAbkh6ZaSSLgO7AffJR7layLOQP0Cg9FPdNGNLnUiHOq%2FQEU9d6aaCMKC0BVzIZUp28rRka%2F3KGSF9257Qu7ZyPZxOGhODtyc%2BY7k3nAx53tlP6wBZzBdF9tZ0ialB%2Bnk54BNaohj%2FT9DyI4h76bBCHIXcV%2Fg6mfNVTideF9y7wBEWDhZ9CCJsZ2l0pgb7lXboQaLjEunAVEbTea%2BDWUvmzex6yAdF8dw1F79D57j7xJww0mZePDEuW8z%2FOZbSCoEezKUd1RG1GMuZuo1PjnbAK2YgMOrqvL0GOqUBk3mB1%2FgANdiKpgrXTcPRawXUEfdwJU7XKiyTHxXuoikA1BQeYdufH7ooCY41i48nG%2Bhn5j6F4bhm6O%2BDKKwqJtgeg2xXBmXYG4R8RGYyJ%2BrFQq7AWyku025L0v%2FB2dlOE1ycMoNW3l6Gr5wOiBIgAHV1GYu12zLGez2d8zEDQeZ%2FdhzlTRs5j4GBJa%2Bfk7zJ7vi0Cv%2BH8OLBaX0MuRdbc6BAsVU6&X-Amz-Signature=c885c76b8bdc05a388f6fe20714bcc7e5b2c6e0bc132f71d755a7ec0deaca29c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMIQPV2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIEhZ0WYwXu1QuqHwGySawLk3XpxHXf3AiQOOMGKyueSLAiEAslRKntWqqSnITBiaRnjhEmLlAJij%2B0SEu9tb7Hq9cKMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEb1i4egDBLGDoxQ8CrcAwVYUd7a9EMPySyIRY3JhvCMzV%2F3FoS2h5ny1UHCJgh728UqwMbWkvS7dVPbCrfWE8oyQOnvS2F2MDkHoeo%2Bvt5jUl6AwIp%2FdGIJzJXsXf1hKNH92T8hsBmu3Rz8sygDspSiVlnyc6ZIMbTlSsVV4rqhxnZEQ7puBAkQ0kdVdxpfSeyJbivi9%2BoFtkXuk1GmAzd%2FxtsmxCYwEAX245bZje9WuNCtC9bhJYr4WyovNsbzKng%2BTS%2BQVr1XQYH09lFJ7x32RgSwwE3GdR6wdJS3BQOyIxYE1Lml2FMtWplW1PgK60tGrK3mD4Bz6vSYHcc56r2Q49vK5%2FE8BoUjJCrEE109Au9j74WsMBQAbkh6ZaSSLgO7AffJR7layLOQP0Cg9FPdNGNLnUiHOq%2FQEU9d6aaCMKC0BVzIZUp28rRka%2F3KGSF9257Qu7ZyPZxOGhODtyc%2BY7k3nAx53tlP6wBZzBdF9tZ0ialB%2Bnk54BNaohj%2FT9DyI4h76bBCHIXcV%2Fg6mfNVTideF9y7wBEWDhZ9CCJsZ2l0pgb7lXboQaLjEunAVEbTea%2BDWUvmzex6yAdF8dw1F79D57j7xJww0mZePDEuW8z%2FOZbSCoEezKUd1RG1GMuZuo1PjnbAK2YgMOrqvL0GOqUBk3mB1%2FgANdiKpgrXTcPRawXUEfdwJU7XKiyTHxXuoikA1BQeYdufH7ooCY41i48nG%2Bhn5j6F4bhm6O%2BDKKwqJtgeg2xXBmXYG4R8RGYyJ%2BrFQq7AWyku025L0v%2FB2dlOE1ycMoNW3l6Gr5wOiBIgAHV1GYu12zLGez2d8zEDQeZ%2FdhzlTRs5j4GBJa%2Bfk7zJ7vi0Cv%2BH8OLBaX0MuRdbc6BAsVU6&X-Amz-Signature=6fad49444247fa75a92398980006aba41bdb8df82f57c543b5661057b707318b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
