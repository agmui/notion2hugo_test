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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWGXVWY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDBOt9jV8hIdTtFiwZSGYAQEhed9n2U57Xup12DkSaJyAIhANTj%2FhlIXludsZrxnP6zFK02%2BQNWeeMtQu9RPypROvh%2BKv8DCHEQABoMNjM3NDIzMTgzODA1Igy%2B5q2lTPPYKkj5gNgq3ANThewFUJl5JYQdR%2F8CkbwP1LxJr%2Bm8OIlLTY5Wm9ekyiEK5EMiv%2Bq9MpqcuT5eqGDoTKg8veJI3fDeLdkRbCkkzI6kJL9dc00wKJNcK9wTWKghYS%2BO53rFC9yFPwzSPHMJJAZkRSmEpWaeA334C1ci4E3BSmbyPHtejdwIkNBo6WaMmFa0pHL2qHhk3uB2LhAhcWOcS%2BkGprSGzPWz5lUfrjPKW84C46SImXRiVlcf1vREDeK7LQFKJKlja4CjVgo%2FRY%2BpYc2Zxy%2B5xAkrXSX4Q5ZMLB9BwA%2BosLJWJl2ZHa5k%2BmufOxeQZM570yEj7qR66yQa8UsYg%2FLfp53g92K%2FjGRxfhUhidX%2FXEdSVyTt1SLOmTOr7ElbPJJW89QriSDBL3xAm3adz6XtIIL8lfr%2Bg6vDMomzPAtp29xIbyWkrRlJYG9DL2DUmBFz%2Bchs8XmR7ps639az25PCOzIB%2Fpk872zKtd7wT5WYRQbenaVjlD8sNayUZmaKDwABiJI4%2Fob830Xghl7jxyCzLjLarKb2Nnp7aHV1x3zHts9sHp73puR0Y%2FoRdFiQrejc2R9OUhSTUX2xpw10sDrXlwJFfeBIkH1PxxzQrCsp92PyrJoxKNK9tEb9LPwSBJyIAzDE94DFBjqkAXA0Nwn4rAQPM3IwvnFfe3PlEYnrolRd%2Fp0y9Aai6eX42q51oXiGrF57wW2bdmL%2B023J938RumWTUZdQQF1PDB33k5Li9L3awPYjBixlObxCVT6aWKryvrJY1AYyh6%2FsRqhd57Kz5a4GzVwmaUHYBg6wV0YWCX%2FGfZm%2FwliKl4PntF5a3kDrkane3KdVln1tXAHd6gq2iwWIucdjBwbOD6JVkmcY&X-Amz-Signature=de8a67742332d80af1fda76c673a522740e95faaf1b0e761b9a187cd811f111c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWGXVWY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDBOt9jV8hIdTtFiwZSGYAQEhed9n2U57Xup12DkSaJyAIhANTj%2FhlIXludsZrxnP6zFK02%2BQNWeeMtQu9RPypROvh%2BKv8DCHEQABoMNjM3NDIzMTgzODA1Igy%2B5q2lTPPYKkj5gNgq3ANThewFUJl5JYQdR%2F8CkbwP1LxJr%2Bm8OIlLTY5Wm9ekyiEK5EMiv%2Bq9MpqcuT5eqGDoTKg8veJI3fDeLdkRbCkkzI6kJL9dc00wKJNcK9wTWKghYS%2BO53rFC9yFPwzSPHMJJAZkRSmEpWaeA334C1ci4E3BSmbyPHtejdwIkNBo6WaMmFa0pHL2qHhk3uB2LhAhcWOcS%2BkGprSGzPWz5lUfrjPKW84C46SImXRiVlcf1vREDeK7LQFKJKlja4CjVgo%2FRY%2BpYc2Zxy%2B5xAkrXSX4Q5ZMLB9BwA%2BosLJWJl2ZHa5k%2BmufOxeQZM570yEj7qR66yQa8UsYg%2FLfp53g92K%2FjGRxfhUhidX%2FXEdSVyTt1SLOmTOr7ElbPJJW89QriSDBL3xAm3adz6XtIIL8lfr%2Bg6vDMomzPAtp29xIbyWkrRlJYG9DL2DUmBFz%2Bchs8XmR7ps639az25PCOzIB%2Fpk872zKtd7wT5WYRQbenaVjlD8sNayUZmaKDwABiJI4%2Fob830Xghl7jxyCzLjLarKb2Nnp7aHV1x3zHts9sHp73puR0Y%2FoRdFiQrejc2R9OUhSTUX2xpw10sDrXlwJFfeBIkH1PxxzQrCsp92PyrJoxKNK9tEb9LPwSBJyIAzDE94DFBjqkAXA0Nwn4rAQPM3IwvnFfe3PlEYnrolRd%2Fp0y9Aai6eX42q51oXiGrF57wW2bdmL%2B023J938RumWTUZdQQF1PDB33k5Li9L3awPYjBixlObxCVT6aWKryvrJY1AYyh6%2FsRqhd57Kz5a4GzVwmaUHYBg6wV0YWCX%2FGfZm%2FwliKl4PntF5a3kDrkane3KdVln1tXAHd6gq2iwWIucdjBwbOD6JVkmcY&X-Amz-Signature=b9ff48a074160c94dd32079c168219b78a23fd9a00400c7d7dd43bb69804dfaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
