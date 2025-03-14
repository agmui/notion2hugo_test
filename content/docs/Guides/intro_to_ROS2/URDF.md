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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGVBFVV6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDlX0jtzNj7hOakSy36RmAaIB4r8BGZw41cWxerGxmBgIgcuEF8JG0BuaFdP8uTx3OJT7dtLBQF688LR%2FvafhxMo0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIB1phHoYfNgy6fipCrcA10%2FC6m8UJgqBCWpG9CIz%2BBW9zqObo5t6bitPV3eVbbP1iYonlmu7qRlJL%2FjDWPSjWYb83jOrWXN8KQmWOwvLskTxySp9wSgG0LlYXnvBqyuztodAjeAEeRDcUz%2F3UHjbGgmSQJpDk22J6e9z9QpeYpTpCI3x7CnQIJQd3y3VanyfFgnAk4wTPHWwH0Qgp%2BVU8kflzkEro8maBKJoLb5y9YZagG2Xfm2VKWo6nagrs2MJbQH1slRKWhLD3wT88oduhjwugwdD0JH9kohlsdwytBPMoAkYB4mgW%2BGGfnJ%2FPkfQixB0Q4XNIdGlBoesxEz%2Fc%2Fvn7agqbJikHlPBxcXTNXyAOdWSseQNW1lxeDwFp3p017RExPytZROtPPbpM9ajg4CDk7bC6TWvbDvUoQYWKUYdNu%2FX%2FXg7QsUKIuCBI2NcpN%2BbQelyT2LjopSLk6sx1%2FMrCJzcCzLM862u8JGeuC0z%2FmPQDQ8F6FqgHQHzaFYuRbzhKjvLRlI6Aq01nrHEzwc5z2n1DyWXBWdz%2BZq4ZfsVUUkt7XH2y2328FKB1IJXcDNzvC7LNdJ5HZrzP9rMP976T1siaKkfvIATSEZMVft65%2F0FDLvieUL2bV0vzZQV%2FgCF%2FqyRGYEQIyHMPKtzr4GOqUBa8rVcvcJhCiUPy%2FXcJA8WK%2FQKrqkXtQ1ZkaF3QRw%2FjkwLqC8yiI2u3bHEJwgt3K3XMmXxA0TFbLZuEUiulXeCQuDVSPc6VfdUhY8W8vXikuWK8APeg%2Fun%2FmpkNv0CHRjJsWq31hv6M%2BYuUFi%2FIWeJ6GoLmgDFnsTODZXGsKH5T4SevJEK10d1eP49Dzh8IH36IVbAcbI6ckkDdWXDikJBwR98Ot9&X-Amz-Signature=02540b80375c89a34bfb8370490b6c86c313f29957c7a8d6b5e92e399b9327a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGVBFVV6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDlX0jtzNj7hOakSy36RmAaIB4r8BGZw41cWxerGxmBgIgcuEF8JG0BuaFdP8uTx3OJT7dtLBQF688LR%2FvafhxMo0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIB1phHoYfNgy6fipCrcA10%2FC6m8UJgqBCWpG9CIz%2BBW9zqObo5t6bitPV3eVbbP1iYonlmu7qRlJL%2FjDWPSjWYb83jOrWXN8KQmWOwvLskTxySp9wSgG0LlYXnvBqyuztodAjeAEeRDcUz%2F3UHjbGgmSQJpDk22J6e9z9QpeYpTpCI3x7CnQIJQd3y3VanyfFgnAk4wTPHWwH0Qgp%2BVU8kflzkEro8maBKJoLb5y9YZagG2Xfm2VKWo6nagrs2MJbQH1slRKWhLD3wT88oduhjwugwdD0JH9kohlsdwytBPMoAkYB4mgW%2BGGfnJ%2FPkfQixB0Q4XNIdGlBoesxEz%2Fc%2Fvn7agqbJikHlPBxcXTNXyAOdWSseQNW1lxeDwFp3p017RExPytZROtPPbpM9ajg4CDk7bC6TWvbDvUoQYWKUYdNu%2FX%2FXg7QsUKIuCBI2NcpN%2BbQelyT2LjopSLk6sx1%2FMrCJzcCzLM862u8JGeuC0z%2FmPQDQ8F6FqgHQHzaFYuRbzhKjvLRlI6Aq01nrHEzwc5z2n1DyWXBWdz%2BZq4ZfsVUUkt7XH2y2328FKB1IJXcDNzvC7LNdJ5HZrzP9rMP976T1siaKkfvIATSEZMVft65%2F0FDLvieUL2bV0vzZQV%2FgCF%2FqyRGYEQIyHMPKtzr4GOqUBa8rVcvcJhCiUPy%2FXcJA8WK%2FQKrqkXtQ1ZkaF3QRw%2FjkwLqC8yiI2u3bHEJwgt3K3XMmXxA0TFbLZuEUiulXeCQuDVSPc6VfdUhY8W8vXikuWK8APeg%2Fun%2FmpkNv0CHRjJsWq31hv6M%2BYuUFi%2FIWeJ6GoLmgDFnsTODZXGsKH5T4SevJEK10d1eP49Dzh8IH36IVbAcbI6ckkDdWXDikJBwR98Ot9&X-Amz-Signature=514393bdc71cf19cbc285102325de6bc2e1e33ea8cbaf2a6332beb587fbe0047&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
