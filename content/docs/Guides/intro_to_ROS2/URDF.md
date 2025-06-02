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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVAINWKP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCiJ7rm%2F7URBEuE3lsZ7y6Fvaq2FzfqvgN2vmn3nH15UAIgXiD4oViNnBHgifagSVWrC4upIkAfeTB0xpmE%2BDSCKl8qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUUpaoK7NrgM8oMXCrcAwMQ0WvLX%2FShRnY8HrGCiUr0NxZv6MQyvD0ACD1PJqcSG2FfDmdLKVEDuF7aEFXxP%2FkE20NRDdxbf5uKsmaT6PZkWgpfI9cCEHGbHAjw04Qok4%2FWhpIIs7v1xynZOfReaVnznQT9FBLX%2B5Oie0FvewkiXVlh3BKlC761ssQDvcvPWq%2BfVp94Esr4u9kdZIXss8dNmeysGMpc9oKJBC5v0CmTJJ2KOSzcnweVR9zzRTEnED2XMxahYf2fG05MSLCoIyAV9iSRZpLghP2z55bYYp8uIUrPx6BpskpA2L2yLfkal6fA8L8777zADdBpJHvQ9wFCvvHh%2Fp2ar%2B%2BC8pan4ZyzuA2wRnVX3s4ll6WDJA8dFdwLMDctZhJ7i2B7EkTAcL61bLBVfEOTX%2Fw05VO0NXoOks2HxoIX7E7xo3N1Ht32pmQBbP03Zjlst8fxDVVXAdTWyP%2BM3n28E%2B1gVwOeueV8O9clGI2vR7bfJ6sIfj%2FJnjnSNtjypEny2JKchdPNNsW%2Fw%2FDxPXp8Gp%2BkJIkHTFdx6%2BTZrrBgfaWlkwfvJCYaHXKB0XrDIJdQ0s6478o%2BQZlIZ%2Bvkm4EDOT8aoKKoxopo%2BLRR3sdDMJmCt1inBgj6EZscld4yo4QfngllMM6v9MEGOqUBd9HrXTtZO4U1vIHZUURwwnNr9R8oNGemyUDYg2wu%2BfSlqAh62rkDk5Fn89bTFiDF2UmDquVqP%2FWQdC6QMG6eosd7VD%2BIzs4%2FqUhUxWFNdfsNLwGmYdlMOpd4%2FkPb4sQ95vy7yBtLctk%2BG%2BbzfAyo3AGl9Rw1vbi2I6sJ%2FynEDu%2Fnw1E6gqQnTwjHWqzQibuKr9BAWOyGftR4nynJovAXzPqxr6RB&X-Amz-Signature=9ccedf90ceb221e4c3a0208ced8a48b9ae8abaeb930dd99b6a82f0a28fc227f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVAINWKP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCiJ7rm%2F7URBEuE3lsZ7y6Fvaq2FzfqvgN2vmn3nH15UAIgXiD4oViNnBHgifagSVWrC4upIkAfeTB0xpmE%2BDSCKl8qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUUpaoK7NrgM8oMXCrcAwMQ0WvLX%2FShRnY8HrGCiUr0NxZv6MQyvD0ACD1PJqcSG2FfDmdLKVEDuF7aEFXxP%2FkE20NRDdxbf5uKsmaT6PZkWgpfI9cCEHGbHAjw04Qok4%2FWhpIIs7v1xynZOfReaVnznQT9FBLX%2B5Oie0FvewkiXVlh3BKlC761ssQDvcvPWq%2BfVp94Esr4u9kdZIXss8dNmeysGMpc9oKJBC5v0CmTJJ2KOSzcnweVR9zzRTEnED2XMxahYf2fG05MSLCoIyAV9iSRZpLghP2z55bYYp8uIUrPx6BpskpA2L2yLfkal6fA8L8777zADdBpJHvQ9wFCvvHh%2Fp2ar%2B%2BC8pan4ZyzuA2wRnVX3s4ll6WDJA8dFdwLMDctZhJ7i2B7EkTAcL61bLBVfEOTX%2Fw05VO0NXoOks2HxoIX7E7xo3N1Ht32pmQBbP03Zjlst8fxDVVXAdTWyP%2BM3n28E%2B1gVwOeueV8O9clGI2vR7bfJ6sIfj%2FJnjnSNtjypEny2JKchdPNNsW%2Fw%2FDxPXp8Gp%2BkJIkHTFdx6%2BTZrrBgfaWlkwfvJCYaHXKB0XrDIJdQ0s6478o%2BQZlIZ%2Bvkm4EDOT8aoKKoxopo%2BLRR3sdDMJmCt1inBgj6EZscld4yo4QfngllMM6v9MEGOqUBd9HrXTtZO4U1vIHZUURwwnNr9R8oNGemyUDYg2wu%2BfSlqAh62rkDk5Fn89bTFiDF2UmDquVqP%2FWQdC6QMG6eosd7VD%2BIzs4%2FqUhUxWFNdfsNLwGmYdlMOpd4%2FkPb4sQ95vy7yBtLctk%2BG%2BbzfAyo3AGl9Rw1vbi2I6sJ%2FynEDu%2Fnw1E6gqQnTwjHWqzQibuKr9BAWOyGftR4nynJovAXzPqxr6RB&X-Amz-Signature=99d58481c3fa75fa10463b669080ff2914e24568d17a08675510b196522477be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
