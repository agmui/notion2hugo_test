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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DIWCJLK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDv07eetFYImd9iYsYC8ldDAlubkSc4uMJ20bwLYugBHQIhAJJJKMWBYHXr2zpm6on9X1TUyJ3XEuBe69hfTUxtXn5PKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxngvJed8XnC1vVmOwq3ANxStIj91igKajtfx5tBtNbqTdH0R6N%2FFu%2FODAQ0aJCXVm8pXTbIzRCMqwL9KetfD%2Fv5u8ImuOgwaAhC3UXYt2iEjVvP%2FzMj8e0uXVSAzuYwDPBzIQYxpd54HaOJNW5GXEfykiVr7xeXaKVkJxcmHrJXEDWWXE%2F3h6%2BS4I7TkneJuWtMlktBo1sy%2FXK5aEPHpegmtcnWTOIxML8J1bycc%2BcKyWV0s%2Bp0U5ZkSBt1RJnZYZg7H45vt4lRUyMyP0%2F91ptbiqim20RL1reAMUIPyZ5l4miwWsUzo9URvqHXjBjoqDbnanl1s4EWgCcfC86wPYReV0R%2F9VfZWLUzLjTb8AqoxaWZl2oKqd%2FRpeWCXALkSFUYeuAE4%2BDVDGor6wgUe9M4xKbg%2FYbTs3erRtLzWoqba7%2FkzaDkQ3lcmWuhodcXw1dMdbKEscBHAgeVWUaB4C3DCBiIW7AyRYN5erbTglbXd1c1srcBKYxyuKt958wJleGZFt%2BUClPz0gBWi1aiyK%2Bu2PGUdRsbcI0SXp2wbPEpRWV%2Fp6RnnxZIMUjhfod0ISpaw2WSWlv%2FmE2sG1X9AIk%2F%2FCIrr11meJbVZr%2Fopxb8m7etN9yoTg0xLRxaYeMo6W3jC%2B1L6QyKuTuhzDjk%2FjBBjqkAUw9OH0lkpNPERwkqe6jkPzsaUHlasBdmdWmqmSLjdyq08gfzJdOJ6AKSNzwviEgyWtaCMxdaBi0YaIXA9KkwR7viIIyX9zcxYtYq4LB9%2BiP3rPmQN1Ml0qH95dxJ%2BGqs60eTmz29Zb6llIHeVLuXJIXZqnf3BNYbiSdvSiEqqJlScaSgSCPAdpa5lgO87t1o%2FV8mniAIMqYKBjSMCicG0mdoFV5&X-Amz-Signature=3c9928f8e01e994e514ef24b8ab51aa3e52d95550d9fa09d91de1181f876d0d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DIWCJLK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDv07eetFYImd9iYsYC8ldDAlubkSc4uMJ20bwLYugBHQIhAJJJKMWBYHXr2zpm6on9X1TUyJ3XEuBe69hfTUxtXn5PKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxngvJed8XnC1vVmOwq3ANxStIj91igKajtfx5tBtNbqTdH0R6N%2FFu%2FODAQ0aJCXVm8pXTbIzRCMqwL9KetfD%2Fv5u8ImuOgwaAhC3UXYt2iEjVvP%2FzMj8e0uXVSAzuYwDPBzIQYxpd54HaOJNW5GXEfykiVr7xeXaKVkJxcmHrJXEDWWXE%2F3h6%2BS4I7TkneJuWtMlktBo1sy%2FXK5aEPHpegmtcnWTOIxML8J1bycc%2BcKyWV0s%2Bp0U5ZkSBt1RJnZYZg7H45vt4lRUyMyP0%2F91ptbiqim20RL1reAMUIPyZ5l4miwWsUzo9URvqHXjBjoqDbnanl1s4EWgCcfC86wPYReV0R%2F9VfZWLUzLjTb8AqoxaWZl2oKqd%2FRpeWCXALkSFUYeuAE4%2BDVDGor6wgUe9M4xKbg%2FYbTs3erRtLzWoqba7%2FkzaDkQ3lcmWuhodcXw1dMdbKEscBHAgeVWUaB4C3DCBiIW7AyRYN5erbTglbXd1c1srcBKYxyuKt958wJleGZFt%2BUClPz0gBWi1aiyK%2Bu2PGUdRsbcI0SXp2wbPEpRWV%2Fp6RnnxZIMUjhfod0ISpaw2WSWlv%2FmE2sG1X9AIk%2F%2FCIrr11meJbVZr%2Fopxb8m7etN9yoTg0xLRxaYeMo6W3jC%2B1L6QyKuTuhzDjk%2FjBBjqkAUw9OH0lkpNPERwkqe6jkPzsaUHlasBdmdWmqmSLjdyq08gfzJdOJ6AKSNzwviEgyWtaCMxdaBi0YaIXA9KkwR7viIIyX9zcxYtYq4LB9%2BiP3rPmQN1Ml0qH95dxJ%2BGqs60eTmz29Zb6llIHeVLuXJIXZqnf3BNYbiSdvSiEqqJlScaSgSCPAdpa5lgO87t1o%2FV8mniAIMqYKBjSMCicG0mdoFV5&X-Amz-Signature=941f3b39c8770b438c6b5ae73952da2d8489da309ad2c74aa1f1f73e22948c26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
