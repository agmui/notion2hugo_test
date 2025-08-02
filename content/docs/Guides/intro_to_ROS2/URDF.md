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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDNHHD3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3SPDXcCZAOL31Voe%2FHhITF1ZftOx62EMBhbTI499LfwIhAOCLxn3Ea0Crb4nxQm%2FSL%2B40rohQ26QfiVb2fF2o5x2DKv8DCBYQABoMNjM3NDIzMTgzODA1IgzsXAbT%2FdPGUpHRZ5Mq3AMYZeZ7%2BnqEgxbw7Kmhsw3KeQ%2BVmF5ie9dqKL8fDfwaGNtN1YKlwyGng%2Br70GHB%2BrYlvvb%2F8d9tSzdkwVOX6duUEE6N9DLg3etd1RzjBSt6%2BhHz0qBa2Aixkf%2Br2QxnZ%2FgTPsK1Yn8RuK6iNJgvwJQzdmJa5yxRBMrPuejLThqdYqxjJXKW%2F0uJ09sWEBkFKv4x6oSYCu%2BwLvaczwnrPYAdtJ6bsUcvyLrWCKIBBgWf82FLQL%2F13NkIWyGcq9IbLbMkiF61UBruDsxp%2B%2FCPRyc7PJUPf59psa1d9JWw8t9w9639W%2B7E5EY10RrvNh0CcLpOvd%2B%2F0u64EK4JR9A%2FipMKYuVmQg9S7q2N6Pp8S5zBfs6pWlRDoynNtbqD9CvMJCm5bhu8HNJq7OSl6HRvTYs4DPNQ0qL75iRHO17Ap9YtU%2FmemB00CGZk0xqRm36iCXThvS9hgGPEeZNKVBSdpcjKmpVktmCMsg0ztRQjxVtsnemvO0Z11TsO5PTPsh9LQoE8dx2dRVkI0I6zT8x6eHD9c7rJxW7DIENYFHuxVSHoHQ%2B4S7ZwQrbiCgEVytXQ1lIsEtqN3u739%2BRLzlJeR2gMIG4RyIsVQEoQjNa7gB46WRo%2BjAnj4LLE6MMHgTD6krjEBjqkAay8IiUUSSwoy8GfjD6gwSHpHKMbT%2F1ghvY0xwLjZQKyVvQFrMLeg8dvh3%2FF7m5lZmY9r%2BPHvFtX4Vyhm0ZxHBdUf8t15yXFI4jHfNIgdXlmIcyakmYTDZ43Ns17os59QNVCLE2FOPIl0Ybpve1%2FLe0BUWm4I2No5YyRlQH5zrDujeIwe4prlt5912lES04AaDIIEUCgkXhUCsdFX7Tu0PuhejE3&X-Amz-Signature=67624355c7ec627f8f12ad1ef963e641eb162a311c9696ab74063363e441b001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDNHHD3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3SPDXcCZAOL31Voe%2FHhITF1ZftOx62EMBhbTI499LfwIhAOCLxn3Ea0Crb4nxQm%2FSL%2B40rohQ26QfiVb2fF2o5x2DKv8DCBYQABoMNjM3NDIzMTgzODA1IgzsXAbT%2FdPGUpHRZ5Mq3AMYZeZ7%2BnqEgxbw7Kmhsw3KeQ%2BVmF5ie9dqKL8fDfwaGNtN1YKlwyGng%2Br70GHB%2BrYlvvb%2F8d9tSzdkwVOX6duUEE6N9DLg3etd1RzjBSt6%2BhHz0qBa2Aixkf%2Br2QxnZ%2FgTPsK1Yn8RuK6iNJgvwJQzdmJa5yxRBMrPuejLThqdYqxjJXKW%2F0uJ09sWEBkFKv4x6oSYCu%2BwLvaczwnrPYAdtJ6bsUcvyLrWCKIBBgWf82FLQL%2F13NkIWyGcq9IbLbMkiF61UBruDsxp%2B%2FCPRyc7PJUPf59psa1d9JWw8t9w9639W%2B7E5EY10RrvNh0CcLpOvd%2B%2F0u64EK4JR9A%2FipMKYuVmQg9S7q2N6Pp8S5zBfs6pWlRDoynNtbqD9CvMJCm5bhu8HNJq7OSl6HRvTYs4DPNQ0qL75iRHO17Ap9YtU%2FmemB00CGZk0xqRm36iCXThvS9hgGPEeZNKVBSdpcjKmpVktmCMsg0ztRQjxVtsnemvO0Z11TsO5PTPsh9LQoE8dx2dRVkI0I6zT8x6eHD9c7rJxW7DIENYFHuxVSHoHQ%2B4S7ZwQrbiCgEVytXQ1lIsEtqN3u739%2BRLzlJeR2gMIG4RyIsVQEoQjNa7gB46WRo%2BjAnj4LLE6MMHgTD6krjEBjqkAay8IiUUSSwoy8GfjD6gwSHpHKMbT%2F1ghvY0xwLjZQKyVvQFrMLeg8dvh3%2FF7m5lZmY9r%2BPHvFtX4Vyhm0ZxHBdUf8t15yXFI4jHfNIgdXlmIcyakmYTDZ43Ns17os59QNVCLE2FOPIl0Ybpve1%2FLe0BUWm4I2No5YyRlQH5zrDujeIwe4prlt5912lES04AaDIIEUCgkXhUCsdFX7Tu0PuhejE3&X-Amz-Signature=bc6d537fcce4e8e723fad562214dd6978dab15883f30d142432ec496abb0cf2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
