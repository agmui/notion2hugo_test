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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VSICPA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCn%2FndFUEvKzggO2cU9hML0ftb53fUKQQf9pGz6AmCsogIhAL2oU5TSg861e6upK7FEhHQjAFdasfhJudicTr1HDlasKv8DCHsQABoMNjM3NDIzMTgzODA1Igy3WC8S9to0z6jFOFcq3AO8vZFhrsQm%2B8is%2BxvkYxf2FUhOngwKFDpF%2BXlw8jXOwe8NW658k%2BkET%2B%2BOgLaszAKNsTTbybnA39%2BpHHJSJHDoayq7MhQBSMmXnV2ahvgN5GZE91f29mn5ZJR0d46JemjE%2BLkME4RXN%2B%2F9mhe%2BxCcyf3agFZS3lFyw3x0qIm6WRgzVqmtnxOQjaqu4MUUCJQWhSGuj2VA6lCdW0nlxVFfP38C3frTEaBvBsrTN6aP79UUc74LLrTUXH%2Fs0%2BxVazLATsbmdiUENYMrW0iieMCXwsHHX5L%2FVW6EnXgnjxg0kHAt4MRHg7cq6f4%2B9a7d6yePPu9B1OEqesUu8Mk2o1zsnl%2BGSx7ScaiboNlvbg04PkH%2F%2FYwC%2BleqRQsNxFLrkTVdNMnd7AwBLRrWS5PnSRjy8m9MCDhHnr42KHd%2FMn7dK9R%2FqjuxMAHJwWypvGnSRDt8DSzuvjxAkWqJDK9KQxsEQSHA3SDIjk4zQSlWMsG4BSQWVmyAyFmr1V5i43S86vTTt%2FxWJd1xnOfsRDxVnINKDrhOAta%2Ff9ETq%2FuXh14izQi1z2AWGURy0ISSGIPItgL2Purc%2FcwRzBXzCYjWElsqjkjNndmZZCgwTktgCQ%2FnIxJlgbsIyAkkhoKnMFzDy8KC%2FBjqkAUkwnOymiVMnwPIkJhocLP6zvdwUB%2FZI3ePoRbO2V0%2Be3u4742Vut%2Fos08kl4Bm3xg2Na1nErr2gGhZhSkCsZjmd3Mb%2BFSyj0RVcoNJLHsnXTrjELon59fDIObvYHG5nMdCWDkfMiwar2gHDisXEue27%2B0csMopnnFXhJcZSAVk4V0p1atn4pUGqcehowhNeojKvFi5lrMj8FP6mkGu2FpEumoDH&X-Amz-Signature=66d47b42a343dd650fb9adbb261aa0a3fc3f2465afe8e1e57b9ac5f547fbabae&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VSICPA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCn%2FndFUEvKzggO2cU9hML0ftb53fUKQQf9pGz6AmCsogIhAL2oU5TSg861e6upK7FEhHQjAFdasfhJudicTr1HDlasKv8DCHsQABoMNjM3NDIzMTgzODA1Igy3WC8S9to0z6jFOFcq3AO8vZFhrsQm%2B8is%2BxvkYxf2FUhOngwKFDpF%2BXlw8jXOwe8NW658k%2BkET%2B%2BOgLaszAKNsTTbybnA39%2BpHHJSJHDoayq7MhQBSMmXnV2ahvgN5GZE91f29mn5ZJR0d46JemjE%2BLkME4RXN%2B%2F9mhe%2BxCcyf3agFZS3lFyw3x0qIm6WRgzVqmtnxOQjaqu4MUUCJQWhSGuj2VA6lCdW0nlxVFfP38C3frTEaBvBsrTN6aP79UUc74LLrTUXH%2Fs0%2BxVazLATsbmdiUENYMrW0iieMCXwsHHX5L%2FVW6EnXgnjxg0kHAt4MRHg7cq6f4%2B9a7d6yePPu9B1OEqesUu8Mk2o1zsnl%2BGSx7ScaiboNlvbg04PkH%2F%2FYwC%2BleqRQsNxFLrkTVdNMnd7AwBLRrWS5PnSRjy8m9MCDhHnr42KHd%2FMn7dK9R%2FqjuxMAHJwWypvGnSRDt8DSzuvjxAkWqJDK9KQxsEQSHA3SDIjk4zQSlWMsG4BSQWVmyAyFmr1V5i43S86vTTt%2FxWJd1xnOfsRDxVnINKDrhOAta%2Ff9ETq%2FuXh14izQi1z2AWGURy0ISSGIPItgL2Purc%2FcwRzBXzCYjWElsqjkjNndmZZCgwTktgCQ%2FnIxJlgbsIyAkkhoKnMFzDy8KC%2FBjqkAUkwnOymiVMnwPIkJhocLP6zvdwUB%2FZI3ePoRbO2V0%2Be3u4742Vut%2Fos08kl4Bm3xg2Na1nErr2gGhZhSkCsZjmd3Mb%2BFSyj0RVcoNJLHsnXTrjELon59fDIObvYHG5nMdCWDkfMiwar2gHDisXEue27%2B0csMopnnFXhJcZSAVk4V0p1atn4pUGqcehowhNeojKvFi5lrMj8FP6mkGu2FpEumoDH&X-Amz-Signature=fd3ba5b17a2f761aa9dea32eb80fd3faca1b109166f9fdb5da7acb7f9c491734&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
