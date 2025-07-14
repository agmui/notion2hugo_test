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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22MGWYG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIA1KR2QXqcvs3s96lo2yAjQz71FSsyLDPi3bOP9TjXwwAiBzEmsFd5hXqgPOT8QI2bzQMjEuRsLh5ik4Vwuvka3eqSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMury%2FzSN205yNQCKrKtwDsR%2FaaoDFT7Y55KAZt%2FnY2l8ovC4uTkORSj206fqiXNL1fyOF%2BwzV75CjYWy%2FSi5YXvA8npf5a6xkJrni%2F7NIVPh4T7%2BwSU1VxjsQgMSMoo0lLOjgTw6gE5%2F30%2FB%2BmG6JSzpax7h8WsWZJqF0XoyK5yMf0fuP3H5FUICqXkMSIB0101jkge%2FBOkdFkP5mwmRogwO3kMQFblTX2SXCKFoC4x1whui1miY8MSfejnYnGgFackyiu7UAjl5K1gnPMznCMuvvcBm2iS5tnKxzwwC2w%2Fvvq8mKqzODq%2FFMXpCM%2BKTeHMmqBYSDKnLVZHy7f8Zg6kmfBAFE55WkMAd%2Fqlrc5anxBc4nASRtKVMxnZ95hBUw7Zb4xh6ePJFKId%2B0qqsJVPYLXlCTVOblgKfs3%2BLf2QiaHcssMltnJOxOG8hww15s%2B%2FN8K%2Fw3%2FR8VeazzJe7IsIRbxX5Ogi9iOIZMH7iriOaHkzok1JJMdTRmfgIcej327abb1pWpgq%2F0d4%2BsO8H%2Fd%2FdU%2Fc8oFnH7apWjcjBZZlFikscIba3C%2BA6CHciXyKaZ7%2FmydP128VEK3s%2F98i6iTHOv9ZqoipixFm0PULXUyGhB%2FGCGkkaRp0HZEWks0RhMjGD9K%2Bl%2BWq2esXYw%2FofTwwY6pgGrbmMxIzYIMZDoSaXPZ0CI876kh8QgK3ta5YvA63g2mSvxvktO7XBn0mwWfh8mu3EcmZdIrKGJJWnni%2FdFybPDwFODxZSJ7dAWlY%2BVKz%2FzMX9RNdhrQgelplH48B1XvMssqPTk3V9Ix0ZyeDFgcy414y2S95%2FYKWRLqRa4XPG8PPxtgVNLeEAH96gNxOXUkxl3XgZ6YJGp9WI79b8nMgGurbXCH5TX&X-Amz-Signature=021972115263028356dae8173595d93bfc42ea8d4221221f58a991254e05b2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22MGWYG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIA1KR2QXqcvs3s96lo2yAjQz71FSsyLDPi3bOP9TjXwwAiBzEmsFd5hXqgPOT8QI2bzQMjEuRsLh5ik4Vwuvka3eqSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMury%2FzSN205yNQCKrKtwDsR%2FaaoDFT7Y55KAZt%2FnY2l8ovC4uTkORSj206fqiXNL1fyOF%2BwzV75CjYWy%2FSi5YXvA8npf5a6xkJrni%2F7NIVPh4T7%2BwSU1VxjsQgMSMoo0lLOjgTw6gE5%2F30%2FB%2BmG6JSzpax7h8WsWZJqF0XoyK5yMf0fuP3H5FUICqXkMSIB0101jkge%2FBOkdFkP5mwmRogwO3kMQFblTX2SXCKFoC4x1whui1miY8MSfejnYnGgFackyiu7UAjl5K1gnPMznCMuvvcBm2iS5tnKxzwwC2w%2Fvvq8mKqzODq%2FFMXpCM%2BKTeHMmqBYSDKnLVZHy7f8Zg6kmfBAFE55WkMAd%2Fqlrc5anxBc4nASRtKVMxnZ95hBUw7Zb4xh6ePJFKId%2B0qqsJVPYLXlCTVOblgKfs3%2BLf2QiaHcssMltnJOxOG8hww15s%2B%2FN8K%2Fw3%2FR8VeazzJe7IsIRbxX5Ogi9iOIZMH7iriOaHkzok1JJMdTRmfgIcej327abb1pWpgq%2F0d4%2BsO8H%2Fd%2FdU%2Fc8oFnH7apWjcjBZZlFikscIba3C%2BA6CHciXyKaZ7%2FmydP128VEK3s%2F98i6iTHOv9ZqoipixFm0PULXUyGhB%2FGCGkkaRp0HZEWks0RhMjGD9K%2Bl%2BWq2esXYw%2FofTwwY6pgGrbmMxIzYIMZDoSaXPZ0CI876kh8QgK3ta5YvA63g2mSvxvktO7XBn0mwWfh8mu3EcmZdIrKGJJWnni%2FdFybPDwFODxZSJ7dAWlY%2BVKz%2FzMX9RNdhrQgelplH48B1XvMssqPTk3V9Ix0ZyeDFgcy414y2S95%2FYKWRLqRa4XPG8PPxtgVNLeEAH96gNxOXUkxl3XgZ6YJGp9WI79b8nMgGurbXCH5TX&X-Amz-Signature=f5c7754f20f15e457f04f8ccfa31a7893d98f47ff097ed813457c6a0a9d03113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
