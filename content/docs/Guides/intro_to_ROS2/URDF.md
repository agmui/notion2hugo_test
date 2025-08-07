---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUPBK3U5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCNV1HxUKYe%2F%2ByHSb9zQ868syhroNEq4xu39XTEfliSxgIgQw9KCdWVdDw9FDoYc31tfg8LlmM6o4rds0MGMx0DUH4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNdF2URk8oEULo%2BkCrcA7yRF4Nr%2FYlftY1rXb8o8gWTbtKItwxHv13PXf1zLp61eZA2CTfRYmG7X0I5EOaxdpN3xb%2FaQVzrz8G76DaQUardP5Tqysx8PYGikI7tCi%2BDjDNc%2B%2Bn65EpiqhGxoAtsbNt1Dvr8Q5CZBYW05uLeNXWZFqHkunSR%2FvDT0%2BrbK5bZA6vEReYSR9mXwuulEe4gpx7fO1ug3YsvMbTEeaPtmrP6QKwAlXtOTGlkTF7rm%2FrLbgDwMZo4pbLdhy09O4qWlHiXJkaWavvSw01qP9psZOLDopQcxj%2FE%2FW5EScmn8E9O4FS%2F6w5s9PvNItn1FF5KB8ACC8W6gvdvBwgIhkE%2B75DXnE5dTIr6DDMHKVM7IZPkIJhCS3z58ead8YXqEjT2RYaWmMKiZTGqIk0QllNn2KCZyVz1X2EPOnG2eoKpHUQ52dz1%2FfwWa%2FCfRsjsJQqc87RY%2BIKAUzd839HRwaGySrc6LnoX73PuGsH03fkieAOkC4tQNaGUnIr3Zvf5S5IVkCYUtwaDd3duFMAqkQoolOKI0lN2uEliK0Rlr5HmfjELwdhCb3U%2Ft5L3znD4QBQbvu9jsVVeLv60gQS1fiR2t2eHhRz2cGunAERnsAwByrti5eZniasCNVozh0LtMOGP0cQGOqUB392z53APydW7%2BZnLX2uxJJUoX7FTAQyUjQXJ79JOuQhpXVUk1UtCI5xlI9gT8GEk%2BefckgIUfdXWN%2FmbM75crej457UFxwAAYNCB578ClLMViIRVsZJglww7NJPD494ggPe%2F%2FDxbst%2FctFJCMzNba8Ha8eh8DOlgdu2HVTcGPRXZGYzSFTYAQkrqURWhlu46bm3McNLvdRgE67XKVGPszQKR%2BrhY&X-Amz-Signature=b0cf2151e4400a086c26c56bb7e4ea98dc0d2bbe8e008f00d0dcc70815045823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUPBK3U5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCNV1HxUKYe%2F%2ByHSb9zQ868syhroNEq4xu39XTEfliSxgIgQw9KCdWVdDw9FDoYc31tfg8LlmM6o4rds0MGMx0DUH4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNdF2URk8oEULo%2BkCrcA7yRF4Nr%2FYlftY1rXb8o8gWTbtKItwxHv13PXf1zLp61eZA2CTfRYmG7X0I5EOaxdpN3xb%2FaQVzrz8G76DaQUardP5Tqysx8PYGikI7tCi%2BDjDNc%2B%2Bn65EpiqhGxoAtsbNt1Dvr8Q5CZBYW05uLeNXWZFqHkunSR%2FvDT0%2BrbK5bZA6vEReYSR9mXwuulEe4gpx7fO1ug3YsvMbTEeaPtmrP6QKwAlXtOTGlkTF7rm%2FrLbgDwMZo4pbLdhy09O4qWlHiXJkaWavvSw01qP9psZOLDopQcxj%2FE%2FW5EScmn8E9O4FS%2F6w5s9PvNItn1FF5KB8ACC8W6gvdvBwgIhkE%2B75DXnE5dTIr6DDMHKVM7IZPkIJhCS3z58ead8YXqEjT2RYaWmMKiZTGqIk0QllNn2KCZyVz1X2EPOnG2eoKpHUQ52dz1%2FfwWa%2FCfRsjsJQqc87RY%2BIKAUzd839HRwaGySrc6LnoX73PuGsH03fkieAOkC4tQNaGUnIr3Zvf5S5IVkCYUtwaDd3duFMAqkQoolOKI0lN2uEliK0Rlr5HmfjELwdhCb3U%2Ft5L3znD4QBQbvu9jsVVeLv60gQS1fiR2t2eHhRz2cGunAERnsAwByrti5eZniasCNVozh0LtMOGP0cQGOqUB392z53APydW7%2BZnLX2uxJJUoX7FTAQyUjQXJ79JOuQhpXVUk1UtCI5xlI9gT8GEk%2BefckgIUfdXWN%2FmbM75crej457UFxwAAYNCB578ClLMViIRVsZJglww7NJPD494ggPe%2F%2FDxbst%2FctFJCMzNba8Ha8eh8DOlgdu2HVTcGPRXZGYzSFTYAQkrqURWhlu46bm3McNLvdRgE67XKVGPszQKR%2BrhY&X-Amz-Signature=9219102d311818c8bd99e1d87037b0dad7a8255dd7ac083af37a5b19691ff9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
