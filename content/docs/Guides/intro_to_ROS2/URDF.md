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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIMODSCL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICdMxO1yUVOG%2FdutEmS5QCj1VrgXOh2J4hkC0iYxrdiNAiEAze1ts1OcPTtctDr3lA4pTlxbbHvM3%2Bws0SxbfhSRhDsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6OvH4ljBoT1jYIdCrcA4LFXiEsYMCkGu5tRH5GubpKBOfV9lGegHD7z3UgpC8tlhD5zwAYoxUOZrLmlCjwReFkqg7Octdor7KCj9h9NJQE%2FaBZbnCPKEi6MSnyOQIRTchBgBFgFxlXJHgkoOoWVHDYg7I5leXMSp8zM%2BFXJowcUwZZwifjO%2FL0hfN7PNV2UcysqZXc2rF540QVDi8tnFx018%2BZNzkSxK11arKHKXQhRPRz7YHAifQPWlYDMFJ4eB6GoThMS0lMH7oatRGE2%2FITWfZVqMCsXD%2F0M4ucuvOoi3%2FmErQBPQSY3i9L4cH%2FXcrfKoh9GpQgNKTxtR7jzSnaF5s%2Fos1KraCr5yuDTVI31ENakTDy64%2B5r6%2B1692QX50f%2By3Kc8i0SWnXIS%2FzseRaER8pnJiZ6qxCXUtJnKHdwH4ReZpkns7PCt1XTxUhCZb%2B1iiidAvKiBR8TYGlf8noMXPoQ8TQZ2iS2zYPq8om8UKZ3mroMo4BX7oGtDiACfEZAAZLNyBm%2BTf9u7iKhPbq2wqq6mnyjl%2B50GooyyLQhs2zcXGXxz2434JZ4LxgiYOsHOvOxZC5w%2FMCsxOUgBRzqfUDQMHG1fCp5xtGZ7XFj%2BG3tB4geo1m8upWmsvTDkAB%2Bi8l9U9phRWOMLv2jr4GOqUB9WlI7RmxJOgHHnd4y1EfYMUshjMzHdAOfT3i3fp68uZZROwbBnxns8nCMlN8mMKnv3iZaS2ITfhkd9JPkTY85tLyMKmQIK110Qz9w5qekqx2zcJRwC1mA5O5EI0v8U8dAH7rjKxJErKQWoPnf7E5U9d65uYGNmSbgErZ8Vxgj8DzTAyHoCg75DeBvc38QKmg67tseXIi0Ql2LLwFBL6gfkS6bqRT&X-Amz-Signature=10fcfd00be26a5a8fdf7ff1821cf269e124005a3cb5a4ff9a8761e26e685a6f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIMODSCL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICdMxO1yUVOG%2FdutEmS5QCj1VrgXOh2J4hkC0iYxrdiNAiEAze1ts1OcPTtctDr3lA4pTlxbbHvM3%2Bws0SxbfhSRhDsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6OvH4ljBoT1jYIdCrcA4LFXiEsYMCkGu5tRH5GubpKBOfV9lGegHD7z3UgpC8tlhD5zwAYoxUOZrLmlCjwReFkqg7Octdor7KCj9h9NJQE%2FaBZbnCPKEi6MSnyOQIRTchBgBFgFxlXJHgkoOoWVHDYg7I5leXMSp8zM%2BFXJowcUwZZwifjO%2FL0hfN7PNV2UcysqZXc2rF540QVDi8tnFx018%2BZNzkSxK11arKHKXQhRPRz7YHAifQPWlYDMFJ4eB6GoThMS0lMH7oatRGE2%2FITWfZVqMCsXD%2F0M4ucuvOoi3%2FmErQBPQSY3i9L4cH%2FXcrfKoh9GpQgNKTxtR7jzSnaF5s%2Fos1KraCr5yuDTVI31ENakTDy64%2B5r6%2B1692QX50f%2By3Kc8i0SWnXIS%2FzseRaER8pnJiZ6qxCXUtJnKHdwH4ReZpkns7PCt1XTxUhCZb%2B1iiidAvKiBR8TYGlf8noMXPoQ8TQZ2iS2zYPq8om8UKZ3mroMo4BX7oGtDiACfEZAAZLNyBm%2BTf9u7iKhPbq2wqq6mnyjl%2B50GooyyLQhs2zcXGXxz2434JZ4LxgiYOsHOvOxZC5w%2FMCsxOUgBRzqfUDQMHG1fCp5xtGZ7XFj%2BG3tB4geo1m8upWmsvTDkAB%2Bi8l9U9phRWOMLv2jr4GOqUB9WlI7RmxJOgHHnd4y1EfYMUshjMzHdAOfT3i3fp68uZZROwbBnxns8nCMlN8mMKnv3iZaS2ITfhkd9JPkTY85tLyMKmQIK110Qz9w5qekqx2zcJRwC1mA5O5EI0v8U8dAH7rjKxJErKQWoPnf7E5U9d65uYGNmSbgErZ8Vxgj8DzTAyHoCg75DeBvc38QKmg67tseXIi0Ql2LLwFBL6gfkS6bqRT&X-Amz-Signature=479f8db03d66559352744f4bfd89b212b150fecd16755664d38609daccc1f014&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
