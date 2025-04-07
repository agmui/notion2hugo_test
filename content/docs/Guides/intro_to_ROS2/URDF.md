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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI56IZRX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClxPREgrTcuOgndanWMI%2FAgp4vo5nfCn0x2yZ%2B4oosHgIgE38ZLZxjOjoV9uxpadI7RJAY2QWSMi3skm%2FpuJ51UMMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDPUdaBm27yNbiDh1gircA78CIMS0cd0wyA5CwxbesB%2BhpQAqUR5Yebuws%2FBl6iO%2FpZ479sd0U3ftKzmLQk%2F%2FELwC4IkH%2BKYI5xPX5rXiHtwRlr13mBq%2B5%2BHjZBngLKWruJkvnpgTwf9aVt0zHJzIhiuDOSHTF%2By0%2BQIXpQ2zdw%2FJaunQOc1ifjFOsHHyKlTxxL1%2BCssrI0A2NkdauQ%2BnWulysRMH5fLa%2B6EEBlY6LQwdZPwtxZo%2FMYxx0KgiLHDGOCswIB3oGLxWQvbqLOtoRwZjN%2FpXxiycBRg5hsvJFVLhvJ53prWEbISDjBP4rGfviKysRttvDkdTXsqUdHbdOfW8i4mhS5b27G7z%2FY%2Bd6P0eB5T%2FmEyyS8D8BFFQ4UQ4%2BBcG1k1pc2wCg7F5HziVwlM3dK2qZzEn7d1tkGN5F6usvX7DtujcZmtIipVcdlUxOOX6UrWM0XTOYaE2SsSsHvFTiyBOFsxzJyoKxGaiEkFmenefK9Dk%2FAIeMPWlQLwaLQD%2F3vVMz9aVfcSU7rnmtDz8CXfgDG9OtFBJRy7wCDE3QYimDrTxMtTj9%2FQW74qLVCCX6z1uhHuZW%2BCnddQPQjaX%2BSOeGvICjeoUWrFGziJuhut%2BVIYV6A0UsF7k9Lgy3gXAGPCDvvS7ck%2BXMICDzb8GOqUBjieQH%2B7Pxy7sLjS3Zdn1qtH4BSa1IfMAqib6KN%2BI%2Fy4ZDcLJgTRxR6CbgxrGKe5j0EjCivD8rTu3KEWjhDUWm07hgaDmO80CN2nwxbxaNPizOqFOBhj0DHLjjkDbnvsOBnO6oskH6VhL21jeNZHrSTlI1TEWPAaWxtDnkpNuqDTf%2B4zdluNXxZWQmjw7EVLiQ54dsXR9eM553eIWpFvuiiSlN2Jx&X-Amz-Signature=59ade65560bfd7c89188c911c96bb1f0a7462b760b616fa6cfa0c851faa17f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI56IZRX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClxPREgrTcuOgndanWMI%2FAgp4vo5nfCn0x2yZ%2B4oosHgIgE38ZLZxjOjoV9uxpadI7RJAY2QWSMi3skm%2FpuJ51UMMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDPUdaBm27yNbiDh1gircA78CIMS0cd0wyA5CwxbesB%2BhpQAqUR5Yebuws%2FBl6iO%2FpZ479sd0U3ftKzmLQk%2F%2FELwC4IkH%2BKYI5xPX5rXiHtwRlr13mBq%2B5%2BHjZBngLKWruJkvnpgTwf9aVt0zHJzIhiuDOSHTF%2By0%2BQIXpQ2zdw%2FJaunQOc1ifjFOsHHyKlTxxL1%2BCssrI0A2NkdauQ%2BnWulysRMH5fLa%2B6EEBlY6LQwdZPwtxZo%2FMYxx0KgiLHDGOCswIB3oGLxWQvbqLOtoRwZjN%2FpXxiycBRg5hsvJFVLhvJ53prWEbISDjBP4rGfviKysRttvDkdTXsqUdHbdOfW8i4mhS5b27G7z%2FY%2Bd6P0eB5T%2FmEyyS8D8BFFQ4UQ4%2BBcG1k1pc2wCg7F5HziVwlM3dK2qZzEn7d1tkGN5F6usvX7DtujcZmtIipVcdlUxOOX6UrWM0XTOYaE2SsSsHvFTiyBOFsxzJyoKxGaiEkFmenefK9Dk%2FAIeMPWlQLwaLQD%2F3vVMz9aVfcSU7rnmtDz8CXfgDG9OtFBJRy7wCDE3QYimDrTxMtTj9%2FQW74qLVCCX6z1uhHuZW%2BCnddQPQjaX%2BSOeGvICjeoUWrFGziJuhut%2BVIYV6A0UsF7k9Lgy3gXAGPCDvvS7ck%2BXMICDzb8GOqUBjieQH%2B7Pxy7sLjS3Zdn1qtH4BSa1IfMAqib6KN%2BI%2Fy4ZDcLJgTRxR6CbgxrGKe5j0EjCivD8rTu3KEWjhDUWm07hgaDmO80CN2nwxbxaNPizOqFOBhj0DHLjjkDbnvsOBnO6oskH6VhL21jeNZHrSTlI1TEWPAaWxtDnkpNuqDTf%2B4zdluNXxZWQmjw7EVLiQ54dsXR9eM553eIWpFvuiiSlN2Jx&X-Amz-Signature=da2826377409c8ec3a90a9d26509e0d1610a72db48534f6e39d9ea28f33f28ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
