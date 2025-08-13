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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRWFG2Z%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTxO%2B3ZPCo8NpHtFPVXP4NPQLh7CIU8m3nx1845g74aAiEAmTrwRUHIt77dsrQXWoH0zm05aHDAGKtTB3dzFgkK6oMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDBTqMbDh5rFhosJVNCrcA4ZyHZCpHgz%2F3GxPGir4S%2FGE9DLetQPpLtWsxCDFVDC3eahPfgTijCB5Zx6CfifARaYpJUIF00TggsDWFxkDRnwd09yF36ULYxpJ7SG6QfiEMRnWyg0NJS%2FmM7EwaOyt1E8jcB50CJMuX%2BoytZqrqNW1WSB8F%2BfoEGom%2BSQmcMj%2FUBcuhrKBVUYLMxA51SymdRQw7eG104mlq1HiWVef9U45%2B%2FfUmaD71VUsElf919pbLPoe9VcgA1dxnVBxwfF0Dts0wDNajk2oI8bQeA81sLbNmVFuo5T3EfeKLn7s1ng7QiPRa%2Fkk72B7Ms8snL7dfg6sp%2FSz%2BhDRg3%2BqEmWRt0zNzpERAbAo5TvglLNOcuZJT0osUnzY3HVLY9Cju1kNtg3af7nEUANuZeqeA9eh%2BjDof1tRGF%2BYM%2FdwQBhT%2FThd2g%2FmEB1Wz8k9kSVjE4ERn%2B3qcf%2BItPV8rumqXvKnnpCY5Re2c%2BlXKSgq1rw7Xn8ckzx4TRTa%2BayQqYrPLkwipNAS88%2FN3UmsejHokksRJJTNPsmJfIYmJjuR3iX%2BgaXF3i5bYY2jOouRtjTYbZeqQDafFmivG9BpzZ%2B9qf3nHLvpB9NqZxnWY%2BU2pVTyViSO6P649FLzlua16TWgMOaG8MQGOqUBeCWBfoGupX07vUlZqEskqa0RfeceyGsxq9HHTu%2FfdbtEI4a9sF%2F82DqV23Wpbz%2FZ57deX8IojJ147nnb%2FOQk5HMeHcLlTMXJCwVE4s09EfBTtXhnnvnQELeq4CuJyMvLpUlGbfr3PAPswSkg453cPxazq6c09uvtpUFA08CRGAsVAbf1cldZANZJg7ROHEAeOqvhQVN99g0HWYccfYFA%2BNoDw4aQ&X-Amz-Signature=b409ec2053018315c535b7f82bd3c6325344cd1e4445cb23eebf0a4e9acef073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRWFG2Z%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTxO%2B3ZPCo8NpHtFPVXP4NPQLh7CIU8m3nx1845g74aAiEAmTrwRUHIt77dsrQXWoH0zm05aHDAGKtTB3dzFgkK6oMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDBTqMbDh5rFhosJVNCrcA4ZyHZCpHgz%2F3GxPGir4S%2FGE9DLetQPpLtWsxCDFVDC3eahPfgTijCB5Zx6CfifARaYpJUIF00TggsDWFxkDRnwd09yF36ULYxpJ7SG6QfiEMRnWyg0NJS%2FmM7EwaOyt1E8jcB50CJMuX%2BoytZqrqNW1WSB8F%2BfoEGom%2BSQmcMj%2FUBcuhrKBVUYLMxA51SymdRQw7eG104mlq1HiWVef9U45%2B%2FfUmaD71VUsElf919pbLPoe9VcgA1dxnVBxwfF0Dts0wDNajk2oI8bQeA81sLbNmVFuo5T3EfeKLn7s1ng7QiPRa%2Fkk72B7Ms8snL7dfg6sp%2FSz%2BhDRg3%2BqEmWRt0zNzpERAbAo5TvglLNOcuZJT0osUnzY3HVLY9Cju1kNtg3af7nEUANuZeqeA9eh%2BjDof1tRGF%2BYM%2FdwQBhT%2FThd2g%2FmEB1Wz8k9kSVjE4ERn%2B3qcf%2BItPV8rumqXvKnnpCY5Re2c%2BlXKSgq1rw7Xn8ckzx4TRTa%2BayQqYrPLkwipNAS88%2FN3UmsejHokksRJJTNPsmJfIYmJjuR3iX%2BgaXF3i5bYY2jOouRtjTYbZeqQDafFmivG9BpzZ%2B9qf3nHLvpB9NqZxnWY%2BU2pVTyViSO6P649FLzlua16TWgMOaG8MQGOqUBeCWBfoGupX07vUlZqEskqa0RfeceyGsxq9HHTu%2FfdbtEI4a9sF%2F82DqV23Wpbz%2FZ57deX8IojJ147nnb%2FOQk5HMeHcLlTMXJCwVE4s09EfBTtXhnnvnQELeq4CuJyMvLpUlGbfr3PAPswSkg453cPxazq6c09uvtpUFA08CRGAsVAbf1cldZANZJg7ROHEAeOqvhQVN99g0HWYccfYFA%2BNoDw4aQ&X-Amz-Signature=ebb1bb4d45e5b4996544f5a5e2bca6de4ad4889738619613a82dc9bc25938202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
