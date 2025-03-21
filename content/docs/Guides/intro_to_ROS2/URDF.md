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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645WUMBLR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCToJPjPORmSQS%2FAuIA5ItEz7j2eJGFq1e%2For3%2FK4Yi%2BwIhAMGMdJuuanyDnrLXt8b9NmmWUIGsB2dvbf8kEagM4XO9KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNBGTiGV2TS8V7EiIq3AOKuvh0BUgNntQeQnHU4pJSMvPfn%2BNHNTXXM%2BTE3YbXgGwykuCb1MNl0DrRtg1AlvB0qmvetp%2BOuAPZLUEYMRjEevwCt9mwPOTkA0Mc5frtubZZajB90AOHb7rvkWL7QwnR4IU1cpMsJlnF9hmgwDj%2BrhD3pZznSYtf0qYvUwSFpOQiJoa07GZCcAueYea8oLT2GrHmNBkP7YmlK2eg3iwmT1m2fBr9UZx1xLR4B5PkOhL9ReDjmkaX7Hzq%2BycIPrJokcOmUR%2FKQ56X4e4PQ4mdYrPino9ifX1bouP3FHqoQGuzpiRq32yiWWvh4Giu%2BaiOk7xZRu9%2BDbC0Z30Vaeh42dENMcOx3kc6jdNK2A9raPML6b4oWNdjRKNa4aGoVKcs%2BxKV3tckwoBapiR7EW4LbN%2BMoz3F3LJAVY6xlYejMRwE9Sh8neTPI5hCoZP40LGhFV6wSy1IVmdQ6xT9dZP32XTgLxWxX4oVGl9qfFQRoTRPpz28zEhTk52wy%2FE5u6j6BnQFk51SOdFzR5Kj4ZFjd3CZ5W00WuCPbjo9QMOeWHeYxxwDa2xceLCoOJiS211zi%2F1QHLFLMGZl0jMKSL4%2BkJJnC1rtE%2Bcq5ykCwOtdwq73nLJsDQfuFcnDHTCM3Pa%2BBjqkAT0z6L8xYASLs5i0aGyq%2BSyoikLAITJaPDErBTZAQmp%2FvCOO9uFQ%2BaRO%2BoDfAfCCQK4MAhALKI2mGblGBHr4vdYD4JPZ%2FCSKpPGnPpFD7VvKOnEKrZSpdj2CDx338tdmcz9zmy8Zre7bbFPNdFsBSTR7ZhkZXfIfk1nerzBhSdi10V856HXWQPaVcSZE8Z4CkC2X9ynEO6FoSrAIVij4%2BMFfIaoH&X-Amz-Signature=2a7b01154f912032903305baa0c71f215917aff8b34b7d2624665ff97d983a71&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645WUMBLR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCToJPjPORmSQS%2FAuIA5ItEz7j2eJGFq1e%2For3%2FK4Yi%2BwIhAMGMdJuuanyDnrLXt8b9NmmWUIGsB2dvbf8kEagM4XO9KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNBGTiGV2TS8V7EiIq3AOKuvh0BUgNntQeQnHU4pJSMvPfn%2BNHNTXXM%2BTE3YbXgGwykuCb1MNl0DrRtg1AlvB0qmvetp%2BOuAPZLUEYMRjEevwCt9mwPOTkA0Mc5frtubZZajB90AOHb7rvkWL7QwnR4IU1cpMsJlnF9hmgwDj%2BrhD3pZznSYtf0qYvUwSFpOQiJoa07GZCcAueYea8oLT2GrHmNBkP7YmlK2eg3iwmT1m2fBr9UZx1xLR4B5PkOhL9ReDjmkaX7Hzq%2BycIPrJokcOmUR%2FKQ56X4e4PQ4mdYrPino9ifX1bouP3FHqoQGuzpiRq32yiWWvh4Giu%2BaiOk7xZRu9%2BDbC0Z30Vaeh42dENMcOx3kc6jdNK2A9raPML6b4oWNdjRKNa4aGoVKcs%2BxKV3tckwoBapiR7EW4LbN%2BMoz3F3LJAVY6xlYejMRwE9Sh8neTPI5hCoZP40LGhFV6wSy1IVmdQ6xT9dZP32XTgLxWxX4oVGl9qfFQRoTRPpz28zEhTk52wy%2FE5u6j6BnQFk51SOdFzR5Kj4ZFjd3CZ5W00WuCPbjo9QMOeWHeYxxwDa2xceLCoOJiS211zi%2F1QHLFLMGZl0jMKSL4%2BkJJnC1rtE%2Bcq5ykCwOtdwq73nLJsDQfuFcnDHTCM3Pa%2BBjqkAT0z6L8xYASLs5i0aGyq%2BSyoikLAITJaPDErBTZAQmp%2FvCOO9uFQ%2BaRO%2BoDfAfCCQK4MAhALKI2mGblGBHr4vdYD4JPZ%2FCSKpPGnPpFD7VvKOnEKrZSpdj2CDx338tdmcz9zmy8Zre7bbFPNdFsBSTR7ZhkZXfIfk1nerzBhSdi10V856HXWQPaVcSZE8Z4CkC2X9ynEO6FoSrAIVij4%2BMFfIaoH&X-Amz-Signature=08923941f677d4b0f04adeef1b4b2bdaddd9f6b99e2338c489a005c4f012a7b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
