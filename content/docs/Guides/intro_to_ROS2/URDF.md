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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2VOGLUK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAQyuRO%2BESfhn%2BCY4O%2Bb9lWjBhhj5jqaHh76Nffj7qHpAiAHCAXmwWQKGGvUgwYAuaerqpMKtY%2BVlcgLlvdVrosu8Sr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMZpEGBwaiiXJsM5r8KtwDgUEA5Vg4oKJdo1%2F9yuYFVTatTiMi6s4obrZYQzYafvtrJ9HjxULojOpGUXrzCJl6iaEUgL8Nyf36rUE7aUmUHJuVB3T7s1vkylAPVrjp7i3noNrboxaW6zZEzIlzietE2%2Brl5j0COfjFaRS5DYu4s3gCChxoNqsPjaXlrenSUqfPjtTRu%2FocyiHSGa0TYvY8Ctckda5fOOTjgAWIWWvQrDPFvznzMWg7YRQw7t0HHDCFF%2BdBefCF0Inb8PdLlkp99nHvROSJt3vW0dITWv%2BsreqTmLj0P9Bjwe2cgU497BJDh5VqAF0XVrus3MUfAFHbX1y6w0LesM0ShIMUEYbS2%2BFGYUNoWVQ04G01xAKbx1q8Da0ict4ZH3xRgmxon%2BjqBEpWaGSeOz70k%2FEWADuqdl6fiiO6cktEA6FuOMR%2F8Uoy1Jl%2F90J1czghcxOWSnNstmJCnmFbAOOl1RDzQkotZaTVzkRE6FQaT3jeQY6gd5Qx7oFvSm5DRV4wCRV%2FhyZpkofMl4ln8ZgLS1YDgDEAWrm85EnP%2B5xsadjTNkcwLAIk5T0Pxs3LjFwOZgDV2IkkLTSmppapXQn0bnHSYJhWsag8HZ%2FdSCzC1VrrS2x1o0iHulq19tAi7i6lZj4w9%2FmSxAY6pgEfYLPHbWcFEoJKji2k212jEtJc8BdQZw82eRB88%2BBTQvci%2B0V0vGlnDGIWddi1LA1nDuXps6exOvE09SDN9kdiICCcDOPViI2WvC%2FfrMwampX%2BM1d8wwxr7dyFFFL2YdrLkGvNMffU7N7pccMjJ0%2Bq6AaoHTulNjphH4f%2FuUoQkjYggv9RcoNgSeZyyzIes0uswMmHTjJox8tFBwSSHLIYjH4YclJH&X-Amz-Signature=c9380926a7c1152df761d0ed19b9f84428d2757f961ed70c5408252536c4f5f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2VOGLUK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAQyuRO%2BESfhn%2BCY4O%2Bb9lWjBhhj5jqaHh76Nffj7qHpAiAHCAXmwWQKGGvUgwYAuaerqpMKtY%2BVlcgLlvdVrosu8Sr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMZpEGBwaiiXJsM5r8KtwDgUEA5Vg4oKJdo1%2F9yuYFVTatTiMi6s4obrZYQzYafvtrJ9HjxULojOpGUXrzCJl6iaEUgL8Nyf36rUE7aUmUHJuVB3T7s1vkylAPVrjp7i3noNrboxaW6zZEzIlzietE2%2Brl5j0COfjFaRS5DYu4s3gCChxoNqsPjaXlrenSUqfPjtTRu%2FocyiHSGa0TYvY8Ctckda5fOOTjgAWIWWvQrDPFvznzMWg7YRQw7t0HHDCFF%2BdBefCF0Inb8PdLlkp99nHvROSJt3vW0dITWv%2BsreqTmLj0P9Bjwe2cgU497BJDh5VqAF0XVrus3MUfAFHbX1y6w0LesM0ShIMUEYbS2%2BFGYUNoWVQ04G01xAKbx1q8Da0ict4ZH3xRgmxon%2BjqBEpWaGSeOz70k%2FEWADuqdl6fiiO6cktEA6FuOMR%2F8Uoy1Jl%2F90J1czghcxOWSnNstmJCnmFbAOOl1RDzQkotZaTVzkRE6FQaT3jeQY6gd5Qx7oFvSm5DRV4wCRV%2FhyZpkofMl4ln8ZgLS1YDgDEAWrm85EnP%2B5xsadjTNkcwLAIk5T0Pxs3LjFwOZgDV2IkkLTSmppapXQn0bnHSYJhWsag8HZ%2FdSCzC1VrrS2x1o0iHulq19tAi7i6lZj4w9%2FmSxAY6pgEfYLPHbWcFEoJKji2k212jEtJc8BdQZw82eRB88%2BBTQvci%2B0V0vGlnDGIWddi1LA1nDuXps6exOvE09SDN9kdiICCcDOPViI2WvC%2FfrMwampX%2BM1d8wwxr7dyFFFL2YdrLkGvNMffU7N7pccMjJ0%2Bq6AaoHTulNjphH4f%2FuUoQkjYggv9RcoNgSeZyyzIes0uswMmHTjJox8tFBwSSHLIYjH4YclJH&X-Amz-Signature=c851a9558e6c8ec039529295350930381bb1a3abcbc71e8a97e784d4a688e6a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
