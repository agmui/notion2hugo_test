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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNG4SIIJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD5P7uhpJvB8b3nKShYNqJ0xMW1pkAPsLGLzOjp%2FISk9wIhAPfxMERSnt%2FLi5uU4D8yK%2BCYzOPNHuiQmfCVsj4fMecHKv8DCC4QABoMNjM3NDIzMTgzODA1IgyH8VEHclCH6zTfXQEq3AMZwML%2BeQ%2BBmEAeBIjXjHyEu9fqrolENaQbgb6692NCMJyE4dkJ8CBhx83R0JLUKTYsk%2B71c7%2FuAOGDTlGHF5Crv%2BYR9%2BszOvk1wEtTiVanK184kpPSGbI9VVdHa9Qj%2FCG%2BtnOOQQcPp25BKjHcK8nUBiuz4xzE0fAJPL1Vlpcr3L1ELkpUjDE2EAPuNyMNLx0egpE1jlamuyXzh5BjY1KlNbFglP%2BcqFoYLkyKwnH6TwEosseJonQndwDh781Ev%2Bzg%2B%2FjyIkM79Vs9vWmkx9SvJCFQsJft4SiCv8taRjrQSFaFWpMj2M%2FieTYUsuzG%2BKpLm6chWMdcWYZjFkSd6xZJITG%2F3DHyrRMa5XWgFEgAHyz475kula90r0%2FAUlcp2gdyZEy5UGomRTIMx5Uxu88vFmSmgrQwQdW3qtUV0776Bhr7IPDt8qaMaCh0dQrgrWmf2HkIhXpzEy2P6AXUKIBmIF73z306M8cS3YEb6meHVXWIfgjTC50hr4OivMDF8bKN%2F9%2BeIbAXOmkDWpUT5P7PBzqVxv9G4NKJXJ1%2BN9XI4pvAjfO0JdLyp5SPSLkZccm8UM80bsnWELM30u3nOSp4cxKPznvmNDJ8h6KOT3m%2BlXM2ZUTrFk5rnbizLDDQhdTDBjqkAbnc7YniK0gHrV8ErM%2F9wLedvG3lVOe2fZb9UZUBwOkGJ0zAOu1UnC4s4yeR5w8TyX3tMqUd6ikcwqg95QC59qfj2KjRxRJy9%2F%2BqTZ0v2bv2Ivi38ENaZDbHxCDsp7q8gjXysLu1z1yXkDo8%2B5EPHvvO4rDxQ4ZKEqPOI7bW1%2Byh74K3Big%2B%2BBZeHpNX66W4bv1AN0b4Z%2BM3sXM0cMVz5OdKZbXL&X-Amz-Signature=cc0af860f5cec716dfde41d2f6ab9cdb44780624627c2b42633e7e7d06074c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNG4SIIJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD5P7uhpJvB8b3nKShYNqJ0xMW1pkAPsLGLzOjp%2FISk9wIhAPfxMERSnt%2FLi5uU4D8yK%2BCYzOPNHuiQmfCVsj4fMecHKv8DCC4QABoMNjM3NDIzMTgzODA1IgyH8VEHclCH6zTfXQEq3AMZwML%2BeQ%2BBmEAeBIjXjHyEu9fqrolENaQbgb6692NCMJyE4dkJ8CBhx83R0JLUKTYsk%2B71c7%2FuAOGDTlGHF5Crv%2BYR9%2BszOvk1wEtTiVanK184kpPSGbI9VVdHa9Qj%2FCG%2BtnOOQQcPp25BKjHcK8nUBiuz4xzE0fAJPL1Vlpcr3L1ELkpUjDE2EAPuNyMNLx0egpE1jlamuyXzh5BjY1KlNbFglP%2BcqFoYLkyKwnH6TwEosseJonQndwDh781Ev%2Bzg%2B%2FjyIkM79Vs9vWmkx9SvJCFQsJft4SiCv8taRjrQSFaFWpMj2M%2FieTYUsuzG%2BKpLm6chWMdcWYZjFkSd6xZJITG%2F3DHyrRMa5XWgFEgAHyz475kula90r0%2FAUlcp2gdyZEy5UGomRTIMx5Uxu88vFmSmgrQwQdW3qtUV0776Bhr7IPDt8qaMaCh0dQrgrWmf2HkIhXpzEy2P6AXUKIBmIF73z306M8cS3YEb6meHVXWIfgjTC50hr4OivMDF8bKN%2F9%2BeIbAXOmkDWpUT5P7PBzqVxv9G4NKJXJ1%2BN9XI4pvAjfO0JdLyp5SPSLkZccm8UM80bsnWELM30u3nOSp4cxKPznvmNDJ8h6KOT3m%2BlXM2ZUTrFk5rnbizLDDQhdTDBjqkAbnc7YniK0gHrV8ErM%2F9wLedvG3lVOe2fZb9UZUBwOkGJ0zAOu1UnC4s4yeR5w8TyX3tMqUd6ikcwqg95QC59qfj2KjRxRJy9%2F%2BqTZ0v2bv2Ivi38ENaZDbHxCDsp7q8gjXysLu1z1yXkDo8%2B5EPHvvO4rDxQ4ZKEqPOI7bW1%2Byh74K3Big%2B%2BBZeHpNX66W4bv1AN0b4Z%2BM3sXM0cMVz5OdKZbXL&X-Amz-Signature=5ad6eccc659561fc4b039484af43f0162fe1e6a8e02cffc510c3c081c39b9bde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
