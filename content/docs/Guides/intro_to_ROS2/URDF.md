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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNQM6PDV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG%2Fy5ZePU9iV4o6S35cdeDlL2LwUTDWpdveiOS4VQfnwIhAILBLNsivg4g2vQ%2BOlBtNVKhd4rKXYf2w29C2rAKexZ9KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0md18YwTlsx6SNcoq3APIHY3H7Qb2X8d%2BzdBHb6k%2FVneXwMtuS%2Frko3797E7P4t%2BA55Kgoq3KtUGIaj9ifx5mC%2Bf51qJy%2F61bjA3pYRwTMTs%2FIg8nPCXeof%2B266xwwoBeV63NnSUbBq5w8Cl8VnUZIxbzpqo9q3K6QcwFFuTOAIN0UQnMDM05%2BQbfAUILSOarHwXu13vMiTgQqTR4%2FylNq3m%2BbRRZoV5oTgKVIvbxvxZM6p5Fods8%2FCKG0vRyKltBWTDimNXa%2FPz4TpkWqiMTm%2F7AaeJ7qJBj6FOERqMinxssZhiE3iiyZj4cASZXh1%2BkeC0S2RlzuHn%2F%2FQZF6%2Bs3BjAOZ3qBN5udMd%2B7R%2BJ70W48ytP5iW0Negvq%2FB%2Fcby5rjrbiGKd%2F8gWN0efPUvZo%2FJ8fcdlmFL38KGlSlLhNFg8Ok7TBf4b3F6nwVwwVTA2610uCaX8lXWKzJUvSqv8hrT2gYdN31eNSYRmej5qyuTHJJwbFw8CYLPhHrUw2JOkAZ%2BOPcs4z2sD4TaHRaDUQU%2Bwg1BOS9tGmcECyAC7KQvYBT3GOlPV8SvJNn2Z%2FY0O6mpP1He209wDqLy5LaNTK%2BRdKOeU8kMTCC8ESmtCQMBpEDMy9UOlBd4IFbzwBNjIqd46aXB7%2FVOA%2BfDCd95C%2BBjqkAbLhwHUO4pn5RmWsDf5mACPu9bFsU2g2EvLA0%2FLV%2FWZ2X%2FTdSCRrZhPUFY9QvEi%2F2rOnOhqM2i4z4vKc3qNsqS77fAANNv0Pb4rg0dxrDBwDtCovmWsFtWooa3s1rL8bGZ95qmmPWce%2BZiTNFIcl6mET0WL3D3ktxAx8MUNt5e%2F44pl8n%2FTGnG7iS6zQvp0MrO8OkTp2kKq23i89wzxVAAcCGpC%2B&X-Amz-Signature=4a2817b5a799d22f160b0fca968ecbb4b36948c5d18b5d5646bba22f96b608ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNQM6PDV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG%2Fy5ZePU9iV4o6S35cdeDlL2LwUTDWpdveiOS4VQfnwIhAILBLNsivg4g2vQ%2BOlBtNVKhd4rKXYf2w29C2rAKexZ9KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0md18YwTlsx6SNcoq3APIHY3H7Qb2X8d%2BzdBHb6k%2FVneXwMtuS%2Frko3797E7P4t%2BA55Kgoq3KtUGIaj9ifx5mC%2Bf51qJy%2F61bjA3pYRwTMTs%2FIg8nPCXeof%2B266xwwoBeV63NnSUbBq5w8Cl8VnUZIxbzpqo9q3K6QcwFFuTOAIN0UQnMDM05%2BQbfAUILSOarHwXu13vMiTgQqTR4%2FylNq3m%2BbRRZoV5oTgKVIvbxvxZM6p5Fods8%2FCKG0vRyKltBWTDimNXa%2FPz4TpkWqiMTm%2F7AaeJ7qJBj6FOERqMinxssZhiE3iiyZj4cASZXh1%2BkeC0S2RlzuHn%2F%2FQZF6%2Bs3BjAOZ3qBN5udMd%2B7R%2BJ70W48ytP5iW0Negvq%2FB%2Fcby5rjrbiGKd%2F8gWN0efPUvZo%2FJ8fcdlmFL38KGlSlLhNFg8Ok7TBf4b3F6nwVwwVTA2610uCaX8lXWKzJUvSqv8hrT2gYdN31eNSYRmej5qyuTHJJwbFw8CYLPhHrUw2JOkAZ%2BOPcs4z2sD4TaHRaDUQU%2Bwg1BOS9tGmcECyAC7KQvYBT3GOlPV8SvJNn2Z%2FY0O6mpP1He209wDqLy5LaNTK%2BRdKOeU8kMTCC8ESmtCQMBpEDMy9UOlBd4IFbzwBNjIqd46aXB7%2FVOA%2BfDCd95C%2BBjqkAbLhwHUO4pn5RmWsDf5mACPu9bFsU2g2EvLA0%2FLV%2FWZ2X%2FTdSCRrZhPUFY9QvEi%2F2rOnOhqM2i4z4vKc3qNsqS77fAANNv0Pb4rg0dxrDBwDtCovmWsFtWooa3s1rL8bGZ95qmmPWce%2BZiTNFIcl6mET0WL3D3ktxAx8MUNt5e%2F44pl8n%2FTGnG7iS6zQvp0MrO8OkTp2kKq23i89wzxVAAcCGpC%2B&X-Amz-Signature=a11f611f3b74203c5ce5e5346fe3a05b4bedb58f44bae384a53018b3c905cf15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
