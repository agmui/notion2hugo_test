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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDONUUEM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCIXZzpYRPm3V9QlQxit%2BvRsgyY8%2BnniHHuzXj3RwVMbgIhALaVaO3%2FLfQ88V0dq5WtX4pJmI1j%2BrE73ZV34j%2BCqpJZKv8DCGEQABoMNjM3NDIzMTgzODA1IgybP1YFaVTXPCQL2hcq3AMufZiLTeI0HJOdN3SE3R5uFJ%2FAqzkIcEouEaxoz6lF0xGrj%2FhBITGoB3CjPsGbgQwfhR2VQXah%2BY0v%2BdXKoWX7A3UF1SR6%2FRdFxcmcNGMgTI0vu%2B%2F33aRp01f%2B8QYmAGBP1muB7NocXyIskkeKSZXTLEL9IAWV8XAfwUOdLJ52Pn5Xjy%2BgCFKhEHLx2YyUvAW3YmpNkyJru1k8oUWYdynY46OWYlz9BdK5VkYSYA3%2Fa%2BFVhA7%2FpKrGJLTLNaOw5ZFwGPPZhrZKwIXo80y1zzvGVGH8wgSW27MukuXGsLZdz%2BkpuINzAT5kWyYjA4brL%2BBErLKZZSTruPWazhwgd3r%2Fu%2BoJ8%2Bz2zNwkbv9iafP6yfMdnucxYAIrz2WqLwhKKKjHnToAUuEHfkV%2FTVLeorbXuAxdCvSj5IoMMs7%2BYLloTBeudxRiPzmlji5%2FDlKvLceUHAchsdd73PxnHIGfub5%2BjWWrEqFBZx1UTKw4QNvrk0ppUTM0TwXMBkmpQzTaGkMM%2BWLeCUU%2BDmT5ox97892JwWG%2BjBNLwx%2F29AAdMtOW%2BBDASFCQm8ce4snQMJCn5FdBTEgLx8NDGTEOFKqevaYA1muEcXaIwAFWLtOsi3bEN9jpmqkPoy3XF7jSnTDPzMjEBjqkAbebjsNi3UAc942T17tf0sVpDpSOsR9EK7UAiuok%2FLcsPsvfcRFlce3y50pR8RkCFSUcbg5NnZK1WjOWuuYau8vfiUpgNIweVCRr2H3rHp5vhjfTK3MBfqKiRhcIh5KX7knNbt5Dhus5IyscMpSSEjDGY9aAIj2Xa%2FwwryON9MxGfrl6P803za3Our03sLQNU6kvdH%2Fpu8GMgJ1zCAy2QjdvtbG6&X-Amz-Signature=da052e9192d094312d1375ca8d4477c892516df1813e327559ff52da5801884f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDONUUEM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCIXZzpYRPm3V9QlQxit%2BvRsgyY8%2BnniHHuzXj3RwVMbgIhALaVaO3%2FLfQ88V0dq5WtX4pJmI1j%2BrE73ZV34j%2BCqpJZKv8DCGEQABoMNjM3NDIzMTgzODA1IgybP1YFaVTXPCQL2hcq3AMufZiLTeI0HJOdN3SE3R5uFJ%2FAqzkIcEouEaxoz6lF0xGrj%2FhBITGoB3CjPsGbgQwfhR2VQXah%2BY0v%2BdXKoWX7A3UF1SR6%2FRdFxcmcNGMgTI0vu%2B%2F33aRp01f%2B8QYmAGBP1muB7NocXyIskkeKSZXTLEL9IAWV8XAfwUOdLJ52Pn5Xjy%2BgCFKhEHLx2YyUvAW3YmpNkyJru1k8oUWYdynY46OWYlz9BdK5VkYSYA3%2Fa%2BFVhA7%2FpKrGJLTLNaOw5ZFwGPPZhrZKwIXo80y1zzvGVGH8wgSW27MukuXGsLZdz%2BkpuINzAT5kWyYjA4brL%2BBErLKZZSTruPWazhwgd3r%2Fu%2BoJ8%2Bz2zNwkbv9iafP6yfMdnucxYAIrz2WqLwhKKKjHnToAUuEHfkV%2FTVLeorbXuAxdCvSj5IoMMs7%2BYLloTBeudxRiPzmlji5%2FDlKvLceUHAchsdd73PxnHIGfub5%2BjWWrEqFBZx1UTKw4QNvrk0ppUTM0TwXMBkmpQzTaGkMM%2BWLeCUU%2BDmT5ox97892JwWG%2BjBNLwx%2F29AAdMtOW%2BBDASFCQm8ce4snQMJCn5FdBTEgLx8NDGTEOFKqevaYA1muEcXaIwAFWLtOsi3bEN9jpmqkPoy3XF7jSnTDPzMjEBjqkAbebjsNi3UAc942T17tf0sVpDpSOsR9EK7UAiuok%2FLcsPsvfcRFlce3y50pR8RkCFSUcbg5NnZK1WjOWuuYau8vfiUpgNIweVCRr2H3rHp5vhjfTK3MBfqKiRhcIh5KX7knNbt5Dhus5IyscMpSSEjDGY9aAIj2Xa%2FwwryON9MxGfrl6P803za3Our03sLQNU6kvdH%2Fpu8GMgJ1zCAy2QjdvtbG6&X-Amz-Signature=e1b9eb621e3d576899ee341ed3983db19a00c9b92c227a13b648bc104ea0ffe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
