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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JCXNVCP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gpeVzFV2ntd%2FFtr5cApgiy2oOl1aL1bpY55sfXmVogIhAJ8tP4yqhUaSm5%2FiKrZIUb%2BGPRJxmwtfctVTY%2FBJCMC6Kv8DCEIQABoMNjM3NDIzMTgzODA1IgwIUJL%2FED7EOwWrSOIq3AOAHK%2FY5VY3QMSiXv52KShe6Y7LXFn51PI33rfvoTQWa%2FDZp0oO9Ep96ilecbFh0%2F27GQmBi6qD3fxTjeNoDb3%2FarssOUCCOTFa%2F36BOSAeXvDxGcUz8oUQrOVD7sc2BPa5Rf9%2FeYxkEi2W6JVgSD9lcmBEKtH0ciYkjxBkw4fOOO1U2dO8z3vNvNRk%2BtwrhH8lXTODBM6sc2KJ1vi7FD3pX2lR9vE3%2BxutSBmGxsb1FKK6YgdrVi%2FFNzV0yyJE9WshYAWSaOHZrIKNOWUGK8GCWKtMGqJGqotkRT0UhY%2BcMDc4HEgFpg7sEyDhAk7MxDRqRx4rfxhgukucMS8Z2WYaScrHqm7nT%2FILAM4UGB%2F5FbVd9XvXCy0mn6Rxzy6SxLI%2Fd0JnrhXpnnAee3%2Fy3kGC9LtbU2yFQ2AVTU%2FrerL%2B%2FZlhpM6U83d%2FJUtcxCUYNRlOOGnE7eAhZ4t6FYxXMyseo4PP%2B2e8SrlZaRLJh1H0dZP5WjYhKH5YABnD9%2FTIUS5t0F0M6Y8Onv7lZo5pWcbAMd%2BNNJj47U2GYVlFP5VLDql7YOCp0pBQGh6PJubtougVWRAp1XpivoQF5omzP%2BP0IRmSMM%2BQw9Z9LLH0Bb1O1D6hJC%2BIAKMtYCFMZzCp%2Fsi%2FBjqkAbE6YgbFUEGGwY47ieARCpbdCzCMubr94ks6XJnyUxpMKaRfmMrOM%2FPiiBhGQNc7EnmAJsCbS0bY0ZqlE4X%2BRPIXyWISCfRHIr65EfI4B%2FcCAeJkkqN5o%2BXCgxrd23LK8l2%2BheIzUg%2FH53ft4%2B7RkaSxGbkQujT3JGphRvi3W7Zpm9Z6blC7uZlo3XzNs9I6s5u1A6HSVIjBQafKp%2BGbMDRKfQ3Z&X-Amz-Signature=6bdb3c31871284c629afcfe24b86631ce0a84d9cd75705d3de4ca5a538847ab7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JCXNVCP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gpeVzFV2ntd%2FFtr5cApgiy2oOl1aL1bpY55sfXmVogIhAJ8tP4yqhUaSm5%2FiKrZIUb%2BGPRJxmwtfctVTY%2FBJCMC6Kv8DCEIQABoMNjM3NDIzMTgzODA1IgwIUJL%2FED7EOwWrSOIq3AOAHK%2FY5VY3QMSiXv52KShe6Y7LXFn51PI33rfvoTQWa%2FDZp0oO9Ep96ilecbFh0%2F27GQmBi6qD3fxTjeNoDb3%2FarssOUCCOTFa%2F36BOSAeXvDxGcUz8oUQrOVD7sc2BPa5Rf9%2FeYxkEi2W6JVgSD9lcmBEKtH0ciYkjxBkw4fOOO1U2dO8z3vNvNRk%2BtwrhH8lXTODBM6sc2KJ1vi7FD3pX2lR9vE3%2BxutSBmGxsb1FKK6YgdrVi%2FFNzV0yyJE9WshYAWSaOHZrIKNOWUGK8GCWKtMGqJGqotkRT0UhY%2BcMDc4HEgFpg7sEyDhAk7MxDRqRx4rfxhgukucMS8Z2WYaScrHqm7nT%2FILAM4UGB%2F5FbVd9XvXCy0mn6Rxzy6SxLI%2Fd0JnrhXpnnAee3%2Fy3kGC9LtbU2yFQ2AVTU%2FrerL%2B%2FZlhpM6U83d%2FJUtcxCUYNRlOOGnE7eAhZ4t6FYxXMyseo4PP%2B2e8SrlZaRLJh1H0dZP5WjYhKH5YABnD9%2FTIUS5t0F0M6Y8Onv7lZo5pWcbAMd%2BNNJj47U2GYVlFP5VLDql7YOCp0pBQGh6PJubtougVWRAp1XpivoQF5omzP%2BP0IRmSMM%2BQw9Z9LLH0Bb1O1D6hJC%2BIAKMtYCFMZzCp%2Fsi%2FBjqkAbE6YgbFUEGGwY47ieARCpbdCzCMubr94ks6XJnyUxpMKaRfmMrOM%2FPiiBhGQNc7EnmAJsCbS0bY0ZqlE4X%2BRPIXyWISCfRHIr65EfI4B%2FcCAeJkkqN5o%2BXCgxrd23LK8l2%2BheIzUg%2FH53ft4%2B7RkaSxGbkQujT3JGphRvi3W7Zpm9Z6blC7uZlo3XzNs9I6s5u1A6HSVIjBQafKp%2BGbMDRKfQ3Z&X-Amz-Signature=8b4cf454cdc1bd187e43e3f75edc85be955e4c8aae047b5e183c5ec8a3cce402&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
