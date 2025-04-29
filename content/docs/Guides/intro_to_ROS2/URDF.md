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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667BQQ2RQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMl1U61HuwU3GBo1vEn0AXw%2FmtCnLe9O1svZYgYulrmAiEArqIKJ%2FPb9i%2FvR6KZ92FbwEhRxI4kHcbcL2jI5mrywLAqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3NxCF2PS0EFFHKGyrcAxlKh49txL553rM%2FcbJTUXVh8h52cGoWIjdxbmUnr6uYM%2F2wvQ0tNEoUSL572rTpnEFT8z85E%2F8OlAKl55Xr2YZRKRbBXjaGwb6wW3RzxHzi4Q2u0pZlZmWVOlhTE8Ruc5g1QJp3UPapMZv3GEukEY52AI7LkhS824HhwfOMLQA5J8D6ghgeBSmSa2Ptwjciy8Chz%2FHng9sKPpWZSUQw2y4xKV3sjLsOXr%2FfWLiGFVIamB8RlfHwEdR3Tgxv8DzIzlZqCmqhgHSAyRAm0nVz8UePWVgTjNTQejc1hruTKv7xyA%2FvZsBLYPR5RCd5qnAwFXctF1y3fbcaJp5FttyLgopDCiuk3Kpp3TCepPQ6Og3PiVMyUsQzIL%2FBAHrtV%2FJ7FCKT%2FD2CDqz%2FvaKqmWAZWdoLrx8rzhF2vzOezamC3YVvTQGLV%2FLVqKL4ssz5M28VNcQcVTGOSqoLjU9elho1Yp%2BNZIl0CpxYOifqM8nd%2B2MnhFRcbMeWtBklKbBBTEZuKu4Xw3tA34dWmNO6Cd%2BjFeAWFrKuG1nKdvi1%2BLP1G%2B%2FW4232chN3yaWghgaaOl7QaEmiN69jlLL9nMJPJWAouYaOPa2EC%2Fos2SW1jhMY%2Fy8P1Xo96SuKeOQzHiZ3MIO%2FwMAGOqUBQ2figgOomv8bHDms6wpIR9ikvTNfXRlQHe7DL6Cxw3vNrDRIFGASO%2BZBX8MOiUYKSVByUxIGAT%2BlR6eL%2B3%2FTtuYqJ%2FyUv6zDvFc6af0bHvDYCgL3he1pliTVrcCH1Tt%2Fbay%2F%2B0PvvUxUg3Oy%2BdCQIqQ8JO4tSH1Ij%2BLqvHvaglmhxq4vb02iPktvanTclRFu%2Fl2QRSiuKz2n8djHvbhh2BGOmQDq&X-Amz-Signature=2935bd0c5b760bd06b43fcd7c89182b7ccf87732eb05391cfb32d1a6c71011e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667BQQ2RQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMl1U61HuwU3GBo1vEn0AXw%2FmtCnLe9O1svZYgYulrmAiEArqIKJ%2FPb9i%2FvR6KZ92FbwEhRxI4kHcbcL2jI5mrywLAqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3NxCF2PS0EFFHKGyrcAxlKh49txL553rM%2FcbJTUXVh8h52cGoWIjdxbmUnr6uYM%2F2wvQ0tNEoUSL572rTpnEFT8z85E%2F8OlAKl55Xr2YZRKRbBXjaGwb6wW3RzxHzi4Q2u0pZlZmWVOlhTE8Ruc5g1QJp3UPapMZv3GEukEY52AI7LkhS824HhwfOMLQA5J8D6ghgeBSmSa2Ptwjciy8Chz%2FHng9sKPpWZSUQw2y4xKV3sjLsOXr%2FfWLiGFVIamB8RlfHwEdR3Tgxv8DzIzlZqCmqhgHSAyRAm0nVz8UePWVgTjNTQejc1hruTKv7xyA%2FvZsBLYPR5RCd5qnAwFXctF1y3fbcaJp5FttyLgopDCiuk3Kpp3TCepPQ6Og3PiVMyUsQzIL%2FBAHrtV%2FJ7FCKT%2FD2CDqz%2FvaKqmWAZWdoLrx8rzhF2vzOezamC3YVvTQGLV%2FLVqKL4ssz5M28VNcQcVTGOSqoLjU9elho1Yp%2BNZIl0CpxYOifqM8nd%2B2MnhFRcbMeWtBklKbBBTEZuKu4Xw3tA34dWmNO6Cd%2BjFeAWFrKuG1nKdvi1%2BLP1G%2B%2FW4232chN3yaWghgaaOl7QaEmiN69jlLL9nMJPJWAouYaOPa2EC%2Fos2SW1jhMY%2Fy8P1Xo96SuKeOQzHiZ3MIO%2FwMAGOqUBQ2figgOomv8bHDms6wpIR9ikvTNfXRlQHe7DL6Cxw3vNrDRIFGASO%2BZBX8MOiUYKSVByUxIGAT%2BlR6eL%2B3%2FTtuYqJ%2FyUv6zDvFc6af0bHvDYCgL3he1pliTVrcCH1Tt%2Fbay%2F%2B0PvvUxUg3Oy%2BdCQIqQ8JO4tSH1Ij%2BLqvHvaglmhxq4vb02iPktvanTclRFu%2Fl2QRSiuKz2n8djHvbhh2BGOmQDq&X-Amz-Signature=015e950a5d1be788239e568be8fcb5dc0af863960539407069026a114691f484&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
