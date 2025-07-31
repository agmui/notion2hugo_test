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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7JLTTHO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF%2F9v1N%2F86W5mc81s4bgfyn0%2BniGk8J1ei4z77kq9QoAiBGoKXn%2F4v%2Bz0dre%2BGjcX0NqxXMWzIbHG9eX1a39prNCSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxa6I%2BVekRk05mfnyKtwDzcGHaBfxscCrUeqhkMFLXBl1Ct9sI0x6wl6JVDtiliOm88X3V%2BWH%2FmcujTZSq0uwH%2BzY8ZjRIJHLyf01GgXMwOQvA%2FDYZ6meRGBCKRO5Jrjnoaxp3al%2BS9XtvMGW8W4vL9iTcozCBY0166Jd55sjDPva0CVQ%2FTQt9xoUzzJ3TVDBcOha03xyg9WIl%2F5wVs9r5CdUKTov8v29gpgYyR4AltSYkF%2FIKizPc27qhedwAJ7fUbuBC93ev4V9NAYLVQxpqYSId2y5vXUmkDDz1r%2FkrOYDLQFwuNTvoz9e91BBl4W5EmSzW6YNoQ9xjZOSki1xL%2FfxKU%2F4b3xh1xdcw%2FwrhA33llsa3iUJDsCteHMBnUj326YuNlVoTBotJfydEIxUaAD0J6JO5rJbBp2iGClhFu0zOCYZVMK5Y9Kpx%2Bt68hscFq5eteeePsz346vYwt1MdpbsQy2azcut1lAD%2FykXmSPy0ycfbIQmKH4WhYC7pd51iUMAhxWlYcYeiH%2FM3AZcNByaQSTEMgPSjpwZB5C%2B%2FrTjU5aHNA2xK2HCmFgK1%2Bjwqt2eyQ4anmscwersnRm7lmmdzEMZ%2BPNCNs6Kgm9ABoh7e7f8m6qVV3%2BvlbQ1dYzTgkOOakxbDbZsEaMwqpGuxAY6pgHWs2Qqeotz80%2BUj4R%2BfeuCS16aowwcC9g%2FdJtsl40YQV5DwVz5VYmh4HPnUqp5w4bUpJKUh5aw%2B5rVnjGZ9kbnyWFU%2B%2BL6R9lEvcOzVnzQ7AMdMCo2eHV7mHf7tIy%2BhIyDfVRbk%2BAJSehKxUqHbcZMg63YICuOznzPIDxZalPMyNvO9958uhtDDJb%2FVoCGSTdcPSvgCQxIAmraYdf9%2Ft572%2Fwibcop&X-Amz-Signature=29afd6bd2b169194cb388bec2515837970b98fd9db3fec843bb1d04a136a70fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7JLTTHO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF%2F9v1N%2F86W5mc81s4bgfyn0%2BniGk8J1ei4z77kq9QoAiBGoKXn%2F4v%2Bz0dre%2BGjcX0NqxXMWzIbHG9eX1a39prNCSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxa6I%2BVekRk05mfnyKtwDzcGHaBfxscCrUeqhkMFLXBl1Ct9sI0x6wl6JVDtiliOm88X3V%2BWH%2FmcujTZSq0uwH%2BzY8ZjRIJHLyf01GgXMwOQvA%2FDYZ6meRGBCKRO5Jrjnoaxp3al%2BS9XtvMGW8W4vL9iTcozCBY0166Jd55sjDPva0CVQ%2FTQt9xoUzzJ3TVDBcOha03xyg9WIl%2F5wVs9r5CdUKTov8v29gpgYyR4AltSYkF%2FIKizPc27qhedwAJ7fUbuBC93ev4V9NAYLVQxpqYSId2y5vXUmkDDz1r%2FkrOYDLQFwuNTvoz9e91BBl4W5EmSzW6YNoQ9xjZOSki1xL%2FfxKU%2F4b3xh1xdcw%2FwrhA33llsa3iUJDsCteHMBnUj326YuNlVoTBotJfydEIxUaAD0J6JO5rJbBp2iGClhFu0zOCYZVMK5Y9Kpx%2Bt68hscFq5eteeePsz346vYwt1MdpbsQy2azcut1lAD%2FykXmSPy0ycfbIQmKH4WhYC7pd51iUMAhxWlYcYeiH%2FM3AZcNByaQSTEMgPSjpwZB5C%2B%2FrTjU5aHNA2xK2HCmFgK1%2Bjwqt2eyQ4anmscwersnRm7lmmdzEMZ%2BPNCNs6Kgm9ABoh7e7f8m6qVV3%2BvlbQ1dYzTgkOOakxbDbZsEaMwqpGuxAY6pgHWs2Qqeotz80%2BUj4R%2BfeuCS16aowwcC9g%2FdJtsl40YQV5DwVz5VYmh4HPnUqp5w4bUpJKUh5aw%2B5rVnjGZ9kbnyWFU%2B%2BL6R9lEvcOzVnzQ7AMdMCo2eHV7mHf7tIy%2BhIyDfVRbk%2BAJSehKxUqHbcZMg63YICuOznzPIDxZalPMyNvO9958uhtDDJb%2FVoCGSTdcPSvgCQxIAmraYdf9%2Ft572%2Fwibcop&X-Amz-Signature=0e330b4838030f3a29bc92ef41b70b15707e4920f24aad781a342dc5a168bb1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
