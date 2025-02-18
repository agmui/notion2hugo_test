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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIYH3PL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDHm4egi17sW9txvos9zFM4YLzvpO%2FZEOJnndbuzts%2FlwIgNWMAU%2FhBO%2Bli2QWYAIKoddlOTHaHqz%2FN7j7k1pryQKoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBhrAgT4PO7QvS2GSrcA2yThRqw6DjGwzlryUVxte8ynpTRmuC%2BX1aQPSU7u4lmDcftjf3mpg6ALcsCBccthGjaCryEVV2kYqxK0egV24PetbqR1zcMzkgrc0p3yus0fiImBDsmRx9hyuoZK83Ippvt54o99LbbpIm8BqS6Dnt1N5ufd75Gpf9TNVShRWxu6c5HI7R4Oqei7Rungi8u5uuY8a5g1evEiVhqLKAI8trhGixqnAsx%2Bn%2Fb1tgmcWGMn7QFjx9bPUDPgylFsgrC797ubVmxQv7f%2B00i8%2Fq%2BTF3gpUWi6dqD2np%2Bq8pPuPBViwMBKh3RAOPMFV9G7A8BpTdRMbkTPkbIr9mq8OU%2Bz3SNiAxGXLllTOFIvRLtROG2swC5a8BqpZc2qv0rlLgVWNyTFCIPCtKNLxXeN%2FW7NL0CQw4e7tdLe7Ylf%2B%2BnqdIxfziNda1LsjUSX0tOAihoYP%2F68zG8IaVDMSqmg0BXD8BfIPewGZ%2BfyWZQmqNMwhQPacQvkeM1929ev3F%2F6W%2Fzm8AaIIu9WS7PoQbyOMQfCjieo5%2FjmeTai9jJL5pKVm216Hx0CjLFpSjXEYiCDo81PozQDzyLY%2BCuBI4P3vt10oQZKIEf%2F2iXD%2BjBUILHEXZhp0ViyZLfGu0otdmzMMba070GOqUBDvPhavL4U%2F0vKYi14a7Igms7XINk6hQb5QM0gOHCKjplAm2R5UFFTjU0fwGUlRHMeN7Ly%2BdnRgEC47Ogz7e9SpmbtmqcLSrBIGXc0a7LkfEOlCbS%2BHvFxrMNc6Q9r8rYKwKZZAbP%2FSi21DQ10ocRF%2Bydgdd1Hk46wtaR5eIqWngQEzRGxQNyPxGupFZqPaqHYhx6VsjI8Azx%2BiCEaijbklSad%2FVC&X-Amz-Signature=a49fa852f7ef78a0e1f7aef672c711b3f5020894db92bc05bda86f97634b355e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIYH3PL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDHm4egi17sW9txvos9zFM4YLzvpO%2FZEOJnndbuzts%2FlwIgNWMAU%2FhBO%2Bli2QWYAIKoddlOTHaHqz%2FN7j7k1pryQKoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBhrAgT4PO7QvS2GSrcA2yThRqw6DjGwzlryUVxte8ynpTRmuC%2BX1aQPSU7u4lmDcftjf3mpg6ALcsCBccthGjaCryEVV2kYqxK0egV24PetbqR1zcMzkgrc0p3yus0fiImBDsmRx9hyuoZK83Ippvt54o99LbbpIm8BqS6Dnt1N5ufd75Gpf9TNVShRWxu6c5HI7R4Oqei7Rungi8u5uuY8a5g1evEiVhqLKAI8trhGixqnAsx%2Bn%2Fb1tgmcWGMn7QFjx9bPUDPgylFsgrC797ubVmxQv7f%2B00i8%2Fq%2BTF3gpUWi6dqD2np%2Bq8pPuPBViwMBKh3RAOPMFV9G7A8BpTdRMbkTPkbIr9mq8OU%2Bz3SNiAxGXLllTOFIvRLtROG2swC5a8BqpZc2qv0rlLgVWNyTFCIPCtKNLxXeN%2FW7NL0CQw4e7tdLe7Ylf%2B%2BnqdIxfziNda1LsjUSX0tOAihoYP%2F68zG8IaVDMSqmg0BXD8BfIPewGZ%2BfyWZQmqNMwhQPacQvkeM1929ev3F%2F6W%2Fzm8AaIIu9WS7PoQbyOMQfCjieo5%2FjmeTai9jJL5pKVm216Hx0CjLFpSjXEYiCDo81PozQDzyLY%2BCuBI4P3vt10oQZKIEf%2F2iXD%2BjBUILHEXZhp0ViyZLfGu0otdmzMMba070GOqUBDvPhavL4U%2F0vKYi14a7Igms7XINk6hQb5QM0gOHCKjplAm2R5UFFTjU0fwGUlRHMeN7Ly%2BdnRgEC47Ogz7e9SpmbtmqcLSrBIGXc0a7LkfEOlCbS%2BHvFxrMNc6Q9r8rYKwKZZAbP%2FSi21DQ10ocRF%2Bydgdd1Hk46wtaR5eIqWngQEzRGxQNyPxGupFZqPaqHYhx6VsjI8Azx%2BiCEaijbklSad%2FVC&X-Amz-Signature=f7c0d522f3f2e98a0befd3161c95f4bf94efecf2e1073d1977a776fedf9b9eef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
