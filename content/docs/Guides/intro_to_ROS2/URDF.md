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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ6UKHXE%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEujTVpP3DEMXZ379nq9JtGjRa6D9dctHpOYovB2LZcAiEAx1ef9K03ApMxAl%2BG8FG%2FdIRTskVeYDP%2F45MEVzuJXG4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHXPVr11YWvuewY%2F%2BSrcA1fSWHbp1lWVFzIIodZeT%2FeJr31ynrfUd1xxKPO3ZQP6qteUBrivdJuqP1LH6bR0djWP8XbNalrF7xIZtpdPGBBixbzdOjVPcyzIEiQn0Ijpjj7xUZOpXi31t%2F%2BluSunyB9i1K5AbNbAhzFFpLgsxGQWs%2F1mWmQujEzwOnd2QVEL%2FbjizTYH3H18Cr0wlA9cAH2MzQxqUAnG6sKCnjz7zTqkcy9oxLkNYXL33UfQXQet03I%2Bh26EtAEbr1G6%2Fe%2BoaGbPODwZpJPdndIcklh5%2BsVWU1irMP%2BIwc1GwALH05RMFnyO0iLlrl%2BlZ7FnSBJJ8MzGWwPlxZIVn2OkXlhH2TTQbtvnPwMBo%2BjTbFJ%2F63xEWel26hybl1PA7XMMrwjyxyGoHqqqmRplGl1D611G9btITMYXCLjTd%2F4IQyVh4JCOhKV5SZvyV1xtOvkV%2B9vBbc25jT2H0gs75vQC469OxlAQ20tuzFhgYAwMs7ATJbPlKOp2kGP2MGavWPU7ANeIwFyvJ%2BOKWSkS4bhHtfbZtgfDHq0QO1rKsBWeSSqPUk04qQZlw3gJJ2cDt3XXSh%2FUVCWM3WEnhveBlERCT5GYPkNc5xXnFY0Gxre5cFciuge2GM13EUvbp1wy5RkNMKOBkcIGOqUBmkdV23lPuYtsxPsvGjppFREdmTZjOoQ%2F9ZQP4i3feBUMJe8qYWHafRAnFjhVetPlpdkqH526MeQ%2FNAJQFLOVGkezOQAHVyGgtLIXvBxq%2FePyO4GU8L0og5he3RM4kklvLcurUCAY0s3zIS6e0oW6TavJP6O10Fl1FIudWvB7AeMHi%2FW89%2FhaEYJjsJXoHjjx%2BPtNut9gMAcK8gbrpkDQZvmk9oxw&X-Amz-Signature=4695b331bee0d7cc63388ecac8e18a1bdd53f529b50d2be91f07ce0836255958&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ6UKHXE%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEujTVpP3DEMXZ379nq9JtGjRa6D9dctHpOYovB2LZcAiEAx1ef9K03ApMxAl%2BG8FG%2FdIRTskVeYDP%2F45MEVzuJXG4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHXPVr11YWvuewY%2F%2BSrcA1fSWHbp1lWVFzIIodZeT%2FeJr31ynrfUd1xxKPO3ZQP6qteUBrivdJuqP1LH6bR0djWP8XbNalrF7xIZtpdPGBBixbzdOjVPcyzIEiQn0Ijpjj7xUZOpXi31t%2F%2BluSunyB9i1K5AbNbAhzFFpLgsxGQWs%2F1mWmQujEzwOnd2QVEL%2FbjizTYH3H18Cr0wlA9cAH2MzQxqUAnG6sKCnjz7zTqkcy9oxLkNYXL33UfQXQet03I%2Bh26EtAEbr1G6%2Fe%2BoaGbPODwZpJPdndIcklh5%2BsVWU1irMP%2BIwc1GwALH05RMFnyO0iLlrl%2BlZ7FnSBJJ8MzGWwPlxZIVn2OkXlhH2TTQbtvnPwMBo%2BjTbFJ%2F63xEWel26hybl1PA7XMMrwjyxyGoHqqqmRplGl1D611G9btITMYXCLjTd%2F4IQyVh4JCOhKV5SZvyV1xtOvkV%2B9vBbc25jT2H0gs75vQC469OxlAQ20tuzFhgYAwMs7ATJbPlKOp2kGP2MGavWPU7ANeIwFyvJ%2BOKWSkS4bhHtfbZtgfDHq0QO1rKsBWeSSqPUk04qQZlw3gJJ2cDt3XXSh%2FUVCWM3WEnhveBlERCT5GYPkNc5xXnFY0Gxre5cFciuge2GM13EUvbp1wy5RkNMKOBkcIGOqUBmkdV23lPuYtsxPsvGjppFREdmTZjOoQ%2F9ZQP4i3feBUMJe8qYWHafRAnFjhVetPlpdkqH526MeQ%2FNAJQFLOVGkezOQAHVyGgtLIXvBxq%2FePyO4GU8L0og5he3RM4kklvLcurUCAY0s3zIS6e0oW6TavJP6O10Fl1FIudWvB7AeMHi%2FW89%2FhaEYJjsJXoHjjx%2BPtNut9gMAcK8gbrpkDQZvmk9oxw&X-Amz-Signature=18ef6967d8346883f561a1812eb181dee5cb76616c9e979ef59b514c8f2a9879&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
