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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXXCC7Q%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsUWsgb%2F%2FwvYUl29NXOVWnVYY7pLuvxMc4drcXuwdjPAiA%2F%2FlcBi9MWBxjcSRqN22%2BmOVBOQAaiMHSkO5z3A4QR9yr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMdAT09ZWlQ9PfOCZeKtwDvVaZ%2Fa82P0e1%2FrdJtEUiUlPYUeHhVATTNho%2BxkA2zCWKp%2BSvf%2F3EsgSdZl2SWvLQ02%2BFFg%2BL9iX2xNapp9XtFVU1APZj4b5GN3iEkaDgebmv5%2Bbur9NRqlMGHNGExEg2AOIYVMHN8UkIiV65zMB43cA0JySVx%2FdTsJ84fPFrJLhUHgUJ1DiRczx5EvaSLuRYpZJfdJYmEWD6ddzAOZlaUsYv6JGxJ0%2FNqvL7DsN4wSp0Fxh%2BE5f29grP%2BPaschbbafsStmBgR2j7nXbfyhtlSXwQltUZrWXvO0zbwsgoqEtIV5w84PqHW%2BOXOArFqmNMdhENdORjUUvisKg4QB07IGU1gFI6StxAf6g0aoEj8Emlo%2BAvY%2Bmi7bCLIZpzZpiTwPLNkVYQsHY9lX4d6NvQA8jZxViXIdc1aV1hRq8elLXNOVS469vvHB0ADOcjB4BGtJJUyN%2FW4NKrlejZFxgx4orTxGshsNAng2ZEAPF60SIfaZfvd4QZ5WkIm7xyLKydGiXmymeLqvR1KWmWyTH3lZHUB%2FFXs0QMPV411gaYRWSOzRbVT%2FnS6rDio7WmYgwTNl4AqCep7l1%2Bk6FJELNUW1%2FEvetJBhb9aHjbnCp4Q3jvgt3VXJKlV%2FLTuO8wj%2B%2FVvgY6pgErk8lrHyfJf5phFrhjQJBXjVRt3xS%2BKqF%2B1Hkadv6ddP8IbdSWuanJKYfwe%2B7RYvzamDPdcbpK0GH4Z8257ecHJhn1r8PUeDHztfgumPcu3ulQAlJhkxL9F5hi9axLcVk6Cx54CY8zNpfOt%2BLBeP2cIUwp4cPDPAIBFugI%2BjPOnK%2FYolDYH2R6UH04y1sl3Q7MK2VTFPP3hrqcGcYO00AOTCylMU25&X-Amz-Signature=8ffb98667fdd94b49b4c7ce6179438276a51220d3425135ff8073ac8e44ac43b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXXCC7Q%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsUWsgb%2F%2FwvYUl29NXOVWnVYY7pLuvxMc4drcXuwdjPAiA%2F%2FlcBi9MWBxjcSRqN22%2BmOVBOQAaiMHSkO5z3A4QR9yr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMdAT09ZWlQ9PfOCZeKtwDvVaZ%2Fa82P0e1%2FrdJtEUiUlPYUeHhVATTNho%2BxkA2zCWKp%2BSvf%2F3EsgSdZl2SWvLQ02%2BFFg%2BL9iX2xNapp9XtFVU1APZj4b5GN3iEkaDgebmv5%2Bbur9NRqlMGHNGExEg2AOIYVMHN8UkIiV65zMB43cA0JySVx%2FdTsJ84fPFrJLhUHgUJ1DiRczx5EvaSLuRYpZJfdJYmEWD6ddzAOZlaUsYv6JGxJ0%2FNqvL7DsN4wSp0Fxh%2BE5f29grP%2BPaschbbafsStmBgR2j7nXbfyhtlSXwQltUZrWXvO0zbwsgoqEtIV5w84PqHW%2BOXOArFqmNMdhENdORjUUvisKg4QB07IGU1gFI6StxAf6g0aoEj8Emlo%2BAvY%2Bmi7bCLIZpzZpiTwPLNkVYQsHY9lX4d6NvQA8jZxViXIdc1aV1hRq8elLXNOVS469vvHB0ADOcjB4BGtJJUyN%2FW4NKrlejZFxgx4orTxGshsNAng2ZEAPF60SIfaZfvd4QZ5WkIm7xyLKydGiXmymeLqvR1KWmWyTH3lZHUB%2FFXs0QMPV411gaYRWSOzRbVT%2FnS6rDio7WmYgwTNl4AqCep7l1%2Bk6FJELNUW1%2FEvetJBhb9aHjbnCp4Q3jvgt3VXJKlV%2FLTuO8wj%2B%2FVvgY6pgErk8lrHyfJf5phFrhjQJBXjVRt3xS%2BKqF%2B1Hkadv6ddP8IbdSWuanJKYfwe%2B7RYvzamDPdcbpK0GH4Z8257ecHJhn1r8PUeDHztfgumPcu3ulQAlJhkxL9F5hi9axLcVk6Cx54CY8zNpfOt%2BLBeP2cIUwp4cPDPAIBFugI%2BjPOnK%2FYolDYH2R6UH04y1sl3Q7MK2VTFPP3hrqcGcYO00AOTCylMU25&X-Amz-Signature=8d77df00f319234b288df26dee18032836b18ea6575e93676d57ddd5db09f31b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
