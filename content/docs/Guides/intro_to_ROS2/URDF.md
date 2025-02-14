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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3ATAZYL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWnDLFb0jgllEDyXypeikA3VQKDDc4P8%2BOauIgeezg7QIgcu%2BCeEtLAZUws6XpDILbg7GHU1HwFaP0GnCjn8CXemcq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLLbXWFDsca%2Bk%2FomwSrcA6yC73yNct38NVCcfjl5KoziA93NX4iVkBg2Rrm0nNulflCfgoFV2AmzHG%2BnTiyOP3gjAQOPiNKOz3UxKY%2FXOT9ONJItsFlJJBkScA5wU8QKdIEs%2FvCvU7Vt1bHuso51ZudZXCCGzR7aJriQZpiLx1FG1NEmdnUAR7gN6xSnmwJjfrsqAnwu9znydiDvwxKbN7JDPT8yNF8Ot3qxKKCbkNQb%2F9buk9UGxulbA01dy7uAQHihWY%2F6%2FlEQkaqbF8%2B9Wm6JhLqmhLaoaDmvb4BmfpsByM3NMeLcvKrsDkRBLTgYcekbatTGGtyfzcn5Fs9dceF17AgvN42BgQdhZpEzs1JBtzqXyAVyrgI0KmTC3gv3SNaIt%2B49AyuawDDaIJhs11160rNQyLj1uZf43wgz7Y%2BW4jITpJZekTAyDK97ThzP0ee8EBuxMIu9cMEUAbutEvUE%2BsEuI1ZY4GVJPuJ24RP6ad06fccGR6CI9oNhFpYG6EgHXjryedEqZBfxwpZuSG1yl2a4cth9oqsC%2BpO%2FA6MLSAR%2FypLO7nah9rassHYzVasbsSak2ED2G1e%2FDYwZQoz8H7EjkIdf1F3ekR8c%2BKwbx6dYqKaq6%2Bm1F6h9TwdrpgIImsFgeqZ5w%2FnAMKzQur0GOqUB8JcP%2Blgx%2FRMJNf%2Bka4UbnNPScRSGGwqVrGuNdKTB8x%2Bdd4zCLUd%2FYzp6nYQKtdWVTVUWG%2BugMyW2s3m1m8%2Fg0Ja0Ide9H6rK64fZ51fiTkFB%2BLyKezuh%2FVaKwEhUubGd0smiNwkjAxYQRijwW7tvvgHCqoxn9t2z%2FZ%2F0N8BPBYpnRWT5%2F3cVVjESSng8viBHxlZeGVwz42XG9kPxUue6YaBVRvGH&X-Amz-Signature=e71acce3bda4b4edb28ff9742c525c9c70b3cf4c7c197b7ad888cd09201101ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3ATAZYL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWnDLFb0jgllEDyXypeikA3VQKDDc4P8%2BOauIgeezg7QIgcu%2BCeEtLAZUws6XpDILbg7GHU1HwFaP0GnCjn8CXemcq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLLbXWFDsca%2Bk%2FomwSrcA6yC73yNct38NVCcfjl5KoziA93NX4iVkBg2Rrm0nNulflCfgoFV2AmzHG%2BnTiyOP3gjAQOPiNKOz3UxKY%2FXOT9ONJItsFlJJBkScA5wU8QKdIEs%2FvCvU7Vt1bHuso51ZudZXCCGzR7aJriQZpiLx1FG1NEmdnUAR7gN6xSnmwJjfrsqAnwu9znydiDvwxKbN7JDPT8yNF8Ot3qxKKCbkNQb%2F9buk9UGxulbA01dy7uAQHihWY%2F6%2FlEQkaqbF8%2B9Wm6JhLqmhLaoaDmvb4BmfpsByM3NMeLcvKrsDkRBLTgYcekbatTGGtyfzcn5Fs9dceF17AgvN42BgQdhZpEzs1JBtzqXyAVyrgI0KmTC3gv3SNaIt%2B49AyuawDDaIJhs11160rNQyLj1uZf43wgz7Y%2BW4jITpJZekTAyDK97ThzP0ee8EBuxMIu9cMEUAbutEvUE%2BsEuI1ZY4GVJPuJ24RP6ad06fccGR6CI9oNhFpYG6EgHXjryedEqZBfxwpZuSG1yl2a4cth9oqsC%2BpO%2FA6MLSAR%2FypLO7nah9rassHYzVasbsSak2ED2G1e%2FDYwZQoz8H7EjkIdf1F3ekR8c%2BKwbx6dYqKaq6%2Bm1F6h9TwdrpgIImsFgeqZ5w%2FnAMKzQur0GOqUB8JcP%2Blgx%2FRMJNf%2Bka4UbnNPScRSGGwqVrGuNdKTB8x%2Bdd4zCLUd%2FYzp6nYQKtdWVTVUWG%2BugMyW2s3m1m8%2Fg0Ja0Ide9H6rK64fZ51fiTkFB%2BLyKezuh%2FVaKwEhUubGd0smiNwkjAxYQRijwW7tvvgHCqoxn9t2z%2FZ%2F0N8BPBYpnRWT5%2F3cVVjESSng8viBHxlZeGVwz42XG9kPxUue6YaBVRvGH&X-Amz-Signature=3e423d87effd532f6943bd006a65703180fd3e74f1f900f1c8df8a4f21ca6719&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
