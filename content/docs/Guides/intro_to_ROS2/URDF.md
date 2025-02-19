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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZULKWBQ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLRsPcOagJEf2sIx9mmX8qT3Q0dlqZiNxJvUp8%2FAc4qgIgWz%2FrQc1jqHHPhavfr0u8aug2hw1NaFgtzy5ypcI8QQwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSQ%2BQBY8kpMH1tE9CrcAy209VKRJMbMhmBobjtvu0BoqWXlbpIZaR83BQwyjVxaPXQ8JIhBqVvLQ9O2%2BWBTUHnGogeV2DUfuV4g7CyCCQgimiGriom9CSLGRQbAYjyBzhP9rHWwaR6qRodsU3rKpNr4c1B0GZ%2FiK1q7zVoaYZBVV2BNK0wS1EqzV2wd7BTHkL8mjXvYX3cqb86sfaP3iDKKAHT0FuinI9gf%2BI%2F14VHcJqhtDBEfnoYfyVQMaNsfEmLJL7NPO9P4LLB6G0fFpBNLq4fkJt3MUgky1SozPtwBMNqaCGh4bj5%2F84DO0jLn1TiZLkJlqjjqYtNlDllty1Gho6E8EDTb5wWoXLUt0jznp8XbEvN7b6nwCqhwblxVNxDsPC4DMYA8gVGr9GCVsce9JtWdJpCLWHyb3AVJ6gcd%2BGXIc1F%2Ber9Sn%2B9C1Vi13K59oWl7r06xR7VHhI%2BghJDdYDj8u04UVHCtASGMLXLR5Lbje%2FgqAmLSXQvZZ6ULArttq5Tu%2F4zCmZmzFYVKELjKTx%2FZvJzV3GJQluOlOV%2FGvvFHLsGd0czHT3ZXeYgeG6gie%2BH4U90Qru1GtJmVvCECE3hxhIZNzpKjtmxaRnAEMLa%2BqsyowA4wBfOd5Vu8HwExnIutIUkc9YeIMNLu2L0GOqUBQe6W39coDUvACgP%2Bm%2B8erlzRUtw%2FoPD8gEdhUDkr2kT2fXSJjytq%2B0YI1M6N1223yZsBrA9v5UmQ2OBT31acfNflXyngprsv85FdKPTOd8omJsU0wr%2Fpwwj0TvnVbmWSMTqodzwyVEeEHPqsaY4CkfgAl5ArbdEz4S72I66L%2BdEYA0AX%2FOsDpg1dYmHqbD36aUS7NuaeJQlTo8haXc3Ut97U8sbc&X-Amz-Signature=e879a730b64b1e76a51dd7c7d2c90f2dc568973795fa654dbd82604b2132c535&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZULKWBQ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLRsPcOagJEf2sIx9mmX8qT3Q0dlqZiNxJvUp8%2FAc4qgIgWz%2FrQc1jqHHPhavfr0u8aug2hw1NaFgtzy5ypcI8QQwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSQ%2BQBY8kpMH1tE9CrcAy209VKRJMbMhmBobjtvu0BoqWXlbpIZaR83BQwyjVxaPXQ8JIhBqVvLQ9O2%2BWBTUHnGogeV2DUfuV4g7CyCCQgimiGriom9CSLGRQbAYjyBzhP9rHWwaR6qRodsU3rKpNr4c1B0GZ%2FiK1q7zVoaYZBVV2BNK0wS1EqzV2wd7BTHkL8mjXvYX3cqb86sfaP3iDKKAHT0FuinI9gf%2BI%2F14VHcJqhtDBEfnoYfyVQMaNsfEmLJL7NPO9P4LLB6G0fFpBNLq4fkJt3MUgky1SozPtwBMNqaCGh4bj5%2F84DO0jLn1TiZLkJlqjjqYtNlDllty1Gho6E8EDTb5wWoXLUt0jznp8XbEvN7b6nwCqhwblxVNxDsPC4DMYA8gVGr9GCVsce9JtWdJpCLWHyb3AVJ6gcd%2BGXIc1F%2Ber9Sn%2B9C1Vi13K59oWl7r06xR7VHhI%2BghJDdYDj8u04UVHCtASGMLXLR5Lbje%2FgqAmLSXQvZZ6ULArttq5Tu%2F4zCmZmzFYVKELjKTx%2FZvJzV3GJQluOlOV%2FGvvFHLsGd0czHT3ZXeYgeG6gie%2BH4U90Qru1GtJmVvCECE3hxhIZNzpKjtmxaRnAEMLa%2BqsyowA4wBfOd5Vu8HwExnIutIUkc9YeIMNLu2L0GOqUBQe6W39coDUvACgP%2Bm%2B8erlzRUtw%2FoPD8gEdhUDkr2kT2fXSJjytq%2B0YI1M6N1223yZsBrA9v5UmQ2OBT31acfNflXyngprsv85FdKPTOd8omJsU0wr%2Fpwwj0TvnVbmWSMTqodzwyVEeEHPqsaY4CkfgAl5ArbdEz4S72I66L%2BdEYA0AX%2FOsDpg1dYmHqbD36aUS7NuaeJQlTo8haXc3Ut97U8sbc&X-Amz-Signature=25291fadc4c8a3f52d217f2f0a267ad523e5e201b35e78762468d9a9d2756d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
