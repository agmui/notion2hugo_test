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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZN4LJE7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDVoJ8J%2BcBInbVs5oivtBWHIUnSMv70jLYnS7fFznykKAIhAIiMOl2Jz2PjVao8zpDbDMnKtGi2VgO%2F89ZlJF73TiTeKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxekkV66%2FPeSjZP%2B0Uq3AOItFCvFrxebB%2FNiNfPU0y6mAYmLv9c8REKErwGoUjpftQrufgIJBgLk7MaouooYYc2d4zAD4qBD0i1cBz1aQidPFcGPpTTY1TtOVKoQ3oSrZ%2FWWySjFkZJMVcFXnjAhr7iBUKwdB931LFQQP%2FaGCNEBqugkLlvGwfiRpYHoq5pFCf5M91Qty4craVN%2F%2Bl%2BA41l6dTsjzgi%2FQOnVlQfDjrAYObfeFCdDnxjkkqVN1x4LXD0i0Fv8MoybcDotZPFRZsMZSmJmDgfbHmnfLF3cOebyBYAmh3iUAAZZDcTtW0ZyF%2FrrypaJySWOuSMqAPZQVnLIwpcCGcrTPox183yalpqErLkQHjzwmfp%2BZ6yT77fyyZX%2Bz%2Fgldl4vEsy8%2F%2BWfOi5751icbQ8%2BXLmADWTLj6uV7ImFmnQoUJraPbD8VZCYrJsGx0tvHnbrKAvSMG5qo2T5ZEU%2B6OdvOPU16aw9q%2FBtEO0JNzhdKEc%2BkyaLNkwo%2FdadMdUQqus6leuIDDudsB3tPhR2Li0Onnr%2FmrVntOda10uJr9SH%2FUbzy%2BsyCGV%2FWzfGCagbpL1M5M66cPSoXI%2BKVNE2cHXZqC%2F68c%2BeYs9fXOqLZM9iopzMwmBejjyTDL%2F%2B0Hd30QoYFYjvzCj7dDEBjqkAVsxEIWNxj%2BuOWjkfWGdEg1hNa%2FfgTKuFVTl5zilnF4q0pSKd7334IpSUDIr7yA0dO%2Fpk%2FkmXr2EdJuD9V6358nCvpV1lcTpxKSkUDXPtTDlrEI%2FGayRnQPupO1I0VWMKyDi%2BBxKZXU318IIiFObIKKRUb5EOIw%2F%2BEkPnSmaJm6j5ge3v%2BWV%2FPhAT09n0FBDA3w8Wk2ZSx9EUadK9%2Bwa6ChULLNN&X-Amz-Signature=3c5e0e2a2f80a9fdbb64910efb422063f0eccf1044d98556cf80f8dd32df2324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZN4LJE7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDVoJ8J%2BcBInbVs5oivtBWHIUnSMv70jLYnS7fFznykKAIhAIiMOl2Jz2PjVao8zpDbDMnKtGi2VgO%2F89ZlJF73TiTeKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxekkV66%2FPeSjZP%2B0Uq3AOItFCvFrxebB%2FNiNfPU0y6mAYmLv9c8REKErwGoUjpftQrufgIJBgLk7MaouooYYc2d4zAD4qBD0i1cBz1aQidPFcGPpTTY1TtOVKoQ3oSrZ%2FWWySjFkZJMVcFXnjAhr7iBUKwdB931LFQQP%2FaGCNEBqugkLlvGwfiRpYHoq5pFCf5M91Qty4craVN%2F%2Bl%2BA41l6dTsjzgi%2FQOnVlQfDjrAYObfeFCdDnxjkkqVN1x4LXD0i0Fv8MoybcDotZPFRZsMZSmJmDgfbHmnfLF3cOebyBYAmh3iUAAZZDcTtW0ZyF%2FrrypaJySWOuSMqAPZQVnLIwpcCGcrTPox183yalpqErLkQHjzwmfp%2BZ6yT77fyyZX%2Bz%2Fgldl4vEsy8%2F%2BWfOi5751icbQ8%2BXLmADWTLj6uV7ImFmnQoUJraPbD8VZCYrJsGx0tvHnbrKAvSMG5qo2T5ZEU%2B6OdvOPU16aw9q%2FBtEO0JNzhdKEc%2BkyaLNkwo%2FdadMdUQqus6leuIDDudsB3tPhR2Li0Onnr%2FmrVntOda10uJr9SH%2FUbzy%2BsyCGV%2FWzfGCagbpL1M5M66cPSoXI%2BKVNE2cHXZqC%2F68c%2BeYs9fXOqLZM9iopzMwmBejjyTDL%2F%2B0Hd30QoYFYjvzCj7dDEBjqkAVsxEIWNxj%2BuOWjkfWGdEg1hNa%2FfgTKuFVTl5zilnF4q0pSKd7334IpSUDIr7yA0dO%2Fpk%2FkmXr2EdJuD9V6358nCvpV1lcTpxKSkUDXPtTDlrEI%2FGayRnQPupO1I0VWMKyDi%2BBxKZXU318IIiFObIKKRUb5EOIw%2F%2BEkPnSmaJm6j5ge3v%2BWV%2FPhAT09n0FBDA3w8Wk2ZSx9EUadK9%2Bwa6ChULLNN&X-Amz-Signature=8e023bc0a6c1dc96541ce3b6fabf61b5572e528f686884824ea3c96f0c6282a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
