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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUCP2EIV%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2B3fbYfDte%2Fp%2BbNE6bKuzMaTFf39HC8kk4IrCEVNMsKAiAqxhDK59adJrCZFONJLRebdmt4jX9CSIAgCwkuCEuLzSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaNC6NSn1pzcl3dqKKtwDaUflUJoa1AObfYZSpErKz6gh60FWT8%2FH4EI5wtzUYzwwUV5o6F4rF98XfHzZ9bo%2FVNj0YC%2F8KZtGJ%2FAyWNpQAmZKv2RY2wwdhCoqgq1J1T3Hagtjv9mxRm97pbcNfatDXcUMSNz6p%2BuEz0UvXHMK%2F%2BFcYvyofYW2SBcFb6Zz5C%2FZRvHNxg4OFYCBlJFe0nn%2FqLRJTjBp6CAYi4j%2BYO6d01P7tT6GiJ6Zs9HvDgYvdpxr8q8IGNinrW3QpPH%2FJohcwSgsjmpRo2yomlqcbpcj%2BMT4HXIr86APR%2Fx1pvLjN1MmIBWIKN%2FD9PKnRyo4hoGlnRNT6f8glLT%2BZVJCK9ZeaOZPhN6gAikwjjtOddfqQcvcmggqN422MypTmaogYPaDV24KiEIi6YPTQ2TNVVfXU20PH2zlX6B5Igh1%2FcY64DemLzZ6tp2XlGnqMg3SSzSNwHtYb8PrjvjmFsxY4YsQ4yS4rQnVJ%2B5C2o6n2zVeBzmZH94bzO%2FwkTnc5v0MByeduq%2FxMuujQBxdXsl55gPkQcNNPJri6MnYg1IdUgi%2BW%2Br26kpfzYtRF0rzu7%2BJssSWslk1ke%2B%2F0b3K8yk%2BcLCl6lZXX7%2BcfcqXWCgBTAZ28U36sRAuUKne2%2FM6b8ww6cyAwwY6pgH5uPZhwGeHvti8CG0g4nQKhfwwsBOTxM4IE7f%2FmHWcs3K8lnt3AQDwBF6j69GzRs2l7ZboLF9szqW7gGDSvgBYojwFT93EurF6wVrK1uHrWECkfvbyJFkU5V8lG62UzT7tMrIUnZWpqXmjlwj7a%2F0ZNL9KVoTP3jtcXh%2B7FSNX4hYCtQ8sWHJr5W57knStKh45tZnPRP0leFqqCoSb5ZW55mRYW6gg&X-Amz-Signature=5cc1ea942b11cda6240ee6e566fa280649b36bb728ff1a31370e7600bfaac9ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUCP2EIV%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2B3fbYfDte%2Fp%2BbNE6bKuzMaTFf39HC8kk4IrCEVNMsKAiAqxhDK59adJrCZFONJLRebdmt4jX9CSIAgCwkuCEuLzSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaNC6NSn1pzcl3dqKKtwDaUflUJoa1AObfYZSpErKz6gh60FWT8%2FH4EI5wtzUYzwwUV5o6F4rF98XfHzZ9bo%2FVNj0YC%2F8KZtGJ%2FAyWNpQAmZKv2RY2wwdhCoqgq1J1T3Hagtjv9mxRm97pbcNfatDXcUMSNz6p%2BuEz0UvXHMK%2F%2BFcYvyofYW2SBcFb6Zz5C%2FZRvHNxg4OFYCBlJFe0nn%2FqLRJTjBp6CAYi4j%2BYO6d01P7tT6GiJ6Zs9HvDgYvdpxr8q8IGNinrW3QpPH%2FJohcwSgsjmpRo2yomlqcbpcj%2BMT4HXIr86APR%2Fx1pvLjN1MmIBWIKN%2FD9PKnRyo4hoGlnRNT6f8glLT%2BZVJCK9ZeaOZPhN6gAikwjjtOddfqQcvcmggqN422MypTmaogYPaDV24KiEIi6YPTQ2TNVVfXU20PH2zlX6B5Igh1%2FcY64DemLzZ6tp2XlGnqMg3SSzSNwHtYb8PrjvjmFsxY4YsQ4yS4rQnVJ%2B5C2o6n2zVeBzmZH94bzO%2FwkTnc5v0MByeduq%2FxMuujQBxdXsl55gPkQcNNPJri6MnYg1IdUgi%2BW%2Br26kpfzYtRF0rzu7%2BJssSWslk1ke%2B%2F0b3K8yk%2BcLCl6lZXX7%2BcfcqXWCgBTAZ28U36sRAuUKne2%2FM6b8ww6cyAwwY6pgH5uPZhwGeHvti8CG0g4nQKhfwwsBOTxM4IE7f%2FmHWcs3K8lnt3AQDwBF6j69GzRs2l7ZboLF9szqW7gGDSvgBYojwFT93EurF6wVrK1uHrWECkfvbyJFkU5V8lG62UzT7tMrIUnZWpqXmjlwj7a%2F0ZNL9KVoTP3jtcXh%2B7FSNX4hYCtQ8sWHJr5W57knStKh45tZnPRP0leFqqCoSb5ZW55mRYW6gg&X-Amz-Signature=54b12c79703f537895a399aae044b7f588b6091e41f4f63c0ba3e54d4010acfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
