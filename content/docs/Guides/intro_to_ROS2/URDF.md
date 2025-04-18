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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQ3J2U3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqlwjtbfrm4Mxp19XCFhjI46ZCa2ll%2BavXsznO8MedhAiEA9Oxg%2FMNK%2Bk%2FdOAUIp1FPds2RpF64h7TNpUBj%2BbdsjTYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLgF1Tg6dt0QG9ZubCrcA5r%2FWuNwIaMlx6v%2FN6hYenSHf56Hyidjyd6alpsHVbI5Rg9Zzx3n4zQeMc2OiN6AStpkQ4e3HeX7R5LZFXp%2BfeHV%2FMVUTl7awZV%2FWn98OJ7Nlz%2F8L5IATAKVM3IzE%2B3EiftvhwP8%2FOL5CUtJ5mwYZRL5NxRL%2FNnJ4D3%2FV%2BlJm4615rcu56v41zBnFpuY1fo%2B1LklXIFNYaKZ3X9IBZ%2FkHSQ45w9VgS8pHxM24m%2ByA8TRjG5uXB%2BY4iafUajJiPTbO9rtJk0rh6n6fnJqL7nOenmIafGJnjy9Gdw09hc%2FFjnILfGdKcYYOMZKwQvWZrxulj6NTtukETFX4yxrt1EboiXeYyZtuC2s2Xe2qJqrTVwTOCfqgIN4N5SQdSNJckAqQW2rhSepeGRTv9P1kr2rlzPgedKnQkzLn7jSlf6C9zfgcNOT2TDGG5k4Kp%2FvjSwDqI%2BXGck3bpPrPhEIvr8%2FdFCPm5LlmXgkqKmqrKuGpP05LDSmzIbywyW7BIASE3euHcm8b%2FyUKC3%2B5ZLyJmsPrd4adG0wsNIg6TnMadU8ubhytBZIFG%2B0NvSz4fA97w%2BvObjYCebYW4v7BcU1T5din700vZzFWRUUAde2FfuTZAkM4jTEW4Ir6xyCJvOjMPesiMAGOqUB1JhHGO10fHeSFGagRwJevJkLYcD5K8TgdmvbyuJdX1AwxNbvwHZVx2U9W8E96V39KE%2BQhRKXzcNmohCOj%2F3p%2F84cixn6fIrrQIVgcI4RJep%2BQnTfbi1dz%2FkHpcuowco%2FbnSL7t%2BnOuvu6feY8MYEgqck0zmjTSsAO68bNdDydZvYUC5KLrgXXPr6tE2ub48KuvlZQ57ARwqKEAqVerGr0BP8SkDe&X-Amz-Signature=35637849cb1b632176aa4aca5b2befdbf9f5d0dc9056acc310386b51fecbfa53&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQ3J2U3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqlwjtbfrm4Mxp19XCFhjI46ZCa2ll%2BavXsznO8MedhAiEA9Oxg%2FMNK%2Bk%2FdOAUIp1FPds2RpF64h7TNpUBj%2BbdsjTYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLgF1Tg6dt0QG9ZubCrcA5r%2FWuNwIaMlx6v%2FN6hYenSHf56Hyidjyd6alpsHVbI5Rg9Zzx3n4zQeMc2OiN6AStpkQ4e3HeX7R5LZFXp%2BfeHV%2FMVUTl7awZV%2FWn98OJ7Nlz%2F8L5IATAKVM3IzE%2B3EiftvhwP8%2FOL5CUtJ5mwYZRL5NxRL%2FNnJ4D3%2FV%2BlJm4615rcu56v41zBnFpuY1fo%2B1LklXIFNYaKZ3X9IBZ%2FkHSQ45w9VgS8pHxM24m%2ByA8TRjG5uXB%2BY4iafUajJiPTbO9rtJk0rh6n6fnJqL7nOenmIafGJnjy9Gdw09hc%2FFjnILfGdKcYYOMZKwQvWZrxulj6NTtukETFX4yxrt1EboiXeYyZtuC2s2Xe2qJqrTVwTOCfqgIN4N5SQdSNJckAqQW2rhSepeGRTv9P1kr2rlzPgedKnQkzLn7jSlf6C9zfgcNOT2TDGG5k4Kp%2FvjSwDqI%2BXGck3bpPrPhEIvr8%2FdFCPm5LlmXgkqKmqrKuGpP05LDSmzIbywyW7BIASE3euHcm8b%2FyUKC3%2B5ZLyJmsPrd4adG0wsNIg6TnMadU8ubhytBZIFG%2B0NvSz4fA97w%2BvObjYCebYW4v7BcU1T5din700vZzFWRUUAde2FfuTZAkM4jTEW4Ir6xyCJvOjMPesiMAGOqUB1JhHGO10fHeSFGagRwJevJkLYcD5K8TgdmvbyuJdX1AwxNbvwHZVx2U9W8E96V39KE%2BQhRKXzcNmohCOj%2F3p%2F84cixn6fIrrQIVgcI4RJep%2BQnTfbi1dz%2FkHpcuowco%2FbnSL7t%2BnOuvu6feY8MYEgqck0zmjTSsAO68bNdDydZvYUC5KLrgXXPr6tE2ub48KuvlZQ57ARwqKEAqVerGr0BP8SkDe&X-Amz-Signature=0f8b42d7f0076f89ddafe0eced5b50f5ebdd5816b7d3cca79a63a461506441b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
