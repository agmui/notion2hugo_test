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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XHVNUWY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwXAF5B0oVK3ALpOJCTn%2Bb%2F2n5e%2FvFj%2F6SNT%2BgZXy8NAiEAvn5tPCxWU3mjIwYduNFyPCfYX0Hw4rbWG%2BfsAozrBAYqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jIf8X47D06%2Fdn4CrcA8ZkiXz7gA0g%2FlohRJonW%2B6YioKk09qk8b9kmX%2F0wjSzE2DCxq%2BEH9WOSygV5JEbIedIpbdiiXENNKn3XfWKlrG0n0NfghoBIqVzmuuvffJiLxPAE%2BwYs7abIcqilqXv1OM1Q0GLifr6F0ScIY2dMnEyBPS1glraABa3efcr69bNMQ3DACY01Fg%2BSQJx6ihuQgp7%2F15zmK9dok4RJiXZYdPxcabQ%2FIK48O8mY8aXX9NU1zT0%2BlL5ykj6DYn0PerBmmrQgXaTWlcBVpVtHbyHdsHFyEfCrSkZ90dgwtLgD3LW7RGPiucBN9eIovqqTf5j%2BQCeM9NQkKxjl80W2G9xAvU3bjTcAqbxFsCo1R8JJ2T%2B4cYX%2BvtaAIoc82mmhF2EFuAC2ERotEPTSxdj7iBsjsLmvoQI%2B%2F7ng%2BOhSrPaKV2iwWNz6jhhh%2FdgXuiOM%2FNUIsQqGjljp5e0UVpN95WuqU%2FjM%2FemNtu6eV0iMN5y8mD8YmkHLL32S55WUODWRMkhR%2BFUfnEj7%2Bbx%2FxUM7E7dnue9bltNJRUpji6lTjA0YBEt8r%2F2LFxpmf%2B%2Fu7wNIxYIElXvUmCmP%2BDs7jMlY4UsCemlK%2F1uqyYN3AOfR5d8CS65R8W6kHrOU6Ehy14uMK%2BylsIGOqUBFq2yRYvy%2FB%2Fm69RgeBjxOzMdMuTeEStj%2BslRPwAA4W%2BacIs9Cci6TInZm4EzADqfqWxHaIztDrsfhztmZIyOyO7yFhSEB%2Fsn8E77bx4aIqQqY0yZoBEKvAqFtXlhmpdvYA32Y2ETWwm4cW9J%2FjwiTLpv%2B%2FjlFHdaUfaJOwtSExp7InPxVYXouodZ5mHbNyZEeqKpI2MmPNVopfnUNvSlSt2H%2FDED&X-Amz-Signature=cd7e72b7a5d7d0fd358d0b9dee334d567b7ba48f7d4cce7ff27708a8b16625cb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XHVNUWY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwXAF5B0oVK3ALpOJCTn%2Bb%2F2n5e%2FvFj%2F6SNT%2BgZXy8NAiEAvn5tPCxWU3mjIwYduNFyPCfYX0Hw4rbWG%2BfsAozrBAYqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jIf8X47D06%2Fdn4CrcA8ZkiXz7gA0g%2FlohRJonW%2B6YioKk09qk8b9kmX%2F0wjSzE2DCxq%2BEH9WOSygV5JEbIedIpbdiiXENNKn3XfWKlrG0n0NfghoBIqVzmuuvffJiLxPAE%2BwYs7abIcqilqXv1OM1Q0GLifr6F0ScIY2dMnEyBPS1glraABa3efcr69bNMQ3DACY01Fg%2BSQJx6ihuQgp7%2F15zmK9dok4RJiXZYdPxcabQ%2FIK48O8mY8aXX9NU1zT0%2BlL5ykj6DYn0PerBmmrQgXaTWlcBVpVtHbyHdsHFyEfCrSkZ90dgwtLgD3LW7RGPiucBN9eIovqqTf5j%2BQCeM9NQkKxjl80W2G9xAvU3bjTcAqbxFsCo1R8JJ2T%2B4cYX%2BvtaAIoc82mmhF2EFuAC2ERotEPTSxdj7iBsjsLmvoQI%2B%2F7ng%2BOhSrPaKV2iwWNz6jhhh%2FdgXuiOM%2FNUIsQqGjljp5e0UVpN95WuqU%2FjM%2FemNtu6eV0iMN5y8mD8YmkHLL32S55WUODWRMkhR%2BFUfnEj7%2Bbx%2FxUM7E7dnue9bltNJRUpji6lTjA0YBEt8r%2F2LFxpmf%2B%2Fu7wNIxYIElXvUmCmP%2BDs7jMlY4UsCemlK%2F1uqyYN3AOfR5d8CS65R8W6kHrOU6Ehy14uMK%2BylsIGOqUBFq2yRYvy%2FB%2Fm69RgeBjxOzMdMuTeEStj%2BslRPwAA4W%2BacIs9Cci6TInZm4EzADqfqWxHaIztDrsfhztmZIyOyO7yFhSEB%2Fsn8E77bx4aIqQqY0yZoBEKvAqFtXlhmpdvYA32Y2ETWwm4cW9J%2FjwiTLpv%2B%2FjlFHdaUfaJOwtSExp7InPxVYXouodZ5mHbNyZEeqKpI2MmPNVopfnUNvSlSt2H%2FDED&X-Amz-Signature=cf8f0917bef1c846822b8b02a5a02073126b1f28144b30d656bd0b3acd6e9450&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
