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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL3OH2X4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBNBRDpz0zZn%2FMUUcpspVEyrIgujmkebADA65%2FarqJFgIhAJK1TYOf29zH8gaI5Ipc5IU%2Fi95acVLJi%2FEDK3HCD33aKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaNH1Kq06doOi1dwwq3APxqdLqjLKJOo40sJy8Y7lIu9oHVrut8pPCRpEtqoW2lPf%2BS%2Fp4REhll3EXk7hoYvIZq8xINOyjd6Q2Lo0%2F%2FQgnX08mlnEa6dnVQhQLP0ttITXExcQYEhPak%2B4dwcPQuLW7SEwlVoFRyZsT2KxH9ximwSNDzw5Lg%2FDAnsBLsWf8b4XZFHPOcpZKJspBksWRIQHUFoqSviCexOYEwSow9%2FsSzBErh5PeGVzL0OsrO2g%2BFVf9nXL%2FRS6V%2BQjhxohWwRaXwd5sRtE%2FlyRMe2Y67ZtwHG96XZ9y%2FTgPNAMC%2FG2Wh%2FJs5MEzHSIkr9Pwxgd01pw8B0u%2B3KbebJde6aNNKe%2FDZuVwBUmi5HROjrH0V%2FQpLjLe7Kz9J4XFCrdOg2nNllxt9yRLfpsVVCHfd0%2FgEYHJNNcXnSoVB07lRQ1Ddfp0Sqf0h0cmGbPTpmv8ssbE2%2BPU4LOATNEB2gCwPAMLzsWaBekUcKocBiCnSTVHmBBcJHNwDpGMKRQ9ugI9tz0iKVId646Gm8LspJD1t65Z%2FKIxS922WK3p5PWsmPD3FLCeJ2wvhAjS0024rNOkQHOmaxGDnnrxVMuHVr6X475as3zR03aqDlC1aho8JYRnjezsPbKXI0fsJiQtUrh9OjC5k7HBBjqkAcqYpOU8V%2B4SgBR04YoRn8pUrCM0eS4FCrykIK1Ft0ybIvof%2F95Iwy%2FYm5GligGmP%2FRlTUFPP15Kqm3P%2Bvr52BG%2FmQZ0%2FBrBP%2FSiMR7QcUTzUIK8fr7dfUYDmvCnRkagMhEcHdHEE%2BoiRD5O8Q5OkYYd8SMCk7%2B1k%2FrQTjiDEWfUhuwyLAKsHf5TuSrC2FqYVpalwU3Li%2F4Dluh3db1nfmM4R2P%2F&X-Amz-Signature=7dcb1d585df17a4721f98f8d3b509e5f8c309bf789401b49bbe44dadca43f3fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL3OH2X4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBNBRDpz0zZn%2FMUUcpspVEyrIgujmkebADA65%2FarqJFgIhAJK1TYOf29zH8gaI5Ipc5IU%2Fi95acVLJi%2FEDK3HCD33aKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaNH1Kq06doOi1dwwq3APxqdLqjLKJOo40sJy8Y7lIu9oHVrut8pPCRpEtqoW2lPf%2BS%2Fp4REhll3EXk7hoYvIZq8xINOyjd6Q2Lo0%2F%2FQgnX08mlnEa6dnVQhQLP0ttITXExcQYEhPak%2B4dwcPQuLW7SEwlVoFRyZsT2KxH9ximwSNDzw5Lg%2FDAnsBLsWf8b4XZFHPOcpZKJspBksWRIQHUFoqSviCexOYEwSow9%2FsSzBErh5PeGVzL0OsrO2g%2BFVf9nXL%2FRS6V%2BQjhxohWwRaXwd5sRtE%2FlyRMe2Y67ZtwHG96XZ9y%2FTgPNAMC%2FG2Wh%2FJs5MEzHSIkr9Pwxgd01pw8B0u%2B3KbebJde6aNNKe%2FDZuVwBUmi5HROjrH0V%2FQpLjLe7Kz9J4XFCrdOg2nNllxt9yRLfpsVVCHfd0%2FgEYHJNNcXnSoVB07lRQ1Ddfp0Sqf0h0cmGbPTpmv8ssbE2%2BPU4LOATNEB2gCwPAMLzsWaBekUcKocBiCnSTVHmBBcJHNwDpGMKRQ9ugI9tz0iKVId646Gm8LspJD1t65Z%2FKIxS922WK3p5PWsmPD3FLCeJ2wvhAjS0024rNOkQHOmaxGDnnrxVMuHVr6X475as3zR03aqDlC1aho8JYRnjezsPbKXI0fsJiQtUrh9OjC5k7HBBjqkAcqYpOU8V%2B4SgBR04YoRn8pUrCM0eS4FCrykIK1Ft0ybIvof%2F95Iwy%2FYm5GligGmP%2FRlTUFPP15Kqm3P%2Bvr52BG%2FmQZ0%2FBrBP%2FSiMR7QcUTzUIK8fr7dfUYDmvCnRkagMhEcHdHEE%2BoiRD5O8Q5OkYYd8SMCk7%2B1k%2FrQTjiDEWfUhuwyLAKsHf5TuSrC2FqYVpalwU3Li%2F4Dluh3db1nfmM4R2P%2F&X-Amz-Signature=f0befa30e10a2bd151b6d72292bf6c7aea605e1454e542de345b2729f089ca18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
