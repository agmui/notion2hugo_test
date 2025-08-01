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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667ON6O3R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEUP6Qyxij%2B3%2Bd57Jsmpsmq6A2zM3a%2FKSMEHnwNZMR5AiAs8ftVLIZpHvRRI8AiF2q%2FWu8jXSgNPWKnN5BNmAbgBSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4gNEwYYdZxYb8SYtKtwDBNHKswZBE3vQHfhKWRECqiAwBnDmPMJoJc2RA%2FHCmVyOOVD2MCy1IByPohp0ErUS8tFbU5vpWMWh32JmOB5o%2FxfLIkgwDZqELVVGaH5WmyeqOReSFeWYZ%2FmIp1ys40IiZ7ezXmCHOO9fv4lVjiROhpxdWA3HGuNVVobI9GGXPkoFaEV29hxZ4BJLtVMmHmXO0GS8iHDcvsAUWSEBhOolDLjLv87ydubUOX3TUwJUASbFA%2BCxF8ng7oxZbP%2BFGnmQFOMIZ2EzDleyXbx9taor%2FdnxIafOMzE%2FQXnbVP6p2eZ5HQQGNLe11LSzRJHs6kXGIbvdF8uyN76P5mBchzJVFRrxUUEMagJ8VPEUJhtbvpe1IvCkREz4E36%2FQp2mgx2wk%2B86UYhTmHrMoZuNLN6JkGYgaDdrgy5LAeedkXJMkGWagoDyANVRHCpkHXYqb9DyKs01r6VFEV1dginfmUgEMQNHY0P69aJXT%2FoFLIcch3xMuS5%2FuUCVuoQ9L3GwmEpWznRuEqg5tKUksLH86SGPn1rQ0PtWq9Q6eUKojlfCCa5W0urlnClJPP%2BSgxmLCrYh1%2BrRpD6IBN9zIF%2Bk1D53LwLWCoS838mHmOJoecGWDJ8yHyh%2FQj2nrZ9ZGzUwurayxAY6pgFnxcV%2FJCMtZxt4Z2LzyKnD9lgpJq8lMm3pVdt6dZumL8VtrpPwOxa8vkyf6IfaqRtzQMTYymOCHoaS7ijnwZn3azkXLJXxoXXz55f1W3hQnziwg%2BhTYx1UkA4CIfjO1wwKzbtyIdnQ9VD1WREUJq53%2BS6OtJC09vLyUz82YeoyziaqqNycUBzrxoBVwa5LAzUP3mjHp17G8MgHaif9dg129sqtNo%2BP&X-Amz-Signature=fefa6d87031ddf82147eea8b5b6864884566afbd3509b3e6a6aed0cbea587733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667ON6O3R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEUP6Qyxij%2B3%2Bd57Jsmpsmq6A2zM3a%2FKSMEHnwNZMR5AiAs8ftVLIZpHvRRI8AiF2q%2FWu8jXSgNPWKnN5BNmAbgBSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4gNEwYYdZxYb8SYtKtwDBNHKswZBE3vQHfhKWRECqiAwBnDmPMJoJc2RA%2FHCmVyOOVD2MCy1IByPohp0ErUS8tFbU5vpWMWh32JmOB5o%2FxfLIkgwDZqELVVGaH5WmyeqOReSFeWYZ%2FmIp1ys40IiZ7ezXmCHOO9fv4lVjiROhpxdWA3HGuNVVobI9GGXPkoFaEV29hxZ4BJLtVMmHmXO0GS8iHDcvsAUWSEBhOolDLjLv87ydubUOX3TUwJUASbFA%2BCxF8ng7oxZbP%2BFGnmQFOMIZ2EzDleyXbx9taor%2FdnxIafOMzE%2FQXnbVP6p2eZ5HQQGNLe11LSzRJHs6kXGIbvdF8uyN76P5mBchzJVFRrxUUEMagJ8VPEUJhtbvpe1IvCkREz4E36%2FQp2mgx2wk%2B86UYhTmHrMoZuNLN6JkGYgaDdrgy5LAeedkXJMkGWagoDyANVRHCpkHXYqb9DyKs01r6VFEV1dginfmUgEMQNHY0P69aJXT%2FoFLIcch3xMuS5%2FuUCVuoQ9L3GwmEpWznRuEqg5tKUksLH86SGPn1rQ0PtWq9Q6eUKojlfCCa5W0urlnClJPP%2BSgxmLCrYh1%2BrRpD6IBN9zIF%2Bk1D53LwLWCoS838mHmOJoecGWDJ8yHyh%2FQj2nrZ9ZGzUwurayxAY6pgFnxcV%2FJCMtZxt4Z2LzyKnD9lgpJq8lMm3pVdt6dZumL8VtrpPwOxa8vkyf6IfaqRtzQMTYymOCHoaS7ijnwZn3azkXLJXxoXXz55f1W3hQnziwg%2BhTYx1UkA4CIfjO1wwKzbtyIdnQ9VD1WREUJq53%2BS6OtJC09vLyUz82YeoyziaqqNycUBzrxoBVwa5LAzUP3mjHp17G8MgHaif9dg129sqtNo%2BP&X-Amz-Signature=4a4cafaf6174030a3599438097a926ff15d12b72ffdcf5c7c1d9c84d4e9886bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
