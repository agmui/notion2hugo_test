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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THNYCQLC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtsfk56cBXzeyIVAeF%2FWekG%2BIJz2itI3RM3hO82mVVPQIgDmAG35z3OiwEq9yllk4QAVEdUThKnDgHjIljNzmXS0wq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCJ0ApOpTgaW7j4BBSrcAwXxVB1QWjDA%2FXK0gYLrze7Jkp1XuGc7R08Z%2BrN7PuMYObZgOqrixTFqcHGJ9PNq5%2BU8Y6oEEOcGKUcwpLUp7Kyc7ot9LF0PdtZClXoiNVvvkYA23uGy%2F%2B0vcbbvfmHYrBa0C5xhjNyCNF0ZVG%2BNpiuFISKIElujrlLdrbQ614NJY459NxrKBHczAZzOrLWa2f3z5GWdvtqKyVqjDoNi2I0LyYAFkwAQVgXPk2KDi6CJKoS57JTbL92xkSM7yRxNsRC%2Fh%2F60jLR59gq%2BZ8wC6BiYwciWyXWKGm0iZU5r4Xi8KZ2ejFiEx0SAZfiar9I7J04kzH8eOs9nLl2pwqe9KnHCEX0LYzP1wJM%2Ff3K1kqQeqjB56HyPBlLMQMP21aQY6fho5kxhM1Q6UiDoTmhuCNGjLPPq1ArnlJcfyeASuX9wZ6UhdIWOL1O8fQM70nRK8fKw1RxL%2FUvExmW%2F7aSaM4rUPMjoEgYCtll7Kpv2CLOlzpsd%2FAEd3ChxcBRF1o%2BOcA7Q0dXmA%2FOFl9RQAWgb%2FW1G097rb3RmuxX8aUk76iE7V%2BQIg9HIkFU4NxVFkwpmxRO7%2Feee%2B34olfeilJf3TmGv4hXiDgL2v0t6OjMP091imXbJHPXR2p6j1ANfMLX0qsAGOqUBK1HqUDsRlhFZxkA9J2QI9gnhMgihWtlTdEXKZUe4lEwMxtnXFOgdNmZJqRmcyRRryfak0opQ0HlzYjKUhLjJSYN0Auv7RPhQPQn%2FgtjOUVWwgmmW1aQ0I6%2F815mQNiFH4HE4Jrcyf6A2C1Typgao16TBMtdaxDk2azUn4OfG9k%2BznaeGb7cVUnlG%2BPe%2F4aD0JouY3ieMjcQce3GqtzOuo0%2FV5K07&X-Amz-Signature=77e653aa70e6c097f584f2e02e728bda95ce0d4a9710b48b41eafa85f70f7e33&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THNYCQLC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtsfk56cBXzeyIVAeF%2FWekG%2BIJz2itI3RM3hO82mVVPQIgDmAG35z3OiwEq9yllk4QAVEdUThKnDgHjIljNzmXS0wq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCJ0ApOpTgaW7j4BBSrcAwXxVB1QWjDA%2FXK0gYLrze7Jkp1XuGc7R08Z%2BrN7PuMYObZgOqrixTFqcHGJ9PNq5%2BU8Y6oEEOcGKUcwpLUp7Kyc7ot9LF0PdtZClXoiNVvvkYA23uGy%2F%2B0vcbbvfmHYrBa0C5xhjNyCNF0ZVG%2BNpiuFISKIElujrlLdrbQ614NJY459NxrKBHczAZzOrLWa2f3z5GWdvtqKyVqjDoNi2I0LyYAFkwAQVgXPk2KDi6CJKoS57JTbL92xkSM7yRxNsRC%2Fh%2F60jLR59gq%2BZ8wC6BiYwciWyXWKGm0iZU5r4Xi8KZ2ejFiEx0SAZfiar9I7J04kzH8eOs9nLl2pwqe9KnHCEX0LYzP1wJM%2Ff3K1kqQeqjB56HyPBlLMQMP21aQY6fho5kxhM1Q6UiDoTmhuCNGjLPPq1ArnlJcfyeASuX9wZ6UhdIWOL1O8fQM70nRK8fKw1RxL%2FUvExmW%2F7aSaM4rUPMjoEgYCtll7Kpv2CLOlzpsd%2FAEd3ChxcBRF1o%2BOcA7Q0dXmA%2FOFl9RQAWgb%2FW1G097rb3RmuxX8aUk76iE7V%2BQIg9HIkFU4NxVFkwpmxRO7%2Feee%2B34olfeilJf3TmGv4hXiDgL2v0t6OjMP091imXbJHPXR2p6j1ANfMLX0qsAGOqUBK1HqUDsRlhFZxkA9J2QI9gnhMgihWtlTdEXKZUe4lEwMxtnXFOgdNmZJqRmcyRRryfak0opQ0HlzYjKUhLjJSYN0Auv7RPhQPQn%2FgtjOUVWwgmmW1aQ0I6%2F815mQNiFH4HE4Jrcyf6A2C1Typgao16TBMtdaxDk2azUn4OfG9k%2BznaeGb7cVUnlG%2BPe%2F4aD0JouY3ieMjcQce3GqtzOuo0%2FV5K07&X-Amz-Signature=9ae2061eb40892c6c275d0b2e5ada2504bf0112de4fb4385a63e85b0af46b197&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
