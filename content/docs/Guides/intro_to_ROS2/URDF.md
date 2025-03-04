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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP3FPEX2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Pd8TjFrGLh6J%2B5hOauEMCzA3xjOjkNm9mLWkhUd1MAIhAIUX3MXC1cfqSRWzUg%2Fh0tjSBBuo2AQDKzi4PvkB4BfDKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BnZhc2XN%2Bq6bGkxgq3ANuMAUzxWeoE3e45rfkqzoX1Jw1JPsoKHjQKWSSKec%2BlNniwxqpTk%2BSFXmSbQ6WmmieJRcW8M1CasxTV%2FEkcb98%2Fm8dMwLqPXbI8dRnLPRahCfFKwVLu6ec8ynW6Xd47z0kt3D8YZIN0%2Bc7LQsTzl%2BDWDmJw0E5cDN%2BzQQJZ5zeFo9XNjGSyBOuzwSVCu4zh47x2n%2FK8O1MhOHNGQFdS%2FHDIGGaQJkWb08i0plif2ueLZwL%2BsLaGzLZXODQn5VpirTNKGPtjqM1rcQxAyXUlVMRngi%2Fdcb3msK6zkZv6uktpgbAS9mzdTJ2%2FyOOD212QE12YWi%2FK%2Fmt0csw4wr2JA%2B6hmDXymGYECgay23YO455dqAx8CRCFe2uEWJnn%2B3PdCzbMOtbY4s%2Bz3bOhGxaPnk9PnnedK8pwdo8rQrbThxoZhKFl6fMAlTcM3Bl03GyR%2By1SYV42KJ%2BPa%2BCAy%2FO%2FQtPGHlVq5zKbKmmHh0bdNUqmNhBPpRyagsl0lgJ7yBOydCQQ8YqNxC9kZq%2B9FocbcHJ6pRECrhEH81JMJyIsbSWiiKVHE%2BOWpLvOh2JNXcgLiceXM8szwQQe9baAH036M%2F5eBdP6kNxl9GOVzep3WxiHEZFDqRTFIWgntDdAjDR%2BJi%2BBjqkAfgG6dNf6ooj%2FA%2BFoGGW%2ByAK2pHrkD0dkFYfPwQl7FwpmB5gUqqzNqZ88bioufPGgHEH0rCWxl%2BdK4kQ9Zc7WllhomoTqO8clJFMjLaLuSuDZtBlUr5cIwpepswa8Z9HU4JV2uOY738war%2B9Flke1eFzNHcQg3MlraOnxVDY2QBEGxmACXARyJfEYzXUPJByklAB%2FTzmORoJty82zFBzsToeQvdo&X-Amz-Signature=93d2651bb8f4a112490b4d3775210540e25a5868dc68a3c0dd791b510efc47fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP3FPEX2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Pd8TjFrGLh6J%2B5hOauEMCzA3xjOjkNm9mLWkhUd1MAIhAIUX3MXC1cfqSRWzUg%2Fh0tjSBBuo2AQDKzi4PvkB4BfDKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BnZhc2XN%2Bq6bGkxgq3ANuMAUzxWeoE3e45rfkqzoX1Jw1JPsoKHjQKWSSKec%2BlNniwxqpTk%2BSFXmSbQ6WmmieJRcW8M1CasxTV%2FEkcb98%2Fm8dMwLqPXbI8dRnLPRahCfFKwVLu6ec8ynW6Xd47z0kt3D8YZIN0%2Bc7LQsTzl%2BDWDmJw0E5cDN%2BzQQJZ5zeFo9XNjGSyBOuzwSVCu4zh47x2n%2FK8O1MhOHNGQFdS%2FHDIGGaQJkWb08i0plif2ueLZwL%2BsLaGzLZXODQn5VpirTNKGPtjqM1rcQxAyXUlVMRngi%2Fdcb3msK6zkZv6uktpgbAS9mzdTJ2%2FyOOD212QE12YWi%2FK%2Fmt0csw4wr2JA%2B6hmDXymGYECgay23YO455dqAx8CRCFe2uEWJnn%2B3PdCzbMOtbY4s%2Bz3bOhGxaPnk9PnnedK8pwdo8rQrbThxoZhKFl6fMAlTcM3Bl03GyR%2By1SYV42KJ%2BPa%2BCAy%2FO%2FQtPGHlVq5zKbKmmHh0bdNUqmNhBPpRyagsl0lgJ7yBOydCQQ8YqNxC9kZq%2B9FocbcHJ6pRECrhEH81JMJyIsbSWiiKVHE%2BOWpLvOh2JNXcgLiceXM8szwQQe9baAH036M%2F5eBdP6kNxl9GOVzep3WxiHEZFDqRTFIWgntDdAjDR%2BJi%2BBjqkAfgG6dNf6ooj%2FA%2BFoGGW%2ByAK2pHrkD0dkFYfPwQl7FwpmB5gUqqzNqZ88bioufPGgHEH0rCWxl%2BdK4kQ9Zc7WllhomoTqO8clJFMjLaLuSuDZtBlUr5cIwpepswa8Z9HU4JV2uOY738war%2B9Flke1eFzNHcQg3MlraOnxVDY2QBEGxmACXARyJfEYzXUPJByklAB%2FTzmORoJty82zFBzsToeQvdo&X-Amz-Signature=9f89d1aac1617240a4238d39a868bede3e0771d989b2f4920528dd3fe6fd73e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
