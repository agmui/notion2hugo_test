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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NS34JKB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJAXPJVopEYGHLB9nGk4C4hXx6lEeKkgM4KteLjp1pRAiEA1%2BmAKHrYhrWs8wCcSVECmsPKXTwY8ACbvYpnlry2jPQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjc%2FF0gg%2FxGjmjHwCrcA8aORfiid%2BOnfMIQ%2FiKj4M2whv3PztyMfx2E96Rjm%2FBRGY7vr%2BmMEdmB8FX4aeflnDsgyGVXGYJMCZtCYP7UKM0xUDjaon3aTMma6flDOh%2BUIvxrR7GaHfKOYNS85YwcWzCU0nQ%2B1QaubEpfRH2J0ECJ1T9215fSx9AL7xpM47cmXx%2BFxJmw0iq%2FflNk7dABXQqZZwAsp7FR182MWXwKesFDwgGL0rZmC7Jk7oKLxr%2F0jMIITq0IzX4H6L%2FKF58%2FeaXI41Cu1AOCgO9h8fOtYcBZ02dW9DJt0zlfymKrbrhm%2B5RQqnX8x9e2hbaj8BJsnSYhD2w4jsg23Oo4cEhBOAytuoLs4eK9sAde1ozR1nDWVjHn2nVIB%2BC3xqMHCue85RZqL6i47btW0JXWPBre%2B2%2FflzcDRwB1aN8joicovouscjwv1zlfLJdRKZgisFuQXT2Fz6te3dHhYjYxiqr9A0P7GlPQ4CzInzqfzR3z3ENAuGfB%2FQIUX7tL%2FPRYWYv3dsN2t9MWga5PWF79fFJNjJyJcG5mcjy%2FsFdB%2BdVlDW%2BvpQo0Ws45jGkoC1h18zKVCL3%2BUfdHRgeTmw58pmEHxOf0KkVhhPX2owXS1jhG8znoeUr8C0LwkQfu3%2BaTMOP0sMQGOqUB7VM6GYmcPDsw8cgf1wGqO626V5LI9Wtim1FVHDW%2F0zQT8jrc%2FhoJzrIdNWAj97PUQyA28OKQ%2FRTQVHYdAVivjiSngBxGRynmrAl0BxQJslwktWGEXd5vLYmrDYxJb880C9kWbBaEStaglEUqlIvIcAqvuPAtBJoyp5JOt1jGZ4Pw%2B593v9mstcj7RZ4Ew5NkpGcYP0CksOaUvTCfNqDjasBAWpJq&X-Amz-Signature=b2a85ce48d104f7923921c1812d6b991b756feac94c5990ccc4e2977a344860b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NS34JKB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJAXPJVopEYGHLB9nGk4C4hXx6lEeKkgM4KteLjp1pRAiEA1%2BmAKHrYhrWs8wCcSVECmsPKXTwY8ACbvYpnlry2jPQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjc%2FF0gg%2FxGjmjHwCrcA8aORfiid%2BOnfMIQ%2FiKj4M2whv3PztyMfx2E96Rjm%2FBRGY7vr%2BmMEdmB8FX4aeflnDsgyGVXGYJMCZtCYP7UKM0xUDjaon3aTMma6flDOh%2BUIvxrR7GaHfKOYNS85YwcWzCU0nQ%2B1QaubEpfRH2J0ECJ1T9215fSx9AL7xpM47cmXx%2BFxJmw0iq%2FflNk7dABXQqZZwAsp7FR182MWXwKesFDwgGL0rZmC7Jk7oKLxr%2F0jMIITq0IzX4H6L%2FKF58%2FeaXI41Cu1AOCgO9h8fOtYcBZ02dW9DJt0zlfymKrbrhm%2B5RQqnX8x9e2hbaj8BJsnSYhD2w4jsg23Oo4cEhBOAytuoLs4eK9sAde1ozR1nDWVjHn2nVIB%2BC3xqMHCue85RZqL6i47btW0JXWPBre%2B2%2FflzcDRwB1aN8joicovouscjwv1zlfLJdRKZgisFuQXT2Fz6te3dHhYjYxiqr9A0P7GlPQ4CzInzqfzR3z3ENAuGfB%2FQIUX7tL%2FPRYWYv3dsN2t9MWga5PWF79fFJNjJyJcG5mcjy%2FsFdB%2BdVlDW%2BvpQo0Ws45jGkoC1h18zKVCL3%2BUfdHRgeTmw58pmEHxOf0KkVhhPX2owXS1jhG8znoeUr8C0LwkQfu3%2BaTMOP0sMQGOqUB7VM6GYmcPDsw8cgf1wGqO626V5LI9Wtim1FVHDW%2F0zQT8jrc%2FhoJzrIdNWAj97PUQyA28OKQ%2FRTQVHYdAVivjiSngBxGRynmrAl0BxQJslwktWGEXd5vLYmrDYxJb880C9kWbBaEStaglEUqlIvIcAqvuPAtBJoyp5JOt1jGZ4Pw%2B593v9mstcj7RZ4Ew5NkpGcYP0CksOaUvTCfNqDjasBAWpJq&X-Amz-Signature=a6131444336d57efce108a4ceb38fd39053a0b91374279ea4423dca1f994c5b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
