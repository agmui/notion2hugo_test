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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575CVAR6%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCID8naoHH1eIfOP6MiitVvY2%2FuTm9HVUQVeDcMeD5%2FzRnAiBzmPKZnt4xRRwvjCy5udGcdDIGkBFLohqRgbNywuUHPyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWWZAw3jwwctlsAQDKtwDOXDP%2BrTvX%2FRbnS%2B7eSX%2FYFjud4DnJ8DTz1PvSSKSl%2F3cz%2BEnoQ2%2BVt3pej53LZ3gHKOtls%2FNhMXCvglCYXq8Ik36OF%2BJW51PZ8Gr0kdEhjXobIDNFIM0uRRj5BUQQ4iiRCHJ6MufTBYTbbGLCexj0RyA3i6d2W%2FtZS5hGXCKDUD23HZy6qY7bMIcTHDkyDyu9DD4oxL0kQanMs9ODFqm%2BsXxaghISlD3vNz6acVt%2FEBYZM4MNJCMepwtnoaWLC4Xi8EXlzUfxFG5V8qpUG9H%2BUFuq7wfHWOhczoA5SGc%2F7bGCbp7QJzV0E8DSpbToDuUQmDWCgvAzu60aof9kh0ASLS2CtY9kGb4HHGvGkJCX43zBplDw%2FGSWFs%2BDzNEaWl4h6C7nAgTDRUUO3WTML2SSGdL%2FWVTSVtlbPAXFvp69sFbiTAJId4A9Ho8Q1mkX22wsKYjEoLw19fvrI7Prcc16pNlLArT70tQOZ0vGYTphecwdfrTW4yb4nZON2lCgkJ1fcw8nnkI7tAZKmIWQXZrQF%2B%2Bf7X7wltzxEq0AYXlRwhAG%2FlNog9AGwTJh86vNWN%2BxEngdXQdl1GnEM7U6yPL27U4d2nIglG%2BTV3qRYqIXWiDJGvMiIT5CyCk7DcwjqLRvQY6pgETMyJvrLKGR%2BHYaIIrYoh2mcMGTnTQYO7MB2N%2BZYATKKgbv8x%2FEQ7YGK2MZod6g3TnPfnsExTuQSW953wIVjHz8ZhxhQ7Oadm8vIJIZNzBxa7Av8y2OtYK4C0HY16o43OIAbiR3AQa91id42bj6soNXjC9kqHU0z2Opm%2BbIsaG3xB7clJbQ0Kxqt2BNqTiqE4tKpKdqwB5zBWA%2BhyKwZMfq6iWK6Gb&X-Amz-Signature=1d479ba43d8a9110de5686b8e0a2c4b4b3006eb9fac9a77fa3fdda14a1faf235&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575CVAR6%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCID8naoHH1eIfOP6MiitVvY2%2FuTm9HVUQVeDcMeD5%2FzRnAiBzmPKZnt4xRRwvjCy5udGcdDIGkBFLohqRgbNywuUHPyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWWZAw3jwwctlsAQDKtwDOXDP%2BrTvX%2FRbnS%2B7eSX%2FYFjud4DnJ8DTz1PvSSKSl%2F3cz%2BEnoQ2%2BVt3pej53LZ3gHKOtls%2FNhMXCvglCYXq8Ik36OF%2BJW51PZ8Gr0kdEhjXobIDNFIM0uRRj5BUQQ4iiRCHJ6MufTBYTbbGLCexj0RyA3i6d2W%2FtZS5hGXCKDUD23HZy6qY7bMIcTHDkyDyu9DD4oxL0kQanMs9ODFqm%2BsXxaghISlD3vNz6acVt%2FEBYZM4MNJCMepwtnoaWLC4Xi8EXlzUfxFG5V8qpUG9H%2BUFuq7wfHWOhczoA5SGc%2F7bGCbp7QJzV0E8DSpbToDuUQmDWCgvAzu60aof9kh0ASLS2CtY9kGb4HHGvGkJCX43zBplDw%2FGSWFs%2BDzNEaWl4h6C7nAgTDRUUO3WTML2SSGdL%2FWVTSVtlbPAXFvp69sFbiTAJId4A9Ho8Q1mkX22wsKYjEoLw19fvrI7Prcc16pNlLArT70tQOZ0vGYTphecwdfrTW4yb4nZON2lCgkJ1fcw8nnkI7tAZKmIWQXZrQF%2B%2Bf7X7wltzxEq0AYXlRwhAG%2FlNog9AGwTJh86vNWN%2BxEngdXQdl1GnEM7U6yPL27U4d2nIglG%2BTV3qRYqIXWiDJGvMiIT5CyCk7DcwjqLRvQY6pgETMyJvrLKGR%2BHYaIIrYoh2mcMGTnTQYO7MB2N%2BZYATKKgbv8x%2FEQ7YGK2MZod6g3TnPfnsExTuQSW953wIVjHz8ZhxhQ7Oadm8vIJIZNzBxa7Av8y2OtYK4C0HY16o43OIAbiR3AQa91id42bj6soNXjC9kqHU0z2Opm%2BbIsaG3xB7clJbQ0Kxqt2BNqTiqE4tKpKdqwB5zBWA%2BhyKwZMfq6iWK6Gb&X-Amz-Signature=4e40d13f9eb8a11f6c6a879a8677a52ddd1d769db4eb7e77789da2390138117f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
