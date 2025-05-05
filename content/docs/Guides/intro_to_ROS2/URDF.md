---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
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

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GPCFD6L%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKZ%2BtXBvpijoZbkpax1RwLNS3pPKzq%2BrWdIeJz6ieMNwIgJOtIlSHBXTgZFVLWTdHnWS00uoI0QB%2BoJLhwEe7%2B8l8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDC%2BoJpQKWrkXEC98yircA%2BK9bB1PrR3o98O2kkUIcdysNQ8t15uVnL9oTBM8LhWaFklikjKJA4jurEFD0Ps9b6Dhu52sve%2BiI8Sh0Mv4%2B%2FpKOCrZr1ajt3gRnMPZqB503drmH%2B8z3bJdlyptBNwbNT00Qo%2FXiJ1mkXFsrQ7s6L7C3zO0HNzjNOPQzW%2BqE%2Bn%2BChURv5Z6zRWH%2B7BzgUuaJIuzL3ION6sIuANOXW4mDdheVlg9kjtYplvcz5dMwGmXl%2FdIsf8JlKr6SFcYCeL59kic%2F%2B8f%2FRj1aOwmkVwKvslrXgWU9QzcyEZiLnsF%2FAr7akOx2wdDmJ72FCFZp0ddVfVDYVdblxTPh0lxKrbXt78252gSPoE5kTrMub1zZr6BT49NwnBX3mlRLzBHPI4zCBdZUvDGXwmhJNAIAjvvO228JatGQS5NUhY2uF47d9TLsoFtnExGyPCyzK3QuuIY0ficexqw%2FpxxmLa51a2cOsajN2WHB1zq3g38IUudJLY1fKJyN7Y76gKnEAdv2vPcj1tfar3KqRxrGm9Y9Cxbz4zUnHr53ckPzGMrKdpGhalXeTSvHEZi%2BXE9L3sumzCQuIrTNzS%2FrCfiXeR4Nj6XV9rqpSds8UQyOglZk9fsDDKlkM2uVg5NoR30VhDjMOHP4cAGOqUBrEh816%2BJ%2B7qykSvJiZRxSwUK2be8TdeNJ4%2F%2FRO2PzBX4Y5s1ZcpicZiqkY%2FgcyWP%2FByGSYW11oy3oF0yqKLoWOjs41Y4KtdF9bTXUfc2C2LUFqnPDfbZpn007j1yjCZGflEvaywRMQcetoLFUBuY%2F9dmM1jrxXzmsldxg2S1j27o3V53Yzgq5W8%2B4jkxWLqrJoiqI0Ybf18EYsnQQlKL6njlIR4c&X-Amz-Signature=2a53a8eebf2e672eead118849d71156297d0b72d6f48c382ece61db0e3cca007&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GPCFD6L%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKZ%2BtXBvpijoZbkpax1RwLNS3pPKzq%2BrWdIeJz6ieMNwIgJOtIlSHBXTgZFVLWTdHnWS00uoI0QB%2BoJLhwEe7%2B8l8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDC%2BoJpQKWrkXEC98yircA%2BK9bB1PrR3o98O2kkUIcdysNQ8t15uVnL9oTBM8LhWaFklikjKJA4jurEFD0Ps9b6Dhu52sve%2BiI8Sh0Mv4%2B%2FpKOCrZr1ajt3gRnMPZqB503drmH%2B8z3bJdlyptBNwbNT00Qo%2FXiJ1mkXFsrQ7s6L7C3zO0HNzjNOPQzW%2BqE%2Bn%2BChURv5Z6zRWH%2B7BzgUuaJIuzL3ION6sIuANOXW4mDdheVlg9kjtYplvcz5dMwGmXl%2FdIsf8JlKr6SFcYCeL59kic%2F%2B8f%2FRj1aOwmkVwKvslrXgWU9QzcyEZiLnsF%2FAr7akOx2wdDmJ72FCFZp0ddVfVDYVdblxTPh0lxKrbXt78252gSPoE5kTrMub1zZr6BT49NwnBX3mlRLzBHPI4zCBdZUvDGXwmhJNAIAjvvO228JatGQS5NUhY2uF47d9TLsoFtnExGyPCyzK3QuuIY0ficexqw%2FpxxmLa51a2cOsajN2WHB1zq3g38IUudJLY1fKJyN7Y76gKnEAdv2vPcj1tfar3KqRxrGm9Y9Cxbz4zUnHr53ckPzGMrKdpGhalXeTSvHEZi%2BXE9L3sumzCQuIrTNzS%2FrCfiXeR4Nj6XV9rqpSds8UQyOglZk9fsDDKlkM2uVg5NoR30VhDjMOHP4cAGOqUBrEh816%2BJ%2B7qykSvJiZRxSwUK2be8TdeNJ4%2F%2FRO2PzBX4Y5s1ZcpicZiqkY%2FgcyWP%2FByGSYW11oy3oF0yqKLoWOjs41Y4KtdF9bTXUfc2C2LUFqnPDfbZpn007j1yjCZGflEvaywRMQcetoLFUBuY%2F9dmM1jrxXzmsldxg2S1j27o3V53Yzgq5W8%2B4jkxWLqrJoiqI0Ybf18EYsnQQlKL6njlIR4c&X-Amz-Signature=29f1bed0b4fac99e8eaef84bcf7fc9fd9793560ee51d24e7fa62e3c42476f777&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
