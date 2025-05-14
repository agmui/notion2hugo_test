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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JYGTKZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCmwkRLT2B8LTZ3s2OQHS8MWsuEZu%2BJ2ssLOplOdfiTugIge8maGscGoNPVbssEWDpU%2BWH6qTOb5Ted%2FW%2BlbhuSG%2BUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuS7iJb6ojjVIHPrSrcAxjZySfzLit7R%2BqvYqkwm0%2Bncm6HO1u9UwhTjb3WdvHKCvuf%2B3Tz3ch0U8p01C0htlcVOiZTwxgcqWC8gs1ygKDOLhse0ynwkqTTyDCLumaNY%2BqO9dIvSHhEwVcHylx8yChD5SA%2Bo4V%2B0ko%2Fjx37TBhh%2Fz3QC6hXT%2BYVNhxAJgr%2BcKPsafg1e8AkkU2XkNKFl1x8iC8D9ng%2FNLnp9rX9AdOLkkDw7aRWoS1%2B2dgZdLlUbzZG03d7vIuj59S8gkAcCJgt%2BcPF7bQpR57fnhT4LIBXZlCJcOD0EWmy%2BFdrkm5%2BfVjcUzitC0xT9IXxbVcMVCinx0VuACzufQ2L%2Fef7JYVy1dtLgDMGFQFWOICOEU2F0JgeSfr7mQJuGT6qSf5tpNV5%2BT2Gtkm0MjIVmLxVcPZs%2F8F%2FYDSjcD8S%2FFcFrW4A4JvXMbfAPKyeVeE9QH325IhwzIv9WQYapg%2BwUfJcBzJBEGzGrCSnR8Z2hw6%2FTdLkVqQPaZFDE%2BLQ2KrIKH9%2FmvBFPfPvF2E6SXqCpIleeTQt4AxUD4XScdepanoH%2FAgRCE21nqdluHVU5ycfv3Yj34D4YYb5kS0stI0QYuCnXm8AGPsTKt3YYVUczIxZ64j5pvnIcHBDYepRCNTrMPmgkMEGOqUBqnaIjy9QMM8sUSBH4UIOAy1PZcfFqH7HtfbYJE5hHDxUtUPdsM54RVP85kFqxFOni4ra%2B4R%2B8EGrut88lsjI4B65cp0vxBSKnuKmeHV8a6J0oNE3KyEMF3%2BoqnZc6yV3RKIr3J1zboRH4MeNd5V22WjvdFw%2Bo%2Babfk328QVICMYsdI7SiCT4buT7qMdmIu1i7BpoxQLQTYcSzDuL93Cfo10iNmyM&X-Amz-Signature=f8ef0c8a0de431e7b9283442428357c1fdfcdc81c501487deacfae81f2e70791&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JYGTKZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCmwkRLT2B8LTZ3s2OQHS8MWsuEZu%2BJ2ssLOplOdfiTugIge8maGscGoNPVbssEWDpU%2BWH6qTOb5Ted%2FW%2BlbhuSG%2BUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuS7iJb6ojjVIHPrSrcAxjZySfzLit7R%2BqvYqkwm0%2Bncm6HO1u9UwhTjb3WdvHKCvuf%2B3Tz3ch0U8p01C0htlcVOiZTwxgcqWC8gs1ygKDOLhse0ynwkqTTyDCLumaNY%2BqO9dIvSHhEwVcHylx8yChD5SA%2Bo4V%2B0ko%2Fjx37TBhh%2Fz3QC6hXT%2BYVNhxAJgr%2BcKPsafg1e8AkkU2XkNKFl1x8iC8D9ng%2FNLnp9rX9AdOLkkDw7aRWoS1%2B2dgZdLlUbzZG03d7vIuj59S8gkAcCJgt%2BcPF7bQpR57fnhT4LIBXZlCJcOD0EWmy%2BFdrkm5%2BfVjcUzitC0xT9IXxbVcMVCinx0VuACzufQ2L%2Fef7JYVy1dtLgDMGFQFWOICOEU2F0JgeSfr7mQJuGT6qSf5tpNV5%2BT2Gtkm0MjIVmLxVcPZs%2F8F%2FYDSjcD8S%2FFcFrW4A4JvXMbfAPKyeVeE9QH325IhwzIv9WQYapg%2BwUfJcBzJBEGzGrCSnR8Z2hw6%2FTdLkVqQPaZFDE%2BLQ2KrIKH9%2FmvBFPfPvF2E6SXqCpIleeTQt4AxUD4XScdepanoH%2FAgRCE21nqdluHVU5ycfv3Yj34D4YYb5kS0stI0QYuCnXm8AGPsTKt3YYVUczIxZ64j5pvnIcHBDYepRCNTrMPmgkMEGOqUBqnaIjy9QMM8sUSBH4UIOAy1PZcfFqH7HtfbYJE5hHDxUtUPdsM54RVP85kFqxFOni4ra%2B4R%2B8EGrut88lsjI4B65cp0vxBSKnuKmeHV8a6J0oNE3KyEMF3%2BoqnZc6yV3RKIr3J1zboRH4MeNd5V22WjvdFw%2Bo%2Babfk328QVICMYsdI7SiCT4buT7qMdmIu1i7BpoxQLQTYcSzDuL93Cfo10iNmyM&X-Amz-Signature=d0f8a82bef5b9ceafbf4580a24b033b9ea3a5682c6582b47c3f1bf7287f3ce72&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
