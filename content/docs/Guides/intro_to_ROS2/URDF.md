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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AYSHNM7%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIF31AASxhreEE6B3TkvrtWjp90WEvR5mmrsyo8Lr1hZxAiA5DWXwU8PHOArKy5wiMaMOtw%2FwWSykxp%2BoWPIJpIhsZiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxwf4xF4p6FwzhAm%2FKtwDUeJP1%2FT6tkCRlh832kz37zopbhLyuBquXnZ%2Bipicp5bjjAowzn%2Fv9nO9bydnQEejG2HMzSQCarwZVbjrbf98COgI%2Fv%2BBOUOnrO%2BCdRNSuYTxHINQWsddIRrfDlhd%2Fu2mByd%2BN973f60INDCWDYrqje9Sn1yIY8JWAhpJnO2HR%2FyZTwSssO70qUToh6%2Ba2PHqWUStKBVqi1f0b%2FZ79dWU3o0zZoHOin%2FALbQj5keHKnn6MVE7qXG6gjyHB8xBYT%2FwTQE0NK4euxxHxcqU2%2BepdEwxtPrAp4H9YVCugO%2F6X5V5g85N6cItv5X57cH8hteymTLRRGfvh6eQiSTDS7dn3L85dbBPo7U2ZDktHbiAYoPYW2Wg8RZnJu4I%2BI%2BU9raORxGxQr2zj38NGoQBmsKSABRAhTgsXrt5Ygwv%2Fb8yXhR3nUv4ICgJb7cs5JjUR%2F3J%2BMyule9Cm3TCGA5d79n%2Ba5c6BuQP70pY5YNEE4tKWkcJkU28ufS3xlPvSlWIrNZ5PL%2BSTDO4fDwjDGfNfOb757bFS14iTXbA6WGCrZmg7w2OkExWZqgTjX0kgtoBh4WXjrYIkzTGE3Y2QLZLkdDCq8mQqafhpYcrYn6kERNKWMm%2BJIg%2F%2BoQxZeqNKg8wnrePvgY6pgGrUrdjA1ztI5ZxBCr2uXFB%2Fq1ozK8EEOjxXV2LaPFqSZwHalvCVQIucrNGif2f0WZFzVv7YxXKLIkkekyJmg9e%2FYSSa6vHg5jRZtaMrmw%2BHWPCKDb%2B6MfDIFOZWYHS9%2BUqg1TRYm9MhmKZ%2BuIuKKkWWtA1XpKUV8nUJzv8yuquPbJGcIAYc5I1fp8lMMaalnxByg0%2B7q%2BSj0sKNFhvfDx8jF6UI5Ok&X-Amz-Signature=b7ef9ecb10f36755f57cb88678492ca5f182decd0edee3d3f85c9245f142e0fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AYSHNM7%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIF31AASxhreEE6B3TkvrtWjp90WEvR5mmrsyo8Lr1hZxAiA5DWXwU8PHOArKy5wiMaMOtw%2FwWSykxp%2BoWPIJpIhsZiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxwf4xF4p6FwzhAm%2FKtwDUeJP1%2FT6tkCRlh832kz37zopbhLyuBquXnZ%2Bipicp5bjjAowzn%2Fv9nO9bydnQEejG2HMzSQCarwZVbjrbf98COgI%2Fv%2BBOUOnrO%2BCdRNSuYTxHINQWsddIRrfDlhd%2Fu2mByd%2BN973f60INDCWDYrqje9Sn1yIY8JWAhpJnO2HR%2FyZTwSssO70qUToh6%2Ba2PHqWUStKBVqi1f0b%2FZ79dWU3o0zZoHOin%2FALbQj5keHKnn6MVE7qXG6gjyHB8xBYT%2FwTQE0NK4euxxHxcqU2%2BepdEwxtPrAp4H9YVCugO%2F6X5V5g85N6cItv5X57cH8hteymTLRRGfvh6eQiSTDS7dn3L85dbBPo7U2ZDktHbiAYoPYW2Wg8RZnJu4I%2BI%2BU9raORxGxQr2zj38NGoQBmsKSABRAhTgsXrt5Ygwv%2Fb8yXhR3nUv4ICgJb7cs5JjUR%2F3J%2BMyule9Cm3TCGA5d79n%2Ba5c6BuQP70pY5YNEE4tKWkcJkU28ufS3xlPvSlWIrNZ5PL%2BSTDO4fDwjDGfNfOb757bFS14iTXbA6WGCrZmg7w2OkExWZqgTjX0kgtoBh4WXjrYIkzTGE3Y2QLZLkdDCq8mQqafhpYcrYn6kERNKWMm%2BJIg%2F%2BoQxZeqNKg8wnrePvgY6pgGrUrdjA1ztI5ZxBCr2uXFB%2Fq1ozK8EEOjxXV2LaPFqSZwHalvCVQIucrNGif2f0WZFzVv7YxXKLIkkekyJmg9e%2FYSSa6vHg5jRZtaMrmw%2BHWPCKDb%2B6MfDIFOZWYHS9%2BUqg1TRYm9MhmKZ%2BuIuKKkWWtA1XpKUV8nUJzv8yuquPbJGcIAYc5I1fp8lMMaalnxByg0%2B7q%2BSj0sKNFhvfDx8jF6UI5Ok&X-Amz-Signature=76fd304737dda9e4fe09a54c8a19e7456672b690f782d9c0c6333082f2c5f94d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
