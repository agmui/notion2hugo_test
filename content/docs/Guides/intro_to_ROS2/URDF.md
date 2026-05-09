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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP2GRWU7%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDrodsKABPT9LckmqWFnuQvilXMBNeIpOBgc8lHYSrD%2FwIgEobb8hG0ohLzL%2BESLa9yGQNQjjk5crgAjSvwZywFhioqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWSzm8ige1R1uK9fyrcA%2BuS2E7rsFbH%2BsOQM%2FYu1LisoC5qfIoM82TETaNlviYbAtMIxQnd%2FQQZQME389AYCx9pvZg0i%2F44LJ%2BqXi5CQcC%2FUEzaQw4cwLTjJqF49DApVojnWlEr8OJm0lTw35MCOY0LIZyuwdF6QQJBENzXbmDwkj4IRRxHUhtCl3OFQQHlQ7r3HpboIU9CdQIeVRbOIPVAH0Enm7kNqTFUOu5CxUhcRSFRoOLSJxZdnWfAeC48prqQQkFbZiDvLJqjQEbY7A63gH%2B%2FnaplfwKGBuD492toXCPxOcd8MUk%2Fsi0jEX9TUk59V8EUCVmDKc1D2NVnEJe152Pv6tLXA7o6dZGfS8THBamscQdTodpqJffvi9XwV5l5Hv7zMb2omA213CkSoEOxuuSH6qNPzNUXheHvYt7Jus3XobMqEtM5ETZu3NtebQE0J3NgfZqoV9tOrhqJMgfYL%2BpiM%2Fe%2FEq8KWIb%2F%2B06AoknYBMgGk48V06ckK65rErH7A5cvrWzY6%2FcVyx0Hn%2BKjqgUS6nkvYKor%2BEOlJPD4XtKWaniYyMp8mhquGxE0F2nfqL9SQKuguX3m9kq0Ul2itB8JiNRbeGJyjSOVNqp939%2B2KGm%2F4kYcwlzijQyPRqQCosglWXlCBxvlMMay%2Bs8GOqUBTs%2FpbxmgG7emPlSBDZCF94VCyvZkgRroA%2BgGALkt%2BxtTD9fUBORTtvPYyGtN0%2F0XiAovF27OvxtZQDuBagTaBklemRrGbNuIxj3whlU8KK1ztpxSzTcuPfFbP0boRgi1tLSuCDCfTiPKJzpDtSEYXIFt3xy1vMiiXUrIlm319r0NREG%2FvoHGEhRu2X24fdI73rPOQNnyoLjbIGwa4h2XfYPEIDCR&X-Amz-Signature=8dc2a72b8bae15f86566329a6ae27d5adfa56575a6c673f124088dd1355005fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP2GRWU7%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDrodsKABPT9LckmqWFnuQvilXMBNeIpOBgc8lHYSrD%2FwIgEobb8hG0ohLzL%2BESLa9yGQNQjjk5crgAjSvwZywFhioqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWSzm8ige1R1uK9fyrcA%2BuS2E7rsFbH%2BsOQM%2FYu1LisoC5qfIoM82TETaNlviYbAtMIxQnd%2FQQZQME389AYCx9pvZg0i%2F44LJ%2BqXi5CQcC%2FUEzaQw4cwLTjJqF49DApVojnWlEr8OJm0lTw35MCOY0LIZyuwdF6QQJBENzXbmDwkj4IRRxHUhtCl3OFQQHlQ7r3HpboIU9CdQIeVRbOIPVAH0Enm7kNqTFUOu5CxUhcRSFRoOLSJxZdnWfAeC48prqQQkFbZiDvLJqjQEbY7A63gH%2B%2FnaplfwKGBuD492toXCPxOcd8MUk%2Fsi0jEX9TUk59V8EUCVmDKc1D2NVnEJe152Pv6tLXA7o6dZGfS8THBamscQdTodpqJffvi9XwV5l5Hv7zMb2omA213CkSoEOxuuSH6qNPzNUXheHvYt7Jus3XobMqEtM5ETZu3NtebQE0J3NgfZqoV9tOrhqJMgfYL%2BpiM%2Fe%2FEq8KWIb%2F%2B06AoknYBMgGk48V06ckK65rErH7A5cvrWzY6%2FcVyx0Hn%2BKjqgUS6nkvYKor%2BEOlJPD4XtKWaniYyMp8mhquGxE0F2nfqL9SQKuguX3m9kq0Ul2itB8JiNRbeGJyjSOVNqp939%2B2KGm%2F4kYcwlzijQyPRqQCosglWXlCBxvlMMay%2Bs8GOqUBTs%2FpbxmgG7emPlSBDZCF94VCyvZkgRroA%2BgGALkt%2BxtTD9fUBORTtvPYyGtN0%2F0XiAovF27OvxtZQDuBagTaBklemRrGbNuIxj3whlU8KK1ztpxSzTcuPfFbP0boRgi1tLSuCDCfTiPKJzpDtSEYXIFt3xy1vMiiXUrIlm319r0NREG%2FvoHGEhRu2X24fdI73rPOQNnyoLjbIGwa4h2XfYPEIDCR&X-Amz-Signature=d461d0bf1e5da25a9f8fe10b8a2c3c26688aa4822a74c9dc060ed5feaf438e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
