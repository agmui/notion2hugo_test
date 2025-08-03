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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466656FZDCZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpRrs7%2F9sOsehvMdrxXsqq5hfMHMtA4p4nz%2BARd2ldqAiByVqmZEFLFuQhOVvMWe85jv7fdgT%2BZI8AxvUzs3qkI4yr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMyIrwAvDyKWaLXFy2KtwDeau259va6fZh6%2FwrC6hrA5r%2BTm1X8IEEV954LbVOVNqZwyg316%2Fogy%2FXZd5aW3htaQAj5zxpP6DU4pUsqvGn2mB6cZ1QKi%2B8K720RNyusmpTqAtCM3X2KinPuVoXOuL%2FUcM1B4UkEuxGY0HOcLVvn26X0A3yjKaozPQp%2Be8fc9bh8ARs0BSos59SrhW3xzYrbHegKJGqoH%2Brtoz0QNOw3YmkvGgYvLH4KqRQP1gkRyaEd4%2B5hDHluGEEV6A3NhCxcz2C8DWNMf8CRlKCCh9fcD1hQ7rlRKjKGQshcBU6S5gvBfh%2BTvbbwX9nyKEB9pArOnZbxTvoXFTPkxY7yJKBqnjYVIAeKFsnINXMkPt5TID8p4P36N89Y8GHkOWMUnS%2F2eTA%2FsoaG1E3xsWIDfDoRDvHMqmY1Tb2%2BFRGA25ccJe2nTVFfQwWWv4TeX6vFXNhzvU5sqU1qgEYDuJcXFABmIOy6vyy4lCUJeySp9n483KdVeaPY8MZjrXlwUTJHq%2BMso%2FD5rPtNscDPn8d64QZGkIOvH09BGKMwQY3m%2FCXTBc4KvLUWIYYXqwc0JAGCA5tWkzPP%2FEvO2uGFR%2Bxwxy0t6hAlxY31rTRMFUbssSw%2BoOATi2B1R1WwwOstmQwgqG7xAY6pgE9mDNKYybRLF%2BYIVmmCaFeB1JP5LZ4aa44UidG%2Bb4JcjTFCm5nfi%2FdK8QmM%2BNZU9aiKwedFR83St12srN3ZNOnHci85MsuNq30FBqjBMl6FXuo%2B5WpcO%2BMF%2FwlAuSOiMzbCPdDpfiqPzpuwio0f9jbZzBmx4uhBC9uYJvg7fuZkxx5DSWpls%2Fvqraq9lXrlctTowQWNH%2FVd8tu535T9nzrlh2PVVtB&X-Amz-Signature=cbf37105bb926f63ccfd19da1791b2bc0befe56c02d8f2ac4153eef4aa1ed689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466656FZDCZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpRrs7%2F9sOsehvMdrxXsqq5hfMHMtA4p4nz%2BARd2ldqAiByVqmZEFLFuQhOVvMWe85jv7fdgT%2BZI8AxvUzs3qkI4yr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMyIrwAvDyKWaLXFy2KtwDeau259va6fZh6%2FwrC6hrA5r%2BTm1X8IEEV954LbVOVNqZwyg316%2Fogy%2FXZd5aW3htaQAj5zxpP6DU4pUsqvGn2mB6cZ1QKi%2B8K720RNyusmpTqAtCM3X2KinPuVoXOuL%2FUcM1B4UkEuxGY0HOcLVvn26X0A3yjKaozPQp%2Be8fc9bh8ARs0BSos59SrhW3xzYrbHegKJGqoH%2Brtoz0QNOw3YmkvGgYvLH4KqRQP1gkRyaEd4%2B5hDHluGEEV6A3NhCxcz2C8DWNMf8CRlKCCh9fcD1hQ7rlRKjKGQshcBU6S5gvBfh%2BTvbbwX9nyKEB9pArOnZbxTvoXFTPkxY7yJKBqnjYVIAeKFsnINXMkPt5TID8p4P36N89Y8GHkOWMUnS%2F2eTA%2FsoaG1E3xsWIDfDoRDvHMqmY1Tb2%2BFRGA25ccJe2nTVFfQwWWv4TeX6vFXNhzvU5sqU1qgEYDuJcXFABmIOy6vyy4lCUJeySp9n483KdVeaPY8MZjrXlwUTJHq%2BMso%2FD5rPtNscDPn8d64QZGkIOvH09BGKMwQY3m%2FCXTBc4KvLUWIYYXqwc0JAGCA5tWkzPP%2FEvO2uGFR%2Bxwxy0t6hAlxY31rTRMFUbssSw%2BoOATi2B1R1WwwOstmQwgqG7xAY6pgE9mDNKYybRLF%2BYIVmmCaFeB1JP5LZ4aa44UidG%2Bb4JcjTFCm5nfi%2FdK8QmM%2BNZU9aiKwedFR83St12srN3ZNOnHci85MsuNq30FBqjBMl6FXuo%2B5WpcO%2BMF%2FwlAuSOiMzbCPdDpfiqPzpuwio0f9jbZzBmx4uhBC9uYJvg7fuZkxx5DSWpls%2Fvqraq9lXrlctTowQWNH%2FVd8tu535T9nzrlh2PVVtB&X-Amz-Signature=f948f38f7df913706d846535992bebfa3e406a7429a71a2926d4a15c5369bae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
