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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOY3YIZB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5WtSAEd4Ctx2I9%2FxVjrTQriK5VZBY7OaYNbNGuk%2FQkAiEAsxfeRtPdkT79PNNpAC3VnuQH2AwX%2B16rIFfWgRk7DbwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0Ex6e57NYgd8fpNSrcA7C2ijRFnMZdZ%2FxBi2xLOLS7DcrpEP2sLpCb9JLhzDFLBA8TjVDoUrSyL5LxE2skaYf33R7Z4HyWMs%2Fkeinikh1Y8Cjhya4wQz%2FT4Alx8nkeS8lmewAP%2FLrNdV0pleyEdBJ%2BM7WfjqXH7xrEmvMf4WCNMNHAcdAVH8t7XIRvEEIs5YOFuVhPpb4Yjygl55pWQxBk0YkR316R0WOEHxZ%2B2pExMA8QTFK5VImrfuk96u%2F77yZetY5PYw6VxLj%2FAkrE1Kxi2Y5Hdovh8LYAH6OzlNSdrRR1Bn99dxR%2FhM%2BkS%2FaKMH0Vru3O4nUJk3Usy%2FLeZy6FGY0VuhX2zuAxD6muIYuXN0h8cmhpnNC4ktOwECxTwWcWwu3LjzJhD3ykkFctacoknoQudy3OMBS0E%2FcKlMeBVaPzDc8qjHB1HyaRfBwnnJJMjZCgUPhwpbQXcBbbXXXl37T189zahEjMpBjNwBxmcqqPZWQNpmVDDX7AKWSYSv0torlwpNjULe8flsRId9RKy1TQVB3xwqvSok7hb9CgZGtmVGYSV9WM661ZHDmwJZHDPuYWTAqg1QikFSwy3cGMd8OrWfjzKtWjNvS7oeSJUIe6gM0BHPxyT6rJoXPTBXTFqzJq6bgeTnbpMIGI6L0GOqUBTqc5vOa%2Fep6w1eSYKcNVg4W0%2FyhGNaRj2BsEWh4mePjH99zY4HgLo02SfuAJx8du0TgI%2BTahOiWc0G2EQoBPGl%2B8AOUTDIhzca0U8zoHv%2FJlU2bOwlVRHcC3lo1vZ7GyHGJgmbzOlxvuJ5HNqLKWjNCjmm3eh8ZeBC%2B2M%2BsNjWuf%2BLIS8quJKEPuejt7vKXV0ghieN4noNUs%2FldhfpZL%2Bcgo%2BKRO&X-Amz-Signature=a45f087983f54e45c06d2362a301af5c588daa985d65164169dd44cc3068879e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOY3YIZB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5WtSAEd4Ctx2I9%2FxVjrTQriK5VZBY7OaYNbNGuk%2FQkAiEAsxfeRtPdkT79PNNpAC3VnuQH2AwX%2B16rIFfWgRk7DbwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0Ex6e57NYgd8fpNSrcA7C2ijRFnMZdZ%2FxBi2xLOLS7DcrpEP2sLpCb9JLhzDFLBA8TjVDoUrSyL5LxE2skaYf33R7Z4HyWMs%2Fkeinikh1Y8Cjhya4wQz%2FT4Alx8nkeS8lmewAP%2FLrNdV0pleyEdBJ%2BM7WfjqXH7xrEmvMf4WCNMNHAcdAVH8t7XIRvEEIs5YOFuVhPpb4Yjygl55pWQxBk0YkR316R0WOEHxZ%2B2pExMA8QTFK5VImrfuk96u%2F77yZetY5PYw6VxLj%2FAkrE1Kxi2Y5Hdovh8LYAH6OzlNSdrRR1Bn99dxR%2FhM%2BkS%2FaKMH0Vru3O4nUJk3Usy%2FLeZy6FGY0VuhX2zuAxD6muIYuXN0h8cmhpnNC4ktOwECxTwWcWwu3LjzJhD3ykkFctacoknoQudy3OMBS0E%2FcKlMeBVaPzDc8qjHB1HyaRfBwnnJJMjZCgUPhwpbQXcBbbXXXl37T189zahEjMpBjNwBxmcqqPZWQNpmVDDX7AKWSYSv0torlwpNjULe8flsRId9RKy1TQVB3xwqvSok7hb9CgZGtmVGYSV9WM661ZHDmwJZHDPuYWTAqg1QikFSwy3cGMd8OrWfjzKtWjNvS7oeSJUIe6gM0BHPxyT6rJoXPTBXTFqzJq6bgeTnbpMIGI6L0GOqUBTqc5vOa%2Fep6w1eSYKcNVg4W0%2FyhGNaRj2BsEWh4mePjH99zY4HgLo02SfuAJx8du0TgI%2BTahOiWc0G2EQoBPGl%2B8AOUTDIhzca0U8zoHv%2FJlU2bOwlVRHcC3lo1vZ7GyHGJgmbzOlxvuJ5HNqLKWjNCjmm3eh8ZeBC%2B2M%2BsNjWuf%2BLIS8quJKEPuejt7vKXV0ghieN4noNUs%2FldhfpZL%2Bcgo%2BKRO&X-Amz-Signature=8570a4efc81c79332a82d57e41ee46a2dfe8ccc70e61761c07c5c106f292d142&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
