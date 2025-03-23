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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAH3NK6H%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLy0lal9QnQOxsqwOGXvcXBg%2BNAOxfSSh%2BHEjx1gKsWwIgOtNl9hiHp%2Fy%2ByT8yvpxj76CYjBFCGHdlgVtWTtA%2BjdwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaXk3ThXJztwmhx3SrcAwN6rg1L59ejZpyvR7SM3v4FVC7W3zydy7cpUneDBPewT6govqH%2BtDgUF44IRAEg5GK%2B3hhbkpUg%2BNz5R5BbiLlKI0bRfI0hbSqyAOTBTw%2BPgolc5l78iYuIMj0bg1WOckkkesgr6S8YTNKUHiYUnwooIAODr%2FxWLd%2FCJVJ8l6%2FqGAL0Sxj8N%2BimGu%2F25GIIxDsm2UE2%2Fw6iJe2bN%2BqaRoBSmJI0zrQ4diibwJAJAVj0YELuq1vd0SuYbEzkzXaxQ5pp6uXaamve2tDFMGt91P7ebqRcC7%2BvtHm8Fo9VKI0ZGmD%2BHQjOUC2Cwgqbo%2BrR3Lsig72yn0CSoI3rYMC8FTlBZVGCMSQ4GkJ9XC0jJUHvSFhpRrQmrtrU45vhDGgX8spNimFfVkx3MjWTuOiN1rRUTYav%2BWE6mOGQ91QRJGzSF7OcsQAKoLMX%2B7immZfpoxfu95N9gh6vqm54Ap89nk75wYrt9Dzp64k5Hwjc71aw4vJ9CpNKkPfq63VJUx6UIEVMenppNYGtdzKbu80q04wtAp8Nj9iy56Pk%2FIAdqmKioWKvs46ckdm1pwG3Zh4G0LYmRr%2Fm2ckRED79mqcQVat3P0yjzqxozRgqmPOwK4lcmlASkeXwST%2BhpHobMNnwgL8GOqUBt9Tdhc7LLlVsjgi1biWDyuk%2FqxvV2cKCTWPVAmZb77zzyDksMaw6rnR6TbLzhHk39ruZsD%2FEYBCa0GWNzkQVN3ao9hY7G6pecSS6KITqOVtPIy16Pzq3ZmbfxzrVactBUbuXQ%2B6%2FeO3ISCCyge%2FjlbOiu587BIfZ%2FNSXwjnewyY6u1%2Fg3IWALw%2F0CXI50qTh4DlnZA5tEVTIhPtSv38r3KuaJCGW&X-Amz-Signature=0a4961e756c1ec45d87a7d99b667127851e1c99f42351e0884f62d1ed34c54c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAH3NK6H%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLy0lal9QnQOxsqwOGXvcXBg%2BNAOxfSSh%2BHEjx1gKsWwIgOtNl9hiHp%2Fy%2ByT8yvpxj76CYjBFCGHdlgVtWTtA%2BjdwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaXk3ThXJztwmhx3SrcAwN6rg1L59ejZpyvR7SM3v4FVC7W3zydy7cpUneDBPewT6govqH%2BtDgUF44IRAEg5GK%2B3hhbkpUg%2BNz5R5BbiLlKI0bRfI0hbSqyAOTBTw%2BPgolc5l78iYuIMj0bg1WOckkkesgr6S8YTNKUHiYUnwooIAODr%2FxWLd%2FCJVJ8l6%2FqGAL0Sxj8N%2BimGu%2F25GIIxDsm2UE2%2Fw6iJe2bN%2BqaRoBSmJI0zrQ4diibwJAJAVj0YELuq1vd0SuYbEzkzXaxQ5pp6uXaamve2tDFMGt91P7ebqRcC7%2BvtHm8Fo9VKI0ZGmD%2BHQjOUC2Cwgqbo%2BrR3Lsig72yn0CSoI3rYMC8FTlBZVGCMSQ4GkJ9XC0jJUHvSFhpRrQmrtrU45vhDGgX8spNimFfVkx3MjWTuOiN1rRUTYav%2BWE6mOGQ91QRJGzSF7OcsQAKoLMX%2B7immZfpoxfu95N9gh6vqm54Ap89nk75wYrt9Dzp64k5Hwjc71aw4vJ9CpNKkPfq63VJUx6UIEVMenppNYGtdzKbu80q04wtAp8Nj9iy56Pk%2FIAdqmKioWKvs46ckdm1pwG3Zh4G0LYmRr%2Fm2ckRED79mqcQVat3P0yjzqxozRgqmPOwK4lcmlASkeXwST%2BhpHobMNnwgL8GOqUBt9Tdhc7LLlVsjgi1biWDyuk%2FqxvV2cKCTWPVAmZb77zzyDksMaw6rnR6TbLzhHk39ruZsD%2FEYBCa0GWNzkQVN3ao9hY7G6pecSS6KITqOVtPIy16Pzq3ZmbfxzrVactBUbuXQ%2B6%2FeO3ISCCyge%2FjlbOiu587BIfZ%2FNSXwjnewyY6u1%2Fg3IWALw%2F0CXI50qTh4DlnZA5tEVTIhPtSv38r3KuaJCGW&X-Amz-Signature=932497be90edaa74a7761062b5ceca11c2c54b247645729f144ab941f0b51b29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
