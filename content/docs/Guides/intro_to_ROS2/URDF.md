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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPKYHQW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDPDx2G6mkDoTL4nDttidOQYOsvG8cScH5zINGj8GDqVgIhAI9ohVqDw74JmLQIySdRKJBj60zk2umEfc7Mw07LMfedKv8DCGAQABoMNjM3NDIzMTgzODA1IgxnBK1%2BRvM37IktUnEq3ANJgLO4DTVO19DWHoCET%2FnCRXLKFYYn49JhJjTWO9S2UkDOjRnebEL3U5kj9vtr0jvXNsdAOU%2FePZ7fmqr7otZk6PnUXEhiU0G2JfzXsuMC3qHVlpR%2FiO1qJA4KoGmpLSFDbpW1xqGNcsbDUEDP1LoTb%2BGMAtpbLuP32bEYhWybzcEeE7MLoHElC%2BPuCnCGUjccU5P2anvS2xHyX4XvcQlrtEfMm4B%2Fd0a4NOEDHiWYwtA%2BL4bTwyN%2BY1pLxn1T2o3xVlfo3deBMIt0rH7FEWjp%2F02YTndfJzkyCx9Iqnpog%2BPmx1N0%2FRvqE1z5XrjgHJRaZfLkuvlwaFC9DIa0yy58FxExlq2yA3MvTGkXgfjXPOSR1ZQ5Ak6M%2BCR09NeVQDu9j7kKBvHjVQbljpi9VYPjzYhUghVuQl2193YncFO1N0xdKJU3sxcs6TwXxn%2FmD%2BHgPRZhE5E1aLDhft8XkJBGcd72sre4qk%2BFbsmGIa6mWrE%2FzGA1Ht1dXaqXmN0WFhRn6wtVgxY3Pj0N1crHS2dj3gEjDEJIusjNMJfA20W%2FVHWIee4WzvLHT2LyKi9FQM04Gz5bSTxjjmZc9USOpmGk%2BKem25kwMXEH8dMpu3ZtyalfEoHr8JBnlsWT7DD%2BsrG%2BBjqkAfKobPJuf8ucsoRXyARrsUqYRxp6Ka48mtcka043xIVt%2FWtern3OxgqmqI2YpwK2pKDFuJiPc4qeU4vn0eqx0hAl8hwJYuMiLHyKbBeZBexK0m8NFPiltjIz4beewfnIbeecb2LitBtq1i2A5Dsz4T%2BAgCKQ8GvoaoXCIE3iv6NdrN7W3l3j9%2Boqz8PnEy3MlDUH2WMBE%2BFiFlA3Q41fxoYl%2F87T&X-Amz-Signature=f420ece83805a1b8c7aac0c7ce7fd34381405f391b09d3ab1fcd9cbfd490af19&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPKYHQW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDPDx2G6mkDoTL4nDttidOQYOsvG8cScH5zINGj8GDqVgIhAI9ohVqDw74JmLQIySdRKJBj60zk2umEfc7Mw07LMfedKv8DCGAQABoMNjM3NDIzMTgzODA1IgxnBK1%2BRvM37IktUnEq3ANJgLO4DTVO19DWHoCET%2FnCRXLKFYYn49JhJjTWO9S2UkDOjRnebEL3U5kj9vtr0jvXNsdAOU%2FePZ7fmqr7otZk6PnUXEhiU0G2JfzXsuMC3qHVlpR%2FiO1qJA4KoGmpLSFDbpW1xqGNcsbDUEDP1LoTb%2BGMAtpbLuP32bEYhWybzcEeE7MLoHElC%2BPuCnCGUjccU5P2anvS2xHyX4XvcQlrtEfMm4B%2Fd0a4NOEDHiWYwtA%2BL4bTwyN%2BY1pLxn1T2o3xVlfo3deBMIt0rH7FEWjp%2F02YTndfJzkyCx9Iqnpog%2BPmx1N0%2FRvqE1z5XrjgHJRaZfLkuvlwaFC9DIa0yy58FxExlq2yA3MvTGkXgfjXPOSR1ZQ5Ak6M%2BCR09NeVQDu9j7kKBvHjVQbljpi9VYPjzYhUghVuQl2193YncFO1N0xdKJU3sxcs6TwXxn%2FmD%2BHgPRZhE5E1aLDhft8XkJBGcd72sre4qk%2BFbsmGIa6mWrE%2FzGA1Ht1dXaqXmN0WFhRn6wtVgxY3Pj0N1crHS2dj3gEjDEJIusjNMJfA20W%2FVHWIee4WzvLHT2LyKi9FQM04Gz5bSTxjjmZc9USOpmGk%2BKem25kwMXEH8dMpu3ZtyalfEoHr8JBnlsWT7DD%2BsrG%2BBjqkAfKobPJuf8ucsoRXyARrsUqYRxp6Ka48mtcka043xIVt%2FWtern3OxgqmqI2YpwK2pKDFuJiPc4qeU4vn0eqx0hAl8hwJYuMiLHyKbBeZBexK0m8NFPiltjIz4beewfnIbeecb2LitBtq1i2A5Dsz4T%2BAgCKQ8GvoaoXCIE3iv6NdrN7W3l3j9%2Boqz8PnEy3MlDUH2WMBE%2BFiFlA3Q41fxoYl%2F87T&X-Amz-Signature=3a2e9536a228e6056f336664f017e89468c403d4f113189628bfd9a121335021&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
