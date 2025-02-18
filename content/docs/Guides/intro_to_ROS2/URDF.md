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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDUZ7CDB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDuwB3KRRDCXoSLk3GwsOaHOJMAaqWviWAO64x%2BlVzGdwIhALevEVuotkLMCt3ODCZ82Swgul%2FjQzVpXN2AqdPo95nuKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHW1GJbdU5wAVCmdwq3AM1tXZ4SI3X%2FNL1lrsb5TsV1IRTX8woU%2Fmbqjku%2BEhaYir8PUNDTw7fsw1gD1abC3jdhV%2F1Kr72gDsaknMxunUvmIyOhxbMqJY9CYiCWNsO9ytqH7JCND4AutUpmuB1CewBKWzxLg17fDEcLlkQ3%2FnsJYhA%2Bn59D2FjKbsLZyxgFE0S%2BZR1ZNUY1HPRA4anClfGrZ0Ze7VLaLGzHAcIxbDYDs0CoacCvYRbx2iBvoar5Be3vdaEpxUHDY2J01ewSX2RbNtIRLJYC0WhG5yeRH2iGWTCOiLixMDabcUrT%2FH3J4hSv1iqeaCZBC73qRlObQuJ%2BrxdLbux0yTEVNKQ76QTkytO0I33vgYMBRTgJNVWKxmp9FGedQt%2FQsZ05PawxZH9DH7Nl642QXRlFTSxKKgit5kl2w5Xzda87AfuCnuSIXL%2BL9i7Td2AyRLWNSMtb3L%2Fmn8a%2BkWo2lOy%2FOUqavOh0CYLP6G7mtty4LalRJW46NAbcziUkSQZBHvlsumIAPdpQgQzb3JjlYFP7BFcohU5eFLjPQ%2Fb%2Fs9tvlsxQisU7LgczFbSE92%2F69RXFHynZgreGQi9%2F17g%2BVWpgsL4AI3%2F4JMcHPtTDWRvzW8GVDhnFvLZN6JwSdjCsoCnnDDDstK9BjqkAQU5My%2BiqlTsSrn2ttKP2nMINuj3h5DA0Iq6jD3dyPlF6lU0%2Bq03U0G%2BWg7exjgIYOlxPV4jSYxZoRksKEjgESz9Ywq9J5LvH56NGevVPgbpgS3JIGYqUBg%2BT6aaK1XtPJW3JKTGOnZFw6jIZboyq66lmzRPqYHFU%2BBP2lmq0swXX9nas9zY1WzLF8WK%2FFVLU3vJDyvefZqILb6o2QH0HO38B5OW&X-Amz-Signature=3a3e9eaa3ea29b215283b128a61ddf20912f628e8a13b6bdcdcb8892e53c6c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDUZ7CDB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDuwB3KRRDCXoSLk3GwsOaHOJMAaqWviWAO64x%2BlVzGdwIhALevEVuotkLMCt3ODCZ82Swgul%2FjQzVpXN2AqdPo95nuKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHW1GJbdU5wAVCmdwq3AM1tXZ4SI3X%2FNL1lrsb5TsV1IRTX8woU%2Fmbqjku%2BEhaYir8PUNDTw7fsw1gD1abC3jdhV%2F1Kr72gDsaknMxunUvmIyOhxbMqJY9CYiCWNsO9ytqH7JCND4AutUpmuB1CewBKWzxLg17fDEcLlkQ3%2FnsJYhA%2Bn59D2FjKbsLZyxgFE0S%2BZR1ZNUY1HPRA4anClfGrZ0Ze7VLaLGzHAcIxbDYDs0CoacCvYRbx2iBvoar5Be3vdaEpxUHDY2J01ewSX2RbNtIRLJYC0WhG5yeRH2iGWTCOiLixMDabcUrT%2FH3J4hSv1iqeaCZBC73qRlObQuJ%2BrxdLbux0yTEVNKQ76QTkytO0I33vgYMBRTgJNVWKxmp9FGedQt%2FQsZ05PawxZH9DH7Nl642QXRlFTSxKKgit5kl2w5Xzda87AfuCnuSIXL%2BL9i7Td2AyRLWNSMtb3L%2Fmn8a%2BkWo2lOy%2FOUqavOh0CYLP6G7mtty4LalRJW46NAbcziUkSQZBHvlsumIAPdpQgQzb3JjlYFP7BFcohU5eFLjPQ%2Fb%2Fs9tvlsxQisU7LgczFbSE92%2F69RXFHynZgreGQi9%2F17g%2BVWpgsL4AI3%2F4JMcHPtTDWRvzW8GVDhnFvLZN6JwSdjCsoCnnDDDstK9BjqkAQU5My%2BiqlTsSrn2ttKP2nMINuj3h5DA0Iq6jD3dyPlF6lU0%2Bq03U0G%2BWg7exjgIYOlxPV4jSYxZoRksKEjgESz9Ywq9J5LvH56NGevVPgbpgS3JIGYqUBg%2BT6aaK1XtPJW3JKTGOnZFw6jIZboyq66lmzRPqYHFU%2BBP2lmq0swXX9nas9zY1WzLF8WK%2FFVLU3vJDyvefZqILb6o2QH0HO38B5OW&X-Amz-Signature=8547ba6754401adae6f51c533a45e8f516aabe813dfc132389a865a0b803f2b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
