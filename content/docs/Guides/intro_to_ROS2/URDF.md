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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGE4LCE5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDmw2flJROKKjjyNnhqs3VwSYVA48JXzImrQJUN36NErwIgBH%2BlSKWHa%2F6Sq2hFod%2BqPiolKKLlbr7n%2B6UbCR%2FIrzUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHGyEwxVgsXZl%2FMyrcAyhTMjz%2F9X5V28WWF%2FhpMcerOweoILurFRT2Ma%2By0rlMGeobNqACIIahJRP2S6uWFFh%2FtlnS%2F91eu5Np6YskJ3AIJmcy4RS70qUjEYBEY02pW9BmCyTekkFoD3z5B9pbW%2F7cTVJQzJz4vhyDcnF3q5sLx9XeuLKHWh3rk9zl%2FapQINJM%2FiHGqxgdvSUpWEjlKNNQTEvSkYjUCg9tuKV1i%2Bqug%2BLUZ8%2BC1hdisC5az2GBgKWkLQH6AdpheoCxCY0%2Fz1KWPGOgcbEV%2F9hXIX7xbwTQtb7bHxekRH8jAaTqm5pczDsM1oXqV%2BOCwMMuWSkIDhKiSOvWaQYLggg%2BFu4CcaIWKPp%2BPBe8OErP1W9r3fpYRdBq1989gBxTOkaScU1lur7SAEEnMvpUf%2Fx9rq5KjcUYbxA4%2Btmm2d3oHcx%2B%2BuxsXWdjlFh%2FPLvvnFaEkgfYNOGKBgJ5zfVhG%2FxeBoqdVyLklNI8mgmUwi6d%2BnN%2BmLjWgC7DLuxLi1JI6gu0Lt6MHx%2FPypyrSoVOE0mHwQfG6CUnjXHb573P78n3IrJ0b0rCkorOYCVvHRvvW95WAfWKqGNPG0SCnoEx00vhtrheywL7X94cK6i1RjvXJ8t5AEXuWnos7yyUfp2DyHsdMLrQhr4GOqUB0%2F1NSm3l8RJUQu%2FT63OG5TY5ihUs5ScmpxCOlKPzU32MhiRsIQropJbZh1SSG5bD%2BGsBAEPEJ22%2BvBIbVfIpkCIuGtXpI%2BhuFk1qFcsg5oWpJ8ZSb4zSaSQhlHl%2F2Ll8FSU5QEDw0J2OF72E7j%2B4GzFNTrUvaqRITto9R3u4HAigyCmkGFi2TEh85HHz5QTaSFVJUAm0HZxG962yKllQD8QRkHQx&X-Amz-Signature=9d0dd97c15932ca7e68bd95a13771cdac2ddc245cbe80a752a07fc5d26b8474f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGE4LCE5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDmw2flJROKKjjyNnhqs3VwSYVA48JXzImrQJUN36NErwIgBH%2BlSKWHa%2F6Sq2hFod%2BqPiolKKLlbr7n%2B6UbCR%2FIrzUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHGyEwxVgsXZl%2FMyrcAyhTMjz%2F9X5V28WWF%2FhpMcerOweoILurFRT2Ma%2By0rlMGeobNqACIIahJRP2S6uWFFh%2FtlnS%2F91eu5Np6YskJ3AIJmcy4RS70qUjEYBEY02pW9BmCyTekkFoD3z5B9pbW%2F7cTVJQzJz4vhyDcnF3q5sLx9XeuLKHWh3rk9zl%2FapQINJM%2FiHGqxgdvSUpWEjlKNNQTEvSkYjUCg9tuKV1i%2Bqug%2BLUZ8%2BC1hdisC5az2GBgKWkLQH6AdpheoCxCY0%2Fz1KWPGOgcbEV%2F9hXIX7xbwTQtb7bHxekRH8jAaTqm5pczDsM1oXqV%2BOCwMMuWSkIDhKiSOvWaQYLggg%2BFu4CcaIWKPp%2BPBe8OErP1W9r3fpYRdBq1989gBxTOkaScU1lur7SAEEnMvpUf%2Fx9rq5KjcUYbxA4%2Btmm2d3oHcx%2B%2BuxsXWdjlFh%2FPLvvnFaEkgfYNOGKBgJ5zfVhG%2FxeBoqdVyLklNI8mgmUwi6d%2BnN%2BmLjWgC7DLuxLi1JI6gu0Lt6MHx%2FPypyrSoVOE0mHwQfG6CUnjXHb573P78n3IrJ0b0rCkorOYCVvHRvvW95WAfWKqGNPG0SCnoEx00vhtrheywL7X94cK6i1RjvXJ8t5AEXuWnos7yyUfp2DyHsdMLrQhr4GOqUB0%2F1NSm3l8RJUQu%2FT63OG5TY5ihUs5ScmpxCOlKPzU32MhiRsIQropJbZh1SSG5bD%2BGsBAEPEJ22%2BvBIbVfIpkCIuGtXpI%2BhuFk1qFcsg5oWpJ8ZSb4zSaSQhlHl%2F2Ll8FSU5QEDw0J2OF72E7j%2B4GzFNTrUvaqRITto9R3u4HAigyCmkGFi2TEh85HHz5QTaSFVJUAm0HZxG962yKllQD8QRkHQx&X-Amz-Signature=ebdfe3130d94376f321bc50582ba673118109c2b16d2fa8133ccac2ed1233306&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
