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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHCY222J%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAiPWo65bl2P3TlNQirT5e3ZvZWVORNU6zCIBZZrf3snAiA84FCJUnbynZibEqG9ckvsgNi1%2BNmOZajkNgBF6grK6iqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeUb4RudhUNpb5sduKtwDLqunV7JEWyG4st9vWueKPg3zKH%2BAFFIGha825SxP8AyZsBwykh1Ij8H2rMzHY6Hix6wu51oDAuFqJtOAUOdzaijr4GbxpAjM7bPtZDD3%2B2EyVEWPifFwznM1dF8PxZQdcpsYfAy38FroKK8xL0R634QBt2oplzvn2uGSPqNdSRbb5%2Fztr1mVDRiGMNnKAZSMMknJRldxxYR14p%2Bj9wQbcJh3XlH51IibTulXbHrxU4B9R07%2B%2FWWoKrFXz2Mr7PvPX7xFFZCqEiev1JbrB2IrKfKcjdzmQkOSOYDUt%2BKv27obmzIn%2BiLB5EUsbnAcj%2FRpRRn6vY4jT3YusVd90NVo17qpygZ32C36zVJrgWDX6RsySWbvvL2G0bLlLcV5%2Fj6tKfHeI6t3%2FkFUEySnTD%2BkifnDUXONhpAXUD1VmyysMZdnWI%2BxT6XKYwiw0dNWinlxN%2BvaAIEz66Y32nkRrCVfv9f1L%2FBVPDpHQOW9THaGfPyPshCtf2nL6ImqWLphdrywqWAk8faQwAySXLGsZvmN1hWPjreyVnLZ6Hl0%2BGZj6iN79jdYvPxZo%2Fqc2g3avj0N8wG7fGvAuqN6JlbdHOfsL1EnUSB3dOFHpYHLiRYgI5%2Fn2mIaBJXsuwu8w3wwiqLDwQY6pgGoFlA82t91sa3dfQ3qXdFjhEZcs%2FzeRO4J5%2F0d6JUOMMRp%2FC8YAMwcn6ofwVxnRc6mK3SNXqVJQt60rpvHJ9siyb14Uh5Yj3KBGZ9kwmVZHGemNzXY1Sfb4QwIIrFxFvWffMFEG4aYBsuwS%2FQ4hmayVVdxoOgrcJtsgXC2PBgUcrP%2F2j%2FfcGb43%2F%2FLyEXAodmaLs1Q3kabF7%2BFrBLEi0%2B4y68kCqeO&X-Amz-Signature=569d1da5e8995daeeaba144c7e0ef18d946df89acf55dc657e49d2d7e8b994b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHCY222J%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAiPWo65bl2P3TlNQirT5e3ZvZWVORNU6zCIBZZrf3snAiA84FCJUnbynZibEqG9ckvsgNi1%2BNmOZajkNgBF6grK6iqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeUb4RudhUNpb5sduKtwDLqunV7JEWyG4st9vWueKPg3zKH%2BAFFIGha825SxP8AyZsBwykh1Ij8H2rMzHY6Hix6wu51oDAuFqJtOAUOdzaijr4GbxpAjM7bPtZDD3%2B2EyVEWPifFwznM1dF8PxZQdcpsYfAy38FroKK8xL0R634QBt2oplzvn2uGSPqNdSRbb5%2Fztr1mVDRiGMNnKAZSMMknJRldxxYR14p%2Bj9wQbcJh3XlH51IibTulXbHrxU4B9R07%2B%2FWWoKrFXz2Mr7PvPX7xFFZCqEiev1JbrB2IrKfKcjdzmQkOSOYDUt%2BKv27obmzIn%2BiLB5EUsbnAcj%2FRpRRn6vY4jT3YusVd90NVo17qpygZ32C36zVJrgWDX6RsySWbvvL2G0bLlLcV5%2Fj6tKfHeI6t3%2FkFUEySnTD%2BkifnDUXONhpAXUD1VmyysMZdnWI%2BxT6XKYwiw0dNWinlxN%2BvaAIEz66Y32nkRrCVfv9f1L%2FBVPDpHQOW9THaGfPyPshCtf2nL6ImqWLphdrywqWAk8faQwAySXLGsZvmN1hWPjreyVnLZ6Hl0%2BGZj6iN79jdYvPxZo%2Fqc2g3avj0N8wG7fGvAuqN6JlbdHOfsL1EnUSB3dOFHpYHLiRYgI5%2Fn2mIaBJXsuwu8w3wwiqLDwQY6pgGoFlA82t91sa3dfQ3qXdFjhEZcs%2FzeRO4J5%2F0d6JUOMMRp%2FC8YAMwcn6ofwVxnRc6mK3SNXqVJQt60rpvHJ9siyb14Uh5Yj3KBGZ9kwmVZHGemNzXY1Sfb4QwIIrFxFvWffMFEG4aYBsuwS%2FQ4hmayVVdxoOgrcJtsgXC2PBgUcrP%2F2j%2FfcGb43%2F%2FLyEXAodmaLs1Q3kabF7%2BFrBLEi0%2B4y68kCqeO&X-Amz-Signature=eb9214e04c226a690091618589e2344ab4cda586e8fcc8633d0c961b404cefb5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
