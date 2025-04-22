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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXUF3KE%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBBH72fs%2BTZ2q27ULYRosstLozMzxAbsHTT9P1vUYvALAiEA1bmzuo2mV11ExcXYixXKwtj5cfNCejjAMctkrxAidCsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFM0fQjdwDYYSUnKYSrcAyMD3DR3KjUMU8WyssPH%2BOQMJ64Srfd6HZLTns%2FK05GfE%2Fnci5fb1eJeZ2Xps8Uixs9KSkrQJgZ9Bugfdirpv4pdmgHgAxGRBFOdxaMcJXpoHh1TiSH%2FOxMj%2F%2FvbvJ7Dqtgw17zNN4smEg2IJk%2B4hYC2z0R1%2B5en3VtzkV64VgZ4MsM36gSxXM2L7K8bJc29mQaCmq5D4kBQmXSQweooWECBI7yj8N5rxUop61VIDuRH2zaNUS%2BvlTh%2Flle13tiBa%2BRhXN5ZlMf0RGE60JwXGwgqiguoc9MqHlDTqWzy8Kxp8qn26qRPfPMqLp6dhPaDsRT2fRP0u6V8HZLzuFQ0E1dLunIJB3QjNZZBeNml7tjCiqdButF2Uaxqq0jpXd6B04MtBLAlCQbF%2FvwNE6GFMhbDLzTge4yO2tow81O7LOYzN%2BGOXzb5iHgHV9fgJzR9mcBVY5TsYdOG6Z5Ry3T9YkP6ZWKbTnB254pmAVHfKjgYEukSQ%2FCHNolAbkJvTyO9kl%2BHWw0H57UdpmIsChZZwb72Enlm6ItO4l8BR6hSDIidtKPGKgiKWOGBmJwBzxCzn1jZ1SneY8XFRfqzZ6%2BzHQ6ysueI2beLWAPK%2FN%2FLqdUhnK0DVocH76yrPmbBMIuJnMAGOqUBVm%2BHBKOsc%2FnqHaXbd%2BC6e2hsikqvZPBxLwSN2%2BM24awQ9nHAZrUG1K%2F%2BNIsRaDFA%2F74NDKgBOO3pnGs3aLsuRPbmukcgtTJWTAx5Ts%2BeOIRXzL%2BWWdMCDvj9%2FQQHfpqfwpMMwO2rs0kGYOAKsRhRpeziDjMbuJgLMlJQZzAlE5avbzEsi%2FUjXDgHbqSqgdtx6PotgCLkOkgiD8fRCFl6VEjc3mUs&X-Amz-Signature=03c4e9aab3f83b9a83b7c62e72c26e01e8ff01a645ba756c8c803bd757b23f28&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXUF3KE%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBBH72fs%2BTZ2q27ULYRosstLozMzxAbsHTT9P1vUYvALAiEA1bmzuo2mV11ExcXYixXKwtj5cfNCejjAMctkrxAidCsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFM0fQjdwDYYSUnKYSrcAyMD3DR3KjUMU8WyssPH%2BOQMJ64Srfd6HZLTns%2FK05GfE%2Fnci5fb1eJeZ2Xps8Uixs9KSkrQJgZ9Bugfdirpv4pdmgHgAxGRBFOdxaMcJXpoHh1TiSH%2FOxMj%2F%2FvbvJ7Dqtgw17zNN4smEg2IJk%2B4hYC2z0R1%2B5en3VtzkV64VgZ4MsM36gSxXM2L7K8bJc29mQaCmq5D4kBQmXSQweooWECBI7yj8N5rxUop61VIDuRH2zaNUS%2BvlTh%2Flle13tiBa%2BRhXN5ZlMf0RGE60JwXGwgqiguoc9MqHlDTqWzy8Kxp8qn26qRPfPMqLp6dhPaDsRT2fRP0u6V8HZLzuFQ0E1dLunIJB3QjNZZBeNml7tjCiqdButF2Uaxqq0jpXd6B04MtBLAlCQbF%2FvwNE6GFMhbDLzTge4yO2tow81O7LOYzN%2BGOXzb5iHgHV9fgJzR9mcBVY5TsYdOG6Z5Ry3T9YkP6ZWKbTnB254pmAVHfKjgYEukSQ%2FCHNolAbkJvTyO9kl%2BHWw0H57UdpmIsChZZwb72Enlm6ItO4l8BR6hSDIidtKPGKgiKWOGBmJwBzxCzn1jZ1SneY8XFRfqzZ6%2BzHQ6ysueI2beLWAPK%2FN%2FLqdUhnK0DVocH76yrPmbBMIuJnMAGOqUBVm%2BHBKOsc%2FnqHaXbd%2BC6e2hsikqvZPBxLwSN2%2BM24awQ9nHAZrUG1K%2F%2BNIsRaDFA%2F74NDKgBOO3pnGs3aLsuRPbmukcgtTJWTAx5Ts%2BeOIRXzL%2BWWdMCDvj9%2FQQHfpqfwpMMwO2rs0kGYOAKsRhRpeziDjMbuJgLMlJQZzAlE5avbzEsi%2FUjXDgHbqSqgdtx6PotgCLkOkgiD8fRCFl6VEjc3mUs&X-Amz-Signature=01590c7abdb921f11604e1a17cbd32571dcf9f3b17398d926c40d4cc26a57dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
