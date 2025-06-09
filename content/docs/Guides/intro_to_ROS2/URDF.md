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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIAHLLBB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlwtn%2B7pAiXgNDTCdQxsY46xKKZ2ttq54Zyi0PqlrmAAiBNdicsWSt%2F5h8RK2jA10lKQeLfnK4KAzCRRolhF4345iqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiz%2FwqEPBRCowVoq2KtwDFSZa0AXLc%2FJNa6rq%2FbdhFOqwmW5qeHW0xPIFZ6reIJOhwTnSXS7F%2FXgWQOGXLGJARq2v9KU4tAN1tQgAcpALoy5IVgt6DNk7Z%2FIljv0HaKL9YiU%2BaWZmSNerXRH2rq4ekE0fQ12jGDwx9%2BvFs2sgb%2BU8DlCGcAwV2JiU0sk8SSCb2T8gnCZ5nMcBjRkt0tItb%2BvG9Tmt%2FNSQ6H%2B0BpmYZiO6dkc4u0jw6XeSCJtvqfvgIMy8w6FecWT5kEbggAa5L7ohOFFrQVVKbQ9ofQRLZt%2BxboZi3vLhrTflfFgMfI1bm0p%2BoIwGvcIYtp8wqDCRZv%2Bp2ou9RsCksLHoeYDR34WEy09n5XO0BdG9jvXyVK4WeYGOvFYEXuqg8h4MKBWZoPxFLStHrVv3LYvrVU14qfUF3L5eAJgz2loINwVMm%2FG4y3Pw9OcM5o1A7n6367VNAGnHMcPIMTfu58GX0UoHDRB%2BziMZ%2FMf4k6Df8TFrVrHX%2B2JIJ6UFfLnQ%2F6ZKS8Ar3aHlXCXtdIpZIFG9BUcY5cRnUMRMA8K28gLHztlE0ZYFk7n%2FgmOfZhn%2FgipYYhBzdjW%2B6utjI6tF1HgwtWHpkWSzTjGfb5n8hmyV0ujA2Gp9g6p4vfAvWe1HlNEwyeaZwgY6pgGotX7eBLBI%2FwN9Vs9eikCdUjAImJDS%2FYaDTxrSHwm4OVZnn6avKa74%2BYgVtNgdhcLqoMAOB3Lp7haTxok2bM27g18AK%2F%2BIMnQT4Nbvs%2BYqO4my83wWeloHS6hWR6AfgchN3iPD8oUWKHSudhuxYrKHt4YRM0BKShs8SiYhXtUxnbkGJSnezgX%2F3v7PmvhckffRyN0oCecqQc0ziD5OUiZtSIDci4kQ&X-Amz-Signature=4bb7dfca1c2b500edcebff85e328823ddae484fc57cc2aebea6fe86458db6f02&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIAHLLBB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlwtn%2B7pAiXgNDTCdQxsY46xKKZ2ttq54Zyi0PqlrmAAiBNdicsWSt%2F5h8RK2jA10lKQeLfnK4KAzCRRolhF4345iqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiz%2FwqEPBRCowVoq2KtwDFSZa0AXLc%2FJNa6rq%2FbdhFOqwmW5qeHW0xPIFZ6reIJOhwTnSXS7F%2FXgWQOGXLGJARq2v9KU4tAN1tQgAcpALoy5IVgt6DNk7Z%2FIljv0HaKL9YiU%2BaWZmSNerXRH2rq4ekE0fQ12jGDwx9%2BvFs2sgb%2BU8DlCGcAwV2JiU0sk8SSCb2T8gnCZ5nMcBjRkt0tItb%2BvG9Tmt%2FNSQ6H%2B0BpmYZiO6dkc4u0jw6XeSCJtvqfvgIMy8w6FecWT5kEbggAa5L7ohOFFrQVVKbQ9ofQRLZt%2BxboZi3vLhrTflfFgMfI1bm0p%2BoIwGvcIYtp8wqDCRZv%2Bp2ou9RsCksLHoeYDR34WEy09n5XO0BdG9jvXyVK4WeYGOvFYEXuqg8h4MKBWZoPxFLStHrVv3LYvrVU14qfUF3L5eAJgz2loINwVMm%2FG4y3Pw9OcM5o1A7n6367VNAGnHMcPIMTfu58GX0UoHDRB%2BziMZ%2FMf4k6Df8TFrVrHX%2B2JIJ6UFfLnQ%2F6ZKS8Ar3aHlXCXtdIpZIFG9BUcY5cRnUMRMA8K28gLHztlE0ZYFk7n%2FgmOfZhn%2FgipYYhBzdjW%2B6utjI6tF1HgwtWHpkWSzTjGfb5n8hmyV0ujA2Gp9g6p4vfAvWe1HlNEwyeaZwgY6pgGotX7eBLBI%2FwN9Vs9eikCdUjAImJDS%2FYaDTxrSHwm4OVZnn6avKa74%2BYgVtNgdhcLqoMAOB3Lp7haTxok2bM27g18AK%2F%2BIMnQT4Nbvs%2BYqO4my83wWeloHS6hWR6AfgchN3iPD8oUWKHSudhuxYrKHt4YRM0BKShs8SiYhXtUxnbkGJSnezgX%2F3v7PmvhckffRyN0oCecqQc0ziD5OUiZtSIDci4kQ&X-Amz-Signature=d0376da5bcd6d11f4ab44b557c817f1a674525254cb2e547c56b486de635126a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
