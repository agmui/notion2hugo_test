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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIM62SDX%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDHecW1nmwR4T9M1hxb1bxtuiR3WNYpd2c9Chwkatr6LwIgbwoEt3dn1tWO3cCwPqV8bLXTbio7yy%2BCsphpkL7zZskqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDaIvDByuj91RnJpSrcAx2ZG%2FmiAud%2F9N%2FdzhBzYOH3QOCJigv%2BeWsoyy8YCwzkLM8FniWEBwsODmbP%2FdKaxYooyYvyKp6WpXIh5GXqeCAaZUnCO9yS9aAInVnfMHHz7d0xr9TTAX%2FCx6F%2BNkFD4d%2FtZ7YpNzM%2FHbotMLrienhsx%2Bra3ZKzyQKbTiaK2vV%2BLyXhVA4gV9k%2F9H1B%2FmLEbvcb1ooxw2gPTMmFVfcnEjv2V%2FVxFQrD%2B8Lvi2HH7qYzWrTW6%2FxvVFS4pfQvWiR%2Fe8IQMhCd6%2F%2FnfnNHZIM4uwW1qRcM%2B1Eq%2FgGq4uGQZIsU7lbxY89OTCyK2vKlrEGeHZeokESZxhpOp701DePCck8kcoQCkqXLVjIalHvNtbo0zshThBlQ4X57sXq8T5ebmo6sd6P714VhRz8Ib6wuX%2BO6XEQGVaEu%2BuhdBVR47aqcRD6mi6TVhZcz0zqwBksSv%2BHPQt4BdR5f4hE9b7fjOoQGqUw71UPG%2BsKdWtXHKdjH1%2Bd13fAFa%2FiwS3wd6FDiIK%2FtMlGv5CopXZS%2FXPWx5Z4sOjk8aijkHSbkU8V7eeB%2B%2B86A2aXc3gFW75J8AQzX3g9%2F7%2FHuwqnll49imo8u2QCEZKYX9CWkWA2Fyje0P9bx1pHJsY3gObxOIfrTMI2UqcIGOqUBfn5HFwhY7BHVG%2Fg%2F1SCOJPLmikYh5%2BF9XobBst1EPAUzQXnktwvj2W%2B502BbSXenpAA3AADN4lHE%2FLMvICkbSsq5u8YWib6gG6hdu%2FhotjRZdWQuKRzEfS3ul6nbuea66kZDefybcUJNuB8HHQ05R%2FjAHXtnHQyC8CSZIdu8DqoHOnP3cr9Kr4gH6nxfleTnRGd6gqbVTLYL5OXoJiFFsQ4rNc3q&X-Amz-Signature=943f6674fadc535e31dead03178f1538116f8d8b56b7faba9b086a11a3d74c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIM62SDX%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDHecW1nmwR4T9M1hxb1bxtuiR3WNYpd2c9Chwkatr6LwIgbwoEt3dn1tWO3cCwPqV8bLXTbio7yy%2BCsphpkL7zZskqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDaIvDByuj91RnJpSrcAx2ZG%2FmiAud%2F9N%2FdzhBzYOH3QOCJigv%2BeWsoyy8YCwzkLM8FniWEBwsODmbP%2FdKaxYooyYvyKp6WpXIh5GXqeCAaZUnCO9yS9aAInVnfMHHz7d0xr9TTAX%2FCx6F%2BNkFD4d%2FtZ7YpNzM%2FHbotMLrienhsx%2Bra3ZKzyQKbTiaK2vV%2BLyXhVA4gV9k%2F9H1B%2FmLEbvcb1ooxw2gPTMmFVfcnEjv2V%2FVxFQrD%2B8Lvi2HH7qYzWrTW6%2FxvVFS4pfQvWiR%2Fe8IQMhCd6%2F%2FnfnNHZIM4uwW1qRcM%2B1Eq%2FgGq4uGQZIsU7lbxY89OTCyK2vKlrEGeHZeokESZxhpOp701DePCck8kcoQCkqXLVjIalHvNtbo0zshThBlQ4X57sXq8T5ebmo6sd6P714VhRz8Ib6wuX%2BO6XEQGVaEu%2BuhdBVR47aqcRD6mi6TVhZcz0zqwBksSv%2BHPQt4BdR5f4hE9b7fjOoQGqUw71UPG%2BsKdWtXHKdjH1%2Bd13fAFa%2FiwS3wd6FDiIK%2FtMlGv5CopXZS%2FXPWx5Z4sOjk8aijkHSbkU8V7eeB%2B%2B86A2aXc3gFW75J8AQzX3g9%2F7%2FHuwqnll49imo8u2QCEZKYX9CWkWA2Fyje0P9bx1pHJsY3gObxOIfrTMI2UqcIGOqUBfn5HFwhY7BHVG%2Fg%2F1SCOJPLmikYh5%2BF9XobBst1EPAUzQXnktwvj2W%2B502BbSXenpAA3AADN4lHE%2FLMvICkbSsq5u8YWib6gG6hdu%2FhotjRZdWQuKRzEfS3ul6nbuea66kZDefybcUJNuB8HHQ05R%2FjAHXtnHQyC8CSZIdu8DqoHOnP3cr9Kr4gH6nxfleTnRGd6gqbVTLYL5OXoJiFFsQ4rNc3q&X-Amz-Signature=6e61a0cc3e11177dfd489cd5c889b10e895cc76135f8448d8f81f75132875a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
