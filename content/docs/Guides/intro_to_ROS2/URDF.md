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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4OW7ZQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIAjpPoRAZCZsI856eLP0ryVU6eDyiErJDc%2BU9uYLRdpoAiBjCYym3T1lZhNT2eze9sNeVLqHR91yiCSa9ZF9JxVULCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMf17l7zVFe7e4MUVqKtwDneEdcru0FpJ1ituIMkeVKamLjz4ymNGEPp3tYvLtOhb9CB5gqCoTjb7Ei9MWFqShawPxIf%2BzS5LwfY0N4E7gWTVtWhZQs%2ByHRjIPQ1Yhq0ZhNq98EPmOTesD374lssDc09RfYmOYZ4wO5LxB8yKtIE8RJYwBEzmfW9IQQyzTbeWfGWEh0xNxX0lhWdoFZnYoXSBYBhABYQ%2F2XYliEoMqubkrUzZk3Ly9uC5klcgkzB0Yb1GnRtUxyfoG1v6jW2dxUaoOvl6zP68IT3qyAmXsFN%2B0EZ4HKLAaPblGdTnt9Dxk0ScvZ2qEGRN5ngkr24Jh0llOBeRdls5rzH8W%2BN0D0Z5oRFKbfc%2Bb6RW6797kXxgA5Alt5mC97KdevqUgvVAMnJG1uAYHWEJGLl7mo3cfzRY7au9TZDkE61i823MhPVdlBoK9suilfegbpKDewnCOk9Ht894Esk1nb9hsMI7LqT3tc57hLVDkqgWKhj7C%2FXrQNXolSHjVH8zTxOorq5V%2FiGnv5nwbM3L1a3YRzF%2B7BRR19fuWu%2F%2F1T3glHeW%2BJsEJ7vDkf4oCeeOYZFO%2FrpGO%2B%2BqZ6Okk9o5FOHulW40bJqejW%2BTS9JRImfVK1%2B%2FMCdCw%2FZpfWCS0VU7k6tQwq8zIxAY6pgEaqetaxmlmeUeusnpvXOYPr1BzB5U0EgmcmdOInFLBEv0XW3p65p6WcOaZ6RGqBDQXXpzUbKDUtc7%2B4Y0HbpaOC3AuUMgqv1%2FAp7kp%2FgiXW%2BQEvBMvhjEsooQEkhR%2FAwRivDlB1M9hrtoXBLWOPEPXMdf2HDF%2FMmQphqQu4btNrbJ%2BwkxIzu%2FSFnS6BD8G9%2BZnypCTo3i0YvoG0pU0qNmiPS2cIfW8&X-Amz-Signature=40eabddae2d95bfc56d75bdc5c359a5fe9944c6da87f61a304a521c22cb41c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4OW7ZQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIAjpPoRAZCZsI856eLP0ryVU6eDyiErJDc%2BU9uYLRdpoAiBjCYym3T1lZhNT2eze9sNeVLqHR91yiCSa9ZF9JxVULCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMf17l7zVFe7e4MUVqKtwDneEdcru0FpJ1ituIMkeVKamLjz4ymNGEPp3tYvLtOhb9CB5gqCoTjb7Ei9MWFqShawPxIf%2BzS5LwfY0N4E7gWTVtWhZQs%2ByHRjIPQ1Yhq0ZhNq98EPmOTesD374lssDc09RfYmOYZ4wO5LxB8yKtIE8RJYwBEzmfW9IQQyzTbeWfGWEh0xNxX0lhWdoFZnYoXSBYBhABYQ%2F2XYliEoMqubkrUzZk3Ly9uC5klcgkzB0Yb1GnRtUxyfoG1v6jW2dxUaoOvl6zP68IT3qyAmXsFN%2B0EZ4HKLAaPblGdTnt9Dxk0ScvZ2qEGRN5ngkr24Jh0llOBeRdls5rzH8W%2BN0D0Z5oRFKbfc%2Bb6RW6797kXxgA5Alt5mC97KdevqUgvVAMnJG1uAYHWEJGLl7mo3cfzRY7au9TZDkE61i823MhPVdlBoK9suilfegbpKDewnCOk9Ht894Esk1nb9hsMI7LqT3tc57hLVDkqgWKhj7C%2FXrQNXolSHjVH8zTxOorq5V%2FiGnv5nwbM3L1a3YRzF%2B7BRR19fuWu%2F%2F1T3glHeW%2BJsEJ7vDkf4oCeeOYZFO%2FrpGO%2B%2BqZ6Okk9o5FOHulW40bJqejW%2BTS9JRImfVK1%2B%2FMCdCw%2FZpfWCS0VU7k6tQwq8zIxAY6pgEaqetaxmlmeUeusnpvXOYPr1BzB5U0EgmcmdOInFLBEv0XW3p65p6WcOaZ6RGqBDQXXpzUbKDUtc7%2B4Y0HbpaOC3AuUMgqv1%2FAp7kp%2FgiXW%2BQEvBMvhjEsooQEkhR%2FAwRivDlB1M9hrtoXBLWOPEPXMdf2HDF%2FMmQphqQu4btNrbJ%2BwkxIzu%2FSFnS6BD8G9%2BZnypCTo3i0YvoG0pU0qNmiPS2cIfW8&X-Amz-Signature=ada8fd2f942d422314936e3135efe328347ce3e6a511ec6611ca7d1bc4d6c221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
