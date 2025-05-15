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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KBNRM4%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD5FmKQw3bVvCecdPgfE34cyCRSCjvTqVCebnCWPqO%2FDAIgcj3PiHIqv8qK5L6ZToZxBDy8dl%2B0W6Kwdnu523NL9a0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJfkZyod5ZFEuOEzDircAwxjzZPSBk4qK5wrefKeBeqp64aqwLNckTld%2Fl0nwkua2I1ZCExMwUiLG579tefgaxDAWQobCAGWA7kDTpLZXo6wm9nKIUmH71N1r09nEdD3oCwquSWD7LTn4kmCqfoBM4Hnu5g47exx9lVR6G2xBzxJ6LxP19UFUSjiJsjKdHQK9a5cT937F0RYnABekMELXg9vjfAASWQUswY4ONQCs0rcoPdvo%2BW9roK0TGMnPENifD19%2FKHMKiIX28pQwgdcGHwq1eeJQkcbNf%2FQRRcYNupEugLzUGPN9srpe69TjiUQQlmip9fQm4Njm5727nCHq%2FljT5wSb2aJPVVtOwnBkZUcJw0rKzYqHox7KlCoTqkfKLixQyvl1TmJnqqHFbMjTJtyxZyBOhD6iinwmaQSbKmP1jfQD0nGm69VUrXWqzVBmNynL5VoXEivjMhMeaT03ee3MEPLcyHvUnH2CT%2BhQVrfiyUIlNB3gMPCgMpX%2BUQGr8m8g%2FG6axWDz8qXL8cHAQmkVeTy3zO8Vh%2FnLBcztxqjJcsak64NvnfbXTXfSEKT4RBltUAhTdnfHchT0Hhk6Xa%2BT5bn9UAj%2FN%2BZmziH0RToOJo6v3JxpsMdoiuHRc7BlV8EZXFAu800%2B0seMJTslMEGOqUB3vQNwIz5L6UnPugIo%2B1Wgr2cjChUxCk7bQst5gee%2BecE2Qlmasvt%2FZt4F1a8peDhy16go1xXhGKlCRZouPk65vSLeMbTHeyQjnqQpvl2krT7PHjKmUHAGcbcmVjOl%2B8o1DovATq2tin1tVGa16Ewv4fDX%2B%2BMi0zj1BZUHLuTdO6JhiFb0cA7UNl1WME6uVyoV7PQcd1eNYFw8nrwBW4n6tkWW5DW&X-Amz-Signature=7d44f3c8f71f5a86c99570c623b9fdce5fb5c5a376bceb537d28fb53218601cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KBNRM4%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD5FmKQw3bVvCecdPgfE34cyCRSCjvTqVCebnCWPqO%2FDAIgcj3PiHIqv8qK5L6ZToZxBDy8dl%2B0W6Kwdnu523NL9a0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJfkZyod5ZFEuOEzDircAwxjzZPSBk4qK5wrefKeBeqp64aqwLNckTld%2Fl0nwkua2I1ZCExMwUiLG579tefgaxDAWQobCAGWA7kDTpLZXo6wm9nKIUmH71N1r09nEdD3oCwquSWD7LTn4kmCqfoBM4Hnu5g47exx9lVR6G2xBzxJ6LxP19UFUSjiJsjKdHQK9a5cT937F0RYnABekMELXg9vjfAASWQUswY4ONQCs0rcoPdvo%2BW9roK0TGMnPENifD19%2FKHMKiIX28pQwgdcGHwq1eeJQkcbNf%2FQRRcYNupEugLzUGPN9srpe69TjiUQQlmip9fQm4Njm5727nCHq%2FljT5wSb2aJPVVtOwnBkZUcJw0rKzYqHox7KlCoTqkfKLixQyvl1TmJnqqHFbMjTJtyxZyBOhD6iinwmaQSbKmP1jfQD0nGm69VUrXWqzVBmNynL5VoXEivjMhMeaT03ee3MEPLcyHvUnH2CT%2BhQVrfiyUIlNB3gMPCgMpX%2BUQGr8m8g%2FG6axWDz8qXL8cHAQmkVeTy3zO8Vh%2FnLBcztxqjJcsak64NvnfbXTXfSEKT4RBltUAhTdnfHchT0Hhk6Xa%2BT5bn9UAj%2FN%2BZmziH0RToOJo6v3JxpsMdoiuHRc7BlV8EZXFAu800%2B0seMJTslMEGOqUB3vQNwIz5L6UnPugIo%2B1Wgr2cjChUxCk7bQst5gee%2BecE2Qlmasvt%2FZt4F1a8peDhy16go1xXhGKlCRZouPk65vSLeMbTHeyQjnqQpvl2krT7PHjKmUHAGcbcmVjOl%2B8o1DovATq2tin1tVGa16Ewv4fDX%2B%2BMi0zj1BZUHLuTdO6JhiFb0cA7UNl1WME6uVyoV7PQcd1eNYFw8nrwBW4n6tkWW5DW&X-Amz-Signature=c696f4da36d0636aaa6fc3fff071aa74fd931cce2e87c73e5525350dd3123d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
