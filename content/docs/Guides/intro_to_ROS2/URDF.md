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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ULBYPJG%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FWOsPfPYg6mWAlAEwYFSba9lpmzIJoZnzAkDqPCgT6AiAlOpzbfhntouz2p2BekxDbTTE7NWywtp0WLSBs8M42myr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMGCe%2F9KZFxQHXKlu6KtwDU2%2BGzuBi8aHABCmv%2FahH6niEJpzc3urcvDtUMkAAuMd7gChg7C%2FQ2bCC7Tzestpatlhu6Te3YVuHjGNK4ltQwpepffAfL6tZIUyCMEeFe8%2Bi%2FtuZwfgKnAQr8h4Apj9cc55HIoMwH7Wh86NY%2FRJZROJO5wJWgwymireeZgX37QQfJGEhgeWXRKUdrroRheTazkyzseUBavamWc7g5Fy7Zljai4ze3q3U2G3QtxL%2FSoMrdGaZmoxTgX%2BPEbsVltE2z39QOlTTbR1kLB01GJIV9uXzvZVb8zkDTTMuU0vLAR%2FMFHUza5HngVxnDFNB%2BiEkvMoz1%2F%2BRq14o1%2BGtZggJwO%2Bfy4dGtMyKCP6AnrZY%2FiempDExSDCwi%2FqnoB%2BooE9Haivwzf4CFT%2BpmRrorOlCL27wLlTUdT2akjaQDI9P3VORzSuhlBhz3gbYrinPc6OmD0wBdPmBq%2B0%2F9NV2PGxlUpGDEdH6EvK0%2BI07WpQwrXr70MItLaESGFjvqoq7PXVu3Aq2O9LZmlS6aR%2FJDPrZyEWmD8XPrEOBN1YJL6v1WpJY139yYic6OP3Ralw6wYIOV7GhWlahp3fHkvrvFvSXglaJpDdqsYO%2FT2%2BiNrJO%2B3vG%2FaaLW9OjJd2c%2BFsw4%2BjHvwY6pgHX5abFPlK0ULagN%2B1plP1hmY3Ox%2BIL7Buv%2Fc6R%2FglBgLZztLTvj2ooVsO%2BUm8r%2F3yu4ItGuCKYs9Y0D5lVRmqVTkKAAEGXc9UEhLvaLwSEEQu%2FqYxRE3il1Kv4f2jPIsAO0e6KBLpYSkZrug%2BZzsrC5duGemyHlKoWOVD7rbhQBupIZ9uka6oZkG7LZXz94YnWMu%2F2R0RAGOavR9mpqIJXwHseajpx&X-Amz-Signature=6b4e5931963117d6748a6bc230aade8cff8c3f9028bda18a8816528038af0e76&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ULBYPJG%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FWOsPfPYg6mWAlAEwYFSba9lpmzIJoZnzAkDqPCgT6AiAlOpzbfhntouz2p2BekxDbTTE7NWywtp0WLSBs8M42myr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMGCe%2F9KZFxQHXKlu6KtwDU2%2BGzuBi8aHABCmv%2FahH6niEJpzc3urcvDtUMkAAuMd7gChg7C%2FQ2bCC7Tzestpatlhu6Te3YVuHjGNK4ltQwpepffAfL6tZIUyCMEeFe8%2Bi%2FtuZwfgKnAQr8h4Apj9cc55HIoMwH7Wh86NY%2FRJZROJO5wJWgwymireeZgX37QQfJGEhgeWXRKUdrroRheTazkyzseUBavamWc7g5Fy7Zljai4ze3q3U2G3QtxL%2FSoMrdGaZmoxTgX%2BPEbsVltE2z39QOlTTbR1kLB01GJIV9uXzvZVb8zkDTTMuU0vLAR%2FMFHUza5HngVxnDFNB%2BiEkvMoz1%2F%2BRq14o1%2BGtZggJwO%2Bfy4dGtMyKCP6AnrZY%2FiempDExSDCwi%2FqnoB%2BooE9Haivwzf4CFT%2BpmRrorOlCL27wLlTUdT2akjaQDI9P3VORzSuhlBhz3gbYrinPc6OmD0wBdPmBq%2B0%2F9NV2PGxlUpGDEdH6EvK0%2BI07WpQwrXr70MItLaESGFjvqoq7PXVu3Aq2O9LZmlS6aR%2FJDPrZyEWmD8XPrEOBN1YJL6v1WpJY139yYic6OP3Ralw6wYIOV7GhWlahp3fHkvrvFvSXglaJpDdqsYO%2FT2%2BiNrJO%2B3vG%2FaaLW9OjJd2c%2BFsw4%2BjHvwY6pgHX5abFPlK0ULagN%2B1plP1hmY3Ox%2BIL7Buv%2Fc6R%2FglBgLZztLTvj2ooVsO%2BUm8r%2F3yu4ItGuCKYs9Y0D5lVRmqVTkKAAEGXc9UEhLvaLwSEEQu%2FqYxRE3il1Kv4f2jPIsAO0e6KBLpYSkZrug%2BZzsrC5duGemyHlKoWOVD7rbhQBupIZ9uka6oZkG7LZXz94YnWMu%2F2R0RAGOavR9mpqIJXwHseajpx&X-Amz-Signature=1f90c847cef3943ff08d95256efad85a2a60e4b38f22502dff67c200b5c76c83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
