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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZYDPW7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0mvwu9jjAeHF47BMi1UYlRmxjdu%2FQmuyD0Ba2pz0SyAiEAgTUOveqhl0x8pUBmDIU5lKvBBNS2kohQGDmOZNSUSfoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlYo7MQH7xc3AzbmircA5dQimVu8MnbbdAB2fRS4z%2BKriNgg9xPsGXSOPmbt2XADKtwXVux%2B2er5FGK0qz575BM%2BZhY1SLMimw8mCoBUbXq0ivGEY2pHfSN8Zx0abOx4IyviotNa0LAfgmCYz%2FYZo%2Bd68nBpwrVfog0LrO9jesdpKlNqRhYL7JlDsuT1si4aGNbQvUTouNFE9IM3pm1EUoEbZD4aYXSYNOFpkiwyOBVDKAHgKtlrdUPR3V6vA74HmZIO28BMa%2BebgnfpTPt%2BIXNbJOf9JXxCNJJm27gDlZjpEwOoBFblgOheehQIasNiLGK4HTfZM2GdOMHAAUYhk0Pynlk0OQzF%2F5RB2UUaHyDXwt4sENjb4P8ZHp0DA5%2Bfm%2Fd5aEsS1NA6pWAt7gP7UqwL4rl1fWSMyLNRfEuGuezOAjXX7DTtz6hkqrIZaSyMdTwaEVpGSvQPXESZAahjUVXCsQJdw8en4%2FYlM%2FgeFRnKib7GuCfaoF%2B9zCO%2FhlMKp%2F8U4jYv4ASOuz2fHiIRGUff24a5Xa9NvUFTGBnolQNzzeOAy%2FjP8rFHf1IATd3fHxkwOC1iDcWnttls%2BG8%2FKcu5bTSfXFKxf0To%2FUYAY97mNCdsG5tMIuRmV5C24w6JvZ7ehV471NtqWH5MMfsscQGOqUBU8Ls9JjLRVjzm8GJ%2BbruDSo6a%2BZi4tMBpSckOBS8QwOFLghqpPn%2Bhuuiizn5BaRsiglqtK5xusAnllGdRbt39Y7tnUkq5dDViRVrd8fqww%2BnGhKa8g4hwkgomrscemrPtsYhn1EZRntMySwSL1TUhMC49ongmHd%2FBhUP8LqO1BnfKXO4dp%2FgaB%2FHkleb4CeEiqQHcoIXP2ShtkyNYVgLm6TPFg99&X-Amz-Signature=f65e005a6a0e9deaa92cd42bc1695d46f5d711acfef63518c88b6e5e87da3c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZYDPW7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0mvwu9jjAeHF47BMi1UYlRmxjdu%2FQmuyD0Ba2pz0SyAiEAgTUOveqhl0x8pUBmDIU5lKvBBNS2kohQGDmOZNSUSfoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlYo7MQH7xc3AzbmircA5dQimVu8MnbbdAB2fRS4z%2BKriNgg9xPsGXSOPmbt2XADKtwXVux%2B2er5FGK0qz575BM%2BZhY1SLMimw8mCoBUbXq0ivGEY2pHfSN8Zx0abOx4IyviotNa0LAfgmCYz%2FYZo%2Bd68nBpwrVfog0LrO9jesdpKlNqRhYL7JlDsuT1si4aGNbQvUTouNFE9IM3pm1EUoEbZD4aYXSYNOFpkiwyOBVDKAHgKtlrdUPR3V6vA74HmZIO28BMa%2BebgnfpTPt%2BIXNbJOf9JXxCNJJm27gDlZjpEwOoBFblgOheehQIasNiLGK4HTfZM2GdOMHAAUYhk0Pynlk0OQzF%2F5RB2UUaHyDXwt4sENjb4P8ZHp0DA5%2Bfm%2Fd5aEsS1NA6pWAt7gP7UqwL4rl1fWSMyLNRfEuGuezOAjXX7DTtz6hkqrIZaSyMdTwaEVpGSvQPXESZAahjUVXCsQJdw8en4%2FYlM%2FgeFRnKib7GuCfaoF%2B9zCO%2FhlMKp%2F8U4jYv4ASOuz2fHiIRGUff24a5Xa9NvUFTGBnolQNzzeOAy%2FjP8rFHf1IATd3fHxkwOC1iDcWnttls%2BG8%2FKcu5bTSfXFKxf0To%2FUYAY97mNCdsG5tMIuRmV5C24w6JvZ7ehV471NtqWH5MMfsscQGOqUBU8Ls9JjLRVjzm8GJ%2BbruDSo6a%2BZi4tMBpSckOBS8QwOFLghqpPn%2Bhuuiizn5BaRsiglqtK5xusAnllGdRbt39Y7tnUkq5dDViRVrd8fqww%2BnGhKa8g4hwkgomrscemrPtsYhn1EZRntMySwSL1TUhMC49ongmHd%2FBhUP8LqO1BnfKXO4dp%2FgaB%2FHkleb4CeEiqQHcoIXP2ShtkyNYVgLm6TPFg99&X-Amz-Signature=85e4aeb746115b98f1c0869fae4cf1544b10a7f1cfefb54496d47a47c6b8fef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
