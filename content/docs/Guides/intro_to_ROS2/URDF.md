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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEKJDO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD33ulj6TG9dJZUILx%2B%2B3SbehWMRD0BZ7zqDFpqb1wf8QIhAIFCcTr9xq9SASxyO4BljvAnYSTXpFzZUp%2B3MwfaOjZMKv8DCDEQABoMNjM3NDIzMTgzODA1IgxtF0o271mRDUwPWbQq3AOw5eOdJX55y7TqS%2FhkPkt6SWSuItktjtoxv4FLL7tYWjDBuDRud%2BtHvFuPHcTwFnf8V989wWo0GpKo%2B%2Fd%2B0NAfB7VWQU2ViJzT0CoTsqqrhONj9MzzZO0rURuIA4SgqXvBbDaSbT7D5mLEHXu0zw2VXFGq4JO4q34rM2S93vkvOBAxRxzx9B2XRWv0OXu4d%2FZAa4nDH02l%2F6Er2tL%2FE1GFSYJrHeCwQPAu4RyZDeQOPFtxu8DjtOY9TQVVDFpo%2FAaAraqIhqBYKmrnG8ngf0Q3DLrPejsyYzQGgX%2Fet0DkvoCga7DxgN4snKvmY3r%2BLfuEXVWnVWyF4hstlvhl4UV82khPUAv7f2FZVb3%2BIE8JLwnNFWFJvHdHUZxrpka1cokIYeJGscSsJ2zZb4fjPSp5bnggdBm3Thbq639eJHHdbac0LknQL%2BNrsLlwVgec9Ua7zcI5IFvBGiSPeM8%2BYMnV%2FR7jNvPM1ibkVgQ41lT1k0YLrozifS7OJk6Xbze3WRqH3ubm8Yo4gCBl47wFbuzJNr9p4rgOYbaTt9Y%2BIKroDlNEUot%2FR2QULzw3baXMiKp%2F84Ti%2FegGlac7HW%2FwvnaFgBbAIUNmcC8wR4a4Wuf2fJYx2lBJmD5PjiJcdzCOkKe%2BBjqkAbpW3k0A%2BHc%2BYbtqH2CjrZeGDTwl1l6xVvD3ozOBex63yh%2FmVbBTiztPSXm%2Fqsl70EHpRkh%2Bd9HA0ptJ%2BS%2BVdtpf4M1WfLkmdpofjsmJk8zGiVR5HnVpQnnsjPPFq3Yp2UeyyJom8iMoqibKKqpf0e23mSGcodbf7TtTlmrpCkOtY%2BQpNwRrhBxu4R5riDgy14KP25gBwj%2FOCFfBjJg5stPC3WQt&X-Amz-Signature=123bfddce5b60ed18de42b463fc99f9897a7b2fdd633478198fb7d5e428f696d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEKJDO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD33ulj6TG9dJZUILx%2B%2B3SbehWMRD0BZ7zqDFpqb1wf8QIhAIFCcTr9xq9SASxyO4BljvAnYSTXpFzZUp%2B3MwfaOjZMKv8DCDEQABoMNjM3NDIzMTgzODA1IgxtF0o271mRDUwPWbQq3AOw5eOdJX55y7TqS%2FhkPkt6SWSuItktjtoxv4FLL7tYWjDBuDRud%2BtHvFuPHcTwFnf8V989wWo0GpKo%2B%2Fd%2B0NAfB7VWQU2ViJzT0CoTsqqrhONj9MzzZO0rURuIA4SgqXvBbDaSbT7D5mLEHXu0zw2VXFGq4JO4q34rM2S93vkvOBAxRxzx9B2XRWv0OXu4d%2FZAa4nDH02l%2F6Er2tL%2FE1GFSYJrHeCwQPAu4RyZDeQOPFtxu8DjtOY9TQVVDFpo%2FAaAraqIhqBYKmrnG8ngf0Q3DLrPejsyYzQGgX%2Fet0DkvoCga7DxgN4snKvmY3r%2BLfuEXVWnVWyF4hstlvhl4UV82khPUAv7f2FZVb3%2BIE8JLwnNFWFJvHdHUZxrpka1cokIYeJGscSsJ2zZb4fjPSp5bnggdBm3Thbq639eJHHdbac0LknQL%2BNrsLlwVgec9Ua7zcI5IFvBGiSPeM8%2BYMnV%2FR7jNvPM1ibkVgQ41lT1k0YLrozifS7OJk6Xbze3WRqH3ubm8Yo4gCBl47wFbuzJNr9p4rgOYbaTt9Y%2BIKroDlNEUot%2FR2QULzw3baXMiKp%2F84Ti%2FegGlac7HW%2FwvnaFgBbAIUNmcC8wR4a4Wuf2fJYx2lBJmD5PjiJcdzCOkKe%2BBjqkAbpW3k0A%2BHc%2BYbtqH2CjrZeGDTwl1l6xVvD3ozOBex63yh%2FmVbBTiztPSXm%2Fqsl70EHpRkh%2Bd9HA0ptJ%2BS%2BVdtpf4M1WfLkmdpofjsmJk8zGiVR5HnVpQnnsjPPFq3Yp2UeyyJom8iMoqibKKqpf0e23mSGcodbf7TtTlmrpCkOtY%2BQpNwRrhBxu4R5riDgy14KP25gBwj%2FOCFfBjJg5stPC3WQt&X-Amz-Signature=a9009fd7e894483743854e23d4e77670c1a1bf65b722f51c7cac6cf403531e36&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
