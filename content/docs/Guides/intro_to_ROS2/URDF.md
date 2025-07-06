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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XWD7RXY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEDOSosH2VO13yy2oDia9PfKrDwWtOYQRiGMTwW79v6QAiEA0Qw%2Bd2cQqfMUd1UDPbbGr%2B9R5eGgZ7ChlCNcDsqgDc0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDENZmLZ5ULVVpY0yjircA4SsSkEv19hmK43lMX4a5T02FHkZPyT6yosHyXsw%2BYAnFsmSGWhhVsifU5qfTsb5TB95FPApmC24Ys2E2bje0O%2FYJ1jCuvAKJW2YAaJueLyKPjO2fH9k0537lNJLmKuMydeJDFQqd5H1lozd0dg%2BewaACCyTzii01ha93yfgFdE4JA3tVDOVIjrRsVlPhDyjgOxJLGgU0W8gHsJn6YN%2F4xWATvKL6QbUJEePRcGWKLrguEFH1rLkotDUOCeoWWydCyqZWxC3x1vQv6xnscUTkbMGKsFKQ7IfjdZHpu%2BsLVusvKons4KIN1Xbt%2FlXevRiqoEcvh8j5OrtYdhYbKhjZyq7Y3tCzcjJhhK%2FKVlZR7Myh6l3qgyFxj%2F%2Funp9W6RHN4f%2BUOAnOSNL7zHrPqWFBJQINitDE03tAZZlDRZ8t7qADtyyho9A6Sgbe3d7BlB%2FgWA3%2BVXMTH7FvLSmHuv020C0CLtvJ8IajzEAwtcb2Y%2BdbsUFdbP1E7a5v93GvWWCOuksS8sdyT%2B7wdJnqSDpz%2BkCo3VH%2FITYQqmRbgQU6nqgkvDM61kSki%2FJPfVn61R3FllMjgAkLjfXFxPkN1llSHGdDF5uTebQcgd5tUaFJ%2FSwFJ55rlQCue4rPaBNMJ%2F9qMMGOqUBG9TRFut9vZzG1yytgeG45Ydft73iqdj48eNxbj20Vetv66akATVUebHvoLe1Gz4GHIOK1qtkfPBV0MtcSI9epf9c7npFDAfj%2BTCLw%2FvzEg79q%2BhdiQb6OS4PVXtrTsCwnHTD0ZpsfNZg%2FZEaJGIBLQVlry1z49VXZGulP28achsUxXsTbVeAK5ud7v297xhkjMSeXjpoWusgpfxkt0jmOrf9WePo&X-Amz-Signature=a75a72a6747a318191748b72009a5ed51d8e4f4c6c63d23b5be87d5f0f5b5f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XWD7RXY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEDOSosH2VO13yy2oDia9PfKrDwWtOYQRiGMTwW79v6QAiEA0Qw%2Bd2cQqfMUd1UDPbbGr%2B9R5eGgZ7ChlCNcDsqgDc0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDENZmLZ5ULVVpY0yjircA4SsSkEv19hmK43lMX4a5T02FHkZPyT6yosHyXsw%2BYAnFsmSGWhhVsifU5qfTsb5TB95FPApmC24Ys2E2bje0O%2FYJ1jCuvAKJW2YAaJueLyKPjO2fH9k0537lNJLmKuMydeJDFQqd5H1lozd0dg%2BewaACCyTzii01ha93yfgFdE4JA3tVDOVIjrRsVlPhDyjgOxJLGgU0W8gHsJn6YN%2F4xWATvKL6QbUJEePRcGWKLrguEFH1rLkotDUOCeoWWydCyqZWxC3x1vQv6xnscUTkbMGKsFKQ7IfjdZHpu%2BsLVusvKons4KIN1Xbt%2FlXevRiqoEcvh8j5OrtYdhYbKhjZyq7Y3tCzcjJhhK%2FKVlZR7Myh6l3qgyFxj%2F%2Funp9W6RHN4f%2BUOAnOSNL7zHrPqWFBJQINitDE03tAZZlDRZ8t7qADtyyho9A6Sgbe3d7BlB%2FgWA3%2BVXMTH7FvLSmHuv020C0CLtvJ8IajzEAwtcb2Y%2BdbsUFdbP1E7a5v93GvWWCOuksS8sdyT%2B7wdJnqSDpz%2BkCo3VH%2FITYQqmRbgQU6nqgkvDM61kSki%2FJPfVn61R3FllMjgAkLjfXFxPkN1llSHGdDF5uTebQcgd5tUaFJ%2FSwFJ55rlQCue4rPaBNMJ%2F9qMMGOqUBG9TRFut9vZzG1yytgeG45Ydft73iqdj48eNxbj20Vetv66akATVUebHvoLe1Gz4GHIOK1qtkfPBV0MtcSI9epf9c7npFDAfj%2BTCLw%2FvzEg79q%2BhdiQb6OS4PVXtrTsCwnHTD0ZpsfNZg%2FZEaJGIBLQVlry1z49VXZGulP28achsUxXsTbVeAK5ud7v297xhkjMSeXjpoWusgpfxkt0jmOrf9WePo&X-Amz-Signature=3b6ad7c13234643090f7d730b8f4ec5c6a87cf0bf2aa79796575ab1799d31fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
