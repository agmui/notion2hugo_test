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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TZ2RAA%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ%2FZZQGzut1tB%2Fxbi%2FvtRzOyFZUU9W%2BEaDhodjoj4k%2BAiEAy68KhByT8jO7qERKUFWo%2Bmc535XCLjeaD3GHylfCsEwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVhnfcn72rMifLLXSrcA8pHA6IzXMP1XFMHsltsxtWv0WlSI4fWOzTfeLBEdPuKvAWYbdu4jX301sKCqSeivFjqVoMEhWWx6Eo79BLGzBuKhKdy%2BaaRcTSlnbVL3JYHbtWZt78thYx4cYFWota6rkfyLYnublu1ZLKHBU9C7ROXbLmn5mWcdPtMJeT%2B8O2HMDp1XzUqM0FGZx7pxbcDpYRFGLPP0CSnfnarJkv3ZKBHj8290uJpZAkW%2FuLkEzCwtD2ooyCWGPlEnJ7LzQWqw2gpj%2BX4xX1xA4J5wm6ygXvowt4vJUNg45snL4%2Fm%2FrkiwcFbSSnusEwy%2BFQ9QOEs%2FfVWyhvSV8Xqg8B%2F7HaCr1WQJ40I1razAQtsphnMQcGR%2FHee%2BntiT%2Ft0kUUJzUbff7eWaAR9xLhfGQhCh0ZswwMLAISoqWi2AaNi08TJWMUgCsVyqH0UdtLjkGcc4yKchD%2FGuCuxOyWWQrlJ%2BTni66hHlVEJB06Ndd01ugMtmzxNS3EZh%2F1Hs7k4%2BqRBv2NqG3MZH2od12xLyP7XOBK6eBC9WIog31o1TfotCJt6HVVvgFBlnXINrU7caANIE4ZjQurvS7IZPfRcDSJnp6jP7%2BVfFVf1LJZ6IV9Fo1qgDENFO82sufR052CA3StQMO6n18YGOqUBGBT%2FkRy0xAoyGneg9DcBKBJundLb2y5B4r63RTK5WKP%2BzwiMucl2dsZthB5Pt5dPUGZqZBd8U5S9J8xr%2FXaVcfJK7um4ZPNll2gI1y9A2RGctMPbbtI%2B2F6WtU7gEK0h7ISA4IFYyO82kd5sHfdIIFWsyf%2Bvmi46sL7l6fvXDWenCtbc6SRSZ1CdOuCPqWCsJKdq3QxfcaFm3CNv1OX3XpE%2FDCGV&X-Amz-Signature=855ed813757c21191c80399218c96ca8fbeb90eef1dc6719d911e1d4cb6ea637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TZ2RAA%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ%2FZZQGzut1tB%2Fxbi%2FvtRzOyFZUU9W%2BEaDhodjoj4k%2BAiEAy68KhByT8jO7qERKUFWo%2Bmc535XCLjeaD3GHylfCsEwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVhnfcn72rMifLLXSrcA8pHA6IzXMP1XFMHsltsxtWv0WlSI4fWOzTfeLBEdPuKvAWYbdu4jX301sKCqSeivFjqVoMEhWWx6Eo79BLGzBuKhKdy%2BaaRcTSlnbVL3JYHbtWZt78thYx4cYFWota6rkfyLYnublu1ZLKHBU9C7ROXbLmn5mWcdPtMJeT%2B8O2HMDp1XzUqM0FGZx7pxbcDpYRFGLPP0CSnfnarJkv3ZKBHj8290uJpZAkW%2FuLkEzCwtD2ooyCWGPlEnJ7LzQWqw2gpj%2BX4xX1xA4J5wm6ygXvowt4vJUNg45snL4%2Fm%2FrkiwcFbSSnusEwy%2BFQ9QOEs%2FfVWyhvSV8Xqg8B%2F7HaCr1WQJ40I1razAQtsphnMQcGR%2FHee%2BntiT%2Ft0kUUJzUbff7eWaAR9xLhfGQhCh0ZswwMLAISoqWi2AaNi08TJWMUgCsVyqH0UdtLjkGcc4yKchD%2FGuCuxOyWWQrlJ%2BTni66hHlVEJB06Ndd01ugMtmzxNS3EZh%2F1Hs7k4%2BqRBv2NqG3MZH2od12xLyP7XOBK6eBC9WIog31o1TfotCJt6HVVvgFBlnXINrU7caANIE4ZjQurvS7IZPfRcDSJnp6jP7%2BVfFVf1LJZ6IV9Fo1qgDENFO82sufR052CA3StQMO6n18YGOqUBGBT%2FkRy0xAoyGneg9DcBKBJundLb2y5B4r63RTK5WKP%2BzwiMucl2dsZthB5Pt5dPUGZqZBd8U5S9J8xr%2FXaVcfJK7um4ZPNll2gI1y9A2RGctMPbbtI%2B2F6WtU7gEK0h7ISA4IFYyO82kd5sHfdIIFWsyf%2Bvmi46sL7l6fvXDWenCtbc6SRSZ1CdOuCPqWCsJKdq3QxfcaFm3CNv1OX3XpE%2FDCGV&X-Amz-Signature=6a30b2253d6caea37e909a494ac6aa337edc41d868976acc485de7895a15080d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
