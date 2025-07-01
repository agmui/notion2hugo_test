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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBE2S74M%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH6pzWEsv6V3I7OCDBjScwZmfF430UhoiYSHKdtrr%2BMwIhAOfZ6HDqmUvkVYAxY%2Bq9vPZZ6DBVoeI%2BK2lNyHIOhBUJKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2KuNCDURrKuB00q0q3AOqkcbKT%2Babg1p8ZYWA43nH64khrg7D448ypRGFxr193MfzexvxrFbb6NuAwgCrAcB2OB%2BWiy7XD8NsCS1nfwF3rDxpZWk2l4f4sMTpvcqQFJHvI30bsx8qVoM5TuvfjL94wXhLSqt99KSG%2Bt5OsgA7H6vdFOhaojlt%2B1d%2F2HsSNgN%2B8WdNeLRz6xLG9dVsgOmMtokBf2HiPI0NnCoGEx02tj%2BQMW1Mm6u%2FhfBq3rWpaFP%2BDSX6TbNJM0fGJ1vrcE6Ms1P2Ra%2BkZcdHCoIyHe79Cx2JMhQjBtcdGQW1NAqCp1On%2FzsK5z7xNCBFOZr0Nh88g7omSbNRs6TwoU5aZvNVMmxfUaGyvBthva6MxI2GZP%2FAx%2FYAEoLyeKW%2FQUUHJpiTgluSF%2Bs13EIJhXjz3zNkhDkwJup126mZw56048uE6JJs6weWbwj%2FPwqeotIIpIwU50O41YKQMbjmWrdklySAaoeV4BXdIzd6T9G3Yy92nNNhHIqpyKLk1bSXY52ncwGIvMqL%2FHgOcLQlVWolRjViYsVynsGhxwEPRW3XU0LenoxGPDTukDrYHJLWqtDgAmmnXUgnTPaEmKJOR8tdMOSqHBYFF%2BUZ77GpW9bJn5CW0KbcG0HchccS9k8z2zC2h5DDBjqkAUPfXw4ExMJ%2FRrCL5imlSFPfPZc8gCSb9VkJjDPfOAZWEh1vXnvEUDgK6hgIPTg2KOY1lzHf7MXeaQwK%2BEtbLHC5JxfXYRxHS5eB17AZ3Wd2pZ10Rg2t4YPqGlu39ghGIfT9ZO7jfRi%2Fz3KLdZ%2F7MDhR52C5rMtHOOzkZid1xlghjnvIHffV2s21i09VlqoNUNpWeMizqGx77nC8IQ0wmvdtT41h&X-Amz-Signature=f1291954c7001f14d0c3d0f8952f32a7071a62de91dffbbad5ff43e7da64370e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBE2S74M%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH6pzWEsv6V3I7OCDBjScwZmfF430UhoiYSHKdtrr%2BMwIhAOfZ6HDqmUvkVYAxY%2Bq9vPZZ6DBVoeI%2BK2lNyHIOhBUJKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2KuNCDURrKuB00q0q3AOqkcbKT%2Babg1p8ZYWA43nH64khrg7D448ypRGFxr193MfzexvxrFbb6NuAwgCrAcB2OB%2BWiy7XD8NsCS1nfwF3rDxpZWk2l4f4sMTpvcqQFJHvI30bsx8qVoM5TuvfjL94wXhLSqt99KSG%2Bt5OsgA7H6vdFOhaojlt%2B1d%2F2HsSNgN%2B8WdNeLRz6xLG9dVsgOmMtokBf2HiPI0NnCoGEx02tj%2BQMW1Mm6u%2FhfBq3rWpaFP%2BDSX6TbNJM0fGJ1vrcE6Ms1P2Ra%2BkZcdHCoIyHe79Cx2JMhQjBtcdGQW1NAqCp1On%2FzsK5z7xNCBFOZr0Nh88g7omSbNRs6TwoU5aZvNVMmxfUaGyvBthva6MxI2GZP%2FAx%2FYAEoLyeKW%2FQUUHJpiTgluSF%2Bs13EIJhXjz3zNkhDkwJup126mZw56048uE6JJs6weWbwj%2FPwqeotIIpIwU50O41YKQMbjmWrdklySAaoeV4BXdIzd6T9G3Yy92nNNhHIqpyKLk1bSXY52ncwGIvMqL%2FHgOcLQlVWolRjViYsVynsGhxwEPRW3XU0LenoxGPDTukDrYHJLWqtDgAmmnXUgnTPaEmKJOR8tdMOSqHBYFF%2BUZ77GpW9bJn5CW0KbcG0HchccS9k8z2zC2h5DDBjqkAUPfXw4ExMJ%2FRrCL5imlSFPfPZc8gCSb9VkJjDPfOAZWEh1vXnvEUDgK6hgIPTg2KOY1lzHf7MXeaQwK%2BEtbLHC5JxfXYRxHS5eB17AZ3Wd2pZ10Rg2t4YPqGlu39ghGIfT9ZO7jfRi%2Fz3KLdZ%2F7MDhR52C5rMtHOOzkZid1xlghjnvIHffV2s21i09VlqoNUNpWeMizqGx77nC8IQ0wmvdtT41h&X-Amz-Signature=492df25ab5016a0b417641e61baa7b8f16ad6759cd7b6febfc7e4364326c2e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
