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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IIOLJGZ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd2YaVUPkx0VPFCNReKfKyQt2TY57mvcrb1QmO00sjAwIhAO69awfrOAYB9kDhbeDu%2BsKLexyZ9EAk4LLr7jBhToSlKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwroBoVsP6z3TToLDoq3AO%2BTMXbXpKmH5%2BX30M3aShvnIrSDf5%2FHh5fsINKQERxBzBWXey7e%2BmRsivdyriORphtfY8itIrlWMzWto%2BNAdgn0Eiw%2BH4YTT42JgS0hBd%2Bdfsh75CtWbVrTaCs4qpmXeBczqw2ZmoraGFbzs7wm2JDbhaSMgU4SOIQJCLiB4oZJxX7TcUGvTtW6Yf56oai5%2FiNFEbdOKq%2FfQofsnK%2FNT7cqD%2FYZc6v7RXJ3h5OnQU%2FBUiXbelDtp2GaPfIDdpOq8Ogq%2BoxHBVeqasJxq%2FFtqj1s5K9jFTtuiB1IfDpCOV%2BZc1XTbSqPG0IbFJ3%2Bms3QEKce1BY3kCRvU0q0%2FsEuXCEY1t4XTJctob5xtwgli%2FSj7E5Gd6fPTQDjBon63vib2x5Y5iCjcJILEFo5vTySLMBUrIpyeqFnDBMeOucaLf0g6ib114QZflBkY8tRUKzzran0tzF4fvgg4ORIDV91u0iy0d2C%2B%2FxbYS6USbO4JMDidJUvWIpssG8zQS5cSEa%2B7F7CG1gTsR8CnQGIC%2FqTWYqcNK%2FdTe9N5VXvYgyPCiH7KDuW%2BRaidxbiWc719XlvoKAcvb6qXGgseJ19Y5WndRUJ93jtUzbi5ahhBwE0XQTv%2BWe8dpcxB%2B2isxeDTCH%2F6fJBjqkAa4QEOKENBIKxQ6LHN4LXPjAKPyyCoSo1f7y2%2BNjfujBymua5E2wJOpYPUoQN%2BFY4QyM55V%2FRKwiO36V2ox0mBaO2o%2BglrAnWpUBcW%2FEz6xP7j4HXe6EcQoL98YyCx7K5E%2F1ujyftKEkgG7ogstEmHtbGHywsRd8AqFqBmEdSK4UR9g6X1yr2i%2F%2Bk3msrOdolBD%2Bom%2BppJ0dAnokbXVMA4WxxWBx&X-Amz-Signature=b58e79f35f25300783c59de74797c8c9f360e663bb84c6e56e4f7d350a80bb72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IIOLJGZ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd2YaVUPkx0VPFCNReKfKyQt2TY57mvcrb1QmO00sjAwIhAO69awfrOAYB9kDhbeDu%2BsKLexyZ9EAk4LLr7jBhToSlKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwroBoVsP6z3TToLDoq3AO%2BTMXbXpKmH5%2BX30M3aShvnIrSDf5%2FHh5fsINKQERxBzBWXey7e%2BmRsivdyriORphtfY8itIrlWMzWto%2BNAdgn0Eiw%2BH4YTT42JgS0hBd%2Bdfsh75CtWbVrTaCs4qpmXeBczqw2ZmoraGFbzs7wm2JDbhaSMgU4SOIQJCLiB4oZJxX7TcUGvTtW6Yf56oai5%2FiNFEbdOKq%2FfQofsnK%2FNT7cqD%2FYZc6v7RXJ3h5OnQU%2FBUiXbelDtp2GaPfIDdpOq8Ogq%2BoxHBVeqasJxq%2FFtqj1s5K9jFTtuiB1IfDpCOV%2BZc1XTbSqPG0IbFJ3%2Bms3QEKce1BY3kCRvU0q0%2FsEuXCEY1t4XTJctob5xtwgli%2FSj7E5Gd6fPTQDjBon63vib2x5Y5iCjcJILEFo5vTySLMBUrIpyeqFnDBMeOucaLf0g6ib114QZflBkY8tRUKzzran0tzF4fvgg4ORIDV91u0iy0d2C%2B%2FxbYS6USbO4JMDidJUvWIpssG8zQS5cSEa%2B7F7CG1gTsR8CnQGIC%2FqTWYqcNK%2FdTe9N5VXvYgyPCiH7KDuW%2BRaidxbiWc719XlvoKAcvb6qXGgseJ19Y5WndRUJ93jtUzbi5ahhBwE0XQTv%2BWe8dpcxB%2B2isxeDTCH%2F6fJBjqkAa4QEOKENBIKxQ6LHN4LXPjAKPyyCoSo1f7y2%2BNjfujBymua5E2wJOpYPUoQN%2BFY4QyM55V%2FRKwiO36V2ox0mBaO2o%2BglrAnWpUBcW%2FEz6xP7j4HXe6EcQoL98YyCx7K5E%2F1ujyftKEkgG7ogstEmHtbGHywsRd8AqFqBmEdSK4UR9g6X1yr2i%2F%2Bk3msrOdolBD%2Bom%2BppJ0dAnokbXVMA4WxxWBx&X-Amz-Signature=761c62ed6355f3ada62a0393ca2596bda411652d325ab923efd51add4d417c8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
