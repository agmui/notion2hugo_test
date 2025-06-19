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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH72HJMD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpSxGqFJEOSj5WLmpD9%2Bzx7UFAovo07leeCWjOmlpEQAiEAuM7OEBlXhTP1VrjJcAiAx%2BlJEzUbeAi7GWywtKwhDscqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqgHKOJOGr3lB10CSrcAxKEd%2FpheS7T%2F3aSj2fhs1uX2xK6dCI7HvLrJKYOE7GIChtBJCkS9HNAoSE3yCKHRT%2FtlXNlvRoKH5GDUK9Tvl79j6HV%2B1TTJj9jrJ6sA18dg%2Fni%2BmQqoenrUqN3sLa5FCCrJ9xsK%2BVnMqvKS4HYYXjhymHcgU8jIGSgXIysIFc3qyV%2FyBsHs%2BhEebcKB8qv9PyfUhiBzaZfSMC1nyu738lrn6qe78JJDLPgdakTnWCIV1xebKsZGv8rbVLX%2BfWNVm9fNN4ogB4e3DRAoGeSENscHW%2BIw5nJZ30h7TAOXGxAt22oyVxUM9G%2B%2BAjhbEOAUq8j7B2pPVgCYlilDLTipkGF1NXGtEYo866DPrOWn2fhJS6jjog4CjBg3oAwtGzyLza0UHOqBaLYbKZAFlGhN5p1ZKXyyahNXAr4zWekdaJiMK4q%2BRP4qWltOSPLFf4WQVfe8rFeaNqs3KXvnuPQohRO1xC9rODDfHZBQRrWdX49dRisoxeTweuZchJIc9GdRWGp0hX0yW3trpCWoIcMMEVhFMhwiT2KYX8RBFqqs794eefKhlMNWNZ24TAIv9VngobS0Fe%2B2whjC9MMHvbf588%2BN5Cd7z063cFTWSD6LqY88D8YmMgZqFkXni1UML2I0MIGOqUBrUGmaY%2BqM0J%2FTN%2BG49fwzwB4Xr%2BN5g52B3oCBizv1GqLtqppTjVPhlEUI%2F%2BIE%2FmNcSL%2FZW%2FCPxiJRznCKNqfm0RfVXb9RG8SxF3NNGyq3Sq446lecgAn77w%2FLbIWOFdeQ05pCdnhGkcBdxru7Cn%2FEYb13CIRbB6iTnWrut7gT00t362Z4VB2Z5jCar3ljW20mZkyVO8%2B40Z16tuxjbcpbynnifH4&X-Amz-Signature=5f8745d5b83f13ecfe57cd032fc7c5e384995476c0f9738a8a50d1dfc064782e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH72HJMD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpSxGqFJEOSj5WLmpD9%2Bzx7UFAovo07leeCWjOmlpEQAiEAuM7OEBlXhTP1VrjJcAiAx%2BlJEzUbeAi7GWywtKwhDscqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqgHKOJOGr3lB10CSrcAxKEd%2FpheS7T%2F3aSj2fhs1uX2xK6dCI7HvLrJKYOE7GIChtBJCkS9HNAoSE3yCKHRT%2FtlXNlvRoKH5GDUK9Tvl79j6HV%2B1TTJj9jrJ6sA18dg%2Fni%2BmQqoenrUqN3sLa5FCCrJ9xsK%2BVnMqvKS4HYYXjhymHcgU8jIGSgXIysIFc3qyV%2FyBsHs%2BhEebcKB8qv9PyfUhiBzaZfSMC1nyu738lrn6qe78JJDLPgdakTnWCIV1xebKsZGv8rbVLX%2BfWNVm9fNN4ogB4e3DRAoGeSENscHW%2BIw5nJZ30h7TAOXGxAt22oyVxUM9G%2B%2BAjhbEOAUq8j7B2pPVgCYlilDLTipkGF1NXGtEYo866DPrOWn2fhJS6jjog4CjBg3oAwtGzyLza0UHOqBaLYbKZAFlGhN5p1ZKXyyahNXAr4zWekdaJiMK4q%2BRP4qWltOSPLFf4WQVfe8rFeaNqs3KXvnuPQohRO1xC9rODDfHZBQRrWdX49dRisoxeTweuZchJIc9GdRWGp0hX0yW3trpCWoIcMMEVhFMhwiT2KYX8RBFqqs794eefKhlMNWNZ24TAIv9VngobS0Fe%2B2whjC9MMHvbf588%2BN5Cd7z063cFTWSD6LqY88D8YmMgZqFkXni1UML2I0MIGOqUBrUGmaY%2BqM0J%2FTN%2BG49fwzwB4Xr%2BN5g52B3oCBizv1GqLtqppTjVPhlEUI%2F%2BIE%2FmNcSL%2FZW%2FCPxiJRznCKNqfm0RfVXb9RG8SxF3NNGyq3Sq446lecgAn77w%2FLbIWOFdeQ05pCdnhGkcBdxru7Cn%2FEYb13CIRbB6iTnWrut7gT00t362Z4VB2Z5jCar3ljW20mZkyVO8%2B40Z16tuxjbcpbynnifH4&X-Amz-Signature=fd542d6dc1d311cd7aa1325cc11226649d319b8a8c4d2592c39e0826c8ea0cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
