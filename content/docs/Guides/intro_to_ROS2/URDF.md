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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EKVCQMX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgLhZDiZaylLPN2ssOCid7jpgAYGuZYtX%2BtEoyY5jQYAiEAsE97860FYApLSP%2F5IadUUVuNSbpxy75457MMZ4iHRbgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMV8uvQknDRdoYov3SrcA%2BjRMRa6NNK8AdHo1Tr1VuptOaVqx71s9wogEd6aZsqOzlUs99w6GJSlXGarlboFtAKcBKZLwERuDolrx0YQoaFuNWU%2Fq6E%2FZuAhW25FS8C%2FwAm6GODUMbvyehdgHBtyYflcYHSNd5eM15g8ny%2BAbf0IIgqsChh3D1J04FxxTLNty1Ln7EBJP2DaCRIqWLnxKn63elOrHgoHhgUdn%2BCDlwuLkTvebh562vw8NsLn0tMyfi%2F3T%2BWtR87VuZzRi3v1GqF%2F3yuFZIxyFr5tLJvFjOHphwK06zaIOTPyCPo7oXvI2FOm1yhNQBIHTpMax%2Fxrh2u3SOsNl0Cy%2B6jlwSEG3QdHT9rQACZ2mIdQqITMe2FQDzbxV8Vwz2OaZARjQ2nlWtZwu2WAQFw47Uj7DJC6UXB6DnJ0gr%2B0j01i5voliQFRaSDwuWFHxYWFd%2BtmnAmwKv5Uq74eBMQc0lpArrkN5jWk1OXmuNrsF9rN9Nu%2BQPZtRQn%2Bolh5zUTmDSXX6woVq9Gl1E2TwGIOdCYdVpTQ10N%2BAlAtU6Pfe93d2Du4LZosCYqbfVqA4tEmvymw4tO1Q6Vf3JSK8m1fH0IvrE18quL8kl7L6ioXyzCsQfYdjlnTaQxt40DYr52JRC4zMKehtMQGOqUBzhyqTckwuMWaHGRXdxJFx0HyV%2BMUDqQQbKrCvD2aHl%2FVfuRU%2F1y9fAgcus155Yk0O9PDV2buIxlTPuN%2BW2qFaLt1FLcp5ZvVYbEzt5ZzxTXvGkqm08dHcBgFhHrm4nnE55s7QQp5t9SPTF8Dwt4u4f5FvaEa8EyW88EdiqZCZrrnTXWacaznBRp2IMsRYYT43oRlys%2FsHFgShX1hKEJy90mAo%2FkQ&X-Amz-Signature=af1f4fe62e61d54510ca6d10221aabe5afa8f1807f3c4cbf36bff250249e742e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EKVCQMX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgLhZDiZaylLPN2ssOCid7jpgAYGuZYtX%2BtEoyY5jQYAiEAsE97860FYApLSP%2F5IadUUVuNSbpxy75457MMZ4iHRbgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMV8uvQknDRdoYov3SrcA%2BjRMRa6NNK8AdHo1Tr1VuptOaVqx71s9wogEd6aZsqOzlUs99w6GJSlXGarlboFtAKcBKZLwERuDolrx0YQoaFuNWU%2Fq6E%2FZuAhW25FS8C%2FwAm6GODUMbvyehdgHBtyYflcYHSNd5eM15g8ny%2BAbf0IIgqsChh3D1J04FxxTLNty1Ln7EBJP2DaCRIqWLnxKn63elOrHgoHhgUdn%2BCDlwuLkTvebh562vw8NsLn0tMyfi%2F3T%2BWtR87VuZzRi3v1GqF%2F3yuFZIxyFr5tLJvFjOHphwK06zaIOTPyCPo7oXvI2FOm1yhNQBIHTpMax%2Fxrh2u3SOsNl0Cy%2B6jlwSEG3QdHT9rQACZ2mIdQqITMe2FQDzbxV8Vwz2OaZARjQ2nlWtZwu2WAQFw47Uj7DJC6UXB6DnJ0gr%2B0j01i5voliQFRaSDwuWFHxYWFd%2BtmnAmwKv5Uq74eBMQc0lpArrkN5jWk1OXmuNrsF9rN9Nu%2BQPZtRQn%2Bolh5zUTmDSXX6woVq9Gl1E2TwGIOdCYdVpTQ10N%2BAlAtU6Pfe93d2Du4LZosCYqbfVqA4tEmvymw4tO1Q6Vf3JSK8m1fH0IvrE18quL8kl7L6ioXyzCsQfYdjlnTaQxt40DYr52JRC4zMKehtMQGOqUBzhyqTckwuMWaHGRXdxJFx0HyV%2BMUDqQQbKrCvD2aHl%2FVfuRU%2F1y9fAgcus155Yk0O9PDV2buIxlTPuN%2BW2qFaLt1FLcp5ZvVYbEzt5ZzxTXvGkqm08dHcBgFhHrm4nnE55s7QQp5t9SPTF8Dwt4u4f5FvaEa8EyW88EdiqZCZrrnTXWacaznBRp2IMsRYYT43oRlys%2FsHFgShX1hKEJy90mAo%2FkQ&X-Amz-Signature=3a1cf8193c7a578b660d27a5d70db77319ec6d16d21bfdbebd73693726a33f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
