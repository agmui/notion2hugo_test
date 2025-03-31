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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ77KWBN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAYBto76TyXuVmWCV5vLNeYkwMB41TaqObIX58rYV1EzAiEAkXf8gjV%2Bee02eGZatIqhGIOJpYf24YtVhn2d8JF%2F39YqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHywt%2Fp5Ncg2tOayGyrcAyEgKidlt7VEkmRF%2FusIFGFEhdyc4XnmMu4eMy1J%2F0%2F6UvwS46QoXFzAIoTzuPcO7lJA23DH4Q4Ggtcf5KWRFV1iVVFQTMHiB3UUo%2Fb%2Fr2yPFTYXy23eMudtuNsQydA9jY0VQo%2BZH0JasRGY7Digdy9OiFFZjK15cL2QI9mcnJLwKJIct2zJAask0JyaGDKh1ph89KaaYaV5ma7an4XPzVNELXThXXlcn1iHfHn%2FkPFWlLgWE%2FCx8d%2FHm8dgHydoSnh7xn9U%2BMjN4Qt9uARbNQNygg9Vuxfo6%2B78M6Mtama3waxD1I6j7FbDDrtNeyBMNeyERLsucMXIOF1foqc%2B7%2F%2FdVBfqo6xVzVSk%2Bp3eHnLDOlBQ5sN4b93TWyhT9Sle1ascmVp4c7Airsluknf%2BcmY2GiKUZ6L57n2XFxtrdLCUdeVQeM1DL2YhroMN8QW%2BZkIFXKGTra3yhEMd8hwqPxvxQ%2F8Dy4AE57L7QCVrl5388v6wTFtp1gqg8RU%2BUdz1bHkjTAF4VNH01RH%2FR%2FmJWKX8a5JdE7JGgipNNHoDKqw61TD97MtEEkCe9J4l7qAxDRlavSqA93Qm8%2BiL6yXUI7f4or7hMCmDFQre%2FCwJOEYTGyJc7f9EInwnQEkFMLS8p78GOqUBjHiSlynpd0bEavAohhTO%2Bf1lgA%2B7DeM4uL1wZhBqWR7MF6%2BuszeVyP0d2N6Wn3AVPEEvW0PUcHvg4gnfpubD8E70NdlRxjx9zzCeYisKwOQSe1Ki5RZ%2FBqqY3l7AJTgkmuYmdFRxqbVmKBjB%2Bp1joYQ6f21TAB9WX%2BWhTGN7zLntRosvRVhaR1jFPM6o8Y6r3gxOD3wRW9izq2hi0bLEBy2qN73Y&X-Amz-Signature=591cbea6ed2e82670b4a1b0f9e7011ab791965b7a9c67e71563024767fac920a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ77KWBN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAYBto76TyXuVmWCV5vLNeYkwMB41TaqObIX58rYV1EzAiEAkXf8gjV%2Bee02eGZatIqhGIOJpYf24YtVhn2d8JF%2F39YqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHywt%2Fp5Ncg2tOayGyrcAyEgKidlt7VEkmRF%2FusIFGFEhdyc4XnmMu4eMy1J%2F0%2F6UvwS46QoXFzAIoTzuPcO7lJA23DH4Q4Ggtcf5KWRFV1iVVFQTMHiB3UUo%2Fb%2Fr2yPFTYXy23eMudtuNsQydA9jY0VQo%2BZH0JasRGY7Digdy9OiFFZjK15cL2QI9mcnJLwKJIct2zJAask0JyaGDKh1ph89KaaYaV5ma7an4XPzVNELXThXXlcn1iHfHn%2FkPFWlLgWE%2FCx8d%2FHm8dgHydoSnh7xn9U%2BMjN4Qt9uARbNQNygg9Vuxfo6%2B78M6Mtama3waxD1I6j7FbDDrtNeyBMNeyERLsucMXIOF1foqc%2B7%2F%2FdVBfqo6xVzVSk%2Bp3eHnLDOlBQ5sN4b93TWyhT9Sle1ascmVp4c7Airsluknf%2BcmY2GiKUZ6L57n2XFxtrdLCUdeVQeM1DL2YhroMN8QW%2BZkIFXKGTra3yhEMd8hwqPxvxQ%2F8Dy4AE57L7QCVrl5388v6wTFtp1gqg8RU%2BUdz1bHkjTAF4VNH01RH%2FR%2FmJWKX8a5JdE7JGgipNNHoDKqw61TD97MtEEkCe9J4l7qAxDRlavSqA93Qm8%2BiL6yXUI7f4or7hMCmDFQre%2FCwJOEYTGyJc7f9EInwnQEkFMLS8p78GOqUBjHiSlynpd0bEavAohhTO%2Bf1lgA%2B7DeM4uL1wZhBqWR7MF6%2BuszeVyP0d2N6Wn3AVPEEvW0PUcHvg4gnfpubD8E70NdlRxjx9zzCeYisKwOQSe1Ki5RZ%2FBqqY3l7AJTgkmuYmdFRxqbVmKBjB%2Bp1joYQ6f21TAB9WX%2BWhTGN7zLntRosvRVhaR1jFPM6o8Y6r3gxOD3wRW9izq2hi0bLEBy2qN73Y&X-Amz-Signature=67366340c270f72978ed7d22bd7bbd991d6e3c9c90a04289a5ab0c72e6d348a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
