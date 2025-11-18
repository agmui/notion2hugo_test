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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUPSLALM%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuUxX14xk2alJmvD8GRbXdxZVLXp%2BET0FhIxLuYTD8oQIgOQ5%2FnbDy1hlNb%2FutIU%2FiZk50Zxnx%2BnqHFGFVMkwDfrsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsRgdJVLp2%2FppmMvyrcA2%2BcTQprt8rIpRqMmwrFnmjEqQjO07oJ7WSNR4PjJUst5mAc%2Fclf%2B2oQWbn%2FdkUPM6hd0heC7UNG5CT0hYrsn8HUvBNU3%2F2sZ2oCC4BussF8FQlCStI2ArG%2B7r9OKL6r36UQQgwlGjk0gs6Ch4zOkrjgDmCP5yTCz1GD7opLtc5NX5X6i5sJ4NtG6RcNkgHyXq9mSHPnpr9KX3d0RZn4%2Bnff%2Bf%2BBnzMmABKGU%2FejOi1WJgwsn2bplN2cBNqMtxrIagH%2FChveMtDwSTuXNszyzPbOuDHIMhD629vu1onwEylqQ21S%2BIuJ80f5h%2Fu1nAXwds50ijXbO1s6qc9l7RI6bqZynD5KIeUSSZYVnC7UAiv25uoUzHUW%2F4XF3OHojY%2FVZOnRw%2F27sdkeyy4Z3ZLXs5kpB3jm%2Bqui%2B4xPcrUYJU8XNYejXb2B9nRUl7cGNwho9CYnC0tc%2Bxy1TnCf01DYuJasRDgQb33uc4DLUvLwk6JRxhyzRgLkRVkC8XXH%2BDNmO1vDfaprzOwfu%2BMDwEHoJpUV2u8lwWMimzIiVWUQxOjuU2TdIgsUxeESW03qup3lQTiMl8lU6gSICYnnaWdHdsqnluWWMr67cfIu7remTotXSP9I%2BbyHxu5gmMG%2FMNaY78gGOqUBtJv%2Bk6hpDRk8NqUDlfoPtdYVSGrIVgQSx5JBV4Z5TqwEUWcYpYs2QGhteIXVDJVPUVdxGsB55stS8q9LNp1PE5Hfl9QjmcQWCvyllZzC3C5i82zlGQmK5EJspvWVh%2BJeOzW%2FipYKlouSb1LZkkEwlJyw%2FEeh8jmxRAhFgkALK6xHD%2Fw2U8muGBGeUQUc3CLm0nZNd%2F80pUmUr8Lz%2BlIHWEERv0%2B0&X-Amz-Signature=d0a90078add0e7ac17b90fff15a9bf4999584ccc6a42d56617345ca35ce680fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUPSLALM%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuUxX14xk2alJmvD8GRbXdxZVLXp%2BET0FhIxLuYTD8oQIgOQ5%2FnbDy1hlNb%2FutIU%2FiZk50Zxnx%2BnqHFGFVMkwDfrsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsRgdJVLp2%2FppmMvyrcA2%2BcTQprt8rIpRqMmwrFnmjEqQjO07oJ7WSNR4PjJUst5mAc%2Fclf%2B2oQWbn%2FdkUPM6hd0heC7UNG5CT0hYrsn8HUvBNU3%2F2sZ2oCC4BussF8FQlCStI2ArG%2B7r9OKL6r36UQQgwlGjk0gs6Ch4zOkrjgDmCP5yTCz1GD7opLtc5NX5X6i5sJ4NtG6RcNkgHyXq9mSHPnpr9KX3d0RZn4%2Bnff%2Bf%2BBnzMmABKGU%2FejOi1WJgwsn2bplN2cBNqMtxrIagH%2FChveMtDwSTuXNszyzPbOuDHIMhD629vu1onwEylqQ21S%2BIuJ80f5h%2Fu1nAXwds50ijXbO1s6qc9l7RI6bqZynD5KIeUSSZYVnC7UAiv25uoUzHUW%2F4XF3OHojY%2FVZOnRw%2F27sdkeyy4Z3ZLXs5kpB3jm%2Bqui%2B4xPcrUYJU8XNYejXb2B9nRUl7cGNwho9CYnC0tc%2Bxy1TnCf01DYuJasRDgQb33uc4DLUvLwk6JRxhyzRgLkRVkC8XXH%2BDNmO1vDfaprzOwfu%2BMDwEHoJpUV2u8lwWMimzIiVWUQxOjuU2TdIgsUxeESW03qup3lQTiMl8lU6gSICYnnaWdHdsqnluWWMr67cfIu7remTotXSP9I%2BbyHxu5gmMG%2FMNaY78gGOqUBtJv%2Bk6hpDRk8NqUDlfoPtdYVSGrIVgQSx5JBV4Z5TqwEUWcYpYs2QGhteIXVDJVPUVdxGsB55stS8q9LNp1PE5Hfl9QjmcQWCvyllZzC3C5i82zlGQmK5EJspvWVh%2BJeOzW%2FipYKlouSb1LZkkEwlJyw%2FEeh8jmxRAhFgkALK6xHD%2Fw2U8muGBGeUQUc3CLm0nZNd%2F80pUmUr8Lz%2BlIHWEERv0%2B0&X-Amz-Signature=6b287763bb1acac5dfed534e6bc32bed68e2a9c984e2ec5b8e7c9aecfda04480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
