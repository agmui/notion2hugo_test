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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4OJTE5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC7rreXS3vrww8cqnT22JgUARtoK3iDfzru3%2BdmTSPe5AIhAI2ac5KEuSxkuxSGAqpoQ2SfttriqWEehqS726VXEf3eKv8DCFgQABoMNjM3NDIzMTgzODA1IgwnF8oyy%2F067ptqZ5Mq3AO2IDnMyVkpFyfoMbyZCxs2AfLn%2F2pdfnGDgNZYp3gn6MFZgT9aI9Tsb%2BxySi%2BNd5Eq%2FWQaGtSs1AcqIyHChZg1USkysCtjyk1nHLO8rbg%2Bnmj3SMvr%2FdTKzKwg7HS1S5eJILvWRaLpVsRcow8GCzeNTtx0Up5OX9T%2Bw0aBOr213Iy9NwegSEjbCzeqFxBINzVwkLX2n6Z4txo7584wvWer63K88KRW%2BocZ%2BjAvYrvD8ZAXYS%2B0gVFK4DGeLO3%2BsEI4Os%2F7XTNHu7v6%2BMW%2FO%2BFLLv%2B6QP3tLuLd3CiimO1lLoCl5%2BeE6AII%2FjOIMNPnMvNoNwX%2BiHwbXXp4vRpvh9uCeXIonX2ImR1g%2FSgLLsvqZD%2B6FJTqwOj4oHs7NUKM8CfE6Kht98YEHwLAFsrrvRYiv4cKeoQlHKOMtTB%2FjsGhVnB7bo9PfP7IYmWt0cOsreeQXGkF92uRpvtTKnxYi0u7e3SN7sanIJD4ADq94dIw4QN6Tn%2Fok9DKTwKuBTqcXYmx22%2BV9pgofPabIWA6vH1Se9x4Xx%2FmZlLpvQk7DocVnyhBo1g1eDV7jeZwk95GeRTw0Ve%2BlE0HP751PNdVs%2F8BfMKMaHn7Ud9pLR8qeLQejKJIaI7hUgja6D9EFTDx2cbEBjqkAbnXkDsfF2p2WyjPllSUFs4pelyhJMXuIXFXr0rNu%2F4aXykoCAs9uA6A%2BdqxQypr1OGHd7KZr8aUgqjysTI2eOibl4wrzkJlL9KVcDp7qfv9J%2BSsKZPFYer%2BpPgOHl9Ek48K%2B9jioageZcNmdYOK8A19oKMloe%2FycpcFKG5pku0u8oX3zoHttundER4diaEuB1m64rL5H1rwXkQtsd2YilOOYtsS&X-Amz-Signature=27ed683518878ede5f201478cfec30647c5db6bc7d297f810f83398c08c81768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4OJTE5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC7rreXS3vrww8cqnT22JgUARtoK3iDfzru3%2BdmTSPe5AIhAI2ac5KEuSxkuxSGAqpoQ2SfttriqWEehqS726VXEf3eKv8DCFgQABoMNjM3NDIzMTgzODA1IgwnF8oyy%2F067ptqZ5Mq3AO2IDnMyVkpFyfoMbyZCxs2AfLn%2F2pdfnGDgNZYp3gn6MFZgT9aI9Tsb%2BxySi%2BNd5Eq%2FWQaGtSs1AcqIyHChZg1USkysCtjyk1nHLO8rbg%2Bnmj3SMvr%2FdTKzKwg7HS1S5eJILvWRaLpVsRcow8GCzeNTtx0Up5OX9T%2Bw0aBOr213Iy9NwegSEjbCzeqFxBINzVwkLX2n6Z4txo7584wvWer63K88KRW%2BocZ%2BjAvYrvD8ZAXYS%2B0gVFK4DGeLO3%2BsEI4Os%2F7XTNHu7v6%2BMW%2FO%2BFLLv%2B6QP3tLuLd3CiimO1lLoCl5%2BeE6AII%2FjOIMNPnMvNoNwX%2BiHwbXXp4vRpvh9uCeXIonX2ImR1g%2FSgLLsvqZD%2B6FJTqwOj4oHs7NUKM8CfE6Kht98YEHwLAFsrrvRYiv4cKeoQlHKOMtTB%2FjsGhVnB7bo9PfP7IYmWt0cOsreeQXGkF92uRpvtTKnxYi0u7e3SN7sanIJD4ADq94dIw4QN6Tn%2Fok9DKTwKuBTqcXYmx22%2BV9pgofPabIWA6vH1Se9x4Xx%2FmZlLpvQk7DocVnyhBo1g1eDV7jeZwk95GeRTw0Ve%2BlE0HP751PNdVs%2F8BfMKMaHn7Ud9pLR8qeLQejKJIaI7hUgja6D9EFTDx2cbEBjqkAbnXkDsfF2p2WyjPllSUFs4pelyhJMXuIXFXr0rNu%2F4aXykoCAs9uA6A%2BdqxQypr1OGHd7KZr8aUgqjysTI2eOibl4wrzkJlL9KVcDp7qfv9J%2BSsKZPFYer%2BpPgOHl9Ek48K%2B9jioageZcNmdYOK8A19oKMloe%2FycpcFKG5pku0u8oX3zoHttundER4diaEuB1m64rL5H1rwXkQtsd2YilOOYtsS&X-Amz-Signature=977154eddc60d08abe807d5a97e33bd751b547b05e066b7ffea8883c2a4c2ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
