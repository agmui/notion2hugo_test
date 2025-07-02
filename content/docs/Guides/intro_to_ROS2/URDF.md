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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVK5QWL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWuh0KWiPIeqrTA%2B5Poi7HpebKyY6%2FNqxCWP3y79gmWAiEAy%2FlWZ%2FVEw0Y6lRc6qFNt0CjGjTP9OfM4Pf2Qxp9D2nEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEc0T6WzQN07PcIuyrcAxgIRjr8NBfXlgj8H%2BqIVv0DyRTzuxtCQXpM7XGgrT633JfODTk1AvxzWeRli2fHZ6SsYsLjYGHsPV3jcanUvxtqc40imv6QxX%2BZDQVp%2BylEPfLd8%2FDHuftqFPWJoEOjWgHBjgGLamVFcVoIhXgZpkv61Dzszd34HvAMcFwAYrJtIt5YD8erZnNCo%2BJCI69SxqFMpTIU6KOs4W1dQOMebulmsYimEVekFKd%2BigeIfHStA7QpDZu6fXCESwK9arQPGJfyoQP4e4aXJwkFI57xzDD1ywBxke9nFgDW80cFimO6KvzSG7dzophHWz9lpdiuORTo4teLBp7qh7TzOGjyLYwWzThrRaprKnuvuuyHe%2Bg95Yk8FxxkFyq%2BX%2BRHPcqf1Avz5%2F%2FEfzZeaTI5irzxFP3%2BiXOVV7L54X%2BpBzUp1DBWMR%2FPI7CUP6Ofy%2BejlW3Xw0ApW2nmBFxJ54xcsWsTJyEZziCNOolzitkP7X4PUBRGLkg5DZUKwTuoupDqkPrHD4Emud3Cd7jbcdJN1Um65sR7fvmunBN%2Fy%2BchjzgjDhdqUKE1%2Fa%2FCCv1qY%2BB7OzDXvNCefplwjwZ0juszt0htahr%2FGJwM%2FNHSDzFIxjjwjWlMiB56NszT32v3EuE3MMKKk8MGOqUBNaZ37EFGwIcZoRKSXS9Lfzt%2Fe%2BQSGkzARfDYHdjXJ9wu1sgyjt%2FC8shsmD2c0sl8HbF%2B9IW5zMdnRUuXHy2I%2B1pN%2FnreIO3VAfzDA9k%2BR25rubTcLFTzT5Zy6dmld30zeK1MgCu13z4ZOHcqVxtj%2FMYNPrxYcttZdS7FLgoAIGwWse9iJkpkGtY0l9JiwLjrV5If%2FHsHWjmV6AU%2F0weFHx7wNvQ3&X-Amz-Signature=0f5e1b887cb629d6fcbd62761f1ea62f1d98f4d1a21896cb2e6870f112b88923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVK5QWL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWuh0KWiPIeqrTA%2B5Poi7HpebKyY6%2FNqxCWP3y79gmWAiEAy%2FlWZ%2FVEw0Y6lRc6qFNt0CjGjTP9OfM4Pf2Qxp9D2nEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEc0T6WzQN07PcIuyrcAxgIRjr8NBfXlgj8H%2BqIVv0DyRTzuxtCQXpM7XGgrT633JfODTk1AvxzWeRli2fHZ6SsYsLjYGHsPV3jcanUvxtqc40imv6QxX%2BZDQVp%2BylEPfLd8%2FDHuftqFPWJoEOjWgHBjgGLamVFcVoIhXgZpkv61Dzszd34HvAMcFwAYrJtIt5YD8erZnNCo%2BJCI69SxqFMpTIU6KOs4W1dQOMebulmsYimEVekFKd%2BigeIfHStA7QpDZu6fXCESwK9arQPGJfyoQP4e4aXJwkFI57xzDD1ywBxke9nFgDW80cFimO6KvzSG7dzophHWz9lpdiuORTo4teLBp7qh7TzOGjyLYwWzThrRaprKnuvuuyHe%2Bg95Yk8FxxkFyq%2BX%2BRHPcqf1Avz5%2F%2FEfzZeaTI5irzxFP3%2BiXOVV7L54X%2BpBzUp1DBWMR%2FPI7CUP6Ofy%2BejlW3Xw0ApW2nmBFxJ54xcsWsTJyEZziCNOolzitkP7X4PUBRGLkg5DZUKwTuoupDqkPrHD4Emud3Cd7jbcdJN1Um65sR7fvmunBN%2Fy%2BchjzgjDhdqUKE1%2Fa%2FCCv1qY%2BB7OzDXvNCefplwjwZ0juszt0htahr%2FGJwM%2FNHSDzFIxjjwjWlMiB56NszT32v3EuE3MMKKk8MGOqUBNaZ37EFGwIcZoRKSXS9Lfzt%2Fe%2BQSGkzARfDYHdjXJ9wu1sgyjt%2FC8shsmD2c0sl8HbF%2B9IW5zMdnRUuXHy2I%2B1pN%2FnreIO3VAfzDA9k%2BR25rubTcLFTzT5Zy6dmld30zeK1MgCu13z4ZOHcqVxtj%2FMYNPrxYcttZdS7FLgoAIGwWse9iJkpkGtY0l9JiwLjrV5If%2FHsHWjmV6AU%2F0weFHx7wNvQ3&X-Amz-Signature=15cc24edd77d5af6b134a6dbc07a1ab6cc8419a596a650a69fb1c4faaf2f9aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
