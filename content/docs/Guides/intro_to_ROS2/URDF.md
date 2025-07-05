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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3K3OTUM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIC6H8n%2F928YeaukKJoo949uWc48Vw3CeWPso4aF%2Fb6FiAiBe3XbkHHm7ScrFn0DqATK8%2FI8dlRiA1aJ1Y%2FXKalc0%2Byr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMJuJrFpLiIjotjomRKtwDfQNDUxqFwJyLCQoosC7TRNPFlmoC5mEdKPqTTJJxpD9%2BcMHe%2F6c%2B1M2YAfI%2F%2Bs1WbhqZL%2BVbwOrjSNnnOabvEGaF416pxhAYIN26hzYXRjkOR5QWD2jIFTe5N9U5TRzyGnTR7RP95rZBswG4hlBlysig1b0EewCUdySpMDV0y%2FOr0ks2FAf3EbFvwi12AFmfyFckVLB5vNwUcEfk2hCQiEuTlXoQEbhQE6BGiASn2ZJiCeVS%2BqE6gZqdH3ALOAMoMK4RD65LaK%2FpgTLLYQtVDcJ%2Be8i6S4QFIsxvzlvwh%2FBtlPihMQUJ8xM86ukD4IkqB5joYmL7J4bsK2wkxElBYJbNCMtuepFnxwDzyk8sv%2BVYxRZKw7aFU996I%2FU6GNTA5esDmwBgpy3FR8N3tffUYdMTGqP8HX%2BykFulHIofYCWMD5JmRzisDpnJqJvmccVG3OKDOCOR07%2Bzr6O0ePzT%2BeCKSbj9xYDD5lXYeeYeOWfU3G0BN6n7xbVXW5U4NT%2FANeK31aoEnmIQv9GO54b4L9AomoHZSvsHPhOwloWu72dFKcLXANTEut4HffHqduIYF8%2Fv4zoIczs%2FtMJGl2mOpCdsfDrdZuDJaIU%2BCaKf%2Bfuf8sTdT1Nc8uxd0QYwqLOjwwY6pgH8z%2BFJ2KhHNATI6QknNUfGcO0W5MTeyZ2RBRatQL1q%2BYD%2FSQozvuwHWnXgcjNepE8HqTAnXI3T8TjSvoJ9UM6bpQt5BbtMt6HDD%2FLhRVP6%2BjoSJJ4KcG8Ti9jkz1dm%2Bo3dreT3rnLpEIvxyWSEHNCOL7NlsDW1Pp05ROLE23TmqZYzFvnAIWsP7SdwYynn6nLKcCA%2BZSz0tiS7u4b0ltMeCN4c1IGE&X-Amz-Signature=f834eaab63866804c0ad0ac806e3f42ef4abf3e90e2c611c3ca5069d87d4b52e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3K3OTUM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIC6H8n%2F928YeaukKJoo949uWc48Vw3CeWPso4aF%2Fb6FiAiBe3XbkHHm7ScrFn0DqATK8%2FI8dlRiA1aJ1Y%2FXKalc0%2Byr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMJuJrFpLiIjotjomRKtwDfQNDUxqFwJyLCQoosC7TRNPFlmoC5mEdKPqTTJJxpD9%2BcMHe%2F6c%2B1M2YAfI%2F%2Bs1WbhqZL%2BVbwOrjSNnnOabvEGaF416pxhAYIN26hzYXRjkOR5QWD2jIFTe5N9U5TRzyGnTR7RP95rZBswG4hlBlysig1b0EewCUdySpMDV0y%2FOr0ks2FAf3EbFvwi12AFmfyFckVLB5vNwUcEfk2hCQiEuTlXoQEbhQE6BGiASn2ZJiCeVS%2BqE6gZqdH3ALOAMoMK4RD65LaK%2FpgTLLYQtVDcJ%2Be8i6S4QFIsxvzlvwh%2FBtlPihMQUJ8xM86ukD4IkqB5joYmL7J4bsK2wkxElBYJbNCMtuepFnxwDzyk8sv%2BVYxRZKw7aFU996I%2FU6GNTA5esDmwBgpy3FR8N3tffUYdMTGqP8HX%2BykFulHIofYCWMD5JmRzisDpnJqJvmccVG3OKDOCOR07%2Bzr6O0ePzT%2BeCKSbj9xYDD5lXYeeYeOWfU3G0BN6n7xbVXW5U4NT%2FANeK31aoEnmIQv9GO54b4L9AomoHZSvsHPhOwloWu72dFKcLXANTEut4HffHqduIYF8%2Fv4zoIczs%2FtMJGl2mOpCdsfDrdZuDJaIU%2BCaKf%2Bfuf8sTdT1Nc8uxd0QYwqLOjwwY6pgH8z%2BFJ2KhHNATI6QknNUfGcO0W5MTeyZ2RBRatQL1q%2BYD%2FSQozvuwHWnXgcjNepE8HqTAnXI3T8TjSvoJ9UM6bpQt5BbtMt6HDD%2FLhRVP6%2BjoSJJ4KcG8Ti9jkz1dm%2Bo3dreT3rnLpEIvxyWSEHNCOL7NlsDW1Pp05ROLE23TmqZYzFvnAIWsP7SdwYynn6nLKcCA%2BZSz0tiS7u4b0ltMeCN4c1IGE&X-Amz-Signature=a5377febe15c4e84303b68fd2a5e77f0b0a9740c6d2a10f4c62e84c8cac77b8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
