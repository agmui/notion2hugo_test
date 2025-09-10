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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MO5C6QO%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDFAx4XFuR7klfj%2Ft%2B7pe7zNDzq0LyzSCxh5T3Z0AnL0QIhAPNnmBPbhOFeYxE3j8e8xLQXH6AtpkP10jBUVhOex2FGKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyAiuxELjypWTLmjQq3APnfiwqzbcUt4OKFX%2FAqFIcCfXIO0%2BapLBqhYMjH6JsUV6TmZrMs1%2BtGDzt8bw0OoYxG%2FuK%2FAxCZou18PhJ9lEHqdA1nLM%2BvEff8rgE2KekcLeT%2B8JNaEu7u6579vlMGCS9gqzb%2BnAdrD9PPTcpFZw6a1RQSZZhWEhSJiBmO8Z71YOYYLxJyg676PyT2c0RXp8z47KwPt86bPAQRsyGaB6h4LI%2FW9%2Fv9dnjQyJmmmtAJ4si7Vw2E25G4xGiMiaOBzVDuO27tXEfOflPfyrM%2BCxO3l6rzJbNs75j91GwCLiwKnrTcmkzRjwkcfMKvZXEbbSAGBTxg36x27EktdgHH3vH4Sl%2BtZZNiNt4Z7YtVIf3ceaurO1Xryln%2Bsdj0o3J3oXGO7FQ1ye30inUaqhWJj%2B8SqgrH11GKDnSqJDtfzmMjFgoIi%2BXFKoRm5ip%2F7zxvyL2Ncrm5868MHOO2KqnAGUoCZ4XggryLwN7A7vVTR9hAYw9C0fpl8r0sxLAWnrMG0wNTbYeyoDKzVfMKq8uenGCYgXq8V6qVIZ3KAhdGz2EHBjVbTw5sYg7QK7O%2FpqpkM1gPjEVVCH5Y7l9UKjNLtnqYQjgbBVnOG6PNgK9HcIBYb%2Bvd3du3Jl%2FaXRVCDDBjIPGBjqkATW8RCTQfIWTGrGoUeWO1WREJnPXYb0JIFfokY%2FmZWRDX5la%2BLKfdQgHyUT0%2Fe4IRJchNv63HouXuoWHCskBlbX%2Bg01gbNvCqUilbdeDf0KdvUFlUTgkj4tdcswi%2FbChyc7u4eBDO%2F6jUsrU4XizYzlZpsYk4QhpjVXDXflpOnffYBmud95zP42UJfLKDZVi6%2BHT8yW4BvpxuvxSI23o4%2FTkDZRZ&X-Amz-Signature=00b88e5dab4f791f8994f19c0765afd1cf628509738de40f56e998849a7f656e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MO5C6QO%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDFAx4XFuR7klfj%2Ft%2B7pe7zNDzq0LyzSCxh5T3Z0AnL0QIhAPNnmBPbhOFeYxE3j8e8xLQXH6AtpkP10jBUVhOex2FGKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyAiuxELjypWTLmjQq3APnfiwqzbcUt4OKFX%2FAqFIcCfXIO0%2BapLBqhYMjH6JsUV6TmZrMs1%2BtGDzt8bw0OoYxG%2FuK%2FAxCZou18PhJ9lEHqdA1nLM%2BvEff8rgE2KekcLeT%2B8JNaEu7u6579vlMGCS9gqzb%2BnAdrD9PPTcpFZw6a1RQSZZhWEhSJiBmO8Z71YOYYLxJyg676PyT2c0RXp8z47KwPt86bPAQRsyGaB6h4LI%2FW9%2Fv9dnjQyJmmmtAJ4si7Vw2E25G4xGiMiaOBzVDuO27tXEfOflPfyrM%2BCxO3l6rzJbNs75j91GwCLiwKnrTcmkzRjwkcfMKvZXEbbSAGBTxg36x27EktdgHH3vH4Sl%2BtZZNiNt4Z7YtVIf3ceaurO1Xryln%2Bsdj0o3J3oXGO7FQ1ye30inUaqhWJj%2B8SqgrH11GKDnSqJDtfzmMjFgoIi%2BXFKoRm5ip%2F7zxvyL2Ncrm5868MHOO2KqnAGUoCZ4XggryLwN7A7vVTR9hAYw9C0fpl8r0sxLAWnrMG0wNTbYeyoDKzVfMKq8uenGCYgXq8V6qVIZ3KAhdGz2EHBjVbTw5sYg7QK7O%2FpqpkM1gPjEVVCH5Y7l9UKjNLtnqYQjgbBVnOG6PNgK9HcIBYb%2Bvd3du3Jl%2FaXRVCDDBjIPGBjqkATW8RCTQfIWTGrGoUeWO1WREJnPXYb0JIFfokY%2FmZWRDX5la%2BLKfdQgHyUT0%2Fe4IRJchNv63HouXuoWHCskBlbX%2Bg01gbNvCqUilbdeDf0KdvUFlUTgkj4tdcswi%2FbChyc7u4eBDO%2F6jUsrU4XizYzlZpsYk4QhpjVXDXflpOnffYBmud95zP42UJfLKDZVi6%2BHT8yW4BvpxuvxSI23o4%2FTkDZRZ&X-Amz-Signature=36ea2a92a956ebaa5fc8f62cf8b36ca47df9147d6b7c3f4d6897061dd591dd83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
