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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FBOK5GR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkvVEg%2BGM%2F%2Bhviq7Af3mzrKcPaGuT%2Fk8iNEoI4frKHzAiEAzATD7dwWUoW4HTSIg5ZvfhFMaLG5sId4uvIFoh%2B7F2wqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPP2YPl3XGMiI5fbPSrcA3QgE24U29mxYoyNYgAw3ZnAnkIoX6yEnkcsGo1dkPhpD4tq%2Byx4V8egeppGckfSP0DHOAi6d90rmN%2B%2F2Emw3qkYCbVyCwBUePcfBNVu%2B0KS5Mpfj1hrN6hcQNYPIRFgsI9kUw9e%2ButJ%2FPTjOMLdJLHxrkcJh745RvdaVdtgZp9NsCFEnDBR5fj78ioDrwoTMb0loT5ea9LiMzeUQmwvOwQEC7oMBZ8I545fbu9I%2BQ78da%2Fl3qy9Z%2Frylpu7RXcuOwSHvsAZxpL43YuNybCImS8cQ7YsfkH%2FlLFrgs%2BkmCffp0RBQo%2BpcHkl9gMaXLNFsv45XZhLdlH5QM4FgkhfHfC5whhtm7Okhf6eYQ77uZWrP%2F2oIIHc7cd8XjUTKVy1AUBgNjS%2BVUWaJ2QxZCt%2F3KQgcgmvMPCI%2F37YvKMFg79%2Bbu6QwRCMUrnsjZVAS0d2OG4WTKQM0q17aDBWvqAMir0V7RFqVWKrqt%2FAnd5mARuvqeXcLwVVmpYRVfd0d6KWrUNwzn0z5WIXMNcvvzdfwyTzIrS52vwjuXB%2FQYeLAvQNOh2ocSZPE%2Fc7RcmIPbqDXbniw6X6HpwuBOTl95Oi9N10LGioyJBR4mHvmh17%2FaSc%2BTMMpFkHEfo2VapmMLzX%2BsMGOqUBqtTilMVwAUclg0jTQqpqqzv6iH2CDe4ni1TZ77hzgcskrfsWI%2BkK2R%2BG73tXeFU3rAFd3RBOy%2BtOJPygesFuBE2clASuVYc%2F%2BH%2F1ErHQyaOcrT1MwsKvOG3LS87I5fVekY01dTkNzuPDke8RQ4EeG7uJDY01MBmRUY%2BcB9iy9aJ0QI5gUw3C2NN%2BpOtG%2FY14wwsroJgoQpAEGlIHkC9mWGQVwAc0&X-Amz-Signature=625eedb837fe99d6f01b3eb495b63a96ec626f10307318da763cf82b96325363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FBOK5GR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkvVEg%2BGM%2F%2Bhviq7Af3mzrKcPaGuT%2Fk8iNEoI4frKHzAiEAzATD7dwWUoW4HTSIg5ZvfhFMaLG5sId4uvIFoh%2B7F2wqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPP2YPl3XGMiI5fbPSrcA3QgE24U29mxYoyNYgAw3ZnAnkIoX6yEnkcsGo1dkPhpD4tq%2Byx4V8egeppGckfSP0DHOAi6d90rmN%2B%2F2Emw3qkYCbVyCwBUePcfBNVu%2B0KS5Mpfj1hrN6hcQNYPIRFgsI9kUw9e%2ButJ%2FPTjOMLdJLHxrkcJh745RvdaVdtgZp9NsCFEnDBR5fj78ioDrwoTMb0loT5ea9LiMzeUQmwvOwQEC7oMBZ8I545fbu9I%2BQ78da%2Fl3qy9Z%2Frylpu7RXcuOwSHvsAZxpL43YuNybCImS8cQ7YsfkH%2FlLFrgs%2BkmCffp0RBQo%2BpcHkl9gMaXLNFsv45XZhLdlH5QM4FgkhfHfC5whhtm7Okhf6eYQ77uZWrP%2F2oIIHc7cd8XjUTKVy1AUBgNjS%2BVUWaJ2QxZCt%2F3KQgcgmvMPCI%2F37YvKMFg79%2Bbu6QwRCMUrnsjZVAS0d2OG4WTKQM0q17aDBWvqAMir0V7RFqVWKrqt%2FAnd5mARuvqeXcLwVVmpYRVfd0d6KWrUNwzn0z5WIXMNcvvzdfwyTzIrS52vwjuXB%2FQYeLAvQNOh2ocSZPE%2Fc7RcmIPbqDXbniw6X6HpwuBOTl95Oi9N10LGioyJBR4mHvmh17%2FaSc%2BTMMpFkHEfo2VapmMLzX%2BsMGOqUBqtTilMVwAUclg0jTQqpqqzv6iH2CDe4ni1TZ77hzgcskrfsWI%2BkK2R%2BG73tXeFU3rAFd3RBOy%2BtOJPygesFuBE2clASuVYc%2F%2BH%2F1ErHQyaOcrT1MwsKvOG3LS87I5fVekY01dTkNzuPDke8RQ4EeG7uJDY01MBmRUY%2BcB9iy9aJ0QI5gUw3C2NN%2BpOtG%2FY14wwsroJgoQpAEGlIHkC9mWGQVwAc0&X-Amz-Signature=2c64df43dca740bcc5f3e0560e359e93b5c3fb08dc855b3299be2a684de467ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
