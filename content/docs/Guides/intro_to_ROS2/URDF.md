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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTOLGTV%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeRIEhKVcfnfv7jyIFz2wrS5nO0IfWCVFpfgKgjic0oAiA%2BtO1NhXpLRayEKaquDoEHaHJqlL3PpPeaBxSQz1hEZyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQKx4dZw5%2BDPabnCpKtwD2YIr2%2BXykjSii8o1vnZfDPgrXpl9RlmzJciv99jp5MaNuUteLG3JSE6ESSX9Uy%2B0ZcqqsMJKcILnzAqO7Azip7isdP3qQWtUsz%2FNS68VxvwfW6xz6pthL9jsVdXVKt2fTw%2BSTCDBCajDLePSBOwhWZbUIC4m72TbRMS87aJd0YcDN9HIzhSxXcc2jzFttMoXiAJjkQ55Zi5ETTP6wfpNOKLyvCu6C2QQKUJhjT8kFNk1MjZTx2zxaJ6JcrPC%2F6B%2BQaEf3CHxRrNiFAyOPYDb3fz6d3Zk4vp4PWalrqCgaAH%2Bj5hlXg5CQewvG4zFWwpAYaPBD8cwXUj%2F616WNHXk28Q91nCyBl5%2Bre5vtGqFNFmHhLhtYHlVixplkwjknizxxzqsnORCFRaRdSlwzUKlwn%2BfwLaO%2BmEA9VW%2Bv1mvDb9ytIqA4bhXzNYhu7g12AIHxPSfXib1Qa1R1fOmS96GiKAEwi3H7XwUX59JBK3MrOA3VqwhJOnoY0aT1y%2Bqt2ycl9QP2g0ORZRrTLyChiZh349Zm2OgZixQg5WQSEhVk5oFLovUAH5CmXqrtcV5Jv1TfSvURx69K6ZuiTtt%2B8Mu%2BfU%2FMdxYQ6FIys9M5MPvYQGJ%2FCwkmktMenkJTG0wx5DYzQY6pgEZF7KIYxds%2FlB%2FXUX9UMMeea1xpIyQFXeAcY5zQg47870ZIuYNjlbcKgXQTEnwsBKqm1q%2FNtvH1nUIjm%2FZKvn99s64esG9%2BwXzSTyrLZPT0vD3xC8TPlVU8p%2BSQUpMTYWFF386bKSxmLOVGH22jkFv6poMfNs6fdlgwmmC5esMvswWLrrOIPPSsoERFVkWbEdeJtizyU9UGYpL23VBS9NioFiVaUkv&X-Amz-Signature=07e7837eebb44b385353da58adbfc1cdfc33c9121ad2ee7df46d9bf5e67ff04e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTOLGTV%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeRIEhKVcfnfv7jyIFz2wrS5nO0IfWCVFpfgKgjic0oAiA%2BtO1NhXpLRayEKaquDoEHaHJqlL3PpPeaBxSQz1hEZyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQKx4dZw5%2BDPabnCpKtwD2YIr2%2BXykjSii8o1vnZfDPgrXpl9RlmzJciv99jp5MaNuUteLG3JSE6ESSX9Uy%2B0ZcqqsMJKcILnzAqO7Azip7isdP3qQWtUsz%2FNS68VxvwfW6xz6pthL9jsVdXVKt2fTw%2BSTCDBCajDLePSBOwhWZbUIC4m72TbRMS87aJd0YcDN9HIzhSxXcc2jzFttMoXiAJjkQ55Zi5ETTP6wfpNOKLyvCu6C2QQKUJhjT8kFNk1MjZTx2zxaJ6JcrPC%2F6B%2BQaEf3CHxRrNiFAyOPYDb3fz6d3Zk4vp4PWalrqCgaAH%2Bj5hlXg5CQewvG4zFWwpAYaPBD8cwXUj%2F616WNHXk28Q91nCyBl5%2Bre5vtGqFNFmHhLhtYHlVixplkwjknizxxzqsnORCFRaRdSlwzUKlwn%2BfwLaO%2BmEA9VW%2Bv1mvDb9ytIqA4bhXzNYhu7g12AIHxPSfXib1Qa1R1fOmS96GiKAEwi3H7XwUX59JBK3MrOA3VqwhJOnoY0aT1y%2Bqt2ycl9QP2g0ORZRrTLyChiZh349Zm2OgZixQg5WQSEhVk5oFLovUAH5CmXqrtcV5Jv1TfSvURx69K6ZuiTtt%2B8Mu%2BfU%2FMdxYQ6FIys9M5MPvYQGJ%2FCwkmktMenkJTG0wx5DYzQY6pgEZF7KIYxds%2FlB%2FXUX9UMMeea1xpIyQFXeAcY5zQg47870ZIuYNjlbcKgXQTEnwsBKqm1q%2FNtvH1nUIjm%2FZKvn99s64esG9%2BwXzSTyrLZPT0vD3xC8TPlVU8p%2BSQUpMTYWFF386bKSxmLOVGH22jkFv6poMfNs6fdlgwmmC5esMvswWLrrOIPPSsoERFVkWbEdeJtizyU9UGYpL23VBS9NioFiVaUkv&X-Amz-Signature=6275723a56d9836d913ca3ef80d53d71e095d8e5017282ac60b5166459fa669e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
