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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3BJPBRE%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIQCgYjE7ru8sw4jdqxazEMtXh7yx8xLUI0iS9l%2Be74vq2AIfYaV2E5OOjeiI65IBOz13KTVas2HXqkXA1cL9zKEqmSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMCAQaJFzFcXHnuw1pKtwDSNnGsWWQvjtmBfTTT1vb08UZcod2NBrG0hGQe7gJLsNv%2FYeoWAWUmW6PmI8rS166bVUakKG7TJ8h22o4e6dUnMWIaXYRw6yFnLc%2FiAVLRshgWbGMEFf%2Fc75mgGPB3ldtTeoetYOqvaMvNybXZD2PEsL8ULsVMDzwosycwRQesE2BtaCKpnF%2BKnR92cAhwi6j%2Bc%2B5PvPS9O%2BqjA7DsDTwVZRqzNl%2BSpFeMRtCU9URypAkJakoGYgVeLJe5XAXd%2Bjd5XMar%2BYLDotvb8fY9AJhSxjoha3FO5zlDar3a23%2FtqCHbubIXUZ7qc7X0SyjkAXIEYDHwJyQpye92IynBBO%2BiHitywNqYeSTH27yBLcSsxSSIlz89FYWMKvobbnBBlzHEKCdrBx5KOVN%2B57594VRcmZ2n%2BKBTIcAiPxZqV0Bzs%2Bq2hsLSYqOXAtl5dwLDd%2FkjS%2BzrhtqU0MNUz5BjNsAs3lDHKXOSDARmMYiCd86bdFaZGHP2sIP4MFTIykhRhMU4%2FPbl%2BT8FjT1cf7pJo1ZxOClRygtdICPVvgSRiozqGawc7lXoNWKRi4odlvCmDP%2FjS3s3NEYi%2FIRi%2FaSNAjqx7%2B9VaaRpS0i6c3ruh0VD%2F%2BqB4h2gEq3fzxOkGow76mAwgY6pgFuZ3BOqXvC2bnvfSK8m1pnmcPpckpTjCwArAGbohva%2FjXha2x8FZCsdVJUZixMK%2BltCa0wVOtjQyp%2Bqf2nZs2t0ASocHCn3aVnoEMUsa2Rl%2Fuy13mE0vpMXo%2BDsCCbRtpLCeC%2Ft74Jzx2H3ry2fHjP0OMl6pNVqfzANqB%2F11%2FcTrMMcEvGVETojUmrGTr33yE7HNrStMuj%2FmljzEEw2L6iadbFRz5z&X-Amz-Signature=60c9bcc6b3c2f69280590a736710ee5865fb23c660d12adbd26888fa9140d11a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3BJPBRE%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIQCgYjE7ru8sw4jdqxazEMtXh7yx8xLUI0iS9l%2Be74vq2AIfYaV2E5OOjeiI65IBOz13KTVas2HXqkXA1cL9zKEqmSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMCAQaJFzFcXHnuw1pKtwDSNnGsWWQvjtmBfTTT1vb08UZcod2NBrG0hGQe7gJLsNv%2FYeoWAWUmW6PmI8rS166bVUakKG7TJ8h22o4e6dUnMWIaXYRw6yFnLc%2FiAVLRshgWbGMEFf%2Fc75mgGPB3ldtTeoetYOqvaMvNybXZD2PEsL8ULsVMDzwosycwRQesE2BtaCKpnF%2BKnR92cAhwi6j%2Bc%2B5PvPS9O%2BqjA7DsDTwVZRqzNl%2BSpFeMRtCU9URypAkJakoGYgVeLJe5XAXd%2Bjd5XMar%2BYLDotvb8fY9AJhSxjoha3FO5zlDar3a23%2FtqCHbubIXUZ7qc7X0SyjkAXIEYDHwJyQpye92IynBBO%2BiHitywNqYeSTH27yBLcSsxSSIlz89FYWMKvobbnBBlzHEKCdrBx5KOVN%2B57594VRcmZ2n%2BKBTIcAiPxZqV0Bzs%2Bq2hsLSYqOXAtl5dwLDd%2FkjS%2BzrhtqU0MNUz5BjNsAs3lDHKXOSDARmMYiCd86bdFaZGHP2sIP4MFTIykhRhMU4%2FPbl%2BT8FjT1cf7pJo1ZxOClRygtdICPVvgSRiozqGawc7lXoNWKRi4odlvCmDP%2FjS3s3NEYi%2FIRi%2FaSNAjqx7%2B9VaaRpS0i6c3ruh0VD%2F%2BqB4h2gEq3fzxOkGow76mAwgY6pgFuZ3BOqXvC2bnvfSK8m1pnmcPpckpTjCwArAGbohva%2FjXha2x8FZCsdVJUZixMK%2BltCa0wVOtjQyp%2Bqf2nZs2t0ASocHCn3aVnoEMUsa2Rl%2Fuy13mE0vpMXo%2BDsCCbRtpLCeC%2Ft74Jzx2H3ry2fHjP0OMl6pNVqfzANqB%2F11%2FcTrMMcEvGVETojUmrGTr33yE7HNrStMuj%2FmljzEEw2L6iadbFRz5z&X-Amz-Signature=744e060ed20aa72f24a0ebd236626c85255972a179bfb23d2ee7bc26230d196e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
