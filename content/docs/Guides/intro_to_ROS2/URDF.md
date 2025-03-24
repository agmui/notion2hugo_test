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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVSGXUS3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA92RtjEQKTzq3W%2B9t3s%2B0E9vImN8Ta3WfqhD9sp5%2FBYAiEA1zTZyoBjpC1ORPms8HYPIUTHpoTaF7LGR%2BNcBVoAcbkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLm4WdJrwWdPrYuHTCrcAwqv8ulfBi3QnxL%2FL2JYi8PZ%2Fb3L3YiCsuic6sTBHddMQprEjrp%2FIm0GWgr8bdEhxkYKudHD83mY%2BBvbv39FuCWr8Z8B%2FOjfF%2F3szsu7BAoi8m1ff2RXMWBZNjDwUdPYXeFDHfOXk5mxtnW480N1co%2BnBfBDESnrvP7pPqvjYV%2FXhgmgvz6lx7eOrk0V1G0ugsxQ0EASvBdl%2FG5%2FIaCxIKHPbEXay%2FbZQE%2FdQd0tv0OVP5lVwdzW9K1rQm1slqZOBjaKtVMfnjx%2FIwqgmKUFdZCxGtOhxpRJbrJBVF%2BLGZdHCQ4rDsX1L2RzPVGAaDvyyco%2BGfMYD2iv9Yb0uxfHRaHMo%2Bq9RyKhRGsrSpwExUWCnafzvTrOAI1L%2BvBrgKK88NSknyydtRG%2FadXwJPGUQ%2FvNHFwha2OuitkQydwsM0UYHKTaQg4d%2FLrWL3D%2BTbKaO4VQFfJUpREQm8lHOGqSINHDtj8vnbM%2FjD3djEjFqAOM1o7Xz%2BWR2xAyUnwjKOC0Nw5JbJbXMfwIEYW%2BinOPDVhd3baDPHvF20n2akWFNAlVlXZZDHUv%2FAnlQG8QexpPZ%2F0T%2BkrAVFHVMxK5LmI0QsLj%2B0DgOn0OR3c03VcfFnbybBArcDFGw%2FvnvS2oMNP9hb8GOqUBwlY6lpH8I42pic%2FUoayyrpf0SrDAFi5l5WBhdnwPEenihXLdJ%2F%2F6ZZwouti1y9PxrF1D7mHtfcGZ6Jdygc49NOD5YIfDp%2FX9wmalGDTXVqWl2g78HLaGrU5DBgUYEo3Nk23ELLNdpVtvW2Mj0ofWKuUF7uiN5FQGyxVwA0Ac75ibRVv9W%2F06wzLBzMsw4Bcl%2BKHwWdk8Nm8bZWnSBNeoNDbiWzUJ&X-Amz-Signature=496fc72a53a4aa4fd9cbd494337543963290a94530b6ededc994bea9986db885&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVSGXUS3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA92RtjEQKTzq3W%2B9t3s%2B0E9vImN8Ta3WfqhD9sp5%2FBYAiEA1zTZyoBjpC1ORPms8HYPIUTHpoTaF7LGR%2BNcBVoAcbkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLm4WdJrwWdPrYuHTCrcAwqv8ulfBi3QnxL%2FL2JYi8PZ%2Fb3L3YiCsuic6sTBHddMQprEjrp%2FIm0GWgr8bdEhxkYKudHD83mY%2BBvbv39FuCWr8Z8B%2FOjfF%2F3szsu7BAoi8m1ff2RXMWBZNjDwUdPYXeFDHfOXk5mxtnW480N1co%2BnBfBDESnrvP7pPqvjYV%2FXhgmgvz6lx7eOrk0V1G0ugsxQ0EASvBdl%2FG5%2FIaCxIKHPbEXay%2FbZQE%2FdQd0tv0OVP5lVwdzW9K1rQm1slqZOBjaKtVMfnjx%2FIwqgmKUFdZCxGtOhxpRJbrJBVF%2BLGZdHCQ4rDsX1L2RzPVGAaDvyyco%2BGfMYD2iv9Yb0uxfHRaHMo%2Bq9RyKhRGsrSpwExUWCnafzvTrOAI1L%2BvBrgKK88NSknyydtRG%2FadXwJPGUQ%2FvNHFwha2OuitkQydwsM0UYHKTaQg4d%2FLrWL3D%2BTbKaO4VQFfJUpREQm8lHOGqSINHDtj8vnbM%2FjD3djEjFqAOM1o7Xz%2BWR2xAyUnwjKOC0Nw5JbJbXMfwIEYW%2BinOPDVhd3baDPHvF20n2akWFNAlVlXZZDHUv%2FAnlQG8QexpPZ%2F0T%2BkrAVFHVMxK5LmI0QsLj%2B0DgOn0OR3c03VcfFnbybBArcDFGw%2FvnvS2oMNP9hb8GOqUBwlY6lpH8I42pic%2FUoayyrpf0SrDAFi5l5WBhdnwPEenihXLdJ%2F%2F6ZZwouti1y9PxrF1D7mHtfcGZ6Jdygc49NOD5YIfDp%2FX9wmalGDTXVqWl2g78HLaGrU5DBgUYEo3Nk23ELLNdpVtvW2Mj0ofWKuUF7uiN5FQGyxVwA0Ac75ibRVv9W%2F06wzLBzMsw4Bcl%2BKHwWdk8Nm8bZWnSBNeoNDbiWzUJ&X-Amz-Signature=66300706c2c71fbcfc2fc5b4be4a25f1c82107fc20c7eacb4992f357392cc1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
