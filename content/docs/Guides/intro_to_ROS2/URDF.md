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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGPP2IPK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxTp59dSobAV5Ld%2FtF%2Fj6K5c7RJl7piN2Sxy9cY9yD3AiEAoNudcZ5gyOAM%2Bd%2B1gVnN5DL0m5FMbtT6%2B%2FLNc41dlDAq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDEcgeB8rS%2Bz%2F9UakKSrcA1XXX22c7CKqHRG2BJFeDGA0w3b0BeIsIm1p3QvnWFb8RCo6q4Y1Bt9PIfYO62dzAX8etava9Nagh7pVQYntF0bjCLsS8V6Nfxamhvm5%2FSA1M2IFHvfy34DDS3cv9lVFwKtyDYFYCV%2FCwm2kVof5RIoKNKwLXWnTvKxTQ%2Fqld92hiHlid1fBOcklB%2FJGHtKtfc34ShFOPvX0%2FpQpwlfWKXfl0q4SixdjiOVTlh3%2BhvOXeVdB%2Fl1jf61pmiHpaZHXEmhlSwF0OAjsZpv%2FAASewOP4E5%2BgsEsBmAWXjBuQU0jpy%2FccB0%2FDaTGatF1Y2K%2BV%2FloObdb1tnOkSw0GR2MxDrtz9fJL2GLQxzJTOFZCR4xE1cukT43BRDdNHyWQny%2BFEGkJnQJQQeQutsCL%2FmrckXZFKkTWgBkwMo0MolF1NOMyaToDbDh56Ppr%2BPwXbBkGVA1OTeAW0cYIK1nh0eWaOtGR0aOPaJEpzh04hBv%2BY2ty%2Fi15jj8lbRIdaMeTa%2B1X7pf65k6bXj4VLO%2BEVKKlqNp1vb%2BrpRwGvQ7qEIA13hU%2BTf4N2pZgyq22bTkI8WB6arGQPDqCsVC9wgvtYLvJN5L2Xe2IqNpel06oP3fcTm4JeXcD%2FuDwQKtbhb6NMNPi174GOqUBG8g5%2FdQhIjOyFatfKgGcMXbmQdX59LIMzFLJFBe5N9EtOq9fVLo0EbF%2BNAFavu7pyXSQX8dJk3gPphZnlqTyZSzTL9Ql%2BvQqInru9PVQuSKTCfxtoKWofuNfq3gAetIv4N%2B9RCFTC%2FS7y6x4ysnk6Aw%2BBDxEM4FhEm5js1aym8inywOpaGfNxQfqj4SeAKvu99nV%2BmQiZZ3Yqpf8zv%2F6%2BOwxfAFu&X-Amz-Signature=de247882ab132ea82015897ea8650e4070e833ea7496db35ba70f6c9ff948d18&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGPP2IPK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxTp59dSobAV5Ld%2FtF%2Fj6K5c7RJl7piN2Sxy9cY9yD3AiEAoNudcZ5gyOAM%2Bd%2B1gVnN5DL0m5FMbtT6%2B%2FLNc41dlDAq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDEcgeB8rS%2Bz%2F9UakKSrcA1XXX22c7CKqHRG2BJFeDGA0w3b0BeIsIm1p3QvnWFb8RCo6q4Y1Bt9PIfYO62dzAX8etava9Nagh7pVQYntF0bjCLsS8V6Nfxamhvm5%2FSA1M2IFHvfy34DDS3cv9lVFwKtyDYFYCV%2FCwm2kVof5RIoKNKwLXWnTvKxTQ%2Fqld92hiHlid1fBOcklB%2FJGHtKtfc34ShFOPvX0%2FpQpwlfWKXfl0q4SixdjiOVTlh3%2BhvOXeVdB%2Fl1jf61pmiHpaZHXEmhlSwF0OAjsZpv%2FAASewOP4E5%2BgsEsBmAWXjBuQU0jpy%2FccB0%2FDaTGatF1Y2K%2BV%2FloObdb1tnOkSw0GR2MxDrtz9fJL2GLQxzJTOFZCR4xE1cukT43BRDdNHyWQny%2BFEGkJnQJQQeQutsCL%2FmrckXZFKkTWgBkwMo0MolF1NOMyaToDbDh56Ppr%2BPwXbBkGVA1OTeAW0cYIK1nh0eWaOtGR0aOPaJEpzh04hBv%2BY2ty%2Fi15jj8lbRIdaMeTa%2B1X7pf65k6bXj4VLO%2BEVKKlqNp1vb%2BrpRwGvQ7qEIA13hU%2BTf4N2pZgyq22bTkI8WB6arGQPDqCsVC9wgvtYLvJN5L2Xe2IqNpel06oP3fcTm4JeXcD%2FuDwQKtbhb6NMNPi174GOqUBG8g5%2FdQhIjOyFatfKgGcMXbmQdX59LIMzFLJFBe5N9EtOq9fVLo0EbF%2BNAFavu7pyXSQX8dJk3gPphZnlqTyZSzTL9Ql%2BvQqInru9PVQuSKTCfxtoKWofuNfq3gAetIv4N%2B9RCFTC%2FS7y6x4ysnk6Aw%2BBDxEM4FhEm5js1aym8inywOpaGfNxQfqj4SeAKvu99nV%2BmQiZZ3Yqpf8zv%2F6%2BOwxfAFu&X-Amz-Signature=b2b1651495a77dfccdad5a995d52cdd90032ff22b21bf1f5eebab3fdf1b3cfb2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
