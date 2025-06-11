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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUCPU3T%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBgq2BK1dI6YHoVF4S%2B1CY5D3YKX4wG%2BnZqW41u2xvTLAiEAga0My95aVYl5hPnU6J9AnB6oTwmxXOJYSXwNhBQZ3fAqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj%2Bo43PlvBO1G7z8SrcA7a1gon8IV8gs0MAbEFZv8zK9LuulidMWtdaDXR3Bn8NSmW4YwnFDrZRVZwJsFhXYnhOMZuGu2RYJpnA%2BJ9TjWqOqMy8E%2F7Ma2%2Fzdm%2FxcUqgBoy%2FG%2F2JihBQngKM8tZNnU%2FHIY7ROvKM61h1%2FugistFqOS2ddfxAQGNHYe0rSh67GBdOilh1pvY1unvQDt1F9L4oqmL1Z0dkdAgSjeRykuPfMTmGKeALP%2FyNl3jnBjoqs3MAf7gVgplgXJJgQP7qmYrpmEAMwqyw1n9Ha5pdtGhwLpw6ckOfNYjIHkl4qA0WbTIV5jIXH6vrZ%2FQ7Q1QFI%2FrCrrinWkUfKPwxdPvS%2B5NKAgB4pE23HVGzHAfN4NUu0GBakZ7NmKvA9ctlhAWTAulnnlUO47z9iEBLbPMkzxzkJB8ae1tzws5FNPoQmvbwTAI%2FVaIrW3oJwspQ%2F3zFajGfLfHJQUwfUpChtLBLVs2lfosR9s3%2Bm5oPeR7NaT1oC8q1ieKbYgJHDhMJcTGg4VOkY%2BZzm2WV%2Bcrw7lbD5IFjE%2BOf5Ga6lbd%2FrNRdIy4RXVKrJmDSSbCinQnApuoeRYvOJxoVaH8aaeCUfga62vgSbuEvmG2iufhgJlCHaiEMrEqTxpRHGuxcEurXMO%2FIpsIGOqUBg8ZNE%2B9HTFHyLgFxRi8qLhSb5Mou5zA2s2d9XPx4cWWPADPAS11cvCXe7fSaD1WGLuckMU5wMkpBBobvK%2FdUAvugjQwVfSFMUE0E6q1%2FnMTAptMvyCUc4%2B0VcBKvuFcsoOHApmOIheM8WOGdc6TLdHxqF619sRQ9BcCcEGHEaTcFe06c4aXvNXRvY2u2BIxHfr7%2FPFUgAzMFJLF61p0NUnsZxCeu&X-Amz-Signature=b6aabff8a292d273f8ca4c5457fbdddacca7914eb5960c14e0e72a73a0e3700b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUCPU3T%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBgq2BK1dI6YHoVF4S%2B1CY5D3YKX4wG%2BnZqW41u2xvTLAiEAga0My95aVYl5hPnU6J9AnB6oTwmxXOJYSXwNhBQZ3fAqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj%2Bo43PlvBO1G7z8SrcA7a1gon8IV8gs0MAbEFZv8zK9LuulidMWtdaDXR3Bn8NSmW4YwnFDrZRVZwJsFhXYnhOMZuGu2RYJpnA%2BJ9TjWqOqMy8E%2F7Ma2%2Fzdm%2FxcUqgBoy%2FG%2F2JihBQngKM8tZNnU%2FHIY7ROvKM61h1%2FugistFqOS2ddfxAQGNHYe0rSh67GBdOilh1pvY1unvQDt1F9L4oqmL1Z0dkdAgSjeRykuPfMTmGKeALP%2FyNl3jnBjoqs3MAf7gVgplgXJJgQP7qmYrpmEAMwqyw1n9Ha5pdtGhwLpw6ckOfNYjIHkl4qA0WbTIV5jIXH6vrZ%2FQ7Q1QFI%2FrCrrinWkUfKPwxdPvS%2B5NKAgB4pE23HVGzHAfN4NUu0GBakZ7NmKvA9ctlhAWTAulnnlUO47z9iEBLbPMkzxzkJB8ae1tzws5FNPoQmvbwTAI%2FVaIrW3oJwspQ%2F3zFajGfLfHJQUwfUpChtLBLVs2lfosR9s3%2Bm5oPeR7NaT1oC8q1ieKbYgJHDhMJcTGg4VOkY%2BZzm2WV%2Bcrw7lbD5IFjE%2BOf5Ga6lbd%2FrNRdIy4RXVKrJmDSSbCinQnApuoeRYvOJxoVaH8aaeCUfga62vgSbuEvmG2iufhgJlCHaiEMrEqTxpRHGuxcEurXMO%2FIpsIGOqUBg8ZNE%2B9HTFHyLgFxRi8qLhSb5Mou5zA2s2d9XPx4cWWPADPAS11cvCXe7fSaD1WGLuckMU5wMkpBBobvK%2FdUAvugjQwVfSFMUE0E6q1%2FnMTAptMvyCUc4%2B0VcBKvuFcsoOHApmOIheM8WOGdc6TLdHxqF619sRQ9BcCcEGHEaTcFe06c4aXvNXRvY2u2BIxHfr7%2FPFUgAzMFJLF61p0NUnsZxCeu&X-Amz-Signature=e9a46588c73d88f354d2c2a6d34c4b58d1a07a6788dd2b03d4e26ada0748985a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
