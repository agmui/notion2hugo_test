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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWYKRHD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCgUzPegB9JGixyoayw5itTGOGcl2X0CUW5uEqmuAL8MwIgPQrB20p0IGWbJTnP%2FURJqINnHsnyVGPXsO0CWsLgxb0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDACE3AmPHeuxTLIE9yrcAxNIyFKGcWfzwdtULImp0QU2LaCz8YBLAes8ZOy5DoKemqzsuT0TgEMP0o%2BaW1SRaS8LhUGlSol%2Bxpp%2FUWDIHj05cvRayHL%2FRUuKbOaqUoBHRQqbB7CF%2F%2FCa6eY%2BbWwbWduhNXp81wWbIlBlV0pzlYS8ImfEbdZE7qb6fxRtGBGNs6lkfBSP8uR%2FSiPA006Q%2B%2BDjyREKjYaKt6JnVt1hIHgnpyvxibLWAf7nYAnmL3K%2BAV%2FXCniTxf%2FyC6apI41d%2F9hn3HdCSs8JijKepwTWIRqmerdZtrIYGQy8%2F4hd971JngEZs6duUj2niBpl5Qst%2BhCyCs2kV%2B6gRAJ05BxHgLKZ7WyxPk%2F9DxF5vaLhfIqLqJU5p%2BIPi9emtCTB3SnpGKXl4twk%2Bdf5dlZiZFPP72J0WrQDuM%2FrM4tYu7xatUniAuZBV8E%2BT2SxMJ2KmJnkpZuEymqRQF5%2BZwhLLDFUEVpyqoYOJ0L0mVGOo6PZgyO8TxSct7j9QkzO9v1YdY4bDpIX7rIyXZkvWOE6CjmX3kI2YAEKJhLvag%2FNbo1SyiaI9uNpInddLDUvJUB6fp%2BMshp1p5fB%2FTQ1%2BgBNhCmLzVZr%2FDQr1yXhiIPsgN%2BvNBO3igkMxsewmhzlOXw1MP3Fwr0GOqUBin3l8jK4ontx9ghAfVCp4Mvww56SOr3PaEZNvIm05qXRKVQfWJeeC%2FPykauMfvvaWeair2Ir2orrXcLV0gV%2BMgTS6Vluu0IWVbA3PdJlZhF8MtN%2BSaTSIfr1tutbMUWODdWo45b%2BXldWDYhMdcN7vsiY609tp%2FwAPsXKcpvWzWno5X%2FeqPjgBQBycwHv0q%2BiPl94BCzmpB2mcMojm69yyx1tuWFI&X-Amz-Signature=bc55e544900ff55be523d0e274c8391a543a707421c3881ce11329c709581cb7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWYKRHD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCgUzPegB9JGixyoayw5itTGOGcl2X0CUW5uEqmuAL8MwIgPQrB20p0IGWbJTnP%2FURJqINnHsnyVGPXsO0CWsLgxb0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDACE3AmPHeuxTLIE9yrcAxNIyFKGcWfzwdtULImp0QU2LaCz8YBLAes8ZOy5DoKemqzsuT0TgEMP0o%2BaW1SRaS8LhUGlSol%2Bxpp%2FUWDIHj05cvRayHL%2FRUuKbOaqUoBHRQqbB7CF%2F%2FCa6eY%2BbWwbWduhNXp81wWbIlBlV0pzlYS8ImfEbdZE7qb6fxRtGBGNs6lkfBSP8uR%2FSiPA006Q%2B%2BDjyREKjYaKt6JnVt1hIHgnpyvxibLWAf7nYAnmL3K%2BAV%2FXCniTxf%2FyC6apI41d%2F9hn3HdCSs8JijKepwTWIRqmerdZtrIYGQy8%2F4hd971JngEZs6duUj2niBpl5Qst%2BhCyCs2kV%2B6gRAJ05BxHgLKZ7WyxPk%2F9DxF5vaLhfIqLqJU5p%2BIPi9emtCTB3SnpGKXl4twk%2Bdf5dlZiZFPP72J0WrQDuM%2FrM4tYu7xatUniAuZBV8E%2BT2SxMJ2KmJnkpZuEymqRQF5%2BZwhLLDFUEVpyqoYOJ0L0mVGOo6PZgyO8TxSct7j9QkzO9v1YdY4bDpIX7rIyXZkvWOE6CjmX3kI2YAEKJhLvag%2FNbo1SyiaI9uNpInddLDUvJUB6fp%2BMshp1p5fB%2FTQ1%2BgBNhCmLzVZr%2FDQr1yXhiIPsgN%2BvNBO3igkMxsewmhzlOXw1MP3Fwr0GOqUBin3l8jK4ontx9ghAfVCp4Mvww56SOr3PaEZNvIm05qXRKVQfWJeeC%2FPykauMfvvaWeair2Ir2orrXcLV0gV%2BMgTS6Vluu0IWVbA3PdJlZhF8MtN%2BSaTSIfr1tutbMUWODdWo45b%2BXldWDYhMdcN7vsiY609tp%2FwAPsXKcpvWzWno5X%2FeqPjgBQBycwHv0q%2BiPl94BCzmpB2mcMojm69yyx1tuWFI&X-Amz-Signature=23957cd936dd2bad4adcf261414be79c75792fff8ba0d63da0b9f5803ee6ac8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
