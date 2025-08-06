---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S35Z54LU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDZLDhIJeOB6NF1UvDT%2BAhLajorZv%2Bwb7e1NRPqYA1GngIgMPjPnjXOJz%2FcERMTN8Am3NxBSTm67OZ7vIsGWY6tK0Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGLZDJ4qVs8Dkh4MVSrcA9x28zNyg9rs12iHjuWWJTQKF2oPxhihoCakPEcr28mhmKjWzKRcIYPWNIT1TZIQV%2FBnD8CWxv5FOKNWrKTuDSdLqOsbeyu2Z8Dwg1ckBoWMQkNZnlXJxuVh9HNGr%2FkaqNmVU7bKr%2BqFw88rBpOhuhEYUiOdEhh5N6x1%2FRMEVVuVmJixdGmyia62HfI46I8Y3V4C2xVM5AsuiNbAkw7l0uehJbB615ztSv6u%2FX1jinpacfyvk54Tkt00fTVKL0XoSdLQqi9Z%2BbZE7F%2BcyZSZhGBgQvQeyjysdiLaZii3yMNmvR5K9cTzxpCDsrCoC1dFcxJvfWXnat0rpiGt%2FgbfrzkcAdYz3x7zfBZEMsDXRAxkVeJpWE7ybOXFchsfvqIdnbuMWq1p6UEdqp0cqT3cKLG3Fh3Kt8rzTTaDPPPrft6%2Bx4WZDMIVgL4oRuZTQ5WuBZia9U%2BkVqQdE8BKjb5MJBUYOJ766FaYzDpK2GUeDvNVrw6qLWy7UhFGVLiRCgHJxews05ZkIab2TfAA317aJk8JB2CWwZVd87noJPU1Krnb1oxL79DKIFVpy%2BoKI%2BTBAQEDImp64cZ0Z7vakPrDBKu5ePOqcT3ezpOP5YIeJD9bETT3R6DCR0DSRMaKMLnFzsQGOqUByuSOfa%2FtY17WBHB2HAvsUn03lYDFBnTb%2Bdv6vso57XXMFme9xip3NGn9j%2BwPp1DlkIGH145VyDhrZeCmsOZeVeorwzjhyb6uBboBAsVC1MCnIcAIS6HdFPpMvEvQLmT8zCNuZaUmLggtgjGpUhjgpBLMSGJQUse%2FGTHBkj72xFzzURh4YX4RHnAw8Lf0OWbP4eLxa7r5B37fQeI5iw4oTWFuTgZa&X-Amz-Signature=43e9666e3db32baadf1074ea132b02497afeaa4cd2572d1669a03ac30cc8fbd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S35Z54LU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDZLDhIJeOB6NF1UvDT%2BAhLajorZv%2Bwb7e1NRPqYA1GngIgMPjPnjXOJz%2FcERMTN8Am3NxBSTm67OZ7vIsGWY6tK0Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGLZDJ4qVs8Dkh4MVSrcA9x28zNyg9rs12iHjuWWJTQKF2oPxhihoCakPEcr28mhmKjWzKRcIYPWNIT1TZIQV%2FBnD8CWxv5FOKNWrKTuDSdLqOsbeyu2Z8Dwg1ckBoWMQkNZnlXJxuVh9HNGr%2FkaqNmVU7bKr%2BqFw88rBpOhuhEYUiOdEhh5N6x1%2FRMEVVuVmJixdGmyia62HfI46I8Y3V4C2xVM5AsuiNbAkw7l0uehJbB615ztSv6u%2FX1jinpacfyvk54Tkt00fTVKL0XoSdLQqi9Z%2BbZE7F%2BcyZSZhGBgQvQeyjysdiLaZii3yMNmvR5K9cTzxpCDsrCoC1dFcxJvfWXnat0rpiGt%2FgbfrzkcAdYz3x7zfBZEMsDXRAxkVeJpWE7ybOXFchsfvqIdnbuMWq1p6UEdqp0cqT3cKLG3Fh3Kt8rzTTaDPPPrft6%2Bx4WZDMIVgL4oRuZTQ5WuBZia9U%2BkVqQdE8BKjb5MJBUYOJ766FaYzDpK2GUeDvNVrw6qLWy7UhFGVLiRCgHJxews05ZkIab2TfAA317aJk8JB2CWwZVd87noJPU1Krnb1oxL79DKIFVpy%2BoKI%2BTBAQEDImp64cZ0Z7vakPrDBKu5ePOqcT3ezpOP5YIeJD9bETT3R6DCR0DSRMaKMLnFzsQGOqUByuSOfa%2FtY17WBHB2HAvsUn03lYDFBnTb%2Bdv6vso57XXMFme9xip3NGn9j%2BwPp1DlkIGH145VyDhrZeCmsOZeVeorwzjhyb6uBboBAsVC1MCnIcAIS6HdFPpMvEvQLmT8zCNuZaUmLggtgjGpUhjgpBLMSGJQUse%2FGTHBkj72xFzzURh4YX4RHnAw8Lf0OWbP4eLxa7r5B37fQeI5iw4oTWFuTgZa&X-Amz-Signature=7293719213fa97813f2a70d66d95f9219999405ea68de04fefcb39a0aa7e639f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
