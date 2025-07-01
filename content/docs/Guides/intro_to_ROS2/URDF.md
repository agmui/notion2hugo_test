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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3B3RA7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyz7IFKJ%2FE8M8Ue9eJ7GybAZoDqMhq1PSIuzqU87ujigIge51lB7jpPtglV5angUN5aqKvly2LTQV%2FUhX%2Fw7Q7%2B2oqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQOzzj5XXdGHadnYCrcA2d8W0jY5CFncmYkb%2BmVUf5C5ZOupoOqDZRlAACjqOGTMDEyK%2BfNLDUaMWnBem6d6fVBLCPPTlOgUho6mDPc2Iz80v8kDjYst52%2Fe560v3Z%2B7S6XkelCHEDdBtI5PI8gtrN57yivtkOXjw%2BoObsUKOTwYE4JJohyICvYekyqV1U8gCKVoOpzhC%2FYiecc8Obx4N86A4HvCAYBM9iqUfDjW1S%2FKtZELzTkuUccyqwEf3prbvIVk%2B9T4Kj%2FYFfe8WVmbXGcQf9bBzz%2B8MYgYrTdOK%2FB37sbS%2BAFG7BmU%2BVv3eTxLB3wSrpaa6tnT%2Bv14E3gjKM8wIiYuxhnFALosliMCib%2BQpp27Tj1n0R27HJRYWna96BQZBXICGUN4i73Xb29PpXt57upsZtTK%2F3ipYc6iJZf%2FgCse4XdEKDjmASRVlVjdwMUWCT%2FmbgIGSkCF%2FG81zx3pbiyZl7XVIJ86Je6NyOCFAO3YcS%2BnOFg6iVokVk717IWAMzWK4vHRx6A20sIgIKKDQ82LjZv3MYW%2FUMnKkJpkK3ytzzQRDG5toKNcHylX%2Bto1zzQwOwyLQcEOnGRapLWFOiMjy51Zz9DyGFb9o8cfg%2Fe0%2FaY3iyvuiSG4BpMeP8WEiShXGLw8g4%2FMNHEkMMGOqUBPBM7yOY6Jq0%2BPRYOwLx1phK8ecH1c8awSBrFC6ghXB%2F4hn1mHW%2Ba9tOZf7oGIkdXT0bGPc9kEz04%2F%2FJk35OT7G7uZiAc6V1hSxOAsie1mVscjGIOvbSlQ6ENcN4Win0VZcuYvjiDq4A144Z5ix7jtiAwAPZbUXcEOgT0ng%2BRBXsXQ4WkaiglMDGgNaHkz%2BPfAvmaiCivxKai11Y3LIruFv2MpbYx&X-Amz-Signature=21c0ea3bf82fd31b22c671542caa302f0b858c005545d89ddf1dca0380b9ef97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3B3RA7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyz7IFKJ%2FE8M8Ue9eJ7GybAZoDqMhq1PSIuzqU87ujigIge51lB7jpPtglV5angUN5aqKvly2LTQV%2FUhX%2Fw7Q7%2B2oqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQOzzj5XXdGHadnYCrcA2d8W0jY5CFncmYkb%2BmVUf5C5ZOupoOqDZRlAACjqOGTMDEyK%2BfNLDUaMWnBem6d6fVBLCPPTlOgUho6mDPc2Iz80v8kDjYst52%2Fe560v3Z%2B7S6XkelCHEDdBtI5PI8gtrN57yivtkOXjw%2BoObsUKOTwYE4JJohyICvYekyqV1U8gCKVoOpzhC%2FYiecc8Obx4N86A4HvCAYBM9iqUfDjW1S%2FKtZELzTkuUccyqwEf3prbvIVk%2B9T4Kj%2FYFfe8WVmbXGcQf9bBzz%2B8MYgYrTdOK%2FB37sbS%2BAFG7BmU%2BVv3eTxLB3wSrpaa6tnT%2Bv14E3gjKM8wIiYuxhnFALosliMCib%2BQpp27Tj1n0R27HJRYWna96BQZBXICGUN4i73Xb29PpXt57upsZtTK%2F3ipYc6iJZf%2FgCse4XdEKDjmASRVlVjdwMUWCT%2FmbgIGSkCF%2FG81zx3pbiyZl7XVIJ86Je6NyOCFAO3YcS%2BnOFg6iVokVk717IWAMzWK4vHRx6A20sIgIKKDQ82LjZv3MYW%2FUMnKkJpkK3ytzzQRDG5toKNcHylX%2Bto1zzQwOwyLQcEOnGRapLWFOiMjy51Zz9DyGFb9o8cfg%2Fe0%2FaY3iyvuiSG4BpMeP8WEiShXGLw8g4%2FMNHEkMMGOqUBPBM7yOY6Jq0%2BPRYOwLx1phK8ecH1c8awSBrFC6ghXB%2F4hn1mHW%2Ba9tOZf7oGIkdXT0bGPc9kEz04%2F%2FJk35OT7G7uZiAc6V1hSxOAsie1mVscjGIOvbSlQ6ENcN4Win0VZcuYvjiDq4A144Z5ix7jtiAwAPZbUXcEOgT0ng%2BRBXsXQ4WkaiglMDGgNaHkz%2BPfAvmaiCivxKai11Y3LIruFv2MpbYx&X-Amz-Signature=aa06b0979b3499e7fe2180cb75bda26a503fbf566d687b9cedbd5031f988403e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
