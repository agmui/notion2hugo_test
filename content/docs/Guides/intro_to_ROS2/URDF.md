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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQQVWGI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmRphg5JfBXBezIwsHGkNZfYX9fSfF%2BHuTjU4VhIzzjQIgWGC74H%2BQbi2bLEEjsp4%2Bx8rfBsnlowsB1iTMz62fJ4cqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzugXV%2F1%2BBG60l7fircA4a8Hw1DH%2F6zEJvnubm%2FdAz27bc2x9psXgstVfWiWcGf0vTTY94wRU0W7h%2BobgmywPvCWbUZZUwHR4L7HZz%2BDnjKbBwFGw4ThdFsuP2bwNbKb41UK843xZW%2FnJUR%2F2mIQrFrGMdden%2Fq8dVGk%2BRAd4YePhzMwdFSbTWoMvfyoXVf0y4b5%2BXhdJKtz%2FW31xPcgVUX19dl9r9AWE63k6s8HKnXEzUQ6wSSPbEmf1zkm3jwZK7XuC9bUYQfi7m1IIC5tfr9%2FppmBHhVUTiY%2BOTmbozzt7ciAyv0js3gT42aNoefd7G%2F2l2LxgECIiiM5SfTKf1fr20fSeyi6BwRSH%2B7QG3Dn%2By3J7kqQtEwJh2V9coKuas0CydWJEt0Kv5iMprYM6EslUWKQxnkuywDjCqePgmr6zS4LGTswfarOXhNj2Hp43Ovcve6uBq4a52wFqkgdrEGNCVHVdJi%2FEVCKGSSaW%2Fqnullguq9OTwpRG0x1vvJq7o1q6e16th1w6xwWuys7fNyEgvUQGiX3qaUYaNwBkMxlijD2qi1Y7wjHAb9DyXchH67EtNgDQgsdRHTt8WPCx0wAW%2Bgy9jppHPWs1I2P59pu06ICF4c83Uqa63LBzrXze00eINv5RYZIxRNMIeL5b0GOqUB9ekSXWMcfDtTZM3z%2B%2BZE2xUA8Nq%2Bn%2BDRj5RUqOAAgFtBUy%2FfdJltC0jHUQGP4NQ4c%2BFqaMOoTKNSLJZ0NGTdkWxP1ARXipXZBb0oYDQ8y8Un7YesHJYHGKaNuT8rFUAAyWMzcE9kVkpLv4sAQQQMU0BkHuaOd7MZ1vSqOM%2BVq9C22dP8RlbmL0HNFCD%2BvdIX93KtZgGu3a5pJmMOVTmqwUEO6nFw&X-Amz-Signature=95521a27d6db997e2c5390ad7240b0227d854fbb387da4ae2e75f33ee1a32379&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQQVWGI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmRphg5JfBXBezIwsHGkNZfYX9fSfF%2BHuTjU4VhIzzjQIgWGC74H%2BQbi2bLEEjsp4%2Bx8rfBsnlowsB1iTMz62fJ4cqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzugXV%2F1%2BBG60l7fircA4a8Hw1DH%2F6zEJvnubm%2FdAz27bc2x9psXgstVfWiWcGf0vTTY94wRU0W7h%2BobgmywPvCWbUZZUwHR4L7HZz%2BDnjKbBwFGw4ThdFsuP2bwNbKb41UK843xZW%2FnJUR%2F2mIQrFrGMdden%2Fq8dVGk%2BRAd4YePhzMwdFSbTWoMvfyoXVf0y4b5%2BXhdJKtz%2FW31xPcgVUX19dl9r9AWE63k6s8HKnXEzUQ6wSSPbEmf1zkm3jwZK7XuC9bUYQfi7m1IIC5tfr9%2FppmBHhVUTiY%2BOTmbozzt7ciAyv0js3gT42aNoefd7G%2F2l2LxgECIiiM5SfTKf1fr20fSeyi6BwRSH%2B7QG3Dn%2By3J7kqQtEwJh2V9coKuas0CydWJEt0Kv5iMprYM6EslUWKQxnkuywDjCqePgmr6zS4LGTswfarOXhNj2Hp43Ovcve6uBq4a52wFqkgdrEGNCVHVdJi%2FEVCKGSSaW%2Fqnullguq9OTwpRG0x1vvJq7o1q6e16th1w6xwWuys7fNyEgvUQGiX3qaUYaNwBkMxlijD2qi1Y7wjHAb9DyXchH67EtNgDQgsdRHTt8WPCx0wAW%2Bgy9jppHPWs1I2P59pu06ICF4c83Uqa63LBzrXze00eINv5RYZIxRNMIeL5b0GOqUB9ekSXWMcfDtTZM3z%2B%2BZE2xUA8Nq%2Bn%2BDRj5RUqOAAgFtBUy%2FfdJltC0jHUQGP4NQ4c%2BFqaMOoTKNSLJZ0NGTdkWxP1ARXipXZBb0oYDQ8y8Un7YesHJYHGKaNuT8rFUAAyWMzcE9kVkpLv4sAQQQMU0BkHuaOd7MZ1vSqOM%2BVq9C22dP8RlbmL0HNFCD%2BvdIX93KtZgGu3a5pJmMOVTmqwUEO6nFw&X-Amz-Signature=5f7c23eb79e07dbaa6e64118b4a6132fef754664328ab26cd76fcb4ad15bb711&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
