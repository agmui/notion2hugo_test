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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT6XJFOC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQC%2BSF8ID9KJTsOHIgj8Cyd50Y2A5OejNkQ7ytFYfljKPQIgPTLtsu9R4gIGPNWplik1p0uPD1Dqhrg1pgF%2FY8ZYF%2FMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDG2OkSO1g%2FbglngdCCrcA2QU%2FC4LU5eHBv%2FIjEQ8keXE%2BasP1ggILWhEsjLP4frbT5fr0Dw0C1r3vDw9avXLwHZbe2NFRPvYT3e9gBHsd1HJHC8sKXvthjD29Q%2FrLs3F8KADOg8ezYZiiyHIgswHAHpiRVUvA0hA5N3yu%2FPoPVSvta6dcsQas4Rhbg%2FFlECb26EZydFxYF0zFZZxLdwbhu4Rg7nKbYsqt192LE9lwwZwcSWrbbgOPAmBTJpDfIKILS45gPPrGyHrinXkNTP%2BInvWlPMUEJTz5D1Ik4xY3UVdBmTtzzJDglFyV2uONM6FLA7f4LUa%2BMhwUw%2FjK%2F3xPZ6uO8jSupB7X5JXeKCJBOd%2FJMoRS8%2Bsn59AP4JgIl8lH4OYoO2G00T8JloxyhmSef42GFfoKTAdf4k5Eqz1xTJxTTLlAUTQ7YXFj5SrrDLA2ilmLtw1c78EnibtzRzVUw48WwrBYy3yrxtx%2BJqpQKAQuONANDv4t9%2B8uC%2FRMAxf9pYG42w6va3SACRR2mBT9yzKVLy9nZoNGIfS9E8TpsTgNDcGQsrPTlUYEuISFgjH%2BXTBPuQ0oL%2BdlznqEKbvB29iwWIHiUpP6dZSlp6naBVDooU3sU8EzbykOmpFqJ76AdcIdAhNjv%2FY4R0uMJbU18MGOqUB559cLGKTJPOz7r3ToIyzhxUFnff74016HKAPZeAZcgzbzeMGrRh%2B5b%2FpLSzhIE2ouWYRmHqQ8%2Fm86qX2m2wDCUZI8AVT6zN4Zs3JgbnijlkY3KDRhwnKDiYpkAuSL6MnjG%2BxtdukK%2FuioK3ZJ9cZ4Ka%2Fj7%2BkV5%2FjdfjrBNYxnOERyjD1LwmOkDJGig7SKCNi9A4D%2BhVLKOivmAPI43UZkI4W%2BCJc&X-Amz-Signature=eecba753b1daba8e79ad628bda34abcf4aed0d7057317c6ffdb41d745b6fe4d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT6XJFOC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQC%2BSF8ID9KJTsOHIgj8Cyd50Y2A5OejNkQ7ytFYfljKPQIgPTLtsu9R4gIGPNWplik1p0uPD1Dqhrg1pgF%2FY8ZYF%2FMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDG2OkSO1g%2FbglngdCCrcA2QU%2FC4LU5eHBv%2FIjEQ8keXE%2BasP1ggILWhEsjLP4frbT5fr0Dw0C1r3vDw9avXLwHZbe2NFRPvYT3e9gBHsd1HJHC8sKXvthjD29Q%2FrLs3F8KADOg8ezYZiiyHIgswHAHpiRVUvA0hA5N3yu%2FPoPVSvta6dcsQas4Rhbg%2FFlECb26EZydFxYF0zFZZxLdwbhu4Rg7nKbYsqt192LE9lwwZwcSWrbbgOPAmBTJpDfIKILS45gPPrGyHrinXkNTP%2BInvWlPMUEJTz5D1Ik4xY3UVdBmTtzzJDglFyV2uONM6FLA7f4LUa%2BMhwUw%2FjK%2F3xPZ6uO8jSupB7X5JXeKCJBOd%2FJMoRS8%2Bsn59AP4JgIl8lH4OYoO2G00T8JloxyhmSef42GFfoKTAdf4k5Eqz1xTJxTTLlAUTQ7YXFj5SrrDLA2ilmLtw1c78EnibtzRzVUw48WwrBYy3yrxtx%2BJqpQKAQuONANDv4t9%2B8uC%2FRMAxf9pYG42w6va3SACRR2mBT9yzKVLy9nZoNGIfS9E8TpsTgNDcGQsrPTlUYEuISFgjH%2BXTBPuQ0oL%2BdlznqEKbvB29iwWIHiUpP6dZSlp6naBVDooU3sU8EzbykOmpFqJ76AdcIdAhNjv%2FY4R0uMJbU18MGOqUB559cLGKTJPOz7r3ToIyzhxUFnff74016HKAPZeAZcgzbzeMGrRh%2B5b%2FpLSzhIE2ouWYRmHqQ8%2Fm86qX2m2wDCUZI8AVT6zN4Zs3JgbnijlkY3KDRhwnKDiYpkAuSL6MnjG%2BxtdukK%2FuioK3ZJ9cZ4Ka%2Fj7%2BkV5%2FjdfjrBNYxnOERyjD1LwmOkDJGig7SKCNi9A4D%2BhVLKOivmAPI43UZkI4W%2BCJc&X-Amz-Signature=288c0462e9ebb28ab9cf61ee957d01d1f496bef181e2db673c05d7202b560e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
