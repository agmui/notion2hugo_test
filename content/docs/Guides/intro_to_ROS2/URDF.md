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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WM7AUU3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCXAIPr1YmbLJVINGKoGDNqEBtEuG2WgPUyKDQ8BPUrlgIhALoOLIuv%2BqgmaadsW6s7Eh%2Bimaim8Ox18gYdZY9h8bzuKv8DCG8QABoMNjM3NDIzMTgzODA1IgwF9EcRAl55Hm9tnIwq3AOxPMq0FWkaJeMjYtxgmwSh5q0kUaPwLHMO3%2BUM6NzJCekshr53deGbQh0XFHZLCUmup0u1LnS4cIxpG71Fd%2F9Cyn9CHety06nXXRrL4XO1Bsm1BzpxGry8Ea3%2FvEQYGpjS6VihqxqaCOaR8PygOvoQZEbTQCODxDFNKGAumqdGYAnjBgzYhk7t6ByLxvuy310qztz42TW2JGe5oUs2sTQTXUecom3hDIzDcSJOcNdZWTNxhzzWLcT1WH0VW3goA2HDVauqQzScmHmYAjkTRw221mYzE8PFpz3fr6RYCZmb4QM1Vjn4azXrs%2BfAoVC%2Fl1uGC6C%2FTXTY%2B4HKYIzE%2BknHfHXrQaXDKX52lj0PyuVWGhYSIXvnz56%2FUb82UuBfiXSEB0%2FaecdBs1avcTZvGRmpyin13VRxF5GNtY%2BFN%2BhMWF9lI%2FrRPfO%2F1CV2pEt0FHI5k9aK1EkyMVo9PG%2BDJZnlr2C6hKZRaQwxikgk9zuybVKX6Ds3J%2FN%2F%2BSj%2BAWifHRVbFQ2lhM2H02S8S87XpilvoOf2KL6bI1%2BlBAciwF3SwzWuw2xMpTFwr9BhfRRD9Uuxd1UpkI3uba%2BPw5adJfwuUqtkN70QhMNMQYInqYh%2FbdRykhlCWJXprbc1BTCR7v%2B9BjqkAVZ2maoEF3q10WeYWcEcCX4osQ7ZV60z2fk0ViSgmHqNzA7KA2Ugd%2F3Kb2VHkXo%2Bn2FTUN2hh3BpJCAc7jsHfGwsfqZs859yBHxaZ%2FAfkQBBFISC%2Bl7JsPz3vgXh4rRplIiL6NjLwNJpTp4ChfcPqD0mxhQ%2FW7MerVnLtkZJH9Ir%2BPSxHe3wPqWmg%2Bm3YeGs4GxaFZL3bM6usEEo3CtgCXx%2BsHTw&X-Amz-Signature=df7811d745801d08fa98f3f464ca2d349a639f4cabe275b571290d82b314b9ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WM7AUU3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCXAIPr1YmbLJVINGKoGDNqEBtEuG2WgPUyKDQ8BPUrlgIhALoOLIuv%2BqgmaadsW6s7Eh%2Bimaim8Ox18gYdZY9h8bzuKv8DCG8QABoMNjM3NDIzMTgzODA1IgwF9EcRAl55Hm9tnIwq3AOxPMq0FWkaJeMjYtxgmwSh5q0kUaPwLHMO3%2BUM6NzJCekshr53deGbQh0XFHZLCUmup0u1LnS4cIxpG71Fd%2F9Cyn9CHety06nXXRrL4XO1Bsm1BzpxGry8Ea3%2FvEQYGpjS6VihqxqaCOaR8PygOvoQZEbTQCODxDFNKGAumqdGYAnjBgzYhk7t6ByLxvuy310qztz42TW2JGe5oUs2sTQTXUecom3hDIzDcSJOcNdZWTNxhzzWLcT1WH0VW3goA2HDVauqQzScmHmYAjkTRw221mYzE8PFpz3fr6RYCZmb4QM1Vjn4azXrs%2BfAoVC%2Fl1uGC6C%2FTXTY%2B4HKYIzE%2BknHfHXrQaXDKX52lj0PyuVWGhYSIXvnz56%2FUb82UuBfiXSEB0%2FaecdBs1avcTZvGRmpyin13VRxF5GNtY%2BFN%2BhMWF9lI%2FrRPfO%2F1CV2pEt0FHI5k9aK1EkyMVo9PG%2BDJZnlr2C6hKZRaQwxikgk9zuybVKX6Ds3J%2FN%2F%2BSj%2BAWifHRVbFQ2lhM2H02S8S87XpilvoOf2KL6bI1%2BlBAciwF3SwzWuw2xMpTFwr9BhfRRD9Uuxd1UpkI3uba%2BPw5adJfwuUqtkN70QhMNMQYInqYh%2FbdRykhlCWJXprbc1BTCR7v%2B9BjqkAVZ2maoEF3q10WeYWcEcCX4osQ7ZV60z2fk0ViSgmHqNzA7KA2Ugd%2F3Kb2VHkXo%2Bn2FTUN2hh3BpJCAc7jsHfGwsfqZs859yBHxaZ%2FAfkQBBFISC%2Bl7JsPz3vgXh4rRplIiL6NjLwNJpTp4ChfcPqD0mxhQ%2FW7MerVnLtkZJH9Ir%2BPSxHe3wPqWmg%2Bm3YeGs4GxaFZL3bM6usEEo3CtgCXx%2BsHTw&X-Amz-Signature=59e1fd6a847484e1bd7af21c6274f8c0643144b2f5879c58161158444cd1a1a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
