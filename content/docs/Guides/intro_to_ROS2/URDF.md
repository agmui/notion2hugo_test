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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGXIFDM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIG49Pzice1YGhvjh1tS91YBtzqAuOa0v43WDgrGbTg1mAiEAmWeUjkFiJx6nNQ35FdgxJajnRvChzRAne4TmvDnsALYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJln8Bv7WxcJUZ85AircA%2FGmajmsNHcvMn%2BVOj1V4QImj%2FMmsgtec4OBpoPdv9SdH8Ktz6DxQbYKNmQ5Bql7kMK9HPNEqeAAVCmQ9%2FIgKUTXwAHdP%2FlRLOqfYe2jzbxK40%2Bfj%2B1fU8rsCBTe5NPMCRUayKuF7BTZkBkxlrFcJnU2n3QOJUG%2F0PjSGzFm7ICW3o6mq5FbiLugs9%2BkHdTU46adw9EhHJQ03HOZH2Xe%2FcNBM6KNUkuF1F1%2FqNQLmBfDkKJAaZUujztEq9NgX00bHREPqR51B9qBDfnCTMRxRECswPyUAdcJqLqTgQdhS0CAyUI6Hq1BKt7IV75VHhIwQ47Ycuo6TwjQep485rHmqZqDuz%2FfwrUC%2FEzTIGLt58HI3f0HAaRwU3jMMvDQkT3Xce4s%2Favuhb8%2F5GZHepoAPA%2FMTpr89ORIP%2FfVm6BOZRXEeanoTlPJiRPdWOBpw%2FfmyJOS%2Btc0J864ob4mVnPfh5M22SK9M5aVOwWJE%2FoFQRFb6Xmvyxvpx2kheWHgc8xSMmYuUr8UnpQxA%2BOB9kRcqzyQabVw7kfmq1CYkh0XOQBqzkbVrcKVOfGGjhhRVePyDVg2YFFdQQDP3x5X2orZDa3iYpj6R41xtXXhF3gQwU2JhpwrQZrwkK9AR11wMPuHysQGOqUBO4MYsxSq7Ks5ZqsL3Yb5bL0kCVmJtQADB0o97eQ1T0HUVD6dSls29EAvGIHZd2PT2ETSy4kpheQvkiehgZ%2Fv2JnW56zh1YiXDOdWx%2FTtNgNcgWldXAp%2FRtxxY7s8A25LJ13rWYa1Q%2B2lzwuT1YqM3nhIx2iUSsQn2Y41ny%2BePY7vhrxzSfCZBnaiKY%2FYQIUdhrqk6c3XVnc7y1lJCTTN6JILKQRo&X-Amz-Signature=344a77de69053e8f841710652ee08496cb66ba1a2cf77987f49b2b06f9d26895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGXIFDM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIG49Pzice1YGhvjh1tS91YBtzqAuOa0v43WDgrGbTg1mAiEAmWeUjkFiJx6nNQ35FdgxJajnRvChzRAne4TmvDnsALYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJln8Bv7WxcJUZ85AircA%2FGmajmsNHcvMn%2BVOj1V4QImj%2FMmsgtec4OBpoPdv9SdH8Ktz6DxQbYKNmQ5Bql7kMK9HPNEqeAAVCmQ9%2FIgKUTXwAHdP%2FlRLOqfYe2jzbxK40%2Bfj%2B1fU8rsCBTe5NPMCRUayKuF7BTZkBkxlrFcJnU2n3QOJUG%2F0PjSGzFm7ICW3o6mq5FbiLugs9%2BkHdTU46adw9EhHJQ03HOZH2Xe%2FcNBM6KNUkuF1F1%2FqNQLmBfDkKJAaZUujztEq9NgX00bHREPqR51B9qBDfnCTMRxRECswPyUAdcJqLqTgQdhS0CAyUI6Hq1BKt7IV75VHhIwQ47Ycuo6TwjQep485rHmqZqDuz%2FfwrUC%2FEzTIGLt58HI3f0HAaRwU3jMMvDQkT3Xce4s%2Favuhb8%2F5GZHepoAPA%2FMTpr89ORIP%2FfVm6BOZRXEeanoTlPJiRPdWOBpw%2FfmyJOS%2Btc0J864ob4mVnPfh5M22SK9M5aVOwWJE%2FoFQRFb6Xmvyxvpx2kheWHgc8xSMmYuUr8UnpQxA%2BOB9kRcqzyQabVw7kfmq1CYkh0XOQBqzkbVrcKVOfGGjhhRVePyDVg2YFFdQQDP3x5X2orZDa3iYpj6R41xtXXhF3gQwU2JhpwrQZrwkK9AR11wMPuHysQGOqUBO4MYsxSq7Ks5ZqsL3Yb5bL0kCVmJtQADB0o97eQ1T0HUVD6dSls29EAvGIHZd2PT2ETSy4kpheQvkiehgZ%2Fv2JnW56zh1YiXDOdWx%2FTtNgNcgWldXAp%2FRtxxY7s8A25LJ13rWYa1Q%2B2lzwuT1YqM3nhIx2iUSsQn2Y41ny%2BePY7vhrxzSfCZBnaiKY%2FYQIUdhrqk6c3XVnc7y1lJCTTN6JILKQRo&X-Amz-Signature=609a03b5690a31f830de1e749bb31f1641f645b682cd8d7edb65a0a05a739404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
