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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XY7ATXZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCLLxRIwskjcDy1mXPJAkQcjozKOEwmxgk0rIDXKAGVhAIhALzSEqlMTqkVs5qdbLTdBwvgIpne%2Bct4oD7ZxkhQ4kSrKv8DCDkQABoMNjM3NDIzMTgzODA1IgwvHw%2BOMAKdyAGX%2FFsq3AMaChHVbAAIMeDoADHl3oToZMa%2BG1B9vXHulmIw3IihoPv4D5VqDSnlKgudSICpni%2FLSfs4arzXLWXQdQj8a4knBl8zQQPDzIH%2B%2Bx%2BqIxglcNUP5EjJZvnwb%2BZ%2FGFmm%2BjFUeJ%2F57yjKUDJgm7onNHPpcoDsmgNpgZicoHlGcQJ2Mr%2BznBfcCtaClDAlpg7K6%2Fi%2FQ68%2B6%2BBm0RfecwXgltyH%2FyT818%2FEZiBYDr%2BZwehBv2quwkrEIIJg1m8SrNda%2BUA0d5Stfqcxu5kg4Fl0XA03s8nJc5ibcv6apgd%2FOF%2BhyUDIVUF8H38Rk9RYF5VYFyrFzvBHIg6gHF%2BqOjf6EoREV3yrjayGjqHW5sbZoC0g0kv68V4b4%2BArSbJwhTweJP3Gty%2BTMEcUQpDtvTQj9QdZ6zZXR0pzPVlB4QKuZI2sSpga7FNRId85SPD956MYWbLM4AOk3D87yG%2F63tSX1bsVxgqFHh%2FsbvPWqZu%2FPkdQMyxFcYosCBUjzwbEHvfnkMyyzHlcvJagt5SZsimKnxpCB%2FYLMklgCqksDmiqVswj5bna6JHqBVP0Wk%2BpveoBn2D7DqV1bz3GUqD%2Bj%2BwTDRFwpsAwcBOjZ28ey8zHT73GCsAN5Oe6%2BrSA323KzDDD7%2BzCBjqkAeaFIz6TqK0UeV2F1ZksCYh701lrRYSBwJI2CTzC7jQSJHO%2BoMfE6c76nrsuKj6lt%2Fv922Rxu7ZucytHeP%2FmaQ6OJ0Hm2VTaqua8%2Bn7in522fapdqzHSRapuw4Ga4bR3zAemHGpkyK2YmERXVuqovYaaWEcXOy0%2B4Q2pzbNSz%2F%2F7Jb0Sy79PTXbFu63s%2BXK%2BNLdQqIXyCt97%2Bb5XeEnIX%2FyoO8Ob&X-Amz-Signature=3b9d77d7a3631ef3a39fd087c0deaf0b8c1d17d4040d531280709ccc46f608fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XY7ATXZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCLLxRIwskjcDy1mXPJAkQcjozKOEwmxgk0rIDXKAGVhAIhALzSEqlMTqkVs5qdbLTdBwvgIpne%2Bct4oD7ZxkhQ4kSrKv8DCDkQABoMNjM3NDIzMTgzODA1IgwvHw%2BOMAKdyAGX%2FFsq3AMaChHVbAAIMeDoADHl3oToZMa%2BG1B9vXHulmIw3IihoPv4D5VqDSnlKgudSICpni%2FLSfs4arzXLWXQdQj8a4knBl8zQQPDzIH%2B%2Bx%2BqIxglcNUP5EjJZvnwb%2BZ%2FGFmm%2BjFUeJ%2F57yjKUDJgm7onNHPpcoDsmgNpgZicoHlGcQJ2Mr%2BznBfcCtaClDAlpg7K6%2Fi%2FQ68%2B6%2BBm0RfecwXgltyH%2FyT818%2FEZiBYDr%2BZwehBv2quwkrEIIJg1m8SrNda%2BUA0d5Stfqcxu5kg4Fl0XA03s8nJc5ibcv6apgd%2FOF%2BhyUDIVUF8H38Rk9RYF5VYFyrFzvBHIg6gHF%2BqOjf6EoREV3yrjayGjqHW5sbZoC0g0kv68V4b4%2BArSbJwhTweJP3Gty%2BTMEcUQpDtvTQj9QdZ6zZXR0pzPVlB4QKuZI2sSpga7FNRId85SPD956MYWbLM4AOk3D87yG%2F63tSX1bsVxgqFHh%2FsbvPWqZu%2FPkdQMyxFcYosCBUjzwbEHvfnkMyyzHlcvJagt5SZsimKnxpCB%2FYLMklgCqksDmiqVswj5bna6JHqBVP0Wk%2BpveoBn2D7DqV1bz3GUqD%2Bj%2BwTDRFwpsAwcBOjZ28ey8zHT73GCsAN5Oe6%2BrSA323KzDDD7%2BzCBjqkAeaFIz6TqK0UeV2F1ZksCYh701lrRYSBwJI2CTzC7jQSJHO%2BoMfE6c76nrsuKj6lt%2Fv922Rxu7ZucytHeP%2FmaQ6OJ0Hm2VTaqua8%2Bn7in522fapdqzHSRapuw4Ga4bR3zAemHGpkyK2YmERXVuqovYaaWEcXOy0%2B4Q2pzbNSz%2F%2F7Jb0Sy79PTXbFu63s%2BXK%2BNLdQqIXyCt97%2Bb5XeEnIX%2FyoO8Ob&X-Amz-Signature=1c4b5cc528f0c539ae4e4c4726b660efce348199847b307a00cdceb994a0fac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
