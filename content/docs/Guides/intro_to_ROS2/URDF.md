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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFFV643%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCUBx4ar0hiKHdJEtOAhfMtOzyJv2BZFDJAqDr5y7z6nwIhAMQ92TgjIhtEm99pi1c5nFYStgLQ5KyR6yIT9fdSGjQKKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXKoflQS9URtmk1yoq3AOVOXJY3fWpRtGF99hClZZaFsabwsJCr%2Fbe4l460DYqFdG2XSBRGC9qAvJtlYPQuJK0HEfDBUtyXZD14R5DpGq9FuI5jL4m69BTkZg%2BMKKKNDT89oD1wKtfeMCqEJhmDxkuV6guE786MRcPNX9%2Ftg7aldc6TjdggJ7DvYPvA0iFKs0EcCbqmx20D29Hxzxb3%2B2mF%2BkTFU0uM%2FWunkzHcp5JyA%2B4Fg6KZSOM6LULFkYo3TD2QfcWSYL0TKKlBXH4yL4ys12rrImX3CYqVbfEsPLVKKxk%2F2HkHn0h%2BLYAFscCA49bBgS9EHa0rxlcElFuW2JWwFrzyI9pcPKkwsIM81oi0b3F5cHwYeaSJi4%2Bu94kjY5cfRBiB6NxdK4LiBooQy0TKuF%2Bce0I%2Bi7qx0TZDgdmJZtNE0DFfScFokJ3IwTcY%2BoW9JK6lPRrwvaueimVNzBtG%2FkfR3iwHajILouKwu6t5rF1DBj3I7b4TFUE3241IDTQcwY6crROz0NnrvGmcGO%2BhdWpoKa5N4x%2FS1fSphrTIyVfm8Ezyw1Ez%2BKQz0F6lQki72i3e1W7%2B0Fsz%2F17wJicrmE5QvQ44YrtlBPbRoBNutoN%2B79LJkhnWZS4R8ATrznZh9QeU8%2Bt31bwODC4p%2FK%2BBjqkAYOpeGjOJfiuKds6KKNIhDFk%2Fx%2B9YXCje3%2F7xvvWYQePNYNffsR0b4Jq3EQAfa2HBY%2FawBLbh8Gk2F42LrPcEHXpbyOpz49B6UJyvlrahGirImcQY49HS2UDccqjE%2Fot6T5s2PvxyMtzK0k5paIBX%2FW1oMHd3DxB7ZtK6n3jxhDhj1XFhkeei4FHuBcR1nBpwxPzyRN2kJ3ix8v9CnuqRpk8tWon&X-Amz-Signature=5dee442b278fd08cf4e0415f5013d2a834be68dd31f52e0cb26cae9f39d84bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFFV643%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCUBx4ar0hiKHdJEtOAhfMtOzyJv2BZFDJAqDr5y7z6nwIhAMQ92TgjIhtEm99pi1c5nFYStgLQ5KyR6yIT9fdSGjQKKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXKoflQS9URtmk1yoq3AOVOXJY3fWpRtGF99hClZZaFsabwsJCr%2Fbe4l460DYqFdG2XSBRGC9qAvJtlYPQuJK0HEfDBUtyXZD14R5DpGq9FuI5jL4m69BTkZg%2BMKKKNDT89oD1wKtfeMCqEJhmDxkuV6guE786MRcPNX9%2Ftg7aldc6TjdggJ7DvYPvA0iFKs0EcCbqmx20D29Hxzxb3%2B2mF%2BkTFU0uM%2FWunkzHcp5JyA%2B4Fg6KZSOM6LULFkYo3TD2QfcWSYL0TKKlBXH4yL4ys12rrImX3CYqVbfEsPLVKKxk%2F2HkHn0h%2BLYAFscCA49bBgS9EHa0rxlcElFuW2JWwFrzyI9pcPKkwsIM81oi0b3F5cHwYeaSJi4%2Bu94kjY5cfRBiB6NxdK4LiBooQy0TKuF%2Bce0I%2Bi7qx0TZDgdmJZtNE0DFfScFokJ3IwTcY%2BoW9JK6lPRrwvaueimVNzBtG%2FkfR3iwHajILouKwu6t5rF1DBj3I7b4TFUE3241IDTQcwY6crROz0NnrvGmcGO%2BhdWpoKa5N4x%2FS1fSphrTIyVfm8Ezyw1Ez%2BKQz0F6lQki72i3e1W7%2B0Fsz%2F17wJicrmE5QvQ44YrtlBPbRoBNutoN%2B79LJkhnWZS4R8ATrznZh9QeU8%2Bt31bwODC4p%2FK%2BBjqkAYOpeGjOJfiuKds6KKNIhDFk%2Fx%2B9YXCje3%2F7xvvWYQePNYNffsR0b4Jq3EQAfa2HBY%2FawBLbh8Gk2F42LrPcEHXpbyOpz49B6UJyvlrahGirImcQY49HS2UDccqjE%2Fot6T5s2PvxyMtzK0k5paIBX%2FW1oMHd3DxB7ZtK6n3jxhDhj1XFhkeei4FHuBcR1nBpwxPzyRN2kJ3ix8v9CnuqRpk8tWon&X-Amz-Signature=9caaca109884b0a9c570210dd683add5bcd65a0b4f06485b573950655633078e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
