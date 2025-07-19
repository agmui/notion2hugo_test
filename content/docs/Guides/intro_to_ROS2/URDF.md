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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK4EYKJ4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDjiI6xyIMtxtTdTYBydR9QNNhgg%2Bkycauskh%2FzC4h3gIgJfmpsyTIZN7uU3nKcix%2F4z1yLRh3xXgoaCge0NQcc0MqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqCNXH38YhL9rC4LCrcA1AuGelkBVntvI%2F8Qzr3Hdi8JP24wIpKgrv1C7PHUAUlkzcFqMfnyu1Z943aHO1f2pV2pMM4io0GYqSDJ%2BwJ2gAeXbCcnQk12tFpl6zifMd6g4mLhsKF0EbHp83tY4fUmR15yW4dC%2F130DwqNXQ6jrDjk3nk2LMC73OHIoR4pBZpl9gKnHYEjOoDecHt1rYGeSywCA1DZ9sZ4nollE9Umv0IIr4ZsmhdTl%2FoYY75cH%2Bq6c8zVpkhxHRJwabXHSC8W5B61oSX83SP2NsLuA2MKZp6gQZIbdkOQEllUZwMCe1DkSe5K%2FkSkjgijRRlhBxqxb4pd%2FFzR813kOrM6A6ujzmaaTNkAu8Q0ELNybzespaRKJ3X8eoxUD6ut4Uvrgq600MkJCg8i2PLi7vjGjCqc%2F%2BdruzZjcUvavzQ5qEHFBgy8P5nb%2FvT39SYjHNlcORewCcfSh6sT0BA0LJW3SoNgJKw1Pr4bVhMFprvw0SeyuJAVof%2BPnwvg5H%2F3lTP0K%2BEl7itl4DP1z0R6t7ICMn7f2Hnylq8r%2B%2FdAeqo20rd1AzzNdCleWylKEcjIXLG4ZSJo17n7rjfxr3N1Lmh2yWAtmqCuf%2FcFBOSgFSRuYQ314shWiVanl7XRLnRW9%2BMMM%2B37sMGOqUB%2FI7czwsujD%2F3kM9wrcOOK%2B8CakQB%2BJG5YE0b8jkTDRqqgIFRtt%2BNrQfxBPEwWP0KT%2Br%2BthV4OZYbYrfJki6%2FaMUSBUkDlnWklF%2FEcL446LZEK%2Be4%2FJgIhIfS9rKh4eLZIeN1476t0YDC046s%2Buz%2BuHskm7b%2Bi69qgBxOZt9kOCyTerKOXmMEmhOnc4WDbwM91gXw%2FRFkRKJdKPmyT2a1JWqLjlbc&X-Amz-Signature=55f5a8ad97a63dabec15b740ab84aefaf3679235197052781abed3be66deb85f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK4EYKJ4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDjiI6xyIMtxtTdTYBydR9QNNhgg%2Bkycauskh%2FzC4h3gIgJfmpsyTIZN7uU3nKcix%2F4z1yLRh3xXgoaCge0NQcc0MqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqCNXH38YhL9rC4LCrcA1AuGelkBVntvI%2F8Qzr3Hdi8JP24wIpKgrv1C7PHUAUlkzcFqMfnyu1Z943aHO1f2pV2pMM4io0GYqSDJ%2BwJ2gAeXbCcnQk12tFpl6zifMd6g4mLhsKF0EbHp83tY4fUmR15yW4dC%2F130DwqNXQ6jrDjk3nk2LMC73OHIoR4pBZpl9gKnHYEjOoDecHt1rYGeSywCA1DZ9sZ4nollE9Umv0IIr4ZsmhdTl%2FoYY75cH%2Bq6c8zVpkhxHRJwabXHSC8W5B61oSX83SP2NsLuA2MKZp6gQZIbdkOQEllUZwMCe1DkSe5K%2FkSkjgijRRlhBxqxb4pd%2FFzR813kOrM6A6ujzmaaTNkAu8Q0ELNybzespaRKJ3X8eoxUD6ut4Uvrgq600MkJCg8i2PLi7vjGjCqc%2F%2BdruzZjcUvavzQ5qEHFBgy8P5nb%2FvT39SYjHNlcORewCcfSh6sT0BA0LJW3SoNgJKw1Pr4bVhMFprvw0SeyuJAVof%2BPnwvg5H%2F3lTP0K%2BEl7itl4DP1z0R6t7ICMn7f2Hnylq8r%2B%2FdAeqo20rd1AzzNdCleWylKEcjIXLG4ZSJo17n7rjfxr3N1Lmh2yWAtmqCuf%2FcFBOSgFSRuYQ314shWiVanl7XRLnRW9%2BMMM%2B37sMGOqUB%2FI7czwsujD%2F3kM9wrcOOK%2B8CakQB%2BJG5YE0b8jkTDRqqgIFRtt%2BNrQfxBPEwWP0KT%2Br%2BthV4OZYbYrfJki6%2FaMUSBUkDlnWklF%2FEcL446LZEK%2Be4%2FJgIhIfS9rKh4eLZIeN1476t0YDC046s%2Buz%2BuHskm7b%2Bi69qgBxOZt9kOCyTerKOXmMEmhOnc4WDbwM91gXw%2FRFkRKJdKPmyT2a1JWqLjlbc&X-Amz-Signature=0390c1f4e6e972d4f926d97e788085c15c45bf7226cec851cb9e6460b1df7576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
