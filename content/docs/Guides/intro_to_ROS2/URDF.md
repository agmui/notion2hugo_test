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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7SZ2VD%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbVlnbrUVcX0bI%2Fr3tBHw1m4AuJjnBguYqgK%2Bqne5RlAiAcfhHrhtMrSuQlzwl38%2F6v9OkMnp1jnGF5wLEGiCdOXCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6ll8uRhemnaaKqgqKtwDmG7cw1i0%2BH3NcsLmVbCzNQ3ixJOy9%2BDZg3k5rjKA57etpX97TZ2Ke2%2BxySQBraj4WIRzjw4fka6NzFZelaM2I%2BdARgQutvASTjcJ65%2BHpbnHiUTfI3yuZJ2v7RBFVgWT9TQXz1iRO91UL6trjLXstArLjsxi2kcnorFnM%2F2mh2wuLFD2PDdzBHUtpXsjriF%2FfL4%2F28g3i7dXKXX2vQQL86eDW9LG71NUJZxk3Ioqyx02ES6cT6Q0Bx%2Fbp4gGky2NWNI1tRJ4504yZu3aj%2BE9ZwUnKk7p0vFyPPKNXJAr6K2CO%2BTAQRVFtoj2l2zN6wX%2BbAkQqAvqDTgkpXcqCgmYvSFZEjPrKwSh1OS%2FGB%2BpzQmxBCCbA3Q24KxFWNrnqHiryqGe993yhvEFxl4TwFjhNHVenXJJvoUsZOt284yLXN8KHg1wtPYMD1Dr2UDhuba%2BYxAaeFGYWVSIjrNcc%2FR3E2zj9DXptLjZVmPAFZwqE2s3eTgLE%2FnJ%2BUOkDuUXUz4DuFoh%2BIFLi3V42274%2Bt8%2FBiLRXh%2FVeennx301n%2BEJgQp0lE%2BTuv9QXEeBvrMARtunQ0qpMIkzVGlPgL7DSTgLGEKLyZBrVR2bltAbrbcO1ChsR2YC%2BThf9l%2F4%2BM0wndqiyQY6pgHyHQlwO%2FgwTEzs1A4ARkJe%2F%2F6ti3uBFTKROHqIRBDtsuYsyMwLeIbIMEY20%2BEaOjkKxitNzKhbQPd2mxqWCzgRYfdU7p7ZZpQCYY9Oe82%2BUNaWJg6eBsiLfnZpGGykR2LdieFRclb6WYCE2CG7YAl9Bef3zQa3ZpLJCXOGdFHHb%2FJmp4NojbJe661NizgRBpky9Qscv63B1kY2GsMw59PE3SPfuOxC&X-Amz-Signature=78d189c6a4287d8fa22639e3fc8033888a2673903e88f41685549c5b693d8179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7SZ2VD%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbVlnbrUVcX0bI%2Fr3tBHw1m4AuJjnBguYqgK%2Bqne5RlAiAcfhHrhtMrSuQlzwl38%2F6v9OkMnp1jnGF5wLEGiCdOXCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6ll8uRhemnaaKqgqKtwDmG7cw1i0%2BH3NcsLmVbCzNQ3ixJOy9%2BDZg3k5rjKA57etpX97TZ2Ke2%2BxySQBraj4WIRzjw4fka6NzFZelaM2I%2BdARgQutvASTjcJ65%2BHpbnHiUTfI3yuZJ2v7RBFVgWT9TQXz1iRO91UL6trjLXstArLjsxi2kcnorFnM%2F2mh2wuLFD2PDdzBHUtpXsjriF%2FfL4%2F28g3i7dXKXX2vQQL86eDW9LG71NUJZxk3Ioqyx02ES6cT6Q0Bx%2Fbp4gGky2NWNI1tRJ4504yZu3aj%2BE9ZwUnKk7p0vFyPPKNXJAr6K2CO%2BTAQRVFtoj2l2zN6wX%2BbAkQqAvqDTgkpXcqCgmYvSFZEjPrKwSh1OS%2FGB%2BpzQmxBCCbA3Q24KxFWNrnqHiryqGe993yhvEFxl4TwFjhNHVenXJJvoUsZOt284yLXN8KHg1wtPYMD1Dr2UDhuba%2BYxAaeFGYWVSIjrNcc%2FR3E2zj9DXptLjZVmPAFZwqE2s3eTgLE%2FnJ%2BUOkDuUXUz4DuFoh%2BIFLi3V42274%2Bt8%2FBiLRXh%2FVeennx301n%2BEJgQp0lE%2BTuv9QXEeBvrMARtunQ0qpMIkzVGlPgL7DSTgLGEKLyZBrVR2bltAbrbcO1ChsR2YC%2BThf9l%2F4%2BM0wndqiyQY6pgHyHQlwO%2FgwTEzs1A4ARkJe%2F%2F6ti3uBFTKROHqIRBDtsuYsyMwLeIbIMEY20%2BEaOjkKxitNzKhbQPd2mxqWCzgRYfdU7p7ZZpQCYY9Oe82%2BUNaWJg6eBsiLfnZpGGykR2LdieFRclb6WYCE2CG7YAl9Bef3zQa3ZpLJCXOGdFHHb%2FJmp4NojbJe661NizgRBpky9Qscv63B1kY2GsMw59PE3SPfuOxC&X-Amz-Signature=c44bba0fcc4efcacc8a24bde8002eaa07f60c17f38e5ee4e2df83919c59693c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
