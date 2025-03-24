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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMD72CIC%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpHRkE7OVhaslJq%2FNrTV080VGHXMMCXcxHGUAKn3PJ%2FQIgTU%2FW7qkE8WBDEI9yWFzZTEuQ0kjW5LiJq3ASePDrxlIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8zb4ZAqmf24vqsdircA3Mw6B9DRMi6IeXRehNf5SwGgFAO8w9ePTYZ0KWT9Dlzbl1xHw31%2FC%2BsdYcRWAIg7W59qqtQw16IqsmEiLsFmIMTc4dqzXiNKJMqIxxFiba12k0Tuan5ahH9ALIlUeFTyOdyXoCDqUxO80BP%2Bnje07rjGLrFtfsmsGWzBhRi1QfBn8iEMIpJHNArQw27omYVNpIXg2ilI5VvmXnLZCSmTKmoIGOmLXXaUDs2dE9b3EppTiwJmIYP1oQko%2BXVBvCluJmQ38egsQlMvqdBmn6sWFae1t70Mz8oZNk7zQNdzj0B8iT7lFxIytPkLiTkHfbE9U4y2aaAcuQHsWAYzDHFWDwuMJFfvErwWoSMfiI5Ldb8UAurAdOvrHFh%2BTJXzzmZ9%2BkPZyLkgMQuxjfiu%2FmRudF2Ghxmn4iLLhZXp4FytKSwWtM8OenxnC%2BTzPCbN%2BIrLg63nFvGCFg0E9vy%2FJNOHZPYp3FNjOZ4GAf4%2BTED3vzxIbDl4VL5J14HFd%2BUxXHw7SEVRH84wzVi8EYCz%2FLtjDS1EQYSZVUM97Hf5nWXlXvYrgq9V59dWbA2dj0bLjOaOUk3EQTXXeP5D%2BHocbfoebYNxmkcLauWzlVZBDBHkZ4%2FB61EzSMDBcZIrT2ZMNqQhb8GOqUBzNt1Dyi%2BRdY5sCW%2Frg8wZvXKtEcOoTViV0ZZEKpz57HVYk%2BlF9jSa48DmcDNcgDAGm9kPARCZjwAq%2FdPvrYl5iSaHmhQCbvF53nqf6fWd%2FFCXol32IFtLnX%2B54nzeUmG8ROgZ7xVE4OUz2W0z1Gumrpc0RHatasnnq%2BqhreA4k0V0v0%2B4bjYrps0V8d%2Bl9x7l598Wbs3mlc1mDdLU1QqpDraSTwt&X-Amz-Signature=5b14d842693010e325c0cb0e57f1e90ab38f3b1af646a71670f366b5443aa3e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMD72CIC%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpHRkE7OVhaslJq%2FNrTV080VGHXMMCXcxHGUAKn3PJ%2FQIgTU%2FW7qkE8WBDEI9yWFzZTEuQ0kjW5LiJq3ASePDrxlIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8zb4ZAqmf24vqsdircA3Mw6B9DRMi6IeXRehNf5SwGgFAO8w9ePTYZ0KWT9Dlzbl1xHw31%2FC%2BsdYcRWAIg7W59qqtQw16IqsmEiLsFmIMTc4dqzXiNKJMqIxxFiba12k0Tuan5ahH9ALIlUeFTyOdyXoCDqUxO80BP%2Bnje07rjGLrFtfsmsGWzBhRi1QfBn8iEMIpJHNArQw27omYVNpIXg2ilI5VvmXnLZCSmTKmoIGOmLXXaUDs2dE9b3EppTiwJmIYP1oQko%2BXVBvCluJmQ38egsQlMvqdBmn6sWFae1t70Mz8oZNk7zQNdzj0B8iT7lFxIytPkLiTkHfbE9U4y2aaAcuQHsWAYzDHFWDwuMJFfvErwWoSMfiI5Ldb8UAurAdOvrHFh%2BTJXzzmZ9%2BkPZyLkgMQuxjfiu%2FmRudF2Ghxmn4iLLhZXp4FytKSwWtM8OenxnC%2BTzPCbN%2BIrLg63nFvGCFg0E9vy%2FJNOHZPYp3FNjOZ4GAf4%2BTED3vzxIbDl4VL5J14HFd%2BUxXHw7SEVRH84wzVi8EYCz%2FLtjDS1EQYSZVUM97Hf5nWXlXvYrgq9V59dWbA2dj0bLjOaOUk3EQTXXeP5D%2BHocbfoebYNxmkcLauWzlVZBDBHkZ4%2FB61EzSMDBcZIrT2ZMNqQhb8GOqUBzNt1Dyi%2BRdY5sCW%2Frg8wZvXKtEcOoTViV0ZZEKpz57HVYk%2BlF9jSa48DmcDNcgDAGm9kPARCZjwAq%2FdPvrYl5iSaHmhQCbvF53nqf6fWd%2FFCXol32IFtLnX%2B54nzeUmG8ROgZ7xVE4OUz2W0z1Gumrpc0RHatasnnq%2BqhreA4k0V0v0%2B4bjYrps0V8d%2Bl9x7l598Wbs3mlc1mDdLU1QqpDraSTwt&X-Amz-Signature=8576e3e9cfb9e4ae029490de8b9a29a5eba20ab5923bd665bd0e74bae7785c89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
