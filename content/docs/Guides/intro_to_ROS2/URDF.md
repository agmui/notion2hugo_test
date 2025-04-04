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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OCNVRD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXeTBaIG1kWQxHzv2jZYm01hNzfgtvRZICpJL205Z4mAiAtGvTsAKQSK3vUmWKbGNxDDtMn5zdc%2B0Xs8QeNv35rKSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDySjtkljtzLY%2FzRdKtwDpeVSviVjROxsslneGMu4hv6Pqw0gDRDK5Zraiiusndry3HL4ZyNVbDchpq38E9sCnLw5u5VNSgSFXfprD2%2BoAga4KJ0DsaYQ7KAplQXhnSbEqqweV4JVPMZkRC6dJ5c0rf6tNt9JxLjmmfnb03Yp7OSD8Nf99p2o%2BsSd9n8m0pQ3ge9fsUyVr0nRfuybiVAXc8briSWfbOVaMTVbWN6INryKDq3BeGHuuX7knRHNoMD3rIxwqLCnSgrxip58LfAU%2F7yKRtoA3qC%2Bno2UnW1erUB%2FgvGEJ8hWfsyi6K96f5yv3JALUpMZykJEqgEqnP5c9pP%2FZ06zFgJt51suFnrGNSUcT%2BBG9ESQD8UlJ2ko0gKIiPkJzC01aGsl2ntg4NKBL1MF9r9n7g92kDbY0VHLTbDQh9a%2BpOHmhq%2FNLFvZoD6ArTv%2BxL1JCjoa5YQX0m%2Fl6yUZTUiUsN3VXQ6QZxGVAIziVKtRzi%2BjZS5Mw8YMlcCB2bIjgkqAQi1SHS5TQyuiHl3G6LB6FGxlOfuPtobZFl2IeBitXqQIXPiVbz0uBMTelAozk4TZ7ZC1KFJFIpS77VDQA5GrmEME%2FQvb5JyeQsBxosg2JwbR9WJJ3NVKVJMSrYqjRX8sQDJ4weowkoK9vwY6pgHsHLdyjZ%2Fnb2M5fKMzLL5fLgB11kJUsUMJ7vrE8YLjfdfCC%2BemHKr0O0%2B9x%2FcICWF6v32nBxsa7jiRGJhF6nyUmz6rsCEwM6Zu5KC2eeS%2Fy3UDTtUM%2FTTdRg6TO0OhWF3WeGJLyyJKCQQHx729ZZRbOxDH8IIjj3WsHPw3luVMHhqxKzVZf3R33VcBdn%2F9XFxuX%2FUUwYeAj80Ot7FVjHc3clIR%2F5W8&X-Amz-Signature=97ed7d43ecde943879433ebcddfcb578d1413cb65baf53715e9bb8b77390fd44&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OCNVRD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXeTBaIG1kWQxHzv2jZYm01hNzfgtvRZICpJL205Z4mAiAtGvTsAKQSK3vUmWKbGNxDDtMn5zdc%2B0Xs8QeNv35rKSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDySjtkljtzLY%2FzRdKtwDpeVSviVjROxsslneGMu4hv6Pqw0gDRDK5Zraiiusndry3HL4ZyNVbDchpq38E9sCnLw5u5VNSgSFXfprD2%2BoAga4KJ0DsaYQ7KAplQXhnSbEqqweV4JVPMZkRC6dJ5c0rf6tNt9JxLjmmfnb03Yp7OSD8Nf99p2o%2BsSd9n8m0pQ3ge9fsUyVr0nRfuybiVAXc8briSWfbOVaMTVbWN6INryKDq3BeGHuuX7knRHNoMD3rIxwqLCnSgrxip58LfAU%2F7yKRtoA3qC%2Bno2UnW1erUB%2FgvGEJ8hWfsyi6K96f5yv3JALUpMZykJEqgEqnP5c9pP%2FZ06zFgJt51suFnrGNSUcT%2BBG9ESQD8UlJ2ko0gKIiPkJzC01aGsl2ntg4NKBL1MF9r9n7g92kDbY0VHLTbDQh9a%2BpOHmhq%2FNLFvZoD6ArTv%2BxL1JCjoa5YQX0m%2Fl6yUZTUiUsN3VXQ6QZxGVAIziVKtRzi%2BjZS5Mw8YMlcCB2bIjgkqAQi1SHS5TQyuiHl3G6LB6FGxlOfuPtobZFl2IeBitXqQIXPiVbz0uBMTelAozk4TZ7ZC1KFJFIpS77VDQA5GrmEME%2FQvb5JyeQsBxosg2JwbR9WJJ3NVKVJMSrYqjRX8sQDJ4weowkoK9vwY6pgHsHLdyjZ%2Fnb2M5fKMzLL5fLgB11kJUsUMJ7vrE8YLjfdfCC%2BemHKr0O0%2B9x%2FcICWF6v32nBxsa7jiRGJhF6nyUmz6rsCEwM6Zu5KC2eeS%2Fy3UDTtUM%2FTTdRg6TO0OhWF3WeGJLyyJKCQQHx729ZZRbOxDH8IIjj3WsHPw3luVMHhqxKzVZf3R33VcBdn%2F9XFxuX%2FUUwYeAj80Ot7FVjHc3clIR%2F5W8&X-Amz-Signature=d2510d9fcf67f1f0a53fdbde26eb0ab70791a5a4171894e03cd994b3e1a3e538&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
