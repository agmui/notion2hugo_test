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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTJUPIRC%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOlJRP%2FUqjxV%2BSVwuTkpaIJQ5YAER1usv%2BwXYF0QmuAAiBf0oJNWNGZ6RxiWZBheyJhtkRqQx%2FXjKjE%2B9hJeD34Nyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMdOTeynTT%2Bm36NfuPKtwD%2F22m%2BYPpQDY%2Fg%2B%2BWQL2tHb4IK4BhbZ7o2VQuWOvc64SrYb6TlZl7wZiSqn7NLJ0yJ7ZjGajFAte70HtlSBBSVptU5tg37DFbYPdKxBWUlGgOhu8tYIk5u%2FEiZp09wDlT%2FrtOaYZDThrEF3fhieJPzEN6q2ZyaOikj4jeByjWxzIpiKlbT7FZ0namHSDiGPh7vDxXJKywEy4VMGg2oRipTXH3sxDJvXJ6N4zBmqdlbrkPOd3cP2OB3LCSDlyKepNdUSizP2x6DlBLnqGsEZcEzCaCjnW6x1lcL1reCCEKMwufgI3d7L%2BRdrp2MmmZdgF16EOXXyBbgML71coWEs0J80Izuvn42vKkZv2k0YUGsyg%2BN%2Bj3ljW3C58ReT8HZ%2FZY70%2FHGrsgDnPYI6PfnKse5ctwRgkpAnKsDjfezUIdBxoEhAtpK5AYl4075SC2Pd4xcv8M5Sm7cyO4Zgngx06mV45WvrBYqz5%2BKVHkdbB68GpA2g4tkAWLc%2BOrEK%2FcZ%2B8j8izmzNP1ObzKY3LqRb%2BvmQ5RI%2BFrLHJnfaZsIftfGg2ECZmN3MTSIi5jKH2je5JgsxAXRAoxUWuFghyIpWfaruGDkH9dU6AJp48oleCAO7EvWqwjd0W%2FatGwvCQwxZWSwgY6pgGHGw3ojWM5zM%2FhzZVW30uGT%2FYW4qv5y6r3qsJK51zcjSeKnPCV30SK2%2BY444a%2FIsDFi3YA190CtqQXAWKnZf6R6dpHClSFk%2BhW9G7I2WHCHIQYAQZUUqZJIGx9wZwKHsPoLT%2BJOPHQJr2pwz3Njg4sstcoIvAz0qyyyfdwJ4kas6hRVT0nPF9T%2FnQcnDOwZGfnpajS9XIxRn6AtgyL9e48tuDL3Umy&X-Amz-Signature=7859089fb488b8d0064447d8bafafdd0c320f4a29243522d72bb15711b815ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTJUPIRC%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOlJRP%2FUqjxV%2BSVwuTkpaIJQ5YAER1usv%2BwXYF0QmuAAiBf0oJNWNGZ6RxiWZBheyJhtkRqQx%2FXjKjE%2B9hJeD34Nyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMdOTeynTT%2Bm36NfuPKtwD%2F22m%2BYPpQDY%2Fg%2B%2BWQL2tHb4IK4BhbZ7o2VQuWOvc64SrYb6TlZl7wZiSqn7NLJ0yJ7ZjGajFAte70HtlSBBSVptU5tg37DFbYPdKxBWUlGgOhu8tYIk5u%2FEiZp09wDlT%2FrtOaYZDThrEF3fhieJPzEN6q2ZyaOikj4jeByjWxzIpiKlbT7FZ0namHSDiGPh7vDxXJKywEy4VMGg2oRipTXH3sxDJvXJ6N4zBmqdlbrkPOd3cP2OB3LCSDlyKepNdUSizP2x6DlBLnqGsEZcEzCaCjnW6x1lcL1reCCEKMwufgI3d7L%2BRdrp2MmmZdgF16EOXXyBbgML71coWEs0J80Izuvn42vKkZv2k0YUGsyg%2BN%2Bj3ljW3C58ReT8HZ%2FZY70%2FHGrsgDnPYI6PfnKse5ctwRgkpAnKsDjfezUIdBxoEhAtpK5AYl4075SC2Pd4xcv8M5Sm7cyO4Zgngx06mV45WvrBYqz5%2BKVHkdbB68GpA2g4tkAWLc%2BOrEK%2FcZ%2B8j8izmzNP1ObzKY3LqRb%2BvmQ5RI%2BFrLHJnfaZsIftfGg2ECZmN3MTSIi5jKH2je5JgsxAXRAoxUWuFghyIpWfaruGDkH9dU6AJp48oleCAO7EvWqwjd0W%2FatGwvCQwxZWSwgY6pgGHGw3ojWM5zM%2FhzZVW30uGT%2FYW4qv5y6r3qsJK51zcjSeKnPCV30SK2%2BY444a%2FIsDFi3YA190CtqQXAWKnZf6R6dpHClSFk%2BhW9G7I2WHCHIQYAQZUUqZJIGx9wZwKHsPoLT%2BJOPHQJr2pwz3Njg4sstcoIvAz0qyyyfdwJ4kas6hRVT0nPF9T%2FnQcnDOwZGfnpajS9XIxRn6AtgyL9e48tuDL3Umy&X-Amz-Signature=fa47ddf698fa4f03415366249cb7954ca5481fc9e55623699a0f6e5af8eff516&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
