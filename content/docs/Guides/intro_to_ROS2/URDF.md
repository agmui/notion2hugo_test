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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI5HA3TE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCNQHJHyjV5ExScUyh8eQ%2Fqyd2td%2BuPMc%2BnJ8eCmjs0DwIhAKU8lHrqx%2BYM9V8SxRZiLGJl8ycge44h7KQK93WSuZ0XKv8DCH0QABoMNjM3NDIzMTgzODA1IgwnAGjPinYLq0xT7xIq3AMd6BFEIEE%2FX%2BpXPBmi0ZVKwnlQyS0fc4cLtMfIwZwwoOZ4vaBUOwBaoyHlJBEaGlsn3D9pClzGBM5kkNe%2BB4r8bK6x6oHYHSbc3AXV%2B5xn8YvUFTdOCk2NVotugr05We8oe%2B08EW37edoz%2BxPLhzYxPfiNTisHvsia7Vt7zQO7eDQyNDx%2F6bHEL1%2FaeDrBVhHLoX3dYz7A8qLJjq1oBMXawYQRvCas4souzcEfty1pqNwKCPkIilaRrcjz1loabZq3KW9YgBxVjdJGfghiAMnse6FThIWY2Av88ep73ugkClitLPOPDBUxGNvsHkc%2Bd7dYpRgdyV3kMakOepwzOkeoBwxWy6i9SZKqXKaNqZGCa0qyNWWQSptliyTN9IsjvRNv6xt8VotKgPb2kkPDBw9VLq5IYV5a6E8OhjhPpk9619iiyp%2FStfpQdIUHuzWSJMhu0hh0i77EHmpUpANDYf%2FGWJrQvkjZ1jUQ%2FRXNz2%2FsX%2FFlUkAJTl1DshwMrNheWXffGu%2BMu1s8ma6%2FHRcNNvvhIyiw2C3JMY%2FNBr5sDDHSIKVdhfY7DVelOy3UNpT99KIy%2BmJFJqyQG5mH38N6NBC2A1f0dA2rUCKCvVK1HsjCUd67No45fvVLgIyI6zDo4Le%2BBjqkAaR3wUr7I3TouBdJS%2BgZHUKafipPpJwc5uVQBT8xFAHZTI9aKGieSp9qJzd8r67MVgiqB4TSGYgn%2B6FNZuhFkd51g%2BWvkHrqb4jCxAjtiojD3BUfoLjepc9wdxdfnGfPmJn0p0ONkDNIRqN5g5XXPwPVAAjwCjJR6gOLWYw20lqK4NrUGnewb1BZ%2BYFKSQbr37qaLaIGJ9MRzSpN3625GNX1QtGx&X-Amz-Signature=d6e5c92d6a19eaef423b6f8f43f0dbe53368a5c2b4077302eede5f0837b163ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI5HA3TE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCNQHJHyjV5ExScUyh8eQ%2Fqyd2td%2BuPMc%2BnJ8eCmjs0DwIhAKU8lHrqx%2BYM9V8SxRZiLGJl8ycge44h7KQK93WSuZ0XKv8DCH0QABoMNjM3NDIzMTgzODA1IgwnAGjPinYLq0xT7xIq3AMd6BFEIEE%2FX%2BpXPBmi0ZVKwnlQyS0fc4cLtMfIwZwwoOZ4vaBUOwBaoyHlJBEaGlsn3D9pClzGBM5kkNe%2BB4r8bK6x6oHYHSbc3AXV%2B5xn8YvUFTdOCk2NVotugr05We8oe%2B08EW37edoz%2BxPLhzYxPfiNTisHvsia7Vt7zQO7eDQyNDx%2F6bHEL1%2FaeDrBVhHLoX3dYz7A8qLJjq1oBMXawYQRvCas4souzcEfty1pqNwKCPkIilaRrcjz1loabZq3KW9YgBxVjdJGfghiAMnse6FThIWY2Av88ep73ugkClitLPOPDBUxGNvsHkc%2Bd7dYpRgdyV3kMakOepwzOkeoBwxWy6i9SZKqXKaNqZGCa0qyNWWQSptliyTN9IsjvRNv6xt8VotKgPb2kkPDBw9VLq5IYV5a6E8OhjhPpk9619iiyp%2FStfpQdIUHuzWSJMhu0hh0i77EHmpUpANDYf%2FGWJrQvkjZ1jUQ%2FRXNz2%2FsX%2FFlUkAJTl1DshwMrNheWXffGu%2BMu1s8ma6%2FHRcNNvvhIyiw2C3JMY%2FNBr5sDDHSIKVdhfY7DVelOy3UNpT99KIy%2BmJFJqyQG5mH38N6NBC2A1f0dA2rUCKCvVK1HsjCUd67No45fvVLgIyI6zDo4Le%2BBjqkAaR3wUr7I3TouBdJS%2BgZHUKafipPpJwc5uVQBT8xFAHZTI9aKGieSp9qJzd8r67MVgiqB4TSGYgn%2B6FNZuhFkd51g%2BWvkHrqb4jCxAjtiojD3BUfoLjepc9wdxdfnGfPmJn0p0ONkDNIRqN5g5XXPwPVAAjwCjJR6gOLWYw20lqK4NrUGnewb1BZ%2BYFKSQbr37qaLaIGJ9MRzSpN3625GNX1QtGx&X-Amz-Signature=42c3b10109cb4aa0ea79b655a93dbd6f7c6a5484b0894ada8b49b4f911e5b4b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
