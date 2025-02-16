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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZWUPWN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCxBgN3K7X8%2FY9YsUo2WTWkleRrDxTzZ1Fx3nA7todGDwIgc5nhlYQa11W3DZMZr%2BGIRbRYypPxGaKj%2B4KKZLvsQJsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDLYvQGpu%2F9FpApNRsircA0zq4CCXzhrnMXi3JRqGLdfdioCIKj7BzpJT4mzFOa6LOBDZVrXtz245fOSXU4oIy%2Fg0CLfP%2Bps4LSfoSntJSYISPVJi3PRwrA9mCSAypvLuzH%2FwmSVzmYZ4YVwCo8PhBRrE1WqVKR5M5SmIl21ZpR88PcHI5z7erH1dkPhsJLi6UEStFAOLrFLmLVQMmWUuJCoSX1JoYegzhsgO32KMHOlp%2F20QF%2B9B3In2DbsTp34ZUL9PqKLYmDua%2BCYQDsOklcyWgnpmBfCWzhVsMFcFksH%2F4pR%2FqBuoEbX7e%2ByYWW1pNHa6UONKyfc%2F%2B%2BZPgr6%2Fv05EZg0ITKTxAS6gfvG8vWxWC%2FiX2jPdyhjmcLxfc9Wr6gVN1ghMiJI%2BbDlU3svJChWbBgnUbcPjBYDl8j6uki4Pqwfd9P%2FlXuWZUhaKF60GmHK1Z7DLMj3ixKTZqEsJx5ZOnfF19pkKfXIgvlNd67ogAXYdUP85FNZdWb23NiZ2KFO3qFev2MS%2FywcCsEWswpXuCcmO7qb5WvXFilz%2FMc3HKP1hrvFhMlCC0GbmzyHWu64EfZHyOLL1SDXZ4w7I1a0X0mtzdH65KlaldUp5gRcFyGskdLMr1gYxXwqZ5qMP8giw6AB2c950mVJYMOflxL0GOqUBqNJbI8hM%2BGA6sTLDU03uCEVtLeN5%2BncZJfevbeavSPSRzzSaH6A214QO5EZuW%2Bf3%2FuDa%2BsyQunpMv%2BrmgJNnb9O7c3DEFUnVq2GlH9I2BiO9NJhbiDXb4aU6wpA%2BcgbiI9qEKIsDQ4zhS9%2BeA8urDOCilHLT9JNmVBO%2FLZz3RjMlBG99UQbYKcVpnPw82%2BJfWAJubJX72shHfJqyK5YZlDIQkOkv&X-Amz-Signature=a0b0af8778594aedb309cb1134cee85023b315b2c8b0d153bd3959e449f75ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZWUPWN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCxBgN3K7X8%2FY9YsUo2WTWkleRrDxTzZ1Fx3nA7todGDwIgc5nhlYQa11W3DZMZr%2BGIRbRYypPxGaKj%2B4KKZLvsQJsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDLYvQGpu%2F9FpApNRsircA0zq4CCXzhrnMXi3JRqGLdfdioCIKj7BzpJT4mzFOa6LOBDZVrXtz245fOSXU4oIy%2Fg0CLfP%2Bps4LSfoSntJSYISPVJi3PRwrA9mCSAypvLuzH%2FwmSVzmYZ4YVwCo8PhBRrE1WqVKR5M5SmIl21ZpR88PcHI5z7erH1dkPhsJLi6UEStFAOLrFLmLVQMmWUuJCoSX1JoYegzhsgO32KMHOlp%2F20QF%2B9B3In2DbsTp34ZUL9PqKLYmDua%2BCYQDsOklcyWgnpmBfCWzhVsMFcFksH%2F4pR%2FqBuoEbX7e%2ByYWW1pNHa6UONKyfc%2F%2B%2BZPgr6%2Fv05EZg0ITKTxAS6gfvG8vWxWC%2FiX2jPdyhjmcLxfc9Wr6gVN1ghMiJI%2BbDlU3svJChWbBgnUbcPjBYDl8j6uki4Pqwfd9P%2FlXuWZUhaKF60GmHK1Z7DLMj3ixKTZqEsJx5ZOnfF19pkKfXIgvlNd67ogAXYdUP85FNZdWb23NiZ2KFO3qFev2MS%2FywcCsEWswpXuCcmO7qb5WvXFilz%2FMc3HKP1hrvFhMlCC0GbmzyHWu64EfZHyOLL1SDXZ4w7I1a0X0mtzdH65KlaldUp5gRcFyGskdLMr1gYxXwqZ5qMP8giw6AB2c950mVJYMOflxL0GOqUBqNJbI8hM%2BGA6sTLDU03uCEVtLeN5%2BncZJfevbeavSPSRzzSaH6A214QO5EZuW%2Bf3%2FuDa%2BsyQunpMv%2BrmgJNnb9O7c3DEFUnVq2GlH9I2BiO9NJhbiDXb4aU6wpA%2BcgbiI9qEKIsDQ4zhS9%2BeA8urDOCilHLT9JNmVBO%2FLZz3RjMlBG99UQbYKcVpnPw82%2BJfWAJubJX72shHfJqyK5YZlDIQkOkv&X-Amz-Signature=9cedc576543846a44d70dbc01f50122e88a12eb97537b3abb56892210856e24a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
