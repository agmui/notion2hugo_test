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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67ZNNPQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIEAGy1ohypOaaC%2BFuyZKSjNGqIbAv7i3pYTkl8W9%2BzedAiAe3fUEbMhAVh6xTcgTZsOdva2HJ9IoHwOixRjq7%2BRmsCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdyvIxdtVufKF%2BL46KtwDDS8xi9KEMhc0Ndi03CbeOuFaf%2BpiyNXbogXVtVvceyaAa1khRbOPp5vXRHpUckMPfhKZKQyPCNmjmxoHSrLT0UwI%2FTSfWA5VvbRTRh6d0bYovGazO9%2BOQtVOmpGg2JJq924KkAHLi7OVm7hNwm99Ux4Gp6HhPV7CJjTZa3ZIOvW49eiT1nykWENZk5dDF5tY7Z0v8GLxq1krUf1bxiDtowdsehU6CaxlnMgCbahL0v7ekCHJPghY6TlRGNCWNKDPOHpwvzh6ddGifzPSoc9%2BY1ct5Yif%2FCheSRYAgxk3Pjy%2BmTKHFNkNBEX3o0xqwGn8U6mFV7Fjjre3IERlTlLAAlT799bHHqBitxlim1bS7LLCy03SQ66QLA0JZ6pmjWx9DozkK3tfKPqn7Rb9YrdXj4%2BBDTqQk4TuBi78csWVWkFY3Q3GJycDT8iWsMrg2hiO64Oso3aujHbe22MjhMmcSsaqyNaKssA%2Fz9gbqF%2BBHcALyLrFPoMNHlT2ex7XL%2FXYDGlAtpua0g0sMXA4gU%2B5PuA4XsREAy%2BRiWPjblbLE352oTXIWd1LFJyA17jhg8423YRIpPQ1X0yFNJIiZKZiOyVr0B3kL7bvEXJCLh0apntpDLeRGO8fBea2pxow7su9vgY6pgFDIQqQD06DWA%2BxGUoG3aDuwKqDoZVFsf6AQ6S8e5Ty1xSUXXI3d7eTU82ADOEzFd1tmMDqDkkAdkWgp69BTzmwC2CYUwEb30zk%2FQWwsIkAAlZHsd0ZuhE2n%2BE5dIBvjkbqcVlkPoyYYzN8C8unE42Zb0bjvzwOxKn3nsxt3i4idnrV6Sk5lfyT%2F9oc%2BhMQ6e9%2FF0dM1hcdBn%2BbjURX4wYMealqVRP5&X-Amz-Signature=619563b929cd648eb28d7afd52d864051e47dfcb51ba3024701fb4ae246771b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67ZNNPQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIEAGy1ohypOaaC%2BFuyZKSjNGqIbAv7i3pYTkl8W9%2BzedAiAe3fUEbMhAVh6xTcgTZsOdva2HJ9IoHwOixRjq7%2BRmsCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdyvIxdtVufKF%2BL46KtwDDS8xi9KEMhc0Ndi03CbeOuFaf%2BpiyNXbogXVtVvceyaAa1khRbOPp5vXRHpUckMPfhKZKQyPCNmjmxoHSrLT0UwI%2FTSfWA5VvbRTRh6d0bYovGazO9%2BOQtVOmpGg2JJq924KkAHLi7OVm7hNwm99Ux4Gp6HhPV7CJjTZa3ZIOvW49eiT1nykWENZk5dDF5tY7Z0v8GLxq1krUf1bxiDtowdsehU6CaxlnMgCbahL0v7ekCHJPghY6TlRGNCWNKDPOHpwvzh6ddGifzPSoc9%2BY1ct5Yif%2FCheSRYAgxk3Pjy%2BmTKHFNkNBEX3o0xqwGn8U6mFV7Fjjre3IERlTlLAAlT799bHHqBitxlim1bS7LLCy03SQ66QLA0JZ6pmjWx9DozkK3tfKPqn7Rb9YrdXj4%2BBDTqQk4TuBi78csWVWkFY3Q3GJycDT8iWsMrg2hiO64Oso3aujHbe22MjhMmcSsaqyNaKssA%2Fz9gbqF%2BBHcALyLrFPoMNHlT2ex7XL%2FXYDGlAtpua0g0sMXA4gU%2B5PuA4XsREAy%2BRiWPjblbLE352oTXIWd1LFJyA17jhg8423YRIpPQ1X0yFNJIiZKZiOyVr0B3kL7bvEXJCLh0apntpDLeRGO8fBea2pxow7su9vgY6pgFDIQqQD06DWA%2BxGUoG3aDuwKqDoZVFsf6AQ6S8e5Ty1xSUXXI3d7eTU82ADOEzFd1tmMDqDkkAdkWgp69BTzmwC2CYUwEb30zk%2FQWwsIkAAlZHsd0ZuhE2n%2BE5dIBvjkbqcVlkPoyYYzN8C8unE42Zb0bjvzwOxKn3nsxt3i4idnrV6Sk5lfyT%2F9oc%2BhMQ6e9%2FF0dM1hcdBn%2BbjURX4wYMealqVRP5&X-Amz-Signature=039daccfafc9b1d7b256f3e80095f5a37ade6b233a2eb416fd18a833a2989fed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
