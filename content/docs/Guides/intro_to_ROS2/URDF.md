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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A53VJRR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT0A7dQ33oEpuMVWzu7ykHEN1qLNZ8uQsNSgSQMEhH%2BQIhALCbX2ImMXC8Ob873dD2G2tV9mgpwkpWgs%2FRrNkni6xdKv8DCEAQABoMNjM3NDIzMTgzODA1Igyy9a7MPZnSudsrJN4q3AMsFf8TxzIPm0qzqbDe2rsTydGvnkh7K9mr6FxmQNRziZg%2B4eMx%2Br5n3QTqdBdL54Y2k%2FNIRiOLkZkBEATh1cy%2F9XJxYgtUV3dWiQzpRuHjuu72u1vDJDdb1qMrQuGjT7BgyVYg%2F4opsnkCLBf9Z2FAlonJZ5ruWiSsmaphxH29Jc9V1p8d6upuM%2BWkknc6wg3kXaYUz9W6fb000tCgnSQT3mEb3gotN8qA%2FhiIxP0De2t4%2B6uIjeC46i%2FNKblb9BXBLDtJoUpc0uHntfoxMWspyElYIbKpC5mpQHtyOvlfsWdBx9VuYIzn51d%2BWF%2BjVDDRDsHvFIDycA%2Fq4%2Fs8GW%2B86aI0%2F40Ib8IYsOoQD67hOEWWCfQEOQSqj2kDpy%2B4lfqjlpj8ONnl%2BiN9%2BoomHZXjeLkVxFh%2B6xpLIAZTY%2BgeKPHqTmMTlicTW%2BL0gIHLFnP8AZeN%2Be6MSTO2hUi20P3RhW9qWyP28vC3JtARsRxaBvDCa%2B43iIh2khjxtXCFoyKFJw3aEMuoJQCXtoUX%2FT33ZG40hB96%2FI%2BY%2BrHkE%2F%2Focmwcx0qiF7ZwI%2BNBIZiB9dypdN8OrWbilU9JIpcN7h7BPoDjV3pkDKwYOO59k94Z%2FjbuH%2BADusIjl6JQtDDa7%2BbABjqkATJMT%2BVTorSaUmySpty5fb%2FyJIwvprIWLjq2HZq6A2zk%2B0HGBJZ%2B5R4lpDhY73JQq1JDwstxDXuSnX1GvCZMQjJwZ7dw4LhYrLhJ0%2BkWIYXLdX2XLh5igj5NAQ5u%2FkFzKQH5i%2BDFs0Mw6C%2BBaAlkvWHJLTsqOuUaTIz6ktn3Anfq%2F1ZVFjubF%2BjB7Zm1DzbWP72D56HvUcwfAU5ok1gJ1v3iW9CO&X-Amz-Signature=ac99fd6a6a4abea63ddc85e1cf5c6f458629de39e61a7e93ade9416418d774bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A53VJRR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT0A7dQ33oEpuMVWzu7ykHEN1qLNZ8uQsNSgSQMEhH%2BQIhALCbX2ImMXC8Ob873dD2G2tV9mgpwkpWgs%2FRrNkni6xdKv8DCEAQABoMNjM3NDIzMTgzODA1Igyy9a7MPZnSudsrJN4q3AMsFf8TxzIPm0qzqbDe2rsTydGvnkh7K9mr6FxmQNRziZg%2B4eMx%2Br5n3QTqdBdL54Y2k%2FNIRiOLkZkBEATh1cy%2F9XJxYgtUV3dWiQzpRuHjuu72u1vDJDdb1qMrQuGjT7BgyVYg%2F4opsnkCLBf9Z2FAlonJZ5ruWiSsmaphxH29Jc9V1p8d6upuM%2BWkknc6wg3kXaYUz9W6fb000tCgnSQT3mEb3gotN8qA%2FhiIxP0De2t4%2B6uIjeC46i%2FNKblb9BXBLDtJoUpc0uHntfoxMWspyElYIbKpC5mpQHtyOvlfsWdBx9VuYIzn51d%2BWF%2BjVDDRDsHvFIDycA%2Fq4%2Fs8GW%2B86aI0%2F40Ib8IYsOoQD67hOEWWCfQEOQSqj2kDpy%2B4lfqjlpj8ONnl%2BiN9%2BoomHZXjeLkVxFh%2B6xpLIAZTY%2BgeKPHqTmMTlicTW%2BL0gIHLFnP8AZeN%2Be6MSTO2hUi20P3RhW9qWyP28vC3JtARsRxaBvDCa%2B43iIh2khjxtXCFoyKFJw3aEMuoJQCXtoUX%2FT33ZG40hB96%2FI%2BY%2BrHkE%2F%2Focmwcx0qiF7ZwI%2BNBIZiB9dypdN8OrWbilU9JIpcN7h7BPoDjV3pkDKwYOO59k94Z%2FjbuH%2BADusIjl6JQtDDa7%2BbABjqkATJMT%2BVTorSaUmySpty5fb%2FyJIwvprIWLjq2HZq6A2zk%2B0HGBJZ%2B5R4lpDhY73JQq1JDwstxDXuSnX1GvCZMQjJwZ7dw4LhYrLhJ0%2BkWIYXLdX2XLh5igj5NAQ5u%2FkFzKQH5i%2BDFs0Mw6C%2BBaAlkvWHJLTsqOuUaTIz6ktn3Anfq%2F1ZVFjubF%2BjB7Zm1DzbWP72D56HvUcwfAU5ok1gJ1v3iW9CO&X-Amz-Signature=6dadef179983a2a0072a3ef6bb954cdde42fface6836828fce70e32e63aa4adb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
