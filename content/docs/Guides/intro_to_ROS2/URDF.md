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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3AHU62B%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLjp2nK6jLvyYkFld3aHCX46xZD1m50yOJReDI2KhKeAIgQ2z%2FnTEm6Ei52zGmNWmFOh8FWDlVaJUxk2C8wv2pYYgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT3mUuac1vU2hfZWCrcA%2BrwSA6TRgCHoWwlgYDU9wvRwdUj2fNZHjU2y531E6K1j9ETjLESKVls6%2B6YAsBUIzA2%2FZi7Vq2H7ziLGhe09r1hG6gDeog3GaHMUtKgbfyiVaHM%2FVLQ6ZNdeZepF0qORpZrBkjhnqoI74VylUyaEKLK%2BfdERNDd9DStRPEFu%2FrkNxVxSKllmAthP3%2BMfnbREvxfWyLB9Xfx7ecoy6ifCdzW1FcwrLdmWlhr8WsQ1RxfSi7H9c6CJ0RJW3wkk2AyGtYU1QU41NIt5F80YL69pJNMr5zMn73OaGaGDycrI7SGMSAtZ%2FwoW%2FsJNu4Xs7CZORPRdBvT0YLO9OFeEkNVYDd7BtqNVn7onJPfWcMv7EcW%2BcZ3xvTlzLZsgcpOes%2BYBniCwSBRy7MKIKE9K2NWK2E7olMooR3kZEyiCnlc0cPRxaICZ15smUA1QibT9FH9DbaoBafG8Lxln3zsudoAypfMeiszZxymS%2Bs3xe2sBUnbsU9CY00RHuincBMthYyETFIhrp0fRjWXHjEvuC8nGIYtte%2BgY%2BemH%2FDDzrvI5fc1qLOxyv%2B%2BTuKfKoM8ipTUUqwvhz6m7f20sd1WuKXKfHyC6H2%2BWqIQYjxHwwZb8T5SdGpTRscuYncyBQ%2B0MNL%2B9cAGOqUB73mLdsZYXU4pvEH7KydACUeCsUjQVgsCvo8TLQ%2Bx8ixctuvCI6VbY46ByI9GbVhoebDY%2FNt%2BO0x%2F8SwuFCkS0gAoel5hjFvVEPYxcWjI%2BYixD5TX06E2i0Z%2BMcaD1ZhcCPsGGRC7sH7cnUOWsjjR3DtELaQ8a9C4md3yx%2BuSMFaw%2FAA8WLajFtTX2TOhIrGR6kFnBvgPE1VFzVDCmBU8AM%2BujsTQ&X-Amz-Signature=7b6325f4d154ac7983aac9a35989f63a4d4bddb76cf74670705f2029cd845340&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3AHU62B%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLjp2nK6jLvyYkFld3aHCX46xZD1m50yOJReDI2KhKeAIgQ2z%2FnTEm6Ei52zGmNWmFOh8FWDlVaJUxk2C8wv2pYYgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT3mUuac1vU2hfZWCrcA%2BrwSA6TRgCHoWwlgYDU9wvRwdUj2fNZHjU2y531E6K1j9ETjLESKVls6%2B6YAsBUIzA2%2FZi7Vq2H7ziLGhe09r1hG6gDeog3GaHMUtKgbfyiVaHM%2FVLQ6ZNdeZepF0qORpZrBkjhnqoI74VylUyaEKLK%2BfdERNDd9DStRPEFu%2FrkNxVxSKllmAthP3%2BMfnbREvxfWyLB9Xfx7ecoy6ifCdzW1FcwrLdmWlhr8WsQ1RxfSi7H9c6CJ0RJW3wkk2AyGtYU1QU41NIt5F80YL69pJNMr5zMn73OaGaGDycrI7SGMSAtZ%2FwoW%2FsJNu4Xs7CZORPRdBvT0YLO9OFeEkNVYDd7BtqNVn7onJPfWcMv7EcW%2BcZ3xvTlzLZsgcpOes%2BYBniCwSBRy7MKIKE9K2NWK2E7olMooR3kZEyiCnlc0cPRxaICZ15smUA1QibT9FH9DbaoBafG8Lxln3zsudoAypfMeiszZxymS%2Bs3xe2sBUnbsU9CY00RHuincBMthYyETFIhrp0fRjWXHjEvuC8nGIYtte%2BgY%2BemH%2FDDzrvI5fc1qLOxyv%2B%2BTuKfKoM8ipTUUqwvhz6m7f20sd1WuKXKfHyC6H2%2BWqIQYjxHwwZb8T5SdGpTRscuYncyBQ%2B0MNL%2B9cAGOqUB73mLdsZYXU4pvEH7KydACUeCsUjQVgsCvo8TLQ%2Bx8ixctuvCI6VbY46ByI9GbVhoebDY%2FNt%2BO0x%2F8SwuFCkS0gAoel5hjFvVEPYxcWjI%2BYixD5TX06E2i0Z%2BMcaD1ZhcCPsGGRC7sH7cnUOWsjjR3DtELaQ8a9C4md3yx%2BuSMFaw%2FAA8WLajFtTX2TOhIrGR6kFnBvgPE1VFzVDCmBU8AM%2BujsTQ&X-Amz-Signature=79807ba622517767d49f2b2749dd45a926c88e8a3e43c491c610c25a33593ff5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
