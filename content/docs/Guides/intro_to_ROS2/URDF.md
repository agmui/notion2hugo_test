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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USULRKBW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoBUkFu%2BvIYyyoSELxqiZcZnit2wYc2eBrHD1hvfarPAIgN0tw%2FCKsabV%2B3RUWtAp8TMMv%2F8%2FZnfpK%2FAEqDH8JU4AqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BMr23qTFlbZtGhzyrcA6NF79nOXSXWbCgq0mLD2g%2F1ZVxh%2F3qqtVDcP8wABhpEkx8pyx8lH8yQ1pGVdKy7YsHxZ52CvlqFVxITqxFg0mjQHPeJXH65Dg50NSF64BC4q0iYiGGPllfVfJ%2FQrg5u4SbvajVcAoP18rru9f1XsyLb70n3r2lv9cntvMjklDg2ExkoOKrDHt%2BK%2FV%2B2lVGaSRja6E9F9Wc83tBBU1XJ2ZkARQ2suWSJKYGM8UFewm25kKXS%2B7mT2Xlo5PBajf0t5G%2FxgMd5I4nffxEyHgHVnWsRtnbnMwEQrTPR56yWbClDYcQdlPps9fehx39cMiflraraQFyAUqeh8fqxO2JPBzkLSXfVLUKcdugRedWLzEEfvG4pVSxrjHFrIeWPITj2FlARMgi6ctFZxciVmdoPwPnUYB7zx%2Bcb7Hc%2FaGyLSGj6%2FsNW4648ffHtV50b%2Fhp94%2BLbCK9fwWQHWhoI%2B0aaU0U8BtF%2Fxh%2Bj%2ByyPOUxS%2BGhSvgXZWgq45%2F6u6CtWGbBLDnnH4l827%2FjSqlQiZJq3E7lpZBv%2BrqRT1MyY9rgfduRFWvVRaLur9tIMy%2FK8YhYXaHiuUwd6NCoGM%2Bi3dZ%2BcVf68u7kK8NfHZ6%2BpqntL4obXxYjfFMStD%2BL8pOVuMNHc4MEGOqUBTm04TV7sCHT1LC4u3KwZZggDknkNyL84uLcn%2BDmC2lpJqxaZP3eH2PoODwsQjMa%2BTf1ahPv755yX2SzpubSb3InQJPNUNpWlWU8z7XTalwpTSz0IJnTX5edIz3O%2FMjXUzcoBFelvzzyo8V9Oc61txuwHCaSmAnG0DaJZGRWn%2B11yfA7hykf1GfNhi23BA9jrUf%2BxGaoeTH5ayt52p2xXKEC5OFEj&X-Amz-Signature=fc7729363618f57090b683b71d4fc7cc46216016e34a1909683ff781e1b8dfcb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USULRKBW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoBUkFu%2BvIYyyoSELxqiZcZnit2wYc2eBrHD1hvfarPAIgN0tw%2FCKsabV%2B3RUWtAp8TMMv%2F8%2FZnfpK%2FAEqDH8JU4AqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BMr23qTFlbZtGhzyrcA6NF79nOXSXWbCgq0mLD2g%2F1ZVxh%2F3qqtVDcP8wABhpEkx8pyx8lH8yQ1pGVdKy7YsHxZ52CvlqFVxITqxFg0mjQHPeJXH65Dg50NSF64BC4q0iYiGGPllfVfJ%2FQrg5u4SbvajVcAoP18rru9f1XsyLb70n3r2lv9cntvMjklDg2ExkoOKrDHt%2BK%2FV%2B2lVGaSRja6E9F9Wc83tBBU1XJ2ZkARQ2suWSJKYGM8UFewm25kKXS%2B7mT2Xlo5PBajf0t5G%2FxgMd5I4nffxEyHgHVnWsRtnbnMwEQrTPR56yWbClDYcQdlPps9fehx39cMiflraraQFyAUqeh8fqxO2JPBzkLSXfVLUKcdugRedWLzEEfvG4pVSxrjHFrIeWPITj2FlARMgi6ctFZxciVmdoPwPnUYB7zx%2Bcb7Hc%2FaGyLSGj6%2FsNW4648ffHtV50b%2Fhp94%2BLbCK9fwWQHWhoI%2B0aaU0U8BtF%2Fxh%2Bj%2ByyPOUxS%2BGhSvgXZWgq45%2F6u6CtWGbBLDnnH4l827%2FjSqlQiZJq3E7lpZBv%2BrqRT1MyY9rgfduRFWvVRaLur9tIMy%2FK8YhYXaHiuUwd6NCoGM%2Bi3dZ%2BcVf68u7kK8NfHZ6%2BpqntL4obXxYjfFMStD%2BL8pOVuMNHc4MEGOqUBTm04TV7sCHT1LC4u3KwZZggDknkNyL84uLcn%2BDmC2lpJqxaZP3eH2PoODwsQjMa%2BTf1ahPv755yX2SzpubSb3InQJPNUNpWlWU8z7XTalwpTSz0IJnTX5edIz3O%2FMjXUzcoBFelvzzyo8V9Oc61txuwHCaSmAnG0DaJZGRWn%2B11yfA7hykf1GfNhi23BA9jrUf%2BxGaoeTH5ayt52p2xXKEC5OFEj&X-Amz-Signature=bcfede3fd9fde2a724ac473f82ad120efbe2970ed2d607b24454f329d999c1bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
