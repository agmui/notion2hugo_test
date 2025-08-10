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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7U44AR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCIiHfBxmVCQc5MYFZdY0hE%2BYhmGck157ikTxvH1%2BWvwIhAL6NfteR6%2F56xMEQN4ExtHNKzt9xuYpKDyQWEfHXbW84KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfK49YlPbnyj0H8XQq3APRqVxmIMuRKKZ67adUO6pygrQM1TjywyDa6qWjjP9QzpFh441XZ5a3b4iE8Briilp3%2BIwJHZ8V07RkUrXum25iQ8gPnStnE2wM8yygkDZ%2BQTL4qhGn6yjsx6mO4SA74Ic8c2MEMkiCjAqY02yC1YD82JRY%2FQBbmNLw5C7fMKNs5eRQuRZwEhPgd0EvM23QR21nYe9zW%2F7bS4X2oxZealeDwtVPF3RGzuoDpQ6FJydzwYQP85LitLkQeOgUkLwdMVizOoRceYadkdxexIxuGvgZrAykbzqgtubc7Z2UwaRGA6hAUajVUlLqeKoyIx7Nup%2FHka7VltBoMZwLfZGQFI7x8E5mW9I2vWwOTSlxQ7IiJ4V6SyzkUh7IfGEqbDZqKkZlJGftYEvHrOuSVTq0w7Wz%2FwUiEciCeXK9lzy0KFRwTmXBY%2BHpDiLzw6GVyLJPNV%2BBNnlm2RK5OIS1yPFykQUH5%2BLidvZcJh1wt9TsXYwKyI7RL0xEuJTVTTfeZerOtxdb0NAtjpAUffM0cuOAl5IMOHhJOKIyAlGh1KmsObMEueuF%2BZS8i0Z1o%2BVN8d2U%2B3FaqyEK5yO4y5U3Zm2wUsrK1zeFRdIkm%2BW7uViVkp62PAs3kH1DNly3EBwSejDW9eDEBjqkATyfXltblbOmxDAFsh6tcFXJFDR15UqBFt3TMrZO9I0tMFyXXoW59ucHvOGgepXj1ERbTy0L7H2u5LgvJEl7%2BF2TT2bAeTq0C0GS7T%2BIHXyiV3EWQPF8M8QcSCtnpp8JPl8Ltc4xAmwMQYBDEI7j5TfKCxsjnDx46F7HIZXJoKa%2FGcnI6oq%2BUGmq%2B3OWkNQ0mlxIlNafZB8vWkR%2Fi8iv7kQfqqBO&X-Amz-Signature=699a5796f9d1e6dfb38047027acb481541ba60e2141c5957bfedc79a11de2423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7U44AR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCIiHfBxmVCQc5MYFZdY0hE%2BYhmGck157ikTxvH1%2BWvwIhAL6NfteR6%2F56xMEQN4ExtHNKzt9xuYpKDyQWEfHXbW84KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfK49YlPbnyj0H8XQq3APRqVxmIMuRKKZ67adUO6pygrQM1TjywyDa6qWjjP9QzpFh441XZ5a3b4iE8Briilp3%2BIwJHZ8V07RkUrXum25iQ8gPnStnE2wM8yygkDZ%2BQTL4qhGn6yjsx6mO4SA74Ic8c2MEMkiCjAqY02yC1YD82JRY%2FQBbmNLw5C7fMKNs5eRQuRZwEhPgd0EvM23QR21nYe9zW%2F7bS4X2oxZealeDwtVPF3RGzuoDpQ6FJydzwYQP85LitLkQeOgUkLwdMVizOoRceYadkdxexIxuGvgZrAykbzqgtubc7Z2UwaRGA6hAUajVUlLqeKoyIx7Nup%2FHka7VltBoMZwLfZGQFI7x8E5mW9I2vWwOTSlxQ7IiJ4V6SyzkUh7IfGEqbDZqKkZlJGftYEvHrOuSVTq0w7Wz%2FwUiEciCeXK9lzy0KFRwTmXBY%2BHpDiLzw6GVyLJPNV%2BBNnlm2RK5OIS1yPFykQUH5%2BLidvZcJh1wt9TsXYwKyI7RL0xEuJTVTTfeZerOtxdb0NAtjpAUffM0cuOAl5IMOHhJOKIyAlGh1KmsObMEueuF%2BZS8i0Z1o%2BVN8d2U%2B3FaqyEK5yO4y5U3Zm2wUsrK1zeFRdIkm%2BW7uViVkp62PAs3kH1DNly3EBwSejDW9eDEBjqkATyfXltblbOmxDAFsh6tcFXJFDR15UqBFt3TMrZO9I0tMFyXXoW59ucHvOGgepXj1ERbTy0L7H2u5LgvJEl7%2BF2TT2bAeTq0C0GS7T%2BIHXyiV3EWQPF8M8QcSCtnpp8JPl8Ltc4xAmwMQYBDEI7j5TfKCxsjnDx46F7HIZXJoKa%2FGcnI6oq%2BUGmq%2B3OWkNQ0mlxIlNafZB8vWkR%2Fi8iv7kQfqqBO&X-Amz-Signature=ebbdd5632e1418816ad86c20d1daed227b7052b17ef691fb60ce2c5315e871e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
