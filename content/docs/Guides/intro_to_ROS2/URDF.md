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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGPX32U4%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIE0%2BqUNnXobgxC%2F9edv1sSoVrShNMgS24zJVSuURalDJAiEAlK9ir3eBs%2BcPRHKBUr%2Bd7pwuEcgV4zNJD820HADrmrQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDO7MuIvaSJonUyaO%2FyrcAwaYdjuA8dsS61nDPqjpK5wYDnOVunjfNxmbY%2Bme%2BEgPulJcynb6okybukE1djWCryLQFawZ%2FI0jfEHvYxAuiNrl1VLmYUF%2FgU2NOsnBFk%2Fw%2F6RCdl6urE3lLqDBIQuLseT60HlcekQwQAWNI2AXVIXzg%2BIbpN%2F3u1fDRirAg4B2vaQiwsQCnOPn0FiXvl9QqCCs09ke%2B2bam2P010vh%2FSib8hp%2F4FMFSSgSnztzosLOBQhcS4fEVcW%2FcbcBQyAChg4A8McYB64%2FpaIhDfFMUgcpMal43lZxBzGVm61Bv%2BJVaX15bnP4MCeRilq%2BvnY%2F%2BlPLGjriTNvypz6KvcYaiZGlN6KiEO2m%2FnxQLFBzlR%2FQBHy02y6il%2BQhC%2BCWPkkHbP0Z%2BnuZ1aED6fRGuuIjP4nFTZ7gcX5oMQjcL%2BSdHFOAYdtsZ2zcYyfqs3G98ULneTNcYExgeD2kYSmh%2BM9qmDqLSKjrC%2BrXYJM0l5zUJnn%2B%2FzaRc2GrxK1DtKPbS2A%2B2gymq9zXaIuA81hIGASkgrAYEBxpW5gXiknU9bKInRzjzMLVpmRLQpIJLQ7hoI7yzRnAN7O193iyDv%2ByTfSVst4bbSES90%2FnNtjsz6DeU9ILB7xPnO%2FeWw%2B%2FQtRKMPGNp8MGOqUBaaUR7ObSS9sbd1H3xuSVXffjhnV4bzKpwniUPZmVRtGzEpmgTJYlzSbrxxrOG7Zo119DACo8z18BM6ufSDijeYzaciEXSa8cZTWJcvjRykByeYgJDoNPd5%2BaEMxIkyGPABA7Up4Q%2BHuaMUF1eLWTEYJlXcrNDouDCOc2JIYODpAgnV4d22mPYQBOQFK1b6Gcu8PFT0%2Bpia%2FoxDP7GMIrEzDExTzI&X-Amz-Signature=86892120a2ef3aaae6239adba2be84a2cadcce0f019f091e60eeb8671efdd15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGPX32U4%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIE0%2BqUNnXobgxC%2F9edv1sSoVrShNMgS24zJVSuURalDJAiEAlK9ir3eBs%2BcPRHKBUr%2Bd7pwuEcgV4zNJD820HADrmrQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDO7MuIvaSJonUyaO%2FyrcAwaYdjuA8dsS61nDPqjpK5wYDnOVunjfNxmbY%2Bme%2BEgPulJcynb6okybukE1djWCryLQFawZ%2FI0jfEHvYxAuiNrl1VLmYUF%2FgU2NOsnBFk%2Fw%2F6RCdl6urE3lLqDBIQuLseT60HlcekQwQAWNI2AXVIXzg%2BIbpN%2F3u1fDRirAg4B2vaQiwsQCnOPn0FiXvl9QqCCs09ke%2B2bam2P010vh%2FSib8hp%2F4FMFSSgSnztzosLOBQhcS4fEVcW%2FcbcBQyAChg4A8McYB64%2FpaIhDfFMUgcpMal43lZxBzGVm61Bv%2BJVaX15bnP4MCeRilq%2BvnY%2F%2BlPLGjriTNvypz6KvcYaiZGlN6KiEO2m%2FnxQLFBzlR%2FQBHy02y6il%2BQhC%2BCWPkkHbP0Z%2BnuZ1aED6fRGuuIjP4nFTZ7gcX5oMQjcL%2BSdHFOAYdtsZ2zcYyfqs3G98ULneTNcYExgeD2kYSmh%2BM9qmDqLSKjrC%2BrXYJM0l5zUJnn%2B%2FzaRc2GrxK1DtKPbS2A%2B2gymq9zXaIuA81hIGASkgrAYEBxpW5gXiknU9bKInRzjzMLVpmRLQpIJLQ7hoI7yzRnAN7O193iyDv%2ByTfSVst4bbSES90%2FnNtjsz6DeU9ILB7xPnO%2FeWw%2B%2FQtRKMPGNp8MGOqUBaaUR7ObSS9sbd1H3xuSVXffjhnV4bzKpwniUPZmVRtGzEpmgTJYlzSbrxxrOG7Zo119DACo8z18BM6ufSDijeYzaciEXSa8cZTWJcvjRykByeYgJDoNPd5%2BaEMxIkyGPABA7Up4Q%2BHuaMUF1eLWTEYJlXcrNDouDCOc2JIYODpAgnV4d22mPYQBOQFK1b6Gcu8PFT0%2Bpia%2FoxDP7GMIrEzDExTzI&X-Amz-Signature=6a6ec731385e06e4cb2b1f1c20353dfbf1049e0ce75562ae86b21ed6ed85c75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
