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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHVVQJZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUcYNEsHz2LXGQ1TAv0hdrixwuqacfMMYPJaUN4ZQw9AiEA6PcUtnR651zxG%2FWm07%2Bugv5VU22FSlE6SY2Z2FIcV1Eq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEJmTu%2F2s%2Bu9SSafDSrcA1gbyvUmBy4SIjBlRzAUPwDhRgKOyCqUuWaRUHtUgHX%2FR92uN2dwEt08IS71oTENqrih%2BjV73je7hyZWquaCjqvn2%2BkG9wrI6iRAyPHqFXkOw7lmgDHY7Ci8GUDxz3v%2BabFapxzIIo54SrMICxduTdKJ4kfYT1c5VN%2BAn35tfD7PIoBxhWFd0SGu6OHJS2WEZJ%2By3mBoFavCjm88DwAYoGrO1SU%2FtLt9H%2BmY8YPjUVZO6BnnreXfIYaXy%2BMGwWcJr3sBh0ZmaNhIcUPxKVixCGZpW5NpHlQict9DYEHARMwi7hNiIcES%2Bmj8zsQFCnzQg9bfIYsyldz0YEaU7E81V85JG1YqhtZOdb6ODHUZwIzyMjwOJDOwl9baWWfnKl552pN0L8O33gjZl33pAEK3JsncGPoTZ4r6EKZ7b2610ewLkRtILSFNVuKJ1pI%2BrrnwgqflWWttyI6zIx6Q25obDSjRbbqYhx4RAcE9xiQVihEvlf1gJazEPBcQjOit4e%2F5fabLwU4ki8Pm1%2FNY8PsmV1jVjhjjUVJA%2BEHxp7JAoaTjxEP%2FgB3%2BLvfT0B1v4SX6MZq%2FpQBYd7rUOWibss4MtYEuhUpCnIBFBSoaO%2B3hcCjAj5USFwn94vbQz8OFMLHf%2F78GOqUBajl3I4v3Cq%2BND5OkCShqrAwPCCMPq6vm2djB0Fjdc0hDZyGYQTDEmVDWQEY5ez5NaNKyZhaQrdPYNXlbJnTmG3u8GiAGkmudBPQqvYUafJm%2BSBL%2BX0W6WvNcbj2qr5JKhRx%2BkABzyjn7AHNURjJgvmDhc0w2aTy1RyeI%2BdfqD%2Fzv0k8Ej2AnBr97V41Xa12mQ0uG2XQeGfCgTnQrZmnG6JS8La0U&X-Amz-Signature=a2dfee2dc0d418efcd2aec734deb3625d09bbd6e1783f0e131ae785d09f93c82&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHVVQJZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUcYNEsHz2LXGQ1TAv0hdrixwuqacfMMYPJaUN4ZQw9AiEA6PcUtnR651zxG%2FWm07%2Bugv5VU22FSlE6SY2Z2FIcV1Eq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEJmTu%2F2s%2Bu9SSafDSrcA1gbyvUmBy4SIjBlRzAUPwDhRgKOyCqUuWaRUHtUgHX%2FR92uN2dwEt08IS71oTENqrih%2BjV73je7hyZWquaCjqvn2%2BkG9wrI6iRAyPHqFXkOw7lmgDHY7Ci8GUDxz3v%2BabFapxzIIo54SrMICxduTdKJ4kfYT1c5VN%2BAn35tfD7PIoBxhWFd0SGu6OHJS2WEZJ%2By3mBoFavCjm88DwAYoGrO1SU%2FtLt9H%2BmY8YPjUVZO6BnnreXfIYaXy%2BMGwWcJr3sBh0ZmaNhIcUPxKVixCGZpW5NpHlQict9DYEHARMwi7hNiIcES%2Bmj8zsQFCnzQg9bfIYsyldz0YEaU7E81V85JG1YqhtZOdb6ODHUZwIzyMjwOJDOwl9baWWfnKl552pN0L8O33gjZl33pAEK3JsncGPoTZ4r6EKZ7b2610ewLkRtILSFNVuKJ1pI%2BrrnwgqflWWttyI6zIx6Q25obDSjRbbqYhx4RAcE9xiQVihEvlf1gJazEPBcQjOit4e%2F5fabLwU4ki8Pm1%2FNY8PsmV1jVjhjjUVJA%2BEHxp7JAoaTjxEP%2FgB3%2BLvfT0B1v4SX6MZq%2FpQBYd7rUOWibss4MtYEuhUpCnIBFBSoaO%2B3hcCjAj5USFwn94vbQz8OFMLHf%2F78GOqUBajl3I4v3Cq%2BND5OkCShqrAwPCCMPq6vm2djB0Fjdc0hDZyGYQTDEmVDWQEY5ez5NaNKyZhaQrdPYNXlbJnTmG3u8GiAGkmudBPQqvYUafJm%2BSBL%2BX0W6WvNcbj2qr5JKhRx%2BkABzyjn7AHNURjJgvmDhc0w2aTy1RyeI%2BdfqD%2Fzv0k8Ej2AnBr97V41Xa12mQ0uG2XQeGfCgTnQrZmnG6JS8La0U&X-Amz-Signature=e8994d9d1846b0c1ed29687c459de86fd8904ad27ad94135dad86510f3884fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
