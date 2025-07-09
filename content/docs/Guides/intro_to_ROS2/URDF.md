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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ENIZDY%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc4KXZIPyVSP%2BJTluKQ9vsfvwIWCOER9WsMVXfnyljeQIhAO%2BigZW%2B2gN%2B5xkTTsortM4nCm%2BDywSnhRLKbRe6RhQmKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwxd9M0Yv6z%2BHvMGOoq3ANFOVXJfDZGjL7D8FcZ2JQCPwmQuYeObhVCG0zF%2FqqWcKMcf0bjzAv1UgNUWbWC4eQgU8sYIbLBO6aiG9Zuab%2Fa2Dl%2FnlhsJgQbiPZFlyDp0%2BeI3Kv9F1VzUuTYC6lrgipvD6zDaHw89PtSJcHsUfaglK2t0PKpaq%2B%2F8s%2BynyEqfyyRRePoSCFOKfOMy5r8cXbQ5qiXJsE2q3ExYi%2B0OzYYEut0lgY7nCU2SKOLT5hut9XXzaiqv6MLJtKkenuWM%2B7AG7H4X47MtMqLf6HPDDPfDSSawz9i4cT40AO67zzjqRhd6zSTc68%2FsSaVjpENIlrw1DTgwZ4yA5C0v38PG%2FIrVSgRT8I8Vk2RBkWfs34bXWF5P8102O91oWMh%2B8psipHPc2wX6ilOqrk78DaeXFRkBejixaJiuF06YJgjJRsY791Kudo3mmO3NKTlkfnAPRaOnA4mYVslvxHbuqGCqTBpv6j8deIQgLNcKV22i7W%2BiNExG9dKzUmulChdVFmD4e6YNG47G1quH0GlG487XNEGn3XpG8ULPBKtl90m2pu3y8z9oqiDduBclyAdwLFueX%2B6SMNrb39RORsLkZsAh%2FefyWtfN2MQG5SVpT4MZwUDC9uBLnt1w8l1Lt03zjDDmLrDBjqkAcv94hg3HyTlgWTF%2FyjPiLruVKDEjNpYWlYHcsObc5rqaMbZ5oVev8EKPz1lxVFZOSJTGa1m5Qjzgc8PuRTi0LLIyRRLmVF1m%2FidqK4J%2B3v%2F3qgnVnO2IzwFj%2F6Zc1BnxrEhhJdUYmi%2BRRMvY%2BkkWms500jvZN3Vk22IQuvze7386Pl1n%2F%2BdhujMG9slESB8DS7a6qSzZ0QhyX%2Bj%2B0191ruirV%2Fn&X-Amz-Signature=36812a4c1a1e5b6164b7dedeb71796c33bdccff886b843154ce097e8a86d2155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ENIZDY%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc4KXZIPyVSP%2BJTluKQ9vsfvwIWCOER9WsMVXfnyljeQIhAO%2BigZW%2B2gN%2B5xkTTsortM4nCm%2BDywSnhRLKbRe6RhQmKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwxd9M0Yv6z%2BHvMGOoq3ANFOVXJfDZGjL7D8FcZ2JQCPwmQuYeObhVCG0zF%2FqqWcKMcf0bjzAv1UgNUWbWC4eQgU8sYIbLBO6aiG9Zuab%2Fa2Dl%2FnlhsJgQbiPZFlyDp0%2BeI3Kv9F1VzUuTYC6lrgipvD6zDaHw89PtSJcHsUfaglK2t0PKpaq%2B%2F8s%2BynyEqfyyRRePoSCFOKfOMy5r8cXbQ5qiXJsE2q3ExYi%2B0OzYYEut0lgY7nCU2SKOLT5hut9XXzaiqv6MLJtKkenuWM%2B7AG7H4X47MtMqLf6HPDDPfDSSawz9i4cT40AO67zzjqRhd6zSTc68%2FsSaVjpENIlrw1DTgwZ4yA5C0v38PG%2FIrVSgRT8I8Vk2RBkWfs34bXWF5P8102O91oWMh%2B8psipHPc2wX6ilOqrk78DaeXFRkBejixaJiuF06YJgjJRsY791Kudo3mmO3NKTlkfnAPRaOnA4mYVslvxHbuqGCqTBpv6j8deIQgLNcKV22i7W%2BiNExG9dKzUmulChdVFmD4e6YNG47G1quH0GlG487XNEGn3XpG8ULPBKtl90m2pu3y8z9oqiDduBclyAdwLFueX%2B6SMNrb39RORsLkZsAh%2FefyWtfN2MQG5SVpT4MZwUDC9uBLnt1w8l1Lt03zjDDmLrDBjqkAcv94hg3HyTlgWTF%2FyjPiLruVKDEjNpYWlYHcsObc5rqaMbZ5oVev8EKPz1lxVFZOSJTGa1m5Qjzgc8PuRTi0LLIyRRLmVF1m%2FidqK4J%2B3v%2F3qgnVnO2IzwFj%2F6Zc1BnxrEhhJdUYmi%2BRRMvY%2BkkWms500jvZN3Vk22IQuvze7386Pl1n%2F%2BdhujMG9slESB8DS7a6qSzZ0QhyX%2Bj%2B0191ruirV%2Fn&X-Amz-Signature=b808ec5cf237103d006f35256a893d4033586614da71cdc938ed011a8c63a745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
