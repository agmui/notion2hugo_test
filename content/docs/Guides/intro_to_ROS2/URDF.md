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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6FFE5FY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCxqTmOHwD595yFF%2Fp3vi741Nf%2FiNyWdw7YPCKvD7JB5gIhAMaLqDL9gCGD0aJXc4uMQpP5OHx0Ab7NFnwpOuWH6CBrKv8DCFYQABoMNjM3NDIzMTgzODA1Igy7fx88zqZwgHZ2rkcq3ANRu4awbIzTmvyO%2FSVQDpGtuKnQeuqZIh%2FAsSgFGztT3MOQJ8kt7VtuPdab019wLXMnd9BnPfK%2F6bVVoXr8RLghTZtQNSj1j304WrRXmLQzzOTk6B8rj8O0%2FAqH65EGQAfGS9tsxKpW%2FA8Qa9Xi0tRlyyKeeNp3lpuYH3yLGC2w0xUhpy0p99hD90OlOHOSN3IJ%2FWtoVlSvD4eH%2FHniuDSvs8jBcC9yrDVrtymLyqSWwU3UnPSX5%2F4UdR%2Fu1tvie7AiMUqX13F86B6vUIuwi06zygCaOs8%2B1As20NBHMK8%2F6nCV8TlXdryiwZlOHc7z3AARMZ9mpwTZfTgG4sBQAABnm5wWhI36uOr4Tqcz%2F7QjnAe5aaDYK9rs%2F0nE7xZ9npqkSlFy1doZYCGLQ%2Ba5IDHJaGsle%2BSr%2B6rYREAKAABczvfsU%2Fx6teRpt94lpkJ1IueNADQqtZncYekUXqi2nXWSZY250WN8EVLIZ8%2FEmvvJCGyYP%2FCJ6ItTABDdT3GUS4Uk8O1pLYuWYPAYjXm1Y0PybWbQ9VbEXanKLQ7z4Bhb6kgLNEGFgWp3EwygjrXjkZ1YnzwfM1ZROM6dERff8MMl0658IBzQP%2BhOmYFOD4dkgV4eAI2%2BchuO21Hn%2FDDQvJHEBjqkAQh6nFda9PNZ9PInrCwZlRDdQQnwSyG8ASlfG9egtFslPkr4lPSyQgZyKS2EouW%2FwuT6kQVjUGVGSZGwD0PDDLhSSyiefCEIjpAD6dMyGe%2FjCJiBMkPDwYGzMujigIC3y13k28W2OT0N%2FZURpAEyldMGQT7%2FGSXpCbIkkw4Qu5wJFF%2BPU0dYQQk70VFn0aKQhUy6GLB3aLyJCh7CJ%2BhFLWKGhrnI&X-Amz-Signature=d759fafd485858422060e4dbef04c95f9186ac2969919877e183036743892623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6FFE5FY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCxqTmOHwD595yFF%2Fp3vi741Nf%2FiNyWdw7YPCKvD7JB5gIhAMaLqDL9gCGD0aJXc4uMQpP5OHx0Ab7NFnwpOuWH6CBrKv8DCFYQABoMNjM3NDIzMTgzODA1Igy7fx88zqZwgHZ2rkcq3ANRu4awbIzTmvyO%2FSVQDpGtuKnQeuqZIh%2FAsSgFGztT3MOQJ8kt7VtuPdab019wLXMnd9BnPfK%2F6bVVoXr8RLghTZtQNSj1j304WrRXmLQzzOTk6B8rj8O0%2FAqH65EGQAfGS9tsxKpW%2FA8Qa9Xi0tRlyyKeeNp3lpuYH3yLGC2w0xUhpy0p99hD90OlOHOSN3IJ%2FWtoVlSvD4eH%2FHniuDSvs8jBcC9yrDVrtymLyqSWwU3UnPSX5%2F4UdR%2Fu1tvie7AiMUqX13F86B6vUIuwi06zygCaOs8%2B1As20NBHMK8%2F6nCV8TlXdryiwZlOHc7z3AARMZ9mpwTZfTgG4sBQAABnm5wWhI36uOr4Tqcz%2F7QjnAe5aaDYK9rs%2F0nE7xZ9npqkSlFy1doZYCGLQ%2Ba5IDHJaGsle%2BSr%2B6rYREAKAABczvfsU%2Fx6teRpt94lpkJ1IueNADQqtZncYekUXqi2nXWSZY250WN8EVLIZ8%2FEmvvJCGyYP%2FCJ6ItTABDdT3GUS4Uk8O1pLYuWYPAYjXm1Y0PybWbQ9VbEXanKLQ7z4Bhb6kgLNEGFgWp3EwygjrXjkZ1YnzwfM1ZROM6dERff8MMl0658IBzQP%2BhOmYFOD4dkgV4eAI2%2BchuO21Hn%2FDDQvJHEBjqkAQh6nFda9PNZ9PInrCwZlRDdQQnwSyG8ASlfG9egtFslPkr4lPSyQgZyKS2EouW%2FwuT6kQVjUGVGSZGwD0PDDLhSSyiefCEIjpAD6dMyGe%2FjCJiBMkPDwYGzMujigIC3y13k28W2OT0N%2FZURpAEyldMGQT7%2FGSXpCbIkkw4Qu5wJFF%2BPU0dYQQk70VFn0aKQhUy6GLB3aLyJCh7CJ%2BhFLWKGhrnI&X-Amz-Signature=c40d6e3c68df7defdb6e0a78365fee8683ce527a285e4effb320d43f739060e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
