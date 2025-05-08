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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6P2FPN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Ffy3EP1XvtjLZ6b7iKsPTlYq6hwzj3rli093xHzTDwIgWfgToaxbUS06vXryuL%2BHnDc9UtCTzXrM35PM%2BW6FiOsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAINI3r2aSOX4PrFaircAxA9WjLVsOeu2ZInxjfptAUDfgyOFHYhDrb%2FtZkX8Qtpnp1iWeMIeAUZP41HRN6v%2BjuksEL2FfA0LDJ56cy1NbHKlj3vH1F5h18ve56fnpVgkZL%2BCgsunLLp7JUq%2FiAz%2FrPiBPdSy5f2f7WRoecVKMU2QkqQHFjEPLscUocBIDfjsFZbc88cWW0kqkhEfSGkufy2Yjk4nGMsx01cR9BVFzbhHvOQdApLg%2FJd5OnU3Y7B4xLnhyGJ6wAizyrUCG8wcJJQsywTkAsl1fvBLiN7lXrgiJd5mmmAYAnZwJHPmBsqPlUStjjoYU6EqKBae7eFkBJ8Gcl3xjzBgfG24nwUnVTT0LVXn0479KID%2F7oM0AtLKMDwURg3%2Bt7yJ2kGTzydn29Pxi%2FnTA1BkwTN00fQ0jMXgwtZKa3nb3ZVX5NJ7GOLFu0nT666jBP%2BfGedL3pj4WG2s7VaQmPnsK8UfPlwO4oBTE3vMbJ56qJD8HUTmCeZ%2B71jkA4KS29QSZTqbQ50KHsi4CzBHR4gbX5Ilk%2BSVioLamI4aQjAAUlDx9AtZ3hOajAyCi5SsYVN1H%2BVs8lcpkEdu5B%2FkOthciW4o2OoGkL4lfnN1RmqZSQdc7wmkcMidDdqiDbtnPXsp%2F0UMNTJ8sAGOqUB1u7TgZwcPeWZ%2BunLYgvsATyOFMSTQn2Y81qMYvQmyL%2FfczNeq8XnBlKifnwy29m0JGn9gAnouxP8pnOcArDFFFE0GbjSDvb8BPtOIpuCAKejqMn6X6%2B5VSjTakaSes5ykXmJnRLXJJa9%2BqR%2BQ2UVimdCrD263PzT07LRhXgmDEaqhQ%2BFPhrK6PezCK4pT4PBnrmPezBkJrg0TUOTApw7yPf61HRG&X-Amz-Signature=f2c0d49cac28f97be125c484b17d7b9a708953dabfdf7e890fe9b7fcd8489479&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6P2FPN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Ffy3EP1XvtjLZ6b7iKsPTlYq6hwzj3rli093xHzTDwIgWfgToaxbUS06vXryuL%2BHnDc9UtCTzXrM35PM%2BW6FiOsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAINI3r2aSOX4PrFaircAxA9WjLVsOeu2ZInxjfptAUDfgyOFHYhDrb%2FtZkX8Qtpnp1iWeMIeAUZP41HRN6v%2BjuksEL2FfA0LDJ56cy1NbHKlj3vH1F5h18ve56fnpVgkZL%2BCgsunLLp7JUq%2FiAz%2FrPiBPdSy5f2f7WRoecVKMU2QkqQHFjEPLscUocBIDfjsFZbc88cWW0kqkhEfSGkufy2Yjk4nGMsx01cR9BVFzbhHvOQdApLg%2FJd5OnU3Y7B4xLnhyGJ6wAizyrUCG8wcJJQsywTkAsl1fvBLiN7lXrgiJd5mmmAYAnZwJHPmBsqPlUStjjoYU6EqKBae7eFkBJ8Gcl3xjzBgfG24nwUnVTT0LVXn0479KID%2F7oM0AtLKMDwURg3%2Bt7yJ2kGTzydn29Pxi%2FnTA1BkwTN00fQ0jMXgwtZKa3nb3ZVX5NJ7GOLFu0nT666jBP%2BfGedL3pj4WG2s7VaQmPnsK8UfPlwO4oBTE3vMbJ56qJD8HUTmCeZ%2B71jkA4KS29QSZTqbQ50KHsi4CzBHR4gbX5Ilk%2BSVioLamI4aQjAAUlDx9AtZ3hOajAyCi5SsYVN1H%2BVs8lcpkEdu5B%2FkOthciW4o2OoGkL4lfnN1RmqZSQdc7wmkcMidDdqiDbtnPXsp%2F0UMNTJ8sAGOqUB1u7TgZwcPeWZ%2BunLYgvsATyOFMSTQn2Y81qMYvQmyL%2FfczNeq8XnBlKifnwy29m0JGn9gAnouxP8pnOcArDFFFE0GbjSDvb8BPtOIpuCAKejqMn6X6%2B5VSjTakaSes5ykXmJnRLXJJa9%2BqR%2BQ2UVimdCrD263PzT07LRhXgmDEaqhQ%2BFPhrK6PezCK4pT4PBnrmPezBkJrg0TUOTApw7yPf61HRG&X-Amz-Signature=0622b5f430545f141003a62e1de5cc0b6a3724c64786ec44f60fd7f3d7e3fef5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
