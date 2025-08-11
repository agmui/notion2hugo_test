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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QZZXDBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvBhPCnqSEo7CTtApBSrP1J926AqqHzfTmb0L7C5%2ByuAiBRqghnhNgnkBgb3pk5OcDSHtzjoB%2FVYuqlC1NCZK2LtyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3XlsEN5UzCd2VobLKtwDVjHNiiyLdn2i9TGu4tdiQByBcFWofnPY6XIhK4NjZGsdA4o9pgd5aNuFmuGvmP974yrKdG%2FCzODujjQQ7B7kMttgap947qShwaGPqiM3o1y%2BfV6w9ylVq%2FcqaUMk%2FO2jnHldrnN97rpMWjgEyLPCZ5r6J6iHmwE82fhKOgqq5qvMaYtOdKPMbDquLbLqbxn%2F7A79jw3O40KJ3EzdOVi3Srpmo3RBVSPhWPZrV%2BhvpuVk1dlR%2FqfBG4VouKBVoGvnfnxsT3s5CQ%2Fk94BXOdJBvE2AlhhKdAoFvSzsrs25wlHDQ6adGXyAiRs2ZlmqYGQEVSmglMp6sYiUNsqShS3WpQiHbJIX1Wp82u70460W8JOgFhErVYFFUb%2Bn1%2FQpLzw7H1qkVcXllBwwkK570V8gqwkkSbMoobQ0cPKsxnn5ydN7gE%2FPiAAbxGOHzjWAm3C5TvWBrnoR4d5MjOFxdyalXO%2F0Gia9w9kNIMHXHfP7vwoLTC6BMIFsl0ulI2UJBWL4L8gm1PlBhR68DKNQGHkhK%2Baqao92on2jLzN0jaj0dH2Y%2B9VOJxMkUFdMyvE2Gnm3zMi52zuiiZSbZixISSylgKGhh1DSvaGpNwrUtKngB0j%2Bod2HNQe9ZopLEyow7fjmxAY6pgEYoO6m8cJtWgEmPGmHQca4oHzmibxQhLSIv7rl%2FGOPX81NvNZIJuxAVUosQYDIKZ48VT7jMCpCAZTzMMp%2BHPscM%2FZyQ2%2F6Ol7TKaDJpk0x8nhye2XxEzhVJY2q%2B7qOfN6WLH%2F0Zoi5J4n0gaf6fRI6NpGOU3NbXIC6P1f%2FP055UVRrv7PGRY8jb8QCQ9wcSTg6DdBHlYu39c4NRsiaX2Z11p9Q2GVc&X-Amz-Signature=b13499c835de80d41361a1febee1efe6899a97ed662810165ff79b8dddd5b88e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QZZXDBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvBhPCnqSEo7CTtApBSrP1J926AqqHzfTmb0L7C5%2ByuAiBRqghnhNgnkBgb3pk5OcDSHtzjoB%2FVYuqlC1NCZK2LtyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3XlsEN5UzCd2VobLKtwDVjHNiiyLdn2i9TGu4tdiQByBcFWofnPY6XIhK4NjZGsdA4o9pgd5aNuFmuGvmP974yrKdG%2FCzODujjQQ7B7kMttgap947qShwaGPqiM3o1y%2BfV6w9ylVq%2FcqaUMk%2FO2jnHldrnN97rpMWjgEyLPCZ5r6J6iHmwE82fhKOgqq5qvMaYtOdKPMbDquLbLqbxn%2F7A79jw3O40KJ3EzdOVi3Srpmo3RBVSPhWPZrV%2BhvpuVk1dlR%2FqfBG4VouKBVoGvnfnxsT3s5CQ%2Fk94BXOdJBvE2AlhhKdAoFvSzsrs25wlHDQ6adGXyAiRs2ZlmqYGQEVSmglMp6sYiUNsqShS3WpQiHbJIX1Wp82u70460W8JOgFhErVYFFUb%2Bn1%2FQpLzw7H1qkVcXllBwwkK570V8gqwkkSbMoobQ0cPKsxnn5ydN7gE%2FPiAAbxGOHzjWAm3C5TvWBrnoR4d5MjOFxdyalXO%2F0Gia9w9kNIMHXHfP7vwoLTC6BMIFsl0ulI2UJBWL4L8gm1PlBhR68DKNQGHkhK%2Baqao92on2jLzN0jaj0dH2Y%2B9VOJxMkUFdMyvE2Gnm3zMi52zuiiZSbZixISSylgKGhh1DSvaGpNwrUtKngB0j%2Bod2HNQe9ZopLEyow7fjmxAY6pgEYoO6m8cJtWgEmPGmHQca4oHzmibxQhLSIv7rl%2FGOPX81NvNZIJuxAVUosQYDIKZ48VT7jMCpCAZTzMMp%2BHPscM%2FZyQ2%2F6Ol7TKaDJpk0x8nhye2XxEzhVJY2q%2B7qOfN6WLH%2F0Zoi5J4n0gaf6fRI6NpGOU3NbXIC6P1f%2FP055UVRrv7PGRY8jb8QCQ9wcSTg6DdBHlYu39c4NRsiaX2Z11p9Q2GVc&X-Amz-Signature=7254ffe533726e475742d4a35172c01b6d4b9ff8adbd8f35ec7dccc894f3b6b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
