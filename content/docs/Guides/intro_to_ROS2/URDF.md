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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AEGHXGL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCSParMfSjFAMk4S4%2BzXDzgiBOPFJXeSmjQnpXRNVS8gIhAPnVu%2BMaCjsOQ04E%2BaCnvY%2FkfXEJH4D6r1lvqPpkjUutKv8DCDQQABoMNjM3NDIzMTgzODA1IgzgPz4lw%2FauOafasqYq3ANJWXU3xzFn2QTPFdO3TkHBCxeHBh0buDme2wLTGbiEOCpRMg1dXPDk%2BSi7%2BPpscV8oORwbVDmccK%2BB2z7%2Bb%2FCeBG8KKaFTuWIZraaZtQWmSFjkMfvtFOAS%2FiGzCmu0d6uTK1OgsDvq5pr26%2Bh18%2FBU8be5S2%2B4ieU5ZSyCC9G73THYhUi1ENNlv8B%2B5I%2FXFW3dedwYfrgqlSsMpHKvCsiFYkB7U%2FRWoXe88RmgCwPdMAGabP3BHxmsv%2BccqlvrJHty%2F2wAGOmckXSC%2Bj5rWnGSHVZMb5Jsf%2BA92Rt2hqPvNafcYpeYZRwxFg1kWZdgCjbebt1Opc1Qysnjs0eMDh9iySiesZxp%2FExqz4xYWys1BpvnqmJRMeTgxvYnsaRSAx8YcX6Zf5YXp23%2BnAmST3UmEzWm7%2FtNsIFxgrFzyGdg2H7wBDUjbe7Su%2B1xuMXGGgGN7cgl93WwPnX2kvMwQqb4Sq%2Fi6oiUuIfdL%2FfsqQOmR2WRvagL8YsK8epZKhhU%2Bmk32pkS4tgv0CO0Bqs%2Bm8dRK2oNqfPqhBS0Vryz%2BQp8KU6ypGRhS30JDssfniE%2BOqXeQRnQlPjGVEpIRozdNoDFvQ14NiwL5ry1K2SqQIDi%2F2p8CMhKpmTBsIndaDCS%2FfK9BjqkAf6sWtfSqVpdNzCmeKpdMOG5DyxufvGH9sLu7Pxngib5M7pIkCPIZFBokmKeubFD9XRsq4uVJCDhwqiuSDtYwJwwQAlAO4ho0GskXRIzwHp59zfyRoFbZd8YFP8moC3Wr4A22fSwAHhn3q7XbHHUu6aTyBNTTJql27eZ6ytOpZMNZXX9%2Bh0v4%2B5cchHI4%2FmRvmJCtCtlQs50FHKwvxFO%2Bn39%2FEtS&X-Amz-Signature=c24ca46eacad83d1158b04dda17fc111ea04ca2705e5faa78cd53a3941ab3731&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AEGHXGL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCSParMfSjFAMk4S4%2BzXDzgiBOPFJXeSmjQnpXRNVS8gIhAPnVu%2BMaCjsOQ04E%2BaCnvY%2FkfXEJH4D6r1lvqPpkjUutKv8DCDQQABoMNjM3NDIzMTgzODA1IgzgPz4lw%2FauOafasqYq3ANJWXU3xzFn2QTPFdO3TkHBCxeHBh0buDme2wLTGbiEOCpRMg1dXPDk%2BSi7%2BPpscV8oORwbVDmccK%2BB2z7%2Bb%2FCeBG8KKaFTuWIZraaZtQWmSFjkMfvtFOAS%2FiGzCmu0d6uTK1OgsDvq5pr26%2Bh18%2FBU8be5S2%2B4ieU5ZSyCC9G73THYhUi1ENNlv8B%2B5I%2FXFW3dedwYfrgqlSsMpHKvCsiFYkB7U%2FRWoXe88RmgCwPdMAGabP3BHxmsv%2BccqlvrJHty%2F2wAGOmckXSC%2Bj5rWnGSHVZMb5Jsf%2BA92Rt2hqPvNafcYpeYZRwxFg1kWZdgCjbebt1Opc1Qysnjs0eMDh9iySiesZxp%2FExqz4xYWys1BpvnqmJRMeTgxvYnsaRSAx8YcX6Zf5YXp23%2BnAmST3UmEzWm7%2FtNsIFxgrFzyGdg2H7wBDUjbe7Su%2B1xuMXGGgGN7cgl93WwPnX2kvMwQqb4Sq%2Fi6oiUuIfdL%2FfsqQOmR2WRvagL8YsK8epZKhhU%2Bmk32pkS4tgv0CO0Bqs%2Bm8dRK2oNqfPqhBS0Vryz%2BQp8KU6ypGRhS30JDssfniE%2BOqXeQRnQlPjGVEpIRozdNoDFvQ14NiwL5ry1K2SqQIDi%2F2p8CMhKpmTBsIndaDCS%2FfK9BjqkAf6sWtfSqVpdNzCmeKpdMOG5DyxufvGH9sLu7Pxngib5M7pIkCPIZFBokmKeubFD9XRsq4uVJCDhwqiuSDtYwJwwQAlAO4ho0GskXRIzwHp59zfyRoFbZd8YFP8moC3Wr4A22fSwAHhn3q7XbHHUu6aTyBNTTJql27eZ6ytOpZMNZXX9%2Bh0v4%2B5cchHI4%2FmRvmJCtCtlQs50FHKwvxFO%2Bn39%2FEtS&X-Amz-Signature=58b10c8241ad675143877018352f2525aa5e469fc2a856ce18af44c5e846fc10&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
