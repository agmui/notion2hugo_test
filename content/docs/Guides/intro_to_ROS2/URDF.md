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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WOKS3XT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6Ti7r8SY1%2Fgf23GgRkPSRfWy1SvDgb9i%2Bp3lJbyOlmAiEAgu%2FqccdVCLTB5TzOiuK5yxntrW7FLvY3N888CaRj9Ogq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPTnTkY%2FKFZpeHuI0ircA1JvA4Nop1kvxAcZ%2FATMw%2FOaKtXq5k%2BdiBuEQmZm6ZSaghMlznhoOoNd%2FcHhxZeuAskoXIkgsfISfCpsrvZJq9egl%2B3fztUKw%2F7XTjeTfZWWYUgJX4M8n0kksI8xVl6gUdXEuvMf2P4UX6c0vWSRJ9l4hFlgktUNGah6sxo0goNAqYDU2OKAf26anxwVO2tfYEzAc%2F9%2FcEnuAEdEBsOOZUfRDmjrPPvmRRw91dl%2Fea6ekY1ooP87xL5wqYzVm%2BkZUr4ME2XAiB4wuZHwpVGXDWHoctCc%2F3BbgFmI2yr9o2E7thpPpChQYAgYrzYqpxlqTAuyEf5vqnifzTZgUmBwjjl5alHdLCb0uWQidcoBZPX40weGLW3V5%2Frxs2lMQw5bx7WJowZl9uMB5R33e%2BaE7Ob2cL6M2ukYbKwauI8grPYcHeElGU2kKLDC5%2FDASFMRnqrOh8OGLMOfVrJNGFrz0BrZTPakbLxqz1e4bHxpj6H1%2Bd4BK08heoyK61gqUffYrMe%2B0CPTm%2BGJLfoU%2BnpyusKMxzc9mIHyTw6t87xbQUZOq30CNqHL%2BKHAfWXzqj5Ztyxw%2FPE5YW%2BwtZ7kNotO5w2J%2BFThm%2FEVrwdiDhoNM5AdeHeDxB00x5AXuBOnMLzR8MQGOqUBn1Ph9Sbz81CXiVVsQxt%2BTCF3xdh%2FPrUi8FK%2FXGhM%2BbKv66ruUtYrhxc2zOY4CU5ZlxzooYh4unlXWKqKlAQUup8CZBiGrPBWuIhu2kFmrQsmGgAZgYZNipnJTlIcbUbsmn38r4nSCh%2FBSs62mziW0x1cH%2FKIwlaCOBn1lz4%2Bi2S1SjB4gTUM14ESRAmyGrvmIZ1fxjj25TTkipeBsp7AHmuRJSHs&X-Amz-Signature=ea635d0810088733c79d9d0fbb2160af7f73c35613d41d0a022ac913d48c654e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WOKS3XT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6Ti7r8SY1%2Fgf23GgRkPSRfWy1SvDgb9i%2Bp3lJbyOlmAiEAgu%2FqccdVCLTB5TzOiuK5yxntrW7FLvY3N888CaRj9Ogq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPTnTkY%2FKFZpeHuI0ircA1JvA4Nop1kvxAcZ%2FATMw%2FOaKtXq5k%2BdiBuEQmZm6ZSaghMlznhoOoNd%2FcHhxZeuAskoXIkgsfISfCpsrvZJq9egl%2B3fztUKw%2F7XTjeTfZWWYUgJX4M8n0kksI8xVl6gUdXEuvMf2P4UX6c0vWSRJ9l4hFlgktUNGah6sxo0goNAqYDU2OKAf26anxwVO2tfYEzAc%2F9%2FcEnuAEdEBsOOZUfRDmjrPPvmRRw91dl%2Fea6ekY1ooP87xL5wqYzVm%2BkZUr4ME2XAiB4wuZHwpVGXDWHoctCc%2F3BbgFmI2yr9o2E7thpPpChQYAgYrzYqpxlqTAuyEf5vqnifzTZgUmBwjjl5alHdLCb0uWQidcoBZPX40weGLW3V5%2Frxs2lMQw5bx7WJowZl9uMB5R33e%2BaE7Ob2cL6M2ukYbKwauI8grPYcHeElGU2kKLDC5%2FDASFMRnqrOh8OGLMOfVrJNGFrz0BrZTPakbLxqz1e4bHxpj6H1%2Bd4BK08heoyK61gqUffYrMe%2B0CPTm%2BGJLfoU%2BnpyusKMxzc9mIHyTw6t87xbQUZOq30CNqHL%2BKHAfWXzqj5Ztyxw%2FPE5YW%2BwtZ7kNotO5w2J%2BFThm%2FEVrwdiDhoNM5AdeHeDxB00x5AXuBOnMLzR8MQGOqUBn1Ph9Sbz81CXiVVsQxt%2BTCF3xdh%2FPrUi8FK%2FXGhM%2BbKv66ruUtYrhxc2zOY4CU5ZlxzooYh4unlXWKqKlAQUup8CZBiGrPBWuIhu2kFmrQsmGgAZgYZNipnJTlIcbUbsmn38r4nSCh%2FBSs62mziW0x1cH%2FKIwlaCOBn1lz4%2Bi2S1SjB4gTUM14ESRAmyGrvmIZ1fxjj25TTkipeBsp7AHmuRJSHs&X-Amz-Signature=20fc825507f0d9760a54dacb89dfd77e9a5d28bcd82cfbee5f42681ec481622d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
