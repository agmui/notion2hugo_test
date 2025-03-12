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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMWJDWF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEzf%2FPrYK0GLylG%2Bo3%2FNtpINVcINnJrZIeg6sos4OhzNAiBXSi6wGPkzAJyBb2Gp9c9gBjDJc%2F%2BqHxGp%2BzlODdupYyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvvelNBFcd0MCtO4MKtwDyri2YUN8GxJkjcKqDe095pZte6ciIrA4uAJTJ66MvFAFiVDSTN3SurPQwKDEAl2oiMPBjd5Pfa%2F7%2Bsiz9YAszQzCmi1Xt7%2FbNOOtvPtSbiC88eSZFJLB6n%2BBAcuY6zbwVXZCyQH%2Bko0tX%2FB2wccwdxImR1NOi34MgF6DtU%2BXSCrJVqBS5c1vo5%2FD2Jdg%2BTBx9riTkjl35Wiv2l7HWBeGh8tsgGM3LvCCW%2BOCMNy6myDChxwWb6gE4AvewnmVsAyIj%2BzzZGzxDyIaY6AkThIovYvO07p4KfqnsJDEpma6HD4LQqJda3H3vimVqRymzcaLUA%2BizgoS1VngGPTR37K9LE1KuKwWanmQ44%2FJA%2F0SylGUkng%2BevRoL588DeRQT6Gre8qzQRJXfEDS23%2FtExcqCmYe4hPrUA30KaNQycAkzX7bs4720WyChrTZHbxYA4%2BeJ7nQJrOnqlFdbczG2MkRG5Lln5efwsxwhU2YsDMAlW%2Fyhftut6STBoIboHWH%2BlrCcFxYms5%2Fk0CraBy9fuN%2BPFMZbjQbGW1YFAruKYx0T90WgEh0FJHAvR2lbRqzZjkmYr%2BzhDhXmg6cAsWEodqkkXt%2Fj93Em8cm55zrkeEEqHOqgVKnLc7ZKqncb4EwqY3DvgY6pgF0NRxVjJ8hk9GmCGXWtmI8huzBjXVlQ38Ux4WjoFs4%2BtsoTPiNL4bpa8%2BtYzaT1f9HAUBCEMwd1QwNfriUUuM3zt%2Fku80xA470i0fCGk4A2Pccu2qFJWwy7kH3ZQoYa%2Fy61xLauhamFCnm7h%2Fwba1jI9hSFi%2BCgjKnhdJkwbhcR0el4YCqfkaHU21vieD6%2Funn7XNml7%2BF5A33zFQKh%2B10A0nJNsqo&X-Amz-Signature=113a327cddb20b242b6e264cca30a31eb09a6f30d4b012eb4ebc3e3e981b356f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMWJDWF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEzf%2FPrYK0GLylG%2Bo3%2FNtpINVcINnJrZIeg6sos4OhzNAiBXSi6wGPkzAJyBb2Gp9c9gBjDJc%2F%2BqHxGp%2BzlODdupYyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvvelNBFcd0MCtO4MKtwDyri2YUN8GxJkjcKqDe095pZte6ciIrA4uAJTJ66MvFAFiVDSTN3SurPQwKDEAl2oiMPBjd5Pfa%2F7%2Bsiz9YAszQzCmi1Xt7%2FbNOOtvPtSbiC88eSZFJLB6n%2BBAcuY6zbwVXZCyQH%2Bko0tX%2FB2wccwdxImR1NOi34MgF6DtU%2BXSCrJVqBS5c1vo5%2FD2Jdg%2BTBx9riTkjl35Wiv2l7HWBeGh8tsgGM3LvCCW%2BOCMNy6myDChxwWb6gE4AvewnmVsAyIj%2BzzZGzxDyIaY6AkThIovYvO07p4KfqnsJDEpma6HD4LQqJda3H3vimVqRymzcaLUA%2BizgoS1VngGPTR37K9LE1KuKwWanmQ44%2FJA%2F0SylGUkng%2BevRoL588DeRQT6Gre8qzQRJXfEDS23%2FtExcqCmYe4hPrUA30KaNQycAkzX7bs4720WyChrTZHbxYA4%2BeJ7nQJrOnqlFdbczG2MkRG5Lln5efwsxwhU2YsDMAlW%2Fyhftut6STBoIboHWH%2BlrCcFxYms5%2Fk0CraBy9fuN%2BPFMZbjQbGW1YFAruKYx0T90WgEh0FJHAvR2lbRqzZjkmYr%2BzhDhXmg6cAsWEodqkkXt%2Fj93Em8cm55zrkeEEqHOqgVKnLc7ZKqncb4EwqY3DvgY6pgF0NRxVjJ8hk9GmCGXWtmI8huzBjXVlQ38Ux4WjoFs4%2BtsoTPiNL4bpa8%2BtYzaT1f9HAUBCEMwd1QwNfriUUuM3zt%2Fku80xA470i0fCGk4A2Pccu2qFJWwy7kH3ZQoYa%2Fy61xLauhamFCnm7h%2Fwba1jI9hSFi%2BCgjKnhdJkwbhcR0el4YCqfkaHU21vieD6%2Funn7XNml7%2BF5A33zFQKh%2B10A0nJNsqo&X-Amz-Signature=1c99f01c22723abb87e139143debac3c441dd663acc360b1375af2ee5bbd38ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
