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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAT27KYS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHz1Xc1gbrvotcMrcyZVXvvmJ8OpsSEw5iZK5Qv8hJvAIgd2LnngBxjO8VPDQ7071zwKUJrCdibvKumhHbj4fK%2Fqgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDF7EoZfja6SyrmGnXyrcA20WJpYB6dOLXWEwV2P0tN5ES4Vo6xbQwqT4scg6uIJTz4dQiG57cA6k7libThKnusn5IGN1Q0LTYkvIySc715cpl2%2BLoqZThIlOJB2ER3jVoXWAKWg9KF8KPdarXLKa2IINh1Fqd%2BP%2BjPWWXGvAiQhBlZSAHkz1zjZNLBCWWZfO4veMDPjyy3N0eUNgvB%2B8JYaSK3ho6AyRqhxwSyrOPj94S3Mz1uJxQgwuiIgjs44%2F6Uvdy16aEIpx46uIrl1LrGmdokwW6QRnWzUWV%2FYFrFAuHqifSxOqUIYUqFZAiGgAFXLEbwoFsobfAUmyOgkwn5QiuD5%2BQzu%2B3Uv3dWxuL96v1s39wimrdieuvilwLHqkBbw6wFV1CvJg1iHlkCqoJWtX0UM6lgfN7dWJRJ7kt6JP8rSgMF4rGjfrGLx74qsTdUL1UCJFWJVbyJXCXOMRNxw50Tv98SM%2BFpY0KyO5a5%2BH3mXrI0l5I9ECGnOTA6lMVPP7Gs9STKC3lS3w%2B1TNgrjecoYNmHfTtIctM3Zx1AQShwzaps2zsfMbDxR1uCqBDR8obtHiT4cAp%2Bg8rZZeM5lOgAFhBxZjBoLpbbXOPJMJgBeKkMbP61lcPkfqOT%2FJ%2B8vrWHyCaQ6RECpgMIf43MEGOqUBh5%2FghV7mi5qTcj0DXFPM07R90%2FeX1dJc2jWLG8yooEGB3pyf1sY3sRmPO7BZ2Rcsqu%2BNtCxE1iSyf%2BaR30KF5a%2Byh4mD8bKzIqhojeYD7E4ICJF51JlfMXWOBKqKJrliEzGD2%2FqyZIad%2B5z3p9mrb8S7rAQNM5Dh%2BJPnIRXwiLvU2FhvIyrVinQjQYPrrzmGJ536S7jP2ZTuuM2NI6%2FGm2tU3iJF&X-Amz-Signature=75dc7e258f4386030bfb585516839805ca8b11a460d1304550e169011051d443&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAT27KYS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHz1Xc1gbrvotcMrcyZVXvvmJ8OpsSEw5iZK5Qv8hJvAIgd2LnngBxjO8VPDQ7071zwKUJrCdibvKumhHbj4fK%2Fqgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDF7EoZfja6SyrmGnXyrcA20WJpYB6dOLXWEwV2P0tN5ES4Vo6xbQwqT4scg6uIJTz4dQiG57cA6k7libThKnusn5IGN1Q0LTYkvIySc715cpl2%2BLoqZThIlOJB2ER3jVoXWAKWg9KF8KPdarXLKa2IINh1Fqd%2BP%2BjPWWXGvAiQhBlZSAHkz1zjZNLBCWWZfO4veMDPjyy3N0eUNgvB%2B8JYaSK3ho6AyRqhxwSyrOPj94S3Mz1uJxQgwuiIgjs44%2F6Uvdy16aEIpx46uIrl1LrGmdokwW6QRnWzUWV%2FYFrFAuHqifSxOqUIYUqFZAiGgAFXLEbwoFsobfAUmyOgkwn5QiuD5%2BQzu%2B3Uv3dWxuL96v1s39wimrdieuvilwLHqkBbw6wFV1CvJg1iHlkCqoJWtX0UM6lgfN7dWJRJ7kt6JP8rSgMF4rGjfrGLx74qsTdUL1UCJFWJVbyJXCXOMRNxw50Tv98SM%2BFpY0KyO5a5%2BH3mXrI0l5I9ECGnOTA6lMVPP7Gs9STKC3lS3w%2B1TNgrjecoYNmHfTtIctM3Zx1AQShwzaps2zsfMbDxR1uCqBDR8obtHiT4cAp%2Bg8rZZeM5lOgAFhBxZjBoLpbbXOPJMJgBeKkMbP61lcPkfqOT%2FJ%2B8vrWHyCaQ6RECpgMIf43MEGOqUBh5%2FghV7mi5qTcj0DXFPM07R90%2FeX1dJc2jWLG8yooEGB3pyf1sY3sRmPO7BZ2Rcsqu%2BNtCxE1iSyf%2BaR30KF5a%2Byh4mD8bKzIqhojeYD7E4ICJF51JlfMXWOBKqKJrliEzGD2%2FqyZIad%2B5z3p9mrb8S7rAQNM5Dh%2BJPnIRXwiLvU2FhvIyrVinQjQYPrrzmGJ536S7jP2ZTuuM2NI6%2FGm2tU3iJF&X-Amz-Signature=851b35739508659587d3c16916139b0e55935295dd9723a2ae2ee8977c503c91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
