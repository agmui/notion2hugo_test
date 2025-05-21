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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYBZTC7R%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHYuyQxn7M9ApaCIM%2Fc5ufntvK%2F9XIp2LTkTwK6ENq1kAiAes6BrmUdsKLQiCpR96Hp5cTMQ6jqajdzrCYx91vrtsiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwgYNbqeTlkxmYm6eKtwDPuacAHrXfBcvdnc%2FIzIx3fk9u0sGIC1kITUz874STKPazqgOFT9aknWafETiCigQDgGwMNy2JEUYRMSMgDV6Jx5sY2dI%2FpvYDvwFL3RJHHL09bnmY9fiuknG3uemuU2hOj98n9THAMvZwbMzaIvxXFmmONqg1m0bglVcQ814xh3RxhVENeI8VbHX058ClUaZQue0F5CqaClDnT%2F2AHJ8OE5JP8P%2Bpf7NriLEYLi7tXs9gY1l0PxXOOqrjjPbbhyHlDe2zrhoOambBNb8nDHY5TjTq%2BTde%2FxSFDnshyc8TAidMcHDVEQE2T7BOV%2BMxADrXAgqBQA9E63ZRWPzEeaFbEZyKRmbUrc6%2B2JkXFbOxLptUQZmcEGpcjx14BLyPiSaM1theIZXMZZ6BceXMng%2FIINAzu%2FyCqQVKPMNSdE9yarmMAXjvXcBw4B5%2BwgotDkoSwJBCx0LWaGJ%2F27pCXpKfaQkAJqGw8hGID6BiV6XzllORVeNMGopf6tNOedAjB7vlrgRdl5jHuxs95ZKxhjao0FxO7Fx%2F2XUagQgxX2PIan%2FVstwo4ztqejyo0890V51u4WBp8e2upLuNvGJCxaMpX7fFLrWWz0mgKFa5vKKqvpzDxgsI7XrEuNaKlQwwu62wQY6pgE%2BBbyq4ekZV9adtLaf42OeVv3W8vs%2FUM8nP%2BuiSJgyBlYer1EOoyjZm5p0fslMRDqhJSI0OKYsnK3%2Bn%2FtfbATgb232FqLnsfPaNMCmQoWXSFnLbUNLgaGVW0ezqNw1E4NnyvgYR3TuARpYdAImWVpNw2UXT%2BdF%2FgiMabA501m1hjw3jIrOPFU4TXox%2FBR7csJRC1OWryW2LKhilQqZVoXv0igJjbty&X-Amz-Signature=88f07593970d6909bbd1ab5a59919e3fddba0da220841db6045975bd132f4d81&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYBZTC7R%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHYuyQxn7M9ApaCIM%2Fc5ufntvK%2F9XIp2LTkTwK6ENq1kAiAes6BrmUdsKLQiCpR96Hp5cTMQ6jqajdzrCYx91vrtsiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwgYNbqeTlkxmYm6eKtwDPuacAHrXfBcvdnc%2FIzIx3fk9u0sGIC1kITUz874STKPazqgOFT9aknWafETiCigQDgGwMNy2JEUYRMSMgDV6Jx5sY2dI%2FpvYDvwFL3RJHHL09bnmY9fiuknG3uemuU2hOj98n9THAMvZwbMzaIvxXFmmONqg1m0bglVcQ814xh3RxhVENeI8VbHX058ClUaZQue0F5CqaClDnT%2F2AHJ8OE5JP8P%2Bpf7NriLEYLi7tXs9gY1l0PxXOOqrjjPbbhyHlDe2zrhoOambBNb8nDHY5TjTq%2BTde%2FxSFDnshyc8TAidMcHDVEQE2T7BOV%2BMxADrXAgqBQA9E63ZRWPzEeaFbEZyKRmbUrc6%2B2JkXFbOxLptUQZmcEGpcjx14BLyPiSaM1theIZXMZZ6BceXMng%2FIINAzu%2FyCqQVKPMNSdE9yarmMAXjvXcBw4B5%2BwgotDkoSwJBCx0LWaGJ%2F27pCXpKfaQkAJqGw8hGID6BiV6XzllORVeNMGopf6tNOedAjB7vlrgRdl5jHuxs95ZKxhjao0FxO7Fx%2F2XUagQgxX2PIan%2FVstwo4ztqejyo0890V51u4WBp8e2upLuNvGJCxaMpX7fFLrWWz0mgKFa5vKKqvpzDxgsI7XrEuNaKlQwwu62wQY6pgE%2BBbyq4ekZV9adtLaf42OeVv3W8vs%2FUM8nP%2BuiSJgyBlYer1EOoyjZm5p0fslMRDqhJSI0OKYsnK3%2Bn%2FtfbATgb232FqLnsfPaNMCmQoWXSFnLbUNLgaGVW0ezqNw1E4NnyvgYR3TuARpYdAImWVpNw2UXT%2BdF%2FgiMabA501m1hjw3jIrOPFU4TXox%2FBR7csJRC1OWryW2LKhilQqZVoXv0igJjbty&X-Amz-Signature=1c32b58402ea4e111e7c7d7770baba1194e8ec9cc613935d5b5ae8071f31eac6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
