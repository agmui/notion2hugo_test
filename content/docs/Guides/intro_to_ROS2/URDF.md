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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXCIYWWS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA95ZyM5OY6JlFMohB1ercpskL0Y9ktw5MjsUYpDSYwQAiBzC9ni45RtbUvkMYuR4QqdQBBdRg8oLJ0%2FpgUse4xyXCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdIBWkd36Q0KnycvYKtwDec%2F4XZFzNwVjwsJynmj8fEU8N0VVpM2SEFSxY2XskKH%2BEHWy%2BiM66Npil9OlqAuvlNZKouducOYrWXheRp6O9i6U%2Bceapu%2Bqh0m%2FFjtm3qyfTO3GEK15qHPcxwvgc0ppveIsss%2BlLQ4oQOkHMNVMw6pVOdXYa1l5S%2FQGKDWIsOPH90jgE6gJ7YELbItKZ55ZwMnQ1JRS5rB1yn%2FtWsAxQdKzF2Aaa2Dk1BtfyccrDrUHYdqQ7nsMYy7lpoEsViQKZ6%2Ffrzd3XDxH8YB1bJEioIiW2Y51Io5eP0HxDWxnN2%2FayWYWqlAyy0IinucZclZ3kHFIETn%2F0%2BDxeLu9kEkCoyqxIGjXiqEVZ4KGnmU%2FtJvzNJOc%2BirZ8JVVzZmMb7p%2FD9jpsHpam8de%2BDvo%2B7v1E3FZY9wTbti1QTYU8qp6Y6XMinWJoMgX7BdHKNZSYnAU%2B2GHEN%2FALfjPA%2Bphei2yPAK4zaYqiQiz0wlkJTqFOBLGbPKlIb%2BZfYBjphPlSZko4jBXwoE32EjBU8DkQYgY3K4ke3oERXJuKUXs7vQljmW5c2SuWFkOjL2G1ltK99vnIQYvgZsQpY0aqvI4QbJzNHIQmwO9J5F4KvHA8h58%2B3rgZcFLDvWSxo5kJUYwgtDHwwY6pgE23VkWR3V11zQzaRLsuzlxl1otP33IbbgWcjxoeYj2r6KpfuVdeXMQS0p6ynE8LZtdvFtLvBr6N%2BucG8O%2F63dWBpteA5xlM7cNKuZLjspAVKhP9rkctZ1aOLEBrZJGRnDPdy8C9USN2NuOpAyb%2Blx%2B851QtkQEk5entxceaCxnHqA2LEvXr%2FVSFk4nT4O0ciqA0NQDI%2BUsmnCppwvlmBze9RYtX1t3&X-Amz-Signature=750849ef7a305364184bc2f95ed6108070f56a260f1064ac0c7b10ec8b528139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXCIYWWS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA95ZyM5OY6JlFMohB1ercpskL0Y9ktw5MjsUYpDSYwQAiBzC9ni45RtbUvkMYuR4QqdQBBdRg8oLJ0%2FpgUse4xyXCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdIBWkd36Q0KnycvYKtwDec%2F4XZFzNwVjwsJynmj8fEU8N0VVpM2SEFSxY2XskKH%2BEHWy%2BiM66Npil9OlqAuvlNZKouducOYrWXheRp6O9i6U%2Bceapu%2Bqh0m%2FFjtm3qyfTO3GEK15qHPcxwvgc0ppveIsss%2BlLQ4oQOkHMNVMw6pVOdXYa1l5S%2FQGKDWIsOPH90jgE6gJ7YELbItKZ55ZwMnQ1JRS5rB1yn%2FtWsAxQdKzF2Aaa2Dk1BtfyccrDrUHYdqQ7nsMYy7lpoEsViQKZ6%2Ffrzd3XDxH8YB1bJEioIiW2Y51Io5eP0HxDWxnN2%2FayWYWqlAyy0IinucZclZ3kHFIETn%2F0%2BDxeLu9kEkCoyqxIGjXiqEVZ4KGnmU%2FtJvzNJOc%2BirZ8JVVzZmMb7p%2FD9jpsHpam8de%2BDvo%2B7v1E3FZY9wTbti1QTYU8qp6Y6XMinWJoMgX7BdHKNZSYnAU%2B2GHEN%2FALfjPA%2Bphei2yPAK4zaYqiQiz0wlkJTqFOBLGbPKlIb%2BZfYBjphPlSZko4jBXwoE32EjBU8DkQYgY3K4ke3oERXJuKUXs7vQljmW5c2SuWFkOjL2G1ltK99vnIQYvgZsQpY0aqvI4QbJzNHIQmwO9J5F4KvHA8h58%2B3rgZcFLDvWSxo5kJUYwgtDHwwY6pgE23VkWR3V11zQzaRLsuzlxl1otP33IbbgWcjxoeYj2r6KpfuVdeXMQS0p6ynE8LZtdvFtLvBr6N%2BucG8O%2F63dWBpteA5xlM7cNKuZLjspAVKhP9rkctZ1aOLEBrZJGRnDPdy8C9USN2NuOpAyb%2Blx%2B851QtkQEk5entxceaCxnHqA2LEvXr%2FVSFk4nT4O0ciqA0NQDI%2BUsmnCppwvlmBze9RYtX1t3&X-Amz-Signature=dafca87fc93622a81b6ee4220ee733b4d87f10fc73318eb240b1dcc9ecb76599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
