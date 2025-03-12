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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUK7TK7N%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDOi53JtWrwgXOv6yxEMb5vmoZ3S%2BsXYwcYgB8IngwIXgIhAPt6wRLoueXj%2Bbr9lyaKIr4Ac6u8KSDQRrVt99pkRmKHKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG03LWG9OYBjlXNycq3APAB3THvz7FEiTDEyZ2wn6W8y1BQZ0BNtHHnz5T%2FMPi6k0duvP7wpuvgBqZQABcqVCfOT8uG2CV6l4VO61dUBuPl5gEpRKxFqbNHHILF1ZknhYOMMMgd9DSrb5I1zJWAE4HXS0BpcUhIMQ6keGfF0AdG1RB%2FquBsAHAaDEAJnl7NBxCc86EeqQcY71BD2groI894A1YNuaz6JJ6we%2BcpN4%2BdYbUC7u1UzcdwMPnAJ0eXv7nJ%2BMdFvwq2tclCl9yFEv1qxJOHqBUsyOQymlvOoYXkJGNnpEQ%2FlSNijZE6%2BoerEvDybd6q3lN09aHeyOXWYboKHz1wiN6sWzUGZ7vjJwKZxuXYF1iToTSUpBstJ7zronwiv3oyoNxUKrSgAelVSinSWCptfV7Vj7NWo2CoKsrjyEtkAygvQ694BG6g8YAgPW1avtwfJX9ncL7Y3hjkZsH%2ByzeEsnZaL4sWm7RXX9bhzHZqntQDWuLYKtuSymiu83OUY2oQmssA6%2FlH21tzYw%2F7p46PyOkqGueAd%2B5Qje5WUJ7FhgOb8M9Ok2x36T3tGIar5eyW%2FYWIKdhcO4HVhbnoRuKgn3YbolVrgk9H5yOv9NIXIhbLe4M7ScjBaBlO1s9E13YDtw7UJ1SyTC6w8e%2BBjqkAboP2u1%2F3fKENrCuUnGlBLaXpfLEBnh6g8J40kE%2FCiVX6O5RQ7J1MckOjMA3xhOuc3iVgmVLSXgQR7qHf7HKbG0g2kqW4H35KCF6KIwYn3VRz7y2ue25XsL50GQbMt5XIuIkdiglww0mpUvmPOJTa4T2FxwCxA0Gx7Nd46VJB4qa%2BLkjN9cYwKUAs1Di0THww8QkErIgOx%2BO85fUl7Tyi%2FWYvK9W&X-Amz-Signature=2a5493294447b85b31640893b971d92020590e4edcae86bd1b749f5713bf3a86&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUK7TK7N%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDOi53JtWrwgXOv6yxEMb5vmoZ3S%2BsXYwcYgB8IngwIXgIhAPt6wRLoueXj%2Bbr9lyaKIr4Ac6u8KSDQRrVt99pkRmKHKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG03LWG9OYBjlXNycq3APAB3THvz7FEiTDEyZ2wn6W8y1BQZ0BNtHHnz5T%2FMPi6k0duvP7wpuvgBqZQABcqVCfOT8uG2CV6l4VO61dUBuPl5gEpRKxFqbNHHILF1ZknhYOMMMgd9DSrb5I1zJWAE4HXS0BpcUhIMQ6keGfF0AdG1RB%2FquBsAHAaDEAJnl7NBxCc86EeqQcY71BD2groI894A1YNuaz6JJ6we%2BcpN4%2BdYbUC7u1UzcdwMPnAJ0eXv7nJ%2BMdFvwq2tclCl9yFEv1qxJOHqBUsyOQymlvOoYXkJGNnpEQ%2FlSNijZE6%2BoerEvDybd6q3lN09aHeyOXWYboKHz1wiN6sWzUGZ7vjJwKZxuXYF1iToTSUpBstJ7zronwiv3oyoNxUKrSgAelVSinSWCptfV7Vj7NWo2CoKsrjyEtkAygvQ694BG6g8YAgPW1avtwfJX9ncL7Y3hjkZsH%2ByzeEsnZaL4sWm7RXX9bhzHZqntQDWuLYKtuSymiu83OUY2oQmssA6%2FlH21tzYw%2F7p46PyOkqGueAd%2B5Qje5WUJ7FhgOb8M9Ok2x36T3tGIar5eyW%2FYWIKdhcO4HVhbnoRuKgn3YbolVrgk9H5yOv9NIXIhbLe4M7ScjBaBlO1s9E13YDtw7UJ1SyTC6w8e%2BBjqkAboP2u1%2F3fKENrCuUnGlBLaXpfLEBnh6g8J40kE%2FCiVX6O5RQ7J1MckOjMA3xhOuc3iVgmVLSXgQR7qHf7HKbG0g2kqW4H35KCF6KIwYn3VRz7y2ue25XsL50GQbMt5XIuIkdiglww0mpUvmPOJTa4T2FxwCxA0Gx7Nd46VJB4qa%2BLkjN9cYwKUAs1Di0THww8QkErIgOx%2BO85fUl7Tyi%2FWYvK9W&X-Amz-Signature=3e5516d13943e4db1487e0f92f2d975416cb91ae5fa5e9b29a0959fd5568ff3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
