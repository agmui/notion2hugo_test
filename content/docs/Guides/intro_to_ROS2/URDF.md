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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7VU5LSA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKG5W4WSO5siWr7oOhSEGWOIJ1o3xpTQGVMudQNwm0jAiB7632x6lqLQdGqE8dVTTjdwTUdoRRylhHXEavxpAjlWyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBPnoqQmJd2KdGlLwKtwDpHjevGPFPz1xcIqsVqvwPh5ofLvrYDtBE738Jz1IuqLlsgZ5bmsioXgvxnGLAgIUycy1lRJEKePJm5tgdtYZZOT%2F5g6qNnoJjBfNGPOOi561CL2118x%2BAXKzySLCfhD8Lkc0RgJ7PR1k0FOVooszrRNmnWgJKDZv1p1BoT1fxCm2%2FZHKKNZYqFuQQhEFIybjPuswv%2FTYoZStcBkqSl4aSza3UpicewGlm2DnT2%2FgzEyU3BGJNdogkrdWWtxUhLnn3f6wD091XGeuhhzv%2FgdFv3rYGGXHt8jwgCp%2Bl0QvLazgYQQ1%2FryyjZxbt3GvFngYwe1%2B6YnuE3TyBJ2gbMHVwJzs7m3lezBr3wluTjKIcDQgGFiT0frbSpp5%2Fn3oBfKi5YNY%2ByhWGvDW8WWRGdeJNg9YvwsbSfai6nA4VKhDSWt1XipHNVvie3XZcqY1lsdJ%2BqiZmqcVCPr3dBFSRcitFTqAWAemcevzT%2BJyMRaWqdKgBGKhDM27JLWfYA6UOSjJMV1d1fbMjzxtot4PNUXYRh5eMqycN8a2CGXUb3FLU5j3G7Lm8bxUXoM9MdlOt8XpL6WahiP35KnryNS9BmKyVE6TjhB70jJoVElZ73r87XZVuOOV%2FjPeYn7cA30w17z9vAY6pgEHZFCmJd6vF04x4MlPwyPf%2FQeOFNixqf3Njgr1ZPvWMqZMS7EaxNKxB9lEOMH4wOp2gZmFeThQrSqwWUcJvCWX1tVeC2C9Ko%2BOrRlXhhCUQcmzF1saKxp3vfPB8Whtv%2F4OuOsaQptmFjULD%2BWdB3TwDqA9crnIoYkBP%2FCwDv8V1Lyzw7oTWr6yncjim1SkpoxHekAGppUJuRL8mdV9B8S91nTU4YPQ&X-Amz-Signature=a062359dd966e9dee4dd42adf78fd8e4550bfaef58d5937fa9342e400d4a0807&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7VU5LSA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKG5W4WSO5siWr7oOhSEGWOIJ1o3xpTQGVMudQNwm0jAiB7632x6lqLQdGqE8dVTTjdwTUdoRRylhHXEavxpAjlWyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBPnoqQmJd2KdGlLwKtwDpHjevGPFPz1xcIqsVqvwPh5ofLvrYDtBE738Jz1IuqLlsgZ5bmsioXgvxnGLAgIUycy1lRJEKePJm5tgdtYZZOT%2F5g6qNnoJjBfNGPOOi561CL2118x%2BAXKzySLCfhD8Lkc0RgJ7PR1k0FOVooszrRNmnWgJKDZv1p1BoT1fxCm2%2FZHKKNZYqFuQQhEFIybjPuswv%2FTYoZStcBkqSl4aSza3UpicewGlm2DnT2%2FgzEyU3BGJNdogkrdWWtxUhLnn3f6wD091XGeuhhzv%2FgdFv3rYGGXHt8jwgCp%2Bl0QvLazgYQQ1%2FryyjZxbt3GvFngYwe1%2B6YnuE3TyBJ2gbMHVwJzs7m3lezBr3wluTjKIcDQgGFiT0frbSpp5%2Fn3oBfKi5YNY%2ByhWGvDW8WWRGdeJNg9YvwsbSfai6nA4VKhDSWt1XipHNVvie3XZcqY1lsdJ%2BqiZmqcVCPr3dBFSRcitFTqAWAemcevzT%2BJyMRaWqdKgBGKhDM27JLWfYA6UOSjJMV1d1fbMjzxtot4PNUXYRh5eMqycN8a2CGXUb3FLU5j3G7Lm8bxUXoM9MdlOt8XpL6WahiP35KnryNS9BmKyVE6TjhB70jJoVElZ73r87XZVuOOV%2FjPeYn7cA30w17z9vAY6pgEHZFCmJd6vF04x4MlPwyPf%2FQeOFNixqf3Njgr1ZPvWMqZMS7EaxNKxB9lEOMH4wOp2gZmFeThQrSqwWUcJvCWX1tVeC2C9Ko%2BOrRlXhhCUQcmzF1saKxp3vfPB8Whtv%2F4OuOsaQptmFjULD%2BWdB3TwDqA9crnIoYkBP%2FCwDv8V1Lyzw7oTWr6yncjim1SkpoxHekAGppUJuRL8mdV9B8S91nTU4YPQ&X-Amz-Signature=eab88f33c4f9d41dd89fa7e385d8e6091105d95088b20d39d790f5fb73d6dde7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
