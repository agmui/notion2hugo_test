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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CYEZ7VZ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCepwidPkuWx2AvuBCRGwp0qfhjjjRDbvxMmN%2BOPsMSJgIgNpjSUmb34HpuyLuF3eaRvRi6DAzjLdi8A7QY4bgo4KMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqmyERaPOl6CW46yyrcAxq5bXQ0w77ie1mb0VocFcS3yzrZi%2BsbprMcEciKS25vl%2FtktWinEJ60pbeYOmQkWhjunDmN26O%2B0zJ2neAGb7JAlatQCz5aGJswCHgpccfd0dVFxj5XAPJGLNBeaKYSabihc%2Bwbv8RFembt%2BXMhtGrn50A7LtCsgscPserc87c%2FyheE6o8cV47c0h6F4fAvNLzr9GKWWP6XyMeyeRGRbch3hGhXnieG%2FgB5M0vhRyaY7b1w1q%2FSTC0AutsXKJljph1GqogpB4ApxZZjSQOH13Z5R6HgO3lyrNElGNgwJm1aJgmho8AgDSLcHZZg%2F8Y47dUVWDPTM5Z%2BbBk7L8hZ5Pg8ZJ2BRldGuoZpE%2FcMXB4TRCSikYSrg%2BkxM9OGEp7SNukHezK7j68xKwJS2T3poTG7tgWHlXPmamPfjerK7iufEp35FjX04K6gt8oC0q%2BqiXmEJ%2BSmxJoo%2Fh6Te9jH03Cdwc58kJcFNyhW4Ff1OhuH2OdAmr8IFUnIbcBT7rhyIQCgup4gsi0jJLNmfwQXeElOW7Vhw65%2B8h4Ns7T8oHQQnsv1JXnsH0NqNEMy3yv0Ty6Hy63RA7D2UL3CWi%2FutxGh0DVRBflhj7iGLPe83S9m758uvkqDNy7%2B9nT9MLWv2MIGOqUBSa9PuNUvfVWnRVuqCLEHBeAQ9yFc%2B3T%2Bwx%2FfIeOYEfzmykfSjwkGE43Jd01kZEqmpn68BEKBeO7R2tR2QxU9%2FwOyEWZow6WOQLznf%2FQy%2FhKXowthEC%2Be3HytoNbPMibRbez%2B9q5LItyhx7EFy2a10oW0YBDZjfo4oGdAC8PIFCdTk5tcFeUpYcr6700yN%2BjdJvr5R%2B3yPk8w%2B4TXmpVck%2F0kpUnZ&X-Amz-Signature=a2d12922db7fc55e608a2ce2e3fc3334819f4f0c97c3a3a6a7eab6d44879ffd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CYEZ7VZ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCepwidPkuWx2AvuBCRGwp0qfhjjjRDbvxMmN%2BOPsMSJgIgNpjSUmb34HpuyLuF3eaRvRi6DAzjLdi8A7QY4bgo4KMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqmyERaPOl6CW46yyrcAxq5bXQ0w77ie1mb0VocFcS3yzrZi%2BsbprMcEciKS25vl%2FtktWinEJ60pbeYOmQkWhjunDmN26O%2B0zJ2neAGb7JAlatQCz5aGJswCHgpccfd0dVFxj5XAPJGLNBeaKYSabihc%2Bwbv8RFembt%2BXMhtGrn50A7LtCsgscPserc87c%2FyheE6o8cV47c0h6F4fAvNLzr9GKWWP6XyMeyeRGRbch3hGhXnieG%2FgB5M0vhRyaY7b1w1q%2FSTC0AutsXKJljph1GqogpB4ApxZZjSQOH13Z5R6HgO3lyrNElGNgwJm1aJgmho8AgDSLcHZZg%2F8Y47dUVWDPTM5Z%2BbBk7L8hZ5Pg8ZJ2BRldGuoZpE%2FcMXB4TRCSikYSrg%2BkxM9OGEp7SNukHezK7j68xKwJS2T3poTG7tgWHlXPmamPfjerK7iufEp35FjX04K6gt8oC0q%2BqiXmEJ%2BSmxJoo%2Fh6Te9jH03Cdwc58kJcFNyhW4Ff1OhuH2OdAmr8IFUnIbcBT7rhyIQCgup4gsi0jJLNmfwQXeElOW7Vhw65%2B8h4Ns7T8oHQQnsv1JXnsH0NqNEMy3yv0Ty6Hy63RA7D2UL3CWi%2FutxGh0DVRBflhj7iGLPe83S9m758uvkqDNy7%2B9nT9MLWv2MIGOqUBSa9PuNUvfVWnRVuqCLEHBeAQ9yFc%2B3T%2Bwx%2FfIeOYEfzmykfSjwkGE43Jd01kZEqmpn68BEKBeO7R2tR2QxU9%2FwOyEWZow6WOQLznf%2FQy%2FhKXowthEC%2Be3HytoNbPMibRbez%2B9q5LItyhx7EFy2a10oW0YBDZjfo4oGdAC8PIFCdTk5tcFeUpYcr6700yN%2BjdJvr5R%2B3yPk8w%2B4TXmpVck%2F0kpUnZ&X-Amz-Signature=4523b5c5f98f45a5f5e20944a8b9c08b91921bf658ebb63923c132ab38323df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
