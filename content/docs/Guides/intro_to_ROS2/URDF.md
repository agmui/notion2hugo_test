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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZPEOTZ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEiab0R7l%2Buho3YoiN2pa%2FTfoP%2BCf74tns9R47yGycxwIhAMmzC9cfUKvOE9U%2BO03XMvtj8VUDSHZ69THIL%2FBkwvjTKv8DCC0QABoMNjM3NDIzMTgzODA1IgzgSmrE4vYFbfM6U1Uq3AOLkYA0EeR6ChhviZqH44b%2Fnb%2B%2BvLtKNOddC4hEXpVgcMQGXqH9YE0JbcvOCYK4JdZvCENs2hDgegvRCtH0SGU3XSz1cFKp%2FFDsyeZ%2BWPiWHYFsZ6yQGx%2BHyTMRbrLqpv9pRKNofHRHshI80eYIfBME2MmaBQJPvq09XhP%2BPWn5OVx9648YbSb9MiC6CjekLMAA6oFVxdCK03RuUFH0HKG4pABjofQFQemFGNzQZvpm5KMC%2BHM9vZT878j5qPXPc2%2Fs2HnpYZNyWqYCZzMFqzArGJywDrf7gob%2FphdIHXa2pvjA86oW0rrhruclyRCB4NTOPASx4Kyd39xqXCy1ZELX4xH123LpC8CqgaimBMOkdxJnN3JrF2T0k80g3Zc0VxIX1QIrqBEei1ta8255Fv%2BDJHf7JKT3FmY1I1MpRd3wMh3GCfZYnp6Dzrxepx9pkpDZsTai5kuXHjAV10J%2BgJYEboHdeiYk95jZ5ez9X51tDsPTiB6XZow2dFdrJesI1L0Mm8wqpK8lkzk%2Bmjv5MSZWAc6rqLyGz79ZK6Z5FVlQKmc7%2FeZx%2BUEBnPPPcmdAZALDu2Vbiz%2BBq%2FL44B%2BbQMfCLL67dQShoqBDUJWdYUM1AFmlSDcROe4vc1We%2BDDv2o%2B%2FBjqkAbkxWZ7G2ENn5tdDsqu6kW%2BCNzFpRh%2BK5Ob%2BfYaQD9ZwvQiUHpgfPPnNDf5xCcWu7ORUdDy%2BcQ3JDI06fYYub5xHAhyJo%2Blb7sl8JB84nM8SxxOMvxIqDbN7T0u%2By%2B1GKV00XB26OAQkn7%2B%2BGoy3IoSwRfGnzMBUj8143Gdz35iCXjJ9H3kDZdM1lHrZd6OesW2p3e63y5saKoxvY826GizmLlmf&X-Amz-Signature=872cca27e808adfdb9141a815bc84edb743a6ffadc3705f670a7f068cb82b306&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZPEOTZ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEiab0R7l%2Buho3YoiN2pa%2FTfoP%2BCf74tns9R47yGycxwIhAMmzC9cfUKvOE9U%2BO03XMvtj8VUDSHZ69THIL%2FBkwvjTKv8DCC0QABoMNjM3NDIzMTgzODA1IgzgSmrE4vYFbfM6U1Uq3AOLkYA0EeR6ChhviZqH44b%2Fnb%2B%2BvLtKNOddC4hEXpVgcMQGXqH9YE0JbcvOCYK4JdZvCENs2hDgegvRCtH0SGU3XSz1cFKp%2FFDsyeZ%2BWPiWHYFsZ6yQGx%2BHyTMRbrLqpv9pRKNofHRHshI80eYIfBME2MmaBQJPvq09XhP%2BPWn5OVx9648YbSb9MiC6CjekLMAA6oFVxdCK03RuUFH0HKG4pABjofQFQemFGNzQZvpm5KMC%2BHM9vZT878j5qPXPc2%2Fs2HnpYZNyWqYCZzMFqzArGJywDrf7gob%2FphdIHXa2pvjA86oW0rrhruclyRCB4NTOPASx4Kyd39xqXCy1ZELX4xH123LpC8CqgaimBMOkdxJnN3JrF2T0k80g3Zc0VxIX1QIrqBEei1ta8255Fv%2BDJHf7JKT3FmY1I1MpRd3wMh3GCfZYnp6Dzrxepx9pkpDZsTai5kuXHjAV10J%2BgJYEboHdeiYk95jZ5ez9X51tDsPTiB6XZow2dFdrJesI1L0Mm8wqpK8lkzk%2Bmjv5MSZWAc6rqLyGz79ZK6Z5FVlQKmc7%2FeZx%2BUEBnPPPcmdAZALDu2Vbiz%2BBq%2FL44B%2BbQMfCLL67dQShoqBDUJWdYUM1AFmlSDcROe4vc1We%2BDDv2o%2B%2FBjqkAbkxWZ7G2ENn5tdDsqu6kW%2BCNzFpRh%2BK5Ob%2BfYaQD9ZwvQiUHpgfPPnNDf5xCcWu7ORUdDy%2BcQ3JDI06fYYub5xHAhyJo%2Blb7sl8JB84nM8SxxOMvxIqDbN7T0u%2By%2B1GKV00XB26OAQkn7%2B%2BGoy3IoSwRfGnzMBUj8143Gdz35iCXjJ9H3kDZdM1lHrZd6OesW2p3e63y5saKoxvY826GizmLlmf&X-Amz-Signature=306c839d0efc8b48176b5086d6884b91cd10e0d5b13553f3e3646beff0086332&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
