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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7SYFEX%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCXaI9AV%2Fvn0X9sgBq9ZSdhcmHCNyTeCxiLJ%2FgI0uMZIAIgR1HoBerIiirk9rpao8aWGd2S1TK6CigtIIWbe2Mplagq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLuuzd5oE2inDxnR%2BCrcA9yCkcZ%2BFt2IiTEN%2BObWYbvg40JU%2FSH4qRqquZKUrVcLKfrhljJwVJ2RuB47ddfGiHwiJxPQqYaPYQ75uRwTRT0691ncaNPcfpsKXyaix7ZLPhQmEhceDrnPQtJn5oZitIxjVG7Rwo8Z1tzK6WOKLYGqg7n8dgBPJgYav1sU0k79vOhQQr71n65bIcDtmwoqwUd4Zhw%2FI3WOcGADW4dU2ckHmCLhQbjLfwW4%2ByImn4aTQWNuZCY9C5vUbD1EwFCGXKsbCCL1znegOp15CqwLgGn3KVokLagOW2vnoqxalXRAOO2BXZ6SqhDFFaAMm4%2B%2FnOccwAvQoJbN1VJfhhA9QfA4OLitNOhb7wrPDw5O54m1srQ7mAreOAJXVHCIl0lrYMtlDhpPfuu0faW%2FYUunaxCfpEp%2Bertz%2FpyDaBd4DE9cYuhYssB5bHX2Cqtcq52e2pZUIh%2F17ZgxHHxF%2FJrmCfqB%2BO1eda55rH5IV53qXM%2FsBC65H8wuAcjEAU7xqgHLWxGLYfwVVxA%2BoKEnatizbDBQgg3aDzLYua4Pv5kYgPVk4ftX3ndgS%2FYmuiL58D6BoTqjJE5fYIx6Z14FeZ0D1X7NbkpzRJLRlnZWtKv8dya8Zl1dTcM54MNoT7WWMO3c6sIGOqUBxAo4dwVTBpsH2lo%2Bp2QdgsOo6lt4RvRzxmB7raNMU2AVI6ke5h%2BNAEqhJFGOR0DIWjMo23UGpQyDMa2%2FXL4MXU4YfbOSsrjt%2Fn37IIcHGox6VCflaOaPfbhF%2BZ%2BVj%2B1Gm%2FFoWQ3LZb4oJR4i9OrFpfXIxDpV6fI9JfXP6ke5ReTrYBc2TELrsRfNNx2WhgbQO2CTuiNGWSxmpH9kwxeyfMzfDx%2BO&X-Amz-Signature=53bfa926294583b9a2a4ae12811ff925552c736d4bc7f6be406f120d7c2d7e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7SYFEX%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCXaI9AV%2Fvn0X9sgBq9ZSdhcmHCNyTeCxiLJ%2FgI0uMZIAIgR1HoBerIiirk9rpao8aWGd2S1TK6CigtIIWbe2Mplagq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLuuzd5oE2inDxnR%2BCrcA9yCkcZ%2BFt2IiTEN%2BObWYbvg40JU%2FSH4qRqquZKUrVcLKfrhljJwVJ2RuB47ddfGiHwiJxPQqYaPYQ75uRwTRT0691ncaNPcfpsKXyaix7ZLPhQmEhceDrnPQtJn5oZitIxjVG7Rwo8Z1tzK6WOKLYGqg7n8dgBPJgYav1sU0k79vOhQQr71n65bIcDtmwoqwUd4Zhw%2FI3WOcGADW4dU2ckHmCLhQbjLfwW4%2ByImn4aTQWNuZCY9C5vUbD1EwFCGXKsbCCL1znegOp15CqwLgGn3KVokLagOW2vnoqxalXRAOO2BXZ6SqhDFFaAMm4%2B%2FnOccwAvQoJbN1VJfhhA9QfA4OLitNOhb7wrPDw5O54m1srQ7mAreOAJXVHCIl0lrYMtlDhpPfuu0faW%2FYUunaxCfpEp%2Bertz%2FpyDaBd4DE9cYuhYssB5bHX2Cqtcq52e2pZUIh%2F17ZgxHHxF%2FJrmCfqB%2BO1eda55rH5IV53qXM%2FsBC65H8wuAcjEAU7xqgHLWxGLYfwVVxA%2BoKEnatizbDBQgg3aDzLYua4Pv5kYgPVk4ftX3ndgS%2FYmuiL58D6BoTqjJE5fYIx6Z14FeZ0D1X7NbkpzRJLRlnZWtKv8dya8Zl1dTcM54MNoT7WWMO3c6sIGOqUBxAo4dwVTBpsH2lo%2Bp2QdgsOo6lt4RvRzxmB7raNMU2AVI6ke5h%2BNAEqhJFGOR0DIWjMo23UGpQyDMa2%2FXL4MXU4YfbOSsrjt%2Fn37IIcHGox6VCflaOaPfbhF%2BZ%2BVj%2B1Gm%2FFoWQ3LZb4oJR4i9OrFpfXIxDpV6fI9JfXP6ke5ReTrYBc2TELrsRfNNx2WhgbQO2CTuiNGWSxmpH9kwxeyfMzfDx%2BO&X-Amz-Signature=860726ee9d291a09cfa64c77d59b18dd7273a6ce656ee6bfd0474999fb177b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
