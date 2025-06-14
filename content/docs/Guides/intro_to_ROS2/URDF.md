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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD73BSYH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIESpVUT3MRnPi5KuD9F2vlFIwujD5c2a8OUtPXYgrqJOAiB2NTOu7xK5%2FmxOZRSqi4QWeOEojE8zHsRZqYDCmSEM7Sr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMa0gTWgJqNRyLJjQHKtwDj24ZRHxLdvx8iImZkxIpSLawaGj%2FGc65U5PSGNzWSXthSP2CroMa1BNgSH%2FxCHhT5AHfzboE7zbhfIjmP1IJLXHIbU%2BYiW5sx5MvXZu3kAXVs30FajTZUg08xHXx3eU49HcxlC6FUwXi2hymeCYobusqo6SVEKPRTl4d7yqV2v%2BmFp0QA3HSTe1DioCOUiO1t0uItw8VMtaxOYfHoNXelqn2CEz56AFe3Oh4VkWcNwCCFSpF0ordhvcMCIhHOHKzFSE3oIYpOs6kgcUNM9pPD5hZo6MjY35FhLQy2Y2QBSZ02BrUbcSircytHE7S5Pr5eZOAhEaXKGfaiEKc7lu%2FiU9HgwrA5cTgXvGAbngLrY9UmFoTEgXDkk%2FW1GC5gSF0XQPM97RqxrOT0jsWYWNOTY8KR0QhdTwxqrkihxcKlC0%2B01YuCjlK63JLuadIgrqABsgy92cqpT%2FnNmnzJoxjFJ9Vqiz04bI2c8cENPd8GGoUUwOi6WxqJk51guslNxlKFKwDZfu%2Bbyqyz8fER5lhx7QiWsflFfSrT5GOZRXObNqk4cA3QcB0PG%2BczruWMZk6uYZruxto6i8ZAnO%2BLc3NKMdcPD1o0BxcqSBFBrMqBohaXXqyecV5MfxT3mcw9qS3wgY6pgFuKL9dSirk7N3D6lHGPokXY4JnGSGF5vn6Q%2B0%2BZMrIOx3OBTkpkbqRzIwsh8E5nxtt9kBKeR2qWCDRJN4Vk0ZhrgX7bbqK2Pk3wAmsJFQP02WWc%2B8Ue7yn0dB0wBNmFRj1Mth6vUlrks4GxLMMT49vkWu06YlHIQIFMhk0c1t0%2F2rgvUN8G9GHlSyMXRvuzwQeYGSO48NRaMdpKd7vWeDxhTZk%2Fl9Y&X-Amz-Signature=14eaeed742d509233d6cdd528b978ab514f9d03b735bbf1a460b42425ca500b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD73BSYH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIESpVUT3MRnPi5KuD9F2vlFIwujD5c2a8OUtPXYgrqJOAiB2NTOu7xK5%2FmxOZRSqi4QWeOEojE8zHsRZqYDCmSEM7Sr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMa0gTWgJqNRyLJjQHKtwDj24ZRHxLdvx8iImZkxIpSLawaGj%2FGc65U5PSGNzWSXthSP2CroMa1BNgSH%2FxCHhT5AHfzboE7zbhfIjmP1IJLXHIbU%2BYiW5sx5MvXZu3kAXVs30FajTZUg08xHXx3eU49HcxlC6FUwXi2hymeCYobusqo6SVEKPRTl4d7yqV2v%2BmFp0QA3HSTe1DioCOUiO1t0uItw8VMtaxOYfHoNXelqn2CEz56AFe3Oh4VkWcNwCCFSpF0ordhvcMCIhHOHKzFSE3oIYpOs6kgcUNM9pPD5hZo6MjY35FhLQy2Y2QBSZ02BrUbcSircytHE7S5Pr5eZOAhEaXKGfaiEKc7lu%2FiU9HgwrA5cTgXvGAbngLrY9UmFoTEgXDkk%2FW1GC5gSF0XQPM97RqxrOT0jsWYWNOTY8KR0QhdTwxqrkihxcKlC0%2B01YuCjlK63JLuadIgrqABsgy92cqpT%2FnNmnzJoxjFJ9Vqiz04bI2c8cENPd8GGoUUwOi6WxqJk51guslNxlKFKwDZfu%2Bbyqyz8fER5lhx7QiWsflFfSrT5GOZRXObNqk4cA3QcB0PG%2BczruWMZk6uYZruxto6i8ZAnO%2BLc3NKMdcPD1o0BxcqSBFBrMqBohaXXqyecV5MfxT3mcw9qS3wgY6pgFuKL9dSirk7N3D6lHGPokXY4JnGSGF5vn6Q%2B0%2BZMrIOx3OBTkpkbqRzIwsh8E5nxtt9kBKeR2qWCDRJN4Vk0ZhrgX7bbqK2Pk3wAmsJFQP02WWc%2B8Ue7yn0dB0wBNmFRj1Mth6vUlrks4GxLMMT49vkWu06YlHIQIFMhk0c1t0%2F2rgvUN8G9GHlSyMXRvuzwQeYGSO48NRaMdpKd7vWeDxhTZk%2Fl9Y&X-Amz-Signature=e23d7cd6c67294baba93aeb80ab8f9af9bd9888d817226d852c7b8a51a0da7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
