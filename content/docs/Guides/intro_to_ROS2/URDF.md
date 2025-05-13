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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUGQX52K%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCumgl8k3AgM7NZyXrxNJ15qRO39%2B7EsGqwli6ru5qfyAIhALImTLTzQtNMEa%2BcvC9KNCpXWtHaJHEsPp3yiN%2BMmDUzKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwurZdI%2B57cl2ZIKW0q3AOWG6gcJcFO61i2nZr9ZfvdjLItwTXSPTszjrPNDTBTudvwSggbqtN7O6oycPUKgVn8QIn7Gxfrr6G7t54hEGOzyskdOqJfE%2FXKNj%2B%2FvnUK9CBajIpNkDhyHN%2FOqFe5WFJGso7Eef0y40%2Ba6YNv%2BqwVnDldDQKykr%2BsXORAEw5hsCvyVcA%2BE9%2BvIft35lHgD7mzOi5NZX4urW%2FxKAOGWN%2BH%2FSo1hG6IztDF4vgkXK%2Bg3ZC91rcBp79pxVUT%2BjmOBDHCzwp3%2FYrpRPFCoCCY51B75PtPXd2Nw%2FUhFMfclStDoAyP%2FvNyTBLv3uDHQKuWQbB87rFTlYZSLN7RUAfZ18D0QN41jNn9Ao%2Bhwj%2FJ4EsNrhvalDhXnP1jsiGTZdPGru1Kek0ciYR2aKLfdOGjSU5TbkZ1vs4c53a5KKbepoldDyAKnnsKbZSLCQ3ebIKe%2FD3Sltsg4OOgVGxO39hppZOYzKPh4WbJhVene7hNXfLmPkWf9iUQju0AmBPZYvNubKKDqm6u78VBq6j3T%2FxGMB0Nqw8pkC4V5tX42NpargLpKCqLpYOmopYTea4nPf1VBVIDYlwLenm2Ov3s873YJsnXqBg2kU9%2FPvvLNFlihbCnMxO6syUacA6hOcYLcDDEj4vBBjqkASh5llr%2FV0zJWfZlzlr%2B3R7QDL2c36qk7dvLDHBqKM1uSkwpLwZdrtUkR%2Bm90YbOTEo9AC7O2GsOo96fmQP7bfmiHxw3Kqv%2BOAFujFZShubXrNOnTjLmmSBBwi1WFjUH%2BPBvn%2F5q1q6Q3nMTHiVDWZoepGk5K6QzC4uw9jKkBx7k7NMIfD6LdCCgaOfnQqZbFjnxfmGDG6yqCATjV0q5UmkkuAtw&X-Amz-Signature=8561d797040ad260259abcb09aeb093e4296830e178b93aba67375c6a70da43b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUGQX52K%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCumgl8k3AgM7NZyXrxNJ15qRO39%2B7EsGqwli6ru5qfyAIhALImTLTzQtNMEa%2BcvC9KNCpXWtHaJHEsPp3yiN%2BMmDUzKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwurZdI%2B57cl2ZIKW0q3AOWG6gcJcFO61i2nZr9ZfvdjLItwTXSPTszjrPNDTBTudvwSggbqtN7O6oycPUKgVn8QIn7Gxfrr6G7t54hEGOzyskdOqJfE%2FXKNj%2B%2FvnUK9CBajIpNkDhyHN%2FOqFe5WFJGso7Eef0y40%2Ba6YNv%2BqwVnDldDQKykr%2BsXORAEw5hsCvyVcA%2BE9%2BvIft35lHgD7mzOi5NZX4urW%2FxKAOGWN%2BH%2FSo1hG6IztDF4vgkXK%2Bg3ZC91rcBp79pxVUT%2BjmOBDHCzwp3%2FYrpRPFCoCCY51B75PtPXd2Nw%2FUhFMfclStDoAyP%2FvNyTBLv3uDHQKuWQbB87rFTlYZSLN7RUAfZ18D0QN41jNn9Ao%2Bhwj%2FJ4EsNrhvalDhXnP1jsiGTZdPGru1Kek0ciYR2aKLfdOGjSU5TbkZ1vs4c53a5KKbepoldDyAKnnsKbZSLCQ3ebIKe%2FD3Sltsg4OOgVGxO39hppZOYzKPh4WbJhVene7hNXfLmPkWf9iUQju0AmBPZYvNubKKDqm6u78VBq6j3T%2FxGMB0Nqw8pkC4V5tX42NpargLpKCqLpYOmopYTea4nPf1VBVIDYlwLenm2Ov3s873YJsnXqBg2kU9%2FPvvLNFlihbCnMxO6syUacA6hOcYLcDDEj4vBBjqkASh5llr%2FV0zJWfZlzlr%2B3R7QDL2c36qk7dvLDHBqKM1uSkwpLwZdrtUkR%2Bm90YbOTEo9AC7O2GsOo96fmQP7bfmiHxw3Kqv%2BOAFujFZShubXrNOnTjLmmSBBwi1WFjUH%2BPBvn%2F5q1q6Q3nMTHiVDWZoepGk5K6QzC4uw9jKkBx7k7NMIfD6LdCCgaOfnQqZbFjnxfmGDG6yqCATjV0q5UmkkuAtw&X-Amz-Signature=2503f9bd9de0b96ddb39225880017dc706c5dfb9ef21967a356b2563efa939ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
