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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VOEUTL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIH8Qqrm06qw3nW%2BkbvL7Lo2Mx4%2BquwYVWzrr6Z8rDC%2FMAiEAuvk2aysVfWn7qvxRTELi95iRPKqbq18vIZGD355PcHUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEuT51rCGswuL1yVTSrcA7yl2b%2F4Yfo1AzJYzBYRBvayjT%2BWoDL%2B7t5mr6%2BpoDfIsSvOnwdWljfmgufvZ8r0C2Xjc9B74znS1i2j%2FScHtxbwEfi%2BSzv3L9wDyUyyNMHEywNfxYrlyt9TE9UoeAsIBNCT5wVxiPggy%2FKzhj6NqEouoVEdMd2jsv%2FvYssUVHX%2BEeI%2Fvqv8KImKoSJbOS3syfaxBQPoUSGiaRLAzqIoRU68ei0Jf8G%2FRlTFZ%2BXMoy92Nz88IN7rXCIdmqCICcFeMf%2BTTm4K5T7RFLH6ixfJb%2Bmf4rLjSM27YpL9Z9IOJhlis8FeldgJ62zn%2B9VpW1CRbagCrE3zhcwzRHb4jmkwhEGMBL0Qp5KPEYoa%2FRRhwm%2FO%2FJFWAAOKeW58x9WuIgD1lQYrd5CQvf2XVS1pDcIwtGIIBlCJ9Vv6lMWAJraT2h9c%2B90x9oHSp9zxNPpewxRxPlhb2D3bRrPO8QeZW4Yz6GtQbyV6CvrKD%2Fb82ZCfQ%2BEaWHjTF7cwemjjm3b2FlzLCfDA5uxJZQLaGAVQ6Uw1KNUwpn1238EMJJuF4zji2%2Bltp8mMV5d8AolvXU2UNGfto%2BPrNxp0wzeluoCPv2xtS0qWCOwKehjYEECmw5s9nr0kc5WmWwRLyiKoI0OvMLvc08MGOqUBYsqzLONYoFFgZFRbKREUMg2OXp1uWMjqtQeUjJgewFoxvTPop5I1azJrsMqOgsiTZ8bmV1MJwLs17bXOvxdhkSDqagan%2Fzb%2BSRKKwln1D2qZw71Mj8vyfTFltL6jED5tpzgwLzuGoY9yuVHk47VdEy9IOfryA6aMX7ZgPke3AWrDU%2FXSr9v33eLHlyNd4MVAvPUwN5lm10CXyfvkefKOUxNPiHYY&X-Amz-Signature=7bbfbc5d9576a096b6f06d71a16f4ce977d12de7e1761612cec4e7db7b9fccf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VOEUTL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIH8Qqrm06qw3nW%2BkbvL7Lo2Mx4%2BquwYVWzrr6Z8rDC%2FMAiEAuvk2aysVfWn7qvxRTELi95iRPKqbq18vIZGD355PcHUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEuT51rCGswuL1yVTSrcA7yl2b%2F4Yfo1AzJYzBYRBvayjT%2BWoDL%2B7t5mr6%2BpoDfIsSvOnwdWljfmgufvZ8r0C2Xjc9B74znS1i2j%2FScHtxbwEfi%2BSzv3L9wDyUyyNMHEywNfxYrlyt9TE9UoeAsIBNCT5wVxiPggy%2FKzhj6NqEouoVEdMd2jsv%2FvYssUVHX%2BEeI%2Fvqv8KImKoSJbOS3syfaxBQPoUSGiaRLAzqIoRU68ei0Jf8G%2FRlTFZ%2BXMoy92Nz88IN7rXCIdmqCICcFeMf%2BTTm4K5T7RFLH6ixfJb%2Bmf4rLjSM27YpL9Z9IOJhlis8FeldgJ62zn%2B9VpW1CRbagCrE3zhcwzRHb4jmkwhEGMBL0Qp5KPEYoa%2FRRhwm%2FO%2FJFWAAOKeW58x9WuIgD1lQYrd5CQvf2XVS1pDcIwtGIIBlCJ9Vv6lMWAJraT2h9c%2B90x9oHSp9zxNPpewxRxPlhb2D3bRrPO8QeZW4Yz6GtQbyV6CvrKD%2Fb82ZCfQ%2BEaWHjTF7cwemjjm3b2FlzLCfDA5uxJZQLaGAVQ6Uw1KNUwpn1238EMJJuF4zji2%2Bltp8mMV5d8AolvXU2UNGfto%2BPrNxp0wzeluoCPv2xtS0qWCOwKehjYEECmw5s9nr0kc5WmWwRLyiKoI0OvMLvc08MGOqUBYsqzLONYoFFgZFRbKREUMg2OXp1uWMjqtQeUjJgewFoxvTPop5I1azJrsMqOgsiTZ8bmV1MJwLs17bXOvxdhkSDqagan%2Fzb%2BSRKKwln1D2qZw71Mj8vyfTFltL6jED5tpzgwLzuGoY9yuVHk47VdEy9IOfryA6aMX7ZgPke3AWrDU%2FXSr9v33eLHlyNd4MVAvPUwN5lm10CXyfvkefKOUxNPiHYY&X-Amz-Signature=8e0ff308307b2d9e57512a246eca77adfec21b0b6ff3021a3650dcd73c109adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
