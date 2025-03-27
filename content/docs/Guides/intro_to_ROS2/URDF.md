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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LOJVULM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICW3WhdwYk8NNRtrQ5OPxD%2Br9zdwrRMdiGQzKbo4ODU6AiEA9KuLHNHzraolsSNGTjnFGjK%2FIJge4nxQ6VL3S6iSvdYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDO3hV5BpAQ8rfQ%2FW2CrcAx529TOcczK5n924yWvGHAWVBrR1RKuXNuS7YOWDQlmV8H%2B7vPgUcm32j1qOJZLOG9dPlJhkFhf9m0X9nzOy%2FeNYW8KWUOJGdQIrTDxqBC7i35DwYT8tx4CeUGU9slbN44fKXD6v01zHD926OSHeV8xcqc%2BV%2F6DMjnmg372FE9Tez6J7xHDDQ8ZHQbC0RAW6h4ewZ24XuLihrqt35ZPX4vouSayUTy8WOtlwAT6L6wKD1Zd9dOk3oLDQKf0pxPneYu%2Fp1B5lfcl1V%2BNDsoKre8J%2BnsSv%2FwClZaWtPjTHV8wXAO7BQNn1LMbbR3qNKXmjQg8dlS6eZnsWyQcYRuYDrrw0AXtMYFSrcQD3%2BJwFCVSyDZwJW22C4jdWvH6UTGL8Xs68g2PWfhU0%2Fa2miMQWeo4CsnXDOXLB3HzZsu6DWvmoc9DwJ4%2B5tA46qLez1qVpHxEA6ghlz%2B3IQvSWcrmwkuqL2JDyOHf3ldcYwa3eXx9F5EPJINnZ%2BSCNFgkeKQCSNGu%2BxHTKlYlVjKNjPvDFgjxwmbwqUaIjeAntftXFqYy8ny%2FATdjLGaCHthjNhqKoBuevJ7%2BeAtZhAmrEOv96WysVG7qzRUBbwEXBCgq0DSBwfH7578olrAG57eVbMIClk78GOqUBYIXCuV1fEjFxpLzg8DJkaJkV6Ue2%2FxU%2BKKStYpd7oymJZpcTjE9cpZY3EcD8keJEoNZMxiXSuHnlFO3Oap9GiKPV%2FvXvHEFSbiDUl10Q1AgsBt9yTkLGXauaLoWMZaSDcE%2BHnM4WKrMSZxBpTjmPtFWQ5VEIGT1QbkkOfjjr%2FZ3X5atHStrdTYwSK7Z5N6gedDEJDp0F8oxbwJw9Mrvf1r1HT8j%2F&X-Amz-Signature=66c1f4056b60b9b248625180ca7c6a94e9b5874a265ebc70cc2e107980942f73&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LOJVULM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICW3WhdwYk8NNRtrQ5OPxD%2Br9zdwrRMdiGQzKbo4ODU6AiEA9KuLHNHzraolsSNGTjnFGjK%2FIJge4nxQ6VL3S6iSvdYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDO3hV5BpAQ8rfQ%2FW2CrcAx529TOcczK5n924yWvGHAWVBrR1RKuXNuS7YOWDQlmV8H%2B7vPgUcm32j1qOJZLOG9dPlJhkFhf9m0X9nzOy%2FeNYW8KWUOJGdQIrTDxqBC7i35DwYT8tx4CeUGU9slbN44fKXD6v01zHD926OSHeV8xcqc%2BV%2F6DMjnmg372FE9Tez6J7xHDDQ8ZHQbC0RAW6h4ewZ24XuLihrqt35ZPX4vouSayUTy8WOtlwAT6L6wKD1Zd9dOk3oLDQKf0pxPneYu%2Fp1B5lfcl1V%2BNDsoKre8J%2BnsSv%2FwClZaWtPjTHV8wXAO7BQNn1LMbbR3qNKXmjQg8dlS6eZnsWyQcYRuYDrrw0AXtMYFSrcQD3%2BJwFCVSyDZwJW22C4jdWvH6UTGL8Xs68g2PWfhU0%2Fa2miMQWeo4CsnXDOXLB3HzZsu6DWvmoc9DwJ4%2B5tA46qLez1qVpHxEA6ghlz%2B3IQvSWcrmwkuqL2JDyOHf3ldcYwa3eXx9F5EPJINnZ%2BSCNFgkeKQCSNGu%2BxHTKlYlVjKNjPvDFgjxwmbwqUaIjeAntftXFqYy8ny%2FATdjLGaCHthjNhqKoBuevJ7%2BeAtZhAmrEOv96WysVG7qzRUBbwEXBCgq0DSBwfH7578olrAG57eVbMIClk78GOqUBYIXCuV1fEjFxpLzg8DJkaJkV6Ue2%2FxU%2BKKStYpd7oymJZpcTjE9cpZY3EcD8keJEoNZMxiXSuHnlFO3Oap9GiKPV%2FvXvHEFSbiDUl10Q1AgsBt9yTkLGXauaLoWMZaSDcE%2BHnM4WKrMSZxBpTjmPtFWQ5VEIGT1QbkkOfjjr%2FZ3X5atHStrdTYwSK7Z5N6gedDEJDp0F8oxbwJw9Mrvf1r1HT8j%2F&X-Amz-Signature=8e55e81e3d4accdd6a62d681bb8ca8e8adce94889ef6d7a5d7998128a073c0c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
