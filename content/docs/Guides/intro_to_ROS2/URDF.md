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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6G7J2C%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICqLILhW%2BlmCHKJtJBKH0boqnMRDpPgBiBX4brDddmjfAiEAtWmJQtieg4Qri%2FR8Sxlvh7whUL70UG2AVvO08SexF2sq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDJsMPeq%2BEU6CU1y%2BySrcA307Duyqqf55DwVedy2%2FMZdiMTWV2z0NaKfYUrVsXLsOz2Hl75KdpXQmf%2BjApi4GXpN7I5nAV3s0tFZI35lH6dfOzRAtRhdzuE17KPzWJg91kbI2ywwMuAXijBCAt3CQ2Jn2do9DltMmObqRrsocb03VuuRHAVgNR3qs041I15eNJD11S5pE32WWNoWneOt3EvqSLrCxmViDkN29LZP58AiNAj5chh%2F4a2DgPSLzs17mokGWlxh2o6OpQu7hmi%2BguC8Hu0Q0FSB4wcTkiw90ibMvQ1xV3kr4P73XiR1lhWF%2BRs%2FQANOUQUNp65%2FK7mxreJr6PnSERpXSsF9ZBmvZCuihSFbbJwDgxV8zJVYCEQ%2B8J7KU1%2B34x%2F2uTlFA%2BhtdPjfnegU2BaHghbREwuDR8UAAPpY1wRlCGKMxEF4IBrvZbvdnyQRjxRkvGkFhfbhq%2B3Dl2%2BMIBw3wbu3ZxyIbyNMhUx32YzPxwqUfgW9kl7nRZhTIo8%2F2zeGPT1C6Sgq6Z1DM0xX%2ByR0%2BoDdgHVllRi5hNh1fLOJERZAKemCnFo%2BTS25B5Q%2B7P%2B9jQrCl3TUfLMGiWot1CPqM%2BmrVmX5yzj8bGZFzZKEOetyvDbtWnvknWzFTQiiZv4zjj54TMPe5msMGOqUB7Rigm2UWwkKgNJ4mpxOVTkdjU%2BuxmriCeZvhg1AzRGFpUikHOaQg3gIJW8Vo7iRZiLcg9lnOk8m5Am1E1k%2FdqhDOUf2dcrp%2B%2BpWYbSF0T%2F3IX3ncRxlJEc4lo5i%2FpbAAvwJ%2FX7gbUE50Nb%2FgcBVPx7ESHN8UknVZSkli5XT7rQNihpKEPm5m%2BJ93Lx86%2F67x6DP7X4%2BzjSKtkFCSQzjKa7l2x6cA&X-Amz-Signature=7327cc2681670ea1e2b8a94f42a3a5ae07a963e6ecbd04cd5d505f1bca97f5ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6G7J2C%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICqLILhW%2BlmCHKJtJBKH0boqnMRDpPgBiBX4brDddmjfAiEAtWmJQtieg4Qri%2FR8Sxlvh7whUL70UG2AVvO08SexF2sq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDJsMPeq%2BEU6CU1y%2BySrcA307Duyqqf55DwVedy2%2FMZdiMTWV2z0NaKfYUrVsXLsOz2Hl75KdpXQmf%2BjApi4GXpN7I5nAV3s0tFZI35lH6dfOzRAtRhdzuE17KPzWJg91kbI2ywwMuAXijBCAt3CQ2Jn2do9DltMmObqRrsocb03VuuRHAVgNR3qs041I15eNJD11S5pE32WWNoWneOt3EvqSLrCxmViDkN29LZP58AiNAj5chh%2F4a2DgPSLzs17mokGWlxh2o6OpQu7hmi%2BguC8Hu0Q0FSB4wcTkiw90ibMvQ1xV3kr4P73XiR1lhWF%2BRs%2FQANOUQUNp65%2FK7mxreJr6PnSERpXSsF9ZBmvZCuihSFbbJwDgxV8zJVYCEQ%2B8J7KU1%2B34x%2F2uTlFA%2BhtdPjfnegU2BaHghbREwuDR8UAAPpY1wRlCGKMxEF4IBrvZbvdnyQRjxRkvGkFhfbhq%2B3Dl2%2BMIBw3wbu3ZxyIbyNMhUx32YzPxwqUfgW9kl7nRZhTIo8%2F2zeGPT1C6Sgq6Z1DM0xX%2ByR0%2BoDdgHVllRi5hNh1fLOJERZAKemCnFo%2BTS25B5Q%2B7P%2B9jQrCl3TUfLMGiWot1CPqM%2BmrVmX5yzj8bGZFzZKEOetyvDbtWnvknWzFTQiiZv4zjj54TMPe5msMGOqUB7Rigm2UWwkKgNJ4mpxOVTkdjU%2BuxmriCeZvhg1AzRGFpUikHOaQg3gIJW8Vo7iRZiLcg9lnOk8m5Am1E1k%2FdqhDOUf2dcrp%2B%2BpWYbSF0T%2F3IX3ncRxlJEc4lo5i%2FpbAAvwJ%2FX7gbUE50Nb%2FgcBVPx7ESHN8UknVZSkli5XT7rQNihpKEPm5m%2BJ93Lx86%2F67x6DP7X4%2BzjSKtkFCSQzjKa7l2x6cA&X-Amz-Signature=4950865bf969d311241223beab5c4cc626bd2224e22dc774b8d77f0156f11463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
