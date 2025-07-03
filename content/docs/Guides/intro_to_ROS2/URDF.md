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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNEFQXJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQC%2BMJcXTa01qnHzrM8gTT5CupNxRwcRcuUv7vxlbdpOiQIgDgbqwJh4p2NUJbFYqR7GsCRx3k7L73IpGZUBfClOeRAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLJ1tqiOC2VNkuXYzircA8mOYQ6mO1EY4r%2F%2BwdKX8o6cYrq3rvpw9M0r%2BphD8KSHipiTO45kU930rusvkE%2F9DKulE%2F%2B4IPqm%2FxXHTzYmsplbVN%2FsMADN7eprKJs%2BXTHNmyZiTpokmT%2BmcuECntAtDYz%2BVw5FSUUtLi2T%2FnhHFhj%2Bq0JPVdaBFOjo0p7SJx7%2B12Nzb16zPKU1IsIuSHG1pRGNsbIX0L2CdIAM%2BmDw8BYLETTTp8brtyL7Xro2mxeU58%2BSSgabJrCEyLmGykZLl%2F6NpttLlxX4zmgzrXJIF7oL8nnvbMvYJWTp18opNJ53BBNw0rc%2FbNBu%2Fxofv1mjtJs1KHgRBWepmVpyw9pRpMLRv1CvBCn7iucY7tLqeZvY11fm%2FdQ7SjJzYbxGre67rfiGdL%2FS4mkuE4WCWxbPa5NoXXHvwH35P90NYZow5Q3mJz4LK%2FeQAWOR3HUt6qdP2AXy9VHA3uRe%2FnAQLH72pxOWWrWl3s%2BqfDks75sRzudkW7Y7MnigWL%2BVhZHyy5ypd7uOdFPjihbRikCcHvkjdSvRKELNdya5nH8zEKnXw%2FnyoUr1JMaL5EhQPwADl7uBNPGLhSPv6jGaIzFnOMqkX0wQQzBz5PtCwiYo5HutT2XxxPKA%2FS8I8q5zE1LuMLiQm8MGOqUBVEHGzp6mB6iE2H1%2BSBU8G83kAqqRqphVCtfMEksBeHtU0dZDh9PihINlhmK0DYb%2BTGIpF8%2BcvU8Dc8uOpUjaZ6D2QCSFQ0OtzZftIc7%2FFg%2Fl1RUhTM%2BB0AnFhCNVWNksGBilLr4uste0ID1DGJLlnJvR23waWSMm9m2MCCaJ%2BwLUcA%2F9lVuDwTsMqDvLGb%2B9tEHMq7BkvutRn533mxFm0HrOEDzO&X-Amz-Signature=dbf17eae1b0b6c46310364510e6ca45beeacff3292288101e22ed4358933dc9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNEFQXJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQC%2BMJcXTa01qnHzrM8gTT5CupNxRwcRcuUv7vxlbdpOiQIgDgbqwJh4p2NUJbFYqR7GsCRx3k7L73IpGZUBfClOeRAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLJ1tqiOC2VNkuXYzircA8mOYQ6mO1EY4r%2F%2BwdKX8o6cYrq3rvpw9M0r%2BphD8KSHipiTO45kU930rusvkE%2F9DKulE%2F%2B4IPqm%2FxXHTzYmsplbVN%2FsMADN7eprKJs%2BXTHNmyZiTpokmT%2BmcuECntAtDYz%2BVw5FSUUtLi2T%2FnhHFhj%2Bq0JPVdaBFOjo0p7SJx7%2B12Nzb16zPKU1IsIuSHG1pRGNsbIX0L2CdIAM%2BmDw8BYLETTTp8brtyL7Xro2mxeU58%2BSSgabJrCEyLmGykZLl%2F6NpttLlxX4zmgzrXJIF7oL8nnvbMvYJWTp18opNJ53BBNw0rc%2FbNBu%2Fxofv1mjtJs1KHgRBWepmVpyw9pRpMLRv1CvBCn7iucY7tLqeZvY11fm%2FdQ7SjJzYbxGre67rfiGdL%2FS4mkuE4WCWxbPa5NoXXHvwH35P90NYZow5Q3mJz4LK%2FeQAWOR3HUt6qdP2AXy9VHA3uRe%2FnAQLH72pxOWWrWl3s%2BqfDks75sRzudkW7Y7MnigWL%2BVhZHyy5ypd7uOdFPjihbRikCcHvkjdSvRKELNdya5nH8zEKnXw%2FnyoUr1JMaL5EhQPwADl7uBNPGLhSPv6jGaIzFnOMqkX0wQQzBz5PtCwiYo5HutT2XxxPKA%2FS8I8q5zE1LuMLiQm8MGOqUBVEHGzp6mB6iE2H1%2BSBU8G83kAqqRqphVCtfMEksBeHtU0dZDh9PihINlhmK0DYb%2BTGIpF8%2BcvU8Dc8uOpUjaZ6D2QCSFQ0OtzZftIc7%2FFg%2Fl1RUhTM%2BB0AnFhCNVWNksGBilLr4uste0ID1DGJLlnJvR23waWSMm9m2MCCaJ%2BwLUcA%2F9lVuDwTsMqDvLGb%2B9tEHMq7BkvutRn533mxFm0HrOEDzO&X-Amz-Signature=7aeb321e1c3a68733811dc2bbe580c6dd5df0fc4318a0de32d28a2d52b4302ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
