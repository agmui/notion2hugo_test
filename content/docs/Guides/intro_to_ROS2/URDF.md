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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FRW2C4O%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDGlGMIiZ8fG2Js69xZW%2B4E3c8hs9IxAoKer5jZkSMUhgIgS4R%2B7K4V5oYBhYzDHPq8S0iHnWnW18Dl6ljdRaf48VUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGGzzm4buaB5E8YkPyrcA%2BzaO8JBGScYXcCGdM1t%2FtiqD%2FvzdL0JuEPGJEsdX87uHC1jPZj1b173Mq8N0PSlNfh7zNlZ7KgMuOFj4Y9vD42AQX%2BBRdyZLS58SIR45tz1p5aT0VaIQqiXACIPsMi6WpbBo97caMXUS8o71eue%2B2EEWMLVpS4OzMbgXRP1MvyjkkJybvJaRgPjwJG0XAztEFKGa5L4b%2Bb9mpqqNYh1DGs12VB4zkTGXnv%2BPszJlfODbydJdpPHdotiUyQjf4xEVnWraOkgU20GnDZ12enfQkx6xEKwzLHS%2F15Z454gvPdQoHO7XyD30mCfJl8LxiooNhoUzyIps6jzdTZAyXHZv6T9W%2FlKWU2jUWPwMn0kwf54NJQEmrsUa9PSmXbQNpW2iV%2Bf%2FTUjxW1%2B5IKXziPf8Yz8abv0GXnwyfR29bVcPa7VfDwUeQjo9H4HraOtyG%2FU4EpwapDuMnEpMtYD52zO4jldyqbmjnMid0VM7Un9oAsFvCbkkXD1NWhiBy0zvz0oGnavndOvFNddRxX7UMDJjs360F3%2Felix%2Fasj5PL4rYiRrEJB4zL8hQIEwolFYczNtaF57ASsjHdQE0cUve01hrHxpzPvEKOQsEnHcmETGgQ%2BJPkKRuf8dRKhNUB5MNegl8EGOqUBT7rhsTMY9Pu2v2u2qcTUdVIm4sGRZUFzAWdRPH%2BnxahNcJyIg%2FKCiFLdzmoHyni%2Fx8cwS9U2wjCIitzvNJvUGAh15h%2BqI8qDWggUUXXY%2Beq1opHKA1g0EWDnKzAZRxNFKCekLnSeqePGFdstk8gT%2Brvu5dzs66sIwIAuRxFL%2FRKl8ztZbIdOEobd3RSpBQgwu949WcX2h88FksAj0J7vRKe3wJbX&X-Amz-Signature=f3a372788a4314edf747f27d74784df96392f3403e75ca3dd4c1dd6755b95333&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FRW2C4O%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDGlGMIiZ8fG2Js69xZW%2B4E3c8hs9IxAoKer5jZkSMUhgIgS4R%2B7K4V5oYBhYzDHPq8S0iHnWnW18Dl6ljdRaf48VUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGGzzm4buaB5E8YkPyrcA%2BzaO8JBGScYXcCGdM1t%2FtiqD%2FvzdL0JuEPGJEsdX87uHC1jPZj1b173Mq8N0PSlNfh7zNlZ7KgMuOFj4Y9vD42AQX%2BBRdyZLS58SIR45tz1p5aT0VaIQqiXACIPsMi6WpbBo97caMXUS8o71eue%2B2EEWMLVpS4OzMbgXRP1MvyjkkJybvJaRgPjwJG0XAztEFKGa5L4b%2Bb9mpqqNYh1DGs12VB4zkTGXnv%2BPszJlfODbydJdpPHdotiUyQjf4xEVnWraOkgU20GnDZ12enfQkx6xEKwzLHS%2F15Z454gvPdQoHO7XyD30mCfJl8LxiooNhoUzyIps6jzdTZAyXHZv6T9W%2FlKWU2jUWPwMn0kwf54NJQEmrsUa9PSmXbQNpW2iV%2Bf%2FTUjxW1%2B5IKXziPf8Yz8abv0GXnwyfR29bVcPa7VfDwUeQjo9H4HraOtyG%2FU4EpwapDuMnEpMtYD52zO4jldyqbmjnMid0VM7Un9oAsFvCbkkXD1NWhiBy0zvz0oGnavndOvFNddRxX7UMDJjs360F3%2Felix%2Fasj5PL4rYiRrEJB4zL8hQIEwolFYczNtaF57ASsjHdQE0cUve01hrHxpzPvEKOQsEnHcmETGgQ%2BJPkKRuf8dRKhNUB5MNegl8EGOqUBT7rhsTMY9Pu2v2u2qcTUdVIm4sGRZUFzAWdRPH%2BnxahNcJyIg%2FKCiFLdzmoHyni%2Fx8cwS9U2wjCIitzvNJvUGAh15h%2BqI8qDWggUUXXY%2Beq1opHKA1g0EWDnKzAZRxNFKCekLnSeqePGFdstk8gT%2Brvu5dzs66sIwIAuRxFL%2FRKl8ztZbIdOEobd3RSpBQgwu949WcX2h88FksAj0J7vRKe3wJbX&X-Amz-Signature=1a51344ba0f957e6de0732e2f023648b5d18cbd0a60db7fac23a12e4d2b00f26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
