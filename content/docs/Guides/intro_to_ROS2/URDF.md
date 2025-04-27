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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QRBFPQY%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6yoKlj8Dpz9kH8SmbCtbouhD2r2OczeJCPak3l9%2B9pwIgfkerLZtSMtE6kzGqS22P5P8si6QDz86%2BXZzg5Ozjfzcq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDM5LvUxEdDkSqj1CIircA22rMF4JodwJ8FRE6PxYUmvDncnEV5vnCwQwDPWuONsVwn29oYMQ4QHfLDMDv0XS5ifqFAQFRDu4U3ODReDmPdOshPsk3R2FAG3nLNEZcqdipksyLoGNNPq5nljYUGixxu7Dxd30bObj7ipImwW%2FKyYwF4QdjK5%2FGnZWUANPCjTivzlMPHbAH2i1nqPbtzWf4F9bLtAI5oGD9%2Bz8mhbNkYzZP%2BPqorL8XScXkZ0vrr%2FOmUDuFxJHje1SE%2FTMqf%2F5MTV9EhgFryLiScTNAoGQ7fP%2F5N2Lww55Qd8ITVa7tsbe6IYgt0iO87%2Fu1mFzaolMhs9wZeu5Ldo93gg%2BvqBeMk8B5tOq4Zrf7dcSAMSxIg4P8%2BH7g2D3GncxTaT%2BK5JsqcjqazA4nloGHWTKjirxi95Zw5aFB6AqAA2TyHdIJnzrjwl%2FsFfCbEeTBRZ4BtlCQW0mVjDgWNc7qWQuxsAbW76NJDxw3asivS5i1LJjySOZcvEQSpN4qc%2F2aJuPAblQdzZSM2QcawUAzzfmUpks5J8WoyKAG1rKCX9DtR8DEUgeqKd0l%2FhRVlq%2BvKTw8N8FcQbVd6E%2BdJnllu9Ks60n3AV59UTauKVwUaG9VddcH5MG5QNYVLfeUuVsYuM2MOLTtsAGOqUBiHcUoSvH5LTk%2FeUkhYYqSBZFRXFN9R%2F4KTAjND8Llyf%2FpeTm7%2FywTiJi4XZ95GCy8JDyC2DNQtEmhMLZ0IyNIYg%2BGLH2Uq9wt2vTqjxePSB2TezRTJ5UHRTDVrHSztR9kswQuykNZOl92BNCSuDLrIOV7DkcfhJ8XKH3h5OxiktFZ10GnA2IzdB16h13SGjgw8LCCIf6SgUXflcT7RLPVt7qPvJU&X-Amz-Signature=18d0b0b62c06112315febddbccb335e8855b39d7d0b14148082d6da1f43ebb10&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QRBFPQY%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6yoKlj8Dpz9kH8SmbCtbouhD2r2OczeJCPak3l9%2B9pwIgfkerLZtSMtE6kzGqS22P5P8si6QDz86%2BXZzg5Ozjfzcq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDM5LvUxEdDkSqj1CIircA22rMF4JodwJ8FRE6PxYUmvDncnEV5vnCwQwDPWuONsVwn29oYMQ4QHfLDMDv0XS5ifqFAQFRDu4U3ODReDmPdOshPsk3R2FAG3nLNEZcqdipksyLoGNNPq5nljYUGixxu7Dxd30bObj7ipImwW%2FKyYwF4QdjK5%2FGnZWUANPCjTivzlMPHbAH2i1nqPbtzWf4F9bLtAI5oGD9%2Bz8mhbNkYzZP%2BPqorL8XScXkZ0vrr%2FOmUDuFxJHje1SE%2FTMqf%2F5MTV9EhgFryLiScTNAoGQ7fP%2F5N2Lww55Qd8ITVa7tsbe6IYgt0iO87%2Fu1mFzaolMhs9wZeu5Ldo93gg%2BvqBeMk8B5tOq4Zrf7dcSAMSxIg4P8%2BH7g2D3GncxTaT%2BK5JsqcjqazA4nloGHWTKjirxi95Zw5aFB6AqAA2TyHdIJnzrjwl%2FsFfCbEeTBRZ4BtlCQW0mVjDgWNc7qWQuxsAbW76NJDxw3asivS5i1LJjySOZcvEQSpN4qc%2F2aJuPAblQdzZSM2QcawUAzzfmUpks5J8WoyKAG1rKCX9DtR8DEUgeqKd0l%2FhRVlq%2BvKTw8N8FcQbVd6E%2BdJnllu9Ks60n3AV59UTauKVwUaG9VddcH5MG5QNYVLfeUuVsYuM2MOLTtsAGOqUBiHcUoSvH5LTk%2FeUkhYYqSBZFRXFN9R%2F4KTAjND8Llyf%2FpeTm7%2FywTiJi4XZ95GCy8JDyC2DNQtEmhMLZ0IyNIYg%2BGLH2Uq9wt2vTqjxePSB2TezRTJ5UHRTDVrHSztR9kswQuykNZOl92BNCSuDLrIOV7DkcfhJ8XKH3h5OxiktFZ10GnA2IzdB16h13SGjgw8LCCIf6SgUXflcT7RLPVt7qPvJU&X-Amz-Signature=c28008e6d4f659b0a5eab84621fcba872689ab2030b7fa8dbbaad127ed92f93e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
