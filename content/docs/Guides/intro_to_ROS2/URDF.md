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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZ3DZJN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCN9Phee4rJ1AHDRZEKRsg9DvhlS0gf37OrMXAIbrFXrAIgCne7yvJfAVK%2FbXCLdGgO7AGC1CVPDimIKyMzz4SUOYwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITEHAt6e1wW0N0mnircA%2Bs%2FMAVb%2Bgf4NyVcxEe%2BCin5jYM7iYZw4XmpQ3FsN8arle0ZNdXlnb1jLZb6Ha4%2Bs5jQvjGUzaXySG6Qa74ZCXJV7oNR2NxKOIQUdEdvNxXF0qwAAnTej9SCIboSIbzC%2BrKstJk8ixlASk93mkpvaFFH3Xrz6ZYoBTERn0p38rgrRQnG7%2BURMTYuus1KXw4zvSZ4acukme0A8ib372S7WGgnuQnHNmDcVuF%2FwG1G3OoEm1oaJKJQMqC%2FLOBODAwLpl8LQVnyP5ejTxgXFl0Z8dbzDoQOMg1Y6fhYFO41WKpcMMpZOoBU3Vonwm0Fu%2FcA1RSXVX7QEBa1M5qz9OS%2F12u2FE35L4wmg55G4UqGNCG7kPmu7jw1HXr2TKantJuJMyQzoFPllUiATxQzQ4kt%2FqdzySR0DteytRINweKW4J6%2BDmp1vEuVy9WS2nygXMlkLl6zi7O%2BO%2F79sWJEt%2FR650dK7l%2Bet9SPjVWDhg6ouwEd10HBoVPPaVkYa1QH9KXg%2BotER58WeEkv8Hdz3R1peV2KPVGCwPQW5qHuswnAtokWavM6bYOqw%2FdkcqYHWDMugUZsDYIrKp4DGx2feNlHo9G2bNsFjEuJb%2BlYOOhukU0THxrMy1TP3d12XNLBMMzp1L0GOqUB2mHKlmvWwuMsFw%2B119MvvgQ9DOw0nQ0v1BLzEn%2FHLWbml75KF1%2Fkye2VE%2FWSkdBNuWkp1XXoSNPHgTJehe3zd8mEZ6thlr6i2kv2bmoLrLhaPnSfby%2Fd%2FWcPsgJwJIQoyVme8npaFYj1wRcis08%2Fd0z9DJCMkKwLH%2Bn0o6pknhEZoMWf21UpxO0w6DkzCZAcFkc%2B%2FCDBJdqaBfwErYgv4qBR6wfj&X-Amz-Signature=94d2abf688defd8c16229e8c0229e3990da28c85fac80500a0ce535795ed2d16&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZ3DZJN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCN9Phee4rJ1AHDRZEKRsg9DvhlS0gf37OrMXAIbrFXrAIgCne7yvJfAVK%2FbXCLdGgO7AGC1CVPDimIKyMzz4SUOYwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITEHAt6e1wW0N0mnircA%2Bs%2FMAVb%2Bgf4NyVcxEe%2BCin5jYM7iYZw4XmpQ3FsN8arle0ZNdXlnb1jLZb6Ha4%2Bs5jQvjGUzaXySG6Qa74ZCXJV7oNR2NxKOIQUdEdvNxXF0qwAAnTej9SCIboSIbzC%2BrKstJk8ixlASk93mkpvaFFH3Xrz6ZYoBTERn0p38rgrRQnG7%2BURMTYuus1KXw4zvSZ4acukme0A8ib372S7WGgnuQnHNmDcVuF%2FwG1G3OoEm1oaJKJQMqC%2FLOBODAwLpl8LQVnyP5ejTxgXFl0Z8dbzDoQOMg1Y6fhYFO41WKpcMMpZOoBU3Vonwm0Fu%2FcA1RSXVX7QEBa1M5qz9OS%2F12u2FE35L4wmg55G4UqGNCG7kPmu7jw1HXr2TKantJuJMyQzoFPllUiATxQzQ4kt%2FqdzySR0DteytRINweKW4J6%2BDmp1vEuVy9WS2nygXMlkLl6zi7O%2BO%2F79sWJEt%2FR650dK7l%2Bet9SPjVWDhg6ouwEd10HBoVPPaVkYa1QH9KXg%2BotER58WeEkv8Hdz3R1peV2KPVGCwPQW5qHuswnAtokWavM6bYOqw%2FdkcqYHWDMugUZsDYIrKp4DGx2feNlHo9G2bNsFjEuJb%2BlYOOhukU0THxrMy1TP3d12XNLBMMzp1L0GOqUB2mHKlmvWwuMsFw%2B119MvvgQ9DOw0nQ0v1BLzEn%2FHLWbml75KF1%2Fkye2VE%2FWSkdBNuWkp1XXoSNPHgTJehe3zd8mEZ6thlr6i2kv2bmoLrLhaPnSfby%2Fd%2FWcPsgJwJIQoyVme8npaFYj1wRcis08%2Fd0z9DJCMkKwLH%2Bn0o6pknhEZoMWf21UpxO0w6DkzCZAcFkc%2B%2FCDBJdqaBfwErYgv4qBR6wfj&X-Amz-Signature=ec00e7b9042372b63a4a364ccb9ac4cec49b204a5763fd38e89493252115a72c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
