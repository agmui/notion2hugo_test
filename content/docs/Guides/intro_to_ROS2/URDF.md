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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J75KORR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVJvtjnic%2BDOcygeOn3LJ0DecgeDfDaF18Bd0ElEO1GgIhAPLh0cGq2LEo%2FIHzi7wqquadcj47RH8yg0F5fjGT39z7KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6t2nZJYlyeXbGWkkq3AMT6xRSzXYCrAsBPmn1JIc6%2BtJ4KY%2B4RShlwsrSDpQvkroPvbSDDFxw9iYAY0%2BGBI63Y2MXfalJptuuEb6aKeM5u0qpxkclbDC1kgNOUBuGABRT06vmpH3aGmA4klLmodq2Vp6SThXW9uFMPXa5Uo0CzfvYpN4UZ3DQjyIR4%2FBgSeC0umBpywU0%2BZMgaIu%2BCcgv4%2BrajfIOrS9T3Q3s3VAlBV90mmgrKNWJer2z9I%2FoDCAJ2Pw95YIBaVLq4K%2B2ElOd5bhXZ%2BuKjhXI21%2BYcBQ2XSjAeFykeFtDQ%2Fu9p2QTV93hjaHQVdYphzeQWjL%2BEO4RgumWGmBBay2SYNhOzmagloVqSLnN86VCYXsuNGFodBMTQKV5rsrJP69EDcDEbXWXVnl52wMfkdEwLBT0Ewrp%2BNFO4xM49z3xN6ZbnJvoy5kD%2F8hP%2F863bIl2KFPRAFdOsp0XCgEkKBbf4LobEAfFd%2FKrXQ6ENpmQqIQAoTm9Po0aWEfbVuY1qvha1AtUGFdWsJ91wC3JtWHhceVcMnr74j5vkpM50AoIF7gDzHxK80HQvm5Wr433AQz17RFYw4f%2BaQdvrBnm8fKZBwcOg7fQADl1CCgHV6fO7f3MrJTGE0s7cxU2js3l2vx8NDD8oM3CBjqkAVd4VKk9vtDzkOUMQmTZLRyitcVXMBi3cZGSjEo5Y7tx8ZApFssLNPrFOpYhKsHGfvlD3HDlmknk1n%2FrumOsZ8d0wZG61C2UX1FAFAofCpqQlrjdOmnIWmjmmhA1jB9vOtOOqZSN2nB3CBVLQkVBr1kobnqaabSF4hkHB6KqdYtn52q8SQJkFUKfGBNs%2FdQ7QFjSjzd7Z0Afzg2sKMDaQy1hHc7V&X-Amz-Signature=03ed69b81c9ed627e4bb73a64e007aadd8f6bc250249d970606e85920b1b4053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J75KORR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVJvtjnic%2BDOcygeOn3LJ0DecgeDfDaF18Bd0ElEO1GgIhAPLh0cGq2LEo%2FIHzi7wqquadcj47RH8yg0F5fjGT39z7KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6t2nZJYlyeXbGWkkq3AMT6xRSzXYCrAsBPmn1JIc6%2BtJ4KY%2B4RShlwsrSDpQvkroPvbSDDFxw9iYAY0%2BGBI63Y2MXfalJptuuEb6aKeM5u0qpxkclbDC1kgNOUBuGABRT06vmpH3aGmA4klLmodq2Vp6SThXW9uFMPXa5Uo0CzfvYpN4UZ3DQjyIR4%2FBgSeC0umBpywU0%2BZMgaIu%2BCcgv4%2BrajfIOrS9T3Q3s3VAlBV90mmgrKNWJer2z9I%2FoDCAJ2Pw95YIBaVLq4K%2B2ElOd5bhXZ%2BuKjhXI21%2BYcBQ2XSjAeFykeFtDQ%2Fu9p2QTV93hjaHQVdYphzeQWjL%2BEO4RgumWGmBBay2SYNhOzmagloVqSLnN86VCYXsuNGFodBMTQKV5rsrJP69EDcDEbXWXVnl52wMfkdEwLBT0Ewrp%2BNFO4xM49z3xN6ZbnJvoy5kD%2F8hP%2F863bIl2KFPRAFdOsp0XCgEkKBbf4LobEAfFd%2FKrXQ6ENpmQqIQAoTm9Po0aWEfbVuY1qvha1AtUGFdWsJ91wC3JtWHhceVcMnr74j5vkpM50AoIF7gDzHxK80HQvm5Wr433AQz17RFYw4f%2BaQdvrBnm8fKZBwcOg7fQADl1CCgHV6fO7f3MrJTGE0s7cxU2js3l2vx8NDD8oM3CBjqkAVd4VKk9vtDzkOUMQmTZLRyitcVXMBi3cZGSjEo5Y7tx8ZApFssLNPrFOpYhKsHGfvlD3HDlmknk1n%2FrumOsZ8d0wZG61C2UX1FAFAofCpqQlrjdOmnIWmjmmhA1jB9vOtOOqZSN2nB3CBVLQkVBr1kobnqaabSF4hkHB6KqdYtn52q8SQJkFUKfGBNs%2FdQ7QFjSjzd7Z0Afzg2sKMDaQy1hHc7V&X-Amz-Signature=83d1f12bf0eebf2b1786be9238ea12ed999682f20953e2af001c4694949aa4eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
