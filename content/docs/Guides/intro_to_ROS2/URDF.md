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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OICZX5Z%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDYLV%2FwXkLk9d52lcIr94%2B%2BEM377G32bsOeaL181Moa5wIgb7P4Aa8QoiZ78RFHZUJ6pNBTa5XC7n9Zy23VI5o3WyYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH66LmA6XYEIxW6F1SrcA6ZQeGjulXXENUX761VbBCxDVkVlDRtTNv1Pv8Um5RUiRAUTzHUQba96RdB0PayE4OOjPekp3DofvlfSFtrOQtFqQVYIKm9Er7ZKR78h3h6xU3m1ZnHJREzNPzeHNIhv0ehH6DRZe9ZCTac0WObfgdeuxURJRalvrPQcXqYjG69HZSbtoi07ZcXj3YBKBV6wezW0fl4XB9aYe5u5qF%2BkZO4az1YG%2F%2BPuOn5QQQEVRP0o0e79mhxuqggS%2F9R02UNR9cZyzKJWyuD9olIgk6pQoTiIkIGKXSg%2Fp5qYtWJbBcMrZat%2BBop2q7iRBDrQ2djJYdsqQy1w4818FRKbwIEPMGPUGxpNyyfJFFzXsoZDqnSV05R4Us4Oin5pyHpId9%2FgLFe5OXSPnIofz%2BJofWEb8C1c75v35KI2uZeSlADLKbcOf43leeMkVE96WnUN4kiMq4ZedrlfSWmMNB%2Fs4wmejjRQzean0zDcgzKOVbRv9opOvdpk%2Bjl2or%2BN5LSlA7awJLSpwsGeiCp5%2FvgGriCfDFspjbqoG4CEvXNjoexHO4gMgmZL%2FJUgVzc6vwl1%2FVYJpJM93UZx%2BdHVJgdXrPTnGwGTr9EIZ1xrvjQTxRP1f5L7J%2BRGiBr2LWjXxfIMMJ%2FJwMIGOqUB2rrqBvU3KZHJG2lhldPw6Vqcn1pKvhZSWRZRQ%2F1Wn0j1C%2Fg4eavwNFlf4AGibfdGc%2FjgDY0Fk02d283np%2FFAMwMrb7wCmHqWKg%2BLtjIbNtPQzX3xuBW2FM2eaUG1ZysH6u0HS2T0zMehje6pq8Um8E623k3dQtf94qfpRpFSA4rDSmF7EK6TK5DGf04g%2B5aUFLRLbg2YgeWeJKY6qOphVClAU21o&X-Amz-Signature=e087e27e6eb65561fa347d0a7e688e6c13f8690a88da79dec52d5e2bcdaf2a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OICZX5Z%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDYLV%2FwXkLk9d52lcIr94%2B%2BEM377G32bsOeaL181Moa5wIgb7P4Aa8QoiZ78RFHZUJ6pNBTa5XC7n9Zy23VI5o3WyYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH66LmA6XYEIxW6F1SrcA6ZQeGjulXXENUX761VbBCxDVkVlDRtTNv1Pv8Um5RUiRAUTzHUQba96RdB0PayE4OOjPekp3DofvlfSFtrOQtFqQVYIKm9Er7ZKR78h3h6xU3m1ZnHJREzNPzeHNIhv0ehH6DRZe9ZCTac0WObfgdeuxURJRalvrPQcXqYjG69HZSbtoi07ZcXj3YBKBV6wezW0fl4XB9aYe5u5qF%2BkZO4az1YG%2F%2BPuOn5QQQEVRP0o0e79mhxuqggS%2F9R02UNR9cZyzKJWyuD9olIgk6pQoTiIkIGKXSg%2Fp5qYtWJbBcMrZat%2BBop2q7iRBDrQ2djJYdsqQy1w4818FRKbwIEPMGPUGxpNyyfJFFzXsoZDqnSV05R4Us4Oin5pyHpId9%2FgLFe5OXSPnIofz%2BJofWEb8C1c75v35KI2uZeSlADLKbcOf43leeMkVE96WnUN4kiMq4ZedrlfSWmMNB%2Fs4wmejjRQzean0zDcgzKOVbRv9opOvdpk%2Bjl2or%2BN5LSlA7awJLSpwsGeiCp5%2FvgGriCfDFspjbqoG4CEvXNjoexHO4gMgmZL%2FJUgVzc6vwl1%2FVYJpJM93UZx%2BdHVJgdXrPTnGwGTr9EIZ1xrvjQTxRP1f5L7J%2BRGiBr2LWjXxfIMMJ%2FJwMIGOqUB2rrqBvU3KZHJG2lhldPw6Vqcn1pKvhZSWRZRQ%2F1Wn0j1C%2Fg4eavwNFlf4AGibfdGc%2FjgDY0Fk02d283np%2FFAMwMrb7wCmHqWKg%2BLtjIbNtPQzX3xuBW2FM2eaUG1ZysH6u0HS2T0zMehje6pq8Um8E623k3dQtf94qfpRpFSA4rDSmF7EK6TK5DGf04g%2B5aUFLRLbg2YgeWeJKY6qOphVClAU21o&X-Amz-Signature=c360af77dcfb9ae1b8e12275aa473c0321c7bc132a7441c82f964807fba049a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
