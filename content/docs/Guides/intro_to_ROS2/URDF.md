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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FW72XOO%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCkKHo8EHhy%2BiA9YPX%2F0D2m8ZT0hlPmslcxvMca%2FYOhggIhAOQ6KSqxx8zYHq0IEnrepI0tnl9bToyx44pzKBqlFDvAKv8DCEgQABoMNjM3NDIzMTgzODA1IgzZfIxUJKiOi%2FO0Wxkq3AM%2BkRQSNen1HnAhgcBjKpHDDV5KKaTCkY3amSQk2WqrAAwBR1oZ5Ahs9EbSgCCk%2Bir%2FYzlkJWxDbgLLLS6goffST6uxYImjwevrvxfs6D%2BQWOD8K2NIVHq15yy7Gysgov%2FxlRta8aCcaCJtqq%2FAf3AdEHZqVZsAQ2%2BPk5CGyJJf3fkmO6fScdVet8KiIXbtwQoV8vbAwIzTX6gpz2OhmSOB95jWQKxnl2VslADxSMZVBjIgclLspr%2F4Q4A6kvYd2TLt1lcyV8RzI4kVHglI8EDPgnmTbbfkFHLCED9Ei0FjYxq1g4mCgoJY5DAWj9yeWY9BMUgCilWG7oXtwvsNqnGwBtZ23aS%2FEqMER%2FrGS4RCPtMJEbnrbcQmn9fDP4wENPXITFBQZ%2B%2FXgVBZqbTyKsgFiL1MMDVrdt%2BjbF6x18zTi5U2TX6c%2Fam3QqG4qWVrMZdLxogzOIDeY4ts8xWpLs2bN2M4zO6xn%2FG%2BrI14hTPxEz9D4x25Dvf1NnvEUEXQHs6KtVqP5X5v6JNyjGryA%2Fyfai%2FuD1cM6J443aYKRCWeum8%2B8pB5n2No3VOcXfDhTJkTGrUJsjDYv%2FpX2WrPY0ujNT5XCe2VKsi0yp%2FNfuSgcmi04g%2BQ%2FvefSenIQzCFgo69BjqkAX5ve0gF2kCHMOOtCN1M2CDxONEXKubppeGQruxE7cm3Gy%2FAZiEY63VyqJhhPiy9BOwuLlVejfQHhMfOhJ6pZxsbTvWG8DZXBzVewqO6pNe5Z8twGnXsRLvtonLhQRIsDx9IlasMgOFRNLcMhsVTw2u53cHDJllFILfdu%2Bh0vfbM39pJKADR2b9JS8iVw3JjXLEJ817PaMbCDIs2XUMGhmd4DSb1&X-Amz-Signature=9f8403b128f94f9a328840f17023b0e7b8f02e719a7ef9aaa9afb525ea8b5120&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FW72XOO%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCkKHo8EHhy%2BiA9YPX%2F0D2m8ZT0hlPmslcxvMca%2FYOhggIhAOQ6KSqxx8zYHq0IEnrepI0tnl9bToyx44pzKBqlFDvAKv8DCEgQABoMNjM3NDIzMTgzODA1IgzZfIxUJKiOi%2FO0Wxkq3AM%2BkRQSNen1HnAhgcBjKpHDDV5KKaTCkY3amSQk2WqrAAwBR1oZ5Ahs9EbSgCCk%2Bir%2FYzlkJWxDbgLLLS6goffST6uxYImjwevrvxfs6D%2BQWOD8K2NIVHq15yy7Gysgov%2FxlRta8aCcaCJtqq%2FAf3AdEHZqVZsAQ2%2BPk5CGyJJf3fkmO6fScdVet8KiIXbtwQoV8vbAwIzTX6gpz2OhmSOB95jWQKxnl2VslADxSMZVBjIgclLspr%2F4Q4A6kvYd2TLt1lcyV8RzI4kVHglI8EDPgnmTbbfkFHLCED9Ei0FjYxq1g4mCgoJY5DAWj9yeWY9BMUgCilWG7oXtwvsNqnGwBtZ23aS%2FEqMER%2FrGS4RCPtMJEbnrbcQmn9fDP4wENPXITFBQZ%2B%2FXgVBZqbTyKsgFiL1MMDVrdt%2BjbF6x18zTi5U2TX6c%2Fam3QqG4qWVrMZdLxogzOIDeY4ts8xWpLs2bN2M4zO6xn%2FG%2BrI14hTPxEz9D4x25Dvf1NnvEUEXQHs6KtVqP5X5v6JNyjGryA%2Fyfai%2FuD1cM6J443aYKRCWeum8%2B8pB5n2No3VOcXfDhTJkTGrUJsjDYv%2FpX2WrPY0ujNT5XCe2VKsi0yp%2FNfuSgcmi04g%2BQ%2FvefSenIQzCFgo69BjqkAX5ve0gF2kCHMOOtCN1M2CDxONEXKubppeGQruxE7cm3Gy%2FAZiEY63VyqJhhPiy9BOwuLlVejfQHhMfOhJ6pZxsbTvWG8DZXBzVewqO6pNe5Z8twGnXsRLvtonLhQRIsDx9IlasMgOFRNLcMhsVTw2u53cHDJllFILfdu%2Bh0vfbM39pJKADR2b9JS8iVw3JjXLEJ817PaMbCDIs2XUMGhmd4DSb1&X-Amz-Signature=6af68b7cc97a01a34cb303ca131515cb81dc961cb594a60386b9aa18f61c36b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
