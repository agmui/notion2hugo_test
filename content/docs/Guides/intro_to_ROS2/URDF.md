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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ARWWJN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCwCFOKS2D8Nxopzgkg4By5FvyG7dJEeSZ7EOntrK1YAiBzaauUkLpXna03rusjgGri%2FAJftQJhkXKnR8%2F6DxRhbSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMtonXjvj7fB%2FWZprNKtwDjvelgrWaV36PfmJZ8lgFngcWpBc%2FbfW5Tj2Pjkdj3JiZ5u3QATcg4%2BSPyXAm7f282MffUCpAfM437aqNCK4Loll2ogXIxUQHIDIBtfGRSR04i5NBKdPDj6JyDQn6%2BhydVChB7qWcHvYVeLWFHbkBK4ZrtYC8SxZvcpxcUD5UQykh6k6WblKdSzzxoJW%2B5VDgqUayAcaGjRQnB90vNWubxUsk26DB7ZU2bBMcRgJmCRnSJ4s25RRu8YAmmQJcFn2jkW33C3hCo1yFooEwNVMbNTHiOIK%2BOpKPrb4F5FT%2FBvp88CLMKH0s5wEsUiow19NFNxVPnNRMebMO%2B3GXILPXenllsA6HkjYjvqGzHAK6O2BYFrHeGI6s%2FQxsMqofXe3cS%2F4jKi20hYkNDWRqgBA6MhICLCP%2FP51nTwiwNE0LVo41v3jqWcpOUvbvmeXVwjp4YP57Y8u61v%2FgCgH%2FmkYIxE6Xe1ejDoNS5eMkTmoD3fJqxgA7tduqsl5akT1O3HmSqF3ckfdLPpxJGD%2FpQZf9ofOTb%2FUjKf2TrUCCjU7GaJo26gOczMUGzvt3sPaq2RSQrur8t727fpOmj641afNbNxpn5J9xo%2BGHhSPg90hvuZ8CqAP%2FI9k6iPtsybMwwaKwwAY6pgFL3hICtGyn5p24HjCOv%2FuYZh42zVGiXuAdTWK%2BrRcordpgcz%2FiOpk%2Fb8rUhWL21YMW4U5Bm0sofrFagZo%2FtdlK4spchWdEIUY3mIvYBeU5obI%2BYaq8d1leWLjbnOdXcCY66MVLhteBUAGjTtWkfvxoZBZ%2Fp1oOCDxd%2F69%2F5i%2BjAj53IhMN4okHQuOeAgEGAyHJfhvD3mw7MIttXboee4AigrVBvu0y&X-Amz-Signature=a2e76124499508d6726255cae5282aaa82578f31f51abe267f554e282fbe9b54&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ARWWJN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCwCFOKS2D8Nxopzgkg4By5FvyG7dJEeSZ7EOntrK1YAiBzaauUkLpXna03rusjgGri%2FAJftQJhkXKnR8%2F6DxRhbSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMtonXjvj7fB%2FWZprNKtwDjvelgrWaV36PfmJZ8lgFngcWpBc%2FbfW5Tj2Pjkdj3JiZ5u3QATcg4%2BSPyXAm7f282MffUCpAfM437aqNCK4Loll2ogXIxUQHIDIBtfGRSR04i5NBKdPDj6JyDQn6%2BhydVChB7qWcHvYVeLWFHbkBK4ZrtYC8SxZvcpxcUD5UQykh6k6WblKdSzzxoJW%2B5VDgqUayAcaGjRQnB90vNWubxUsk26DB7ZU2bBMcRgJmCRnSJ4s25RRu8YAmmQJcFn2jkW33C3hCo1yFooEwNVMbNTHiOIK%2BOpKPrb4F5FT%2FBvp88CLMKH0s5wEsUiow19NFNxVPnNRMebMO%2B3GXILPXenllsA6HkjYjvqGzHAK6O2BYFrHeGI6s%2FQxsMqofXe3cS%2F4jKi20hYkNDWRqgBA6MhICLCP%2FP51nTwiwNE0LVo41v3jqWcpOUvbvmeXVwjp4YP57Y8u61v%2FgCgH%2FmkYIxE6Xe1ejDoNS5eMkTmoD3fJqxgA7tduqsl5akT1O3HmSqF3ckfdLPpxJGD%2FpQZf9ofOTb%2FUjKf2TrUCCjU7GaJo26gOczMUGzvt3sPaq2RSQrur8t727fpOmj641afNbNxpn5J9xo%2BGHhSPg90hvuZ8CqAP%2FI9k6iPtsybMwwaKwwAY6pgFL3hICtGyn5p24HjCOv%2FuYZh42zVGiXuAdTWK%2BrRcordpgcz%2FiOpk%2Fb8rUhWL21YMW4U5Bm0sofrFagZo%2FtdlK4spchWdEIUY3mIvYBeU5obI%2BYaq8d1leWLjbnOdXcCY66MVLhteBUAGjTtWkfvxoZBZ%2Fp1oOCDxd%2F69%2F5i%2BjAj53IhMN4okHQuOeAgEGAyHJfhvD3mw7MIttXboee4AigrVBvu0y&X-Amz-Signature=06a4581e355a6f95a3f54cc49b77c8c7e1ed8dd12149e7015dfae3d858737583&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
