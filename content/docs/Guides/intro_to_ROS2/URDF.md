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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4IVNHU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDTgM%2BOj1n0yKpsTQcKoFup6NBlLsf%2BTSBf6gsF7MFJ%2FAIhAOZHVB8dfhiSnBadymQyA7hUE6LHBrl1brDVPEw9zin4KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygPP4Ph4UWg1Fnc0Mq3APdB1J%2F6vxCShXmXQVR1pUlhHbMAORwDa0mC02BJa83P1kExa0rLqvBYtA7UWa1loBq%2BOp5pK5bOKMcLfxuX4r0NU0nd5IFmul8ANv5j3re4kbSKAq5WQEV88BsFzdJlky2Y3az%2BHsEirW%2FsO9MH4eZH8gSABUN8HroSeqG15opjICWLRd%2F9rV5x37n852Ln%2BYY63SUR%2Bkzv6b7gb5xAUy8C72nxTlRtnjbmGUX1PIkEv7sy4Uo7w4WUCgxBvEkQobr%2FtMCZ54QFvgmHgkGjzoCbb9c9rVqHcvxQKAUKGjNaJq1d%2BXJ%2FgsAFjif4t706PhVLQwV4a9FddSUiGAIlxmWl4uAyAri0LSis5Zchm%2FxEbezaXIwBf0fdeVsK1QmYpOPqRuDjmWHDn%2FmewW16%2FOVPSmAPQISdzB%2F8qGOF8XZXJC5qPz0VmlB3MWiEEjwoKq8E%2Bzy1woKc38T0TOYMqUF8A7dF52SBK8i1tj%2FA6xBiA3vU0HWz4Bycw13BYv2h%2FpDpZ9mvurvQ%2Be%2BXIw%2F%2F4cLZjJ632wF8l0VaJ8w9%2Beh5QyhzQ2N67Mw%2B%2FlkTulsk6Gt7SYPYaWcjn69ED1YcOMChYKrqAFoqfi1Lj7hvP2Wpo79GefNmNARKWhHPzD%2F3u%2B%2FBjqkAZPuHK6M%2BA3wTc64Gk2anase0QtwfxZuRWBBJ6R9nTmi9LvQiTQjEOZfOEHZpHZuAEFsfFO2EWOfUQKJJXoAxAOZGyNfXFaT1Pu3k%2BUggeA774LdhmVfFcrVpml40oQ%2BtXFd5wJbmxIL4uAMHd2IUgY9F13xRpFalf%2BFtypE5ZdVbObaD6hzUNaQGUJcIkFUThjTOiauuI58ovHHEb4JqxxN2Xf4&X-Amz-Signature=65bb645bbdca1ed3c8d76e3335350d68d61dd95028d7ab39bfbc14691efd858c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4IVNHU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDTgM%2BOj1n0yKpsTQcKoFup6NBlLsf%2BTSBf6gsF7MFJ%2FAIhAOZHVB8dfhiSnBadymQyA7hUE6LHBrl1brDVPEw9zin4KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygPP4Ph4UWg1Fnc0Mq3APdB1J%2F6vxCShXmXQVR1pUlhHbMAORwDa0mC02BJa83P1kExa0rLqvBYtA7UWa1loBq%2BOp5pK5bOKMcLfxuX4r0NU0nd5IFmul8ANv5j3re4kbSKAq5WQEV88BsFzdJlky2Y3az%2BHsEirW%2FsO9MH4eZH8gSABUN8HroSeqG15opjICWLRd%2F9rV5x37n852Ln%2BYY63SUR%2Bkzv6b7gb5xAUy8C72nxTlRtnjbmGUX1PIkEv7sy4Uo7w4WUCgxBvEkQobr%2FtMCZ54QFvgmHgkGjzoCbb9c9rVqHcvxQKAUKGjNaJq1d%2BXJ%2FgsAFjif4t706PhVLQwV4a9FddSUiGAIlxmWl4uAyAri0LSis5Zchm%2FxEbezaXIwBf0fdeVsK1QmYpOPqRuDjmWHDn%2FmewW16%2FOVPSmAPQISdzB%2F8qGOF8XZXJC5qPz0VmlB3MWiEEjwoKq8E%2Bzy1woKc38T0TOYMqUF8A7dF52SBK8i1tj%2FA6xBiA3vU0HWz4Bycw13BYv2h%2FpDpZ9mvurvQ%2Be%2BXIw%2F%2F4cLZjJ632wF8l0VaJ8w9%2Beh5QyhzQ2N67Mw%2B%2FlkTulsk6Gt7SYPYaWcjn69ED1YcOMChYKrqAFoqfi1Lj7hvP2Wpo79GefNmNARKWhHPzD%2F3u%2B%2FBjqkAZPuHK6M%2BA3wTc64Gk2anase0QtwfxZuRWBBJ6R9nTmi9LvQiTQjEOZfOEHZpHZuAEFsfFO2EWOfUQKJJXoAxAOZGyNfXFaT1Pu3k%2BUggeA774LdhmVfFcrVpml40oQ%2BtXFd5wJbmxIL4uAMHd2IUgY9F13xRpFalf%2BFtypE5ZdVbObaD6hzUNaQGUJcIkFUThjTOiauuI58ovHHEb4JqxxN2Xf4&X-Amz-Signature=9805667e1e8bfd5e9bb3059aa6488f85714bff3b73d16640420a078109e7f8c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
