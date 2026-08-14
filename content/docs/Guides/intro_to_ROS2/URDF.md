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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAKU4LH3%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD7zYg9iKf7k7kPC2LhpNczLcSg13dTGkTYq3JhbdzBmAIgKbY%2FXXnZu3d%2Fayu%2FCY7h2thSnrXhGQ0Uq7fk5SYSdggqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvUyLtEFu5EIaiqUSrcA04Enf2u24a0aLvdp0IsLTJzE3UHRyTvbFe%2B4nyKvoBJCJyqCLS%2BYYmKcvx%2FXi9Ix0tHZkNE0BBlsOIa1kHLjUtA%2B7ZQBszz0caV3HD8%2F6IfREJjqv1ZNroHkx1csd6AGjmrp1tvPW6lrJxeaw1VfxYSUY69jpPTwlaBzULV5PZrwiHeJUiBYL03jCQOkzxsLfI0U8IS06K2kdNbGBynJvGFq2uHaTZkbA%2FwYth0u4p3jBLqNjKnfonGhM5OnElh2TrYb30wDjwLK1%2BK4R91DEYnT4OuiWIc7dKL%2F58zpBv9aIjGFFiOI1WL1%2Bos1F6x5mO5hVSfGdm2FIK%2FlSj4vCUD%2FLTTgxDmbdubIOsyws3uLZaipthYJgXL%2BWIGWZJZjyK7xjYWrvhHOWst41j1ROcVg7gjNWmrFEdWtZmZcPtzZa6QYIb9y8o%2BTQbFE4ld0imXVTO9%2Bepw6h8udPdjamCcqfoE4l6id1YHfcDnY%2BGI%2FwMJD3vn6I%2BxQCHlTycM5dwABmah%2FzSG6mOWmuHi%2FKUnnGXe7ILYC%2Bvxb%2BrogEmV0nhaaP%2Fhd0gk1kJD8VVVfC3EqMnpGTBa0DeKffaIaSe61NICnR15O487sGdl2kpRfIPyVcTGRNzdbVp4MPaz%2BdMGOqUBQGGKc%2BuX0gXP4h7bSNJVuPcgbFydz%2F1S4YAUwGoe8MqhMHUbPKUDDGsiuV0GTv6exhEM2FdwwALfjRpbRBVtLc4lfLY4U%2BQEWlR8iFG3qWe1hlCSuCfReunnP7Lhj%2FyjejHAbvsOczgx8iXwxuFHMRej1j1IEfAq6eXrDN18Mj4vuX9BWN%2BHMjbFyOlOKO2vwMQuvPPopTqpJjE4OEplu19ZEYOq&X-Amz-Signature=f3c4282afdba1fa22f818cfb12869c88d92e0b09991618d36cdb01f4d988082b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAKU4LH3%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD7zYg9iKf7k7kPC2LhpNczLcSg13dTGkTYq3JhbdzBmAIgKbY%2FXXnZu3d%2Fayu%2FCY7h2thSnrXhGQ0Uq7fk5SYSdggqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvUyLtEFu5EIaiqUSrcA04Enf2u24a0aLvdp0IsLTJzE3UHRyTvbFe%2B4nyKvoBJCJyqCLS%2BYYmKcvx%2FXi9Ix0tHZkNE0BBlsOIa1kHLjUtA%2B7ZQBszz0caV3HD8%2F6IfREJjqv1ZNroHkx1csd6AGjmrp1tvPW6lrJxeaw1VfxYSUY69jpPTwlaBzULV5PZrwiHeJUiBYL03jCQOkzxsLfI0U8IS06K2kdNbGBynJvGFq2uHaTZkbA%2FwYth0u4p3jBLqNjKnfonGhM5OnElh2TrYb30wDjwLK1%2BK4R91DEYnT4OuiWIc7dKL%2F58zpBv9aIjGFFiOI1WL1%2Bos1F6x5mO5hVSfGdm2FIK%2FlSj4vCUD%2FLTTgxDmbdubIOsyws3uLZaipthYJgXL%2BWIGWZJZjyK7xjYWrvhHOWst41j1ROcVg7gjNWmrFEdWtZmZcPtzZa6QYIb9y8o%2BTQbFE4ld0imXVTO9%2Bepw6h8udPdjamCcqfoE4l6id1YHfcDnY%2BGI%2FwMJD3vn6I%2BxQCHlTycM5dwABmah%2FzSG6mOWmuHi%2FKUnnGXe7ILYC%2Bvxb%2BrogEmV0nhaaP%2Fhd0gk1kJD8VVVfC3EqMnpGTBa0DeKffaIaSe61NICnR15O487sGdl2kpRfIPyVcTGRNzdbVp4MPaz%2BdMGOqUBQGGKc%2BuX0gXP4h7bSNJVuPcgbFydz%2F1S4YAUwGoe8MqhMHUbPKUDDGsiuV0GTv6exhEM2FdwwALfjRpbRBVtLc4lfLY4U%2BQEWlR8iFG3qWe1hlCSuCfReunnP7Lhj%2FyjejHAbvsOczgx8iXwxuFHMRej1j1IEfAq6eXrDN18Mj4vuX9BWN%2BHMjbFyOlOKO2vwMQuvPPopTqpJjE4OEplu19ZEYOq&X-Amz-Signature=6728f45958615cb97ea74de43199fbd42ee88b20f6b20549d1342ff33304945e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
