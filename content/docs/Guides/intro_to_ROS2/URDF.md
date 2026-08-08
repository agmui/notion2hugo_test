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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2XCHFD%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6LnpddOnOJWDWl3%2BKeI7PRxCeAQYx5TaqPfN5q%2Bz6jgIgI3D9bQTk0CEb9N7vzCRHV9MbZT%2BKRnGzilHkJHo21VQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIuye0ikn0oE5eOtxyrcAwL5yhWaGV4dgBS3xpyDaB56Ws9ne7UCs3PZSGt218vTirA4XaD%2FdQDSeCGy1RGIHaSaN8ZMHcwOKpLVUaKcrH9aDkQKcqH0FyClHd3O%2Fwx7eIvR4KZToDa0mwiDbliQvVYbziGSQSmi3wJsh%2F9AVxEux0GQWE2C04jnk3WzN%2BUzxQTlvHXaQMfzIZQaT3Xw7f5jtKXEULEb9cTEIzZaZ%2BXEUUyFZfMYNnOee%2FqtcSUZwxwSe2yguWSJDqmY%2B9hnP5miTiY%2BB%2Bw44541pDPv8bmPa9k5L1anw1IsCLONJoHhBjoX0Old5LyB%2FMaDLDjqRUeizXL3F7abcbFst3QhOtIckO1F5hqcWUK4kKcyIZKZcz1oYC5Cn2V3kldUrQDXKVR3V%2FTBLoM%2BEhmhJS%2FLy%2BUZGqpBgcI%2Fv2wn6X10LHes4MBUSKI4VJUk9bz807dbgFCVVLG1rH2aQHFA0bt0vDNfe8xC8Hii1BnfnUdHuKyyEC4fNpNuYwZ8U%2FPVOhVj8xSsoUewyTxoiPL4fACRGMRv7dPoLLoo4%2B0g7w80dludkF4XsPR2pjkcyGz8IiM3ccYq14AyyjJuSm1nPyZFuuTwUaDmMlSIORUrm70nofqr9ekCVbj9%2BJULY6i8MPLs2dMGOqUBXY7iLeLT2TGffqHs9dTG3NchS35OQJMxWRPF0KjqT%2BRbfOIwaS2%2F%2FtYiLXfnllI3zYhmtLMeWG%2FrMAhQmgIVpnk%2FX4lOnnD0mqckUZL86PIq%2FpPJX6LcTeCgzpjS2AnQur5Mk%2BPSmfnVrIvBZjVbxpW%2FZvLz%2BcvfbeQwkidE8I5tNRyVwS0oFfHqb4kNtEKdZARvUq1PSw%2BUA%2F%2FMqNu1aEJcV2e9&X-Amz-Signature=25459638b679cb2decab75b73ffb85c2aba59a21216b18f17399a1a07a1daa03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2XCHFD%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6LnpddOnOJWDWl3%2BKeI7PRxCeAQYx5TaqPfN5q%2Bz6jgIgI3D9bQTk0CEb9N7vzCRHV9MbZT%2BKRnGzilHkJHo21VQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIuye0ikn0oE5eOtxyrcAwL5yhWaGV4dgBS3xpyDaB56Ws9ne7UCs3PZSGt218vTirA4XaD%2FdQDSeCGy1RGIHaSaN8ZMHcwOKpLVUaKcrH9aDkQKcqH0FyClHd3O%2Fwx7eIvR4KZToDa0mwiDbliQvVYbziGSQSmi3wJsh%2F9AVxEux0GQWE2C04jnk3WzN%2BUzxQTlvHXaQMfzIZQaT3Xw7f5jtKXEULEb9cTEIzZaZ%2BXEUUyFZfMYNnOee%2FqtcSUZwxwSe2yguWSJDqmY%2B9hnP5miTiY%2BB%2Bw44541pDPv8bmPa9k5L1anw1IsCLONJoHhBjoX0Old5LyB%2FMaDLDjqRUeizXL3F7abcbFst3QhOtIckO1F5hqcWUK4kKcyIZKZcz1oYC5Cn2V3kldUrQDXKVR3V%2FTBLoM%2BEhmhJS%2FLy%2BUZGqpBgcI%2Fv2wn6X10LHes4MBUSKI4VJUk9bz807dbgFCVVLG1rH2aQHFA0bt0vDNfe8xC8Hii1BnfnUdHuKyyEC4fNpNuYwZ8U%2FPVOhVj8xSsoUewyTxoiPL4fACRGMRv7dPoLLoo4%2B0g7w80dludkF4XsPR2pjkcyGz8IiM3ccYq14AyyjJuSm1nPyZFuuTwUaDmMlSIORUrm70nofqr9ekCVbj9%2BJULY6i8MPLs2dMGOqUBXY7iLeLT2TGffqHs9dTG3NchS35OQJMxWRPF0KjqT%2BRbfOIwaS2%2F%2FtYiLXfnllI3zYhmtLMeWG%2FrMAhQmgIVpnk%2FX4lOnnD0mqckUZL86PIq%2FpPJX6LcTeCgzpjS2AnQur5Mk%2BPSmfnVrIvBZjVbxpW%2FZvLz%2BcvfbeQwkidE8I5tNRyVwS0oFfHqb4kNtEKdZARvUq1PSw%2BUA%2F%2FMqNu1aEJcV2e9&X-Amz-Signature=de34e4cd29a7c92ab4a4c3bf7e0859237f9732ca9ead2e02d0a732201dee608d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
