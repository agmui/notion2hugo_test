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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBRKXQN%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCB0SHQ0Pn8Eo7ZOs199eU%2FMtq36rtoOEkefMwWLFhr1AIhAMlstI1eAUbOsmZ57DBHkJ9skFOKjQTa2vKO3yMgMogRKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBUvdQtKg8cZG6zWoq3AOLv8%2Buc4zH19A%2BSuLhoesYRibmK1FMuz0snF0V8mBcVXf35x%2BKL4fW96lgR0CXP54btXU8helyLIz9c1lWp5QNJ9dBng0UKwfQ%2FV7Bn7N0k2BRGfECaFkI1DPhmOrTckgfAS%2BhuDNrEfnTi%2FNmU0AzuSIgkpn7qjkBvjx8lR0BpDbxxFn2g5ExnVlUO1qeknog%2FDMBcwzCZJbzVzhC4ruNG1ew7LEGWXPtWPffcbO9sTzjNuqngoLkmiMnq3v%2Bga%2F0fSzia0iFUeEQBMmIZX6juMbVNv5ffj9TDExKgg2oxVQucSEUEg2ZRD0kkRC%2FY93Ez7a%2FyEvc8pF610o7P8llyd1zPPA4z8VXCmOutDZ47lgtXR7pX65vaq9ENVPvdCSoVWBCEK1H2WuIxQpfPcDB%2Bri1a7vRo%2FCJWY0iU7V4agZm%2BHc15%2FLrhmHvMqO1WGvAC203sOAF%2BwO%2B58tiR3jj7v2Dd5v4YOHJCfEgeteovlzeXcyT%2B4H26KmvszdvlwZHgJf4lPO5umLYqHN7%2FMFMBQ%2FHxz%2B3h7gJ1yZTle0sRs6EGBPTGcio%2FkFFYs1J9D4eHcys%2FEE2bS%2BGVZD4lbu1loBGT9Kduz7MQfIsfHGgqFuW9OrerO9P3lfdADDZ8sK%2BBjqkAfElMCgWKvIl8SwlO6hnfspZGcSYP1JUDuSFae0jtpG2YtLd%2BCIHAZrNcYj0z%2BZiOBmczJnekdg3i%2BEQ3DzX%2B2jcD1jZZfA7HZ0RZYCrPr9%2B8zMlTseQBiuXHkHaSil7RS7moZpuPqhybK8MFUbB8CXLhmuofVECBHavJz2qLhi7azftU2svOEWJCAO%2BTHT1Uc7ZVJ1o5%2B284wKVvNWQeJTVNYa0&X-Amz-Signature=e98db4b3fd6bbc96eff57e6c8b6be41e62cc61909359a62dea618054287cc66e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBRKXQN%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCB0SHQ0Pn8Eo7ZOs199eU%2FMtq36rtoOEkefMwWLFhr1AIhAMlstI1eAUbOsmZ57DBHkJ9skFOKjQTa2vKO3yMgMogRKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBUvdQtKg8cZG6zWoq3AOLv8%2Buc4zH19A%2BSuLhoesYRibmK1FMuz0snF0V8mBcVXf35x%2BKL4fW96lgR0CXP54btXU8helyLIz9c1lWp5QNJ9dBng0UKwfQ%2FV7Bn7N0k2BRGfECaFkI1DPhmOrTckgfAS%2BhuDNrEfnTi%2FNmU0AzuSIgkpn7qjkBvjx8lR0BpDbxxFn2g5ExnVlUO1qeknog%2FDMBcwzCZJbzVzhC4ruNG1ew7LEGWXPtWPffcbO9sTzjNuqngoLkmiMnq3v%2Bga%2F0fSzia0iFUeEQBMmIZX6juMbVNv5ffj9TDExKgg2oxVQucSEUEg2ZRD0kkRC%2FY93Ez7a%2FyEvc8pF610o7P8llyd1zPPA4z8VXCmOutDZ47lgtXR7pX65vaq9ENVPvdCSoVWBCEK1H2WuIxQpfPcDB%2Bri1a7vRo%2FCJWY0iU7V4agZm%2BHc15%2FLrhmHvMqO1WGvAC203sOAF%2BwO%2B58tiR3jj7v2Dd5v4YOHJCfEgeteovlzeXcyT%2B4H26KmvszdvlwZHgJf4lPO5umLYqHN7%2FMFMBQ%2FHxz%2B3h7gJ1yZTle0sRs6EGBPTGcio%2FkFFYs1J9D4eHcys%2FEE2bS%2BGVZD4lbu1loBGT9Kduz7MQfIsfHGgqFuW9OrerO9P3lfdADDZ8sK%2BBjqkAfElMCgWKvIl8SwlO6hnfspZGcSYP1JUDuSFae0jtpG2YtLd%2BCIHAZrNcYj0z%2BZiOBmczJnekdg3i%2BEQ3DzX%2B2jcD1jZZfA7HZ0RZYCrPr9%2B8zMlTseQBiuXHkHaSil7RS7moZpuPqhybK8MFUbB8CXLhmuofVECBHavJz2qLhi7azftU2svOEWJCAO%2BTHT1Uc7ZVJ1o5%2B284wKVvNWQeJTVNYa0&X-Amz-Signature=0aa2fafa22e7b592acd0c14b9ea9371a5aace20813137b7d695e857c6be1bfd1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
