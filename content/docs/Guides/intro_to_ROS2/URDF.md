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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B35LXF2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgYRpbmoiB1ZU4fWx8jWy%2FL8HwII%2ByMREsjxo%2FkXQQqAiB6sauzViM%2FOwNAYU7UQ2RdwiNBPw%2FA0JNUZEa%2ByfH1bSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCgsEnR4CHovSyx%2BSKtwDVAoQtBVIs7p%2BU3xRqIOc3GfgDUK%2B360Dd5MOI%2BHPe4pOWES8HsY6QHO1SHF0%2FkD2kCn6FMbDEmQdjxKJ%2FgU4NP2mkq%2F1FEDE6dElEB9%2Bu2rvT32vItd4zOZ8Vd39Q1sRDMcvRrerURsbcFRzW%2FMbrwlNolp2C%2FXWhUzSCywYCnfInRtkMJlgoO5GEQngvEoc3zwhoQOQKhoYtugA0e%2Bn1HJOog18EMcJCmD1AN9QD9eigTUvNRFAVZKQoelMraiTbYIHrAg64Hp4DnddQjCpVlx4hsBEYSKefhF1nfwwVAQa2%2Ba5lY2u5E3JKQfbYCzCQ978lLEiYgyGbWxg1AyMiFEZZK4%2B27NNKpWGeMrGHH5K2Fnb1oecMqVNi1b6q2%2Fefrc4ZozatPLolrDbdnABQNB0BW288DULfG7s7X2uQ6Dlh16FDPH2bs5LfJFKHCbfX0%2BqzQghrQidfWnjM9zjLzBmQ65lTgij3UiOt8GxaoxjoZLp9MDRk0wV5Rv7xvKHkb9rBlS%2BvTcXPpjkFeTV%2FYMcqg4PF9NOhxweBhYfOw2t7wVJDEBp9dB%2Fi5jZz2pgjwtxY6nn9fewjoVf4W07xe8oSJu89e8%2FiAbph7CJfNyw0HV0yele7sq7hrww2OypwQY6pgGjVaGbTspy763c6jCx%2FFqDSyxkox9QvPJdQGdE%2FNfdS6kgJIsd4NjrvoDCoKLoYiwJrhNhUsnF7K%2FHiRtYBp1DXW%2FvYQRYTudzG2ohDYcOn3NmgTDnxb6ZJHHjRdjRQ0qiL8DXs9gc09gPe%2FkDLdO%2F5aqBmKG8%2Bi5gVJD%2BlUHZ%2BE%2F%2FswReXaI%2FmLGGUILjDgSk2LydLJom08MfImVhjmhLcyQbZ9%2F2&X-Amz-Signature=f9c2149f2b3315f43e9d625e74501c2564dbcfb2717f25ac4a6875842726e57e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B35LXF2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgYRpbmoiB1ZU4fWx8jWy%2FL8HwII%2ByMREsjxo%2FkXQQqAiB6sauzViM%2FOwNAYU7UQ2RdwiNBPw%2FA0JNUZEa%2ByfH1bSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCgsEnR4CHovSyx%2BSKtwDVAoQtBVIs7p%2BU3xRqIOc3GfgDUK%2B360Dd5MOI%2BHPe4pOWES8HsY6QHO1SHF0%2FkD2kCn6FMbDEmQdjxKJ%2FgU4NP2mkq%2F1FEDE6dElEB9%2Bu2rvT32vItd4zOZ8Vd39Q1sRDMcvRrerURsbcFRzW%2FMbrwlNolp2C%2FXWhUzSCywYCnfInRtkMJlgoO5GEQngvEoc3zwhoQOQKhoYtugA0e%2Bn1HJOog18EMcJCmD1AN9QD9eigTUvNRFAVZKQoelMraiTbYIHrAg64Hp4DnddQjCpVlx4hsBEYSKefhF1nfwwVAQa2%2Ba5lY2u5E3JKQfbYCzCQ978lLEiYgyGbWxg1AyMiFEZZK4%2B27NNKpWGeMrGHH5K2Fnb1oecMqVNi1b6q2%2Fefrc4ZozatPLolrDbdnABQNB0BW288DULfG7s7X2uQ6Dlh16FDPH2bs5LfJFKHCbfX0%2BqzQghrQidfWnjM9zjLzBmQ65lTgij3UiOt8GxaoxjoZLp9MDRk0wV5Rv7xvKHkb9rBlS%2BvTcXPpjkFeTV%2FYMcqg4PF9NOhxweBhYfOw2t7wVJDEBp9dB%2Fi5jZz2pgjwtxY6nn9fewjoVf4W07xe8oSJu89e8%2FiAbph7CJfNyw0HV0yele7sq7hrww2OypwQY6pgGjVaGbTspy763c6jCx%2FFqDSyxkox9QvPJdQGdE%2FNfdS6kgJIsd4NjrvoDCoKLoYiwJrhNhUsnF7K%2FHiRtYBp1DXW%2FvYQRYTudzG2ohDYcOn3NmgTDnxb6ZJHHjRdjRQ0qiL8DXs9gc09gPe%2FkDLdO%2F5aqBmKG8%2Bi5gVJD%2BlUHZ%2BE%2F%2FswReXaI%2FmLGGUILjDgSk2LydLJom08MfImVhjmhLcyQbZ9%2F2&X-Amz-Signature=fe3aea9911b8d0c5dac55c820d0d13cbfe16926f66785c979d91ae8840533762&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
