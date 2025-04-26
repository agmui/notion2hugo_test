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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJ6CEFA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBX%2F2oIWyYDa0S1juBR9h4cyXtWk57BgC4Vha8gxXGZdAiBB14g0NkQ%2FPG1MyhU57HaIcC76ICzFmKM6U9vHYTbCsCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMdhbjy%2F2FvhqtyttVKtwD%2BISfD6oF4fWNWP8FZ5FnZIGyMzri0Kq6KS8cZ%2FbvIGUX3Mjw4hsgGAFNBuw9yCumqfPTNcdubsQBMNYQ3df6X10FWxyPH7HYmmwFEatJVQhHKjz3oul0ZfgYUCjJWoe5Fpu65nckGRTkGFtGThh3rjLy1fo1sX%2BOVzVKFWx%2B4EFq4U0O9e6hdJD4CQFANCKtHhOvos%2BPSUEx%2BLXaVHfag%2F%2FsK5Yzu%2B%2FgnvxT5lRWr%2F01Gr4nRCGmVyLzyZKmcT3TYp1wuea2BpFmtMT6CE7pZwaT6hMizVMMTNADNJQJFiFItd78je12d6WwzxxVG6MjgjXaSppHuMCe5c3YIrgf1ODAshamw6oB9s3k8CKu4MXkmV3xkYJ2kgoGZrfts1%2BwT3HGld3NenPp9Di3mb%2FADE4FAbiFBHsZtlV0uwwOgRHjqmc83Kas6nfDK4I5RxWC8jkBCuz2k4wHsyMPOgTeCSfsh17kuQ3%2BRWleW%2BjZhdjyfe2rX%2Bm5QzWOyJY8EBOOG2QhwMklbcYg9sMxYkzM6yMpzAXn5o4XTUFYsgUG5qkmGGBV%2Bwrv91m17zXIymidhzchHGTBHozDa%2Bo6%2FzSY6pCVfjwZ1a0ZfTAQy2J1hifNLYDsFnn8TUrR%2Bx8w2%2BazwAY6pgFJ1fOXehgb6M9ZeOt5QFyxRVbyJRxjeafYrXen6mDg1urHDYo%2BH6KXltzABXwnQOHVWEeucfOmCMnSqsQDvadZbkIxAInUtYKYVkdaI%2BoRuASerjRdmSx4y%2F0qXPqPouE4wWe%2FHLsbf4LuyAlZV0PhKh7izre3I97b%2B4De%2FPzMTdF7%2FOdBgIvWaLPxwJNwWjHG68FFXpUnKzfPWXEfmZaD4APh3ZPN&X-Amz-Signature=505399b2cfb99ee5bc201dc89e52fc333ae1986da0fdb1095e4debe20e6cda4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJ6CEFA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBX%2F2oIWyYDa0S1juBR9h4cyXtWk57BgC4Vha8gxXGZdAiBB14g0NkQ%2FPG1MyhU57HaIcC76ICzFmKM6U9vHYTbCsCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMdhbjy%2F2FvhqtyttVKtwD%2BISfD6oF4fWNWP8FZ5FnZIGyMzri0Kq6KS8cZ%2FbvIGUX3Mjw4hsgGAFNBuw9yCumqfPTNcdubsQBMNYQ3df6X10FWxyPH7HYmmwFEatJVQhHKjz3oul0ZfgYUCjJWoe5Fpu65nckGRTkGFtGThh3rjLy1fo1sX%2BOVzVKFWx%2B4EFq4U0O9e6hdJD4CQFANCKtHhOvos%2BPSUEx%2BLXaVHfag%2F%2FsK5Yzu%2B%2FgnvxT5lRWr%2F01Gr4nRCGmVyLzyZKmcT3TYp1wuea2BpFmtMT6CE7pZwaT6hMizVMMTNADNJQJFiFItd78je12d6WwzxxVG6MjgjXaSppHuMCe5c3YIrgf1ODAshamw6oB9s3k8CKu4MXkmV3xkYJ2kgoGZrfts1%2BwT3HGld3NenPp9Di3mb%2FADE4FAbiFBHsZtlV0uwwOgRHjqmc83Kas6nfDK4I5RxWC8jkBCuz2k4wHsyMPOgTeCSfsh17kuQ3%2BRWleW%2BjZhdjyfe2rX%2Bm5QzWOyJY8EBOOG2QhwMklbcYg9sMxYkzM6yMpzAXn5o4XTUFYsgUG5qkmGGBV%2Bwrv91m17zXIymidhzchHGTBHozDa%2Bo6%2FzSY6pCVfjwZ1a0ZfTAQy2J1hifNLYDsFnn8TUrR%2Bx8w2%2BazwAY6pgFJ1fOXehgb6M9ZeOt5QFyxRVbyJRxjeafYrXen6mDg1urHDYo%2BH6KXltzABXwnQOHVWEeucfOmCMnSqsQDvadZbkIxAInUtYKYVkdaI%2BoRuASerjRdmSx4y%2F0qXPqPouE4wWe%2FHLsbf4LuyAlZV0PhKh7izre3I97b%2B4De%2FPzMTdF7%2FOdBgIvWaLPxwJNwWjHG68FFXpUnKzfPWXEfmZaD4APh3ZPN&X-Amz-Signature=9221b36e52f3a143d96416f82f8722e98e9cfec8196d47c2a9912c1311085559&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
