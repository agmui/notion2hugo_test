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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMSIIEP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp7MqmawR8EHxbeQvqY2%2BFHMtABfbANeI5Dhn2SRAZ4gIgb7U15Lfi3b4TQq4oBih1HsrbHwPhSy39dCu4xe1v4XEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLWTggCyKoLbMykqfircA7GKkzpUt49MQl8GYhkH00RGeCqCmxi8ftiYkTjJhtNeNaIZ3w1jW%2F%2BPfRnCT6GSu81CbKz3oWC%2BERLm8Fas0qe7d9fh7Z0u906vgO%2FSvgfZtDQivLx7oFi3tUoYb4ZxAdmYh5vgtMZOHaKzxcpzZP5%2Bkfql1Uz4qTUOOJkbcRWDm0gEympQ3v%2FmNu0E50w9Q00wrlX1ULPuA2csp5ZKZiZn0at7h2MwHASpnL3GxnW80PJSIm4iyd%2BU2ZKeeMr8ogpU5K%2FaWUU6msznqbo6IIgZkglV3wmrNcHDsE2E1wq%2BfL44%2BdUu%2BUdnTSoYy%2FeQcx8gjpWN%2BXrCzkA7CMbXb%2F9yBgrryLwbR9qI5mKREtEr81GYEQr0rgZTgVbza19rIzJT6qZyvDFO8Oqjc%2FAV7LmkPi0xqjxYd2dmsVZRMQqsQxMzFwnl1YypI9M12dfsMua%2FjUjkBb7024C5HTUAiZfF45hZzkR4bBfxOEwtsbUkpdjmwV3wryNMUyogyuVejugMV7GrbWfT%2BcGf5utlc6F1Cy01YUxW7aMZe045eTNhFTDkymE1flnQFHVEaTjMcXdhKBp%2BtyHmfkkUeJGI147ioe%2Bnwumrxdz%2BU9ZHwwWoi4UfJbQOO6uMrWxBMNPY2r4GOqUBbDT9PF%2BTRja4FfSBCbl29fypRZl%2B4zeLhY9HBoGXH0%2FGubiOEpzLWz3SoVY3LKikdfCG84Rixy%2BbywfD3C9QOEBWg7iflMN2ZKUnMZm3GrwdBABNpcQ9tVSOkiqav4nbE5i44Z%2BTp08eZUTvJhWaH4Hu0NEZ8NaW%2BC5EEyNWN%2FheJxahiE4IszU48QkypxcvfRT2W3F8C26vY%2F7IVkl8%2B%2Fg1NIHA&X-Amz-Signature=be8139ef2ca69488af6ae9e127457a92b35f36d3a75cb7194830dc03094f34e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMSIIEP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp7MqmawR8EHxbeQvqY2%2BFHMtABfbANeI5Dhn2SRAZ4gIgb7U15Lfi3b4TQq4oBih1HsrbHwPhSy39dCu4xe1v4XEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLWTggCyKoLbMykqfircA7GKkzpUt49MQl8GYhkH00RGeCqCmxi8ftiYkTjJhtNeNaIZ3w1jW%2F%2BPfRnCT6GSu81CbKz3oWC%2BERLm8Fas0qe7d9fh7Z0u906vgO%2FSvgfZtDQivLx7oFi3tUoYb4ZxAdmYh5vgtMZOHaKzxcpzZP5%2Bkfql1Uz4qTUOOJkbcRWDm0gEympQ3v%2FmNu0E50w9Q00wrlX1ULPuA2csp5ZKZiZn0at7h2MwHASpnL3GxnW80PJSIm4iyd%2BU2ZKeeMr8ogpU5K%2FaWUU6msznqbo6IIgZkglV3wmrNcHDsE2E1wq%2BfL44%2BdUu%2BUdnTSoYy%2FeQcx8gjpWN%2BXrCzkA7CMbXb%2F9yBgrryLwbR9qI5mKREtEr81GYEQr0rgZTgVbza19rIzJT6qZyvDFO8Oqjc%2FAV7LmkPi0xqjxYd2dmsVZRMQqsQxMzFwnl1YypI9M12dfsMua%2FjUjkBb7024C5HTUAiZfF45hZzkR4bBfxOEwtsbUkpdjmwV3wryNMUyogyuVejugMV7GrbWfT%2BcGf5utlc6F1Cy01YUxW7aMZe045eTNhFTDkymE1flnQFHVEaTjMcXdhKBp%2BtyHmfkkUeJGI147ioe%2Bnwumrxdz%2BU9ZHwwWoi4UfJbQOO6uMrWxBMNPY2r4GOqUBbDT9PF%2BTRja4FfSBCbl29fypRZl%2B4zeLhY9HBoGXH0%2FGubiOEpzLWz3SoVY3LKikdfCG84Rixy%2BbywfD3C9QOEBWg7iflMN2ZKUnMZm3GrwdBABNpcQ9tVSOkiqav4nbE5i44Z%2BTp08eZUTvJhWaH4Hu0NEZ8NaW%2BC5EEyNWN%2FheJxahiE4IszU48QkypxcvfRT2W3F8C26vY%2F7IVkl8%2B%2Fg1NIHA&X-Amz-Signature=75a61546e24b38c8a287f62ab8629f5fe4f7d201f322dca983b3df47eba711a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
