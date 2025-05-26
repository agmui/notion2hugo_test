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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPVDKVQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHx98GAP1m4h01BvRpt6wDjsRAMq6qZO4YixDzJQfb7MCIFCTilMIp3WBQb43Tgs1qT7GAJHq7xONZtqUKFg7JHg%2FKv8DCEkQABoMNjM3NDIzMTgzODA1IgxN9C4xBgjzebWPf%2BYq3AP6%2BI%2FpJRBlBcgTylVt25H%2FJw1hQx8GuHAbwYtl9NqbukqN2dW5mQJMN57y2B9EQWcJOpsU8AvzFVkkMDfxKWd1rdG%2FlLti%2BuBZ%2BIVgScDbypGiOBX7HFMz1II3DnHKoyxrNtN1nSiKRJEI88wRgBUWkD6ixJLu%2Fnh780yP4snEwyG0A9ul%2FV8W0Bvk%2FtC9qq%2Fr1KKJW3iZlfKXAp%2F3xTl7wDYC4swlU0dJi%2BT72mEBYG7kOPONYXZDeBctDm6ikFXwctTd%2BnMxfl35%2BfngxzFiJL%2F8ny%2B0PONylhVH52N5K9fHH%2BkSlyoHgkJ9mZJ5NeVcmaEMEm8x%2F8L26FMVjR0oizvSEcuzu3MhzMTrpR81FmhJ60piWkkCpkHnzvb8aOkboycjqgYs4ewi%2BzFF9qboATBSeedjkF30FQNi8UiitKMPbraosxQvul5uaV5laFbivrJYkYpkf8MhK9jpZW9LbgVDN7AA3zT9mBbJ%2FGJ%2FG31%2FhwiCdRmR1jxDHZat0R6jKnWb90%2Fy0cVABcstgNOz0zHuAmNJoJ7FltBUgq5Z7c9E2IYStTIQWus0zHMQl98jMRo1xezpCVm1KNz1d52YqCJkm2T0iQON1odWU%2FBug6892KRRwsru1OFWvzDCk9LBBjqnAfkWG6eKRpJkphP3aN18h8fu%2BaQXEJ7j5vKXstIxxeDqaFF%2Bm%2B5u2dWq%2BY3CQFmnaj%2BzVh258YHFmpJPtggD0buLZaWUZAeeDg1Gc%2FLZUz%2Br3Y%2Fa27yK3ZE5N1uwrH3J1lzuFHCNK%2BRcfNDH2CQW43KMU%2FtCHIDUpa0incfvbzKL2oUWyuIFlaBuN1KdObaO%2FzWv%2BhrtSDSQ0XMc3c8Ufdoz3jsrNJ%2Fb&X-Amz-Signature=9b4bf31731069feb243644e6bb42dce10bee43401bc7d8b24fa7108ee0833632&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPVDKVQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHx98GAP1m4h01BvRpt6wDjsRAMq6qZO4YixDzJQfb7MCIFCTilMIp3WBQb43Tgs1qT7GAJHq7xONZtqUKFg7JHg%2FKv8DCEkQABoMNjM3NDIzMTgzODA1IgxN9C4xBgjzebWPf%2BYq3AP6%2BI%2FpJRBlBcgTylVt25H%2FJw1hQx8GuHAbwYtl9NqbukqN2dW5mQJMN57y2B9EQWcJOpsU8AvzFVkkMDfxKWd1rdG%2FlLti%2BuBZ%2BIVgScDbypGiOBX7HFMz1II3DnHKoyxrNtN1nSiKRJEI88wRgBUWkD6ixJLu%2Fnh780yP4snEwyG0A9ul%2FV8W0Bvk%2FtC9qq%2Fr1KKJW3iZlfKXAp%2F3xTl7wDYC4swlU0dJi%2BT72mEBYG7kOPONYXZDeBctDm6ikFXwctTd%2BnMxfl35%2BfngxzFiJL%2F8ny%2B0PONylhVH52N5K9fHH%2BkSlyoHgkJ9mZJ5NeVcmaEMEm8x%2F8L26FMVjR0oizvSEcuzu3MhzMTrpR81FmhJ60piWkkCpkHnzvb8aOkboycjqgYs4ewi%2BzFF9qboATBSeedjkF30FQNi8UiitKMPbraosxQvul5uaV5laFbivrJYkYpkf8MhK9jpZW9LbgVDN7AA3zT9mBbJ%2FGJ%2FG31%2FhwiCdRmR1jxDHZat0R6jKnWb90%2Fy0cVABcstgNOz0zHuAmNJoJ7FltBUgq5Z7c9E2IYStTIQWus0zHMQl98jMRo1xezpCVm1KNz1d52YqCJkm2T0iQON1odWU%2FBug6892KRRwsru1OFWvzDCk9LBBjqnAfkWG6eKRpJkphP3aN18h8fu%2BaQXEJ7j5vKXstIxxeDqaFF%2Bm%2B5u2dWq%2BY3CQFmnaj%2BzVh258YHFmpJPtggD0buLZaWUZAeeDg1Gc%2FLZUz%2Br3Y%2Fa27yK3ZE5N1uwrH3J1lzuFHCNK%2BRcfNDH2CQW43KMU%2FtCHIDUpa0incfvbzKL2oUWyuIFlaBuN1KdObaO%2FzWv%2BhrtSDSQ0XMc3c8Ufdoz3jsrNJ%2Fb&X-Amz-Signature=cfcbf3504e65dcaa3f32aa60614353e362564e9a5b2195ef5728d0ff7e83f0bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
