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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRO2MLRH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1U%2FMD2jSq9oxEgTLN3dKkq5lkr6wGCpDJI4w3M9R3BAIgVRp9NGzi2l932efe1sJAOuz2mAHtMSs2hIt6%2FuFW5loq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDBy5eQ8BU6B86og75SrcA5R2kPzdjr6oVI%2F2LVe3%2B0dTaZTYeK62Ji7VVr1wUOQNKTD%2F63yEKFdRv3DTDBOjvWWaXaz58imGCeF9CCrZKcLAZiy10LJnhkfBmy%2BWs5w7HWUBcZlNwJqUHpUKeE19ows4AL6a%2B%2BHvJFq183UVjHZCLbK3XgE%2BH7Uqa1OqahFRIBJfO4S3rnWz9RLaulQG5YUNkhLLqyJvkcXsppn%2BurElef3hIJvG1pFR5DyzPbGQB78JmOVxzeVSbr3UW4CmG5R5oss5FdXR6v7CZB4S9JBBe2zT9AKuxazJeZ0GxUl6Db%2FnpR4l7wDwFkEI9VQvZ7QJxrsp83DLLAMmYAR6amswu8fyUjJRAUIgaQMcnyOzNgSs4l4k%2B6ws6h4OgpU1GVIX5JYbSTetIMRM4SUtfFsj8sHlNiVX%2FPC3R2DycDOOzFbAk%2BI01mchQImIs0f9ghdvES%2FpnPcIQxlOoF9mzRCBU%2BuOWDG29yfgWeyQd0npwnPb3JLS5Nb%2BddtAi9ws6IAzd67SLg9ScfDR%2B7VQvfHkQQEki2qjFOndMo6qYUYYjS07bKbYloZCM9PYgF6mIxTba2Wxv2%2BaRnt%2FyG5iOfmBLOXRcNgamLJ0W9I%2Fcch0OcVOO1%2BFPySCG8mgMPLfgMAGOqUB6z1eQmEfV0FJs66MykcUM7LhLGVvNIjJjIsZmJbtvV2oPx1srnKe8rO5e88OisJuRODn3llX06TmyHsuuVgGdb4C0bwB53H2MM9sj1RdSJDjxhJc%2BnA7jWAXDTgmCgn%2FCnCy2OVjjSxIE5BZeMymRFHR9B2jJZUD0IX4OF91FjyRTCrWECMe4zWpD2SmSDFhFPVZ0zVQRBinCBZHA0D35QRh27ao&X-Amz-Signature=e0a99bf470aaacf1da71afdd0bdf5c6f7570b226997ad2a9bf70643416ab904e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRO2MLRH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1U%2FMD2jSq9oxEgTLN3dKkq5lkr6wGCpDJI4w3M9R3BAIgVRp9NGzi2l932efe1sJAOuz2mAHtMSs2hIt6%2FuFW5loq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDBy5eQ8BU6B86og75SrcA5R2kPzdjr6oVI%2F2LVe3%2B0dTaZTYeK62Ji7VVr1wUOQNKTD%2F63yEKFdRv3DTDBOjvWWaXaz58imGCeF9CCrZKcLAZiy10LJnhkfBmy%2BWs5w7HWUBcZlNwJqUHpUKeE19ows4AL6a%2B%2BHvJFq183UVjHZCLbK3XgE%2BH7Uqa1OqahFRIBJfO4S3rnWz9RLaulQG5YUNkhLLqyJvkcXsppn%2BurElef3hIJvG1pFR5DyzPbGQB78JmOVxzeVSbr3UW4CmG5R5oss5FdXR6v7CZB4S9JBBe2zT9AKuxazJeZ0GxUl6Db%2FnpR4l7wDwFkEI9VQvZ7QJxrsp83DLLAMmYAR6amswu8fyUjJRAUIgaQMcnyOzNgSs4l4k%2B6ws6h4OgpU1GVIX5JYbSTetIMRM4SUtfFsj8sHlNiVX%2FPC3R2DycDOOzFbAk%2BI01mchQImIs0f9ghdvES%2FpnPcIQxlOoF9mzRCBU%2BuOWDG29yfgWeyQd0npwnPb3JLS5Nb%2BddtAi9ws6IAzd67SLg9ScfDR%2B7VQvfHkQQEki2qjFOndMo6qYUYYjS07bKbYloZCM9PYgF6mIxTba2Wxv2%2BaRnt%2FyG5iOfmBLOXRcNgamLJ0W9I%2Fcch0OcVOO1%2BFPySCG8mgMPLfgMAGOqUB6z1eQmEfV0FJs66MykcUM7LhLGVvNIjJjIsZmJbtvV2oPx1srnKe8rO5e88OisJuRODn3llX06TmyHsuuVgGdb4C0bwB53H2MM9sj1RdSJDjxhJc%2BnA7jWAXDTgmCgn%2FCnCy2OVjjSxIE5BZeMymRFHR9B2jJZUD0IX4OF91FjyRTCrWECMe4zWpD2SmSDFhFPVZ0zVQRBinCBZHA0D35QRh27ao&X-Amz-Signature=505b676a16ee598fa7ae018feabc4f0836aece5753259248da17d02cb74179d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
