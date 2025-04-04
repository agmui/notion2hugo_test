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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPXU324%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFsRClGRcVH7DE4am2DPtu%2Foq7Mh7%2F52wWVRdxerNqSQIgGb5sGDK%2FflDH%2BBPCwyvyHEBA%2FLbfLIYeLWvqTn0jMOEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCcXEd7qDof7t9qCNCrcA9qiEpizRFdZw70De4vEpSVoUSIa1Kfuk8WNKuRnA%2F%2BuIR0P6BGaflQqXBJ%2FD78aBLGeRJV3FWzxIz8p7%2BCCmo4v7xZBCulIsV%2FiSZ68xDxAbwgWSPOjDfoeg9MCzktvFOjDaxqCNjdwimM70vfAh41ZSehwj4WX9fl3LO7ETB7Yi0diqqbZeVTCpRRvoN8ebrbP7v8qSHt4YqS%2BVSr7ABDa9myY%2Bso6oSK3mBOByCGAE0S7gR6NrsYptHkS8DGVqxa5vEJPLiLsDwS8WA2xsf6zG%2Ffkf%2B3sSr3uBWTlwsK0%2Fsi8gZjFueuRq0WWnSBQTiOALs5sDyG2TUWun5MpHOf20EUDfTfPHCAj%2BSf7hhW1Gd2q4yTNC58X8gmT6q8RE7txU6%2F62%2Frs7H2cusQXLL%2Fr0qUN9rIgjXSyBu2sPdEtgjDhAqbL9PBatr84JnNp%2FmpHFRGhxulFS0fZqXnJf4K2RXovR5Rs6gWKkXIBnf1Cxrkd2NePSr7Dsm4QzlZlk4Y42TWbM%2FLcmjUE85cUV6CpO49o3TbEZCs%2ByYrLQDI0aBtXA2kdMQbbxg83IQy%2F9ADWLnN1lN%2BgbxpDzt%2BzIMHkD2ayA4erQ%2F0uuftjtu1Ea3lqDvmLqnFgDgv3MMy4wL8GOqUB%2FsQ%2B1KFYF7aViQamixBh9piW8CguIvN0auhieUCxzslS1zHZEN6Wz4GTSqdh0GL3agfgzWMUAqk8VeyK1dQnf1CgEFbvKsXa1bT6BYhYAhYpPbKg0UKXkcnZ7MevU%2BghJaaU2AL6dnlfpKrcmtGhQ%2BcQ3WnAMz0wSo40gH5HpgIU8WWUHWe242ZVvvtJh%2FtkEmpaXGqF5gZo8Y9%2BIwdxWsmmcZqU&X-Amz-Signature=f7dafe3bf64f8db27a6fe78d29422d66b1a8b7f18d982cacb3613f4820f12286&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPXU324%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFsRClGRcVH7DE4am2DPtu%2Foq7Mh7%2F52wWVRdxerNqSQIgGb5sGDK%2FflDH%2BBPCwyvyHEBA%2FLbfLIYeLWvqTn0jMOEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCcXEd7qDof7t9qCNCrcA9qiEpizRFdZw70De4vEpSVoUSIa1Kfuk8WNKuRnA%2F%2BuIR0P6BGaflQqXBJ%2FD78aBLGeRJV3FWzxIz8p7%2BCCmo4v7xZBCulIsV%2FiSZ68xDxAbwgWSPOjDfoeg9MCzktvFOjDaxqCNjdwimM70vfAh41ZSehwj4WX9fl3LO7ETB7Yi0diqqbZeVTCpRRvoN8ebrbP7v8qSHt4YqS%2BVSr7ABDa9myY%2Bso6oSK3mBOByCGAE0S7gR6NrsYptHkS8DGVqxa5vEJPLiLsDwS8WA2xsf6zG%2Ffkf%2B3sSr3uBWTlwsK0%2Fsi8gZjFueuRq0WWnSBQTiOALs5sDyG2TUWun5MpHOf20EUDfTfPHCAj%2BSf7hhW1Gd2q4yTNC58X8gmT6q8RE7txU6%2F62%2Frs7H2cusQXLL%2Fr0qUN9rIgjXSyBu2sPdEtgjDhAqbL9PBatr84JnNp%2FmpHFRGhxulFS0fZqXnJf4K2RXovR5Rs6gWKkXIBnf1Cxrkd2NePSr7Dsm4QzlZlk4Y42TWbM%2FLcmjUE85cUV6CpO49o3TbEZCs%2ByYrLQDI0aBtXA2kdMQbbxg83IQy%2F9ADWLnN1lN%2BgbxpDzt%2BzIMHkD2ayA4erQ%2F0uuftjtu1Ea3lqDvmLqnFgDgv3MMy4wL8GOqUB%2FsQ%2B1KFYF7aViQamixBh9piW8CguIvN0auhieUCxzslS1zHZEN6Wz4GTSqdh0GL3agfgzWMUAqk8VeyK1dQnf1CgEFbvKsXa1bT6BYhYAhYpPbKg0UKXkcnZ7MevU%2BghJaaU2AL6dnlfpKrcmtGhQ%2BcQ3WnAMz0wSo40gH5HpgIU8WWUHWe242ZVvvtJh%2FtkEmpaXGqF5gZo8Y9%2BIwdxWsmmcZqU&X-Amz-Signature=bc41f3321a29cc06efff43838d77a210a1c5250ec5363c720681cb24f5ec6d78&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
