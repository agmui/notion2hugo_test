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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL3H5BVQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBL47cJYJl5utAJshLkvLW3QRXzwo2X8LtD1r2FAbiabAiEAontanFBhmXd35P8bKMxqpetmrgcnnQqoEf5R5Nfx8p4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBpkPY7Tfc8EOwdzWCrcAwkN9cRLk3jsHKxf7L3Y2vtqNK61LMuPxspkmwyN8MIJ2WimpzRScd%2BvtvZ2LwjHD9bFfsL242i%2F3BaVJ1Ey8LjWeDBAFEdGrvvkWNNTD3HceRdUWV3bcrFt4GDeULU69z%2FkP21SRz17CsELHHNdjIShO02c21Cvl1qUFD1%2BX5U5wtx5QiEeh3T%2FxtH7Q3Fx%2BcVCCMm0GHvCh4pRGtngqWDqC0EkR%2BEMhiRkXxpuwUE4FrRtVNMz9q7JZgESVZiH3DQbqlqcXIQEp4lfSW3qH8G7V0tN5%2FlWQIsYVhzXwOQcdZ8FkKw6kMbNnL%2FajJmRfz2mqZfRdcow%2FsXZfM5Puig%2FXO%2B82dwroDjqqnjKeU%2FIFG1wCDWRoZ6WlU5tfG9NWcDSj27HyKzDY%2FCJuVo0lfxjqMniAOkTkdYgDQUd1RPzXKcaEdIwizcYCerB5UCplzrkrpeIj7ph9Gxgpz0EW7uhxdi9FgRtB1O6jSKA%2BYxhQYloQunjTKUhQSiZkXzik6lcLiND%2FJnMEG7aLq6EKuAf548QYdyAYIPWj9l22%2FFLRMcWOo9Hs08pGeB0chqvWfn0paxIZtJ1qC%2BPjP%2BLy2fk30%2Flnzx%2BEKABzCAwcF%2FoGWbIJsyeXoVDdanEMKaQ1cEGOqUBWn6R7OcDUfKEIewfecFyBESRwQW88hognCHY0aYOM5Bf%2B9fIhYDVNKA006yh0vXpJvUCgOi46b%2B04ubczM6bNdcXV1%2BvCRF2buec3zbghFECLdTGfe7N0%2FQZl8sGsx5uNK4S%2BDLudsdtO%2BoipjBR6QZek11HeEtI02BVmWXpZ8ZDhjvSERRAOFy4BpY8%2Fx9f%2BjRlL8RgVKfw9V0FDZYUelR6q3F4&X-Amz-Signature=84391880e8fa4eb9183b06cbf97fb4531322b0304d50171c3dabbc3d4ddef6ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL3H5BVQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBL47cJYJl5utAJshLkvLW3QRXzwo2X8LtD1r2FAbiabAiEAontanFBhmXd35P8bKMxqpetmrgcnnQqoEf5R5Nfx8p4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBpkPY7Tfc8EOwdzWCrcAwkN9cRLk3jsHKxf7L3Y2vtqNK61LMuPxspkmwyN8MIJ2WimpzRScd%2BvtvZ2LwjHD9bFfsL242i%2F3BaVJ1Ey8LjWeDBAFEdGrvvkWNNTD3HceRdUWV3bcrFt4GDeULU69z%2FkP21SRz17CsELHHNdjIShO02c21Cvl1qUFD1%2BX5U5wtx5QiEeh3T%2FxtH7Q3Fx%2BcVCCMm0GHvCh4pRGtngqWDqC0EkR%2BEMhiRkXxpuwUE4FrRtVNMz9q7JZgESVZiH3DQbqlqcXIQEp4lfSW3qH8G7V0tN5%2FlWQIsYVhzXwOQcdZ8FkKw6kMbNnL%2FajJmRfz2mqZfRdcow%2FsXZfM5Puig%2FXO%2B82dwroDjqqnjKeU%2FIFG1wCDWRoZ6WlU5tfG9NWcDSj27HyKzDY%2FCJuVo0lfxjqMniAOkTkdYgDQUd1RPzXKcaEdIwizcYCerB5UCplzrkrpeIj7ph9Gxgpz0EW7uhxdi9FgRtB1O6jSKA%2BYxhQYloQunjTKUhQSiZkXzik6lcLiND%2FJnMEG7aLq6EKuAf548QYdyAYIPWj9l22%2FFLRMcWOo9Hs08pGeB0chqvWfn0paxIZtJ1qC%2BPjP%2BLy2fk30%2Flnzx%2BEKABzCAwcF%2FoGWbIJsyeXoVDdanEMKaQ1cEGOqUBWn6R7OcDUfKEIewfecFyBESRwQW88hognCHY0aYOM5Bf%2B9fIhYDVNKA006yh0vXpJvUCgOi46b%2B04ubczM6bNdcXV1%2BvCRF2buec3zbghFECLdTGfe7N0%2FQZl8sGsx5uNK4S%2BDLudsdtO%2BoipjBR6QZek11HeEtI02BVmWXpZ8ZDhjvSERRAOFy4BpY8%2Fx9f%2BjRlL8RgVKfw9V0FDZYUelR6q3F4&X-Amz-Signature=7b6b71b7e9e30c7e05b6d518c441fc283760d319cb0760939dcc9607c112e7d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
