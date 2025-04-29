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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKWJMM6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbBAaoXdTwYCXaMoc4vBOiOKRXPCrIKFL4dRlUQHvh1AiB53dzWnL4TrCMnRRVtQiqnSL4S85i7prYPhyjhwB7%2BsyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM13UHp5F%2FmRLZ%2BStpKtwDzQr3orkMKqQ2unSRfuHQMDgYeGMj79XV%2FxslbdRcy2BYyFV%2B90%2B0z7lqVHk53865ciPxX%2B4s5h3ssmFY%2FNL2qRAgMtJMlImd9BMyoNzo%2BRBFd%2FSs4%2FpRj8llc%2BJylyYKhEc6TNSBaoWCAaZ7zC43Z7me7kBW8Y7yA3IsTtA4Dclz0WDhyUD4kQqQhoNdxzdSsdVDhjPTB0afjdt0CkBc2n10k70%2BA%2BTyZ7P9yfuogCAmA4qariiv2kaEugHY%2B1HYu2b7pbFnyzIg0j5U2gL4%2F1g5AaEu8XNlbwjRjVSAP5fEPhkaE7X2IdlqrW0BlQeVU0oDaYOQ2oivRR9sVO9RmzipuwMYeRbAKYL6V47m7Ferd6PXUgO7M5t%2FAM8kexiUJHyKQW9tFVgqJl%2BJCcvzKLiSMOhJzSTcHly6Nyk28rh94fDZhi31gmDYZjEVWTUe7CA6QQalo3OOReTRq0dMYN7ziStDciMIM5UerhVDpLPKhwAo5I6ORQ1N%2FaJ3opFUjCmmkz39t0TigHQZDlShtaQL5Lm08Zf8i%2BEehAnN6En8GVhqDkXg4tH7kADS1OQqtU6XpWU1x854I1qw5dJAlDFYpWzfPDApG7M88BBMBPvZluBSCZjdZqx0JOcww9vDwAY6pgGB0wOGE3KhfulbfUfAVNKzlCWOLJh94OHTqwC8aK5PM69VKaCbZOLPZMG18LSbxTvENDnLL0Oe3hiDMRVrJnhX0BJBYYlmk5AHhENZAx5rieHW6NX5pvtYC5hlqrgijFxJEH4RYcYgoPAm1NVSNuT6Pini2nhMHNMnALw5mwivkjNnUJHmDrdOwiBLYQEOdVZoQhl9eGrnmeun79NTZ1Rg%2BNjzl%2FY%2B&X-Amz-Signature=329dbe17c416473252e891d64ed4c39804dc1efdff04953d0dce11c6c2e88de2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKWJMM6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbBAaoXdTwYCXaMoc4vBOiOKRXPCrIKFL4dRlUQHvh1AiB53dzWnL4TrCMnRRVtQiqnSL4S85i7prYPhyjhwB7%2BsyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM13UHp5F%2FmRLZ%2BStpKtwDzQr3orkMKqQ2unSRfuHQMDgYeGMj79XV%2FxslbdRcy2BYyFV%2B90%2B0z7lqVHk53865ciPxX%2B4s5h3ssmFY%2FNL2qRAgMtJMlImd9BMyoNzo%2BRBFd%2FSs4%2FpRj8llc%2BJylyYKhEc6TNSBaoWCAaZ7zC43Z7me7kBW8Y7yA3IsTtA4Dclz0WDhyUD4kQqQhoNdxzdSsdVDhjPTB0afjdt0CkBc2n10k70%2BA%2BTyZ7P9yfuogCAmA4qariiv2kaEugHY%2B1HYu2b7pbFnyzIg0j5U2gL4%2F1g5AaEu8XNlbwjRjVSAP5fEPhkaE7X2IdlqrW0BlQeVU0oDaYOQ2oivRR9sVO9RmzipuwMYeRbAKYL6V47m7Ferd6PXUgO7M5t%2FAM8kexiUJHyKQW9tFVgqJl%2BJCcvzKLiSMOhJzSTcHly6Nyk28rh94fDZhi31gmDYZjEVWTUe7CA6QQalo3OOReTRq0dMYN7ziStDciMIM5UerhVDpLPKhwAo5I6ORQ1N%2FaJ3opFUjCmmkz39t0TigHQZDlShtaQL5Lm08Zf8i%2BEehAnN6En8GVhqDkXg4tH7kADS1OQqtU6XpWU1x854I1qw5dJAlDFYpWzfPDApG7M88BBMBPvZluBSCZjdZqx0JOcww9vDwAY6pgGB0wOGE3KhfulbfUfAVNKzlCWOLJh94OHTqwC8aK5PM69VKaCbZOLPZMG18LSbxTvENDnLL0Oe3hiDMRVrJnhX0BJBYYlmk5AHhENZAx5rieHW6NX5pvtYC5hlqrgijFxJEH4RYcYgoPAm1NVSNuT6Pini2nhMHNMnALw5mwivkjNnUJHmDrdOwiBLYQEOdVZoQhl9eGrnmeun79NTZ1Rg%2BNjzl%2FY%2B&X-Amz-Signature=57e22a7f8a6327c0dba22395a63aebf78f11166b7d4d727f7a382e10e2e6f2be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
