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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHQLIS3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH3Kjg99Omvqkf2XMzuubbKDZt6jcgxm%2BOMa4VN8e%2FJgIgBo0cze78a0gO5rpVRxsv9PZ3vS49vNueeq0MPIJiNaYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJwCFfug%2BvioOD4ASrcA4mB%2BdXhXjqRxLtrYuqJkchVa3K8v4tYf%2BiIH7IapX57%2B5UqO1VTG2SMJfrf%2B0FU2LddN6sStLgQ6kcAhE%2BDgR6enit%2BzJc3sw13mUs0iJ8WIG%2F9635Hznsl9Ae00%2BHtfp3o9q2i5cr35oK6a0E4XiApKjOEQb59vzMnqmmIgHsWGXH3OusrG141WPhvIZuZzei4%2FDQfsv5Zejadd67KZvugZZ5KPl%2FDy%2FBNhPRJ4akzhpU6iiwoIHuuQ9NUKOkHQbsbfJ62CYBIZTTECkw0%2Fg5%2B2BDn8FiWjnGlkWjboSoYmA22g12%2B9KO7ygPrQqJZOAglM5qbHhi5mDpWwd38RO8vtsD7U92cUgKBYjHb3Q7TqhXPTSWxkpbMK%2BDMEuTauAG2HlKbO%2B7MGdJEobSTMkij5rXbNs%2FL5TSadgcVqZWqqvSc0qsPs%2FMgMLtgl5dLmcSLXFi9%2B4cJPs80z%2BFZRRFwLc5CXDQ9pdNtPab9LD7RlJ57sAHQDm3A746xhNdNzIQMXHa5omOzuJKmMBCM1wNEow16z0Dpc1Jaim7A9DXEiHK2Gmv%2B%2FC8ZolBonlQDkBSPh71mGjRrNW20ekbra5H3gTkbILsSJfzoXj0GgrwQBA0GeggeWkOH8EVaMJyp6r0GOqUBLP7stpr6xRaB%2FHSTPde13qajvmqfkP1g0wtkiGAzDLNjvGclkDS6njRXOYf1zeruSZZDprulMjXqmUyfi5%2FVnbi8RvlD9b9bmRk8wUTX1JZ4Sn%2BykDx7Z8obe6U2UwHMMQO4tJI%2FVnpO9sw3SygVl5oSoo3sNzMaF5c%2BEL8jrEDv%2FGqPNnebj8OI94%2FcI8z67D6yVB5XPvNP%2BOrtnPOCEJ2k4g70&X-Amz-Signature=59711c501eaf81adc20d0b49907c7aab14d3d611c81894481d4230d65b098769&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHQLIS3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH3Kjg99Omvqkf2XMzuubbKDZt6jcgxm%2BOMa4VN8e%2FJgIgBo0cze78a0gO5rpVRxsv9PZ3vS49vNueeq0MPIJiNaYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJwCFfug%2BvioOD4ASrcA4mB%2BdXhXjqRxLtrYuqJkchVa3K8v4tYf%2BiIH7IapX57%2B5UqO1VTG2SMJfrf%2B0FU2LddN6sStLgQ6kcAhE%2BDgR6enit%2BzJc3sw13mUs0iJ8WIG%2F9635Hznsl9Ae00%2BHtfp3o9q2i5cr35oK6a0E4XiApKjOEQb59vzMnqmmIgHsWGXH3OusrG141WPhvIZuZzei4%2FDQfsv5Zejadd67KZvugZZ5KPl%2FDy%2FBNhPRJ4akzhpU6iiwoIHuuQ9NUKOkHQbsbfJ62CYBIZTTECkw0%2Fg5%2B2BDn8FiWjnGlkWjboSoYmA22g12%2B9KO7ygPrQqJZOAglM5qbHhi5mDpWwd38RO8vtsD7U92cUgKBYjHb3Q7TqhXPTSWxkpbMK%2BDMEuTauAG2HlKbO%2B7MGdJEobSTMkij5rXbNs%2FL5TSadgcVqZWqqvSc0qsPs%2FMgMLtgl5dLmcSLXFi9%2B4cJPs80z%2BFZRRFwLc5CXDQ9pdNtPab9LD7RlJ57sAHQDm3A746xhNdNzIQMXHa5omOzuJKmMBCM1wNEow16z0Dpc1Jaim7A9DXEiHK2Gmv%2B%2FC8ZolBonlQDkBSPh71mGjRrNW20ekbra5H3gTkbILsSJfzoXj0GgrwQBA0GeggeWkOH8EVaMJyp6r0GOqUBLP7stpr6xRaB%2FHSTPde13qajvmqfkP1g0wtkiGAzDLNjvGclkDS6njRXOYf1zeruSZZDprulMjXqmUyfi5%2FVnbi8RvlD9b9bmRk8wUTX1JZ4Sn%2BykDx7Z8obe6U2UwHMMQO4tJI%2FVnpO9sw3SygVl5oSoo3sNzMaF5c%2BEL8jrEDv%2FGqPNnebj8OI94%2FcI8z67D6yVB5XPvNP%2BOrtnPOCEJ2k4g70&X-Amz-Signature=293a468fbec68727ad128cb41ede98fb70e3c27fa4816d0426464e0dcd37dd10&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
