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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM2GM42J%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAUH7uFzivPlNkntBoBv1cRHeDBZWFLVUorl5WVnSH1UAiBXRFch%2F%2BRNskjw2r4gCjSMAwXeyD0z%2FDQll7u8ouWuFiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcG9KUmWNKQWxii3oKtwDnp5TU4EM0HtWQtcZDKAkub2gp%2FevU59TeiUQfP4%2BuW%2BnysBqjjfvipncvGGaV4Llo%2BXgXpbunPKzKaWdHQBP1CIzD7CD%2F3j16t%2B6pYoJiK%2BRt5yF%2F22rAI52aB%2BmtbCAD%2FTHSpl1XVcV4ud3y0IqzQidL4hUOAxAlV8Lk0EtQJrAMEv3udxTgJaQ6zTRVnywtH1uwp9EEl%2BXf1AUwTbF%2FcoJz2I4hHwM%2BrEjAt0V2UgMmM3E8S1jzYysba0RYakRQytzgEF6xooP9yd1RsK%2BSyCjSeSMlxcdmks4HWs8aWxxOOrElVQqFzFmzB9uS0OWgnvbe2VVmxA6bgJbh1oyIYcHkqb52GQ3a1%2BSgZzZe6GdB8JefUlnw2sM%2BeSiq6zOSo7Bif0Dh0AfrN1M71m2oEHhjTozFJDmG6PxBO7ncFTkz9wfNooR0cUfSrGglJ4nts2YGG2W0fl7FYrrcBu4IHrnTfL8yE8Y7AlIYSU2aw6wB04Djj8IwVLGPp%2FNTHNyRbfPk0ntr9DC9KkjGgvjw5jiJWThjN7A0iX3pnDMCe9E2PQaCP8rfAY19sD7YhQ4xolaGkRH7Q4WQbQuJpEjaeJ%2FH%2FiX7%2F6Fn7MYA6cfpjZvH2EXK3o93fryqvow8oTxvgY6pgGMqug3EE7xTKXgRKmtDntYb4EGA9vDWyTW6Ppz8kR1trbC4wGhAwUXs1%2FzgBI6AM6H2uY8U7aYw4dRRbovUt8CPHcdZPJEsvmiZ%2FuVPxQkXLJsTJGBGCsaENH2j6A831lqHFHDcWQatBGfphySdbwvr2n3YApCB48U0EiP65F%2BKufqWt6NIKEIvYuHDbUyNVGmK6%2BmXY8s1Vw1dXIyyTcbud2T%2BSW0&X-Amz-Signature=050a66d940dec3aa0c00bcf2416f47bb7ccb1bac0a9aafab8b985da509bc2014&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM2GM42J%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAUH7uFzivPlNkntBoBv1cRHeDBZWFLVUorl5WVnSH1UAiBXRFch%2F%2BRNskjw2r4gCjSMAwXeyD0z%2FDQll7u8ouWuFiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcG9KUmWNKQWxii3oKtwDnp5TU4EM0HtWQtcZDKAkub2gp%2FevU59TeiUQfP4%2BuW%2BnysBqjjfvipncvGGaV4Llo%2BXgXpbunPKzKaWdHQBP1CIzD7CD%2F3j16t%2B6pYoJiK%2BRt5yF%2F22rAI52aB%2BmtbCAD%2FTHSpl1XVcV4ud3y0IqzQidL4hUOAxAlV8Lk0EtQJrAMEv3udxTgJaQ6zTRVnywtH1uwp9EEl%2BXf1AUwTbF%2FcoJz2I4hHwM%2BrEjAt0V2UgMmM3E8S1jzYysba0RYakRQytzgEF6xooP9yd1RsK%2BSyCjSeSMlxcdmks4HWs8aWxxOOrElVQqFzFmzB9uS0OWgnvbe2VVmxA6bgJbh1oyIYcHkqb52GQ3a1%2BSgZzZe6GdB8JefUlnw2sM%2BeSiq6zOSo7Bif0Dh0AfrN1M71m2oEHhjTozFJDmG6PxBO7ncFTkz9wfNooR0cUfSrGglJ4nts2YGG2W0fl7FYrrcBu4IHrnTfL8yE8Y7AlIYSU2aw6wB04Djj8IwVLGPp%2FNTHNyRbfPk0ntr9DC9KkjGgvjw5jiJWThjN7A0iX3pnDMCe9E2PQaCP8rfAY19sD7YhQ4xolaGkRH7Q4WQbQuJpEjaeJ%2FH%2FiX7%2F6Fn7MYA6cfpjZvH2EXK3o93fryqvow8oTxvgY6pgGMqug3EE7xTKXgRKmtDntYb4EGA9vDWyTW6Ppz8kR1trbC4wGhAwUXs1%2FzgBI6AM6H2uY8U7aYw4dRRbovUt8CPHcdZPJEsvmiZ%2FuVPxQkXLJsTJGBGCsaENH2j6A831lqHFHDcWQatBGfphySdbwvr2n3YApCB48U0EiP65F%2BKufqWt6NIKEIvYuHDbUyNVGmK6%2BmXY8s1Vw1dXIyyTcbud2T%2BSW0&X-Amz-Signature=6af31616a752c36120b6c7db4e4e39d04a7085cb18a25d76d72145fa5d61c7ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
