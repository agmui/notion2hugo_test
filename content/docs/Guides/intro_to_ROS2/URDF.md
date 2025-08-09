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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LGKYHZJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCcQiGF4n6OfZBs8K46FiOSLUapW394wjjU5jRnHnwxZQIhALECHFfHU5j0hlxvVBL6%2B0ozWpifMzaN2nqqi081FvGsKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiI10xsswsyTdqAWwq3AMX6%2Fn29Oil9BbIjhf8GIvlXCrEGOPCmyt4BZDLgAj5eqrlyCzGaA4auCOdF9Vh7iZvpfzEpzat6BbN5miJP3AzgR%2B0UyydgZO4x%2FY%2Bn9ieazrjAlU%2FkJHt5jYsV%2FGfVfITLBs6MIJf1uGSbUy5jJZfgy%2FyIyu1cmbQ244ZelwGg%2BpsuMpWnnGkARuWtZOEewchnagSGc2AVf0ks0RQmeunzPoWhEfCLZVvHea39agt5SzCAodHkjZx6Q%2BCPiVj%2BA4KtWOvEPt7ehW0M3YWtosebWoxWP%2FdjUfSRqBCeUN1ZwExAh%2FZ13SPMzIHkjEOBabehNGXsqjBQjU%2FdRfPwMNge1bJ6znItTxeT41PeyqF7tLq7RcZ7hj5RKYsxSJhKDOAp7Ca3CuTWEEIWiIU4hXigFXtU0BK%2BMIcBtzpo0uPQfM2Vs6coIwHiPJIGA%2FZBTuNNPv8cVbj9ndMhgeMOX1NoHButeInCfsef46NIw34zVLbzF3jgL6AJiABTFsuPfLhLiAXRvbx286i5ZJAtSDy%2Bqo6sT2Q4LNW1I2AmT6rI5%2FZxNQ5BHgUA2Chjg010x5J3eOIaEcOirltweAWWtB%2FmPkw6zIU5oiLgkOCDQdO30xKTh7EJVBA%2Bh5VDjDu0NrEBjqkAdM6rU213zUoc3hwaZMVEiNOHPW5w8BeHDWZcLF0BQmNjfsZ0qc6dKF1BRw1cr%2F0SEli1AQ2qKKGKsnjm%2BfdsQDpmSsWg9GhzUg5JP%2BDcDYcZXfJHggMHGUMenpJ0KPR%2FYud3NdONX4AAQpVcfb08EELrDYWxvoimH%2ByApRC%2B3%2BJLnfeIUnT0f3aISk3K3CKzrqKKqxneBOWYd1Eu5uWv3KoBl10&X-Amz-Signature=5ce75c8610bb304f500ba91b7beca390b2829e08f843f0835c4db82e2c9e55b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LGKYHZJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCcQiGF4n6OfZBs8K46FiOSLUapW394wjjU5jRnHnwxZQIhALECHFfHU5j0hlxvVBL6%2B0ozWpifMzaN2nqqi081FvGsKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiI10xsswsyTdqAWwq3AMX6%2Fn29Oil9BbIjhf8GIvlXCrEGOPCmyt4BZDLgAj5eqrlyCzGaA4auCOdF9Vh7iZvpfzEpzat6BbN5miJP3AzgR%2B0UyydgZO4x%2FY%2Bn9ieazrjAlU%2FkJHt5jYsV%2FGfVfITLBs6MIJf1uGSbUy5jJZfgy%2FyIyu1cmbQ244ZelwGg%2BpsuMpWnnGkARuWtZOEewchnagSGc2AVf0ks0RQmeunzPoWhEfCLZVvHea39agt5SzCAodHkjZx6Q%2BCPiVj%2BA4KtWOvEPt7ehW0M3YWtosebWoxWP%2FdjUfSRqBCeUN1ZwExAh%2FZ13SPMzIHkjEOBabehNGXsqjBQjU%2FdRfPwMNge1bJ6znItTxeT41PeyqF7tLq7RcZ7hj5RKYsxSJhKDOAp7Ca3CuTWEEIWiIU4hXigFXtU0BK%2BMIcBtzpo0uPQfM2Vs6coIwHiPJIGA%2FZBTuNNPv8cVbj9ndMhgeMOX1NoHButeInCfsef46NIw34zVLbzF3jgL6AJiABTFsuPfLhLiAXRvbx286i5ZJAtSDy%2Bqo6sT2Q4LNW1I2AmT6rI5%2FZxNQ5BHgUA2Chjg010x5J3eOIaEcOirltweAWWtB%2FmPkw6zIU5oiLgkOCDQdO30xKTh7EJVBA%2Bh5VDjDu0NrEBjqkAdM6rU213zUoc3hwaZMVEiNOHPW5w8BeHDWZcLF0BQmNjfsZ0qc6dKF1BRw1cr%2F0SEli1AQ2qKKGKsnjm%2BfdsQDpmSsWg9GhzUg5JP%2BDcDYcZXfJHggMHGUMenpJ0KPR%2FYud3NdONX4AAQpVcfb08EELrDYWxvoimH%2ByApRC%2B3%2BJLnfeIUnT0f3aISk3K3CKzrqKKqxneBOWYd1Eu5uWv3KoBl10&X-Amz-Signature=3200ac2c9095b860a3562ec4cd6cbc1382c8ec06e092ac6c55f8a7043c50a285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
