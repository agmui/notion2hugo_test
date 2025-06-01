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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNFADBM%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDxRndvf97sj89eftmo3vh6A4VMcqOyZm%2FY5wU9V5ZI%2FgIhAIkpyhDtA1hEA66nIEmABV16Y9fOA3HlxUQh0D8fC1UfKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyFpZp5aMcIOmZFnwq3ANPgEPPzXISvlF9aFcjb%2BDGr3DoVmgkwmtsYBflPfk1SDJUt7zW2yyrtKMDsQkL6YuCwWpdAHS2H%2BLy5OhoaR6S3jmcWQxpUv9vsDScJDk7yORqXnNAsReiyp3wgbT2pzCtQCZrjYU9WVGHd4bI3R2ByXTXnVr1H4UnoxlzLQHcX0AZX44tg2Jt9mbWy5LIDFqTQr57NumyIQgNNfPOWlOL9j%2BHrMXm7LT07OLRMjnGhNklgnWaOsTnRhxVOpcDohY9xcDkuth1Mp49MsuMQaobaZkwAGs586l17d70fB9U3oXCNM7mcHhNAmo4G294naRDJu4iben26I%2BpPvknn4z%2FAKCrFdKrYsMQp679flsMJjYkIFnAjmPVLSdpl9Oqz10yNdu%2FO%2B3eA9f0DUifOjEUZacKzNszyP%2BXQBJNoXA2SRQAkw3%2BpDBZLuaTweSgJPhxGPJC5ihCzlMXL%2FxDyQ0IX2dNk3uF5VgXyXfNwUkmAflVqp%2BHPdwVCEbLR7gEgQkmLrM2wVp0dP%2F1w2%2BCbZme%2FE%2BcL7Od2%2FY%2FS2Lh8UtZnn%2BQq6eCqxvlflop%2BT6DuRZyvHPE%2FQtXJfzHsz2b6FHinQs0mvK9JIyNQAHUv1eqLbDb%2BH4%2FwemISDRutTC1k%2FHBBjqkAf35k3n5prfUXhXlmxGJE%2BdxuD7yXbzr3R3eV4tITfVI1tK4Wpk7u7PFG541Bld6jJr81TV%2B47V39yLXwahRSltTVyEopSWB0sDACP75EEYJIwWscH2ebmmkq%2BDw9hPn6ObAm%2FEzOd5%2FBumLWWxjCl%2BbcU9eULZbA1sOyew4q%2Bba2dTTuCaZxd0%2BNyYWHiYY4E4OQZ%2FPJB7ladcEBlYuQFK%2BOycn&X-Amz-Signature=f50d18fae34bdf8bded1f818f0cfc11e4ffb4068363b6e9cc62e3b3db27e84a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNFADBM%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDxRndvf97sj89eftmo3vh6A4VMcqOyZm%2FY5wU9V5ZI%2FgIhAIkpyhDtA1hEA66nIEmABV16Y9fOA3HlxUQh0D8fC1UfKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyFpZp5aMcIOmZFnwq3ANPgEPPzXISvlF9aFcjb%2BDGr3DoVmgkwmtsYBflPfk1SDJUt7zW2yyrtKMDsQkL6YuCwWpdAHS2H%2BLy5OhoaR6S3jmcWQxpUv9vsDScJDk7yORqXnNAsReiyp3wgbT2pzCtQCZrjYU9WVGHd4bI3R2ByXTXnVr1H4UnoxlzLQHcX0AZX44tg2Jt9mbWy5LIDFqTQr57NumyIQgNNfPOWlOL9j%2BHrMXm7LT07OLRMjnGhNklgnWaOsTnRhxVOpcDohY9xcDkuth1Mp49MsuMQaobaZkwAGs586l17d70fB9U3oXCNM7mcHhNAmo4G294naRDJu4iben26I%2BpPvknn4z%2FAKCrFdKrYsMQp679flsMJjYkIFnAjmPVLSdpl9Oqz10yNdu%2FO%2B3eA9f0DUifOjEUZacKzNszyP%2BXQBJNoXA2SRQAkw3%2BpDBZLuaTweSgJPhxGPJC5ihCzlMXL%2FxDyQ0IX2dNk3uF5VgXyXfNwUkmAflVqp%2BHPdwVCEbLR7gEgQkmLrM2wVp0dP%2F1w2%2BCbZme%2FE%2BcL7Od2%2FY%2FS2Lh8UtZnn%2BQq6eCqxvlflop%2BT6DuRZyvHPE%2FQtXJfzHsz2b6FHinQs0mvK9JIyNQAHUv1eqLbDb%2BH4%2FwemISDRutTC1k%2FHBBjqkAf35k3n5prfUXhXlmxGJE%2BdxuD7yXbzr3R3eV4tITfVI1tK4Wpk7u7PFG541Bld6jJr81TV%2B47V39yLXwahRSltTVyEopSWB0sDACP75EEYJIwWscH2ebmmkq%2BDw9hPn6ObAm%2FEzOd5%2FBumLWWxjCl%2BbcU9eULZbA1sOyew4q%2Bba2dTTuCaZxd0%2BNyYWHiYY4E4OQZ%2FPJB7ladcEBlYuQFK%2BOycn&X-Amz-Signature=2ea8a72cd1aa05f55ed6a8090f411fb626e9caa0430a6171143185f8dfcf969f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
