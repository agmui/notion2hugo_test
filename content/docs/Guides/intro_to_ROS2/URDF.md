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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKNMUK2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEiryIWJLPiqR1G0I5SDg0qgnVCMZ7uhEpFUe3bCLXegIhAOSynlkjBWfXJKrXf%2FAtpno949InRt3fk%2FS6sHpNKFalKv8DCBYQABoMNjM3NDIzMTgzODA1IgwIqR%2BK8Qj124bb010q3AN3%2B4IXQF%2FyIDvMSoDpLrLOZUFT%2BSr%2FYKTE23TU%2Ba2quFQ1kfHmO%2B34%2BRN8euw0KclZBdU%2Bev8yqgG6Zkj7IdG9PjlYJOU4I1Cx%2B9R%2F4eZgcsnb54fsY0W8ZyNSq%2BAbO9FAIB7g%2FZroJP8QMcIVOjRsgDXELuMPzmqv1X%2FksuYXkwNmPHt2kLLmzA%2Bnb1suEslNQkD5iwFnA6qYa4kC3xhL%2BtWlQxldL4koL3y7SWB68FP6Z7EaFPDXu5%2BU1H8ei0itvGeQSgVoCXkP%2BHhh24QusV09rctXNJbEDhvD9k6na9Rb4aAwTzGylWTq9tKY60HTVL4yb9TKrdewVpXknwne2xf3Ffucxx5z3EOig6ysFV%2B43%2FlmhjvJSGHQqqGzTSEIcNO9eKBxGqv1OKAQ52Ph6s87tdNwtGbVHhvVn4v8AVxYAUG84t8x6dcvsE%2FFtT2GwvV3VzZ9azBqytPVgoDlO%2FcsT8aoZRAhjaZukRiG1YX5H2sXKksaGww4WCbLya8T9Rt8g3UrdDp7yzpKWJlytZpvAXp1MTUU5pphiZV0a%2BNTaWBFn20V79ZhorIHRaOI%2FtaZQmXBMW2Zc7ajP57m4vMbiiMhUyq9b32rnnMvFYOYSSWx01BPtE4pdzDu7tW%2BBjqkAZfp0VEc%2Bg9%2BEz0aEcxqZH0HtW2HjmeXxx9m4aH%2Bc2Lvr%2Fm1HV6ay9G1KUipKWinaMXWb6Y%2FpTJ5yvP1OVCsoLHvuYKvlNSBJ%2B89N8X7IYMjqMFRbC3flmU2MS5AY2KX5zlTI54RW2SGo%2FHRkxSsrFg0LkBkFAMP3aei4fyy9OKMkTpmMyiKCTJxTkUctSjiI5%2BXb%2FGaV6%2FIQsCgGB%2Fp5bX2j69%2F&X-Amz-Signature=a1830b57285311500520cf292ebe25cb71db2c37345bca7eaa152af699be152b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKNMUK2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEiryIWJLPiqR1G0I5SDg0qgnVCMZ7uhEpFUe3bCLXegIhAOSynlkjBWfXJKrXf%2FAtpno949InRt3fk%2FS6sHpNKFalKv8DCBYQABoMNjM3NDIzMTgzODA1IgwIqR%2BK8Qj124bb010q3AN3%2B4IXQF%2FyIDvMSoDpLrLOZUFT%2BSr%2FYKTE23TU%2Ba2quFQ1kfHmO%2B34%2BRN8euw0KclZBdU%2Bev8yqgG6Zkj7IdG9PjlYJOU4I1Cx%2B9R%2F4eZgcsnb54fsY0W8ZyNSq%2BAbO9FAIB7g%2FZroJP8QMcIVOjRsgDXELuMPzmqv1X%2FksuYXkwNmPHt2kLLmzA%2Bnb1suEslNQkD5iwFnA6qYa4kC3xhL%2BtWlQxldL4koL3y7SWB68FP6Z7EaFPDXu5%2BU1H8ei0itvGeQSgVoCXkP%2BHhh24QusV09rctXNJbEDhvD9k6na9Rb4aAwTzGylWTq9tKY60HTVL4yb9TKrdewVpXknwne2xf3Ffucxx5z3EOig6ysFV%2B43%2FlmhjvJSGHQqqGzTSEIcNO9eKBxGqv1OKAQ52Ph6s87tdNwtGbVHhvVn4v8AVxYAUG84t8x6dcvsE%2FFtT2GwvV3VzZ9azBqytPVgoDlO%2FcsT8aoZRAhjaZukRiG1YX5H2sXKksaGww4WCbLya8T9Rt8g3UrdDp7yzpKWJlytZpvAXp1MTUU5pphiZV0a%2BNTaWBFn20V79ZhorIHRaOI%2FtaZQmXBMW2Zc7ajP57m4vMbiiMhUyq9b32rnnMvFYOYSSWx01BPtE4pdzDu7tW%2BBjqkAZfp0VEc%2Bg9%2BEz0aEcxqZH0HtW2HjmeXxx9m4aH%2Bc2Lvr%2Fm1HV6ay9G1KUipKWinaMXWb6Y%2FpTJ5yvP1OVCsoLHvuYKvlNSBJ%2B89N8X7IYMjqMFRbC3flmU2MS5AY2KX5zlTI54RW2SGo%2FHRkxSsrFg0LkBkFAMP3aei4fyy9OKMkTpmMyiKCTJxTkUctSjiI5%2BXb%2FGaV6%2FIQsCgGB%2Fp5bX2j69%2F&X-Amz-Signature=f2d69c9e11841d004abd2ded4b40f13414cbfed43d254b0a7fe53c4b7230cf20&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
