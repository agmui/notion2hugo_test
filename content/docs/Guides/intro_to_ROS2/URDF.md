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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVFBOWI%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaoAS%2FXJ21xFR%2FMA0jC6NsfQN2QF5iud7aHPuRkMvw2gIhAOJs1GnWzW%2FXDarYqS%2BOjWXFc2xzl5mzwDGtMDMKxHSvKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8jkCnELaXSTOKCqkq3AMg8hOhs3fi4xRFwimZQIPhN5uHJsXtMH5YQymqlFBJmvI7ACNgBrkVwBnBBcQ%2BTHIr5oQ9u68KYL4hCQ1VacU%2Fs4hwgk%2FzMRFZdBKXRYTk6k14wuvP9QbjM7KPg0jFu1k8vJJRRKYeElFqkop4rurRb3u26rDvKyHQpPX9Zx20Wq7q0bwnzJESmF52Uv6nb%2F2QdaB2I3MihdWP1sy6fzicg4nh5%2FOe8fMtiJFaubZ5GxylhX5Vw%2FK4ijrph%2Bcxvyd7B38mlxOn6LLe2BcdLIpgGQyOffBh53e4US8nJFCGDzBg%2F2FkNx86IkEYBNN7tyWMKfCBjAkQVGydRCKPGgHUHjpY5SjUJEEA93MTYJhf9VTlN%2Bl93wa1KP3S43PcD9JAv%2FuUdcm0DEcfzkFJNZV6V6heOZdakwIA2mCToOyJcc1m4KS8kcDuqK%2BkiVKBPeoMk%2FJawpxE70H1ozg6aouT2wn3jA9NCw%2B%2BREt%2BAQihS9CSqcDvb%2BVmYC%2FsVUwvA4AgijPkcH3yI66hlci159mkHs7uey7JtRa%2F9giry%2BhkZiZoCESoFMafpCtDXFYzCCnR9BVWtN7gWoo88UbjkwJ7M%2BTxF5sRbhb1n0UCA5WFC8ok2%2BlGiwBaQ5IHkTCjyqHCBjqkAal%2F7%2FU68RNnHOrvPJAB%2FFqssTrg70eemIeF2BSCMdHy8J3MSQLfkT1i%2FogfDrSuFV7jMg%2FIJm4z3U1QUoHlVQcqVroTvOZkf2SHLucH2DK41K1weMY1XR0f9hbHES9TmX21%2FbpWH%2F9ika3QUVnFlzePcQxeZto0ngRuK5gB8%2FX%2Fn5kYfM3CdrahwJ3%2BUcBCIDcWpsUeddaIPNH4W2SV22rq57E%2F&X-Amz-Signature=aff37cb939d8366b2070971538a3eaf125ca873e497ea1123d322e13c058ef94&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVFBOWI%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaoAS%2FXJ21xFR%2FMA0jC6NsfQN2QF5iud7aHPuRkMvw2gIhAOJs1GnWzW%2FXDarYqS%2BOjWXFc2xzl5mzwDGtMDMKxHSvKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8jkCnELaXSTOKCqkq3AMg8hOhs3fi4xRFwimZQIPhN5uHJsXtMH5YQymqlFBJmvI7ACNgBrkVwBnBBcQ%2BTHIr5oQ9u68KYL4hCQ1VacU%2Fs4hwgk%2FzMRFZdBKXRYTk6k14wuvP9QbjM7KPg0jFu1k8vJJRRKYeElFqkop4rurRb3u26rDvKyHQpPX9Zx20Wq7q0bwnzJESmF52Uv6nb%2F2QdaB2I3MihdWP1sy6fzicg4nh5%2FOe8fMtiJFaubZ5GxylhX5Vw%2FK4ijrph%2Bcxvyd7B38mlxOn6LLe2BcdLIpgGQyOffBh53e4US8nJFCGDzBg%2F2FkNx86IkEYBNN7tyWMKfCBjAkQVGydRCKPGgHUHjpY5SjUJEEA93MTYJhf9VTlN%2Bl93wa1KP3S43PcD9JAv%2FuUdcm0DEcfzkFJNZV6V6heOZdakwIA2mCToOyJcc1m4KS8kcDuqK%2BkiVKBPeoMk%2FJawpxE70H1ozg6aouT2wn3jA9NCw%2B%2BREt%2BAQihS9CSqcDvb%2BVmYC%2FsVUwvA4AgijPkcH3yI66hlci159mkHs7uey7JtRa%2F9giry%2BhkZiZoCESoFMafpCtDXFYzCCnR9BVWtN7gWoo88UbjkwJ7M%2BTxF5sRbhb1n0UCA5WFC8ok2%2BlGiwBaQ5IHkTCjyqHCBjqkAal%2F7%2FU68RNnHOrvPJAB%2FFqssTrg70eemIeF2BSCMdHy8J3MSQLfkT1i%2FogfDrSuFV7jMg%2FIJm4z3U1QUoHlVQcqVroTvOZkf2SHLucH2DK41K1weMY1XR0f9hbHES9TmX21%2FbpWH%2F9ika3QUVnFlzePcQxeZto0ngRuK5gB8%2FX%2Fn5kYfM3CdrahwJ3%2BUcBCIDcWpsUeddaIPNH4W2SV22rq57E%2F&X-Amz-Signature=1af6c10d7e9177465cea1e15b10b94735c6c31b7c3b969a10a770a03eca83636&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
