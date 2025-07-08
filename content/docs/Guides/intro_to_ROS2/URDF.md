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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VHWGHS4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0ivn0t%2F0EyTMxaUbYFmvj%2F3fAAypgfiz7m1NVLv3g8AiEA8Eg1qcAB1b8MLygZx%2BINi6QS5TeqEoWV%2BGXM46Knfj8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFw4gf%2FWGphSeKHuYSrcA4dcminbDV%2F6VgOcJtwlXZ2cg5Xsg3oRqkbliXegwTtKIFW%2FQBH47XKUtBijRTaqLHXUy0f1K9iA3lkRy7vRmyTMEcQ7eIxbn53VYppquLkpfy%2BM9p3sabRfG8wFyKg4XNG1OGBbWj3hLI%2BuV1F6KiI2YuPoLfTsRACJcWvcvzzK%2F90WO9xWovOQwmFhGYs02E34vNUf3aihV4y7kjFWYPDo%2FD1eAU9L3x5yp75p0SP49mkb94pA9q5DGks4LWEdApe8fDZ1OwFou2zcMUQDGwCnInzMtMYm4Nc55nFfCNDOXZw6QD%2FzWCszpfzTnjTkBeIipxZkGCJDrg2FEluo%2FhN2viKPeIDmTt6fyhGmI5iY0YCPjwXEc4j7u7bt8gDkSla3CmpcWoEwR%2BK2cVQ6Erpz%2BsB2hwIUkx18NkmOcDzBoNZmkwGrPQZPhr1dy2KcQW0PpAsWcYeBaHgO5aRtwEkdn2xJ9otembRLD9P9GJPv2k2uVwcDxVGyrF3PNSw2NSFioOiBA%2BANUyccZ2W3oYrVONowEq0LOWZWKDgzSbyHgHhF5a7hvBH8SDL0cNGJApFZ3awyv4dc4wSge%2BA7lChcqZLpzZ%2Fxd%2FjRoeGcR3e5Zo42fPJV6v5z3%2FPWMKSmtMMGOqUBr2vrQcTXwhxDHpAANa2edBC1XeOhqJ4GktnRjrxzQxxaHeI7MPG09PmSBZ%2BhegERrNNrm6Fqy3UsI3RWko1B2q2C%2BjX1JWjomlPACfOK%2BHkFOedSHAwbj3Auxlvm51AKNiwOe01XPYn58E8kk6bdWM%2BsAz1iPIIMNS46ca%2FAmITq5dRBcXH31TbpBrKo0Hm5uow35m5VlOtwutHB2V9KQ2Z%2Fjl%2Br&X-Amz-Signature=a3a477a726f10a0ffec466fad90a37ab42adde7c5e9ec655e4c4f6b3d0be11b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VHWGHS4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0ivn0t%2F0EyTMxaUbYFmvj%2F3fAAypgfiz7m1NVLv3g8AiEA8Eg1qcAB1b8MLygZx%2BINi6QS5TeqEoWV%2BGXM46Knfj8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFw4gf%2FWGphSeKHuYSrcA4dcminbDV%2F6VgOcJtwlXZ2cg5Xsg3oRqkbliXegwTtKIFW%2FQBH47XKUtBijRTaqLHXUy0f1K9iA3lkRy7vRmyTMEcQ7eIxbn53VYppquLkpfy%2BM9p3sabRfG8wFyKg4XNG1OGBbWj3hLI%2BuV1F6KiI2YuPoLfTsRACJcWvcvzzK%2F90WO9xWovOQwmFhGYs02E34vNUf3aihV4y7kjFWYPDo%2FD1eAU9L3x5yp75p0SP49mkb94pA9q5DGks4LWEdApe8fDZ1OwFou2zcMUQDGwCnInzMtMYm4Nc55nFfCNDOXZw6QD%2FzWCszpfzTnjTkBeIipxZkGCJDrg2FEluo%2FhN2viKPeIDmTt6fyhGmI5iY0YCPjwXEc4j7u7bt8gDkSla3CmpcWoEwR%2BK2cVQ6Erpz%2BsB2hwIUkx18NkmOcDzBoNZmkwGrPQZPhr1dy2KcQW0PpAsWcYeBaHgO5aRtwEkdn2xJ9otembRLD9P9GJPv2k2uVwcDxVGyrF3PNSw2NSFioOiBA%2BANUyccZ2W3oYrVONowEq0LOWZWKDgzSbyHgHhF5a7hvBH8SDL0cNGJApFZ3awyv4dc4wSge%2BA7lChcqZLpzZ%2Fxd%2FjRoeGcR3e5Zo42fPJV6v5z3%2FPWMKSmtMMGOqUBr2vrQcTXwhxDHpAANa2edBC1XeOhqJ4GktnRjrxzQxxaHeI7MPG09PmSBZ%2BhegERrNNrm6Fqy3UsI3RWko1B2q2C%2BjX1JWjomlPACfOK%2BHkFOedSHAwbj3Auxlvm51AKNiwOe01XPYn58E8kk6bdWM%2BsAz1iPIIMNS46ca%2FAmITq5dRBcXH31TbpBrKo0Hm5uow35m5VlOtwutHB2V9KQ2Z%2Fjl%2Br&X-Amz-Signature=f9178dbe026a8dff8e0ad5f4aacfb10e8032621a71c487f39d90a429747560ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
