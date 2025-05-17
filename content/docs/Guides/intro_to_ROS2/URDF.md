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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XGQX4AS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJlvvb3evfqxXZT5CAlt2S4s9DLGMbOZf0Yd9UhY023AIgbc45SkWfdwRjf4i4cZ%2Bp3wKY5zVrZIORvEmYsLmgiyEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJLUGiBx5cY8ZUzYtCrcA4a%2BFr%2FjgzL%2FHT4qsM80sDwbX%2B3kokQSB9SMW7dOE5BN%2BIkc1QdR97YvyjLnYs%2Bzbs2fMWE6FxGDz5zwj6YMPMDeXA0v144MVie%2BwF7cl0GNtVNm42%2F%2FPCJzx60UP1C35HexRufvkidLOtWPH9m5la6r%2FcAAkjOtO34MyDaMPeiH4k%2BCDlM%2FjezTOjzJXWKWPhu%2B419HpxbIicvCOx%2F6YnQjbTH7bgIrsylDn3%2Bvtv%2B9sMWl2lNQlc4JabGMxk4K5kTT8CNa1TyFDqFjfnHsHI7LWAH5VV%2B5vB7IYYjXIP5aYR2B6nKWSfZ%2FuoiuaI1ahgQrxH%2FNNO6nkauLBQvfTXTUFNaItmmpifyQ1KDQPsXe3q8D51dd60N3SWaCugortwmuAsYmEhK0twhYGrt74iUSXpEd%2BToL4AONZ8AH3VIRIwYQ46McArUnlXD4xcpOx4JoKPlXWipvRXbze1aKY48gHKySi%2BxusHVBmrxkTBE0eibbZ4X3M%2BVur4%2BlB9TwgDttBb%2B5%2FQ9XVYFx%2BFttmk7R0bctADSJ%2F%2BbVUFQOtd3y%2FRhyEdmtPKoxhjCaOCqK5hDwaqne95zxoZRmAC3n2lSR8wftPM6nJI2AOYKijcUkA1qCd0L2sSgR7D8zMNG8ocEGOqUBsbRhUBLB%2BLmlxMPukSgRMkwAIWvNluVQ4eq526H4HytVa%2B0rYE5fCPv%2BlvEdo%2FG4%2BrYTLAZgYBldys2yPjMkkD03KJ7gWFIgAj%2FIqsiOVbbhm5jHLL0ZV9R3IpaOs%2Bm35SVZd%2BSh45F4Agqp0gCxvX7MRVlHDPMdvvMH%2FJclIhxBZlOWEio2nxGo4VIQSMKLk1aaNhA%2B282FTfHeBDXt%2F6pp4xkw&X-Amz-Signature=a167cd815300c25f83ac61c6b707e20f37c0c1d9d7ba57b60951319e5846abc8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XGQX4AS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJlvvb3evfqxXZT5CAlt2S4s9DLGMbOZf0Yd9UhY023AIgbc45SkWfdwRjf4i4cZ%2Bp3wKY5zVrZIORvEmYsLmgiyEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJLUGiBx5cY8ZUzYtCrcA4a%2BFr%2FjgzL%2FHT4qsM80sDwbX%2B3kokQSB9SMW7dOE5BN%2BIkc1QdR97YvyjLnYs%2Bzbs2fMWE6FxGDz5zwj6YMPMDeXA0v144MVie%2BwF7cl0GNtVNm42%2F%2FPCJzx60UP1C35HexRufvkidLOtWPH9m5la6r%2FcAAkjOtO34MyDaMPeiH4k%2BCDlM%2FjezTOjzJXWKWPhu%2B419HpxbIicvCOx%2F6YnQjbTH7bgIrsylDn3%2Bvtv%2B9sMWl2lNQlc4JabGMxk4K5kTT8CNa1TyFDqFjfnHsHI7LWAH5VV%2B5vB7IYYjXIP5aYR2B6nKWSfZ%2FuoiuaI1ahgQrxH%2FNNO6nkauLBQvfTXTUFNaItmmpifyQ1KDQPsXe3q8D51dd60N3SWaCugortwmuAsYmEhK0twhYGrt74iUSXpEd%2BToL4AONZ8AH3VIRIwYQ46McArUnlXD4xcpOx4JoKPlXWipvRXbze1aKY48gHKySi%2BxusHVBmrxkTBE0eibbZ4X3M%2BVur4%2BlB9TwgDttBb%2B5%2FQ9XVYFx%2BFttmk7R0bctADSJ%2F%2BbVUFQOtd3y%2FRhyEdmtPKoxhjCaOCqK5hDwaqne95zxoZRmAC3n2lSR8wftPM6nJI2AOYKijcUkA1qCd0L2sSgR7D8zMNG8ocEGOqUBsbRhUBLB%2BLmlxMPukSgRMkwAIWvNluVQ4eq526H4HytVa%2B0rYE5fCPv%2BlvEdo%2FG4%2BrYTLAZgYBldys2yPjMkkD03KJ7gWFIgAj%2FIqsiOVbbhm5jHLL0ZV9R3IpaOs%2Bm35SVZd%2BSh45F4Agqp0gCxvX7MRVlHDPMdvvMH%2FJclIhxBZlOWEio2nxGo4VIQSMKLk1aaNhA%2B282FTfHeBDXt%2F6pp4xkw&X-Amz-Signature=73d208c535a53849f02550aba0b3e9f80a40474b42cc1ea13b3247876e5948f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
