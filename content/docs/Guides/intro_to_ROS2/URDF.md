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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WRSGL2B%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCjFqLUgihDc2G1cSCV06l3C%2F9rVNuPGfgvQxri9S8RaQIgXf2ohC48QiVnnLzJvxmS4f1wV%2B6FArDfbsc4E4PUafEq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIo39uTNmDgfUZN52SrcA3ONEQi0LRo1Xk%2Bj4dxkIDPFYwbGDglRkYTx5vn%2FatokBCMcHqe34DSe%2Bjg2omrojPKZaLWq43BiGveRWfoBmxx%2B83wriVJb6j3baLkZPYByp4Z6BrTW0ptM9jWEyEdmGfFud4XF8nWL95zEyCOHyfHSmF54nVyCI2zfqnlK8nKz%2FLm6cOipHY9VkPx4tti910tVFM9URSljT7tgMemNSGbimQ%2Bvw1xBO7o12V0oPjOXYgz2TR%2FRMtHshgOISCphe6AZ8leaEDubPb2anBmc%2BqXsMn9LCtZl2EvA6bCV75fVtamI%2Fs5G0UQ6PLJoA7AeNn9BhacltJSw9q73N8tCe8GUbBGsEPGTf69NqMQl99d7VofXd51%2FKbqBWpvVQaM23p11cYJjubkFjGkjz2WLKhsCyf1aVx3SWEpAZKsJsyBIOhoicvXKSoEZ7ZD92dkctKaAi4g9ZTBGs63BZagVMQja4uywg2SPxs%2BtFv%2Fs3OlUVaP5PBrf2BYFBWTtAyf1yMjHtokUKq6QA3CcZ%2FPMORh7hx6Umf78fZjO35uTLrKTHC0LcTNB%2B%2BqpCZGmM3Umn5wfeVWgDiDnKdzQTTDorQVVChd1RchpuBy5MZb45ArmwxsjpNX7D6IQ%2FAaxMNe7ycQGOqUB2cH4vDalciHjXRvseeBAUEnBEsWg%2BN%2BZb5HVAstyEV4OnrGpBBCSs60GLjx8kBFUbQBa1oW%2FMHAYOPC2Vv0DgBIaMPa5an6V2Sxphj3aN0HH2m4HHCA7RchG59FvRdFKV%2FenSbScQIZ%2BZ9eYvLho2dxeyWN60XbJNqKn%2Fjm3V2MHIDaxIsIi4uEALUYmZOS6iPFZtFTIbv9EZDhM9Rdv3PvI7%2F%2FZ&X-Amz-Signature=663f9117cfc1353a18f46ab0b536e0504ba57b1bba7b1eeb26231a09a42ec046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WRSGL2B%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCjFqLUgihDc2G1cSCV06l3C%2F9rVNuPGfgvQxri9S8RaQIgXf2ohC48QiVnnLzJvxmS4f1wV%2B6FArDfbsc4E4PUafEq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIo39uTNmDgfUZN52SrcA3ONEQi0LRo1Xk%2Bj4dxkIDPFYwbGDglRkYTx5vn%2FatokBCMcHqe34DSe%2Bjg2omrojPKZaLWq43BiGveRWfoBmxx%2B83wriVJb6j3baLkZPYByp4Z6BrTW0ptM9jWEyEdmGfFud4XF8nWL95zEyCOHyfHSmF54nVyCI2zfqnlK8nKz%2FLm6cOipHY9VkPx4tti910tVFM9URSljT7tgMemNSGbimQ%2Bvw1xBO7o12V0oPjOXYgz2TR%2FRMtHshgOISCphe6AZ8leaEDubPb2anBmc%2BqXsMn9LCtZl2EvA6bCV75fVtamI%2Fs5G0UQ6PLJoA7AeNn9BhacltJSw9q73N8tCe8GUbBGsEPGTf69NqMQl99d7VofXd51%2FKbqBWpvVQaM23p11cYJjubkFjGkjz2WLKhsCyf1aVx3SWEpAZKsJsyBIOhoicvXKSoEZ7ZD92dkctKaAi4g9ZTBGs63BZagVMQja4uywg2SPxs%2BtFv%2Fs3OlUVaP5PBrf2BYFBWTtAyf1yMjHtokUKq6QA3CcZ%2FPMORh7hx6Umf78fZjO35uTLrKTHC0LcTNB%2B%2BqpCZGmM3Umn5wfeVWgDiDnKdzQTTDorQVVChd1RchpuBy5MZb45ArmwxsjpNX7D6IQ%2FAaxMNe7ycQGOqUB2cH4vDalciHjXRvseeBAUEnBEsWg%2BN%2BZb5HVAstyEV4OnrGpBBCSs60GLjx8kBFUbQBa1oW%2FMHAYOPC2Vv0DgBIaMPa5an6V2Sxphj3aN0HH2m4HHCA7RchG59FvRdFKV%2FenSbScQIZ%2BZ9eYvLho2dxeyWN60XbJNqKn%2Fjm3V2MHIDaxIsIi4uEALUYmZOS6iPFZtFTIbv9EZDhM9Rdv3PvI7%2F%2FZ&X-Amz-Signature=1b0b9a065a85da62894a9c5b0acf36dd65692429117815b46058e67e25445f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
