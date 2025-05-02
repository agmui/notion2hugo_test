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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXNKDKQJ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIGUiCUT6w1NG7DpcJHVjcinHSDw0FnjStQcOl69HLUF7AiEA2rLEEyIbVxpKChCvl6mZBkOfnMowYfnUM5xhV4WBoWcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEt4%2By3kcilXg8xSCrcA%2FSTKD2C6OOXdEYJKQ0YtmNX8fYJlrmgomQpMUK5P%2B3yFuVQGFxnM1eVj3pnCyN9kcTAYfnStXRAw0NJ8Z2gZ8RSN2DN23il6mREH4Y22U%2FJgKudPVXZIb6AudFtkLtd5ALWAPjFN32tVYZ4rIhuPnA2IB9roTsRVOaOWGKaPVFi3smvueHTFWyC3cbc6Pwpx2%2BEoJ5bDXrPCdbism1mZCaAwMiKY9SQWvJXeQV%2BrpQ%2Bv7TYjYp9K%2BJp5t7bLZO0F2Pj8RGE6gY0yAvdQaGc%2Bf13ID4f8NDL9nJuLZWrRWXGmZASw8Q68ffuDP%2BGk3myr9Akj4oBSI2SwNNRbmrIjzuNRqos9Oksx570rVgbRJg41KUkxJU7EBShVvh9VYF5VgKVFz1BYp8zAcpfq%2BseAOKNAEHEj04T4vEnjegc047g5FnlGID%2F57mIJlEHFdan3BlOW8gMa0CYi6PTyPlYNB8JepBqbVTNpJwhtz78D1QBP35evBGjry0t7bIZcPjcDJUbDpJrnP7cgB7KxbxqpctuTqMKiyBBa%2BnL6xV5uaouIP9ALB1yuxEwpf8U2pCHE2Cp%2BqK91UghHlWV%2BCKROkusiajOnJKJBkSRCOtl0D7d41KDOglOvFZ3mhBbMOLI08AGOqUBOQXJM0w4%2FmU9lu2S8Dp%2BBOCZgiowIanVYID2ycQYJrXOLajui93Zug2frasGP0eukDQlcYLTPrfZ2RjUY%2B1k98AGyl%2FGGUioM6DstGR2wyZO4Mpq5bZvQdQqEarYBENQMfxAOyHE8gr0A85w0F4AFrUWRrUnY2U5t6xzkV8xAQdZlXsJR7y06pOO9dKBKbq2tmsYGvB7O5xjezMe6C0SI0Cd6KnX&X-Amz-Signature=4b0a7cf4194b1c3a2f3be6741d8b895800205df04f96c83d630481461a7295ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXNKDKQJ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIGUiCUT6w1NG7DpcJHVjcinHSDw0FnjStQcOl69HLUF7AiEA2rLEEyIbVxpKChCvl6mZBkOfnMowYfnUM5xhV4WBoWcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEt4%2By3kcilXg8xSCrcA%2FSTKD2C6OOXdEYJKQ0YtmNX8fYJlrmgomQpMUK5P%2B3yFuVQGFxnM1eVj3pnCyN9kcTAYfnStXRAw0NJ8Z2gZ8RSN2DN23il6mREH4Y22U%2FJgKudPVXZIb6AudFtkLtd5ALWAPjFN32tVYZ4rIhuPnA2IB9roTsRVOaOWGKaPVFi3smvueHTFWyC3cbc6Pwpx2%2BEoJ5bDXrPCdbism1mZCaAwMiKY9SQWvJXeQV%2BrpQ%2Bv7TYjYp9K%2BJp5t7bLZO0F2Pj8RGE6gY0yAvdQaGc%2Bf13ID4f8NDL9nJuLZWrRWXGmZASw8Q68ffuDP%2BGk3myr9Akj4oBSI2SwNNRbmrIjzuNRqos9Oksx570rVgbRJg41KUkxJU7EBShVvh9VYF5VgKVFz1BYp8zAcpfq%2BseAOKNAEHEj04T4vEnjegc047g5FnlGID%2F57mIJlEHFdan3BlOW8gMa0CYi6PTyPlYNB8JepBqbVTNpJwhtz78D1QBP35evBGjry0t7bIZcPjcDJUbDpJrnP7cgB7KxbxqpctuTqMKiyBBa%2BnL6xV5uaouIP9ALB1yuxEwpf8U2pCHE2Cp%2BqK91UghHlWV%2BCKROkusiajOnJKJBkSRCOtl0D7d41KDOglOvFZ3mhBbMOLI08AGOqUBOQXJM0w4%2FmU9lu2S8Dp%2BBOCZgiowIanVYID2ycQYJrXOLajui93Zug2frasGP0eukDQlcYLTPrfZ2RjUY%2B1k98AGyl%2FGGUioM6DstGR2wyZO4Mpq5bZvQdQqEarYBENQMfxAOyHE8gr0A85w0F4AFrUWRrUnY2U5t6xzkV8xAQdZlXsJR7y06pOO9dKBKbq2tmsYGvB7O5xjezMe6C0SI0Cd6KnX&X-Amz-Signature=ca2fe242f96718b5bdd5a6b8f4006f910d99f73feba55cb5cb968f0e0a127e06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
