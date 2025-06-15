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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FSHEM2L%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFL8ug4aihEPuFox0MLMt08Z%2Bi5roaxyKieKAAWk0GenAiEAtouc%2FnTh3d9xp4fqAXSSylZIvwBOR4eSLt2rJEoLaFoq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPeHBv8gqALT6NFXKCrcA9rm1Y11UUkBTH5kFPufWF7EQC6qY1YIYtyg%2BcxlMXtxcTIcX8U0FVD%2BM2sTOMAIvKDNWNSWYuwpBrko01OAAY8x15YxFInclxbYpy5GsGyVw%2BKq4%2BMtLFJr1tUlE%2F2bUirjZHugZQUFtg%2BgwMF%2BMoUdw8%2BLRF7PgT%2FN8BW%2Bohug3wVuxRV2OdNe1wbKpdCaxmMH0du6kmge%2BzCrCE0alnPdIFnKjDZvF7pEhvosYoHadYov1aeNs0VkmHKTozonWrQOFtLgnQVEeoh1BdqwIY40ZUXX2LqYw3WG60idZEzQMl%2BGu7wopUqXiNQFVF4GdXhsYefadIYHS2bMZ6%2BdX0ZFLJY51Jr%2B3Vs93ZIhIr3P6l%2Fowcu4hbAva0uvhvMkhq0iV9g9T7XY06yp4BbrjfOqmBnw0LUrS7HLvqwRqRbewAqDdTxqZNckLBuPFU9%2FmLDaia11QjFSyblJzYOsGBoCXYDn9bbDEqr314Ct0v%2BKStCqXGAdQFa363x0jisfs1e6ytcBNx%2F1TYXZu4ZgjLQmz1GWLIDECbqk6QUJgA%2FR008Uayr8c2G1xrefbMtQLIk2fvWejzYpE06tKMAOA3noHAwbagNZBq4miHGY29717Aj%2FhYg86Kzp%2FfgXMNXOvMIGOqUB7aNZd0tD83YMnxxJoPOEBlEqSO0q%2FSd2vpPE1e6ZZFs%2BknAC6ynjppOwJY1E6XxHFqRl1v7kgGGPO0Ieo%2B4vGC%2FXpHB4EKsKLvkkiW7VDWZ7W5o9gGIFK09mhEOZV08PivvnuEjGvtbghoSJFm8fy5mSYWMpkzSyei0WHczHRHNS2VeyKh%2FeF3kZ%2BpLtVR584F9Ld%2F8j8StxHWx8YQrX2HJJ3WPa&X-Amz-Signature=edd57499544dc1f2a5b46b6f4be2533b552c28ffff2702669a439e9913e258ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FSHEM2L%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFL8ug4aihEPuFox0MLMt08Z%2Bi5roaxyKieKAAWk0GenAiEAtouc%2FnTh3d9xp4fqAXSSylZIvwBOR4eSLt2rJEoLaFoq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPeHBv8gqALT6NFXKCrcA9rm1Y11UUkBTH5kFPufWF7EQC6qY1YIYtyg%2BcxlMXtxcTIcX8U0FVD%2BM2sTOMAIvKDNWNSWYuwpBrko01OAAY8x15YxFInclxbYpy5GsGyVw%2BKq4%2BMtLFJr1tUlE%2F2bUirjZHugZQUFtg%2BgwMF%2BMoUdw8%2BLRF7PgT%2FN8BW%2Bohug3wVuxRV2OdNe1wbKpdCaxmMH0du6kmge%2BzCrCE0alnPdIFnKjDZvF7pEhvosYoHadYov1aeNs0VkmHKTozonWrQOFtLgnQVEeoh1BdqwIY40ZUXX2LqYw3WG60idZEzQMl%2BGu7wopUqXiNQFVF4GdXhsYefadIYHS2bMZ6%2BdX0ZFLJY51Jr%2B3Vs93ZIhIr3P6l%2Fowcu4hbAva0uvhvMkhq0iV9g9T7XY06yp4BbrjfOqmBnw0LUrS7HLvqwRqRbewAqDdTxqZNckLBuPFU9%2FmLDaia11QjFSyblJzYOsGBoCXYDn9bbDEqr314Ct0v%2BKStCqXGAdQFa363x0jisfs1e6ytcBNx%2F1TYXZu4ZgjLQmz1GWLIDECbqk6QUJgA%2FR008Uayr8c2G1xrefbMtQLIk2fvWejzYpE06tKMAOA3noHAwbagNZBq4miHGY29717Aj%2FhYg86Kzp%2FfgXMNXOvMIGOqUB7aNZd0tD83YMnxxJoPOEBlEqSO0q%2FSd2vpPE1e6ZZFs%2BknAC6ynjppOwJY1E6XxHFqRl1v7kgGGPO0Ieo%2B4vGC%2FXpHB4EKsKLvkkiW7VDWZ7W5o9gGIFK09mhEOZV08PivvnuEjGvtbghoSJFm8fy5mSYWMpkzSyei0WHczHRHNS2VeyKh%2FeF3kZ%2BpLtVR584F9Ld%2F8j8StxHWx8YQrX2HJJ3WPa&X-Amz-Signature=15010c1366c1f8acce84d20bd372ee81910925dbbaaefd727af52d7e0046b543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
