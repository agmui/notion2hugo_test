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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJ6EXBP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDzpZcWVEZKoMJywpI18Si6T7qTrgwOQgaNDph0x0Rx5wIhAIP6zuOTpe6NOPb618Qg0WEXkr7%2Bzf3autHGlVokHBlfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycUGPSdc3tBKXR%2BKYq3ANtj5nJFmfMwOha5L0mWJLQpjIbLwdtR0wMvH56s2TpDPlvjt6LF7Qgj2zhwyFMSvsCXCpOY92jXeLvJpyAXOOzLYNnk8vJSk9Ow3f%2FyJWAYM%2BmoFe%2FzRp%2FjJjNVw8jk6f%2Fps2kzVe6HZOHso3G98zRb31YNKt4V7o%2BLRaFuJ%2B%2BgdLvguOApNfSO1kJEjI5zLSPgyDoLhfaipLiqUhmK35UEaDG9czRNYc7StbK%2BTK2VTmNS2wXa47F3ck1OrBC3DKm6CZn18NhSLmGadn0ZuJsQleCgT%2FjTjFPK%2Bh4jRxOrbBWdRUDJYGwvPjp%2FoCW20V7qGgbVzrSBD2j%2BdjGhrCa7UQPGTS9ZAWIrS2HyXnELNQ1p7qqoNjISerbqTzLhvMmFYzi0SxL8SpwRRbTf7%2BqTjHlutT3vRvy75191HHjDtXk3TtjuTH8lGvQaJIQqIMv4QjfXGgqYB7TDyCZCxBZ%2FbpUn3KHfx8l6oW3Esdioax9X%2BzPw919HKnU1cOFV6czYdD10Be%2BtjWHTQ0a4Mmjf%2BV762Zg8sD1aCMYahKglQBwBdZ658Vowrv53u6AHrbBbsPKoSea0n8DUBksGbYcOsdKVSh9NZ7SuqdpTNXvtnKFv%2FjNeRoKfjW3ODDu9PXBBjqkAWxkh1f6a7eX3OwSA%2B5NZOj56kpESYjWXqRJFTeUv14GX64GnEY4tldW6AKb%2BQtlayiBNKYowDs%2FtOwxouvF2kr9ztqh0wn3JUQpFQcSu76O%2FpEc36mEQ%2FeYSDQonkwI5j4AO8jhzj2G1KJV2pWc%2Bbeqpqx8ALW59SLvqoIinXNj4Yoxh3egtUuyDEvgzICk9Ic0gzmvWglq4q%2Bl3Yv5n6KEJrzY&X-Amz-Signature=e331ec1e4fb5d32b0006a4f0b467538bc15cf6c3ce4ae87ac9257823657b4af6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJ6EXBP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDzpZcWVEZKoMJywpI18Si6T7qTrgwOQgaNDph0x0Rx5wIhAIP6zuOTpe6NOPb618Qg0WEXkr7%2Bzf3autHGlVokHBlfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycUGPSdc3tBKXR%2BKYq3ANtj5nJFmfMwOha5L0mWJLQpjIbLwdtR0wMvH56s2TpDPlvjt6LF7Qgj2zhwyFMSvsCXCpOY92jXeLvJpyAXOOzLYNnk8vJSk9Ow3f%2FyJWAYM%2BmoFe%2FzRp%2FjJjNVw8jk6f%2Fps2kzVe6HZOHso3G98zRb31YNKt4V7o%2BLRaFuJ%2B%2BgdLvguOApNfSO1kJEjI5zLSPgyDoLhfaipLiqUhmK35UEaDG9czRNYc7StbK%2BTK2VTmNS2wXa47F3ck1OrBC3DKm6CZn18NhSLmGadn0ZuJsQleCgT%2FjTjFPK%2Bh4jRxOrbBWdRUDJYGwvPjp%2FoCW20V7qGgbVzrSBD2j%2BdjGhrCa7UQPGTS9ZAWIrS2HyXnELNQ1p7qqoNjISerbqTzLhvMmFYzi0SxL8SpwRRbTf7%2BqTjHlutT3vRvy75191HHjDtXk3TtjuTH8lGvQaJIQqIMv4QjfXGgqYB7TDyCZCxBZ%2FbpUn3KHfx8l6oW3Esdioax9X%2BzPw919HKnU1cOFV6czYdD10Be%2BtjWHTQ0a4Mmjf%2BV762Zg8sD1aCMYahKglQBwBdZ658Vowrv53u6AHrbBbsPKoSea0n8DUBksGbYcOsdKVSh9NZ7SuqdpTNXvtnKFv%2FjNeRoKfjW3ODDu9PXBBjqkAWxkh1f6a7eX3OwSA%2B5NZOj56kpESYjWXqRJFTeUv14GX64GnEY4tldW6AKb%2BQtlayiBNKYowDs%2FtOwxouvF2kr9ztqh0wn3JUQpFQcSu76O%2FpEc36mEQ%2FeYSDQonkwI5j4AO8jhzj2G1KJV2pWc%2Bbeqpqx8ALW59SLvqoIinXNj4Yoxh3egtUuyDEvgzICk9Ic0gzmvWglq4q%2Bl3Yv5n6KEJrzY&X-Amz-Signature=e1adda4e2ed00bddff245348370d771608f3a8193ceeb733c1cb528258360098&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
