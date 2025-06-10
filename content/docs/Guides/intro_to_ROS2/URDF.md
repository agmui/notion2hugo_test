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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTBBMSWD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2FfDxCMlJ%2Br0LoXBqC6fV9%2BMByyzHGmPMpiHDY5vW%2BAiBHnqvAHzDdOWs%2BL%2F%2BpN3EQuYMZGzuIzm3QwRYBgqjAACqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Bh44kd7DOGNLnEjKtwDFjkAF6Pv%2FQgkSeiOax8mXGnk5kfUZk8MhNffwc9%2BsQ6hzwwuKU2VsAJtl6OtaFbPSqaM2dxopQSCf2u3Ih0rNES669lCKaWbzQfZSLEstKCjLQ4C0%2FzZPcZvbV7URTMJ4v1cUZAWpaxMlKPLf5DvQ%2B8gJ42lz3Uc3ppTh8vkfmyJ%2FhkoY6jeb%2BIUs6c5NGpTwgfxGaVMDf%2BrWG4XJwISXk1pFoYD2k6lVhKoDLQ6hdSLiGwRDajp07eSBWgtOvGBw1SxZpQ1qt0pIr3W5Ez9qOz5mkv%2Bb%2BP0NOX4yrOfdWh5Gmqxingld%2FvTvB5xzmIXH4OzcAjs5Hg6rYlrunaQYpQfd6fnrF0CrlzP2yQ5XSUS7035w5AVt%2FkMJo7toXplL9vluwjHrYkQFPhjOUoiTTtQejwEorXlmEac50OsdvDXw9EOLl7v3A5JA4%2FP2%2Fd9O3HzE5sxSi9GwWzrz2K6rDGKWj7hlDO%2Fklh27kvT4ByhjSWYazaHh2dS7iUn02Nf2WavDrtEQey7ucaYe%2BxCp0U0%2F%2BogrMU%2F670vv5eOG5BK7ZaEW5wa7vxJodtvfquBEgIXfEe5aCTpORDy8Ob8UCZiJkanNnRdwDe%2ByCRIbusxcVKmnAOvn658hHQwid%2BfwgY6pgGq%2FczRCK3PMUksUlXalBPjlps2lgwVGWzZF5r6mIhnYM3GRQYvoC52jntp1Go256d9Q1rJTJyAxbseq29j3%2F3MC6BnCwD4UDhjl%2Ff4h7R%2F5EwUE3662v83pCNqDY5RbfQfBplP%2BACMTx1n4tuAlNbO5DJ95FB2FkX%2FJcOPh1zKaGKEZVexkrjTTWnekEiifSwKfRhUwUKzmGMREXZT4EJ%2FZ%2F8K7v%2Fu&X-Amz-Signature=1cfe26dd31bbcc76c9e367a8ff9e2c54ab6b50d84754cc78159a09a1569ffa38&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTBBMSWD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2FfDxCMlJ%2Br0LoXBqC6fV9%2BMByyzHGmPMpiHDY5vW%2BAiBHnqvAHzDdOWs%2BL%2F%2BpN3EQuYMZGzuIzm3QwRYBgqjAACqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Bh44kd7DOGNLnEjKtwDFjkAF6Pv%2FQgkSeiOax8mXGnk5kfUZk8MhNffwc9%2BsQ6hzwwuKU2VsAJtl6OtaFbPSqaM2dxopQSCf2u3Ih0rNES669lCKaWbzQfZSLEstKCjLQ4C0%2FzZPcZvbV7URTMJ4v1cUZAWpaxMlKPLf5DvQ%2B8gJ42lz3Uc3ppTh8vkfmyJ%2FhkoY6jeb%2BIUs6c5NGpTwgfxGaVMDf%2BrWG4XJwISXk1pFoYD2k6lVhKoDLQ6hdSLiGwRDajp07eSBWgtOvGBw1SxZpQ1qt0pIr3W5Ez9qOz5mkv%2Bb%2BP0NOX4yrOfdWh5Gmqxingld%2FvTvB5xzmIXH4OzcAjs5Hg6rYlrunaQYpQfd6fnrF0CrlzP2yQ5XSUS7035w5AVt%2FkMJo7toXplL9vluwjHrYkQFPhjOUoiTTtQejwEorXlmEac50OsdvDXw9EOLl7v3A5JA4%2FP2%2Fd9O3HzE5sxSi9GwWzrz2K6rDGKWj7hlDO%2Fklh27kvT4ByhjSWYazaHh2dS7iUn02Nf2WavDrtEQey7ucaYe%2BxCp0U0%2F%2BogrMU%2F670vv5eOG5BK7ZaEW5wa7vxJodtvfquBEgIXfEe5aCTpORDy8Ob8UCZiJkanNnRdwDe%2ByCRIbusxcVKmnAOvn658hHQwid%2BfwgY6pgGq%2FczRCK3PMUksUlXalBPjlps2lgwVGWzZF5r6mIhnYM3GRQYvoC52jntp1Go256d9Q1rJTJyAxbseq29j3%2F3MC6BnCwD4UDhjl%2Ff4h7R%2F5EwUE3662v83pCNqDY5RbfQfBplP%2BACMTx1n4tuAlNbO5DJ95FB2FkX%2FJcOPh1zKaGKEZVexkrjTTWnekEiifSwKfRhUwUKzmGMREXZT4EJ%2FZ%2F8K7v%2Fu&X-Amz-Signature=6ce8a3c4b2c0c29564dfdcc4565856cda71e39be4ba340a4a2454296a4c093d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
