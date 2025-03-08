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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXAJRPX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIExd5WHYX5J%2BgXC6QUwJ3QTFKcwER6XOMfBeKrOlQ93GAiAUpQgOoFE%2B9OxfxMm2WefYFs9YWs%2B41UJUxXQ02AqiQyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM0Y8vQixd2sBTbkG7KtwD7ASDogjgmXoMixVZ1%2BINIAnhTDPHTvThgvhhppny8BbP3iQt6KqQvEP%2B1Syo%2FOc%2BSoOsf9IsfUifnJJIcuXzf0Fl61qCFRqvETJwQ9avXBWqYh3bHDsUj%2BhaiGM86fyYhkmkzdsqfrUTu71FFDZjzCiPAY6UCVdjy64F9Ujil7N%2BPUgbkdN%2BNYpsNI7gS%2BAm4wYVUjFCqqfKeh%2B4Vw8%2FCubvxyZQ3qBwj29Mr%2B%2F7%2F%2FM21eC%2BLR3aRcqJjCRHdNPxWz1CPHp0RqEszWiI10SzFA%2FyBM%2BqotfIugzVbZgcKxNiWuZGVMSvtsRvo8c2yumFJQ0SFsFDMVzIIcvVOdUDrtwT4kgA0FgEzC7uKyUPeabvLlK9Lv%2F%2F7usyzDCYPHWbyeFmv1FL82KFQc17t5W79RAMyNZdofKUAphXvVuD1HrH8%2BJGVyGC7o%2Bx7y1WK2fZ3Huo1X6I1QdpgWW0WeuYTeDPrlvZAQhBv8ByKF8CTGodgN2CJoRbh8TIu%2F5LZFq7oHlt6yODVULcXO3%2F%2FSlnLIdWBeDaHRIXw7ZfGNGYY1fauf4GS7n2bbAZbNMWRuf2sDdBvFA0zTpGHWMgMPp4PR68wqV2itZbZniykgboibhHpKjTE6v3vzwh%2BLow3tSyvgY6pgHBhNP%2FXssjosNCbXE70IsauC5hoVEYXHzvrJgkNL1cC7vtSG2xIQOf11q9LiwPu5Yh2tUZC4p58lRwIquEUPnSQEB1gBvZBVdYWfHnqmEm%2FfhXN4XUHW586HB%2Bak0BYf69Tk%2FQiIWw05HK0gN%2BWidZuhe9%2FZoKpmYaQFx9VxRdaynPrvsP%2BhP4LlF5HrmKqhuAhmMrdGEbWF6cDG%2FrZsjvPyxR4yZM&X-Amz-Signature=e300a42603cf8d3adff13460b1419c516a965a72fe856a0d4d54cb09235285cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXAJRPX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIExd5WHYX5J%2BgXC6QUwJ3QTFKcwER6XOMfBeKrOlQ93GAiAUpQgOoFE%2B9OxfxMm2WefYFs9YWs%2B41UJUxXQ02AqiQyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM0Y8vQixd2sBTbkG7KtwD7ASDogjgmXoMixVZ1%2BINIAnhTDPHTvThgvhhppny8BbP3iQt6KqQvEP%2B1Syo%2FOc%2BSoOsf9IsfUifnJJIcuXzf0Fl61qCFRqvETJwQ9avXBWqYh3bHDsUj%2BhaiGM86fyYhkmkzdsqfrUTu71FFDZjzCiPAY6UCVdjy64F9Ujil7N%2BPUgbkdN%2BNYpsNI7gS%2BAm4wYVUjFCqqfKeh%2B4Vw8%2FCubvxyZQ3qBwj29Mr%2B%2F7%2F%2FM21eC%2BLR3aRcqJjCRHdNPxWz1CPHp0RqEszWiI10SzFA%2FyBM%2BqotfIugzVbZgcKxNiWuZGVMSvtsRvo8c2yumFJQ0SFsFDMVzIIcvVOdUDrtwT4kgA0FgEzC7uKyUPeabvLlK9Lv%2F%2F7usyzDCYPHWbyeFmv1FL82KFQc17t5W79RAMyNZdofKUAphXvVuD1HrH8%2BJGVyGC7o%2Bx7y1WK2fZ3Huo1X6I1QdpgWW0WeuYTeDPrlvZAQhBv8ByKF8CTGodgN2CJoRbh8TIu%2F5LZFq7oHlt6yODVULcXO3%2F%2FSlnLIdWBeDaHRIXw7ZfGNGYY1fauf4GS7n2bbAZbNMWRuf2sDdBvFA0zTpGHWMgMPp4PR68wqV2itZbZniykgboibhHpKjTE6v3vzwh%2BLow3tSyvgY6pgHBhNP%2FXssjosNCbXE70IsauC5hoVEYXHzvrJgkNL1cC7vtSG2xIQOf11q9LiwPu5Yh2tUZC4p58lRwIquEUPnSQEB1gBvZBVdYWfHnqmEm%2FfhXN4XUHW586HB%2Bak0BYf69Tk%2FQiIWw05HK0gN%2BWidZuhe9%2FZoKpmYaQFx9VxRdaynPrvsP%2BhP4LlF5HrmKqhuAhmMrdGEbWF6cDG%2FrZsjvPyxR4yZM&X-Amz-Signature=23d25f46cb149109c2e8272a7eb48baa538bdb499035c8a9ccc69014f03ef471&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
