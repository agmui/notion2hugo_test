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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAZFQZ44%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWL14vpiLse%2FWFH7jNMXcuPezhJ5Efl6jwtlNLAhS4YgIhAL8jSDVy7cQaxMNS7fxnHOOlrupx36JXjtphji3zGUZ%2BKv8DCBsQABoMNjM3NDIzMTgzODA1Igx5APAUYjn7yYa5Eowq3AML4SkLizVbQsSJzRCS06FrsMWYjHf4Kw8gwWRGSLp2h8FFa3mjCFlb5MF6tZnS%2Bu0sbK8FLTtkYIcZ%2BSE9QDoRrwEcZz%2BRbG3FHek6XRrp7prA%2BGm83ua6pz848Je9%2BHJBzAJRqDw%2FB61v7nJlxXsFvdaCHOUXPbRkLAhjuyyU0qMdt1WOe9AKmQfy0oWuA9eTJSxV0kRA8J%2BNtY7i7435PF4d8Mk%2BuqAS%2BN6wIqOgH0oVrmpT5iYeKU%2BGf9ZM3DreunlhhgGC570SGc2qV%2Fir3Gtz025xsfVlwTAoREqLb5zxczRM%2Bm7ATXGUiFsW%2BqC8sXSCIvGl4zbYq7ywca0FnH2jKLZgoQvuycBPjtu0WvbZyGYk4ZCw6%2BRA6RqHui3kRTt%2BviwuW7aNJnILdlrfVjhlPtgvzp4V%2FJXpeCePl4KA%2FVWCNhIKTAj9l5fXQtbfPfHNjazlYAIsNhtYve4Xn%2FeFTbFE1ud3m5Yo2CXceEr52v4SOc6lOcAeXzmV1Bu%2F6lILVGtA0Ko%2BYMj9kkH3jerBV6en4ruT31U3uiyiZpVLkEZtdheIdDwm2dAJogwZzEvTv4AYJiSbYTPBOrnpl7kn%2Fx1Ot6%2BtFAljcjuavSn6C9WVWpEYE614STCC4Li9BjqkAUIM0V4GrwWrK%2FDGG7eHDeTmxSTRPgSm8QTDe39nEmLUttxe1fraahn9AJjFD0FDUKNGO03fiGHMJ7IoglmyksG4BZ0sxoQVGtr%2BF4X0tjreV4FnyotK8B5SM0kt886jrSadL3VwbGqgRoRNDmebzxm4RQNIY4gbtZ2DU58zgRrXjyNmSMK21XfI1uZI6Ggu8UCOlcS7II2t9cNDC4WAEKrPBTZB&X-Amz-Signature=dc794648e7dd954e3d8163dd7bb3d51998eebe4d1be1e7662cc1c8aed66cd918&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAZFQZ44%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWL14vpiLse%2FWFH7jNMXcuPezhJ5Efl6jwtlNLAhS4YgIhAL8jSDVy7cQaxMNS7fxnHOOlrupx36JXjtphji3zGUZ%2BKv8DCBsQABoMNjM3NDIzMTgzODA1Igx5APAUYjn7yYa5Eowq3AML4SkLizVbQsSJzRCS06FrsMWYjHf4Kw8gwWRGSLp2h8FFa3mjCFlb5MF6tZnS%2Bu0sbK8FLTtkYIcZ%2BSE9QDoRrwEcZz%2BRbG3FHek6XRrp7prA%2BGm83ua6pz848Je9%2BHJBzAJRqDw%2FB61v7nJlxXsFvdaCHOUXPbRkLAhjuyyU0qMdt1WOe9AKmQfy0oWuA9eTJSxV0kRA8J%2BNtY7i7435PF4d8Mk%2BuqAS%2BN6wIqOgH0oVrmpT5iYeKU%2BGf9ZM3DreunlhhgGC570SGc2qV%2Fir3Gtz025xsfVlwTAoREqLb5zxczRM%2Bm7ATXGUiFsW%2BqC8sXSCIvGl4zbYq7ywca0FnH2jKLZgoQvuycBPjtu0WvbZyGYk4ZCw6%2BRA6RqHui3kRTt%2BviwuW7aNJnILdlrfVjhlPtgvzp4V%2FJXpeCePl4KA%2FVWCNhIKTAj9l5fXQtbfPfHNjazlYAIsNhtYve4Xn%2FeFTbFE1ud3m5Yo2CXceEr52v4SOc6lOcAeXzmV1Bu%2F6lILVGtA0Ko%2BYMj9kkH3jerBV6en4ruT31U3uiyiZpVLkEZtdheIdDwm2dAJogwZzEvTv4AYJiSbYTPBOrnpl7kn%2Fx1Ot6%2BtFAljcjuavSn6C9WVWpEYE614STCC4Li9BjqkAUIM0V4GrwWrK%2FDGG7eHDeTmxSTRPgSm8QTDe39nEmLUttxe1fraahn9AJjFD0FDUKNGO03fiGHMJ7IoglmyksG4BZ0sxoQVGtr%2BF4X0tjreV4FnyotK8B5SM0kt886jrSadL3VwbGqgRoRNDmebzxm4RQNIY4gbtZ2DU58zgRrXjyNmSMK21XfI1uZI6Ggu8UCOlcS7II2t9cNDC4WAEKrPBTZB&X-Amz-Signature=d52571492f68ba5f69b3a918ab3a005a4eb4fd1c166e199160f8a8b22d2a0b86&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
