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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMVRMDCL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDleiFoGU7B1UFuy6sa%2F0POoYbsb%2F0tHxheaee1nrQKuAiEAzKM0hRwTTMTWEoN2tEDYD4aiylLJ9L06Xtr%2FxMKXKqwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGWRKH%2BJ%2BIEfbCMTpyrcA64KZpuk7Lr%2Bj4l%2Flf0PzePcWAbA%2BrY5xrz4Wux1udCnsg6KZM2zBEfNCpsvPRjNdjILxB7I6RwNDkeR87%2FQhxMiSxub4ztrSicbWHqkTtfWM14L7xl5G8LBs7MZCa5%2BCT2oZc96Ogtl%2B2SkB9%2Fr8I5AZ3BcARXlx3C5mWeQjW4OB9BnVddF%2FiMDoPhoRMReZ59LketlIHsIj2Fz7tTZuSzIhi9mXo%2Fx37Vnu%2Fj2wuWUXPsvL%2BbsTfnhrBKEKa9%2FXikJGql%2F42ULFjSEH7DR7gP0cIJFIz62aXYO2an%2FQ6hPSVeUrRSOC0Nx9YLpov%2BNuJC%2F%2B3CskUnd8YAb8OOunrys%2BvvWzaywWcn4pPX4crwQfJQ%2BeJqTXQvst5QUP11Wsu8Zd08hrax8gaZ1WnUTo%2Fflh3rMgvEYFbh5MPgiStxGaYwzLvDuLE11YIe1jmxxzp3NyzMDVE2Mv4domkU0tpPviM8pHZGBQG9dQrQ0t2eZmqieqZzwQHJwJCkU2hkvLai%2F8R%2BWd%2BkAQlFHV0fSBMr48SJvz%2BV6wJx4B2dU4UH9jNtUdoVhOBUIh4eSbE80BSpGF3jj0RxjdZMjN%2F4Qnc8QWoL8ULKa%2Ft15yfEpXLFIIHoC2XsuYdG6wqqiMOucjMQGOqUBJO5z0JbLQedilmeBVXMcNHOT9Vdl%2FVKNDjElX2BMXpBucBbQAPOcLhzfIMfFCpLzEjk%2B34hdDKYymJtY3mrWcYJ3SWFPCPA8hvIjof615DNGee3XFLU5QlRbYugtrvMZssQhAw77xYQU5eico3fxL2eE33M0951eI5uZ1ZoHwtG8cAK%2BQG3WrwYeJrAwCya6zIEmY5pSR47XHqz8Ecz4Wx%2BWC7dV&X-Amz-Signature=913cd6185ceeb7b3a99c44d1eb168ac29c28429925723ff41a2c12cc037672d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMVRMDCL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDleiFoGU7B1UFuy6sa%2F0POoYbsb%2F0tHxheaee1nrQKuAiEAzKM0hRwTTMTWEoN2tEDYD4aiylLJ9L06Xtr%2FxMKXKqwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGWRKH%2BJ%2BIEfbCMTpyrcA64KZpuk7Lr%2Bj4l%2Flf0PzePcWAbA%2BrY5xrz4Wux1udCnsg6KZM2zBEfNCpsvPRjNdjILxB7I6RwNDkeR87%2FQhxMiSxub4ztrSicbWHqkTtfWM14L7xl5G8LBs7MZCa5%2BCT2oZc96Ogtl%2B2SkB9%2Fr8I5AZ3BcARXlx3C5mWeQjW4OB9BnVddF%2FiMDoPhoRMReZ59LketlIHsIj2Fz7tTZuSzIhi9mXo%2Fx37Vnu%2Fj2wuWUXPsvL%2BbsTfnhrBKEKa9%2FXikJGql%2F42ULFjSEH7DR7gP0cIJFIz62aXYO2an%2FQ6hPSVeUrRSOC0Nx9YLpov%2BNuJC%2F%2B3CskUnd8YAb8OOunrys%2BvvWzaywWcn4pPX4crwQfJQ%2BeJqTXQvst5QUP11Wsu8Zd08hrax8gaZ1WnUTo%2Fflh3rMgvEYFbh5MPgiStxGaYwzLvDuLE11YIe1jmxxzp3NyzMDVE2Mv4domkU0tpPviM8pHZGBQG9dQrQ0t2eZmqieqZzwQHJwJCkU2hkvLai%2F8R%2BWd%2BkAQlFHV0fSBMr48SJvz%2BV6wJx4B2dU4UH9jNtUdoVhOBUIh4eSbE80BSpGF3jj0RxjdZMjN%2F4Qnc8QWoL8ULKa%2Ft15yfEpXLFIIHoC2XsuYdG6wqqiMOucjMQGOqUBJO5z0JbLQedilmeBVXMcNHOT9Vdl%2FVKNDjElX2BMXpBucBbQAPOcLhzfIMfFCpLzEjk%2B34hdDKYymJtY3mrWcYJ3SWFPCPA8hvIjof615DNGee3XFLU5QlRbYugtrvMZssQhAw77xYQU5eico3fxL2eE33M0951eI5uZ1ZoHwtG8cAK%2BQG3WrwYeJrAwCya6zIEmY5pSR47XHqz8Ecz4Wx%2BWC7dV&X-Amz-Signature=6989716b0dc0de9f36803fb70a9dddab119ad3071048f2a070a540abd695b047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
