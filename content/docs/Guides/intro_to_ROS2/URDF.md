---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ONN3K5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoLuQFq5JsL8Noap9z%2F22hn5XxhbZAsOw%2Bc5Xz2X7%2FcwIgLkwB1Reu7IIM3ck6HYKNNfnP4ybYn9z2QTuFaE19gwQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtn5LP6GOYwyMMcNircA9KjwoSFBflbxQQIKptHPWr8MERo%2BrGAf3wNDS52OrDdgMV%2BzBmeMe7SIXgaHsvmBH064TeXjmY8TUMclKDioa%2FRhFNjcJUuuI3vDnEF48s3mT1UeHuYiZlWOPClIPS%2BM%2Fxwh5dkVTSceaVl1Gx5c6BncQwvSnB0%2FyS6kWI0kRqBVk%2FdsL0A9SgWEsDk%2FrV%2BoT3SFLLdmNqlakdtGSbDZG1ZOhTszn2F8rBnN4RlYfIGvijhzdVOW2tNdaEt65fE7n9d4bDkZibqNCOCjMlPAunoaEoSEWrdIdKF4pyEepvUzvuiq%2BqdenvUCNnw2UfVkJUsjn%2FMWQYa87OkRsgp%2Fhkv%2Fxs3giNlDm6wQCEueB2JIeaYBMPdFge7q2tt8Zh7i7HGYnfiuCAudi3AtPAToAAAyLtJaz%2FM65rUFnvWNYc54gWtgUOSQcveRg0je23EbrvevOp%2FeMyPkmrks4qeDgLo8xVSgn7J1IhFqsO7PhHwunlZgIPy2gBmgs1%2BHlnNi4Y3V0gJvp9ogvOojqcCTzcphK4nB9iGuUdryL9RAHUkHzSrUdDrsTQUp%2B7VByL%2BpwpofkZWJMzEgTmiczWoR8vYbErN9iGZGfgcQJY0zqV%2FJboPpKfcB4P%2B3M%2FIMLyL38QGOqUBKl9VnFJCVdY%2FCp%2FX8UY9abqkgb6dp%2BO5bvWUVWhsxTRIpPwnaPGllVJ5vfF5twIl3UNWYW7DRgxxNkDOqNVlZKBk4Qs08OAa7uxdoACXqQF73m1c8ZUO1UGKpUl5%2Bt%2FoC%2FrUxRJ3PNyFr%2BOQFxOFgJLbTVV6sy6gu1hIV71lJ4AQx17izD%2FEKJe3eAslwi1oIfveHkElA0mOZyH45FH23x43goJP&X-Amz-Signature=219009584ea20f9fdc52a2bec2a0982e02a46ebf9459c70c9fc0362aabf30bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ONN3K5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoLuQFq5JsL8Noap9z%2F22hn5XxhbZAsOw%2Bc5Xz2X7%2FcwIgLkwB1Reu7IIM3ck6HYKNNfnP4ybYn9z2QTuFaE19gwQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtn5LP6GOYwyMMcNircA9KjwoSFBflbxQQIKptHPWr8MERo%2BrGAf3wNDS52OrDdgMV%2BzBmeMe7SIXgaHsvmBH064TeXjmY8TUMclKDioa%2FRhFNjcJUuuI3vDnEF48s3mT1UeHuYiZlWOPClIPS%2BM%2Fxwh5dkVTSceaVl1Gx5c6BncQwvSnB0%2FyS6kWI0kRqBVk%2FdsL0A9SgWEsDk%2FrV%2BoT3SFLLdmNqlakdtGSbDZG1ZOhTszn2F8rBnN4RlYfIGvijhzdVOW2tNdaEt65fE7n9d4bDkZibqNCOCjMlPAunoaEoSEWrdIdKF4pyEepvUzvuiq%2BqdenvUCNnw2UfVkJUsjn%2FMWQYa87OkRsgp%2Fhkv%2Fxs3giNlDm6wQCEueB2JIeaYBMPdFge7q2tt8Zh7i7HGYnfiuCAudi3AtPAToAAAyLtJaz%2FM65rUFnvWNYc54gWtgUOSQcveRg0je23EbrvevOp%2FeMyPkmrks4qeDgLo8xVSgn7J1IhFqsO7PhHwunlZgIPy2gBmgs1%2BHlnNi4Y3V0gJvp9ogvOojqcCTzcphK4nB9iGuUdryL9RAHUkHzSrUdDrsTQUp%2B7VByL%2BpwpofkZWJMzEgTmiczWoR8vYbErN9iGZGfgcQJY0zqV%2FJboPpKfcB4P%2B3M%2FIMLyL38QGOqUBKl9VnFJCVdY%2FCp%2FX8UY9abqkgb6dp%2BO5bvWUVWhsxTRIpPwnaPGllVJ5vfF5twIl3UNWYW7DRgxxNkDOqNVlZKBk4Qs08OAa7uxdoACXqQF73m1c8ZUO1UGKpUl5%2Bt%2FoC%2FrUxRJ3PNyFr%2BOQFxOFgJLbTVV6sy6gu1hIV71lJ4AQx17izD%2FEKJe3eAslwi1oIfveHkElA0mOZyH45FH23x43goJP&X-Amz-Signature=95eafb59ef429be8f45d10d9e7c562282cc4ca3b3c9eb35cdaf0bb16506f353a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
