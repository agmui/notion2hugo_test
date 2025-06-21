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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44D22Z4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrX1HeZ%2F9gyN3UChuHJ3Jd7RT7tiYkqJzF3r%2F2dHoO8AiBvQrDIxGzidFlG021n9nGPstu5GgMHSZn078iiQLyDKyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgjErHNJs5lpyzR7KtwDG4ecMNUJKH6JD4rGPAi4fKaQr0Mdhdxe9LleGkBrKWpcmoYdG4IHOitH2i5ZFF5Y52QUcmFyLJzb2VbfgNlhznaZqdhCpcqth%2FF2%2FqPSaWLvkHrxIuI7PWadCupqKU9qIjNVCbI0ID4fT3g7K7Dn6mOyS0uDrvoN89I5gZERJaQlhX6ZD2NP%2F4LL9c9uVzBW5UyVFDyBC87lNSKhkW9TixKvZzTar5pqvwuivrvffv0Y4Yx9yVQ32pyMQZVoUqMVRF%2FBdz3EYXpTBS6i8WNQSprbGLCtEkhZOb1yMb%2BwdnYr2XupZnJZKKXLIO0pK9t6xLdutXbNCIhRmhJRt3J1b3r7tM9sBXswVyf4KoSmFZcQGcrBTh9rt5402tfTgeKAbXj9GARPVc2fsWuSPwtjxQybl7yt0N%2BNI1E2YFZpLZ3XZrUZmG%2BXX9uRLCXJ0Js3W2%2FBxCOeUuv02TQ81Q5%2BRRBtv7NRFNzxD7JCmrlWpbeY0Jq25PiABWzgH%2BVIMRntVpu7mIv879QoNj%2FZAE2HI%2B%2FHEpmiR5ql0lRfmUqSIdTpRoSkBMW0Y8xfiXi3UVIsOw6fWH1qwNZ2QvkxPdh6u3%2FFaaNtXq1rs1VpIGpwtXAOECcHIVVgtBxrGtowl6%2FYwgY6pgEZ0%2FHX7M36i8IrWX1DqhrTnS0%2FlI9WeTp5cqIFF3gdxVWuEGfZ8lTt30T4ZLX%2FGj3o8%2FUluNHUrxN%2Bq%2FoJZ%2FZADNEQfqfLL0m6n0EvC0RV3ZTqAvOzB5a95%2FVg8Zjs9EYdgmdgvNsAxYSwqidO1IvuJqHLbd1mo5ARgc10v54xt3C8QhNIZdVk0A%2B9tLtSgrHTa0eNjnpIMP9MwF0IoidYd6xhhtZ%2F&X-Amz-Signature=b3d95971cb28d2ee0ff1a5570f9b176a7e95a4b1dc2d186719dc21fe58ee97d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44D22Z4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrX1HeZ%2F9gyN3UChuHJ3Jd7RT7tiYkqJzF3r%2F2dHoO8AiBvQrDIxGzidFlG021n9nGPstu5GgMHSZn078iiQLyDKyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgjErHNJs5lpyzR7KtwDG4ecMNUJKH6JD4rGPAi4fKaQr0Mdhdxe9LleGkBrKWpcmoYdG4IHOitH2i5ZFF5Y52QUcmFyLJzb2VbfgNlhznaZqdhCpcqth%2FF2%2FqPSaWLvkHrxIuI7PWadCupqKU9qIjNVCbI0ID4fT3g7K7Dn6mOyS0uDrvoN89I5gZERJaQlhX6ZD2NP%2F4LL9c9uVzBW5UyVFDyBC87lNSKhkW9TixKvZzTar5pqvwuivrvffv0Y4Yx9yVQ32pyMQZVoUqMVRF%2FBdz3EYXpTBS6i8WNQSprbGLCtEkhZOb1yMb%2BwdnYr2XupZnJZKKXLIO0pK9t6xLdutXbNCIhRmhJRt3J1b3r7tM9sBXswVyf4KoSmFZcQGcrBTh9rt5402tfTgeKAbXj9GARPVc2fsWuSPwtjxQybl7yt0N%2BNI1E2YFZpLZ3XZrUZmG%2BXX9uRLCXJ0Js3W2%2FBxCOeUuv02TQ81Q5%2BRRBtv7NRFNzxD7JCmrlWpbeY0Jq25PiABWzgH%2BVIMRntVpu7mIv879QoNj%2FZAE2HI%2B%2FHEpmiR5ql0lRfmUqSIdTpRoSkBMW0Y8xfiXi3UVIsOw6fWH1qwNZ2QvkxPdh6u3%2FFaaNtXq1rs1VpIGpwtXAOECcHIVVgtBxrGtowl6%2FYwgY6pgEZ0%2FHX7M36i8IrWX1DqhrTnS0%2FlI9WeTp5cqIFF3gdxVWuEGfZ8lTt30T4ZLX%2FGj3o8%2FUluNHUrxN%2Bq%2FoJZ%2FZADNEQfqfLL0m6n0EvC0RV3ZTqAvOzB5a95%2FVg8Zjs9EYdgmdgvNsAxYSwqidO1IvuJqHLbd1mo5ARgc10v54xt3C8QhNIZdVk0A%2B9tLtSgrHTa0eNjnpIMP9MwF0IoidYd6xhhtZ%2F&X-Amz-Signature=4c616accf07db5ca6ec0deb86def6774c61f2e42a098f7bb2903346576cb64d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
