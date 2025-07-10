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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RGNOWXI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEouaDJkw%2FgJ4fnszNOQFEGz8rCY1Xb31jdA1qsylw%2FWAiEAwOCWGytI8Tx8mTnwCvwclpBVUkbwp1455r0C5lo79IoqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRbiw9YUjTroYM0TSrcA%2BMMn64Jt1BAFnd%2Fr9WfqLlsBiWv6%2BNu%2BKutzOT6m1Gv9cU7%2FMu5Ukgdr1kYmHxhmrrF1Qtl1HMEESp2G%2B0UUrWjuLyY3DFQNK8ripLIm7EPpVQSWOj6JdVPJdEoaMyteM%2FUfNUwJRpWT9HL4ebVBcXeHWujI3eyoIxK486W4j1cDozPNZ3kL47L6nl7W1BExjyRJ5VkgP7a4EwT1ZKWZA86zTIJY8Fr%2F6XA5ebFoW1P5o1hRWmcBNDfXT6CiLNmq2UCHsQTqS3XjkYb%2FlYtRQPRFfp7cO9hlK3QMfJvtkbzhCnnO9r6fM2NbVQrTExOsFPK%2FMFGp9b127ll6dAH7WNuhhqK3yqlobXYovkSSgs%2FMAQ3%2F7WDofvqqRAYpDQrDjP57rxfvcToldRJYJFy9AYumcAsoTvNfMxS0bnFSDhUq0g47M%2B6HRy0J4KN5E%2BFuygsMR0tXSb7pgAi%2B%2FqYd1CxXtPLkRs3utcx2xfE%2Bf6O5YyWJK9h922sPf7unLEDfKhqdHvGXqIgIRrndLC1YsdtZTNoNIGnl6MRgoKKsyB8M4MgYryoKHSHkh3QN%2FvKBGWGvUQFSWpmu4qlPzxH8YOL455Gq%2F8HTCCwos3sag00E9CmJYBM1pkaGjjDMLrVvcMGOqUBQOPwi%2FoxlrIs5HbSR%2BAghy0ToXmFSShdidCbcrcV2aorDVD4lFOkVXctGc3ZJi3d7bymAvyfg5XE%2BXBJj9qBSj4A9WgE%2B8PT0%2FLLp5SdqoO%2B4%2BXKUk2RfLR4a8rC0RHXYgmWsRa8eZzKxZIKndQUAdZkjFSkP%2BX6r2x7jxqa3IUQSbCzjUnVAT%2BTwhGW2o4%2BhR7JoyYytwXzh0%2BwRVxO84M29NRu&X-Amz-Signature=580bf42d0abddacdb8db949374b2d8d6a1df1f6240d3287684cc464172e6a543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RGNOWXI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEouaDJkw%2FgJ4fnszNOQFEGz8rCY1Xb31jdA1qsylw%2FWAiEAwOCWGytI8Tx8mTnwCvwclpBVUkbwp1455r0C5lo79IoqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRbiw9YUjTroYM0TSrcA%2BMMn64Jt1BAFnd%2Fr9WfqLlsBiWv6%2BNu%2BKutzOT6m1Gv9cU7%2FMu5Ukgdr1kYmHxhmrrF1Qtl1HMEESp2G%2B0UUrWjuLyY3DFQNK8ripLIm7EPpVQSWOj6JdVPJdEoaMyteM%2FUfNUwJRpWT9HL4ebVBcXeHWujI3eyoIxK486W4j1cDozPNZ3kL47L6nl7W1BExjyRJ5VkgP7a4EwT1ZKWZA86zTIJY8Fr%2F6XA5ebFoW1P5o1hRWmcBNDfXT6CiLNmq2UCHsQTqS3XjkYb%2FlYtRQPRFfp7cO9hlK3QMfJvtkbzhCnnO9r6fM2NbVQrTExOsFPK%2FMFGp9b127ll6dAH7WNuhhqK3yqlobXYovkSSgs%2FMAQ3%2F7WDofvqqRAYpDQrDjP57rxfvcToldRJYJFy9AYumcAsoTvNfMxS0bnFSDhUq0g47M%2B6HRy0J4KN5E%2BFuygsMR0tXSb7pgAi%2B%2FqYd1CxXtPLkRs3utcx2xfE%2Bf6O5YyWJK9h922sPf7unLEDfKhqdHvGXqIgIRrndLC1YsdtZTNoNIGnl6MRgoKKsyB8M4MgYryoKHSHkh3QN%2FvKBGWGvUQFSWpmu4qlPzxH8YOL455Gq%2F8HTCCwos3sag00E9CmJYBM1pkaGjjDMLrVvcMGOqUBQOPwi%2FoxlrIs5HbSR%2BAghy0ToXmFSShdidCbcrcV2aorDVD4lFOkVXctGc3ZJi3d7bymAvyfg5XE%2BXBJj9qBSj4A9WgE%2B8PT0%2FLLp5SdqoO%2B4%2BXKUk2RfLR4a8rC0RHXYgmWsRa8eZzKxZIKndQUAdZkjFSkP%2BX6r2x7jxqa3IUQSbCzjUnVAT%2BTwhGW2o4%2BhR7JoyYytwXzh0%2BwRVxO84M29NRu&X-Amz-Signature=7bbef812f76d11ccb11c2b0ca79b8a66223befcec8139fcd204182c015f738d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
