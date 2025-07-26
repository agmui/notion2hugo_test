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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL54UXJP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICaXmKFAitPcrpYbVk3T3leMUloIkDjN%2BM6Z2K1mBKHFAiEA548HOtKVkW40jr0jgZtMyIDXN1d6Ty5CEIANmjLlICsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAwGxZcBS%2BK4nZC2dircA80Y3374FUhUY53%2BeqpoLYLYPxq%2FvIJf8EjAr9KaBGC09s4KoT%2FzM15AsuHPpGyxXwRq04hChoE47vPCqczZU7fGgnPWrYnKzwGk0ri4NCbzHa3AnncP26Fnjt%2BEoV%2BetE%2BqIXmgLl%2BoKx6c%2Bvgf1EW93j%2BWOfKb%2F0jOeqG3S57rzP30d3xis%2FtGAUr3eI3sgZ4R%2FVZ%2FDWPOM2bBmG5UFVaef3VNY8xfxnha92kLpeHvYEQ7nBs5Vaa3WMRfT71G1LnbCEFA15IwucrLkxVBuvjK6LyU5odp7N1BDNW3uJkMcW6ycm4o0%2BNljGbrd5d%2ByRpmngA1%2BkUGaltvdsJAhIWJRMrdcTy1gnyN3MwRNXpCLTgVDwKSBKfr3gR%2B7IZyyKdWPXv50WXwu%2B193gooXa3twcIQSIBMno%2FqdUQpW1miU5QxTSsOdNNWIDJxCKn%2BzkoltAkrvk7zf9cUTXjraR4LarqGTYEfHZeKDrbAtd8tmtPA6Bq%2B9ofid92FnVfI3gKBrgeYeipnJOVSOFwK34oBkuKUAE%2FiVt3H13x7fEURXY7mtPzBrrwscx%2FhCONthkrMLaZOhjeHkkphoDYiK8rlj%2B8sDjHDKGd9Wv7uS%2FLmuy1R19WZbRmrSX0MMKb%2FlMQGOqUBhEHpwAOpJjtYzwZifxafguaCJ%2BaOxwlmM2SHnWGNZN3Wuicf6FzIgpNkYvDQm2xqV54vDuuk%2FVB49JoA9smAX%2BV3iIF6MEV2S14h%2FCLxRlc%2Bm7ULgkNcVmPG%2F5PKhOXLUOnEyexyQI%2FEas1RwiQbtOdTEQl7bDmGrFdi5LSM5RSEVegF6rBNCJj9HWdeEI7n2X55VP81xw9j%2FN8SuBt11Y5Yqzht&X-Amz-Signature=12ff9552f92e7f3ac885473b3b6925559f7026461bdf74cadfab6ec9f6ecbd44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL54UXJP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICaXmKFAitPcrpYbVk3T3leMUloIkDjN%2BM6Z2K1mBKHFAiEA548HOtKVkW40jr0jgZtMyIDXN1d6Ty5CEIANmjLlICsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAwGxZcBS%2BK4nZC2dircA80Y3374FUhUY53%2BeqpoLYLYPxq%2FvIJf8EjAr9KaBGC09s4KoT%2FzM15AsuHPpGyxXwRq04hChoE47vPCqczZU7fGgnPWrYnKzwGk0ri4NCbzHa3AnncP26Fnjt%2BEoV%2BetE%2BqIXmgLl%2BoKx6c%2Bvgf1EW93j%2BWOfKb%2F0jOeqG3S57rzP30d3xis%2FtGAUr3eI3sgZ4R%2FVZ%2FDWPOM2bBmG5UFVaef3VNY8xfxnha92kLpeHvYEQ7nBs5Vaa3WMRfT71G1LnbCEFA15IwucrLkxVBuvjK6LyU5odp7N1BDNW3uJkMcW6ycm4o0%2BNljGbrd5d%2ByRpmngA1%2BkUGaltvdsJAhIWJRMrdcTy1gnyN3MwRNXpCLTgVDwKSBKfr3gR%2B7IZyyKdWPXv50WXwu%2B193gooXa3twcIQSIBMno%2FqdUQpW1miU5QxTSsOdNNWIDJxCKn%2BzkoltAkrvk7zf9cUTXjraR4LarqGTYEfHZeKDrbAtd8tmtPA6Bq%2B9ofid92FnVfI3gKBrgeYeipnJOVSOFwK34oBkuKUAE%2FiVt3H13x7fEURXY7mtPzBrrwscx%2FhCONthkrMLaZOhjeHkkphoDYiK8rlj%2B8sDjHDKGd9Wv7uS%2FLmuy1R19WZbRmrSX0MMKb%2FlMQGOqUBhEHpwAOpJjtYzwZifxafguaCJ%2BaOxwlmM2SHnWGNZN3Wuicf6FzIgpNkYvDQm2xqV54vDuuk%2FVB49JoA9smAX%2BV3iIF6MEV2S14h%2FCLxRlc%2Bm7ULgkNcVmPG%2F5PKhOXLUOnEyexyQI%2FEas1RwiQbtOdTEQl7bDmGrFdi5LSM5RSEVegF6rBNCJj9HWdeEI7n2X55VP81xw9j%2FN8SuBt11Y5Yqzht&X-Amz-Signature=6810a99ad773447119a7665ea1d858f39997535edfcb659bccaa61d9345701fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
