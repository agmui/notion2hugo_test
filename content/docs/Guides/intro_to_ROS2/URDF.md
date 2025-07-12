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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZDB3U7G%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCROANMAhbbYPu8UA8Or4kU8jIlLDisT1Crv0DYxbG1qAIhAItwPEMzGvLNb9uLJjB9Zn%2BYHUC1VdDpNsExm80li3D6KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLAh1u3z%2Ba8YG8xj8q3AMbkGWr9hPD75tuyUINgskNHkIMqbX5IBfxqSI84jqVd7M6veL5wJkAmSEU5SKNYyv%2BOFCiS9FyRnIYFaiMC4DmPTdAmRMmIKHtYDkirNYxsGYEu2W4b%2BipxXFT5SceDVU7pTbotZ%2FlPrMRXRRz%2BVV9wvo2uTCA7MXwbJujKFGKPgPQddWfkPZ1RVdZ1Qmx1YTm0yeDyXieTJNh6piS3GYeJry0n5nMD3NrmdPCyiLir4Sv7IGyY%2FRdc874IemiG79eFV4DgcOLZF78QhuF0fSN6rpSPC4ZCKN8VD%2BtPBE2bwu8hJRtHGK9hvDzVZ7DSkBVoqHhwsfxBx%2F%2FaUGxCUmHFsJihpls4YGNVEHSENobnQoDoJODjBK5AB7tb5eb6Cc%2FWnpmBdZ3BO1%2F1B0wsSsDP47V3m%2BIcg3jaNd5aMFXkWE5CXwRrIJWkrmf59o6%2BKnGYPhWUA3BCu0%2BXQewHLJNGko8sQ7gExHy%2FKQD6NdZdN%2BzQCyJcm8UE5IDOAX8U0mPHG1hou6ryO1Gxvoj1cBD5WpgcNpMoDP6US5BP8yJIq4pAzHw%2Bfdw0wRDDL%2BbRiQQ1Br0wjXKlleA65KtYfjpmasirQlHAJnKrfQDQPotqTKi0ENQBvezNX7yLTC9%2FMjDBjqkAXRAnj3VgmdjjXzOLimMTgrAB5iECqFUxnw6VbpKpDFs5jdz%2FkPlezgl5Y4mp%2BWlnwNH4MZ6KxHlH3UCY%2FJKjwYJ8S4x2Lb5tSskwcgdUGljg8Nhb7F%2B59xQY8fZS4lv4DMZMhovMYNQJnLYYIAGi8lsfrTHV%2B86HAmTEqI9uQ7QT%2FUwUMhCp5CvMV0rINKC4wDEFOHeMJ4WUtqM4%2BUtNspkI5lj&X-Amz-Signature=6bd8c4e899e24ec46f0c4e000d2c08192f1b45fe4a26c208319c0d2e534df92e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZDB3U7G%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCROANMAhbbYPu8UA8Or4kU8jIlLDisT1Crv0DYxbG1qAIhAItwPEMzGvLNb9uLJjB9Zn%2BYHUC1VdDpNsExm80li3D6KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLAh1u3z%2Ba8YG8xj8q3AMbkGWr9hPD75tuyUINgskNHkIMqbX5IBfxqSI84jqVd7M6veL5wJkAmSEU5SKNYyv%2BOFCiS9FyRnIYFaiMC4DmPTdAmRMmIKHtYDkirNYxsGYEu2W4b%2BipxXFT5SceDVU7pTbotZ%2FlPrMRXRRz%2BVV9wvo2uTCA7MXwbJujKFGKPgPQddWfkPZ1RVdZ1Qmx1YTm0yeDyXieTJNh6piS3GYeJry0n5nMD3NrmdPCyiLir4Sv7IGyY%2FRdc874IemiG79eFV4DgcOLZF78QhuF0fSN6rpSPC4ZCKN8VD%2BtPBE2bwu8hJRtHGK9hvDzVZ7DSkBVoqHhwsfxBx%2F%2FaUGxCUmHFsJihpls4YGNVEHSENobnQoDoJODjBK5AB7tb5eb6Cc%2FWnpmBdZ3BO1%2F1B0wsSsDP47V3m%2BIcg3jaNd5aMFXkWE5CXwRrIJWkrmf59o6%2BKnGYPhWUA3BCu0%2BXQewHLJNGko8sQ7gExHy%2FKQD6NdZdN%2BzQCyJcm8UE5IDOAX8U0mPHG1hou6ryO1Gxvoj1cBD5WpgcNpMoDP6US5BP8yJIq4pAzHw%2Bfdw0wRDDL%2BbRiQQ1Br0wjXKlleA65KtYfjpmasirQlHAJnKrfQDQPotqTKi0ENQBvezNX7yLTC9%2FMjDBjqkAXRAnj3VgmdjjXzOLimMTgrAB5iECqFUxnw6VbpKpDFs5jdz%2FkPlezgl5Y4mp%2BWlnwNH4MZ6KxHlH3UCY%2FJKjwYJ8S4x2Lb5tSskwcgdUGljg8Nhb7F%2B59xQY8fZS4lv4DMZMhovMYNQJnLYYIAGi8lsfrTHV%2B86HAmTEqI9uQ7QT%2FUwUMhCp5CvMV0rINKC4wDEFOHeMJ4WUtqM4%2BUtNspkI5lj&X-Amz-Signature=6c11caf06b7b5a16dcccbc025ece4dfa75b2db9c4c30cbcde90068353d2f789a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
