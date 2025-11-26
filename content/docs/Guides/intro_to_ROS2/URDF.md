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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67M4TCW%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHp2EdMQ14ABywEgQbfBnMDuKQ4w6PdbBYeBksq87UgIhAM8O5t8sIZPtGG8qddRbgmM2C7ADI3I2s8UxLVt4MRjZKv8DCHsQABoMNjM3NDIzMTgzODA1Igx6rwkneYbYR5q57I4q3AMy78sFd9i1qG4Ro6LpGtVl9Al%2FBPGOR8SzDCubKjo1qlNHtqu1fig76euZcjfIDrkRu5pL%2BiAp%2BcBFD7ly0kRqjdt5zF6Aakv4EMfIh6rBBAlXqiu39SUo8NhDq4oQY3dXvUFOEMlZjghZnTeU7YwxZjSJNrivXepuHY3QH28CZdjo7FSpY1Taag2NFsiuuzPXo8VhPt9HKX93qYoj2HKudnf%2FOxoTpUAQFEL4nLtoABhgSf26RnzEfvaG1aA%2F8wGfKxZ59bPP0NTtCYY6PeBlVGX0T8YsBlXHCmPsAsiymDtDLuTtNRjrZ%2F7Sr8LWGGtCGMUucmlArzvPXCUTWGk45Z%2F5PnHPo0kudNLBjO3TEOqfW3I7bVdskSFBGbY5yYXZDaAM9hU19%2BG0Jd0IBiA28HAGccANRXDcK3BH1PDDkXNGCWrNLTlKq69RkZ%2FyzdGeEm17jPVW2Vz9NJggPKPVmWBq5GqL6Dt0olfmrAbCaEveTGJ3w9v83Bq8%2BJneI%2FiUKO40MoJBXb6N8hQ9YCDTRsXIxnUaUd6L75dB0%2F42NccsztgXGV2PW3fcmEln0n7tY%2FCbkLFXQxHe1ULZ%2FcS7yLpDToT6Ijv%2FKzNH3J%2B2iXEvL2orkjBBvCOi6TC5sZnJBjqkAVhxNAt9Ek8puyJJ7KoR6YXAzTG%2BzNJz3wJFJnFHhw1MBlHYBVXWc6PKC6OMGbu4E0mNCR8DLsdt80DIvYiv1ll3%2Fdb2%2BkuECxX%2BfAjppXe%2F%2Be18pBVsCdKBK%2B3SCuGbzvCH0M4CdFSimus1r7Nn2UP0NtS6BDcRomMVRoSrWQBGBkFEyKMtKp2jTCMKgkPlVL52lXk2ls2SSUWk%2FOw8jeieMdo2&X-Amz-Signature=2d534a11de1fe244366f661328608b2ed28f1a957012c419dbc2e057d69613e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67M4TCW%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHp2EdMQ14ABywEgQbfBnMDuKQ4w6PdbBYeBksq87UgIhAM8O5t8sIZPtGG8qddRbgmM2C7ADI3I2s8UxLVt4MRjZKv8DCHsQABoMNjM3NDIzMTgzODA1Igx6rwkneYbYR5q57I4q3AMy78sFd9i1qG4Ro6LpGtVl9Al%2FBPGOR8SzDCubKjo1qlNHtqu1fig76euZcjfIDrkRu5pL%2BiAp%2BcBFD7ly0kRqjdt5zF6Aakv4EMfIh6rBBAlXqiu39SUo8NhDq4oQY3dXvUFOEMlZjghZnTeU7YwxZjSJNrivXepuHY3QH28CZdjo7FSpY1Taag2NFsiuuzPXo8VhPt9HKX93qYoj2HKudnf%2FOxoTpUAQFEL4nLtoABhgSf26RnzEfvaG1aA%2F8wGfKxZ59bPP0NTtCYY6PeBlVGX0T8YsBlXHCmPsAsiymDtDLuTtNRjrZ%2F7Sr8LWGGtCGMUucmlArzvPXCUTWGk45Z%2F5PnHPo0kudNLBjO3TEOqfW3I7bVdskSFBGbY5yYXZDaAM9hU19%2BG0Jd0IBiA28HAGccANRXDcK3BH1PDDkXNGCWrNLTlKq69RkZ%2FyzdGeEm17jPVW2Vz9NJggPKPVmWBq5GqL6Dt0olfmrAbCaEveTGJ3w9v83Bq8%2BJneI%2FiUKO40MoJBXb6N8hQ9YCDTRsXIxnUaUd6L75dB0%2F42NccsztgXGV2PW3fcmEln0n7tY%2FCbkLFXQxHe1ULZ%2FcS7yLpDToT6Ijv%2FKzNH3J%2B2iXEvL2orkjBBvCOi6TC5sZnJBjqkAVhxNAt9Ek8puyJJ7KoR6YXAzTG%2BzNJz3wJFJnFHhw1MBlHYBVXWc6PKC6OMGbu4E0mNCR8DLsdt80DIvYiv1ll3%2Fdb2%2BkuECxX%2BfAjppXe%2F%2Be18pBVsCdKBK%2B3SCuGbzvCH0M4CdFSimus1r7Nn2UP0NtS6BDcRomMVRoSrWQBGBkFEyKMtKp2jTCMKgkPlVL52lXk2ls2SSUWk%2FOw8jeieMdo2&X-Amz-Signature=85869ac11f3d9a19e235f07c10e5472a270f8c61a7fe6aac71000ae0ea4f60b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
