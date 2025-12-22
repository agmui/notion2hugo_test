---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CFSHYF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDBXCAlZfGIIKPDqA3LFjZFaEGYZGCtbMSX%2BeB%2BhrjbeQIgXGlqo7Uz5DsyoJjCiMdxHJ51h7Y48pxeTW9YPXo4AU8qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUR1zzE2Q598bWA2ircA005dDvVqbyZUeRvRgeGimHpwXbn2tA2wYxoNTscVFjiUw9680tyC4grmChqIeIYPwCys2Txc2Wtx%2Bq1P5joyl6sCqKZY0K87Pgb%2B%2BZpXCJUMjs34apuxO2Bviz6GKurRVMrf5VDcrIPpIY3iyAx9LlWcpVopmcaEmAk6NKpnJGc2dbAuAf4Snc%2FFo8qnwsTR%2Fu2iy7CiHsLrt%2BSKSxgzVhYybV0dqtg%2FHQU3QSjKoDWHjXz5yzVzP1TbQmd2OpG9kkvShtKkYSGzaBzv58DNIuvyYdZRVK7ltStjIacKsOrukFpI0kEqJFtL6q%2BMRKecPHSDtTq4hSP5QubgsDSfGSyoIm1yVSs3HinJoV3RuCWTmcZI7rALrTsfx7LzJgOuC%2FLad98hYoJvJyQWBR1uKeGD7BGWBX4aKwR7Fmu%2B7ew2vjiS0%2BpSQrw6B%2F0xuY3iOOFxUQHdgJARBO9g74b%2BWfxCY4gxL6h4peDsmc7zozVS0VapTfRdIFJqINiXUFmOux52tSYY11mfs1z2llcX7BavTZdrnVfEBiGAB8PjFoTuii6ZJ1mbX4b4bd6R%2FEdM1vIxdelE8I0blXdVN2ZbUPUDyedBol7JWRAZwLbnwuDNTwq6Qw0oM5HXEadMOr5ocoGOqUBWpFbyo8VvThL6nulrtn7p16Etaz1z7TWZyQaUA6L%2BdR01AY%2Bd1ilxtgCxcITMSD7XsbLcBlZhIZYTrpfC01WY71DwBri1ysrujagS0ptG%2BH0z%2FBI4ibmUD%2FooIcs45CZREq8EeTZqZwxPEpLv2Ay%2Fx5t71RGnkLff%2FOS7kDAmWCVD1id1JTej57B2oySnA9%2BtUC%2FwYSW9SVS4bALX2kJ6FYPuY3P&X-Amz-Signature=0bb27a5a24ee8c15ffc4e007c79b486a5f520595d045d830e5bc24e011dc56ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CFSHYF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDBXCAlZfGIIKPDqA3LFjZFaEGYZGCtbMSX%2BeB%2BhrjbeQIgXGlqo7Uz5DsyoJjCiMdxHJ51h7Y48pxeTW9YPXo4AU8qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUR1zzE2Q598bWA2ircA005dDvVqbyZUeRvRgeGimHpwXbn2tA2wYxoNTscVFjiUw9680tyC4grmChqIeIYPwCys2Txc2Wtx%2Bq1P5joyl6sCqKZY0K87Pgb%2B%2BZpXCJUMjs34apuxO2Bviz6GKurRVMrf5VDcrIPpIY3iyAx9LlWcpVopmcaEmAk6NKpnJGc2dbAuAf4Snc%2FFo8qnwsTR%2Fu2iy7CiHsLrt%2BSKSxgzVhYybV0dqtg%2FHQU3QSjKoDWHjXz5yzVzP1TbQmd2OpG9kkvShtKkYSGzaBzv58DNIuvyYdZRVK7ltStjIacKsOrukFpI0kEqJFtL6q%2BMRKecPHSDtTq4hSP5QubgsDSfGSyoIm1yVSs3HinJoV3RuCWTmcZI7rALrTsfx7LzJgOuC%2FLad98hYoJvJyQWBR1uKeGD7BGWBX4aKwR7Fmu%2B7ew2vjiS0%2BpSQrw6B%2F0xuY3iOOFxUQHdgJARBO9g74b%2BWfxCY4gxL6h4peDsmc7zozVS0VapTfRdIFJqINiXUFmOux52tSYY11mfs1z2llcX7BavTZdrnVfEBiGAB8PjFoTuii6ZJ1mbX4b4bd6R%2FEdM1vIxdelE8I0blXdVN2ZbUPUDyedBol7JWRAZwLbnwuDNTwq6Qw0oM5HXEadMOr5ocoGOqUBWpFbyo8VvThL6nulrtn7p16Etaz1z7TWZyQaUA6L%2BdR01AY%2Bd1ilxtgCxcITMSD7XsbLcBlZhIZYTrpfC01WY71DwBri1ysrujagS0ptG%2BH0z%2FBI4ibmUD%2FooIcs45CZREq8EeTZqZwxPEpLv2Ay%2Fx5t71RGnkLff%2FOS7kDAmWCVD1id1JTej57B2oySnA9%2BtUC%2FwYSW9SVS4bALX2kJ6FYPuY3P&X-Amz-Signature=0ca1f9a58cc96c1f60f2cd249a4839271e1202362b6134602068b1d0933a5819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
