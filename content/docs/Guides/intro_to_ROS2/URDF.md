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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R46RXPO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCplpR%2BR%2BJsd3S49ooPGsgXPTC2aUA0mKsTXc3DDOAE2QIgNfiuujSVxZqkMK8vp6lxTrwl96T1gbytUqXoh1Mpqu8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAjWAuyFd%2FYzMgx7SrcA3sGg0M2Q0U9dlhgAgTq2UVNBQiUlpZ9sFCd0nQ%2BRhoZjJ9NrgaP69tSbk4n9hiFCqc%2B9NzqKz8YPVoulTP13YAEenq2lz0PgdZx2y07mWMZX0WP1Yu5p5Qs5GHSOS0SW5RMzqk89deStMisN1lSRqAeSvH%2F3D7CMN2wG4AHBRJziT9EKL%2Bn9KN0f8IdJNBteSPoGR7G2YiEhhKuU44%2FrFd9N0OVQwe1xdolCDByc5yiIxHSskVOQmfK2oVqOY68z6baJhsG3x0tWpDXObdznf%2FqIlSU8fCf%2BzpygVRdHiCFoGXteSaEXsuDPfuLPXoxQ13QZ1b4VPmMKGpbnHZlPltXYNhpL9UEDXZBtxPmkEwLyesisdZsZS85lXa2iRhZq4uR77G2%2Bc7LqFikE%2BvParcx3R4Ro1AZV4ByO2TKGuZbciBu2smDt%2FFoUubS4KhXiQdvyE4QWTI1lFX9fg0bURbdovTUGEpGG5Owt7%2Bvnk2JS2%2BM5QpTZf2sHtpV3m5TxsLT8LKb9jrZfBdstU6w2JN7h4L2Q66uTUBvYm4TnXrBXrCIsKRucXfA7lUyCVMpufk0x4ug7AXyLYif8FhcDgwzyiC0ROGAQWMppUC8bHdp2XTbLM1hGDrzRpmIMOq75rwGOqUBp1qEOzoC4V0G0EtEBCOmw4dGtkc2V6ZBm0rPFe%2FSOEz4WPE9X6CPj1Zrh6N9Js2cqBwRaRlkDaSxrJNntJ3GxfD57HMLkozcQANna8tutge5sRqcAyI0k0%2FIcRrJ7MtSRvfrglYQYrQqZEYws9JGpwq6kcjAnokBTWL8XryCPDGQYKg0MfmGeH9v7QKrMnM8KTv%2Bk7HvE62uCp4eyCrD%2BYhcYyrC&X-Amz-Signature=535503a7f4febab4b9457533c4470b0f325e2981934ab589e5cd336007816a78&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R46RXPO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCplpR%2BR%2BJsd3S49ooPGsgXPTC2aUA0mKsTXc3DDOAE2QIgNfiuujSVxZqkMK8vp6lxTrwl96T1gbytUqXoh1Mpqu8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAjWAuyFd%2FYzMgx7SrcA3sGg0M2Q0U9dlhgAgTq2UVNBQiUlpZ9sFCd0nQ%2BRhoZjJ9NrgaP69tSbk4n9hiFCqc%2B9NzqKz8YPVoulTP13YAEenq2lz0PgdZx2y07mWMZX0WP1Yu5p5Qs5GHSOS0SW5RMzqk89deStMisN1lSRqAeSvH%2F3D7CMN2wG4AHBRJziT9EKL%2Bn9KN0f8IdJNBteSPoGR7G2YiEhhKuU44%2FrFd9N0OVQwe1xdolCDByc5yiIxHSskVOQmfK2oVqOY68z6baJhsG3x0tWpDXObdznf%2FqIlSU8fCf%2BzpygVRdHiCFoGXteSaEXsuDPfuLPXoxQ13QZ1b4VPmMKGpbnHZlPltXYNhpL9UEDXZBtxPmkEwLyesisdZsZS85lXa2iRhZq4uR77G2%2Bc7LqFikE%2BvParcx3R4Ro1AZV4ByO2TKGuZbciBu2smDt%2FFoUubS4KhXiQdvyE4QWTI1lFX9fg0bURbdovTUGEpGG5Owt7%2Bvnk2JS2%2BM5QpTZf2sHtpV3m5TxsLT8LKb9jrZfBdstU6w2JN7h4L2Q66uTUBvYm4TnXrBXrCIsKRucXfA7lUyCVMpufk0x4ug7AXyLYif8FhcDgwzyiC0ROGAQWMppUC8bHdp2XTbLM1hGDrzRpmIMOq75rwGOqUBp1qEOzoC4V0G0EtEBCOmw4dGtkc2V6ZBm0rPFe%2FSOEz4WPE9X6CPj1Zrh6N9Js2cqBwRaRlkDaSxrJNntJ3GxfD57HMLkozcQANna8tutge5sRqcAyI0k0%2FIcRrJ7MtSRvfrglYQYrQqZEYws9JGpwq6kcjAnokBTWL8XryCPDGQYKg0MfmGeH9v7QKrMnM8KTv%2Bk7HvE62uCp4eyCrD%2BYhcYyrC&X-Amz-Signature=3bdd6889c44b39739d9db8d421f3b1255ce2c4601d53498b4cc713161b477a95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
