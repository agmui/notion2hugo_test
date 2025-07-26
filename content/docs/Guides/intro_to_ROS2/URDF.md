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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TANBT36%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCID8kASxmeaJO%2FZYInIEF7JmDVyq2RueRK9Kcxdx6bXktAiASnby%2F34%2FDGSkPQ6IBW82FeWOTEJ14ddd7NnpKGprBPyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMalWgDhE69Eo34zJoKtwDmYfU3MDEUtOzrBFA0k5%2FHt%2FLGYx8kjGhJxk1guvCuFV79X1M0yOOlrxXyQ76Fd9aAJbQvbr%2FQ4Yxf8pohHaNmg2AhtYXS%2FXSW0shhW7jlfGiMUrrxcGeL%2Bn0vtEpjVUPZeJojT%2FFcoXYblKGT9Bpw20Ve%2BDFOYeK9MX5RLzwob6mobFJk8IylAjSWrCpFA4qVd1JXUoF4tsN5KiV9OFkR92%2BosPxTuYMzt24Sbsbuf6v9aGYbjF4EhpRoZ9LnhK0JQ4NIJwnrv7DcWPgJAM1j6%2FpK0tX3TMJzkn6CXySdtMbIRD2bwyN5FkiaSCcw%2F0sYRMZhcLWC0Diax6x9WFmIO%2FAvOeS3TKN61lXFXowhiDszZ%2BTh%2FwO236ryIsv4EtXwv33YI4kyVRIW%2Bm3w%2Fi8uXZHm89KDduVcgeQZ9BZ1Z72N7eJ2rS2M7NRTxVbe3nc0es%2FjQzEFqfkuiYWOgtz3tToYNRnC4I28y8Sw7riVnMrTAxFNZf4JjfN9q2zHOtaiOEmXqKoB%2BoT5P0iW7n1Xzbke8YzE6NfxngTeBvhRsiTA%2FXDppyItSypDa5TCgPwFeADfxbpJMHDnzpHZSFGkFAvb7B190JuNbML0qa6pYMUKaf07%2BKTNdiNhLswifCQxAY6pgETIF7VUfIa0O%2BcZa7UV1LMrYB20tPOqdGD3ksi%2FF%2FRCy2ODTtoU4tDrdVTMuGPKBmJxz9x4SMFs8e94Jknom2PrS2W3OgecAiXo1rbDQLIRHjwaLOLAA7bDY0yhMsqn9NG%2FUKNyq9DrSPvjFTGmQnC1uaNBr6K9u5h77pNq7LfKKwpcEyt1UrCPWez0zNWyqqrsQ32v0S%2FDEBTwJXeJvBLaqVR2DJe&X-Amz-Signature=3b3a984d3fb3793dd0625bf881576cc7ba926278c345b918a9ddce3969884e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TANBT36%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCID8kASxmeaJO%2FZYInIEF7JmDVyq2RueRK9Kcxdx6bXktAiASnby%2F34%2FDGSkPQ6IBW82FeWOTEJ14ddd7NnpKGprBPyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMalWgDhE69Eo34zJoKtwDmYfU3MDEUtOzrBFA0k5%2FHt%2FLGYx8kjGhJxk1guvCuFV79X1M0yOOlrxXyQ76Fd9aAJbQvbr%2FQ4Yxf8pohHaNmg2AhtYXS%2FXSW0shhW7jlfGiMUrrxcGeL%2Bn0vtEpjVUPZeJojT%2FFcoXYblKGT9Bpw20Ve%2BDFOYeK9MX5RLzwob6mobFJk8IylAjSWrCpFA4qVd1JXUoF4tsN5KiV9OFkR92%2BosPxTuYMzt24Sbsbuf6v9aGYbjF4EhpRoZ9LnhK0JQ4NIJwnrv7DcWPgJAM1j6%2FpK0tX3TMJzkn6CXySdtMbIRD2bwyN5FkiaSCcw%2F0sYRMZhcLWC0Diax6x9WFmIO%2FAvOeS3TKN61lXFXowhiDszZ%2BTh%2FwO236ryIsv4EtXwv33YI4kyVRIW%2Bm3w%2Fi8uXZHm89KDduVcgeQZ9BZ1Z72N7eJ2rS2M7NRTxVbe3nc0es%2FjQzEFqfkuiYWOgtz3tToYNRnC4I28y8Sw7riVnMrTAxFNZf4JjfN9q2zHOtaiOEmXqKoB%2BoT5P0iW7n1Xzbke8YzE6NfxngTeBvhRsiTA%2FXDppyItSypDa5TCgPwFeADfxbpJMHDnzpHZSFGkFAvb7B190JuNbML0qa6pYMUKaf07%2BKTNdiNhLswifCQxAY6pgETIF7VUfIa0O%2BcZa7UV1LMrYB20tPOqdGD3ksi%2FF%2FRCy2ODTtoU4tDrdVTMuGPKBmJxz9x4SMFs8e94Jknom2PrS2W3OgecAiXo1rbDQLIRHjwaLOLAA7bDY0yhMsqn9NG%2FUKNyq9DrSPvjFTGmQnC1uaNBr6K9u5h77pNq7LfKKwpcEyt1UrCPWez0zNWyqqrsQ32v0S%2FDEBTwJXeJvBLaqVR2DJe&X-Amz-Signature=2fd2576d7610a02ffb9f7f598c1f021a1bef0727c1bb2d8c4cfb812597a9f7c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
