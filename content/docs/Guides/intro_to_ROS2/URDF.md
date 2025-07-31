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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3TKWVGS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfXr78%2F05APlkIQVl6%2BLLMkX2yiu7cO9hBALB4SHNWCAiAhaVly3qe8CRCIxxmKAMnbw8zABR4LwaRJqRvEND9KaSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP13HGLG8Rr%2Fk9MLdKtwDwFCMznhCOB1nJyRyiEMdB6WHZfqwnrrC1ObhNqtDADP%2B5c94EX8lqslSVY%2B6jmS3QNYywKhLE%2B8JMQ3%2F1oUpbCwEF6Lv2oCsWfodq%2FI2WWEOXdozh8HFN%2B%2F9OQ%2BcpAra40xz6DndXkxgSK8owPiVFq%2F9mycgievSgByZlpjdl4nKnI5NAdlzZUeaRBRS5F6o3m0xigK7O7hy0TyV9PMS86uEc7yJA40ZMC9NXOnmUimYroekRXg63uzNcIUmaFg9rylVYwALOIn4OZEdHBMV2X3fmzBNQflhOJ4qQsYW%2B61fUt0pCZQCgdvn%2B2DIeWBNdfkCLTSYr3PsANThrZLARvYRKt%2BTSsoHHRMmSuz0z%2FUcmwn4EI5PZSjlSA%2BSNPE6eZ%2FY9HtPzrM5WYYN3UVseVL1whLCaBGp%2BbtqlNWkbY0jRnzh51%2FMvIBeESs7K7VQ2Rnuf2Ea316knz8qkwAEuX0NKmR0N%2Fvktb3UL2BRoIWiCD57WGU4R2Nrk3gjRCWL7eWdjaWQvZfHyW%2Fw%2BxYcmKaAP6PG0vkKKWzTf7Kb8lh%2BVFNoS5PjeFffelt2%2BaHv%2FgbNxKlAcZ3qtKj3%2F4ZYsaLitl2BIO%2FmuPsSIpIIVJ9cbA7uOXSoiEoehNYwlqavxAY6pgE4JrQ2xeaIe1LmExIC0yOy8kWEktwwHooENbAqoaiLYxjMRizJtS5tt2b58kwq%2FWCAX64wl2hZdP2UIWZVj0rgosVgJYO5H3QgPaArQVU49W6c02b6NHK%2FAHNiGHoabj6I8faTeuOJy7Ac1SdnZLO1rvK0j3nd%2Bgzu9g1XTGyJ4qIvwGgKQRkJzxKRHIPb4JWMQIga%2FVr0VI8qtpZ%2FX%2B7QSrftJ52T&X-Amz-Signature=6113e56f8c99b357c962eecef633bfc21f9cea4fb110af5fdbf1d944eff51007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3TKWVGS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfXr78%2F05APlkIQVl6%2BLLMkX2yiu7cO9hBALB4SHNWCAiAhaVly3qe8CRCIxxmKAMnbw8zABR4LwaRJqRvEND9KaSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP13HGLG8Rr%2Fk9MLdKtwDwFCMznhCOB1nJyRyiEMdB6WHZfqwnrrC1ObhNqtDADP%2B5c94EX8lqslSVY%2B6jmS3QNYywKhLE%2B8JMQ3%2F1oUpbCwEF6Lv2oCsWfodq%2FI2WWEOXdozh8HFN%2B%2F9OQ%2BcpAra40xz6DndXkxgSK8owPiVFq%2F9mycgievSgByZlpjdl4nKnI5NAdlzZUeaRBRS5F6o3m0xigK7O7hy0TyV9PMS86uEc7yJA40ZMC9NXOnmUimYroekRXg63uzNcIUmaFg9rylVYwALOIn4OZEdHBMV2X3fmzBNQflhOJ4qQsYW%2B61fUt0pCZQCgdvn%2B2DIeWBNdfkCLTSYr3PsANThrZLARvYRKt%2BTSsoHHRMmSuz0z%2FUcmwn4EI5PZSjlSA%2BSNPE6eZ%2FY9HtPzrM5WYYN3UVseVL1whLCaBGp%2BbtqlNWkbY0jRnzh51%2FMvIBeESs7K7VQ2Rnuf2Ea316knz8qkwAEuX0NKmR0N%2Fvktb3UL2BRoIWiCD57WGU4R2Nrk3gjRCWL7eWdjaWQvZfHyW%2Fw%2BxYcmKaAP6PG0vkKKWzTf7Kb8lh%2BVFNoS5PjeFffelt2%2BaHv%2FgbNxKlAcZ3qtKj3%2F4ZYsaLitl2BIO%2FmuPsSIpIIVJ9cbA7uOXSoiEoehNYwlqavxAY6pgE4JrQ2xeaIe1LmExIC0yOy8kWEktwwHooENbAqoaiLYxjMRizJtS5tt2b58kwq%2FWCAX64wl2hZdP2UIWZVj0rgosVgJYO5H3QgPaArQVU49W6c02b6NHK%2FAHNiGHoabj6I8faTeuOJy7Ac1SdnZLO1rvK0j3nd%2Bgzu9g1XTGyJ4qIvwGgKQRkJzxKRHIPb4JWMQIga%2FVr0VI8qtpZ%2FX%2B7QSrftJ52T&X-Amz-Signature=983754a76418e085e9471ba67850264899ce367d15e145f8dd3f5f821a52a815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
