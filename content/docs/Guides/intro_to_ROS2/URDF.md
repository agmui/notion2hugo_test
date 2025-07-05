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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXLXKA5%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCEvA6nL6IjExQf%2BfbjlAoerAs%2ByHuWGCp8b09te2HL6wIhAM6E6oanoS6F%2F7NUq4WIvOrgCZtZQNyLqHc030aw6JAJKv8DCDsQABoMNjM3NDIzMTgzODA1IgzqDLuo3Y2auzeAGuAq3AOXmF2QvhjkEpeaU%2BfMp2KeYuAmmonONGx3C17R2OoUKqXHaIsEvATBkMHLzDZ27Yqgn3NUOJDXeDbduLicJywDU1VihuvLOMhXbLQk9B0IfwdY%2BxmH0DvYcUW7uTTpEn0%2BTicwdRGnUgUtV%2BoE8kogDW9JKlHTwMjB%2B6CVE3bw%2BTkpLOiqbW5p808SESbJHeF2F92jChhtzsGARn4SXo9S0ZAbRdqZ6kxYgHD6PZOgtftxViNgRiEZ2gosdsLPyyQvqtIwaWhJ4l78krw%2BaZl%2FcXxkC6vxcra2Zra4sx1lfSlKwV%2FYszt%2FyHy%2B1L48BwsX2b931Gc5TwWLPbhOnQdba438N1TVvNxWjUluoHEeSBmBbSwmr7%2FJOpHzNLF%2Fq61Om%2Fy%2F%2BsI7coD%2B%2F6eaap029B4PtNVbJXBhClTXNBrjxfSClU0fls8JPGeQwiwPB7lRqzMuhc0cr8L4gPNtjRZsktF9L%2FKhzHjZf%2Bahn6DA5s9o%2FnT7%2FYjyrhflsWh95qNVCCXKE96DgG1jUaMgVAp5RcvAh4eKabL5PDI4Dwlnx%2BGzsq1fxNUcGOX3tCOJofQNDVbXU016N3oRW%2FiMGN3Xvdup0J0qEnVkLLHc%2Fj%2Ft8OxjrpIsPSu%2Fl2VrOTDih6LDBjqkAeVxzACB8FwIVYz2DFuQVmj1LqOJ3ky9ebtsxmcokLr01%2BfI53fGeDZbpmRMlLIz2JpBxXHwV3nfJqLuJxvaOwo%2FKWFfuYrWUqwz86oYDRmvzktiGxtwNJ4J%2FoDX%2BAn%2FJS2yetXI0P73ujDTAdqK0ADBaTBPkjJqxZpCRPIPuJH2c2EJQSrj9r2dyZzrN6bePH3BRckO2tO4C6MQ9y2PaDuhr6XX&X-Amz-Signature=f7510638478330ad451391932fdf0a02aea98fb747dafbf4168faea08874e13e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXLXKA5%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCEvA6nL6IjExQf%2BfbjlAoerAs%2ByHuWGCp8b09te2HL6wIhAM6E6oanoS6F%2F7NUq4WIvOrgCZtZQNyLqHc030aw6JAJKv8DCDsQABoMNjM3NDIzMTgzODA1IgzqDLuo3Y2auzeAGuAq3AOXmF2QvhjkEpeaU%2BfMp2KeYuAmmonONGx3C17R2OoUKqXHaIsEvATBkMHLzDZ27Yqgn3NUOJDXeDbduLicJywDU1VihuvLOMhXbLQk9B0IfwdY%2BxmH0DvYcUW7uTTpEn0%2BTicwdRGnUgUtV%2BoE8kogDW9JKlHTwMjB%2B6CVE3bw%2BTkpLOiqbW5p808SESbJHeF2F92jChhtzsGARn4SXo9S0ZAbRdqZ6kxYgHD6PZOgtftxViNgRiEZ2gosdsLPyyQvqtIwaWhJ4l78krw%2BaZl%2FcXxkC6vxcra2Zra4sx1lfSlKwV%2FYszt%2FyHy%2B1L48BwsX2b931Gc5TwWLPbhOnQdba438N1TVvNxWjUluoHEeSBmBbSwmr7%2FJOpHzNLF%2Fq61Om%2Fy%2F%2BsI7coD%2B%2F6eaap029B4PtNVbJXBhClTXNBrjxfSClU0fls8JPGeQwiwPB7lRqzMuhc0cr8L4gPNtjRZsktF9L%2FKhzHjZf%2Bahn6DA5s9o%2FnT7%2FYjyrhflsWh95qNVCCXKE96DgG1jUaMgVAp5RcvAh4eKabL5PDI4Dwlnx%2BGzsq1fxNUcGOX3tCOJofQNDVbXU016N3oRW%2FiMGN3Xvdup0J0qEnVkLLHc%2Fj%2Ft8OxjrpIsPSu%2Fl2VrOTDih6LDBjqkAeVxzACB8FwIVYz2DFuQVmj1LqOJ3ky9ebtsxmcokLr01%2BfI53fGeDZbpmRMlLIz2JpBxXHwV3nfJqLuJxvaOwo%2FKWFfuYrWUqwz86oYDRmvzktiGxtwNJ4J%2FoDX%2BAn%2FJS2yetXI0P73ujDTAdqK0ADBaTBPkjJqxZpCRPIPuJH2c2EJQSrj9r2dyZzrN6bePH3BRckO2tO4C6MQ9y2PaDuhr6XX&X-Amz-Signature=02a1397166d44c42541a5a2d9b168f6eb023e336acfb1cd6388294743b923193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
