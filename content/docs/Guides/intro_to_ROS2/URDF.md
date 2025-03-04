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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645HQEXO2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrBIFdQIqYjDSxP5NewrMSD7uYObKrmKmkW19gu%2BKmkAiEAh8dpdlvEzReFcJ%2FfIzy9GD5%2BAmnnrLYR1b9AN%2B5Tao4qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoeyTVoTVc4dw%2FdVSrcA40NY%2BMOZVw%2B2%2BLsOtzjZQov0h9xx%2F1OT1bnIvaKRlDpzLg1h8COZk%2FUdQkyPZ0ez590zOjSXuwiXrOS91lGRg5d4R2DI9oQJpdSrLcq5eumRhvvF6%2BTJ8PUN83ljfe8dAJ9gAVaYtZ8MpR10BbMqUGjqDm3PQxAAav9UG0sOrTXL%2BxaxFEF7neh6Qn54uX%2BV5UqtLmHRvNNHud%2BbSkKGDSVNOcjcWAKWTZISgLoNukoCaXvtsRfTQTyyYnB0OVVvmPOgEUhc1o4gWSoVsLj6lRW%2Bmf7mHIf%2BQGPlUzhw0mjz5ZA%2FlbRtaz%2FblVfz6MTt68VXYtC3F9Y1DEmrSOzZgvgGlU4Hp0mUm3%2BRlrv%2BLjw6H7ckOPCIzDZg18rvSJBp63GHbdNYtCxHVBkBtiDZAaJoWvAGDLYL%2FYArNEmn%2BFhLC9V156wksnaN9X%2F4v1ClerUxkKbl7hWYvVkIexv1stqSLe78OztNoqV%2Bai1h4y0RDelWBJDDB%2Fmhz6tBRcSkBTMlBpkn9TyIDpezje9YfuUCOEIPYnyu%2FRG%2ByZgroq%2FxIwdE6YdX7edId9J3DD0Q3biOFjfBHWL77C3gv%2BOzfvHDregWCu%2B1FOQCN1ZSbhEzOO9Jveq8VUjyUWjMLmunL4GOqUBbqm7xikZZ4MBWSsUol7sXBz%2Fz5gZcDQ%2FekIG%2Fvbl371yZPwL2fp4GGns8Fd6MvURKtX335dhxzgITqJa%2F0WK3uHZ3%2Be4pVBvNgg16%2B9lTYPR%2FoQ1b6YUQVm2vA9XmExvJMhW8gG%2Fq0IZouBfrhTxfWI7Oysxf9MjtkNt%2FsqA4zccRdH8hcEJr4IqAzJQqXBSWKMHwBBTarU15i3z%2FA6ZSrOwbzRm&X-Amz-Signature=3a469aed44ded0292f2c9d909a82b06db36f870a981acef69800224ae5693f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645HQEXO2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrBIFdQIqYjDSxP5NewrMSD7uYObKrmKmkW19gu%2BKmkAiEAh8dpdlvEzReFcJ%2FfIzy9GD5%2BAmnnrLYR1b9AN%2B5Tao4qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoeyTVoTVc4dw%2FdVSrcA40NY%2BMOZVw%2B2%2BLsOtzjZQov0h9xx%2F1OT1bnIvaKRlDpzLg1h8COZk%2FUdQkyPZ0ez590zOjSXuwiXrOS91lGRg5d4R2DI9oQJpdSrLcq5eumRhvvF6%2BTJ8PUN83ljfe8dAJ9gAVaYtZ8MpR10BbMqUGjqDm3PQxAAav9UG0sOrTXL%2BxaxFEF7neh6Qn54uX%2BV5UqtLmHRvNNHud%2BbSkKGDSVNOcjcWAKWTZISgLoNukoCaXvtsRfTQTyyYnB0OVVvmPOgEUhc1o4gWSoVsLj6lRW%2Bmf7mHIf%2BQGPlUzhw0mjz5ZA%2FlbRtaz%2FblVfz6MTt68VXYtC3F9Y1DEmrSOzZgvgGlU4Hp0mUm3%2BRlrv%2BLjw6H7ckOPCIzDZg18rvSJBp63GHbdNYtCxHVBkBtiDZAaJoWvAGDLYL%2FYArNEmn%2BFhLC9V156wksnaN9X%2F4v1ClerUxkKbl7hWYvVkIexv1stqSLe78OztNoqV%2Bai1h4y0RDelWBJDDB%2Fmhz6tBRcSkBTMlBpkn9TyIDpezje9YfuUCOEIPYnyu%2FRG%2ByZgroq%2FxIwdE6YdX7edId9J3DD0Q3biOFjfBHWL77C3gv%2BOzfvHDregWCu%2B1FOQCN1ZSbhEzOO9Jveq8VUjyUWjMLmunL4GOqUBbqm7xikZZ4MBWSsUol7sXBz%2Fz5gZcDQ%2FekIG%2Fvbl371yZPwL2fp4GGns8Fd6MvURKtX335dhxzgITqJa%2F0WK3uHZ3%2Be4pVBvNgg16%2B9lTYPR%2FoQ1b6YUQVm2vA9XmExvJMhW8gG%2Fq0IZouBfrhTxfWI7Oysxf9MjtkNt%2FsqA4zccRdH8hcEJr4IqAzJQqXBSWKMHwBBTarU15i3z%2FA6ZSrOwbzRm&X-Amz-Signature=8ed34729fede602b596845d88546e8e8dc2932b7df282d676dbead44852cae0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
