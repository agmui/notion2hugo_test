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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJOIIX6%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD14QnamBRtBnyds%2BAcXKOkEXRNDYKDGaZXBZyM%2BK8MSwIgHTq%2BvVp0ml1EZV5Z5dBkYuUhJOExRGtj4LcjEGUaxQAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAd0pGvzbPVTT8gqyrcA153HCigK4Bj416YQ9pTZjkE12RRoQ5gf1mGXruFHgLPwCV6J3k%2FxGanohcYyY2aU51466gIt0gqhye7M6heo8Czwa16JJZubfaOcjIqNU4Frz99hCB4HCGP8xYxzUAddoL37CwWl%2F1JSY%2FTUAL7lH80Jv63boOjJSQpmipmFHQKmA91%2BctSpCUQXGM5C6X2gZ3u1YRT5tGmKtcVq7Oux%2FYBfVpTm9yuVImGV%2FXM6n1nO5X4Kh5Q92pRpB3fqvl%2BHpFPh3jX8uaBGTzLfk7C7nXFXAffqVeDJTZ%2BgtUjBu%2BH0dRUOGztimbsSTTEvJ5vwjw%2FV6IqcRZDzUH8iwLjfMBXtJQBct32K62TxPcJ6DcMN378iHfDNIWz9z2T14y31lTy0IYy72CFdxbGc11%2F6fsZjGv3yeabLaHU3sJVePkQsTwMhBEn0EW07YLB0C8U%2Fyn0GSQ2bnJzJWLL4AEAiQPqoQbx%2BN4M%2BTs1LDsXo9UhtQKjP%2BZSULq0c4FcXspZxIwYxUDAgoBu%2FURSo%2BvDB05yogg3pgphCSHTM%2FXSnpfha8Mz33Hm8ogOMbiJaMrglh49c7rLl3IwKtfi%2BEDgRNLYZNHPAdNMJltDx9atjQqjSNKJVKzXmFZyo0VcMJ%2BEjMsGOqUBq0ZeFb1c1ndX88sUSMdKxyvzuLUVNyAwxybuiqNDQzaGCF6tbcfQGtkqd8v2g%2BTL4pFmzxqWYK41yDdbHROq22AtmSf7x09t31TMEh271UXjBoRV7NPrF5V%2F2cpXeg%2FmOuCTK%2F%2BBSxdxnPkT3tBbTfsKzcX9868diTJKA3QaPW0ju6AvrCX%2FRLwN%2BT67%2Fu6C0rJ95gW0KtoIEMr9L5EDX4SbtNYJ&X-Amz-Signature=51d8396ffdf0f2789dd1088b26094fd761b0b6418605e32458e7daeb295d7cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJOIIX6%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD14QnamBRtBnyds%2BAcXKOkEXRNDYKDGaZXBZyM%2BK8MSwIgHTq%2BvVp0ml1EZV5Z5dBkYuUhJOExRGtj4LcjEGUaxQAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAd0pGvzbPVTT8gqyrcA153HCigK4Bj416YQ9pTZjkE12RRoQ5gf1mGXruFHgLPwCV6J3k%2FxGanohcYyY2aU51466gIt0gqhye7M6heo8Czwa16JJZubfaOcjIqNU4Frz99hCB4HCGP8xYxzUAddoL37CwWl%2F1JSY%2FTUAL7lH80Jv63boOjJSQpmipmFHQKmA91%2BctSpCUQXGM5C6X2gZ3u1YRT5tGmKtcVq7Oux%2FYBfVpTm9yuVImGV%2FXM6n1nO5X4Kh5Q92pRpB3fqvl%2BHpFPh3jX8uaBGTzLfk7C7nXFXAffqVeDJTZ%2BgtUjBu%2BH0dRUOGztimbsSTTEvJ5vwjw%2FV6IqcRZDzUH8iwLjfMBXtJQBct32K62TxPcJ6DcMN378iHfDNIWz9z2T14y31lTy0IYy72CFdxbGc11%2F6fsZjGv3yeabLaHU3sJVePkQsTwMhBEn0EW07YLB0C8U%2Fyn0GSQ2bnJzJWLL4AEAiQPqoQbx%2BN4M%2BTs1LDsXo9UhtQKjP%2BZSULq0c4FcXspZxIwYxUDAgoBu%2FURSo%2BvDB05yogg3pgphCSHTM%2FXSnpfha8Mz33Hm8ogOMbiJaMrglh49c7rLl3IwKtfi%2BEDgRNLYZNHPAdNMJltDx9atjQqjSNKJVKzXmFZyo0VcMJ%2BEjMsGOqUBq0ZeFb1c1ndX88sUSMdKxyvzuLUVNyAwxybuiqNDQzaGCF6tbcfQGtkqd8v2g%2BTL4pFmzxqWYK41yDdbHROq22AtmSf7x09t31TMEh271UXjBoRV7NPrF5V%2F2cpXeg%2FmOuCTK%2F%2BBSxdxnPkT3tBbTfsKzcX9868diTJKA3QaPW0ju6AvrCX%2FRLwN%2BT67%2Fu6C0rJ95gW0KtoIEMr9L5EDX4SbtNYJ&X-Amz-Signature=e2ef2c680b506d845b9033afffd526fe68691b93a97444dae0f39941a471a8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
