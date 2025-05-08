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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUSEKZW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV15fpMrlAAGCs%2FdOaFVSxNpHxlO6FFHd3wkPFcGlehAIgK9doEOJ0cq1oh%2Fha8ZsMGgIduLfZ2gsEiF35R8gIhEAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDA50cwNz9mrEUfSiECrcA1JLtLoYuACH4a3AVBu%2FYy2bKhiS8PhIat73Tlv9AW2q4L4%2FdnpXrfNVf3tuxpbwXuoKbMY736iwvZecYEKjLtj7kqANgZOfdBxNAugd9kuKhYYegqKis9yEhDWdY9d7svm2A5gKmCSCZrR4GjnUgSbrLb0Yk%2Fs1J0F0bT1vxctCR7Ln7e4AgDpGc6tcA9JPEm2UNXXu6bV3DujUNBSRLbn%2BGPGBYb9quPFDCZcYgD6gUV7pBJ%2BU48xUf%2FE7j%2Bi9Mnqp5C7ND48r6MfCYlyb%2BPAWQfugCm%2FZCHrnEXG%2B%2Fbs6BE%2BgDSQXT2H5dsLB0CsIWbjEzjwq1PlgvD6oG9Ig3Q4mGssxCdkI70Uuj7ObxU878bAsKRnizsolmdJRs7J0G6JJ9E7eL5otgzDA%2FBLHXL1XeZysVBxZtsCykaY04T1sO5hIMd2fUUpxyQS8zmf0jTCwivvpUBHiWlBsu7PdruQq6g81cB5QsBP37TCuIG%2BkSj8tIIJxkY5CgF5w65z0HADhZAb%2FN%2BSAZVJt3eDbELeDE1EagiW178OH%2Bxg7H2CE9iM9dFzL%2Fz1%2F4zlWwlxZfDaT6QnXV1VRDjO6NkfAUk0izvagcrircmYezpDJesz6tY9MelYFcalZMLhQMMfg8cAGOqUBNvLw2CcT%2FRSTmgHIl5j7nF0g4L0UZhhn1N1cBVvD%2B%2FJsWSi%2B7HT39DwoqFqdIyr5U2Ug5HTcP4ehXwooWnYeZg4oKDhO2sCELRKY%2B1Sl1LylrUCnYTisI3DgWaier94Z%2FguChYR8dtXy4k2KQ0Xlu%2Fwv6%2BDIqZ2XfLEm77ydliGUrGNQDoXJNBXKwoewv5ZKr6HA97MwC90UuwxiM1qFyaiR2i3V&X-Amz-Signature=1322ba879aa216735a5d8e9e9e277435ee4819b096430bc25b195f28bd490252&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUSEKZW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV15fpMrlAAGCs%2FdOaFVSxNpHxlO6FFHd3wkPFcGlehAIgK9doEOJ0cq1oh%2Fha8ZsMGgIduLfZ2gsEiF35R8gIhEAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDA50cwNz9mrEUfSiECrcA1JLtLoYuACH4a3AVBu%2FYy2bKhiS8PhIat73Tlv9AW2q4L4%2FdnpXrfNVf3tuxpbwXuoKbMY736iwvZecYEKjLtj7kqANgZOfdBxNAugd9kuKhYYegqKis9yEhDWdY9d7svm2A5gKmCSCZrR4GjnUgSbrLb0Yk%2Fs1J0F0bT1vxctCR7Ln7e4AgDpGc6tcA9JPEm2UNXXu6bV3DujUNBSRLbn%2BGPGBYb9quPFDCZcYgD6gUV7pBJ%2BU48xUf%2FE7j%2Bi9Mnqp5C7ND48r6MfCYlyb%2BPAWQfugCm%2FZCHrnEXG%2B%2Fbs6BE%2BgDSQXT2H5dsLB0CsIWbjEzjwq1PlgvD6oG9Ig3Q4mGssxCdkI70Uuj7ObxU878bAsKRnizsolmdJRs7J0G6JJ9E7eL5otgzDA%2FBLHXL1XeZysVBxZtsCykaY04T1sO5hIMd2fUUpxyQS8zmf0jTCwivvpUBHiWlBsu7PdruQq6g81cB5QsBP37TCuIG%2BkSj8tIIJxkY5CgF5w65z0HADhZAb%2FN%2BSAZVJt3eDbELeDE1EagiW178OH%2Bxg7H2CE9iM9dFzL%2Fz1%2F4zlWwlxZfDaT6QnXV1VRDjO6NkfAUk0izvagcrircmYezpDJesz6tY9MelYFcalZMLhQMMfg8cAGOqUBNvLw2CcT%2FRSTmgHIl5j7nF0g4L0UZhhn1N1cBVvD%2B%2FJsWSi%2B7HT39DwoqFqdIyr5U2Ug5HTcP4ehXwooWnYeZg4oKDhO2sCELRKY%2B1Sl1LylrUCnYTisI3DgWaier94Z%2FguChYR8dtXy4k2KQ0Xlu%2Fwv6%2BDIqZ2XfLEm77ydliGUrGNQDoXJNBXKwoewv5ZKr6HA97MwC90UuwxiM1qFyaiR2i3V&X-Amz-Signature=fc77897fe6b8756fa3c3fd677c00a056de9ec46375b61b0b6c1a63547bf03117&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
