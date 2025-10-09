---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VAT4AR%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAvVlNHAn%2F0%2FptjRdbCZ3BVZubVhPPUQdCQkfpuzDqniAiEAldsrmQsBEgdzdxNfj%2BSXPNdOhmUm4GIhmoZQ8Ea7yIkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElHsxUXvo%2Bp%2BF3WqyrcA6YTxVClLvnDwfgcACWeSs0Lkuqmx4B8%2Bsvy%2BCGYfGt3xoPWEgGT4u%2B7Br7J0m3QEfKAdfJxBQVlSG3Mw8UtMcwPC2l%2BQLYg%2BmB7uQNi7DShhxWq87KI%2FQjW%2F3iBiGlLAK%2FEil9j8jFUw67uBsEdj3s1g4PdIUEXsRrcWNhlragKaNhmhdHhgGFk%2FI3%2Bog5EAhgnL3EoWmF%2Bne3ArH4ijnTfXEVXeGK%2FTUpk6dSt9pIfX0vVVBfmKt8c9Ik7A0JzKRBdE%2BOEnJFdPMi4UrJRk%2Fskx4pb6i%2B8vpM8JqP0U1pPRVo7g2u5KjL1U0HoLq7sehLQCr5MnHIT7wwvUYt4wFKI9p91jfJr20n%2BRltfVcRGOB5A36JX7h7zczE%2BfcrnIN3ecKqRVggMhwnok0t2zd9wx6N5PuyJtI3NOxrFY55slnGSctW2pNbzeOtno396eLkOhLQtnQuVyP2O0RmofnwzqH4iIlUmlnwmWLVYlxJizeQwcq9T4LQf3hGEz4n%2FNed%2FTL9xgIwUoIk4Z0mqr2%2F2DPNKE6XYVeCQba06PtnrgT5HsPk94w0lKpiD0ETJojhSCFIuNiOjSVaz3UyVXw%2F5%2BS25UMJvzS0HoEIqaoQxrkT73Q0j8iMVuzbgMJX7m8cGOqUBDLHdH7D7ayCU61exGvGqi6oNORUMGf%2BGrfoY5K1vmHr0G2SfiU1p9B8OgX7NNa0eIZZMyXIo0tjbQbJ%2BccpcnFdZsklJXq23VAAyJ9HxrjXWGT8pLOW6ZrVtXCrGUS%2BcUgZAG%2BwPa0pr5gqBYn93lBqw5joY0fTBTwZOsYweAV8eeXJ1zOffoGH5QR4ADRGyhlAqB2ccEUOWQ%2F6WAr%2B15hgM6scY&X-Amz-Signature=4f5b729c1017e4b0c77a1ad8ceea2ce7e67965c41e3dd99cc1174d750e471b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VAT4AR%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAvVlNHAn%2F0%2FptjRdbCZ3BVZubVhPPUQdCQkfpuzDqniAiEAldsrmQsBEgdzdxNfj%2BSXPNdOhmUm4GIhmoZQ8Ea7yIkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElHsxUXvo%2Bp%2BF3WqyrcA6YTxVClLvnDwfgcACWeSs0Lkuqmx4B8%2Bsvy%2BCGYfGt3xoPWEgGT4u%2B7Br7J0m3QEfKAdfJxBQVlSG3Mw8UtMcwPC2l%2BQLYg%2BmB7uQNi7DShhxWq87KI%2FQjW%2F3iBiGlLAK%2FEil9j8jFUw67uBsEdj3s1g4PdIUEXsRrcWNhlragKaNhmhdHhgGFk%2FI3%2Bog5EAhgnL3EoWmF%2Bne3ArH4ijnTfXEVXeGK%2FTUpk6dSt9pIfX0vVVBfmKt8c9Ik7A0JzKRBdE%2BOEnJFdPMi4UrJRk%2Fskx4pb6i%2B8vpM8JqP0U1pPRVo7g2u5KjL1U0HoLq7sehLQCr5MnHIT7wwvUYt4wFKI9p91jfJr20n%2BRltfVcRGOB5A36JX7h7zczE%2BfcrnIN3ecKqRVggMhwnok0t2zd9wx6N5PuyJtI3NOxrFY55slnGSctW2pNbzeOtno396eLkOhLQtnQuVyP2O0RmofnwzqH4iIlUmlnwmWLVYlxJizeQwcq9T4LQf3hGEz4n%2FNed%2FTL9xgIwUoIk4Z0mqr2%2F2DPNKE6XYVeCQba06PtnrgT5HsPk94w0lKpiD0ETJojhSCFIuNiOjSVaz3UyVXw%2F5%2BS25UMJvzS0HoEIqaoQxrkT73Q0j8iMVuzbgMJX7m8cGOqUBDLHdH7D7ayCU61exGvGqi6oNORUMGf%2BGrfoY5K1vmHr0G2SfiU1p9B8OgX7NNa0eIZZMyXIo0tjbQbJ%2BccpcnFdZsklJXq23VAAyJ9HxrjXWGT8pLOW6ZrVtXCrGUS%2BcUgZAG%2BwPa0pr5gqBYn93lBqw5joY0fTBTwZOsYweAV8eeXJ1zOffoGH5QR4ADRGyhlAqB2ccEUOWQ%2F6WAr%2B15hgM6scY&X-Amz-Signature=869e307ebd6aa24af7ccae15cdee542688511d5204c616a15eb4236bcb97f3b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
