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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M57QAIZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIACXKr2VRPiUilgLwb9fHG%2FGWU8FHbruZwn8S%2FJgMdVOAiEAq7Wnb8FX1%2BLfsueUL1kMZ6OlZXLS0TeVWE%2Fs989Rjdgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDD0oNdrY1Xwjiwe1USrcA7CtvDtUjxOZME9EKrgL22Prq5qCMlTv1RqIjFPMcjSvOczW8aZHTOQLeLN1dQ8%2BR9OMirX9KKBAy5AUFd1dGpgFhkiS%2BltAnLAsRrYgSdMNupjR84lmmFqcoOpSCei764JgdEZRiVZham9Qfd7%2Fb2Zl9Wzkhi%2FkZY3UnW3youV2J3BXhSSak%2FGGreD51bmYyLtynYTgUSTVhl13Kb42NkrGXwMBvE%2FMmoZJsx4mfX2uqLull2qqvYt%2BrORS9R1L6GGRBy30wOq4wMEc4%2BFe29u%2Fg8itrRNIpokMS7d9Wv3z%2FdjuNEsStH6iU8MUkHLTzuLWz08vtRVhMDgvA4LE%2B7%2F%2BZD76so4sv7MYe5HtV0F%2FUVvL6yd%2BSnkWA8zXP8gz9PyeHgsasX3kI3SFAxl%2Fs7%2FOoLRVE97CTjMz04lvWd1mLCtjH8q3ex6IBU1rurtiloiWPU2sDqNV8994Ck%2FSmyzyhJp1heXhwbhWatKTUYHlXr%2FCpEiQTfSbIk5SHf59u7%2FaT9A20SwGt%2F4choF4aED89R7xmin1RPNGxWos5JmPhRam8mXr%2Fn9munofJ4PuACbHlZ%2FVfH9qBxsrOfxu%2BzF1DHdTkyhWMSQLox4EQO8udfDeykes6V9M7oHXMInJmcEGOqUBsJhaCvhoM5Wqg%2BzfYRkpzlm4KvMoETcNqG67ZrefvYctI4JC7fRcfK2pna2P2KnA%2FDkWksLJOTad9AXekQR7xsoJHSelVaTCXvMD8xeHfrpD3Hfmav6Hcv%2FbwFVmGwRqMHIqTkrJv3%2BFdMq5QEePtzR%2B%2BSwql3QicH0D%2BFX5%2BbpV4v%2Bsnrr3OoHFOrgPi0gM0aJqrQp8cPtJwXbYzpvD8a61Wx8y&X-Amz-Signature=628a6e889a1620e8a63d99729968c1b27e09bdfa668973efd975c278d9f76748&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M57QAIZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIACXKr2VRPiUilgLwb9fHG%2FGWU8FHbruZwn8S%2FJgMdVOAiEAq7Wnb8FX1%2BLfsueUL1kMZ6OlZXLS0TeVWE%2Fs989Rjdgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDD0oNdrY1Xwjiwe1USrcA7CtvDtUjxOZME9EKrgL22Prq5qCMlTv1RqIjFPMcjSvOczW8aZHTOQLeLN1dQ8%2BR9OMirX9KKBAy5AUFd1dGpgFhkiS%2BltAnLAsRrYgSdMNupjR84lmmFqcoOpSCei764JgdEZRiVZham9Qfd7%2Fb2Zl9Wzkhi%2FkZY3UnW3youV2J3BXhSSak%2FGGreD51bmYyLtynYTgUSTVhl13Kb42NkrGXwMBvE%2FMmoZJsx4mfX2uqLull2qqvYt%2BrORS9R1L6GGRBy30wOq4wMEc4%2BFe29u%2Fg8itrRNIpokMS7d9Wv3z%2FdjuNEsStH6iU8MUkHLTzuLWz08vtRVhMDgvA4LE%2B7%2F%2BZD76so4sv7MYe5HtV0F%2FUVvL6yd%2BSnkWA8zXP8gz9PyeHgsasX3kI3SFAxl%2Fs7%2FOoLRVE97CTjMz04lvWd1mLCtjH8q3ex6IBU1rurtiloiWPU2sDqNV8994Ck%2FSmyzyhJp1heXhwbhWatKTUYHlXr%2FCpEiQTfSbIk5SHf59u7%2FaT9A20SwGt%2F4choF4aED89R7xmin1RPNGxWos5JmPhRam8mXr%2Fn9munofJ4PuACbHlZ%2FVfH9qBxsrOfxu%2BzF1DHdTkyhWMSQLox4EQO8udfDeykes6V9M7oHXMInJmcEGOqUBsJhaCvhoM5Wqg%2BzfYRkpzlm4KvMoETcNqG67ZrefvYctI4JC7fRcfK2pna2P2KnA%2FDkWksLJOTad9AXekQR7xsoJHSelVaTCXvMD8xeHfrpD3Hfmav6Hcv%2FbwFVmGwRqMHIqTkrJv3%2BFdMq5QEePtzR%2B%2BSwql3QicH0D%2BFX5%2BbpV4v%2Bsnrr3OoHFOrgPi0gM0aJqrQp8cPtJwXbYzpvD8a61Wx8y&X-Amz-Signature=3ac9ba1fed55ebea03ff312acf253be04b051eb326353df972d463c0b9f7d59f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
