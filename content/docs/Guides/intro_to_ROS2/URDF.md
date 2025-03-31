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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F4IAQEC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHaiFrX4DIh%2FwFLOEdVRQFO2ukqy2MXn%2B5ND4dZRQeLxAiBBFs1ViltvDr9KRA%2F7cLjHfdh6UG8d%2B9t%2BXlW6QtsKUCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNKGkpB7iSHDKc2DKtwDCVqUdKeidm5svkehD3sxelCMk9oaVaEz6P3xQ1kKIxYjTlVykHFH5YetJG2t4J1GNUvSd0PFre1a4FH1rZwRk4YPIcDJ2LS54Zs7xxvbhYTD0zhNRAOIgRh3SObbNCkMV%2BCrQCzHveE7NQ3S1tXRKZwYB9M%2B8BHKu4wrx%2B0fYEp72jxYXHcjL2DchZeQVWCbZMxModeajh8A3CLJ5Lh1D1WczA5jqHH0Fria812wzOdvP2JGJzF4IizmdrjZUa0HTsnWr3Zrf5OZNh6dZbuNCLuGNpKq8P3x6Ni2O6XC0%2BDlViDxIh0AkaCNQGsPEgU6B3n1xLQ%2Fwigx877IyTxxGC5OlpkwPrQBUCOC0q4ZAQ3xruiIXmcobc9A9AmjG4jJ8l5Dfb%2FstdEsnGYohkQZql6hhl3fjJsMcXiCbLAs%2BAoq2pGeF9RG3%2BNph6MPnAB4yFPWiZyi1XiLmfbJrBh4GELQw7Jl88tZ6D6TzwulgJDhxgJ4bKV%2Fqa7sfoPQDH6J9ae0QADAbf4575OHBlizuN8RFh4AOJKtv2PRd1L3IAnD2THe%2FFYm3eQjLg3J%2BTfcaUkAFPsNLYmGM6P1mvSkwhGApyi8WRvYy7VPBYgtdjWtqZyR1AM7w%2B2Sfj4w%2BbirvwY6pgEheYwEqmI9FLcAjgYJmp7HeTBC67DCXC2AVwdbTnk5ZsFn5se3u0FOGm4AvIdy7%2F5UBT9XMPNBhvmHqH4dUZOEmdoeDljD%2Bzz731CN5r6OoLRL%2BBbhcKufZw6oK75GNPvHSpwjUo4Cm9mNInX3UNILPr7SfED4qCjT3upbvn5Zl5gFjRH%2Bfh2xNnpzJFJe7eAA1yruqmqS2wyQEfLspbb63QFfbzsC&X-Amz-Signature=4e4b0e05c2ed3696be269446f4637ba9c47dd5836cb1b7cdcfe98bfdcfb6a510&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F4IAQEC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHaiFrX4DIh%2FwFLOEdVRQFO2ukqy2MXn%2B5ND4dZRQeLxAiBBFs1ViltvDr9KRA%2F7cLjHfdh6UG8d%2B9t%2BXlW6QtsKUCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNKGkpB7iSHDKc2DKtwDCVqUdKeidm5svkehD3sxelCMk9oaVaEz6P3xQ1kKIxYjTlVykHFH5YetJG2t4J1GNUvSd0PFre1a4FH1rZwRk4YPIcDJ2LS54Zs7xxvbhYTD0zhNRAOIgRh3SObbNCkMV%2BCrQCzHveE7NQ3S1tXRKZwYB9M%2B8BHKu4wrx%2B0fYEp72jxYXHcjL2DchZeQVWCbZMxModeajh8A3CLJ5Lh1D1WczA5jqHH0Fria812wzOdvP2JGJzF4IizmdrjZUa0HTsnWr3Zrf5OZNh6dZbuNCLuGNpKq8P3x6Ni2O6XC0%2BDlViDxIh0AkaCNQGsPEgU6B3n1xLQ%2Fwigx877IyTxxGC5OlpkwPrQBUCOC0q4ZAQ3xruiIXmcobc9A9AmjG4jJ8l5Dfb%2FstdEsnGYohkQZql6hhl3fjJsMcXiCbLAs%2BAoq2pGeF9RG3%2BNph6MPnAB4yFPWiZyi1XiLmfbJrBh4GELQw7Jl88tZ6D6TzwulgJDhxgJ4bKV%2Fqa7sfoPQDH6J9ae0QADAbf4575OHBlizuN8RFh4AOJKtv2PRd1L3IAnD2THe%2FFYm3eQjLg3J%2BTfcaUkAFPsNLYmGM6P1mvSkwhGApyi8WRvYy7VPBYgtdjWtqZyR1AM7w%2B2Sfj4w%2BbirvwY6pgEheYwEqmI9FLcAjgYJmp7HeTBC67DCXC2AVwdbTnk5ZsFn5se3u0FOGm4AvIdy7%2F5UBT9XMPNBhvmHqH4dUZOEmdoeDljD%2Bzz731CN5r6OoLRL%2BBbhcKufZw6oK75GNPvHSpwjUo4Cm9mNInX3UNILPr7SfED4qCjT3upbvn5Zl5gFjRH%2Bfh2xNnpzJFJe7eAA1yruqmqS2wyQEfLspbb63QFfbzsC&X-Amz-Signature=18e8f4e145dc7c166c77bd6a3fee5a497f2dbf661b1e53826f8f3bd2390a6d89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
