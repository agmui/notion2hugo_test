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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ4K43VF%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXe2tvxcG7%2FFv4mg6OacjNvEM6MKx5JRo%2BEoPsMyY26QIgGarjKrMZgJ%2Fd%2BMw%2BjTnbQxVW7HdHv3kH4j8xD4ZejeQqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb6Xdu9OwgjLw17WSrcA1tplktMwck%2FVxr6abatpdT6LCNIGGYQ4PsAG2PC%2BhqzBZ%2Bfzt33J3T%2B5pAybmUjZ1B6hxqbCO590FY1imU5NJTsqo7fks5E4PXU6Jgf3skRHT5WKLebggR4%2BAQanP0bGzw0aq1tDG3eWNMJrRWZPEJbSPyOTxwqhU0RsoXV5l3RT8dcQZzCWXkHrHNQaiSq0okzQ5m19DAiEVhIbSCU4F6CWsfj6GLUyy7MWmYWcwFGQkNAMFv2rZ6zHw02pZpKxgPufUQbbB3GTMCggJAu0Uypprc02nmsbYyCXz4FNKmTV7EYpOOQPjVfQdMilWCja253lbGjl6S5BAs6318qotKoBMWznKjyGeJ3BgO43zUKDe8rEbPj5ORZDvMvclZxh1v3rU13NTN8PCOcYTlBjsqdOZFYVmmnlmdgVpx1Q027IdOc33XfTbmPZ3bYvYWN7FlWAw0yxufEF9S5%2B3pxyj%2BjhDCEO39pv%2BNDl8wEQQFZ0jAuFXWbZIlL8CXZ2dHTDXcyAjCIJb6tLseD0PhG%2BmbF0bPo9mDxl2HOJirFMS3OB2RNQtKnqnfHoUCbZVdADRMLtT9AVyScJH43Yq%2FWgVUieMfeIth5p%2BH9yHrYnC56pEwLff7S1QaLulocMPaRp70GOqUBwOmZloVOCripVV0gzZsyh564kooCMk1oJ4dR1b6fBnIOPSDuw8QmijcqaBEbN7GqQsQBiLIO%2FH%2FK6QrrJXTLh6BRLc3CbedT%2Fz%2BxOUxztl7BLeUXYDZSlx37wZ1Hw17QvQTmJY5%2BMpNOEMXoZaqUNZDJBPVcFkS3YRPcZezEdC24tLZhdWny70Jn6jTKQoYIPkBJ31LLBlkgtGSqtEtALrWwmavF&X-Amz-Signature=f02d77a3d2017eb1613d094804034e6339da3f425d8b17305e2fe619fd95dbfd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ4K43VF%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXe2tvxcG7%2FFv4mg6OacjNvEM6MKx5JRo%2BEoPsMyY26QIgGarjKrMZgJ%2Fd%2BMw%2BjTnbQxVW7HdHv3kH4j8xD4ZejeQqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb6Xdu9OwgjLw17WSrcA1tplktMwck%2FVxr6abatpdT6LCNIGGYQ4PsAG2PC%2BhqzBZ%2Bfzt33J3T%2B5pAybmUjZ1B6hxqbCO590FY1imU5NJTsqo7fks5E4PXU6Jgf3skRHT5WKLebggR4%2BAQanP0bGzw0aq1tDG3eWNMJrRWZPEJbSPyOTxwqhU0RsoXV5l3RT8dcQZzCWXkHrHNQaiSq0okzQ5m19DAiEVhIbSCU4F6CWsfj6GLUyy7MWmYWcwFGQkNAMFv2rZ6zHw02pZpKxgPufUQbbB3GTMCggJAu0Uypprc02nmsbYyCXz4FNKmTV7EYpOOQPjVfQdMilWCja253lbGjl6S5BAs6318qotKoBMWznKjyGeJ3BgO43zUKDe8rEbPj5ORZDvMvclZxh1v3rU13NTN8PCOcYTlBjsqdOZFYVmmnlmdgVpx1Q027IdOc33XfTbmPZ3bYvYWN7FlWAw0yxufEF9S5%2B3pxyj%2BjhDCEO39pv%2BNDl8wEQQFZ0jAuFXWbZIlL8CXZ2dHTDXcyAjCIJb6tLseD0PhG%2BmbF0bPo9mDxl2HOJirFMS3OB2RNQtKnqnfHoUCbZVdADRMLtT9AVyScJH43Yq%2FWgVUieMfeIth5p%2BH9yHrYnC56pEwLff7S1QaLulocMPaRp70GOqUBwOmZloVOCripVV0gzZsyh564kooCMk1oJ4dR1b6fBnIOPSDuw8QmijcqaBEbN7GqQsQBiLIO%2FH%2FK6QrrJXTLh6BRLc3CbedT%2Fz%2BxOUxztl7BLeUXYDZSlx37wZ1Hw17QvQTmJY5%2BMpNOEMXoZaqUNZDJBPVcFkS3YRPcZezEdC24tLZhdWny70Jn6jTKQoYIPkBJ31LLBlkgtGSqtEtALrWwmavF&X-Amz-Signature=2ff29c120873a27ab3645a37350b153dfccf859433e820b22a609625525c8ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
