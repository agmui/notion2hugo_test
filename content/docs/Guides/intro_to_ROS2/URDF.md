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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPQFOJ5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCID%2Ff%2BqlU0sAhWgy8zx0X0zb6kVefLox1xq4NcA67urfEAiARJBxVXT92MmPLjzcGegJGmuk0DQ4f1ONJjmVGaPrOMCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMBFCIGo7%2F5OfhJ4X0KtwDce4HKcauYaoBA6u%2FGvk%2FgMJxf44VabxQxJ3Po5zR3VDtb%2Frox9JX%2B3AKJCbUAao%2ByL8pOdFtUENR2I8NbhnF0UrSM57okKKL50h4Bv464z%2BTw%2Bj%2FtaFuI2QRmrmcpLjdJKJRykYU94F%2FoDtJ0bFyQs4hmBO0a%2BSyzCCst57uXSaTxF7XLixzCiZ6GO07vlzfx6bOJRo2g%2BnmOaFfe8Ijviix2y6%2FAbN9KNHZ05jfEP2FhAKLM52vzs7tgtN5IapAIunYtz4Arlc1EUs6JrnztBzNvpzY5YfjDLZRQaJCqvhTxrhbToNOOwXLlM6q2w8UX5mh0nl%2BCY3HjPpvaKFTaWgNh7JuA9VXgoqzFMLx27h1bIvanDfGNrOaHL7PPDlO6QMaPRUWminp2m1l5kNTmd7uTT9IsZzJ7EwlgyGyatI9uHPZZi1cG8T%2FfxXeywkbQ2o621b8fE8UJMxrMfHuG3FWEHLCMwnCWYlLB0e9X10LrsbXZc61asaCo5wp%2BFWChevjqa5WJA8%2FuRNznjVxrRkYmhko8%2FKAMDPPXrYJJ%2FJxd9B9vpltvTU%2BHvDtsYL8wKMyca%2Bbptwjf%2B4%2Bk4EruCN5BIX6ynBwpCFAAIYynJHGODT3loZv7jPfUhIw8rSfvwY6pgGlJryhE1tmrmRgN9AH2C8hSbIin%2BWdbDh1Rw4R5Dt8ku2n4KhZHGAyK%2FZNtesx3457M%2F%2BTgjUFur6587vZSspELEwfr5CpfxZy0cw2n7NePi%2B1s3vzLVAFQjLN3IwgJJ7vTgUlwcCyyecPo9wFEaxfwTjEuiJK8XcChVTCKSPHUYCdrtlS1iYz7m%2BmcFupTpOMg5rbKwveOCHHe7UCpWEjgVtRsIs7&X-Amz-Signature=5f212470159d6649ad28c5d02e3ac39cf9e0ee89eb544d5875ae5e3ad6879e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPQFOJ5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCID%2Ff%2BqlU0sAhWgy8zx0X0zb6kVefLox1xq4NcA67urfEAiARJBxVXT92MmPLjzcGegJGmuk0DQ4f1ONJjmVGaPrOMCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMBFCIGo7%2F5OfhJ4X0KtwDce4HKcauYaoBA6u%2FGvk%2FgMJxf44VabxQxJ3Po5zR3VDtb%2Frox9JX%2B3AKJCbUAao%2ByL8pOdFtUENR2I8NbhnF0UrSM57okKKL50h4Bv464z%2BTw%2Bj%2FtaFuI2QRmrmcpLjdJKJRykYU94F%2FoDtJ0bFyQs4hmBO0a%2BSyzCCst57uXSaTxF7XLixzCiZ6GO07vlzfx6bOJRo2g%2BnmOaFfe8Ijviix2y6%2FAbN9KNHZ05jfEP2FhAKLM52vzs7tgtN5IapAIunYtz4Arlc1EUs6JrnztBzNvpzY5YfjDLZRQaJCqvhTxrhbToNOOwXLlM6q2w8UX5mh0nl%2BCY3HjPpvaKFTaWgNh7JuA9VXgoqzFMLx27h1bIvanDfGNrOaHL7PPDlO6QMaPRUWminp2m1l5kNTmd7uTT9IsZzJ7EwlgyGyatI9uHPZZi1cG8T%2FfxXeywkbQ2o621b8fE8UJMxrMfHuG3FWEHLCMwnCWYlLB0e9X10LrsbXZc61asaCo5wp%2BFWChevjqa5WJA8%2FuRNznjVxrRkYmhko8%2FKAMDPPXrYJJ%2FJxd9B9vpltvTU%2BHvDtsYL8wKMyca%2Bbptwjf%2B4%2Bk4EruCN5BIX6ynBwpCFAAIYynJHGODT3loZv7jPfUhIw8rSfvwY6pgGlJryhE1tmrmRgN9AH2C8hSbIin%2BWdbDh1Rw4R5Dt8ku2n4KhZHGAyK%2FZNtesx3457M%2F%2BTgjUFur6587vZSspELEwfr5CpfxZy0cw2n7NePi%2B1s3vzLVAFQjLN3IwgJJ7vTgUlwcCyyecPo9wFEaxfwTjEuiJK8XcChVTCKSPHUYCdrtlS1iYz7m%2BmcFupTpOMg5rbKwveOCHHe7UCpWEjgVtRsIs7&X-Amz-Signature=02404a03b821837f0f07f2b02d26d08a86bf966cb09fe750fdf89693c653af92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
