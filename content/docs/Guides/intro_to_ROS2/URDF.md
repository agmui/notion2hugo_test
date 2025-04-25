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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2SLE4G%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV8dXusCZm76C7DRj2kMaFP00nlFVs7ZNpGJmYX2%2FrDQIgaC2JqdmeSSGMXOf8kyPHlkK3adEEYC4aE2XKy5P7dJYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDL1GLW1s8ubUIi0mfircAy2tgM74cp73AqMfm8ujrCEA31Q%2BlT0nvkoeQGZeTnj7v5iTBuyGEX%2FlpOT1Ak1%2BSGHvWlh66aBa56h2YzEkLpQm%2BeMG0C2dQws%2Bu6%2Fdq%2B7Z2mQEh536W6vkwroGBqmD3g0E2fgAkKrIVY2ggW0pduzhjxDbVp74ox2sHHKx76dKQzsUIhDGRpUBBECX3qhNSHk3GX5gwL7hDFzkAwQq5kWBy22F0BHlS8Ckz4kfW56piCPgp0MOJM4ulo0WeMdnFtQaP5sA0rctW%2FTM1%2FwC2fqEDHZSdjfHAlJq397NeVkLCxLPbHTplVB81C%2BRJC3eY6ESv2VZ2YhgM4vRHsp80%2F9%2BMZVdxHZ059MTNqutbrOqGcux0hCWB%2FEoXUO8vzFYbt6FhhRNSV1rQHh2bbcYZm6pnA3tAf1bllOpjXVAwQ8L%2B3dTezjjIu8De2%2FCwxqUN23dfnyEABbrkU87VACTPX3ZIBlg4TJdTOw61OUBQyNEf5myVa55yd961qgu0tAMJ7bXMx9YdYE9ALCnc7oSEavnU0xIR95purT2d2SD7PEeh%2B10cflcz26s%2FodgtjhPHOgvGwWmTxPlMzGSqWYD3Mq1dkLRA0HvxMtR8QgkP6sVK%2Bm2XmMQUiWbwcyCMJSdr8AGOqUB028fhtdSVaSZOQMBSxmzVXgDKVieCnqC5ljZm4vwmjMcEyhf79focCWQN%2FG2dpO3LuOeA0FQ82AL0pe1mZt%2BagCvgodFqMsWJPSTmCpR0XLCfadIOPhUCPgxi9RTHoxyEIBA%2Fgek1oWpum3Az4f4BoOCJHWK1rPYP%2FTZDp1y149xjIKM5QdnyomglY6Cdwt1okxnPlrBtz5H79SSa8LUifrZW1KV&X-Amz-Signature=b1b5514d9c991179540561176cd0a61119ac70361b2f9d536e412e419d183fe7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2SLE4G%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV8dXusCZm76C7DRj2kMaFP00nlFVs7ZNpGJmYX2%2FrDQIgaC2JqdmeSSGMXOf8kyPHlkK3adEEYC4aE2XKy5P7dJYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDL1GLW1s8ubUIi0mfircAy2tgM74cp73AqMfm8ujrCEA31Q%2BlT0nvkoeQGZeTnj7v5iTBuyGEX%2FlpOT1Ak1%2BSGHvWlh66aBa56h2YzEkLpQm%2BeMG0C2dQws%2Bu6%2Fdq%2B7Z2mQEh536W6vkwroGBqmD3g0E2fgAkKrIVY2ggW0pduzhjxDbVp74ox2sHHKx76dKQzsUIhDGRpUBBECX3qhNSHk3GX5gwL7hDFzkAwQq5kWBy22F0BHlS8Ckz4kfW56piCPgp0MOJM4ulo0WeMdnFtQaP5sA0rctW%2FTM1%2FwC2fqEDHZSdjfHAlJq397NeVkLCxLPbHTplVB81C%2BRJC3eY6ESv2VZ2YhgM4vRHsp80%2F9%2BMZVdxHZ059MTNqutbrOqGcux0hCWB%2FEoXUO8vzFYbt6FhhRNSV1rQHh2bbcYZm6pnA3tAf1bllOpjXVAwQ8L%2B3dTezjjIu8De2%2FCwxqUN23dfnyEABbrkU87VACTPX3ZIBlg4TJdTOw61OUBQyNEf5myVa55yd961qgu0tAMJ7bXMx9YdYE9ALCnc7oSEavnU0xIR95purT2d2SD7PEeh%2B10cflcz26s%2FodgtjhPHOgvGwWmTxPlMzGSqWYD3Mq1dkLRA0HvxMtR8QgkP6sVK%2Bm2XmMQUiWbwcyCMJSdr8AGOqUB028fhtdSVaSZOQMBSxmzVXgDKVieCnqC5ljZm4vwmjMcEyhf79focCWQN%2FG2dpO3LuOeA0FQ82AL0pe1mZt%2BagCvgodFqMsWJPSTmCpR0XLCfadIOPhUCPgxi9RTHoxyEIBA%2Fgek1oWpum3Az4f4BoOCJHWK1rPYP%2FTZDp1y149xjIKM5QdnyomglY6Cdwt1okxnPlrBtz5H79SSa8LUifrZW1KV&X-Amz-Signature=12af950d481cf9876f9e10c04ec876ec7e83b193d608784cdaa34082a8c78f94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
