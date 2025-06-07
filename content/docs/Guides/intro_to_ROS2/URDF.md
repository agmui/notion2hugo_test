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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJIQFRJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0rQGnBeH90LWFZFRzJNwnneazwc2wxATXyvqVcltbJwIgYLB8%2BBzj0fzuIZ8YQNLL%2FSsYb9s7lLY38qiyYutTMjIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPs1iBeejyw%2BwmC%2F3ircA3Mnb3PXhxK6FvzCEggbq4Qo48%2FELHBasjSObOKcAx7T%2F8aB%2FwjmCF4HyxLkoXPFbyXKWBGOos2NYl3xEmWGUUfX96wU92bP9BRQS0jswZOJ74Ka9nLwvWh5xs%2FqtyFCl45BJb2rn4EY01qF5ZQ4Hh%2FYmUodssd22LpUkYZv038JIG5qoS9q7g5ildRBAHyKjrp7CaeqC10b6suJkpAylaslzvA1Wu7uSSJfzAlara8tnwsRw9hkcUvRK%2FIBrSDt5zS51nrAQ%2FsRVYAhmvr9Zso3qSb%2FN7RKSY5hdkOCRqSj2tEMUyvypCuAETq1UfaFjiHWCtFoFAHj7TeGx1G3kgPAg4s70%2Fx8T4GW2Xp3d4TSwb3t%2FTilVADKM%2Fqyv%2BqJuMxraVaOVWCCXs%2BZLltv%2F%2BVcxw5OeYd29XiMyK9YKbz0tLJu2mvWyMGwP%2FISoSyzXHLhkL%2F1qTFW%2BQtpMtgShQcrAUb9ab5muHOldH60926XXc5khGD1iQWnS6CoAhZ5EmmdGUuSyyw3vAHjgKv8pqOlJX1OHilLobGxkmDTnZzRtyMP7GbY9oBxKuZwVFepDULPKD1H8j1Lv%2FqF%2FBZuE6W0ueBjPFw91LhBcaln4aDtjAtWjulQq0rX92ChMIrTksIGOqUBdOk3F6ESD1pyQxhKjWcf7f1n1efOtPCM%2FvCABaJinmlXVs6N6kse2i8S0j8cTCxjmAnXqrqXwXJ83vDKFxVEIXwEEruiFpU4hKCA%2FsPfnRDMMpVGz7O%2FXFF3j%2Bd8b%2FPYVh%2BGzbP6maztOKjme9PD21o3EZLIRRHJSUWlpueH50BtFqvA5knkL%2BVjFhLwNVWRfCF%2FoZ%2BhFS50eg%2B5F7b6wbg%2FbdWJ&X-Amz-Signature=d1f6177905f273cb87d84c5615410d48c4d539f7198bcf8db86eb99d652d4dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJIQFRJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0rQGnBeH90LWFZFRzJNwnneazwc2wxATXyvqVcltbJwIgYLB8%2BBzj0fzuIZ8YQNLL%2FSsYb9s7lLY38qiyYutTMjIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPs1iBeejyw%2BwmC%2F3ircA3Mnb3PXhxK6FvzCEggbq4Qo48%2FELHBasjSObOKcAx7T%2F8aB%2FwjmCF4HyxLkoXPFbyXKWBGOos2NYl3xEmWGUUfX96wU92bP9BRQS0jswZOJ74Ka9nLwvWh5xs%2FqtyFCl45BJb2rn4EY01qF5ZQ4Hh%2FYmUodssd22LpUkYZv038JIG5qoS9q7g5ildRBAHyKjrp7CaeqC10b6suJkpAylaslzvA1Wu7uSSJfzAlara8tnwsRw9hkcUvRK%2FIBrSDt5zS51nrAQ%2FsRVYAhmvr9Zso3qSb%2FN7RKSY5hdkOCRqSj2tEMUyvypCuAETq1UfaFjiHWCtFoFAHj7TeGx1G3kgPAg4s70%2Fx8T4GW2Xp3d4TSwb3t%2FTilVADKM%2Fqyv%2BqJuMxraVaOVWCCXs%2BZLltv%2F%2BVcxw5OeYd29XiMyK9YKbz0tLJu2mvWyMGwP%2FISoSyzXHLhkL%2F1qTFW%2BQtpMtgShQcrAUb9ab5muHOldH60926XXc5khGD1iQWnS6CoAhZ5EmmdGUuSyyw3vAHjgKv8pqOlJX1OHilLobGxkmDTnZzRtyMP7GbY9oBxKuZwVFepDULPKD1H8j1Lv%2FqF%2FBZuE6W0ueBjPFw91LhBcaln4aDtjAtWjulQq0rX92ChMIrTksIGOqUBdOk3F6ESD1pyQxhKjWcf7f1n1efOtPCM%2FvCABaJinmlXVs6N6kse2i8S0j8cTCxjmAnXqrqXwXJ83vDKFxVEIXwEEruiFpU4hKCA%2FsPfnRDMMpVGz7O%2FXFF3j%2Bd8b%2FPYVh%2BGzbP6maztOKjme9PD21o3EZLIRRHJSUWlpueH50BtFqvA5knkL%2BVjFhLwNVWRfCF%2FoZ%2BhFS50eg%2B5F7b6wbg%2FbdWJ&X-Amz-Signature=02f9d5e501a16b553e32fa0c29252c1ebebea42262658f3e910d1b6464325aff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
