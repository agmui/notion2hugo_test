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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEORCPY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC%2FI%2FMnB%2BBciNeuAt%2FRn8gvp5cq5fQcnu90RAUwReqOAAIhAMWrZRpliYzAEaxktdl26T1PHD7LHFx5N9kIPYBW%2BaLbKv8DCH0QABoMNjM3NDIzMTgzODA1IgzSwgqidebRaDfZ80Eq3ANIILvSahn5DC6T1Np2pA1gDx6x5%2FSbzUQuDBbj41N0q%2FxULEYsBO1XPy0ysyvsjQCk1NvpA36KT05eCTRm%2Fokj9Yoxxu8rbTYSA8XObrYVFT2x4p44CoxjQq4CGfibp39tx7PvoE6%2BtydsvRP33EkCsGwY6DePECO0VpEtPkt94NVeRqes1bITcQWKLPpf%2FBZjXVYsAg6QEdV5eqqk0Z6JIhORSLwdzsaXbRdSOYMbgIRcHt8aRGrPTDnwNsce%2BEvRzD2vTHxLyWCvrhxeiOm3hfYAyKEtLXsfHodiMtUDqe0Dk%2FYYWpid%2FssW2Pg1LvarTXmukzZX3RDMlLFrt%2BPp968w%2BLMHehKqjlzxg%2F5MUlaEvZ3LHMfRvuYEKwqCsidQPsXyvN9JrBa%2B3yC7z1jDYoweB8d6zaun9RkbIr5YjjO%2BuNu7tI%2BrZ1sE5d94d7CZ0mf4OVQKKnTV%2BxtaaayYamH2SHOVTxdJIqP7uhA1tOnSaS5rG12hojoHTGo0rLrq5irhfWlAuK3nAJZ%2BsZHAM%2BHyI9Z9EF4MatjTpyI7jM3TyJdjxTBZwLQWCO5e1oA8Ui%2B42vvb0NxrWbGiQsx8KwyMlhfJ5pZvXs%2FJojbE7yGAAq6l6CZdXD2ASDCeqKG%2FBjqkAaEQmbRn2d6mKu%2B82m%2BhK5eerqV0Po2sg8E1AuFFWGDSTcADIELI6kmFaqXqZfFTCmlw9pYh08xuxe%2Fmho3fGR5mtkpBXCKfo65RmUF%2BtpN20L2xND3OPorW9%2Flweqzz7jn790N0ckqv77HP0u%2FYQT4G5g9I4Zpg2Ma74QVQ3Rnw6RllR97%2FX3b6pzgV7z%2BsuARiUBkzrrapoWeCsLZa5JfatdFL&X-Amz-Signature=82c41a78f46c3567ee425dde37b79923d52eaece8deb63c74c141d045bcca7eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEORCPY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC%2FI%2FMnB%2BBciNeuAt%2FRn8gvp5cq5fQcnu90RAUwReqOAAIhAMWrZRpliYzAEaxktdl26T1PHD7LHFx5N9kIPYBW%2BaLbKv8DCH0QABoMNjM3NDIzMTgzODA1IgzSwgqidebRaDfZ80Eq3ANIILvSahn5DC6T1Np2pA1gDx6x5%2FSbzUQuDBbj41N0q%2FxULEYsBO1XPy0ysyvsjQCk1NvpA36KT05eCTRm%2Fokj9Yoxxu8rbTYSA8XObrYVFT2x4p44CoxjQq4CGfibp39tx7PvoE6%2BtydsvRP33EkCsGwY6DePECO0VpEtPkt94NVeRqes1bITcQWKLPpf%2FBZjXVYsAg6QEdV5eqqk0Z6JIhORSLwdzsaXbRdSOYMbgIRcHt8aRGrPTDnwNsce%2BEvRzD2vTHxLyWCvrhxeiOm3hfYAyKEtLXsfHodiMtUDqe0Dk%2FYYWpid%2FssW2Pg1LvarTXmukzZX3RDMlLFrt%2BPp968w%2BLMHehKqjlzxg%2F5MUlaEvZ3LHMfRvuYEKwqCsidQPsXyvN9JrBa%2B3yC7z1jDYoweB8d6zaun9RkbIr5YjjO%2BuNu7tI%2BrZ1sE5d94d7CZ0mf4OVQKKnTV%2BxtaaayYamH2SHOVTxdJIqP7uhA1tOnSaS5rG12hojoHTGo0rLrq5irhfWlAuK3nAJZ%2BsZHAM%2BHyI9Z9EF4MatjTpyI7jM3TyJdjxTBZwLQWCO5e1oA8Ui%2B42vvb0NxrWbGiQsx8KwyMlhfJ5pZvXs%2FJojbE7yGAAq6l6CZdXD2ASDCeqKG%2FBjqkAaEQmbRn2d6mKu%2B82m%2BhK5eerqV0Po2sg8E1AuFFWGDSTcADIELI6kmFaqXqZfFTCmlw9pYh08xuxe%2Fmho3fGR5mtkpBXCKfo65RmUF%2BtpN20L2xND3OPorW9%2Flweqzz7jn790N0ckqv77HP0u%2FYQT4G5g9I4Zpg2Ma74QVQ3Rnw6RllR97%2FX3b6pzgV7z%2BsuARiUBkzrrapoWeCsLZa5JfatdFL&X-Amz-Signature=b07e35851193d3605ede272bb2ddfcf3029f3154977624cf0d33a2160790d6ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
