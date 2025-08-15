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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3UDH7I%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCZZ%2FxigoS2j8UMEdp0%2BHeFUbe8TwzA1Hh%2BhW1eAbzVCQIgLrlGbNWSzWIAd%2BsKufs6VxbC3FcVxs1fdp3ycUeCT00q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDOHiSMNsH0Z6z6MscCrcAzEu8puqph1d9goT2CanuXWoZ8umoD3CAYbxMRFOslULA2n%2B%2BemiZw9k4Fs7y6aMPb2CqvCdyKtsdgh%2FcBzp5EPNNHqSySUMIbG9WV2NEmYQchfEWTZhJ5hyjy9G1lusjVYLW6KZalCC9UbvYdWTd8ukyqwHz5eTcELKupUL9MFOzqh2xLRR6JOiHvIQEs9sWyRy9M957wPwjCPXb4hUBhwsSm8%2B%2BAFoP8anYkfGR2HwNvm9EjXPYx%2FTzgYpZBRLSbGDTHTKKLQuqfGFjD4tK4%2Fkz9UTVPa1kre9tbaUY7Pa5dY0ul4bYDjxJawFAyX%2FAvT8iesvdX7JBbFnuhka3r677nLzK4FquPd6n5AjHNlsu%2B%2BiWzabHNc9t4Kk%2FvV2eISxembogaqJFgbyZ%2BYgn1bp3LodWZM6ezBjzgz7oT0xeBwbtBfYpHSS0OzFnPYtK8FcYLl1brCVgknm2LZXbvdYMICmQ1tlkWrN4iKnhPk6xybx4poXF23yL2kgNx7WH5Zy80sl3XIb875qVR3x9cWJlwvXa9hu%2BH5km1OSz%2Bm4HuSMzSwvhDXofu856zi7knYUct4oi8BzOkTPxwi%2F8sA6aKSuVu1UVVMVi%2FkpQnhcpVq3%2FEODpTpO9TzjMKnY%2FsQGOqUBhfTaicrvItqZKsrPnt8bf64qTHNzToRajjBZ0NLGmVI0Eh0E%2BWwQLMxuWVzNwtVNaZqLkgKLRMY4F1vZQbUGtYof9IsgzBqGr%2FvvViZvF1F7KZqTkRp%2FJ3qZZA3fiYuPjiIvtLUxh%2FCWIc8ELZBsol%2BWW9WHC%2BamGfeIhSta0ZbsW4AEFdmz0dkWfnKv%2BA9bqIXZLZI8xLlJviwTExbWAW3NKcOM&X-Amz-Signature=792bcb43d3abc3a3c8f12f9ac002d26e80cd3535286406883febd2ecb93caa6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3UDH7I%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCZZ%2FxigoS2j8UMEdp0%2BHeFUbe8TwzA1Hh%2BhW1eAbzVCQIgLrlGbNWSzWIAd%2BsKufs6VxbC3FcVxs1fdp3ycUeCT00q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDOHiSMNsH0Z6z6MscCrcAzEu8puqph1d9goT2CanuXWoZ8umoD3CAYbxMRFOslULA2n%2B%2BemiZw9k4Fs7y6aMPb2CqvCdyKtsdgh%2FcBzp5EPNNHqSySUMIbG9WV2NEmYQchfEWTZhJ5hyjy9G1lusjVYLW6KZalCC9UbvYdWTd8ukyqwHz5eTcELKupUL9MFOzqh2xLRR6JOiHvIQEs9sWyRy9M957wPwjCPXb4hUBhwsSm8%2B%2BAFoP8anYkfGR2HwNvm9EjXPYx%2FTzgYpZBRLSbGDTHTKKLQuqfGFjD4tK4%2Fkz9UTVPa1kre9tbaUY7Pa5dY0ul4bYDjxJawFAyX%2FAvT8iesvdX7JBbFnuhka3r677nLzK4FquPd6n5AjHNlsu%2B%2BiWzabHNc9t4Kk%2FvV2eISxembogaqJFgbyZ%2BYgn1bp3LodWZM6ezBjzgz7oT0xeBwbtBfYpHSS0OzFnPYtK8FcYLl1brCVgknm2LZXbvdYMICmQ1tlkWrN4iKnhPk6xybx4poXF23yL2kgNx7WH5Zy80sl3XIb875qVR3x9cWJlwvXa9hu%2BH5km1OSz%2Bm4HuSMzSwvhDXofu856zi7knYUct4oi8BzOkTPxwi%2F8sA6aKSuVu1UVVMVi%2FkpQnhcpVq3%2FEODpTpO9TzjMKnY%2FsQGOqUBhfTaicrvItqZKsrPnt8bf64qTHNzToRajjBZ0NLGmVI0Eh0E%2BWwQLMxuWVzNwtVNaZqLkgKLRMY4F1vZQbUGtYof9IsgzBqGr%2FvvViZvF1F7KZqTkRp%2FJ3qZZA3fiYuPjiIvtLUxh%2FCWIc8ELZBsol%2BWW9WHC%2BamGfeIhSta0ZbsW4AEFdmz0dkWfnKv%2BA9bqIXZLZI8xLlJviwTExbWAW3NKcOM&X-Amz-Signature=0465d191131b47ea6b5d9c10110398f26931f23944918383801b2067d5f351f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
