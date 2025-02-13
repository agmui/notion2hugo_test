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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644YMGLU4%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtSEvKQFoZgCtShzRy9guwz1yCUzzOZVCpsoYRaY1%2F3AiEA%2FfwPtvIsuB9aiK9tm2vIiSaJyIwNT3uciRx74Oabsrcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDI68yP3JSDAEm08t%2BircA0OqckPpmtme1LTXOd76G8xC9PShCnrIYuUWuIfkKT7LAdQRRNaXuets8Exa3eb%2BN4o3%2BMZiOpWteL3XDulgDRU48LtKJCX2XOzT%2FlnPU%2FPPX5%2FCtCuWRMIqGYV2%2FfSSDzTVVGceakyocnPI8owfVksfjHSIr%2BIA7PZ01i79TWIJuZ0hqnXw85u8wkVbEoMyYrsW87J2uAspgutGiewQDvtZjOalY8XhJUQReb1VQn8%2BGl%2Bms5COrwfW216oX4Zrtf3gVpFZLZ2c2X3HjlmLMzkEbVCgeBkEQWl1qMIzy6kWNrA%2FEOYsadDM6zuEQNMaqurz18kFxVehPHR1Pf3PgU%2BOklRing%2FeU7jvZ7kqKpAkum24JCVrurGNA6DGv7BvOi9DBRvJCH4bGsJVYno7RL4%2B236HYk%2FGkUYJ%2FjyvoMc1fO%2FNQeIp92tdW78mR6LARQwH6Ozvk9NgJ7bDMSJ%2FMv2c3Ur14z6fWYXF3fxhv5Ks%2BLLPgF7gKWvR38oXDKUdGEfFsXh5ErHLuYSTXHZTevkhUMfuQN7at448Xe9Gt123%2BqzSoAnS6s%2BmnH0lHgTbiDe9G9ZRkGXKayLZnO3Jx2bANlw6jcwAiL7CN3TBsOUfx9BunxPy1O0JaewAMJaqtr0GOqUBfMjrGolRnK%2BRCJC769d%2F%2BiCrEXkFrLRPnoBgsyVQyN1KxRKbZy1JRFZrnaKHOeSnMeTqkw2QzbMiCMtA2PvQUGWjpKVOsQg3lAiRy9jILdtzs8hUbblcQYKoNSSgJMjiDaMT0cQsR2fR0hnd8ErZ2kDwTP4DZnNgfSqroF4VgX4S4T9CK9IAKzQjMM4YBtBUYK1NgaJoWt6CVUVOhfCGjsMHCAk5&X-Amz-Signature=9eca8256da1b844b7cb9f0d2962051a4138d40af917ad501a3152a28bcbf2b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644YMGLU4%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtSEvKQFoZgCtShzRy9guwz1yCUzzOZVCpsoYRaY1%2F3AiEA%2FfwPtvIsuB9aiK9tm2vIiSaJyIwNT3uciRx74Oabsrcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDI68yP3JSDAEm08t%2BircA0OqckPpmtme1LTXOd76G8xC9PShCnrIYuUWuIfkKT7LAdQRRNaXuets8Exa3eb%2BN4o3%2BMZiOpWteL3XDulgDRU48LtKJCX2XOzT%2FlnPU%2FPPX5%2FCtCuWRMIqGYV2%2FfSSDzTVVGceakyocnPI8owfVksfjHSIr%2BIA7PZ01i79TWIJuZ0hqnXw85u8wkVbEoMyYrsW87J2uAspgutGiewQDvtZjOalY8XhJUQReb1VQn8%2BGl%2Bms5COrwfW216oX4Zrtf3gVpFZLZ2c2X3HjlmLMzkEbVCgeBkEQWl1qMIzy6kWNrA%2FEOYsadDM6zuEQNMaqurz18kFxVehPHR1Pf3PgU%2BOklRing%2FeU7jvZ7kqKpAkum24JCVrurGNA6DGv7BvOi9DBRvJCH4bGsJVYno7RL4%2B236HYk%2FGkUYJ%2FjyvoMc1fO%2FNQeIp92tdW78mR6LARQwH6Ozvk9NgJ7bDMSJ%2FMv2c3Ur14z6fWYXF3fxhv5Ks%2BLLPgF7gKWvR38oXDKUdGEfFsXh5ErHLuYSTXHZTevkhUMfuQN7at448Xe9Gt123%2BqzSoAnS6s%2BmnH0lHgTbiDe9G9ZRkGXKayLZnO3Jx2bANlw6jcwAiL7CN3TBsOUfx9BunxPy1O0JaewAMJaqtr0GOqUBfMjrGolRnK%2BRCJC769d%2F%2BiCrEXkFrLRPnoBgsyVQyN1KxRKbZy1JRFZrnaKHOeSnMeTqkw2QzbMiCMtA2PvQUGWjpKVOsQg3lAiRy9jILdtzs8hUbblcQYKoNSSgJMjiDaMT0cQsR2fR0hnd8ErZ2kDwTP4DZnNgfSqroF4VgX4S4T9CK9IAKzQjMM4YBtBUYK1NgaJoWt6CVUVOhfCGjsMHCAk5&X-Amz-Signature=8f3c8b8eca33c4debcfef465f0daaaf9d0918bf80cca84cfeb423b2dd925d15d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
