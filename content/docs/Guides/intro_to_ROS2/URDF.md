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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4FB2WYB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0pc6SZOvPFg80xoSK6FUdXH33dBTVwmIKuXNWibwlfAIgca%2Fa%2BffhcjY1R4Ek5g%2FoGYQmv%2Be2uknx0iycVjD%2FKFQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGGFfCrPUKGOLFKwFyrcAwgR9I0HBb4YKodLa37WTJkdfBEdnFrdcuCvGMgVBvvzI0af6BmDbrtIAcT8wtQO66jmUq2CABgLGqk6I6%2BJkQX8o2HdRwasJpcqeTAA51KUCsrbOG4dOicSQQIJH%2BmfizwCy75kNeA1dl8aPAGS%2BfeHFDyBNicDGtv3LQdQC%2BKmwS4NliyZfKsQ3LtwGfWtuxvv6B5iSYvJf5UBO33w4tP0k0GyskHPB6hoxnCmTi6BveqZKfWCfMD0WfDtSIS7Ut9uyLvpMgTHyI2tNlCGBmb1uEc4DRtVPN68FAw%2B2BaTelEcUtRChVxNnsCA2LbEToFaDwOujWjyD2ircZ8kR9J9NcpoL3Wm7T4UeO7RTvHBbZuYkaL%2Bb0cc0BaCJQAXxZaosONUjLHhchpnWsrYCLC4%2BIFrI6qc17%2FwNvVV11jq%2BQtczQV1ACeWr%2B%2Bg19U6EJyWEwhqhvzmhbsfgifk0HuEnTHsOGQgXZUL0niHuqDrydCTC29Z00ZJ2cWAASBPJOETijQhyhcF6cO7%2FYm8dtnXSJiVS3fBP8KayKTSDduYyvhldUo0ieMuyg3OCbPy3%2BRDF0fbMlSJC3UwT%2BuUNb%2FqJqIdYq4D%2BVoLFaSZ6mMzcSOFij%2Flr6erslPoMOTc9L8GOqUB%2Bf01qqS1x7ZZIfJ7cAbfUq6%2Ba0OwjjR41pYhLwiCs%2BFmzWdBxxWe04%2B9ifujql2mr%2FifxK0YOC0FzuB2Cer%2Bk1eNrRReZYsnV%2F8yVgM3%2BFuCWbBCdYrzvaw6t2Ino3w%2B2DPbc5HU9sIB6cqAPGlaCaFc9mLLtoA6DyHGHxsZ8%2FWfEzoncsTOjrn7PVD0hlTpEU8jWxNir3JJ2hZ%2BbHmBZ3svwa2R&X-Amz-Signature=ab9d76d1f2311959f656ec6cbad883b4a50569c3a2a21613a92c136e1b58fbd7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4FB2WYB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0pc6SZOvPFg80xoSK6FUdXH33dBTVwmIKuXNWibwlfAIgca%2Fa%2BffhcjY1R4Ek5g%2FoGYQmv%2Be2uknx0iycVjD%2FKFQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGGFfCrPUKGOLFKwFyrcAwgR9I0HBb4YKodLa37WTJkdfBEdnFrdcuCvGMgVBvvzI0af6BmDbrtIAcT8wtQO66jmUq2CABgLGqk6I6%2BJkQX8o2HdRwasJpcqeTAA51KUCsrbOG4dOicSQQIJH%2BmfizwCy75kNeA1dl8aPAGS%2BfeHFDyBNicDGtv3LQdQC%2BKmwS4NliyZfKsQ3LtwGfWtuxvv6B5iSYvJf5UBO33w4tP0k0GyskHPB6hoxnCmTi6BveqZKfWCfMD0WfDtSIS7Ut9uyLvpMgTHyI2tNlCGBmb1uEc4DRtVPN68FAw%2B2BaTelEcUtRChVxNnsCA2LbEToFaDwOujWjyD2ircZ8kR9J9NcpoL3Wm7T4UeO7RTvHBbZuYkaL%2Bb0cc0BaCJQAXxZaosONUjLHhchpnWsrYCLC4%2BIFrI6qc17%2FwNvVV11jq%2BQtczQV1ACeWr%2B%2Bg19U6EJyWEwhqhvzmhbsfgifk0HuEnTHsOGQgXZUL0niHuqDrydCTC29Z00ZJ2cWAASBPJOETijQhyhcF6cO7%2FYm8dtnXSJiVS3fBP8KayKTSDduYyvhldUo0ieMuyg3OCbPy3%2BRDF0fbMlSJC3UwT%2BuUNb%2FqJqIdYq4D%2BVoLFaSZ6mMzcSOFij%2Flr6erslPoMOTc9L8GOqUB%2Bf01qqS1x7ZZIfJ7cAbfUq6%2Ba0OwjjR41pYhLwiCs%2BFmzWdBxxWe04%2B9ifujql2mr%2FifxK0YOC0FzuB2Cer%2Bk1eNrRReZYsnV%2F8yVgM3%2BFuCWbBCdYrzvaw6t2Ino3w%2B2DPbc5HU9sIB6cqAPGlaCaFc9mLLtoA6DyHGHxsZ8%2FWfEzoncsTOjrn7PVD0hlTpEU8jWxNir3JJ2hZ%2BbHmBZ3svwa2R&X-Amz-Signature=6d9b2c0a0a37479a7980d323edd27811eaa26b6531ee2b5055ec9b645d89c4ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
