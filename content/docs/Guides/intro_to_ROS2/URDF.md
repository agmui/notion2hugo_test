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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRVEFOP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDY6R1JNQmUAufJMbhcnji4B1YzcPmg2AS3US1ssAcbBAIgNKQBbhDihhM1GVuWAEkcXRBeB%2FkLdFNodG%2B127YFUMcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDUhWCGeKMAKng%2B1yircA9ZuRzw9cOxCL8Qw6iy6TOEG7A7V0r82pk8ErZWiJWr%2Bks4cEIdwf29JiA8cTSeFZdmQduUjeYqYfTgpbAWPTNV8Grhf0xYPJQdAtSlIMXI55zzTQOegKUfQmamYCDiahfHsxLTwWROXVMqR72VxZxnCIF6TvjumtRAmICZR1LdXIbmIBm0kU7cBj73d1noPQ%2FR31YIWzhEakGem03zc64OScU3HLc8YoDNysn%2BeIT%2BZmDc0qtyI2SAlq3bsl67QlBFdeCzQ9LahEV%2Bfh1eECbW5lPR1eWsaEsy%2FHLjD4dR0xb2oqriDUwXm7YvkG2a1dusw4IRl9ZprvhbhSYEvOC%2B2j3JKCcIolTtep4ExUNm6Gk0cmgAJHal5GGLGVd4tKVgHWoCK6NGSQIZtVzweY7xXxtGsx4APQJgGo4W9SYoKj%2Frx0jWmyf7dVAqNcoCm%2BwneU7XwMnYuqU4TOvCE2kWlY9zGCB%2FG7hcuZ8HEPaLnw9d6YMeSq1v9EaXwtUcvoD4Uy1xVS22aZABqx7jR3IZE0U4j8lXohptlQhe9sQlrUiKN1o%2B6s18mfXponMYOEULtzjhLuHQYpw4rR%2BzDpZkKLJ6b2py0oduOW6FlxzHWiBjpbSBzebdu%2FeEqMK6blb0GOqUB%2BZbf5R9XNC0bPjB5lrDVq%2Fwr9EZzcyJHJQLz6JpRoCpZQZn63fEESYc9gnZI5joFvrI%2BH2yN07dCJIbZ4P0o370Odju8zYCUiS4EJX29IS0t0mvRzRhUmkxKQ2elg322DvdGxh7NhQeHPpSpVb2Lr4AXh%2BxPoO5YJpUtb274OkrXpQVFdhR7k4ZTlyhjOwzCyfLOmIcQeAQwRULbKala9iNDAKJ%2F&X-Amz-Signature=39cd95e8fba5757c4a16187b49340d1d3e0479c251d0bbd7166aefc668f45c87&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRVEFOP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDY6R1JNQmUAufJMbhcnji4B1YzcPmg2AS3US1ssAcbBAIgNKQBbhDihhM1GVuWAEkcXRBeB%2FkLdFNodG%2B127YFUMcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDUhWCGeKMAKng%2B1yircA9ZuRzw9cOxCL8Qw6iy6TOEG7A7V0r82pk8ErZWiJWr%2Bks4cEIdwf29JiA8cTSeFZdmQduUjeYqYfTgpbAWPTNV8Grhf0xYPJQdAtSlIMXI55zzTQOegKUfQmamYCDiahfHsxLTwWROXVMqR72VxZxnCIF6TvjumtRAmICZR1LdXIbmIBm0kU7cBj73d1noPQ%2FR31YIWzhEakGem03zc64OScU3HLc8YoDNysn%2BeIT%2BZmDc0qtyI2SAlq3bsl67QlBFdeCzQ9LahEV%2Bfh1eECbW5lPR1eWsaEsy%2FHLjD4dR0xb2oqriDUwXm7YvkG2a1dusw4IRl9ZprvhbhSYEvOC%2B2j3JKCcIolTtep4ExUNm6Gk0cmgAJHal5GGLGVd4tKVgHWoCK6NGSQIZtVzweY7xXxtGsx4APQJgGo4W9SYoKj%2Frx0jWmyf7dVAqNcoCm%2BwneU7XwMnYuqU4TOvCE2kWlY9zGCB%2FG7hcuZ8HEPaLnw9d6YMeSq1v9EaXwtUcvoD4Uy1xVS22aZABqx7jR3IZE0U4j8lXohptlQhe9sQlrUiKN1o%2B6s18mfXponMYOEULtzjhLuHQYpw4rR%2BzDpZkKLJ6b2py0oduOW6FlxzHWiBjpbSBzebdu%2FeEqMK6blb0GOqUB%2BZbf5R9XNC0bPjB5lrDVq%2Fwr9EZzcyJHJQLz6JpRoCpZQZn63fEESYc9gnZI5joFvrI%2BH2yN07dCJIbZ4P0o370Odju8zYCUiS4EJX29IS0t0mvRzRhUmkxKQ2elg322DvdGxh7NhQeHPpSpVb2Lr4AXh%2BxPoO5YJpUtb274OkrXpQVFdhR7k4ZTlyhjOwzCyfLOmIcQeAQwRULbKala9iNDAKJ%2F&X-Amz-Signature=65d900cafe3bd7339d4f24f50e42cba69d1232e376db2b6c5bd1b71114dcc47c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
