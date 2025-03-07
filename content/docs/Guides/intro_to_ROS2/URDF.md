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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJTT7JWA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFq4pp%2B%2F3x6CoqK8xA9OG3drYCe3YERgNwydJhmiMf5AiEAjIk6CksBM3MHtudY2EHGkywBt2wwrVluJJT%2FfHn5fnQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCICLJpVi543sylQ%2BircA%2BsLXIdnvz9N8O9eq7x3MHXsve4foXLaiYljOj5dzvyHWhJPg%2BnNZ5Crw9y9pazRJnsyy3DfSyZbLuGH7Uvkj9V%2BYNTyFNftTcU%2B5Y%2Br9r2H0RUsUxyZfmT2RB5qk0M556DbksnFikk7UfJBMgu9IyeCvuE%2F4DNrNtsYvYhCgjeCgnH499AXXt%2Fwi9iuT8pVva9BpnHLa9FUZ5Cwhb4dky4Bm1epiVBWG4S%2FqrlFvqTuaCjIWMVev8d8BbIBQFqmh9VpIFbVUTp2Ty6rQIKA%2Bs5OtrLfZh5PCgwkOzHaVxnzbZwt%2BEpdcEDJPjCknoTUiE2wqDcsZx3BRQBoB6cZKv9HbkV%2Bo%2F2W%2BcHy1vBz4Vc3YeJdueYioCE65zCwyQCHZkL3xFMPcZ9DUhAvKgr2GGhH2Vexvrh4X%2BD0ZGALxS%2B51W6CMK14p0NInmV68maPYVTxxaIAH6Bpx5KVsEIm%2F3O6u%2Ba%2FU8OVZKOI6UdchGz67S4zzi1rOgV7l52taU3ntIkGF2zDvartX4P1rUBfFsPkSHqvoWBzXdrYpCAQ6cvpeP9q8Xb0ls598rX0pGqmLvLSzCjojuut3ZPBc2Tm%2Fh0ZrUZjH%2BKRyVFqFdyGk58F98YB3I%2F2yMhQSjbjMImpq74GOqUBltSnX1GdgjKc4YC%2BtgZDVMFfXXSg2JJikDBd%2BLtSLnYLLEkIc%2FS5YzZBKgE81%2B5huBxMEKDVOhTe%2Fnz0nxJXChCJUobOo%2FaYMxEA2kWJkIAqmBu7Hwd9jf9PDuX9YHXoUyXk8a%2BHoehAUiyWGj9gKVx4Ol0y%2Fmsp875IzdwiEPWX%2FKhNGpU6Xcg6RRwO0oOirYzTRr6pETQoRHHS9LfZ4EHPkSF7&X-Amz-Signature=6bd384a00dffbd1a3f8b4f001b332d507fc42fc2b23702d1c5309abf10471da6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJTT7JWA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFq4pp%2B%2F3x6CoqK8xA9OG3drYCe3YERgNwydJhmiMf5AiEAjIk6CksBM3MHtudY2EHGkywBt2wwrVluJJT%2FfHn5fnQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCICLJpVi543sylQ%2BircA%2BsLXIdnvz9N8O9eq7x3MHXsve4foXLaiYljOj5dzvyHWhJPg%2BnNZ5Crw9y9pazRJnsyy3DfSyZbLuGH7Uvkj9V%2BYNTyFNftTcU%2B5Y%2Br9r2H0RUsUxyZfmT2RB5qk0M556DbksnFikk7UfJBMgu9IyeCvuE%2F4DNrNtsYvYhCgjeCgnH499AXXt%2Fwi9iuT8pVva9BpnHLa9FUZ5Cwhb4dky4Bm1epiVBWG4S%2FqrlFvqTuaCjIWMVev8d8BbIBQFqmh9VpIFbVUTp2Ty6rQIKA%2Bs5OtrLfZh5PCgwkOzHaVxnzbZwt%2BEpdcEDJPjCknoTUiE2wqDcsZx3BRQBoB6cZKv9HbkV%2Bo%2F2W%2BcHy1vBz4Vc3YeJdueYioCE65zCwyQCHZkL3xFMPcZ9DUhAvKgr2GGhH2Vexvrh4X%2BD0ZGALxS%2B51W6CMK14p0NInmV68maPYVTxxaIAH6Bpx5KVsEIm%2F3O6u%2Ba%2FU8OVZKOI6UdchGz67S4zzi1rOgV7l52taU3ntIkGF2zDvartX4P1rUBfFsPkSHqvoWBzXdrYpCAQ6cvpeP9q8Xb0ls598rX0pGqmLvLSzCjojuut3ZPBc2Tm%2Fh0ZrUZjH%2BKRyVFqFdyGk58F98YB3I%2F2yMhQSjbjMImpq74GOqUBltSnX1GdgjKc4YC%2BtgZDVMFfXXSg2JJikDBd%2BLtSLnYLLEkIc%2FS5YzZBKgE81%2B5huBxMEKDVOhTe%2Fnz0nxJXChCJUobOo%2FaYMxEA2kWJkIAqmBu7Hwd9jf9PDuX9YHXoUyXk8a%2BHoehAUiyWGj9gKVx4Ol0y%2Fmsp875IzdwiEPWX%2FKhNGpU6Xcg6RRwO0oOirYzTRr6pETQoRHHS9LfZ4EHPkSF7&X-Amz-Signature=06f92b6d5a5d0aa6747423993a489f34cd146fe93ad7c3f9517afd8f073452d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
