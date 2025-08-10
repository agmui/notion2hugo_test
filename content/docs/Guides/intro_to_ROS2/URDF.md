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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTXW3RB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFg0a%2BTeRJom0TP8Qhkid8jCTkhG2VdQSZGHhUxqrDGiAiAVB57J%2Bsh9ZG00zlNXQH5tNaEy2JDL9kA3qtj0WOLCfiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAFsRIxGTU8UOyHCgKtwDkBra3DQbAMO0zv7hg03vtyFcwrZ5qb%2FuDBAF2cw6dkIWRT6EyJ8jNVnjY6on%2BJoxXcozQEYCRmV%2F8ehhK8TdeO2iOAM8ouxcGn6VJbAe99C69KaTGxnbm8U4NJnT8mL07wwcW1uQmUqezlftn1PykICxBIThcLpZEqitAZSVPgr9zUnVKbtetHNDQt6cTo5Dtgp8ytKKQlRXtaXKYVRRZo1KoRhRsE%2BHQoBBqRLrMcgHEWalqaSE5dEr3Usd%2BQuhJOmcwo65LJzVXGzfc8%2Bpcar6hGgPOeHp6ItAk6czcHaJOo%2B4SSiXNdu3qxF3bpgYBq8y06jw0K%2FIBZVMEzYyIM0unDkKJkY5VehWj3a8FHeuOklgO%2B%2FNgQk0pHZsZ5FDqoOCE6Ju8Fm0QbXMQsPEpK%2F5R9IUZrZ9DqSeWWfCg83EF2c2O9FA%2FOCLVKGLskETVhRnxl0GDM9sYkJRd1UkO4Sm8cW2rI3JIAK7iHMC7Mi6z4tKALJcfaRaS30NL63UTdnTc8dhLEfr8LWMJX30J%2FHDlyEXF6SR6byN573M4BXHADP3mU9eGLbc6BgAtL3wS5bl0jmSobgNSJjKfxNhm4rooEmXHuSjTd8VYjVjVhHUu2%2BZEPiVagS7vdEwkvXgxAY6pgGIxCtW9H0e9U6tz6Khrx%2Fs9e7mSMfGVCc9Y0r8JLROJlBKa0l4J5f7PxkS8Qaqq3TBQM7%2FcDiCRpE7CJ3ru%2BLBNGqFGJDnQmI6vEFbV5Hq1T5iNk9lAp7j2EXk%2F0NUyj4r1kbhBBfF%2FA5D21qYaqSAmOmit7b0XyLOmVKr9Pan%2FNynTbcX3cle%2FpyOSEEJNIhg73wS8GFHsMNzYBSUC1ynSpmHmQV%2F&X-Amz-Signature=9d895dbe4351a0700e8a19fc8812f0ba4717a334b34df5749a702ec30a0a067b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTXW3RB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFg0a%2BTeRJom0TP8Qhkid8jCTkhG2VdQSZGHhUxqrDGiAiAVB57J%2Bsh9ZG00zlNXQH5tNaEy2JDL9kA3qtj0WOLCfiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAFsRIxGTU8UOyHCgKtwDkBra3DQbAMO0zv7hg03vtyFcwrZ5qb%2FuDBAF2cw6dkIWRT6EyJ8jNVnjY6on%2BJoxXcozQEYCRmV%2F8ehhK8TdeO2iOAM8ouxcGn6VJbAe99C69KaTGxnbm8U4NJnT8mL07wwcW1uQmUqezlftn1PykICxBIThcLpZEqitAZSVPgr9zUnVKbtetHNDQt6cTo5Dtgp8ytKKQlRXtaXKYVRRZo1KoRhRsE%2BHQoBBqRLrMcgHEWalqaSE5dEr3Usd%2BQuhJOmcwo65LJzVXGzfc8%2Bpcar6hGgPOeHp6ItAk6czcHaJOo%2B4SSiXNdu3qxF3bpgYBq8y06jw0K%2FIBZVMEzYyIM0unDkKJkY5VehWj3a8FHeuOklgO%2B%2FNgQk0pHZsZ5FDqoOCE6Ju8Fm0QbXMQsPEpK%2F5R9IUZrZ9DqSeWWfCg83EF2c2O9FA%2FOCLVKGLskETVhRnxl0GDM9sYkJRd1UkO4Sm8cW2rI3JIAK7iHMC7Mi6z4tKALJcfaRaS30NL63UTdnTc8dhLEfr8LWMJX30J%2FHDlyEXF6SR6byN573M4BXHADP3mU9eGLbc6BgAtL3wS5bl0jmSobgNSJjKfxNhm4rooEmXHuSjTd8VYjVjVhHUu2%2BZEPiVagS7vdEwkvXgxAY6pgGIxCtW9H0e9U6tz6Khrx%2Fs9e7mSMfGVCc9Y0r8JLROJlBKa0l4J5f7PxkS8Qaqq3TBQM7%2FcDiCRpE7CJ3ru%2BLBNGqFGJDnQmI6vEFbV5Hq1T5iNk9lAp7j2EXk%2F0NUyj4r1kbhBBfF%2FA5D21qYaqSAmOmit7b0XyLOmVKr9Pan%2FNynTbcX3cle%2FpyOSEEJNIhg73wS8GFHsMNzYBSUC1ynSpmHmQV%2F&X-Amz-Signature=2a027e74a88e90da78e9a1be1e6e93d4efd3bbe3bcb79d38af58003c1d619aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
