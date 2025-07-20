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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXR53PK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyQoI9jSBXlXEWC%2BYnRhF2KcnhIbLd93EQ7NtwbCKuKAiADmQPjTi1TJ4kPi2nA%2F1tHXdH1IeNh8FdgEhWb4f8ToCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCfE1bX%2Fcq6oRk%2BxlKtwDT5vO4LXIYAnAm3QxNtnaQ2PDzajWL0WxS%2FLuy6mH0vPmPAneMhEzdvJx9FZMuEvlMX0XpT5O0rexZmhTjXFY2CVLY8w%2FM31DhAewhA1hG5iAFmULRD5RHWLY75%2Bxdf5Yav6fMKlKoGtME4WqK6rB6KnSDipi4Tieln0FKaH0pN2RrhdYfwu1PP98ACUPPJmLOOfy93JXQTJhUuIIbwLS51S4E%2Bv3KrEajObkOKvM%2F7HEktM8Uzet9uDjGa%2FtdGjFT64fm0eQRGUR0VVmtD%2BWsLV2t8FYh10SqB2Av7ulq4zu8yFsLduhBRlTMqxjE0NZmPw6X2OIBZljeUMe4JVEDY7A%2Bu3zv44hLstFMNVqoGffTn5o2eif2FW9KTetbCsconTeAng%2BsdKmVWFtzIIUYtenz21Sv08vu9Ptu9xpEhSt6TDalxVEl4rX5J2CzgJL2qjNXxZ1i%2F0KRAMn%2BqmemkY9i9ufRy3a2umUaPsxzs2hoQ8MGv24Q7ctI%2BuGGFrPpUYA1xjcAcry%2F96lGRx5VwnLw2%2BYvhjAj666RSQCQAAU0%2Fhng2tJJuuhj33p6j2UtB4Njjt3sft42uC9cGIGLae6GSw%2FEqbE%2FO9m6p%2FtASll%2Bw9jjLRF89C%2F%2BqAwlZfxwwY6pgF6U632RBTfPph5TC%2FBqn5N11pqMyrC4EA37JlnvkqZ7W36CVG65%2B6wu9YUZZH5lK9fPhhaa2H6c9qGy94cHzoJapu%2FsE8CwpOygZN4GsnrrFoUj%2FWSs2HB8dkK99KFnDP1uM%2FrxZN8hOxeBVUhTH48gwbgwcdbvhQUbf4pXl306CSCvbWV0qqS3FXzM%2F20l3ezmX89c22bpGCbRnNiKgXgrAFMMF%2Bg&X-Amz-Signature=f1387d87a367789714f6db3b8b02fedac61fa30423be7d4af21f85573dea621b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXR53PK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyQoI9jSBXlXEWC%2BYnRhF2KcnhIbLd93EQ7NtwbCKuKAiADmQPjTi1TJ4kPi2nA%2F1tHXdH1IeNh8FdgEhWb4f8ToCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCfE1bX%2Fcq6oRk%2BxlKtwDT5vO4LXIYAnAm3QxNtnaQ2PDzajWL0WxS%2FLuy6mH0vPmPAneMhEzdvJx9FZMuEvlMX0XpT5O0rexZmhTjXFY2CVLY8w%2FM31DhAewhA1hG5iAFmULRD5RHWLY75%2Bxdf5Yav6fMKlKoGtME4WqK6rB6KnSDipi4Tieln0FKaH0pN2RrhdYfwu1PP98ACUPPJmLOOfy93JXQTJhUuIIbwLS51S4E%2Bv3KrEajObkOKvM%2F7HEktM8Uzet9uDjGa%2FtdGjFT64fm0eQRGUR0VVmtD%2BWsLV2t8FYh10SqB2Av7ulq4zu8yFsLduhBRlTMqxjE0NZmPw6X2OIBZljeUMe4JVEDY7A%2Bu3zv44hLstFMNVqoGffTn5o2eif2FW9KTetbCsconTeAng%2BsdKmVWFtzIIUYtenz21Sv08vu9Ptu9xpEhSt6TDalxVEl4rX5J2CzgJL2qjNXxZ1i%2F0KRAMn%2BqmemkY9i9ufRy3a2umUaPsxzs2hoQ8MGv24Q7ctI%2BuGGFrPpUYA1xjcAcry%2F96lGRx5VwnLw2%2BYvhjAj666RSQCQAAU0%2Fhng2tJJuuhj33p6j2UtB4Njjt3sft42uC9cGIGLae6GSw%2FEqbE%2FO9m6p%2FtASll%2Bw9jjLRF89C%2F%2BqAwlZfxwwY6pgF6U632RBTfPph5TC%2FBqn5N11pqMyrC4EA37JlnvkqZ7W36CVG65%2B6wu9YUZZH5lK9fPhhaa2H6c9qGy94cHzoJapu%2FsE8CwpOygZN4GsnrrFoUj%2FWSs2HB8dkK99KFnDP1uM%2FrxZN8hOxeBVUhTH48gwbgwcdbvhQUbf4pXl306CSCvbWV0qqS3FXzM%2F20l3ezmX89c22bpGCbRnNiKgXgrAFMMF%2Bg&X-Amz-Signature=2a1499f3dc3a53bc8a4c79d03a5bab0d8bca5d110dc94a411557014ce01cf7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
