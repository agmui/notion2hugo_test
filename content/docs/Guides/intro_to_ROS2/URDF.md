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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHTRV55%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICGijdSDJ4AMt%2FMjOnrKjMc1mp7rprxBFI4r3neWYHTsAiAQekLmhhTWHMHgoDDko62w9JpsvKa7uDXgBzR%2FTCJo3iqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYshfoTEujeLkPCjSKtwDEeL73%2BtW0blq7hcAATKHzHvECUH4Xmso1SAQV%2BYfHutLml9IA7dUkYwW2E4yk02Jk5Z%2B5K4HP5mjUKnuBoXe1XxHh5OOZEJSklwMI2P2eeWowtZNj2CqPpBX9QrXCyD6tlJ49krW9ghxfchUMPAW7WyEOVW%2FIL5BUxSSsBHdMIgo4fszSdA7%2BxalvTCT94n3icbZ9qxSQWHi5%2FveuLlAKz3BH9SCAZcbPGmCSQgSdB7wLGZpI%2FVe1ioaiVD4Dowth1UYdpEdE7kNhN5jJuC9ATgNVh1SPxL7bfxFVRskiO7puZn2fQH7sKWdvRKFCo8hQflwVW8ByMxeXn1zrba5W607q3pvPGzvSnmppzz7BAIuodexsWv2ekG6o1L7jpCrp5HFZkHgHap7WkQ%2F2WPm%2FWFd0vhocJ%2BPk55NpC7E116Fq%2BrkNsXZCu0GEOprHUiaFlXvZoDnUClRwcymMDvXPZ71KSW97oiAKf1hRhsyC9vHfid4WndbFgd4T6tFS6PwqHyFQOsasBlpL0L0h4LU9NoO1RyQntidbfQLPxG8%2B29IK3yVS%2FGNxK3nrzAuhI7sXPZDq%2BG8rINlZY4iGP1oywydN1%2F9FD8%2BjX9WMZf%2Fyeb1i0ezaA1QAlHDmBQwk9vXxAY6pgEJIMNynqzNm7eTSwSAwCzkowQRMC0MZy%2BB38GvCxTtdMiwJ%2BKE6CRPCy6bJT7t4xRFLsbIPHdhu3MVOEQvnxXtQa1omYjQ9ZNydTUKfaqdihTAVlQpsH7X3P5A7eGDoy6AcXt0RyQwsFJbwMjYNadrBS1P%2FJ0rlcoxa79G45eJ9p4YEqCaiw613NfLtcKbWn%2BsjMlT5UsQTvrAv5%2BXU37AO8%2B10nh0&X-Amz-Signature=67000ef882348b41f9161921cd9249f047111b323b5d64d319bd1c561ff11cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHTRV55%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICGijdSDJ4AMt%2FMjOnrKjMc1mp7rprxBFI4r3neWYHTsAiAQekLmhhTWHMHgoDDko62w9JpsvKa7uDXgBzR%2FTCJo3iqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYshfoTEujeLkPCjSKtwDEeL73%2BtW0blq7hcAATKHzHvECUH4Xmso1SAQV%2BYfHutLml9IA7dUkYwW2E4yk02Jk5Z%2B5K4HP5mjUKnuBoXe1XxHh5OOZEJSklwMI2P2eeWowtZNj2CqPpBX9QrXCyD6tlJ49krW9ghxfchUMPAW7WyEOVW%2FIL5BUxSSsBHdMIgo4fszSdA7%2BxalvTCT94n3icbZ9qxSQWHi5%2FveuLlAKz3BH9SCAZcbPGmCSQgSdB7wLGZpI%2FVe1ioaiVD4Dowth1UYdpEdE7kNhN5jJuC9ATgNVh1SPxL7bfxFVRskiO7puZn2fQH7sKWdvRKFCo8hQflwVW8ByMxeXn1zrba5W607q3pvPGzvSnmppzz7BAIuodexsWv2ekG6o1L7jpCrp5HFZkHgHap7WkQ%2F2WPm%2FWFd0vhocJ%2BPk55NpC7E116Fq%2BrkNsXZCu0GEOprHUiaFlXvZoDnUClRwcymMDvXPZ71KSW97oiAKf1hRhsyC9vHfid4WndbFgd4T6tFS6PwqHyFQOsasBlpL0L0h4LU9NoO1RyQntidbfQLPxG8%2B29IK3yVS%2FGNxK3nrzAuhI7sXPZDq%2BG8rINlZY4iGP1oywydN1%2F9FD8%2BjX9WMZf%2Fyeb1i0ezaA1QAlHDmBQwk9vXxAY6pgEJIMNynqzNm7eTSwSAwCzkowQRMC0MZy%2BB38GvCxTtdMiwJ%2BKE6CRPCy6bJT7t4xRFLsbIPHdhu3MVOEQvnxXtQa1omYjQ9ZNydTUKfaqdihTAVlQpsH7X3P5A7eGDoy6AcXt0RyQwsFJbwMjYNadrBS1P%2FJ0rlcoxa79G45eJ9p4YEqCaiw613NfLtcKbWn%2BsjMlT5UsQTvrAv5%2BXU37AO8%2B10nh0&X-Amz-Signature=01cbba2458980997f77059534b2765f649e3a217bf63b3b7a0627bb14f37e265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
