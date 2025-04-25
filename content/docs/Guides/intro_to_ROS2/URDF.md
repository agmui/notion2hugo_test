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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BAZ3SX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6EBaKs4p%2FZyKp2kVb7WX7ZsxDpuk2ykedEGW%2BXdBS%2BAIgT3jMT9JmVkv1HqCFRRo7XDp%2BVH2IrR6oQt9rE%2F1fqx4q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJy12i1X%2BT4Hci3V%2FircA8BMcDJ1ee0nv%2Bt9DBPfSPdVa7ksf9Vn4CoKZuYc95Fi4SiA%2FmbU5IoIrfka3lG%2FBF%2B7jdDz%2F%2Bk5DSUY2oW9u39ZK1z%2B0dTP%2FPUlu65QOxSmLw3BICe9pgE50rhyaxv93Ep9zgV4W3wbQjwnEPKATb4L5R2Xh%2BtoOQ6UjSad8M2xvwDtf2J7slszhE3MvgJMgYJr2q55rJokE3sGUq4UqViiVwuwwAi1Knna2hS2AFSBxEFLc9gLrtS42qPcJIW%2F2MZQ%2F5CuWZVUytsJklhicqUXlwBZouaUVOvp7BxiQMe3%2FUh0t6ybUUPYJpUJQORX58ZzYmk3zHTJA6OSE8Jguv8t9pVbmfZGyQhs6exuK40g%2FJdEktICEqixsvFjIJ2NX5DNtH70zWh%2Bxb%2FF2i5xqaJzoIwsnOC%2FEMFz7brRZjRTWVwUN9geiaHg%2BfzbdOLcYUAFk7Pkmw2gRgUD5R4SN5pxr2Qn%2BEB9PORPC6aCgeOyb52JG8UcPQj3qIts01S%2FJ98ITpQ4e1iI%2BTLFthuX83K9XsgpR9JJonQix6vuwl%2FeFBEjLXJeIMPvZeVO4JZ1Hzoxq%2FcON5AU4VYa15ymuzKb8HtazMTnKsIJmC%2BANOQ%2F40j6W19FTktLb0X5MNSqq8AGOqUB5p12WI3HUD31zyI59LJQzoUiatYPpHy576V1mXVqDDbuyziRta4txsnzIPYk%2BZkAoPhyF64VTkr8D%2B1FHIVPeop1QfHhKPnKBIOJa51p4hXF4OGijGSstuPHbsu1drB4u5d2IIC%2Fj%2BwB82txNkRcCdVpTyMKy8qzW0RZGuN%2BxhWwYrgmg6Z0O6ZlEFYGqiPaXL8ibISDvAFQkHPW8igCReJMOqWs&X-Amz-Signature=fe827c451f22845ba40f5835ae9b307b99f53e1089e35da932ff201e5e77eeab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BAZ3SX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6EBaKs4p%2FZyKp2kVb7WX7ZsxDpuk2ykedEGW%2BXdBS%2BAIgT3jMT9JmVkv1HqCFRRo7XDp%2BVH2IrR6oQt9rE%2F1fqx4q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJy12i1X%2BT4Hci3V%2FircA8BMcDJ1ee0nv%2Bt9DBPfSPdVa7ksf9Vn4CoKZuYc95Fi4SiA%2FmbU5IoIrfka3lG%2FBF%2B7jdDz%2F%2Bk5DSUY2oW9u39ZK1z%2B0dTP%2FPUlu65QOxSmLw3BICe9pgE50rhyaxv93Ep9zgV4W3wbQjwnEPKATb4L5R2Xh%2BtoOQ6UjSad8M2xvwDtf2J7slszhE3MvgJMgYJr2q55rJokE3sGUq4UqViiVwuwwAi1Knna2hS2AFSBxEFLc9gLrtS42qPcJIW%2F2MZQ%2F5CuWZVUytsJklhicqUXlwBZouaUVOvp7BxiQMe3%2FUh0t6ybUUPYJpUJQORX58ZzYmk3zHTJA6OSE8Jguv8t9pVbmfZGyQhs6exuK40g%2FJdEktICEqixsvFjIJ2NX5DNtH70zWh%2Bxb%2FF2i5xqaJzoIwsnOC%2FEMFz7brRZjRTWVwUN9geiaHg%2BfzbdOLcYUAFk7Pkmw2gRgUD5R4SN5pxr2Qn%2BEB9PORPC6aCgeOyb52JG8UcPQj3qIts01S%2FJ98ITpQ4e1iI%2BTLFthuX83K9XsgpR9JJonQix6vuwl%2FeFBEjLXJeIMPvZeVO4JZ1Hzoxq%2FcON5AU4VYa15ymuzKb8HtazMTnKsIJmC%2BANOQ%2F40j6W19FTktLb0X5MNSqq8AGOqUB5p12WI3HUD31zyI59LJQzoUiatYPpHy576V1mXVqDDbuyziRta4txsnzIPYk%2BZkAoPhyF64VTkr8D%2B1FHIVPeop1QfHhKPnKBIOJa51p4hXF4OGijGSstuPHbsu1drB4u5d2IIC%2Fj%2BwB82txNkRcCdVpTyMKy8qzW0RZGuN%2BxhWwYrgmg6Z0O6ZlEFYGqiPaXL8ibISDvAFQkHPW8igCReJMOqWs&X-Amz-Signature=bd7b515d0216e66b16c3f72a669813fbd55234408551661a3ac1f8bf6252bdf7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
