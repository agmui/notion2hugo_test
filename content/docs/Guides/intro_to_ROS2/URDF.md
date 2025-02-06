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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AOD4NF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEYIIra5j3u3ljX5gcwaGKbWdEzzr7qkW1%2F3fyNPKncFAiEAodlXp3JCM456w2e8I%2FFFw9q0guOoFWZFYzNEGqg530Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD4FniCYkX4HHxW%2BeSrcA%2FV0fZF7R0g2XzlwArJhyAuRPLp6ypGd4966i9O7%2BZoiCHuuV3dX8Awa%2BpT7lNZg86iwyj9c%2FTxUIFy8tQ%2BW3ud%2FFMhPN1UITs6b8tbd1c8DVE80oQcSIahjxcU6q3o3nZWaHOr5FZ10fvfQWi2QoNquGwC04lQ1W9%2FZFhnU6RJU6VKEOSHG1FyElXItX6Dm953k1%2B%2BcShcfsAUfsHxjn5MoNTB0s2KuN1%2FP49Wi23oo0pOVznqpMgSf6vJrscxeKSlzlP1TXLqR1w4yDdvGH%2FodsPppEHS6DlzrhIJymYNcxqSH2bJcSLYGUsNvSrksN%2FvuZwBwWzSY97CdO6yJfdN%2FzZv3Bu7yGXI%2B5SK7uxwD86XgsyoGhjjL7%2FL88mhy5OusD4vobe5KQwEi%2B7pZm%2FVrkHjJiL0BUUmnrB9dBr%2FEC1tcx1KEd2Iru4k1QuzGKNeegsPxQ6Ani%2FIUVuNjhLYmX7CgeAUUE9RE490VPaeCYubGNZEhfSEZe9ZFvyUC%2F855kRl64ePBmRNnTNLcldZmd3nmBdFvsExw8sHWlKPeOm%2B7e5jZNbRu7dN7zh8p8wS5DqeEJqXQzQv4jf9N2a%2Bv9EnSUxF%2B8KkeGbmOsbsTQCShvq4Z0J5ALjLGMN7Ekr0GOqUBPlD6GhAZ3KokjABrgZ4herPiH9206qo4qoX6sELRU5%2B9090p3MWpLXqVekYTPRbKIFOWNy5NimEuHq3CmvmnZxuTygf0RXzZvDJifwLVbIJZThrxBnCxzUGVvsAGm0Rre0MsHJoQxx552IqmeomFWCzdqM0xBRSEIHatPLd9luEoAqOO8yqWWvUNyEPkjyR2bNdrCV%2F1SVJV3aYB9A1obWY9QB%2Bf&X-Amz-Signature=0865b1def584077655cd8347a234fd51fc4381ef136e74f39bb9e14e15fb278e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AOD4NF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEYIIra5j3u3ljX5gcwaGKbWdEzzr7qkW1%2F3fyNPKncFAiEAodlXp3JCM456w2e8I%2FFFw9q0guOoFWZFYzNEGqg530Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD4FniCYkX4HHxW%2BeSrcA%2FV0fZF7R0g2XzlwArJhyAuRPLp6ypGd4966i9O7%2BZoiCHuuV3dX8Awa%2BpT7lNZg86iwyj9c%2FTxUIFy8tQ%2BW3ud%2FFMhPN1UITs6b8tbd1c8DVE80oQcSIahjxcU6q3o3nZWaHOr5FZ10fvfQWi2QoNquGwC04lQ1W9%2FZFhnU6RJU6VKEOSHG1FyElXItX6Dm953k1%2B%2BcShcfsAUfsHxjn5MoNTB0s2KuN1%2FP49Wi23oo0pOVznqpMgSf6vJrscxeKSlzlP1TXLqR1w4yDdvGH%2FodsPppEHS6DlzrhIJymYNcxqSH2bJcSLYGUsNvSrksN%2FvuZwBwWzSY97CdO6yJfdN%2FzZv3Bu7yGXI%2B5SK7uxwD86XgsyoGhjjL7%2FL88mhy5OusD4vobe5KQwEi%2B7pZm%2FVrkHjJiL0BUUmnrB9dBr%2FEC1tcx1KEd2Iru4k1QuzGKNeegsPxQ6Ani%2FIUVuNjhLYmX7CgeAUUE9RE490VPaeCYubGNZEhfSEZe9ZFvyUC%2F855kRl64ePBmRNnTNLcldZmd3nmBdFvsExw8sHWlKPeOm%2B7e5jZNbRu7dN7zh8p8wS5DqeEJqXQzQv4jf9N2a%2Bv9EnSUxF%2B8KkeGbmOsbsTQCShvq4Z0J5ALjLGMN7Ekr0GOqUBPlD6GhAZ3KokjABrgZ4herPiH9206qo4qoX6sELRU5%2B9090p3MWpLXqVekYTPRbKIFOWNy5NimEuHq3CmvmnZxuTygf0RXzZvDJifwLVbIJZThrxBnCxzUGVvsAGm0Rre0MsHJoQxx552IqmeomFWCzdqM0xBRSEIHatPLd9luEoAqOO8yqWWvUNyEPkjyR2bNdrCV%2F1SVJV3aYB9A1obWY9QB%2Bf&X-Amz-Signature=cc7c3a315302cb8f80515f6b43bc4406240da01980d97f08184f16ab81569c74&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
