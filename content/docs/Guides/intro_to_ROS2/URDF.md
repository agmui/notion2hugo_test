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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSAMXE6M%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcyxXMLu2GMpkR33ca9WOwg7f%2BUxyONnP9xZXzcEhXVgIgW1ThagxNHnLNW%2BUPEwixYhbLGZfFKp3jvGWaecsJ9%2FQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc5XyESF0mSh%2BpQLSrcA13a2gc7ArQy4q9kgP%2F%2FWZBXIhqIP9aenYk96EPaPESjI57vMCvC6YtPzcVgVOex7qXacuIwZDdM6hw3WgLnNWXt%2BRgTBoOEv9rKww2PQfg1osXB6TLIqfbvLwxvj%2BX0Eipr1c105Rk%2F4oUM%2FJgwlglGtvIqu6t80pNtYGOw0Gd98RZb0CnaEHxmmpW%2F0b7NDTyMrKD9f931xe8s%2Btv3B59DQu0tYIvmGrLcT40ekZ5ksqde4UMrwxYfbEflnPvu50SG9NxhzkXVlSiBGvHhVwKqktCkjlyd9cpVJ0WgML%2BJljGcflSVm68D8%2FbX5K2v3Ej8RIOLs%2FPhBBo13s0hA2H7hlu%2B3nF2SPhF0lphqU1tpgDjnqq3Qogc2uFXgdbF16i2KoN%2Bvz5bzn9H7tfXGFTKp8GzK2zoST9WoKzmxQbXBpyfBBCB67G%2FgHwC5qrCa5OyMhXWRTuA00bZ7oMYCK1DvABKRHKLTF5sabk8Ty5Kbq%2F10FwitHYZC%2BtiT3UnFgz4ElB8ugKqNzidcCwA9%2FnK5FYZO0FkcB5USBn8chF4B9Vrp6HAAeVcE6QH8wkJttW0qJXQzKVvin7aY3qzhn%2BSDAL%2Fuvu9czEEr9DOVMoOv%2FtlISlx74%2FlKnm5MP%2Fjob0GOqUBCDXboPh3XzwteuJC1dJfPfIyaD3%2B5FzhbT2Paeb7feImtnZAOh9c3YKtstefd3GqP4p8SKuNq4S9DLQ%2FzmZx%2FaNXFpEhq6VxUOVUnp5Xeg7IxEL4l6LR0dj7GITdggmlkrjS4PBdDVex6AO7mdigkKIXcA%2Bic9Feg5a0p51qkYrJLNj1vQiVWpx2hyJeidhIMVTVpuVR6Ve9gVC4EpOX8DI29dh6&X-Amz-Signature=c680a55375271b302c290642aeb2d7e4f3b1778a81a650e1704e0aa60b4dffc3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSAMXE6M%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcyxXMLu2GMpkR33ca9WOwg7f%2BUxyONnP9xZXzcEhXVgIgW1ThagxNHnLNW%2BUPEwixYhbLGZfFKp3jvGWaecsJ9%2FQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc5XyESF0mSh%2BpQLSrcA13a2gc7ArQy4q9kgP%2F%2FWZBXIhqIP9aenYk96EPaPESjI57vMCvC6YtPzcVgVOex7qXacuIwZDdM6hw3WgLnNWXt%2BRgTBoOEv9rKww2PQfg1osXB6TLIqfbvLwxvj%2BX0Eipr1c105Rk%2F4oUM%2FJgwlglGtvIqu6t80pNtYGOw0Gd98RZb0CnaEHxmmpW%2F0b7NDTyMrKD9f931xe8s%2Btv3B59DQu0tYIvmGrLcT40ekZ5ksqde4UMrwxYfbEflnPvu50SG9NxhzkXVlSiBGvHhVwKqktCkjlyd9cpVJ0WgML%2BJljGcflSVm68D8%2FbX5K2v3Ej8RIOLs%2FPhBBo13s0hA2H7hlu%2B3nF2SPhF0lphqU1tpgDjnqq3Qogc2uFXgdbF16i2KoN%2Bvz5bzn9H7tfXGFTKp8GzK2zoST9WoKzmxQbXBpyfBBCB67G%2FgHwC5qrCa5OyMhXWRTuA00bZ7oMYCK1DvABKRHKLTF5sabk8Ty5Kbq%2F10FwitHYZC%2BtiT3UnFgz4ElB8ugKqNzidcCwA9%2FnK5FYZO0FkcB5USBn8chF4B9Vrp6HAAeVcE6QH8wkJttW0qJXQzKVvin7aY3qzhn%2BSDAL%2Fuvu9czEEr9DOVMoOv%2FtlISlx74%2FlKnm5MP%2Fjob0GOqUBCDXboPh3XzwteuJC1dJfPfIyaD3%2B5FzhbT2Paeb7feImtnZAOh9c3YKtstefd3GqP4p8SKuNq4S9DLQ%2FzmZx%2FaNXFpEhq6VxUOVUnp5Xeg7IxEL4l6LR0dj7GITdggmlkrjS4PBdDVex6AO7mdigkKIXcA%2Bic9Feg5a0p51qkYrJLNj1vQiVWpx2hyJeidhIMVTVpuVR6Ve9gVC4EpOX8DI29dh6&X-Amz-Signature=3c86a590dacef59b7d035c613ff9ded1537c5eb511ffc027a337166e0568a968&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
