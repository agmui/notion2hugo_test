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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXEHL4W%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAZNgAKbK5aS9ET1kxNi91zeZw7VBwSfzDuCFGVFMTPRAiEAsDwGVXjiPIW06ALUkixW%2BJ7LmiXpTO9saj7bwfNHTgwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKa6y1jk2oufXgfrWircA4EaW6bWXKrpx%2BT0wb%2B0lddtCvl8HFw8kpYclJQfBOZFTS0G59yxXukDnBFubejjveYFSJAwPjs9Ue9BYpYdHEBOnlDxU3%2FDg6iNPz4aD5bPCs5bjNzURZGvdX4YJ5AnkdmuxyddJr937CTJDPb9eyI2iDcEINBTc7V%2Be9QFB%2BqlHcjNXtoagf4Nc5i8esHRRPkBbBKzwHH6GXVFEuasyVmtDNgNV5EBcJkKlXSFfSIfyUNcYn2umQVEpw5vYVmuMGzNnBZDpnFUCnrSszMTP24yc69ccWUswDaHLcc5TDPOr4eVBZgBMwJG0NA6vVQEgGbEvnxK2BTzMzE15wv3117pybHIn5eEfIfkR3R1r7Ga9FU44rSzuyqQtMhhFusxyXPemmzkNYpPNZ7gMCg26gJjgme0GeXsxRewy6Mjh2LCOZidNyyPOOsvEpxSqGcBqgirXR9qhD%2Brr16A1albKx6cj%2BsDLgnVMp4tLriqY%2BM%2FN%2F0mC%2Fk2G3tAHXWaMn6e31MrufCGUy8fnBACGgH%2BMstKROlvW3CsZynKzupNaunDdgpROe3QTw%2BMe4gQA5q3YQwnXf3xsbACIK39iSvkBwK3QD5CCNjAxWXynbdV%2FHTQeoxplBgQHgxVwMevML6YysEGOqUBBDNDLLLhTANUkGIVH4jpFr5CSQISuU%2BfR99fA8%2Ft%2B%2BC4cWIqtnRnokj95KlxGA8DfJryi%2F4OFf7dJKWUVFCwxxv%2BK1szFR8fuhuQbwvJUer4KuOvjB4wDIqRUhG9%2BptRyPkfqVz74aLZeePH0e84cvt4qZhFNDOH%2BEKxtvmwkZEAbu37bX9Vr1CKrpxnEtFF9TA22WBr8c%2FOzgi6sdHWioAC7YGl&X-Amz-Signature=a2c1bbc2342184d001665ff2b43725133b1714fcd5533d4c9d9bef013c3e25f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXEHL4W%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAZNgAKbK5aS9ET1kxNi91zeZw7VBwSfzDuCFGVFMTPRAiEAsDwGVXjiPIW06ALUkixW%2BJ7LmiXpTO9saj7bwfNHTgwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKa6y1jk2oufXgfrWircA4EaW6bWXKrpx%2BT0wb%2B0lddtCvl8HFw8kpYclJQfBOZFTS0G59yxXukDnBFubejjveYFSJAwPjs9Ue9BYpYdHEBOnlDxU3%2FDg6iNPz4aD5bPCs5bjNzURZGvdX4YJ5AnkdmuxyddJr937CTJDPb9eyI2iDcEINBTc7V%2Be9QFB%2BqlHcjNXtoagf4Nc5i8esHRRPkBbBKzwHH6GXVFEuasyVmtDNgNV5EBcJkKlXSFfSIfyUNcYn2umQVEpw5vYVmuMGzNnBZDpnFUCnrSszMTP24yc69ccWUswDaHLcc5TDPOr4eVBZgBMwJG0NA6vVQEgGbEvnxK2BTzMzE15wv3117pybHIn5eEfIfkR3R1r7Ga9FU44rSzuyqQtMhhFusxyXPemmzkNYpPNZ7gMCg26gJjgme0GeXsxRewy6Mjh2LCOZidNyyPOOsvEpxSqGcBqgirXR9qhD%2Brr16A1albKx6cj%2BsDLgnVMp4tLriqY%2BM%2FN%2F0mC%2Fk2G3tAHXWaMn6e31MrufCGUy8fnBACGgH%2BMstKROlvW3CsZynKzupNaunDdgpROe3QTw%2BMe4gQA5q3YQwnXf3xsbACIK39iSvkBwK3QD5CCNjAxWXynbdV%2FHTQeoxplBgQHgxVwMevML6YysEGOqUBBDNDLLLhTANUkGIVH4jpFr5CSQISuU%2BfR99fA8%2Ft%2B%2BC4cWIqtnRnokj95KlxGA8DfJryi%2F4OFf7dJKWUVFCwxxv%2BK1szFR8fuhuQbwvJUer4KuOvjB4wDIqRUhG9%2BptRyPkfqVz74aLZeePH0e84cvt4qZhFNDOH%2BEKxtvmwkZEAbu37bX9Vr1CKrpxnEtFF9TA22WBr8c%2FOzgi6sdHWioAC7YGl&X-Amz-Signature=9e4659b6d56d0b68780c993d7b34037a552308dab9cc39ed4add596c00bba0cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
