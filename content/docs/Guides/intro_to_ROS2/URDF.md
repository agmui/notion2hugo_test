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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOM4USSH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwMIku5DFmY6FnflnWVAcApGVY9kFtoGSsSpwA3O5qFAIgB7eLCcV0vXuuouOJyq1cF%2B1diFTgSv92ntLnzqBX0N4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLeEqIiIYJ77q2DYlyrcA7GjITGvJFZlk058cE3j%2BmMi2wOjKdDAqQifmxj735LrkVunTlFchbGg6f7IqUrKQsUIqF9ySzV7g4JEiYx54axkE40Kx6k%2BjBczqldVCM16Q37yGEA%2BJOQJH744TPq6yd5O6yZASTzMMZibPnVeHiBNpNqLZ4%2BifHx2YRJc5RwL5cb71XnWLgEZipJ62V3JRC5XsAQqhcKtYDsV5rGMeeg%2BAI0k75BGl78G22v1DTzRvmEj06H%2FToaawx5YVA2wdvN5VMSflyrtiUZJp6caHCyRgGEC%2FzH%2BKxRvEzL%2B49L5rPWjHXI8gS04nwHHre3FgK%2BGbQc5MxwtduHE6HI5n0wBrCHVzELESPMQl%2FZZjp5Wm6%2B817nRTlVQjXKhVx4BGeav0KMWZspAg%2BXaJ%2Ft92lrpnxhLYJxrK6hQOlXhgnmWKJa8fi6JA6GwENgibF09T26koOjxlVsevLXyDynDFPfCf9EcR13NfHd7qSvV%2FL5lJfEr1e1H%2Bah73veIkLX4CqvRHB1TNhe1AB6GN%2B4WTiQ1LWpcHchDZMH8ObTyj%2BcTzQpNZYTc%2BYc1PX34Z%2FP%2FUr%2FboB8WyLs3H0FrDuW6Nl13lAEn4pW%2FrTKr4%2FRPP7AswkdapgRR08uCfP80MOqJx8IGOqUBugTJXCHh9ttRzWU26DAJQCocObBjGxOYRxPe%2FavarJ9SgasE7k4PPT48E1gGZ5cGR2fttQexRY6VkaLioD63SawgI2cY%2BPH1cmGpoP9s5UzsaYPXK0c%2BP%2BgtLsb%2B4VMgzIaPe2q32WxxC5LrQ3yc0%2BSqspH1U5bSuo0%2BTaFZFBtjslMiwAmlKFWXMq9i4HvkXcnwZE4YRxjA6L%2B3ur1gBDMlyaF1&X-Amz-Signature=ab0680fe93c55e56c842ac9641f5c346ed692fb0ca5e8d4bab350b42c6ec1e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOM4USSH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwMIku5DFmY6FnflnWVAcApGVY9kFtoGSsSpwA3O5qFAIgB7eLCcV0vXuuouOJyq1cF%2B1diFTgSv92ntLnzqBX0N4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLeEqIiIYJ77q2DYlyrcA7GjITGvJFZlk058cE3j%2BmMi2wOjKdDAqQifmxj735LrkVunTlFchbGg6f7IqUrKQsUIqF9ySzV7g4JEiYx54axkE40Kx6k%2BjBczqldVCM16Q37yGEA%2BJOQJH744TPq6yd5O6yZASTzMMZibPnVeHiBNpNqLZ4%2BifHx2YRJc5RwL5cb71XnWLgEZipJ62V3JRC5XsAQqhcKtYDsV5rGMeeg%2BAI0k75BGl78G22v1DTzRvmEj06H%2FToaawx5YVA2wdvN5VMSflyrtiUZJp6caHCyRgGEC%2FzH%2BKxRvEzL%2B49L5rPWjHXI8gS04nwHHre3FgK%2BGbQc5MxwtduHE6HI5n0wBrCHVzELESPMQl%2FZZjp5Wm6%2B817nRTlVQjXKhVx4BGeav0KMWZspAg%2BXaJ%2Ft92lrpnxhLYJxrK6hQOlXhgnmWKJa8fi6JA6GwENgibF09T26koOjxlVsevLXyDynDFPfCf9EcR13NfHd7qSvV%2FL5lJfEr1e1H%2Bah73veIkLX4CqvRHB1TNhe1AB6GN%2B4WTiQ1LWpcHchDZMH8ObTyj%2BcTzQpNZYTc%2BYc1PX34Z%2FP%2FUr%2FboB8WyLs3H0FrDuW6Nl13lAEn4pW%2FrTKr4%2FRPP7AswkdapgRR08uCfP80MOqJx8IGOqUBugTJXCHh9ttRzWU26DAJQCocObBjGxOYRxPe%2FavarJ9SgasE7k4PPT48E1gGZ5cGR2fttQexRY6VkaLioD63SawgI2cY%2BPH1cmGpoP9s5UzsaYPXK0c%2BP%2BgtLsb%2B4VMgzIaPe2q32WxxC5LrQ3yc0%2BSqspH1U5bSuo0%2BTaFZFBtjslMiwAmlKFWXMq9i4HvkXcnwZE4YRxjA6L%2B3ur1gBDMlyaF1&X-Amz-Signature=6181b8fcea42d3918ab7396a84c886c89e88a1f852bdd7e99bca75ce6c79523b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
