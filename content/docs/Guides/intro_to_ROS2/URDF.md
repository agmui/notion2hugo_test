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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LPSYFVW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATSyfdpLoJznG6IxkDva0hnHYNpNf7p21SA07dKiap6AiEAqweCENrBSUe2AT08tR5zls1rcx4bLsqPucryxzoA5dAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAnjMZGQ89jGv1KpHyrcA6kkiB7xelK%2FrGF1P1AMCS%2FZ0jbIfGATEpzmzCAosjOtnM7mb%2FMFP6F5X9o9NZvNVqNBPZagYDEpvYKPwm9jhitqqfOq%2B84bHmYbeOAX5%2BUz87ouAyfvgRL7UNz7Sz%2FSKNU8mowEOBWnVCAbVu9vEEbDm4jRPrw8U3b8%2BTt2wEy5y5V8pCTZQNjbGtzrNt%2BNIa5CJxUGaeAZnDiAZcjQ047Q1DGLVv0nmgOpZxs5qWNUMVl2Rff6By1N3eUZIvhDa0OUPNooGA%2FNVg9iynPOgI7oARPj5%2Bf32%2BYTwKf%2BEiIHGYKuorecwV0O%2FmalvjnXB0wseodI%2Boxd06ZScAQXmgKLvj0gF2u2UyOppgOvyV37OQy46%2F3ApF5%2FHvIzY%2FWMF2aOKF6ID1K90x33v6H9znMjjFPPb91YT2L0AaA1omPLq6SyU5d7ssZo%2F1TpNoY7wz7J2MAPn4C0XksE4Xstnd%2BAfpdMeDjjGRhiV%2F0SM3jaoDd%2FC6ngwAJsme1WE%2BUxm4IHayTeF0SJsgGbybP%2BO78tfRtOQZli6c4t1PwkJ%2F7UpsYw62JguZJzQdiok2sLGoVpX7zJfMMZmIQxz4lKq6pOrCIgsxtqZOfg06rNcTLaMDnITkqryKr1wy5yMNHDp8EGOqUBtZuDBAve21ZYzr1YjFkCHBFBVZt%2FLDco09M9cTpeB7l%2BHaadanc0%2FU901CTar%2BIdFecs4O8BgNEw%2FHxAua6SlowCB1OYp%2FM957%2B%2FTl%2BzmfGh1dFFDaASm6X5sTgi3XWwj4ANHj%2BT70TO2KG9hno5h5C3CR09R3fT0%2FohUfuJcKKk7YhJEBcHBK04X31X1T7eBzZEo2sXglzcpWn3eluiguKitgvf&X-Amz-Signature=7fc2979514eaa50cb8add036c1f5f91f433eb358214d3f02bda11594c795b9c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LPSYFVW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATSyfdpLoJznG6IxkDva0hnHYNpNf7p21SA07dKiap6AiEAqweCENrBSUe2AT08tR5zls1rcx4bLsqPucryxzoA5dAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAnjMZGQ89jGv1KpHyrcA6kkiB7xelK%2FrGF1P1AMCS%2FZ0jbIfGATEpzmzCAosjOtnM7mb%2FMFP6F5X9o9NZvNVqNBPZagYDEpvYKPwm9jhitqqfOq%2B84bHmYbeOAX5%2BUz87ouAyfvgRL7UNz7Sz%2FSKNU8mowEOBWnVCAbVu9vEEbDm4jRPrw8U3b8%2BTt2wEy5y5V8pCTZQNjbGtzrNt%2BNIa5CJxUGaeAZnDiAZcjQ047Q1DGLVv0nmgOpZxs5qWNUMVl2Rff6By1N3eUZIvhDa0OUPNooGA%2FNVg9iynPOgI7oARPj5%2Bf32%2BYTwKf%2BEiIHGYKuorecwV0O%2FmalvjnXB0wseodI%2Boxd06ZScAQXmgKLvj0gF2u2UyOppgOvyV37OQy46%2F3ApF5%2FHvIzY%2FWMF2aOKF6ID1K90x33v6H9znMjjFPPb91YT2L0AaA1omPLq6SyU5d7ssZo%2F1TpNoY7wz7J2MAPn4C0XksE4Xstnd%2BAfpdMeDjjGRhiV%2F0SM3jaoDd%2FC6ngwAJsme1WE%2BUxm4IHayTeF0SJsgGbybP%2BO78tfRtOQZli6c4t1PwkJ%2F7UpsYw62JguZJzQdiok2sLGoVpX7zJfMMZmIQxz4lKq6pOrCIgsxtqZOfg06rNcTLaMDnITkqryKr1wy5yMNHDp8EGOqUBtZuDBAve21ZYzr1YjFkCHBFBVZt%2FLDco09M9cTpeB7l%2BHaadanc0%2FU901CTar%2BIdFecs4O8BgNEw%2FHxAua6SlowCB1OYp%2FM957%2B%2FTl%2BzmfGh1dFFDaASm6X5sTgi3XWwj4ANHj%2BT70TO2KG9hno5h5C3CR09R3fT0%2FohUfuJcKKk7YhJEBcHBK04X31X1T7eBzZEo2sXglzcpWn3eluiguKitgvf&X-Amz-Signature=c243616efa96f228172cd908e0e310d1197bb066ef9602f8108759e6f356dc12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
