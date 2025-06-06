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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE5ZXEHF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEG4xWAz75hWH7%2FhLzIhkKM%2BOUJihozogYpS%2F1Pz5xwsAiAGWz%2FvBM36rA7wFdSCqfSsEZtkIL4uYdQAxNVHomhxNir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMbOd7o1eqdc6onWIzKtwD8TxssC7J%2BF1YMMkl0HsgKbqDWuV%2Bl33H3yvkVnvu2DR3sMbduCX%2F3Uohi7ERTu%2BKAEStScJ1j7pl8%2Fee%2BPES7XwJH1UPoxDAKbgeK6QFuCuT83zzPA5F%2FsqCzWSb6EHDJFU6Q4R0pWjC5DlJ14ncfqC94Tqp12mZEuN5CyHm1jtx1mSb8ENeUa52yrc82yR7Z0QLW%2BE9x8NXMrQvOcZ2x8pfjcavRZYTs%2FwX5LDth1XL%2BMH2xGbq%2BY3aXTSDW6Vkef2HRujleJe1qQPmjKUrmThMkOcuXxL6aoulP1A3T0G19hRvGNSQjcKRe7%2B%2F5SQH4oFrECneL1PQFQ%2BrTsugIejT62ah8zoo0CpvnC7Qcy%2B%2F3hYmHIPKdCl6YRGLVpLtWC7pmgQFRpKIHjNyrRgVrlU6LO6RhD8tQLO6N1smBKEqCkOYlrl%2F%2F5N146kiZt601MWySrLNC3OrWQVtnGKKWRzTZ2EvRNmJfVtkGeqagdBUG7q21fnygy%2B5nxbCUnEtWzU9Vkq4FvoXZPJTWAnKbUsWN%2BrXJ0BvCkv0dEFolvrecr2Tukyv76lC2hiQanCohLlxJhrB9r6aa2ToUgxe5NMfKdklgLwxBOxA6kxb%2FrEDVhLHjUx2ufXPs4UwrJGNwgY6pgELXMj0Ju1ml1%2FLFKtV1LewfePHkTOBnMWV7AWRzbDcVjUIbD85Wobjx89nZ9lns%2FBjTSNCd6rAavkPiFdl1BNO4Xeb%2FzXG7WfYOKE%2B1C7CQ87t4zxwmrlpR%2FPr5rBmsdx08hrpoXCffBgH5g6xjycjdTmWpoWB6dytIV0JvxRroYvvZbD1GL%2FOuXBi7lcoDlnbYh01wmeUBEhiMTlhFOi6%2B8zTJ91Y&X-Amz-Signature=d66938b589f7d3faadf764100767ec40a0778623ac6cd8e893f6fec97a199771&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE5ZXEHF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEG4xWAz75hWH7%2FhLzIhkKM%2BOUJihozogYpS%2F1Pz5xwsAiAGWz%2FvBM36rA7wFdSCqfSsEZtkIL4uYdQAxNVHomhxNir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMbOd7o1eqdc6onWIzKtwD8TxssC7J%2BF1YMMkl0HsgKbqDWuV%2Bl33H3yvkVnvu2DR3sMbduCX%2F3Uohi7ERTu%2BKAEStScJ1j7pl8%2Fee%2BPES7XwJH1UPoxDAKbgeK6QFuCuT83zzPA5F%2FsqCzWSb6EHDJFU6Q4R0pWjC5DlJ14ncfqC94Tqp12mZEuN5CyHm1jtx1mSb8ENeUa52yrc82yR7Z0QLW%2BE9x8NXMrQvOcZ2x8pfjcavRZYTs%2FwX5LDth1XL%2BMH2xGbq%2BY3aXTSDW6Vkef2HRujleJe1qQPmjKUrmThMkOcuXxL6aoulP1A3T0G19hRvGNSQjcKRe7%2B%2F5SQH4oFrECneL1PQFQ%2BrTsugIejT62ah8zoo0CpvnC7Qcy%2B%2F3hYmHIPKdCl6YRGLVpLtWC7pmgQFRpKIHjNyrRgVrlU6LO6RhD8tQLO6N1smBKEqCkOYlrl%2F%2F5N146kiZt601MWySrLNC3OrWQVtnGKKWRzTZ2EvRNmJfVtkGeqagdBUG7q21fnygy%2B5nxbCUnEtWzU9Vkq4FvoXZPJTWAnKbUsWN%2BrXJ0BvCkv0dEFolvrecr2Tukyv76lC2hiQanCohLlxJhrB9r6aa2ToUgxe5NMfKdklgLwxBOxA6kxb%2FrEDVhLHjUx2ufXPs4UwrJGNwgY6pgELXMj0Ju1ml1%2FLFKtV1LewfePHkTOBnMWV7AWRzbDcVjUIbD85Wobjx89nZ9lns%2FBjTSNCd6rAavkPiFdl1BNO4Xeb%2FzXG7WfYOKE%2B1C7CQ87t4zxwmrlpR%2FPr5rBmsdx08hrpoXCffBgH5g6xjycjdTmWpoWB6dytIV0JvxRroYvvZbD1GL%2FOuXBi7lcoDlnbYh01wmeUBEhiMTlhFOi6%2B8zTJ91Y&X-Amz-Signature=f8146686e7ee0cc9970be516e9fa3efb799668590acb8f585261283d3d9397f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
