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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NV4G5Y%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCvPfzLW%2F4ve1%2BSQTEIec1u1QhKlXGFHa10isilQgjCcQIhAOzM3NwGn7m15A0X8nnjbnmzuXXPW%2FQvILxMc36tSe%2FCKv8DCEwQABoMNjM3NDIzMTgzODA1IgwK2vEBcAKlbRF5qAoq3AP%2Flhdp%2FB57EiRCSoyK1KKzdF8o%2BrBgsqKVDy9vVOxvuFK0RLHgANYAmR0GTLMqxcB1xA6rjpQe7WgAcCchUdeHZg3O9EHGURJk3bTn%2BsiwIdZBqgWcjtWo0ldIyxxzJjsN1lzVsQcaIcqDxACnBYtKXPptlPEOaJmp1C9TP7eRGCzVAMQRFlO8%2FB%2BfIIJyGO%2Bf6Lpv7tQ1l27brcPekOnat%2FGqjubqL%2FIt8z3%2FuXy30Wq%2BwkpV4MA6uqxS1ycBLqRh7WYvvbWIOF88lNEVGBlNTSqy5eG8a3HCXrzqyp01gb07ZqO87l%2B9uHoweXD3s9urDiK683ctfRLU1JrxO4QSva8UYcw7rjdtBw29VJEhfNJ50tefnB%2BeZIIYFB%2BeluPiFRkb8QCvCKGM%2F1YJDd6v5FYiYAlvqjpOs25aRriYMPmVn%2BknJOx2pm5pU9YR6Kfjxb1IhCT0%2BC5rWE%2BhDLnIpPyoMvWr1HNmg85x9Q5nIGGJldT5cBpkptrLZ%2FlJEUXJfQKVOkIjwxNsm1AqMIQWHK2JXsN5yGTKzkJJ9ESAkAPMul1f6x3slnUlewFXWRyU1QL0rkh8XJzWdhhJAlVQuq2%2B9sn2g0%2BX8zW6%2Bvk0wDned4wJUI7mVL7EvjC25qXDBjqkAWus20%2F9kRemAgrxBB9ZybOm9axrQBs1EwMuAQg6fGT8zDmRGVk0jghU5EO7flA1mGqvs1XDGXJJ4RYfKrQ9oDWbwfNA6Je9l9iiH5eklIgCBC52I8JC4ax4ool2wnDXWZKGYPPb3DobA2AtfM4tFJMqVBpUJRbdmcPiNUyhp8eWB0mtXdiJZrU%2BB3iOhLSxIM%2FwnAvrm1D9gHYBVBWmRAWn%2Fbrm&X-Amz-Signature=402478a6de1ab9c006e6e4c826f4b9aa32b0b405e4bf49270dfc162f82763401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NV4G5Y%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCvPfzLW%2F4ve1%2BSQTEIec1u1QhKlXGFHa10isilQgjCcQIhAOzM3NwGn7m15A0X8nnjbnmzuXXPW%2FQvILxMc36tSe%2FCKv8DCEwQABoMNjM3NDIzMTgzODA1IgwK2vEBcAKlbRF5qAoq3AP%2Flhdp%2FB57EiRCSoyK1KKzdF8o%2BrBgsqKVDy9vVOxvuFK0RLHgANYAmR0GTLMqxcB1xA6rjpQe7WgAcCchUdeHZg3O9EHGURJk3bTn%2BsiwIdZBqgWcjtWo0ldIyxxzJjsN1lzVsQcaIcqDxACnBYtKXPptlPEOaJmp1C9TP7eRGCzVAMQRFlO8%2FB%2BfIIJyGO%2Bf6Lpv7tQ1l27brcPekOnat%2FGqjubqL%2FIt8z3%2FuXy30Wq%2BwkpV4MA6uqxS1ycBLqRh7WYvvbWIOF88lNEVGBlNTSqy5eG8a3HCXrzqyp01gb07ZqO87l%2B9uHoweXD3s9urDiK683ctfRLU1JrxO4QSva8UYcw7rjdtBw29VJEhfNJ50tefnB%2BeZIIYFB%2BeluPiFRkb8QCvCKGM%2F1YJDd6v5FYiYAlvqjpOs25aRriYMPmVn%2BknJOx2pm5pU9YR6Kfjxb1IhCT0%2BC5rWE%2BhDLnIpPyoMvWr1HNmg85x9Q5nIGGJldT5cBpkptrLZ%2FlJEUXJfQKVOkIjwxNsm1AqMIQWHK2JXsN5yGTKzkJJ9ESAkAPMul1f6x3slnUlewFXWRyU1QL0rkh8XJzWdhhJAlVQuq2%2B9sn2g0%2BX8zW6%2Bvk0wDned4wJUI7mVL7EvjC25qXDBjqkAWus20%2F9kRemAgrxBB9ZybOm9axrQBs1EwMuAQg6fGT8zDmRGVk0jghU5EO7flA1mGqvs1XDGXJJ4RYfKrQ9oDWbwfNA6Je9l9iiH5eklIgCBC52I8JC4ax4ool2wnDXWZKGYPPb3DobA2AtfM4tFJMqVBpUJRbdmcPiNUyhp8eWB0mtXdiJZrU%2BB3iOhLSxIM%2FwnAvrm1D9gHYBVBWmRAWn%2Fbrm&X-Amz-Signature=8f1fac8bb585f134f48d1e542b5ded4508379b84bf2e10435f4426af5e6ffa4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
