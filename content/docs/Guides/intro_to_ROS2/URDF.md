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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ANQQMA7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJSPEBOitZjwvvKVaBqwv2%2FLP4GSn4IHrY3UieUC0UrwIhAKwUDDrNolYJCTd8d7dJJviJ0pYhkepZNFuy1hkqzcg%2FKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ3Hu2m%2FgkEQF7bFoq3AO0QGBDoSDQOlaUAtJm2HCs4KefVf8JhUrtFryL1ciYRUGOkiWQk%2BgTPn9ll2fMCRyXTK0A1bZ0y1T9Rf%2FJJYY3%2BGaA8CfugWHjzUGPlZJ9pJSAO8Orm73xRs43%2FTIJEPzkO6qfmBSSHyU%2FA1OySMdN%2FEKf9Tpd%2F1gQZOw9kgG6IIpuYp5JlaHPbwQV0ZbXcduemzp7R0BA4in3K23lE1U6tO7Czwl8Xa9hvrLeEkSy2g0yfzYy1RJplu8if106bKyG7yCeX1Rq9LDAlTRkZoBiu3a8ttUl%2Bg6VA%2F1EuaOrhR43MNeJ8eqvhGIAe5Y5wEWnapG7dWhJmS9iQNFafBTv2XUbATFTRItOMio71LyEmNmpi0sOIG78Ram0E8EsRwd27gPZ%2B4%2Bbivd%2B9kvDJ8ySgMlX3ET6gbgeamu373Uewp0oszB6IUJKJ9SyGiZrFDKcIrvuFDFvVGkr5y3KP8WQGStDKK%2Ba%2Bl7k0ruKLqvpCXthIK2R5iAGVnlUlGQqgN1T9mITeauIOsd0mRBxJkXRjMnHzwctlmK%2B1n%2B59Aad%2Fey%2Fho8USPVnRejBc05mciBe9me6n2oG4BHMtv9dV16u%2BgEkXMSQ50KXC99CBDN639j5A%2F45ctZm4lWF5jCis9%2FEBjqkARy7ud2jfjFFn9KqpBHCU%2BPEiXDgLv28S%2BzlSeoAv0FZZjTOdnn6WewdysI2A%2F51JGhDm5u0T5agn1uIWSWibvrOgZm6XzU1HWZjfct%2FdzLnjte9sesCP80LXk%2BhwE7Q36gH4gFErWaMYBxg8xqROgbTbzZ7jU7DTEod%2Bk5Cgof2d12AmD6%2FX9IZ%2FAz%2Bw1VKfLvkmoft9ecT7FmmJF44cbTbCwki&X-Amz-Signature=fc3b669495143e472d6ab89264aaa8c4c01fa35c7396fb33e3f9eb6667414b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ANQQMA7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJSPEBOitZjwvvKVaBqwv2%2FLP4GSn4IHrY3UieUC0UrwIhAKwUDDrNolYJCTd8d7dJJviJ0pYhkepZNFuy1hkqzcg%2FKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ3Hu2m%2FgkEQF7bFoq3AO0QGBDoSDQOlaUAtJm2HCs4KefVf8JhUrtFryL1ciYRUGOkiWQk%2BgTPn9ll2fMCRyXTK0A1bZ0y1T9Rf%2FJJYY3%2BGaA8CfugWHjzUGPlZJ9pJSAO8Orm73xRs43%2FTIJEPzkO6qfmBSSHyU%2FA1OySMdN%2FEKf9Tpd%2F1gQZOw9kgG6IIpuYp5JlaHPbwQV0ZbXcduemzp7R0BA4in3K23lE1U6tO7Czwl8Xa9hvrLeEkSy2g0yfzYy1RJplu8if106bKyG7yCeX1Rq9LDAlTRkZoBiu3a8ttUl%2Bg6VA%2F1EuaOrhR43MNeJ8eqvhGIAe5Y5wEWnapG7dWhJmS9iQNFafBTv2XUbATFTRItOMio71LyEmNmpi0sOIG78Ram0E8EsRwd27gPZ%2B4%2Bbivd%2B9kvDJ8ySgMlX3ET6gbgeamu373Uewp0oszB6IUJKJ9SyGiZrFDKcIrvuFDFvVGkr5y3KP8WQGStDKK%2Ba%2Bl7k0ruKLqvpCXthIK2R5iAGVnlUlGQqgN1T9mITeauIOsd0mRBxJkXRjMnHzwctlmK%2B1n%2B59Aad%2Fey%2Fho8USPVnRejBc05mciBe9me6n2oG4BHMtv9dV16u%2BgEkXMSQ50KXC99CBDN639j5A%2F45ctZm4lWF5jCis9%2FEBjqkARy7ud2jfjFFn9KqpBHCU%2BPEiXDgLv28S%2BzlSeoAv0FZZjTOdnn6WewdysI2A%2F51JGhDm5u0T5agn1uIWSWibvrOgZm6XzU1HWZjfct%2FdzLnjte9sesCP80LXk%2BhwE7Q36gH4gFErWaMYBxg8xqROgbTbzZ7jU7DTEod%2Bk5Cgof2d12AmD6%2FX9IZ%2FAz%2Bw1VKfLvkmoft9ecT7FmmJF44cbTbCwki&X-Amz-Signature=871cd9eff183cdbe6edc946e3604561368884555d7bd707117c4c22841c0e7b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
