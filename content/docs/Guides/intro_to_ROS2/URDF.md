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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S73ISYR6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1BEoumdNuOqYuuoYt9QXss107BhREL65V%2FanFDsLBTAIgdr%2B7PhkyTuilnGEPYEWpRq3DYr9vShoaHes%2FV0R4gxkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFwjroqIALtZ2cAZyrcA%2FFDjjBzDuOH3trYAIc%2Bl30PSI%2BYr8qWJIzHLwO2jriCeuxcsjnLmeQhSZN5H82Y8AshFkeJCCdV8ZlkxTr6R96H5f3FpzT0LS4JxwSJGqKGSCXbQprJJklVRlnSsRy7OgrToKR8ybqUtQL2DI0W9bJIMBna8Ix%2Bz3rRKRLE5%2BihDV6v%2F%2FJ67G10xmliCJqs%2BmBL9t58O0f16gDm4U9olU4559V%2Fg2A83jcKo%2F1ht2GnFeqeMGtiTO4fJXnhhYFPTTzQN1c6hVt3EcKX5A3tBOUyaBGXI4CcuOm4TZWMYxXk4LmjVyht5KRHaJ193uB2SeZR4IF1r2u%2BmBhRytVHV0BQR1Mt8eeEhJIiqPS6lR3qYm44TGdN17lqDKNS8gSw6xdZgTK7wjAqZnaNzGxW%2FLaM54pGYnYBuwAfQFf8oHmuIbWQzH0goHg7cWk9NTYKi4rXWk5rOD2mUwIGRPjbP6iaN58PnDtxOg3YVrzz1zeFOMyWKCwn8FWEzVLn%2FL66ziNJq3RRF3N4WR%2FVHb2JwCU38Q82lmpV8cA4fWSHkFpKMU42ErvXGBTmJ%2FJPen59MBuKf%2F0%2BpiOvzdtwt5PQJywwOdsdCVEH2GQyIu70bfURb5pUjbBXvuWPLiJQMLjpz74GOqUBsVq%2Fo83RYtoAdqV808WnQ%2BqQMzR%2BPpCKaA8pXV9qWlgm%2Bavg5O4d%2B07aHUyXPKhwQGEr6sFkJERJZYNvpD6X%2Bxr3TVH0ebm2ExeM02HbKFuqon5Y4R3M%2BVVjZt4dKyNOyh4vypK2ovddyi9DslD529YOcfHa3yvXevY9M6T0sl3DJkwa8n8jFzYs0Favm4h3di5Rv8QTuhSS7b2MuctB6kUv6mRm&X-Amz-Signature=aa260de8fa20e360b45eff6a239e32a0ee0986dc723a8bb7a29624abd42c3391&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S73ISYR6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1BEoumdNuOqYuuoYt9QXss107BhREL65V%2FanFDsLBTAIgdr%2B7PhkyTuilnGEPYEWpRq3DYr9vShoaHes%2FV0R4gxkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFwjroqIALtZ2cAZyrcA%2FFDjjBzDuOH3trYAIc%2Bl30PSI%2BYr8qWJIzHLwO2jriCeuxcsjnLmeQhSZN5H82Y8AshFkeJCCdV8ZlkxTr6R96H5f3FpzT0LS4JxwSJGqKGSCXbQprJJklVRlnSsRy7OgrToKR8ybqUtQL2DI0W9bJIMBna8Ix%2Bz3rRKRLE5%2BihDV6v%2F%2FJ67G10xmliCJqs%2BmBL9t58O0f16gDm4U9olU4559V%2Fg2A83jcKo%2F1ht2GnFeqeMGtiTO4fJXnhhYFPTTzQN1c6hVt3EcKX5A3tBOUyaBGXI4CcuOm4TZWMYxXk4LmjVyht5KRHaJ193uB2SeZR4IF1r2u%2BmBhRytVHV0BQR1Mt8eeEhJIiqPS6lR3qYm44TGdN17lqDKNS8gSw6xdZgTK7wjAqZnaNzGxW%2FLaM54pGYnYBuwAfQFf8oHmuIbWQzH0goHg7cWk9NTYKi4rXWk5rOD2mUwIGRPjbP6iaN58PnDtxOg3YVrzz1zeFOMyWKCwn8FWEzVLn%2FL66ziNJq3RRF3N4WR%2FVHb2JwCU38Q82lmpV8cA4fWSHkFpKMU42ErvXGBTmJ%2FJPen59MBuKf%2F0%2BpiOvzdtwt5PQJywwOdsdCVEH2GQyIu70bfURb5pUjbBXvuWPLiJQMLjpz74GOqUBsVq%2Fo83RYtoAdqV808WnQ%2BqQMzR%2BPpCKaA8pXV9qWlgm%2Bavg5O4d%2B07aHUyXPKhwQGEr6sFkJERJZYNvpD6X%2Bxr3TVH0ebm2ExeM02HbKFuqon5Y4R3M%2BVVjZt4dKyNOyh4vypK2ovddyi9DslD529YOcfHa3yvXevY9M6T0sl3DJkwa8n8jFzYs0Favm4h3di5Rv8QTuhSS7b2MuctB6kUv6mRm&X-Amz-Signature=b93a74ee51c97754a71a2c27ca65ea36e9cc394c95559684d4af5d432ffa2015&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
